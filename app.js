/* =========================================================================
   QCM CPFAE — Application (vanilla JS, sans build)
   -------------------------------------------------------------------------
   Persistance : couche `Store` calquée sur l'API window.storage (get/set/
   list) afin de rester portable. Ici elle s'appuie sur localStorage, seul
   stockage persistant disponible pour une web app locale. Pour porter vers
   un artifact claude.ai, il suffit de remplacer le corps de Store par
   window.storage.
   Clés utilisées :
     cpfae:currentUser              -> pseudo courant
     cpfae:users                    -> liste des pseudos connus
     progress:{pseudo}:{module}     -> progression + historique des tentatives
   ========================================================================= */

(function () {
  "use strict";

  /* ----------------------------- Store ---------------------------------- */
  const Store = {
    _k(key) { return "cpfae::" + key; },
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(this._k(key));
        return raw == null ? (fallback ?? null) : JSON.parse(raw);
      } catch (e) { return fallback ?? null; }
    },
    set(key, value) {
      try { localStorage.setItem(this._k(key), JSON.stringify(value)); }
      catch (e) { console.warn("Store.set échoué", e); }
    },
    remove(key) { try { localStorage.removeItem(this._k(key)); } catch (e) {} },
    list(prefix) {
      const out = [];
      const full = this._k(prefix);
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith(full)) out.push(k.slice(this._k("").length));
      }
      return out;
    },
  };

  /* --------------------------- Utilitaires ------------------------------ */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const app = $("#app");
  const LETTERS = ["A", "B", "C", "D", "E", "F"];
  const DIFF_LABEL = { facile: "Facile", moyen: "Moyen", difficile: "Difficile" };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => (
      { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
    ));
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function initials(name) {
    const parts = name.trim().split(/\s+/);
    return ((parts[0]?.[0] || "") + (parts[1]?.[0] || parts[0]?.[1] || "")).toUpperCase();
  }
  function todayISO() { return new Date().toISOString().slice(0, 10); }
  function fmtDate(iso) {
    try {
      return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" });
    } catch (e) { return iso; }
  }
  function fmtTime(sec) {
    const m = Math.floor(sec / 60), s = sec % 60;
    return m + ":" + String(s).padStart(2, "0");
  }

  let toastTimer = null;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 1900);
  }

  /* --------------------------- Données ---------------------------------- */
  const ALL = Array.isArray(window.QUESTIONS) ? window.QUESTIONS : [];
  const META = window.MODULES_META || {};

  function modules() {
    const names = [...new Set(ALL.map((q) => q.module))];
    names.sort((a, b) => (META[a]?.ordre || 99) - (META[b]?.ordre || 99) || a.localeCompare(b));
    return names.map((name) => ({
      name,
      icone: META[name]?.icone || "📘",
      description: META[name]?.description || "",
      questions: ALL.filter((q) => q.module === name),
    }));
  }
  function moduleByName(name) { return modules().find((m) => m.name === name) || null; }
  function themesOf(name) { return [...new Set(ALL.filter((q) => q.module === name).map((q) => q.theme))]; }
  function countByDiff(name, diff) {
    return ALL.filter((q) => q.module === name && (diff === "mixte" || q.difficulte === diff)).length;
  }

  /* ------------------------- Progression -------------------------------- */
  function progKey(user, mod) { return "progress:" + user + ":" + mod; }
  function emptyProgress() { return { perQuestion: {}, attempts: [] }; }
  function getProgress(user, mod) { return Store.get(progKey(user, mod), null) || emptyProgress(); }
  function saveProgress(user, mod, p) { Store.set(progKey(user, mod), p); }

  // % de questions maîtrisées = dernière réponse correcte
  function masteredCount(prog, mod) {
    const ids = ALL.filter((q) => q.module === mod).map((q) => q.id);
    return ids.filter((id) => prog.perQuestion[id]?.lastCorrect).length;
  }
  function lastAttempt(prog) { return prog.attempts.length ? prog.attempts[prog.attempts.length - 1] : null; }

  function recordAnswer(prog, qid, correct) {
    const e = prog.perQuestion[qid] || { seen: 0, correct: 0, wrong: 0, lastCorrect: false };
    e.seen += 1;
    if (correct) { e.correct += 1; e.lastCorrect = true; }
    else { e.wrong += 1; e.lastCorrect = false; }
    prog.perQuestion[qid] = e;
  }

  /* ------------------------------ État ---------------------------------- */
  const State = {
    user: null,
    module: null,           // nom du module en cours
    config: null,           // { difficulte, count, timer, onlyWrong }
    session: null,          // { list, index, answers, startedAt }
    timerId: null,
    qDeadline: 0,
  };
  const QUESTION_SECONDS = 30;

  /* --------------------------- Routeur ---------------------------------- */
  function stopTimer() {
    if (State.timerId) { clearInterval(State.timerId); State.timerId = null; }
  }
  function setScreen(html) {
    stopTimer();
    app.innerHTML = html;
    app.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  function appbar(opts = {}) {
    const u = State.user;
    const chip = u
      ? `<button class="userchip" id="userMenuBtn" title="Changer d'utilisateur">
           <span class="avatar">${esc(initials(u))}</span>
           <span class="name">${esc(u)}</span>
         </button>`
      : "";
    return `<header class="appbar">
      <div class="brand"><span class="logo">🎓</span><span>QCM CPFAE</span></div>
      <div class="spacer"></div>
      ${chip}
    </header>`;
  }

  function bindAppbar() {
    const b = $("#userMenuBtn");
    if (b) b.addEventListener("click", () => {
      if (confirm("Changer d'utilisateur ? Votre progression reste enregistrée sous « " + State.user + " ».")) {
        Store.remove("currentUser");
        State.user = null; State.module = null;
        renderHome();
      }
    });
  }

  /* --------------------------- Écran Accueil ---------------------------- */
  function knownUsers() { return Store.get("users", []) || []; }
  function rememberUser(name) {
    const list = knownUsers().filter((u) => u.toLowerCase() !== name.toLowerCase());
    list.unshift(name);
    Store.set("users", list.slice(0, 8));
  }

  function renderHome() {
    const recent = knownUsers();
    const recentHtml = recent.length
      ? `<div class="recent">
           <div class="section-label">Reprendre avec un pseudo</div>
           ${recent.map((u) => {
             let mastered = 0, total = 0;
             modules().forEach((m) => {
               const p = getProgress(u, m.name);
               mastered += masteredCount(p, m.name); total += m.questions.length;
             });
             const pct = total ? Math.round((mastered / total) * 100) : 0;
             return `<button class="recent-user" data-user="${esc(u)}">
               <span class="avatar">${esc(initials(u))}</span>
               <span class="meta"><span class="n">${esc(u)}</span>
                 <span class="s">${pct}% maîtrisé · ${mastered}/${total} questions</span></span>
               <span class="go">›</span>
             </button>`;
           }).join("")}
         </div>`
      : "";

    setScreen(`
      <header class="appbar"><div class="brand"><span class="logo">🎓</span><span>QCM CPFAE</span></div></header>
      <main class="screen">
        <div class="hero">
          <span class="badge">⚖️ Fonction Publique · Session 2026</span>
          <div class="biglogo">🎓</div>
          <h1 class="h1">Réviser en toute confiance</h1>
          <p class="sub">Entraînez-vous module par module, à votre rythme. Votre progression est enregistrée sur cet appareil.</p>
        </div>
        <div class="field">
          <label for="pseudo">Votre pseudo</label>
          <input class="input" id="pseudo" type="text" inputmode="text" autocomplete="off"
                 placeholder="Ex. Aya, Konan, Auditeur12…" maxlength="24" />
        </div>
        <div style="margin-top:14px">
          <button class="btn btn-primary" id="startBtn">Commencer &nbsp;→</button>
        </div>
        <p class="helper">Pas d'inscription, pas de mot de passe. Un simple pseudo suffit.</p>
        ${recentHtml}
        <div class="footnote">CPFAE / AGC — Déontologie de la Fonction Publique</div>
      </main>
    `);

    const input = $("#pseudo");
    const submit = () => {
      const name = input.value.trim().replace(/\s+/g, " ");
      if (name.length < 2) { toast("Entrez un pseudo (2 caractères min.)"); input.focus(); return; }
      loginAs(name);
    };
    $("#startBtn").addEventListener("click", submit);
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") submit(); });
    app.querySelectorAll(".recent-user").forEach((b) =>
      b.addEventListener("click", () => loginAs(b.dataset.user))
    );
    setTimeout(() => input.focus(), 150);
  }

  function loginAs(name) {
    State.user = name;
    Store.set("currentUser", name);
    rememberUser(name);
    renderModules();
  }

  /* --------------------------- Écran Modules ---------------------------- */
  function renderModules() {
    const mods = modules();
    const cards = mods.map((m) => {
      const p = getProgress(State.user, m.name);
      const mastered = masteredCount(p, m.name);
      const total = m.questions.length;
      const pct = total ? Math.round((mastered / total) * 100) : 0;
      const last = lastAttempt(p);
      const lastTxt = last ? `Dernier score : ${last.correct}/${last.total} (${last.score}%)` : "Pas encore commencé";
      return `<button class="card module-card tappable" data-mod="${esc(m.name)}">
        <div class="top">
          <span class="mIcon">${m.icone}</span>
          <span class="mMeta">
            <span class="mName">${esc(m.name)}</span>
            <span class="mDesc">${esc(m.description)}</span>
          </span>
          <span class="chev">›</span>
        </div>
        <div class="progress"><span style="width:${pct}%"></span></div>
        <div class="progress-row"><span>${pct}% maîtrisé</span><span>${esc(lastTxt)}</span></div>
      </button>`;
    }).join("");

    setScreen(`
      ${appbar()}
      <main class="screen">
        <h1 class="h1">Bonjour ${esc(State.user)} 👋</h1>
        <p class="sub">Choisissez un module à réviser.</p>
        <div class="section-label">Modules disponibles</div>
        ${cards}
        <div class="footnote">${ALL.length} questions · ${mods.length} module(s)</div>
      </main>
    `);
    bindAppbar();
    app.querySelectorAll(".module-card").forEach((b) =>
      b.addEventListener("click", () => { State.module = b.dataset.mod; renderModuleDetail(); })
    );
  }

  /* ------------------------ Écran Détail module ------------------------- */
  // Sélections courantes pour la configuration
  const cfg = { difficulte: "mixte", count: 10, timer: false };

  function renderModuleDetail() {
    const m = moduleByName(State.module);
    const p = getProgress(State.user, State.module);
    const mastered = masteredCount(p, State.module);
    const total = m.questions.length;
    const pct = total ? Math.round((mastered / total) * 100) : 0;
    const last = lastAttempt(p);

    // Nombre de ratées disponibles
    const wrongIds = m.questions.filter((q) => p.perQuestion[q.id] && !p.perQuestion[q.id].lastCorrect).length;

    // Statistiques par thème
    const themeStats = themesOf(State.module).map((th) => {
      const qs = m.questions.filter((q) => q.theme === th);
      const seen = qs.filter((q) => p.perQuestion[q.id]);
      const good = qs.filter((q) => p.perQuestion[q.id]?.lastCorrect).length;
      const rate = qs.length ? Math.round((good / qs.length) * 100) : 0;
      return { th, rate, good, total: qs.length, seenN: seen.length };
    });

    const diffOpts = ["facile", "moyen", "difficile", "mixte"].map((d) => {
      const label = d === "mixte" ? "Mixte" : DIFF_LABEL[d];
      const desc = {
        facile: "Définitions, dates, chiffres clés",
        moyen: "Procédures et conditions",
        difficile: "Cas pratiques, exceptions",
        mixte: "Toutes difficultés mélangées",
      }[d];
      return `<button class="selectable ${cfg.difficulte === d ? "on" : ""}" data-diff="${d}">
        <span class="dot"></span>
        <span class="txt"><span class="t">${label}</span><span class="d">${desc}</span></span>
        <span class="count">${countByDiff(State.module, d)} q.</span>
      </button>`;
    }).join("");

    const countChips = [10, 20, "all"].map((c) => {
      const lab = c === "all" ? "Toutes" : c;
      return `<button class="chip ${cfg.count === c ? "on" : ""}" data-count="${c}">${lab}</button>`;
    }).join("");

    const themeHtml = themeStats.map((s) => {
      const col = s.rate >= 70 ? "var(--ok)" : s.rate >= 40 ? "var(--moyen)" : (s.seenN ? "var(--ko)" : "var(--border)");
      return `<div class="theme-stat">
        <span class="tn">${esc(s.th)}</span>
        <span class="bar"><span style="width:${s.rate}%;background:${col}"></span></span>
        <span class="tp">${s.seenN ? s.rate + "%" : "—"}</span>
      </div>`;
    }).join("");

    setScreen(`
      ${appbar()}
      <main class="screen">
        <button class="backlink" id="back">‹ Modules</button>
        <h1 class="h1">${esc(m.name)}</h1>
        <p class="sub">${esc(m.description)}</p>

        <div class="card" style="margin-top:16px">
          <div class="statgrid">
            <div class="stat"><div class="v">${pct}%</div><div class="l">Maîtrisé</div></div>
            <div class="stat"><div class="v">${last ? last.score + "%" : "—"}</div><div class="l">Dernier score</div></div>
            <div class="stat"><div class="v">${total}</div><div class="l">Questions</div></div>
          </div>
          <div class="progress" style="margin-top:16px"><span style="width:${pct}%"></span></div>
          <div class="progress-row"><span>${mastered}/${total} questions maîtrisées</span>${last ? `<span>${esc(fmtDate(last.date))}</span>` : "<span></span>"}</div>
        </div>

        <div class="section-label">Niveau de difficulté</div>
        <div class="opt-list">${diffOpts}</div>

        <div class="section-label">Nombre de questions</div>
        <div class="chips" id="countChips">${countChips}</div>

        <div class="section-label">Options</div>
        <button class="switch" id="timerSwitch">
          <span class="lab">Chronomètre <span class="d">${QUESTION_SECONDS}s par question</span></span>
          <span class="toggle ${cfg.timer ? "on" : ""}"></span>
        </button>

        <div style="margin-top:18px">
          <button class="btn btn-primary" id="startQuiz">Démarrer le quiz &nbsp;→</button>
        </div>
        ${wrongIds ? `<div style="margin-top:10px"><button class="btn btn-ghost" id="reviseWrong">🔁 Réviser mes ${wrongIds} question(s) ratée(s)</button></div>` : ""}

        <div class="section-label">Taux de réussite par thème</div>
        ${themeHtml || '<p class="sub">Aucune donnée pour l’instant.</p>'}
        <div class="footnote">Barre grise = thème pas encore travaillé.</div>
      </main>
    `);
    bindAppbar();
    $("#back").addEventListener("click", renderModules);

    app.querySelectorAll("[data-diff]").forEach((b) =>
      b.addEventListener("click", () => { cfg.difficulte = b.dataset.diff; renderModuleDetail(); })
    );
    app.querySelectorAll("[data-count]").forEach((b) =>
      b.addEventListener("click", () => {
        cfg.count = b.dataset.count === "all" ? "all" : parseInt(b.dataset.count, 10);
        renderModuleDetail();
      })
    );
    $("#timerSwitch").addEventListener("click", () => { cfg.timer = !cfg.timer; renderModuleDetail(); });
    $("#startQuiz").addEventListener("click", () => startQuiz({ onlyWrong: false }));
    const rw = $("#reviseWrong");
    if (rw) rw.addEventListener("click", () => startQuiz({ onlyWrong: true }));
  }

  /* ------------------------------ Quiz ---------------------------------- */
  function buildQuestionList(onlyWrong) {
    const m = moduleByName(State.module);
    const p = getProgress(State.user, State.module);
    let pool = m.questions.filter((q) => cfg.difficulte === "mixte" || q.difficulte === cfg.difficulte);
    if (onlyWrong) {
      pool = m.questions.filter((q) => p.perQuestion[q.id] && !p.perQuestion[q.id].lastCorrect);
    }
    pool = shuffle(pool);
    if (cfg.count !== "all" && !onlyWrong) pool = pool.slice(0, cfg.count);
    // Prépare : options mélangées avec repérage de la bonne
    return pool.map((q) => {
      const opts = shuffle(q.options.map((text, i) => ({ text, correct: i === q.bonne_reponse })));
      return { q, opts };
    });
  }

  function startQuiz({ onlyWrong }) {
    const list = buildQuestionList(onlyWrong);
    if (!list.length) { toast(onlyWrong ? "Aucune question ratée à réviser 🎉" : "Aucune question pour ce choix."); return; }
    State.config = { difficulte: cfg.difficulte, count: cfg.count, timer: cfg.timer, onlyWrong };
    State.session = { list, index: 0, answers: [], startedAt: Date.now() };
    renderQuestion();
  }

  function renderQuestion() {
    const s = State.session;
    const total = s.list.length;
    const cur = s.list[s.index];
    const q = cur.q;
    const answered = s.answers[s.index] != null;
    const pct = Math.round((s.index / total) * 100);

    const answersHtml = cur.opts.map((o, i) => `
      <button class="answer" data-i="${i}">
        <span class="key">${LETTERS[i]}</span>
        <span class="lab">${esc(o.text)}</span>
        <span class="mark"></span>
      </button>`).join("");

    setScreen(`
      ${appbar()}
      <main class="screen">
        <div class="quizbar">
          <div class="meta">
            <span>Question ${s.index + 1} / ${total}</span>
            ${State.config.timer ? `<span class="timer" id="timer">${QUESTION_SECONDS}s</span>` : `<span>${esc(State.module)}</span>`}
          </div>
          <div class="progress"><span style="width:${pct}%"></span></div>
        </div>

        <div class="card qcard">
          <div class="q-theme">
            <span class="pill pill-${q.difficulte}">${DIFF_LABEL[q.difficulte]}</span>
            <span>${esc(q.theme)}</span>
          </div>
          <div class="q-text">${esc(q.question)}</div>
          <div class="answers" id="answers">${answersHtml}</div>
          <div id="fbSlot"></div>
        </div>

        <div class="quiz-foot" id="foot"></div>
      </main>
    `);
    bindAppbar();

    const answersEl = $("#answers");
    answersEl.querySelectorAll(".answer").forEach((btn) =>
      btn.addEventListener("click", () => selectAnswer(parseInt(btn.dataset.i, 10)))
    );

    if (State.config.timer) startQuestionTimer();
  }

  function startQuestionTimer() {
    stopTimer();
    State.qDeadline = Date.now() + QUESTION_SECONDS * 1000;
    const tick = () => {
      const left = Math.max(0, Math.round((State.qDeadline - Date.now()) / 1000));
      const el = $("#timer");
      if (el) {
        el.textContent = left + "s";
        el.classList.toggle("warn", left <= 5);
      }
      if (left <= 0) { stopTimer(); selectAnswer(-1); }
    };
    tick();
    State.timerId = setInterval(tick, 250);
  }

  function selectAnswer(choiceIndex) {
    const s = State.session;
    if (s.answers[s.index] != null) return; // déjà répondu
    stopTimer();
    const cur = s.list[s.index];
    const correctIndex = cur.opts.findIndex((o) => o.correct);
    const isCorrect = choiceIndex === correctIndex;
    s.answers[s.index] = { choiceIndex, correctIndex, isCorrect, timedOut: choiceIndex === -1 };

    // Enregistre la progression immédiatement
    const p = getProgress(State.user, State.module);
    recordAnswer(p, cur.q.id, isCorrect);
    saveProgress(State.user, State.module, p);

    // Retour visuel
    const answersEl = $("#answers");
    answersEl.querySelectorAll(".answer").forEach((btn, i) => {
      btn.classList.add("locked");
      if (i === correctIndex) { btn.classList.add("correct"); $(".mark", btn).textContent = "✓"; }
      else if (i === choiceIndex) { btn.classList.add("wrong"); $(".mark", btn).textContent = "✕"; }
      else { btn.classList.add("dim"); }
    });

    const fb = $("#fbSlot");
    fb.innerHTML = `
      <div class="feedback ${isCorrect ? "ok" : "ko"}">
        <div class="fb-title">${isCorrect ? "✓ Bonne réponse" : (choiceIndex === -1 ? "⏱ Temps écoulé" : "✕ Mauvaise réponse")}</div>
        <div class="fb-exp">${esc(cur.q.explication)}</div>
      </div>`;

    const last = s.index === s.list.length - 1;
    $("#foot").innerHTML = `<button class="btn btn-primary" id="nextBtn">${last ? "Voir mes résultats" : "Question suivante →"}</button>`;
    $("#nextBtn").addEventListener("click", () => {
      if (last) { finishQuiz(); }
      else { s.index += 1; renderQuestion(); }
    });
    fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  /* ---------------------------- Résultats ------------------------------- */
  function finishQuiz() {
    const s = State.session;
    const total = s.list.length;
    const correct = s.answers.filter((a) => a && a.isCorrect).length;
    const score = Math.round((correct / total) * 100);
    const durationSec = Math.round((Date.now() - s.startedAt) / 1000);
    const wrongIds = s.list.filter((it, i) => !s.answers[i]?.isCorrect).map((it) => it.q.id);

    // Historique
    const p = getProgress(State.user, State.module);
    p.attempts.push({
      date: new Date().toISOString(),
      difficulte: State.config.difficulte,
      onlyWrong: State.config.onlyWrong,
      total, correct, score, durationSec, wrongIds,
    });
    if (p.attempts.length > 50) p.attempts = p.attempts.slice(-50);
    saveProgress(State.user, State.module, p);

    renderResults({ total, correct, score, durationSec });
  }

  function motivation(score) {
    if (score === 100) return { msg: "Sans faute ! 🏆", detail: "Maîtrise parfaite de cette série." };
    if (score >= 80) return { msg: "Excellent travail 💪", detail: "Vous maîtrisez l'essentiel." };
    if (score >= 60) return { msg: "Bien joué 👍", detail: "Encore un petit effort pour consolider." };
    if (score >= 40) return { msg: "En progression 🌱", detail: "Revoyez les explications, vous y êtes presque." };
    return { msg: "On continue 🔁", detail: "Chaque révision vous rapproche du but. Reprenez tranquillement." };
  }

  function renderResults(r) {
    const { score, correct, total, durationSec } = r;
    const mo = motivation(score);
    const ringColor = score >= 70 ? "var(--green)" : score >= 40 ? "var(--moyen)" : "var(--ko)";
    const wrong = total - correct;

    setScreen(`
      ${appbar()}
      <main class="screen">
        <div class="result-hero">
          <div class="score-ring" style="--pct:${score};--ring-color:${ringColor}">
            <div class="inner"><div class="big">${score}%</div><div class="small">${correct}/${total}</div></div>
          </div>
          <div class="result-msg">${mo.msg}</div>
          <div class="result-detail">${mo.detail}</div>
        </div>

        <div class="statgrid" style="margin-top:18px">
          <div class="stat"><div class="v" style="color:var(--ok)">${correct}</div><div class="l">Justes</div></div>
          <div class="stat"><div class="v" style="color:var(--ko)">${wrong}</div><div class="l">À revoir</div></div>
          <div class="stat"><div class="v">${fmtTime(durationSec)}</div><div class="l">Durée</div></div>
        </div>

        <div style="margin-top:20px" class="opt-list">
          ${wrong ? `<button class="btn btn-primary" id="reviewWrong">🔁 Revoir les ${wrong} question(s) ratée(s)</button>` : ""}
          <button class="btn btn-green" id="retry">↻ Recommencer</button>
          <button class="btn btn-ghost" id="detail">Voir le détail des réponses</button>
          <button class="btn btn-ghost" id="toModule">Retour au module</button>
        </div>
      </main>
    `);
    bindAppbar();

    const rw = $("#reviewWrong");
    if (rw) rw.addEventListener("click", () => reviewWrongFromSession());
    $("#retry").addEventListener("click", () => startQuiz({ onlyWrong: State.config.onlyWrong }));
    $("#detail").addEventListener("click", renderReview);
    $("#toModule").addEventListener("click", renderModuleDetail);
  }

  // Relance un quiz uniquement sur les questions ratées de la session courante
  function reviewWrongFromSession() {
    const s = State.session;
    const wrongItems = s.list.filter((it, i) => !s.answers[i]?.isCorrect);
    if (!wrongItems.length) { toast("Aucune question ratée 🎉"); return; }
    const list = wrongItems.map((it) => ({
      q: it.q,
      opts: shuffle(it.q.options.map((text, i) => ({ text, correct: i === it.q.bonne_reponse }))),
    }));
    State.config = { ...State.config, onlyWrong: true };
    State.session = { list, index: 0, answers: [], startedAt: Date.now() };
    renderQuestion();
  }

  /* ------------------------- Détail des réponses ------------------------ */
  function renderReview() {
    const s = State.session;
    const items = s.list.map((it, i) => {
      const a = s.answers[i] || {};
      const q = it.q;
      const chosen = a.choiceIndex >= 0 ? it.opts[a.choiceIndex] : null;
      const correctOpt = it.opts.find((o) => o.correct);
      const good = a.isCorrect;
      return `<div class="review-item">
        <div class="rq"><span class="pill pill-${q.difficulte}">${DIFF_LABEL[q.difficulte]}</span> &nbsp;${esc(q.question)}</div>
        ${good
          ? `<div class="review-line good"><span class="ic">✓</span><span class="txt">${esc(correctOpt.text)}</span></div>`
          : `<div class="review-line bad"><span class="ic">✕</span><span class="txt">${chosen ? esc(chosen.text) : "<em>Aucune réponse (temps écoulé)</em>"}</span></div>
             <div class="review-line good"><span class="ic">✓</span><span class="txt">${esc(correctOpt.text)}</span></div>`}
        <div class="review-exp">💡 ${esc(q.explication)}</div>
      </div>`;
    }).join("");

    setScreen(`
      ${appbar()}
      <main class="screen">
        <button class="backlink" id="back">‹ Résultats</button>
        <h1 class="h1">Détail des réponses</h1>
        <p class="sub">${s.list.length} question(s) · relisez les explications.</p>
        <div style="margin-top:14px">${items}</div>
        <div style="margin-top:8px"><button class="btn btn-ghost" id="toModule">Retour au module</button></div>
      </main>
    `);
    bindAppbar();
    $("#back").addEventListener("click", () => {
      const total = s.list.length;
      const correct = s.answers.filter((a) => a && a.isCorrect).length;
      renderResults({ total, correct, score: Math.round((correct / total) * 100), durationSec: Math.round((Date.now() - s.startedAt) / 1000) });
    });
    $("#toModule").addEventListener("click", renderModuleDetail);
  }

  /* ------------------------------ Boot ---------------------------------- */
  function boot() {
    if (!ALL.length) {
      setScreen(`<main class="screen"><div class="empty"><div class="em">📭</div>
        <p>Aucune question chargée. Vérifiez le fichier <code>data/questions.js</code>.</p></div></main>`);
      return;
    }
    const saved = Store.get("currentUser", null);
    if (saved) { State.user = saved; renderModules(); }
    else { renderHome(); }
  }

  document.addEventListener("DOMContentLoaded", boot);
})();
