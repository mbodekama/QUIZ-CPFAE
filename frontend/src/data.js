/* ---------------------------------------------------------------------------
 * Données du quiz — lues depuis window.QUESTIONS / window.MODULES_META, qui
 * sont alimentés par les scripts statiques data/*.js (chargés dans index.html).
 * Le contenu reste inchangé par rapport à la version d'origine.
 * ------------------------------------------------------------------------- */
export const ALL = Array.isArray(window.QUESTIONS) ? window.QUESTIONS : [];
export const META = window.MODULES_META || {};

export function modules() {
  const names = [...new Set(ALL.map((q) => q.module))];
  names.sort(
    (a, b) => (META[a]?.ordre || 99) - (META[b]?.ordre || 99) || a.localeCompare(b)
  );
  return names.map((name) => ({
    name,
    icone: META[name]?.icone || "📘",
    description: META[name]?.description || "",
    questions: ALL.filter((q) => q.module === name),
  }));
}

export function moduleByName(name) {
  return modules().find((m) => m.name === name) || null;
}

export function themesOf(name) {
  return [...new Set(ALL.filter((q) => q.module === name).map((q) => q.theme))];
}

export function countByDiff(name, diff) {
  return ALL.filter(
    (q) => q.module === name && (diff === "mixte" || q.difficulte === diff)
  ).length;
}
