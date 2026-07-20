// Gestion du thème : « auto » (système), « light » ou « dark », persistée.
const KEY = "cpfae:theme";

export const THEME_ORDER = ["auto", "light", "dark"];

export const THEME_META = {
  auto: { icon: "🌗", label: "Thème : automatique (système)" },
  light: { icon: "☀️", label: "Thème : clair" },
  dark: { icon: "🌙", label: "Thème : sombre" },
};

export function getTheme() {
  try {
    const t = localStorage.getItem(KEY);
    return THEME_ORDER.includes(t) ? t : "auto";
  } catch {
    return "auto";
  }
}

// Applique le thème au <html> : attribut data-theme pour forcer, absent = auto.
export function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === "light" || theme === "dark") root.setAttribute("data-theme", theme);
  else root.removeAttribute("data-theme");
}

export function setTheme(theme) {
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    /* stockage indisponible : on applique quand même pour la session */
  }
  applyTheme(theme);
}

export function nextTheme(theme) {
  const i = THEME_ORDER.indexOf(theme);
  return THEME_ORDER[(i + 1) % THEME_ORDER.length];
}
