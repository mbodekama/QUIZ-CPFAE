import { useState } from "react";
import { getTheme, setTheme, nextTheme, THEME_META } from "../lib/theme.js";

// Bouton qui fait défiler les thèmes : automatique → clair → sombre.
export function ThemeToggle() {
  const [theme, setLocal] = useState(getTheme());
  const meta = THEME_META[theme];

  const cycle = () => {
    const t = nextTheme(theme);
    setTheme(t);
    setLocal(t);
  };

  return (
    <button
      className="iconbtn"
      onClick={cycle}
      title={meta.label}
      aria-label={meta.label}
    >
      <span aria-hidden="true">{meta.icon}</span>
    </button>
  );
}
