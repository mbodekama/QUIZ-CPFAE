import { AppBar } from "../components/AppBar.jsx";
import { moduleByName, themesOf, countByDiff } from "../data.js";
import { getProgress, masteredCount, lastAttempt } from "../store.js";
import { buildQuestionList } from "../lib/quiz.js";
import { DIFF_LABEL, QUESTION_SECONDS } from "../lib/constants.js";
import { fmtDate } from "../lib/format.js";

const DIFF_DESC = {
  facile: "Définitions, dates, chiffres clés",
  moyen: "Procédures et conditions",
  difficile: "Cas pratiques, exceptions",
  mixte: "Toutes difficultés mélangées",
};

export function ModuleDetail({ user, moduleName, cfg, setCfg, onBack, onStartQuiz, onChangeUser }) {
  const m = moduleByName(moduleName);
  const p = getProgress(user, moduleName);
  const mastered = masteredCount(p, moduleName);
  const total = m.questions.length;
  const pct = total ? Math.round((mastered / total) * 100) : 0;
  const last = lastAttempt(p);

  const wrongCount = m.questions.filter(
    (q) => p.perQuestion[q.id] && !p.perQuestion[q.id].lastCorrect
  ).length;

  const themeStats = themesOf(moduleName).map((th) => {
    const qs = m.questions.filter((q) => q.theme === th);
    const seenN = qs.filter((q) => p.perQuestion[q.id]).length;
    const good = qs.filter((q) => p.perQuestion[q.id]?.lastCorrect).length;
    const rate = qs.length ? Math.round((good / qs.length) * 100) : 0;
    return { th, rate, seenN };
  });

  const start = (onlyWrong) => {
    const list = buildQuestionList(moduleName, cfg, onlyWrong, user);
    onStartQuiz(list, { ...cfg, onlyWrong });
  };

  return (
    <>
      <AppBar user={user} onChangeUser={onChangeUser} />
      <main className="screen">
        <button className="backlink" onClick={onBack}>
          ‹ Modules
        </button>
        <h1 className="h1">{m.name}</h1>
        <p className="sub">{m.description}</p>

        <div className="card" style={{ marginTop: 16 }}>
          <div className="statgrid">
            <div className="stat">
              <div className="v">{pct}%</div>
              <div className="l">Maîtrisé</div>
            </div>
            <div className="stat">
              <div className="v">{last ? last.score + "%" : "—"}</div>
              <div className="l">Dernier score</div>
            </div>
            <div className="stat">
              <div className="v">{total}</div>
              <div className="l">Questions</div>
            </div>
          </div>
          <div className="progress" style={{ marginTop: 16 }}>
            <span style={{ width: pct + "%" }} />
          </div>
          <div className="progress-row">
            <span>
              {mastered}/{total} questions maîtrisées
            </span>
            <span>{last ? fmtDate(last.date) : ""}</span>
          </div>
        </div>

        <div className="section-label">Niveau de difficulté</div>
        <div className="opt-list">
          {["facile", "moyen", "difficile", "mixte"].map((d) => {
            const label = d === "mixte" ? "Mixte" : DIFF_LABEL[d];
            return (
              <button
                key={d}
                className={"selectable" + (cfg.difficulte === d ? " on" : "")}
                onClick={() => setCfg({ ...cfg, difficulte: d })}
              >
                <span className="dot" />
                <span className="txt">
                  <span className="t">{label}</span>
                  <span className="d">{DIFF_DESC[d]}</span>
                </span>
                <span className="count">{countByDiff(moduleName, d)} q.</span>
              </button>
            );
          })}
        </div>

        <div className="section-label">Nombre de questions</div>
        <div className="chips">
          {[10, 20, "all"].map((c) => (
            <button
              key={c}
              className={"chip" + (cfg.count === c ? " on" : "")}
              onClick={() => setCfg({ ...cfg, count: c })}
            >
              {c === "all" ? "Toutes" : c}
            </button>
          ))}
        </div>

        <div className="section-label">Options</div>
        <button className="switch" onClick={() => setCfg({ ...cfg, timer: !cfg.timer })}>
          <span className="lab">
            Chronomètre <span className="d">{QUESTION_SECONDS}s par question</span>
          </span>
          <span className={"toggle" + (cfg.timer ? " on" : "")} />
        </button>

        <div style={{ marginTop: 18 }}>
          <button className="btn btn-primary" onClick={() => start(false)}>
            Démarrer le quiz &nbsp;→
          </button>
        </div>
        {wrongCount > 0 && (
          <div style={{ marginTop: 10 }}>
            <button className="btn btn-ghost" onClick={() => start(true)}>
              🔁 Réviser mes {wrongCount} question(s) ratée(s)
            </button>
          </div>
        )}

        <div className="section-label">Taux de réussite par thème</div>
        {themeStats.length ? (
          themeStats.map((s) => {
            const col =
              s.rate >= 70
                ? "var(--ok)"
                : s.rate >= 40
                ? "var(--moyen)"
                : s.seenN
                ? "var(--ko)"
                : "var(--border)";
            return (
              <div className="theme-stat" key={s.th}>
                <span className="tn">{s.th}</span>
                <span className="bar">
                  <span style={{ width: s.rate + "%", background: col }} />
                </span>
                <span className="tp">{s.seenN ? s.rate + "%" : "—"}</span>
              </div>
            );
          })
        ) : (
          <p className="sub">Aucune donnée pour l'instant.</p>
        )}
        <div className="footnote">Barre grise = thème pas encore travaillé.</div>
      </main>
    </>
  );
}
