import { useEffect, useRef, useState } from "react";

/* Écoute les événements « cpfae-toast » et affiche le message (auto-masquage). */
export function Toaster() {
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    const onToast = (e) => {
      setMsg(e.detail);
      setShow(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setShow(false), 1900);
    };
    window.addEventListener("cpfae-toast", onToast);
    return () => {
      window.removeEventListener("cpfae-toast", onToast);
      clearTimeout(timer.current);
    };
  }, []);

  return <div className={"toast" + (show ? " show" : "")}>{msg}</div>;
}
