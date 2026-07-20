import { useEffect, useRef, useState } from "react";
import { modules } from "../data.js";
import { knownUsers, getProgress, masteredCount } from "../store.js";
import { initials } from "../lib/format.js";
import { toast } from "../lib/toast.js";
import { ThemeToggle } from "../components/ThemeToggle.jsx";

export function Home({ onLogin }) {
  const [pseudo, setPseudo] = useState("");
  const inputRef = useRef(null);
  const recent = knownUsers();

  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 150);
    return () => clearTimeout(t);
  }, []);

  const submit = () => {
    const name = pseudo.trim().replace(/\s+/g, " ");
    if (name.length < 2) {
      toast("Entrez un pseudo (2 caractères min.)");
      inputRef.current?.focus();
      return;
    }
    onLogin(name);
  };

  const userStats = (u) => {
    let mastered = 0;
    let total = 0;
    modules().forEach((m) => {
      const p = getProgress(u, m.name);
      mastered += masteredCount(p, m.name);
      total += m.questions.length;
    });
    const pct = total ? Math.round((mastered / total) * 100) : 0;
    return { pct, mastered, total };
  };

  return (
    <>
      <header className="appbar">
        <div className="brand">
          <span className="logo">🎓</span>
          <span>QCM CPFAE</span>
        </div>
        <div className="spacer" />
        <ThemeToggle />
      </header>
      <main className="screen">
        <div className="hero">
          <span className="badge">⚖️ Fonction Publique · Session 2026</span>
          <div className="biglogo">🎓</div>
          <h1 className="h1">Réviser en toute confiance</h1>
          <p className="sub">
            Entraînez-vous module par module, à votre rythme. Votre progression est
            enregistrée et synchronisée.
          </p>
        </div>

        <div className="field">
          <label htmlFor="pseudo">Votre pseudo</label>
          <input
            className="input"
            id="pseudo"
            type="text"
            inputMode="text"
            autoComplete="off"
            placeholder="Ex. Aya, Konan, Auditeur12…"
            maxLength={24}
            ref={inputRef}
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") submit();
            }}
          />
        </div>

        <div style={{ marginTop: 14 }}>
          <button className="btn btn-primary" onClick={submit}>
            Commencer &nbsp;→
          </button>
        </div>
        <p className="helper">Pas d'inscription, pas de mot de passe. Un simple pseudo suffit.</p>

        {recent.length > 0 && (
          <div className="recent">
            <div className="section-label">Reprendre avec un pseudo</div>
            {recent.map((u) => {
              const { pct, mastered, total } = userStats(u);
              return (
                <button
                  key={u}
                  className="recent-user"
                  aria-label={`Reprendre avec le pseudo ${u}, ${pct}% maîtrisé`}
                  onClick={() => onLogin(u)}
                >
                  <span className="avatar" aria-hidden="true">{initials(u)}</span>
                  <span className="meta">
                    <span className="n">{u}</span>
                    <span className="s">
                      {pct}% maîtrisé · {mastered}/{total} questions
                    </span>
                  </span>
                  <span className="go">›</span>
                </button>
              );
            })}
          </div>
        )}

        <div className="footnote">CPFAE / AGC — Déontologie · Finances Publiques</div>
      </main>
    </>
  );
}
