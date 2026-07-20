import { AppBar } from "../components/AppBar.jsx";
import { fmtTime, motivation } from "../lib/format.js";

export function Results({ result, onReviewWrong, onRetry, onDetail, onToModule, user, onChangeUser, onHome }) {
  const { score, correct, total, durationSec } = result;
  const wrong = total - correct;
  const mo = motivation(score);
  const ringColor = score >= 70 ? "var(--green)" : score >= 40 ? "var(--moyen)" : "var(--ko)";

  return (
    <>
      <AppBar user={user} onChangeUser={onChangeUser} onHome={onHome} />
      <main className="screen">
        <div className="result-hero">
          <div
            className="score-ring"
            style={{ "--pct": score, "--ring-color": ringColor }}
          >
            <div className="inner">
              <div className="big">{score}%</div>
              <div className="small">
                {correct}/{total}
              </div>
            </div>
          </div>
          <div className="result-msg">{mo.msg}</div>
          <div className="result-detail">{mo.detail}</div>
        </div>

        <div className="statgrid" style={{ marginTop: 18 }}>
          <div className="stat">
            <div className="v" style={{ color: "var(--ok)" }}>
              {correct}
            </div>
            <div className="l">Justes</div>
          </div>
          <div className="stat">
            <div className="v" style={{ color: "var(--ko)" }}>
              {wrong}
            </div>
            <div className="l">À revoir</div>
          </div>
          <div className="stat">
            <div className="v">{fmtTime(durationSec)}</div>
            <div className="l">Durée</div>
          </div>
        </div>

        <div style={{ marginTop: 20 }} className="opt-list">
          {wrong > 0 && (
            <button className="btn btn-primary" onClick={onReviewWrong}>
              🔁 Revoir les {wrong} question(s) ratée(s)
            </button>
          )}
          <button className="btn btn-green" onClick={onRetry}>
            ↻ Recommencer
          </button>
          <button className="btn btn-ghost" onClick={onDetail}>
            Voir le détail des réponses
          </button>
          <button className="btn btn-ghost" onClick={onToModule}>
            Retour au module
          </button>
        </div>
      </main>
    </>
  );
}
