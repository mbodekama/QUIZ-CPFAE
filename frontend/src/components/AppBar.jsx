import { initials } from "../lib/format.js";
import { ThemeToggle } from "./ThemeToggle.jsx";

export function AppBar({ user, onChangeUser, onHome }) {
  return (
    <header className="appbar">
      {onHome ? (
        <button
          type="button"
          className="brand brand-btn"
          onClick={onHome}
          title="Retour à l'accueil"
          aria-label="Retour à l'accueil"
        >
          <span className="logo">🎓</span>
          <span>QCM CPFAE</span>
        </button>
      ) : (
        <div className="brand">
          <span className="logo">🎓</span>
          <span>QCM CPFAE</span>
        </div>
      )}
      <div className="spacer" />
      <ThemeToggle />
      {user && (
        <button
          className="userchip"
          title="Changer d'utilisateur"
          aria-label={`Connecté en tant que ${user}. Changer d'utilisateur.`}
          onClick={onChangeUser}
        >
          <span className="avatar" aria-hidden="true">{initials(user)}</span>
          <span className="name">{user}</span>
        </button>
      )}
    </header>
  );
}
