import { AppBar } from "../components/AppBar.jsx";
import { DIFF_LABEL } from "../lib/constants.js";

export function Review({ session, onBack, onToModule, user, onChangeUser }) {
  const { list, answers } = session;

  return (
    <>
      <AppBar user={user} onChangeUser={onChangeUser} />
      <main className="screen">
        <button className="backlink" onClick={onBack}>
          ‹ Résultats
        </button>
        <h1 className="h1">Détail des réponses</h1>
        <p className="sub">{list.length} question(s) · relisez les explications.</p>

        <div style={{ marginTop: 14 }}>
          {list.map((it, i) => {
            const a = answers[i] || {};
            const q = it.q;
            const chosen = a.choiceIndex >= 0 ? it.opts[a.choiceIndex] : null;
            const correctOpt = it.opts.find((o) => o.correct);
            const good = a.isCorrect;
            return (
              <div className="review-item" key={q.id + "-" + i}>
                <div className="rq">
                  <span className={"pill pill-" + q.difficulte}>{DIFF_LABEL[q.difficulte]}</span>
                  &nbsp;{q.question}
                </div>
                {good ? (
                  <div className="review-line good">
                    <span className="ic">✓</span>
                    <span className="txt">{correctOpt.text}</span>
                  </div>
                ) : (
                  <>
                    <div className="review-line bad">
                      <span className="ic">✕</span>
                      <span className="txt">
                        {chosen ? chosen.text : <em>Aucune réponse (temps écoulé)</em>}
                      </span>
                    </div>
                    <div className="review-line good">
                      <span className="ic">✓</span>
                      <span className="txt">{correctOpt.text}</span>
                    </div>
                  </>
                )}
                <div className="review-exp">💡 {q.explication}</div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 8 }}>
          <button className="btn btn-ghost" onClick={onToModule}>
            Retour au module
          </button>
        </div>
      </main>
    </>
  );
}
