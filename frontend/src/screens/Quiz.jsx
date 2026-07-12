import { useEffect, useRef, useState } from "react";
import { AppBar } from "../components/AppBar.jsx";
import { getProgress, saveProgress, recordAnswer } from "../store.js";
import { DIFF_LABEL, LETTERS, QUESTION_SECONDS } from "../lib/constants.js";

export function Quiz({ user, moduleName, list, cfg, onComplete, onChangeUser }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState(() => Array(list.length).fill(null));
  const [left, setLeft] = useState(QUESTION_SECONDS);
  const startedAt = useRef(Date.now());
  const timerRef = useRef(null);
  const fbRef = useRef(null);

  const total = list.length;
  const cur = list[index];
  const answer = answers[index];
  const answered = answer != null;
  const pct = Math.round((index / total) * 100);
  const isLast = index === total - 1;

  function stopTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function doSelect(choiceIndex) {
    if (answers[index] != null) return; // déjà répondu
    stopTimer();
    const correctIndex = cur.opts.findIndex((o) => o.correct);
    const isCorrect = choiceIndex === correctIndex;

    // Enregistre la progression immédiatement (localStorage + sync API)
    const p = getProgress(user, moduleName);
    recordAnswer(p, cur.q.id, isCorrect);
    saveProgress(user, moduleName, p);

    setAnswers((prev) => {
      const next = prev.slice();
      next[index] = { choiceIndex, correctIndex, isCorrect, timedOut: choiceIndex === -1 };
      return next;
    });
  }

  // Chronomètre par question
  useEffect(() => {
    if (!cfg.timer || answers[index] != null) return undefined;
    setLeft(QUESTION_SECONDS);
    const deadline = Date.now() + QUESTION_SECONDS * 1000;
    timerRef.current = setInterval(() => {
      const l = Math.max(0, Math.round((deadline - Date.now()) / 1000));
      setLeft(l);
      if (l <= 0) {
        stopTimer();
        doSelect(-1);
      }
    }, 250);
    return stopTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // Défilement vers le feedback après réponse
  useEffect(() => {
    if (answered) fbRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [answered]);

  function finish() {
    const correct = answers.filter((a) => a && a.isCorrect).length;
    const score = Math.round((correct / total) * 100);
    const durationSec = Math.round((Date.now() - startedAt.current) / 1000);
    const wrongIds = list.filter((it, i) => !answers[i]?.isCorrect).map((it) => it.q.id);

    const p = getProgress(user, moduleName);
    p.attempts.push({
      date: new Date().toISOString(),
      difficulte: cfg.difficulte,
      onlyWrong: cfg.onlyWrong,
      total,
      correct,
      score,
      durationSec,
      wrongIds,
    });
    if (p.attempts.length > 50) p.attempts = p.attempts.slice(-50);
    saveProgress(user, moduleName, p);

    onComplete({ total, correct, score, durationSec, list, answers });
  }

  const answerClass = (i) => {
    if (!answered) return "answer";
    let cls = "answer locked";
    if (i === answer.correctIndex) cls += " correct";
    else if (i === answer.choiceIndex) cls += " wrong";
    else cls += " dim";
    return cls;
  };

  return (
    <>
      <AppBar user={user} onChangeUser={onChangeUser} />
      <main className="screen">
        <div className="quizbar">
          <div className="meta">
            <span>
              Question {index + 1} / {total}
            </span>
            {cfg.timer ? (
              <span className={"timer" + (left <= 5 ? " warn" : "")}>{left}s</span>
            ) : (
              <span>{moduleName}</span>
            )}
          </div>
          <div className="progress">
            <span style={{ width: pct + "%" }} />
          </div>
        </div>

        <div className="card qcard">
          <div className="q-theme">
            <span className={"pill pill-" + cur.q.difficulte}>{DIFF_LABEL[cur.q.difficulte]}</span>
            <span>{cur.q.theme}</span>
          </div>
          <div className="q-text">{cur.q.question}</div>

          <div className="answers">
            {cur.opts.map((o, i) => (
              <button
                key={i}
                className={answerClass(i)}
                onClick={() => doSelect(i)}
                disabled={answered}
              >
                <span className="key">{LETTERS[i]}</span>
                <span className="lab">{o.text}</span>
                <span className="mark">
                  {answered && i === answer.correctIndex
                    ? "✓"
                    : answered && i === answer.choiceIndex
                    ? "✕"
                    : ""}
                </span>
              </button>
            ))}
          </div>

          {answered && (
            <div ref={fbRef} className={"feedback " + (answer.isCorrect ? "ok" : "ko")}>
              <div className="fb-title">
                {answer.isCorrect
                  ? "✓ Bonne réponse"
                  : answer.timedOut
                  ? "⏱ Temps écoulé"
                  : "✕ Mauvaise réponse"}
              </div>
              <div className="fb-exp">{cur.q.explication}</div>
            </div>
          )}
        </div>

        {answered && (
          <div className="quiz-foot">
            <button
              className="btn btn-primary"
              onClick={() => (isLast ? finish() : setIndex((i) => i + 1))}
            >
              {isLast ? "Voir mes résultats" : "Question suivante →"}
            </button>
          </div>
        )}
      </main>
    </>
  );
}
