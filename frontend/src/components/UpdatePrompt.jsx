import { useEffect, useRef, useState } from "react";
import { registerSW } from "virtual:pwa-register";

/*
 * Bandeau « Nouvelle version disponible ».
 * Le service worker est enregistré en mode "prompt" (cf. vite.config.js) : quand
 * une nouvelle version est précachée, `onNeedRefresh` se déclenche et on affiche
 * un bandeau cliquable. Le clic applique la mise à jour (skipWaiting) et recharge
 * la page. On ne coupe donc jamais un quiz en cours sans l'accord de l'utilisateur.
 */
export function UpdatePrompt() {
  const [needRefresh, setNeedRefresh] = useState(false);
  const updateSW = useRef(null);

  useEffect(() => {
    updateSW.current = registerSW({
      onNeedRefresh() {
        setNeedRefresh(true);
      },
    });
  }, []);

  if (!needRefresh) return null;

  return (
    <div className="update-banner" role="alert">
      <span className="update-banner__text">✨ Nouvelle version disponible</span>
      <div className="update-banner__actions">
        <button
          type="button"
          className="update-banner__btn update-banner__btn--primary"
          onClick={() => updateSW.current && updateSW.current(true)}
        >
          Actualiser
        </button>
        <button
          type="button"
          className="update-banner__btn"
          onClick={() => setNeedRefresh(false)}
          aria-label="Fermer"
        >
          Plus tard
        </button>
      </div>
    </div>
  );
}
