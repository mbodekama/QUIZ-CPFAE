/* ---------------------------------------------------------------------------
 * Construction des séries de questions (mélange, filtres difficulté / ratées).
 * Chaque item = { q, opts } où opts est le tableau d'options mélangées avec le
 * repérage de la bonne réponse ({ text, correct }).
 * ------------------------------------------------------------------------- */
import { moduleByName } from "../data.js";
import { getProgress } from "../store.js";

export function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function prepare(q) {
  return {
    q,
    opts: shuffle(q.options.map((text, i) => ({ text, correct: i === q.bonne_reponse }))),
  };
}

export function buildQuestionList(moduleName, cfg, onlyWrong, user) {
  const m = moduleByName(moduleName);
  if (!m) return [];
  const p = getProgress(user, moduleName);
  let pool;
  if (onlyWrong) {
    pool = m.questions.filter(
      (q) => p.perQuestion[q.id] && !p.perQuestion[q.id].lastCorrect
    );
  } else {
    pool = m.questions.filter(
      (q) => cfg.difficulte === "mixte" || q.difficulte === cfg.difficulte
    );
  }
  pool = shuffle(pool);
  if (cfg.count !== "all" && !onlyWrong) pool = pool.slice(0, cfg.count);
  return pool.map(prepare);
}

/* Reconstruit une série à partir de questions déjà jouées (options remélangées),
 * pour « revoir les ratées » de la session courante. */
export function buildFromQuestions(questions) {
  return questions.map(prepare);
}
