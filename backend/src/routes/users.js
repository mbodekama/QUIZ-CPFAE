/* ---------------------------------------------------------------------------
 * Routes « utilisateurs » — accès par pseudo, sans mot de passe (comme l'app).
 * ------------------------------------------------------------------------- */
import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

function normalize(pseudo) {
  return String(pseudo || "").trim().replace(/\s+/g, " ");
}

/* POST /api/users  { pseudo }  -> crée si nécessaire, renvoie le pseudo. */
router.post("/", async (req, res, next) => {
  try {
    const pseudo = normalize(req.body?.pseudo);
    if (pseudo.length < 2 || pseudo.length > 64) {
      return res.status(400).json({ error: "Pseudo invalide (2 à 64 caractères)." });
    }
    await pool.query(
      "INSERT INTO users (pseudo) VALUES (?) ON DUPLICATE KEY UPDATE pseudo = VALUES(pseudo)",
      [pseudo]
    );
    res.json({ pseudo });
  } catch (err) {
    next(err);
  }
});

export default router;
