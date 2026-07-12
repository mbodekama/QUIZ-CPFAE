/* ---------------------------------------------------------------------------
 * Routes « progression » — lecture/écriture de la progression par pseudo et
 * par module. La progression est un objet JSON { perQuestion, attempts }
 * identique à celui manipulé côté client (offline-first).
 * ------------------------------------------------------------------------- */
import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

async function userId(pseudo) {
  const [rows] = await pool.query("SELECT id FROM users WHERE pseudo = ?", [pseudo]);
  if (rows.length) return rows[0].id;
  const [ins] = await pool.query("INSERT INTO users (pseudo) VALUES (?)", [pseudo]);
  return ins.insertId;
}

/* GET /api/progress/:pseudo  -> { [module]: progress } (toute la progression). */
router.get("/:pseudo", async (req, res, next) => {
  try {
    const [rows] = await pool.query(
      `SELECT p.module, p.data
         FROM progress p
         JOIN users u ON u.id = p.user_id
        WHERE u.pseudo = ?`,
      [req.params.pseudo]
    );
    const out = {};
    for (const r of rows) {
      out[r.module] = typeof r.data === "string" ? JSON.parse(r.data) : r.data;
    }
    res.json(out);
  } catch (err) {
    next(err);
  }
});

/* GET /api/progress/:pseudo/:module  -> progress (ou objet vide). */
router.get("/:pseudo/:module", async (req, res, next) => {
  try {
    const [rows] = await pool.query(
      `SELECT p.data
         FROM progress p
         JOIN users u ON u.id = p.user_id
        WHERE u.pseudo = ? AND p.module = ?`,
      [req.params.pseudo, req.params.module]
    );
    if (!rows.length) return res.json({ perQuestion: {}, attempts: [] });
    const data = rows[0].data;
    res.json(typeof data === "string" ? JSON.parse(data) : data);
  } catch (err) {
    next(err);
  }
});

/* PUT /api/progress/:pseudo/:module  { progress }  -> upsert. */
router.put("/:pseudo/:module", async (req, res, next) => {
  try {
    const progress = req.body?.progress ?? req.body;
    if (!progress || typeof progress !== "object") {
      return res.status(400).json({ error: "Corps « progress » manquant ou invalide." });
    }
    const uid = await userId(req.params.pseudo);
    await pool.query(
      `INSERT INTO progress (user_id, module, data)
       VALUES (?, ?, CAST(? AS JSON))
       ON DUPLICATE KEY UPDATE data = VALUES(data)`,
      [uid, req.params.module, JSON.stringify(progress)]
    );
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
});

export default router;
