/* ---------------------------------------------------------------------------
 * Synchronisation offline-first de la progression avec l'API.
 *  - schedulePush : pousse la progression (debounce). En cas d'échec, la met
 *    en file d'attente (persistée) et réessaie à la reconnexion.
 *  - pullAll      : récupère toute la progression serveur (au login).
 * Ce module n'importe QUE l'API (aucune dépendance vers store.js) pour éviter
 * les cycles.
 * ------------------------------------------------------------------------- */
import { apiPutProgress, apiGetAllProgress } from "../api.js";

const QUEUE_KEY = "cpfae::syncQueue";
const debounceTimers = new Map();

function loadQueue() {
  try {
    return JSON.parse(localStorage.getItem(QUEUE_KEY) || "{}");
  } catch {
    return {};
  }
}
function saveQueue(q) {
  try {
    localStorage.setItem(QUEUE_KEY, JSON.stringify(q));
  } catch {
    /* ignore */
  }
}

function enqueue(pseudo, module, progress) {
  const q = loadQueue();
  q[`${pseudo}::${module}`] = { pseudo, module, progress };
  saveQueue(q);
}
function dequeue(key) {
  const q = loadQueue();
  delete q[key];
  saveQueue(q);
}

/* Pousse la progression d'un (pseudo, module), avec un léger debounce. */
export function schedulePush(pseudo, module, progress) {
  const key = `${pseudo}::${module}`;
  clearTimeout(debounceTimers.get(key));
  debounceTimers.set(
    key,
    setTimeout(async () => {
      const ok = await apiPutProgress(pseudo, module, progress);
      if (!ok) enqueue(pseudo, module, progress);
      else dequeue(key);
    }, 700)
  );
}

/* Réessaie toutes les entrées en attente (au retour du réseau). */
export async function flushQueue() {
  const q = loadQueue();
  for (const [key, item] of Object.entries(q)) {
    const ok = await apiPutProgress(item.pseudo, item.module, item.progress);
    if (ok) dequeue(key);
  }
}

/* Récupère toute la progression serveur pour un pseudo (au login). */
export async function pullAll(pseudo) {
  return apiGetAllProgress(pseudo);
}

export function initSync() {
  window.addEventListener("online", flushQueue);
  // tentative initiale (au cas où des éléments seraient restés en file)
  if (navigator.onLine) flushQueue();
}
