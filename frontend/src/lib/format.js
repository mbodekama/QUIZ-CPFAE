export function initials(name) {
  const parts = String(name).trim().split(/\s+/);
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || parts[0]?.[1] || "")).toUpperCase();
}

export function fmtDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export function fmtTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return m + ":" + String(s).padStart(2, "0");
}

export function motivation(score) {
  if (score === 100) return { msg: "Sans faute ! 🏆", detail: "Maîtrise parfaite de cette série." };
  if (score >= 80) return { msg: "Excellent travail 💪", detail: "Vous maîtrisez l'essentiel." };
  if (score >= 60) return { msg: "Bien joué 👍", detail: "Encore un petit effort pour consolider." };
  if (score >= 40) return { msg: "En progression 🌱", detail: "Revoyez les explications, vous y êtes presque." };
  return { msg: "On continue 🔁", detail: "Chaque révision vous rapproche du but. Reprenez tranquillement." };
}
