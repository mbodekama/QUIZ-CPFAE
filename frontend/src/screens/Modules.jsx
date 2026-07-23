import { AppBar } from "../components/AppBar.jsx";
import { modules, ALL } from "../data.js";
import { getProgress, masteredCount, lastAttempt } from "../store.js";

export function Modules({ user, onOpenModule, onChangeUser, onHome }) {
  const mods = modules();

  return (
    <>
      <AppBar user={user} onChangeUser={onChangeUser} onHome={onHome} />
      <main className="screen">
        <h1 className="h1">Bonjour {user} 👋</h1>
        <p className="sub">Choisissez un module à réviser.</p>
        <div className="section-label">Modules disponibles</div>

        <div className="modules-grid">
        {mods.map((m) => {
          const p = getProgress(user, m.name);
          const mastered = masteredCount(p, m.name);
          const total = m.questions.length;
          const pct = total ? Math.round((mastered / total) * 100) : 0;
          const last = lastAttempt(p);
          const lastTxt = last
            ? `Dernier score : ${last.correct}/${last.total} (${last.score}%)`
            : "Commencer ce module →";
          return (
            <button
              key={m.name}
              className="card module-card tappable"
              aria-label={`Ouvrir le module ${m.name}, ${pct}% maîtrisé, ${total} questions`}
              onClick={() => onOpenModule(m.name)}
            >
              <div className="top">
                <span className="mIcon">{m.icone}</span>
                <span className="mMeta">
                  <span className="mName">{m.name}</span>
                  <span className="mGrade">Grade A4</span>
                </span>
                <span className="chev">›</span>
              </div>
              <div className="progress">
                <span style={{ width: pct + "%" }} />
              </div>
              <div className="progress-row">
                <span>{pct}% maîtrisé</span>
                <span>{lastTxt}</span>
              </div>
            </button>
          );
        })}
        </div>

        <div className="footnote">
          {ALL.length} questions · {mods.length} module(s)
        </div>
      </main>
    </>
  );
}
