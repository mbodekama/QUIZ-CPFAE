/* ---------------------------------------------------------------------------
 * Client API (REST) — tolérant à l'absence de réseau : chaque appel renvoie
 * null/false en cas d'échec, l'app reste utilisable hors-ligne (localStorage).
 * ------------------------------------------------------------------------- */
const BASE = "/api";

export async function apiUpsertUser(pseudo) {
  try {
    const r = await fetch(`${BASE}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pseudo }),
    });
    return r.ok;
  } catch {
    return false;
  }
}

export async function apiGetAllProgress(pseudo) {
  try {
    const r = await fetch(`${BASE}/progress/${encodeURIComponent(pseudo)}`);
    if (!r.ok) return null;
    return await r.json();
  } catch {
    return null;
  }
}

export async function apiPutProgress(pseudo, module, progress) {
  try {
    const r = await fetch(
      `${BASE}/progress/${encodeURIComponent(pseudo)}/${encodeURIComponent(module)}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ progress }),
      }
    );
    return r.ok;
  } catch {
    return false;
  }
}
