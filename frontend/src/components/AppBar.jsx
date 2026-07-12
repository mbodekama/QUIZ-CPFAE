import { initials } from "../lib/format.js";

export function AppBar({ user, onChangeUser }) {
  return (
    <header className="appbar">
      <div className="brand">
        <span className="logo">🎓</span>
        <span>QCM CPFAE</span>
      </div>
      <div className="spacer" />
      {user && (
        <button
          className="userchip"
          title="Changer d'utilisateur"
          onClick={onChangeUser}
        >
          <span className="avatar">{initials(user)}</span>
          <span className="name">{user}</span>
        </button>
      )}
    </header>
  );
}
