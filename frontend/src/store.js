/* ---------------------------------------------------------------------------
 * Persistance locale (localStorage) + progression. Source de vérité hors-ligne,
 * synchronisée vers l'API (voir lib/sync.js). Clés compatibles avec la version
 * d'origine :
 *   cpfae::currentUser            -> pseudo courant
 *   cpfae::users                  -> liste des pseudos connus
 *   cpfae::progress:{pseudo}:{module} -> { perQuestion, attempts }
 * ------------------------------------------------------------------------- */
import { ALL } from "./data.js";
import { schedulePush } from "./lib/sync.js";

const Store = {
  _k(key) {
    return "cpfae::" + key;
  },
  get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(this._k(key));
      return raw == null ? fallback : JSON.parse(raw);
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(this._k(key), JSON.stringify(value));
    } catch (e) {
      console.warn("Store.set échoué", e);
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(this._k(key));
    } catch {
      /* ignore */
    }
  },
};

/* ---- Utilisateur courant & pseudos connus ---- */
export function getCurrentUser() {
  return Store.get("currentUser", null);
}
export function setCurrentUser(name) {
  Store.set("currentUser", name);
}
export function clearCurrentUser() {
  Store.remove("currentUser");
}
export function knownUsers() {
  return Store.get("users", []) || [];
}
export function rememberUser(name) {
  const list = knownUsers().filter((u) => u.toLowerCase() !== name.toLowerCase());
  list.unshift(name);
  Store.set("users", list.slice(0, 8));
}

/* ---- Progression ---- */
function progKey(user, mod) {
  return "progress:" + user + ":" + mod;
}
export function emptyProgress() {
  return { perQuestion: {}, attempts: [] };
}
export function getProgress(user, mod) {
  return Store.get(progKey(user, mod), null) || emptyProgress();
}
export function saveProgress(user, mod, p) {
  Store.set(progKey(user, mod), p);
  schedulePush(user, mod, p); // synchronisation vers l'API (offline-first)
}

/* Écrit la progression reçue du serveur au login (une entrée par module). */
export function seedProgress(user, allByModule) {
  if (!allByModule) return;
  for (const [mod, p] of Object.entries(allByModule)) {
    if (p && typeof p === "object") Store.set(progKey(user, mod), p);
  }
}

/* % de questions maîtrisées = dernière réponse correcte. */
export function masteredCount(prog, mod) {
  const ids = ALL.filter((q) => q.module === mod).map((q) => q.id);
  return ids.filter((id) => prog.perQuestion[id]?.lastCorrect).length;
}
export function lastAttempt(prog) {
  return prog.attempts.length ? prog.attempts[prog.attempts.length - 1] : null;
}
export function recordAnswer(prog, qid, correct) {
  const e = prog.perQuestion[qid] || { seen: 0, correct: 0, wrong: 0, lastCorrect: false };
  e.seen += 1;
  if (correct) {
    e.correct += 1;
    e.lastCorrect = true;
  } else {
    e.wrong += 1;
    e.lastCorrect = false;
  }
  prog.perQuestion[qid] = e;
}
