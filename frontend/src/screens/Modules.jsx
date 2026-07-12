import { AppBar } from "../components/AppBar.jsx";
import { modules, ALL } from "../data.js";
import { getProgress, masteredCount, lastAttempt } from "../store.js";

export function Modules({ user, onOpenModule, onChangeUser }) {
  const mods = modules();

  return (
    <>
      <AppBar user={user} onChangeUser={onChangeUser} />
      <main className="screen">
        <h1 className="h1">Bonjour {user} 👋</h1>
        <p className="sub">Choisissez un module à réviser.</p>
        <div className="section-label">Modules disponibles</div>

        {mods.map((m) => {
          const p = getProgress(user, m.name);
          const mastered = masteredCount(p, m.name);
          const total = m.questions.length;
          const pct = total ? Math.round((mastered / total) * 100) : 0;
          const last = lastAttempt(p);
          const lastTxt = last
            ? `Dernier score : ${last.correct}/${last.total} (${last.score}%)`
            : "Pas encore commencé";
          return (
            <button
              key={m.name}
              className="card module-card tappable"
              onClick={() => onOpenModule(m.name)}
            >
              <div className="top">
                <span className="mIcon">{m.icone}</span>
                <span className="mMeta">
                  <span className="mName">{m.name}</span>
                  <span className="mDesc">{m.description}</span>
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

        <div className="footnote">
          {ALL.length} questions · {mods.length} module(s)
        </div>
      </main>
    </>
  );
}
