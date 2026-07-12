/* ---------------------------------------------------------------------------
 * Accès base de données (MySQL) — pool de connexions + schéma idempotent.
 * La configuration vient de l'environnement (voir docker-compose / .env).
 * ------------------------------------------------------------------------- */
import mysql from "mysql2/promise";

const {
  DB_HOST = "db",
  DB_PORT = "3306",
  DB_USER = "cpfae",
  DB_PASSWORD = "cpfae",
  DB_NAME = "cpfae",
} = process.env;

export const pool = mysql.createPool({
  host: DB_HOST,
  port: Number(DB_PORT),
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: "utf8mb4",
});

/* Crée les tables si elles n'existent pas. La progression est stockée en JSON,
 * calquée sur la structure côté client ({ perQuestion, attempts }). */
export async function ensureSchema() {
  const conn = await pool.getConnection();
  try {
    await conn.query(`
      CREATE TABLE IF NOT EXISTS users (
        id         INT AUTO_INCREMENT PRIMARY KEY,
        pseudo     VARCHAR(64) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE KEY uq_pseudo (pseudo)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);
    await conn.query(`
      CREATE TABLE IF NOT EXISTS progress (
        id         INT AUTO_INCREMENT PRIMARY KEY,
        user_id    INT NOT NULL,
        module     VARCHAR(128) NOT NULL,
        data       JSON NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        UNIQUE KEY uq_user_module (user_id, module),
        CONSTRAINT fk_progress_user FOREIGN KEY (user_id)
          REFERENCES users(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);
  } finally {
    conn.release();
  }
}

/* Attend que MySQL soit prêt (le conteneur db peut démarrer après l'app). */
export async function waitForDb(retries = 30, delayMs = 2000) {
  for (let i = 1; i <= retries; i++) {
    try {
      const conn = await pool.getConnection();
      await conn.ping();
      conn.release();
      return;
    } catch (err) {
      console.log(`[db] tentative ${i}/${retries} — base indisponible (${err.code || err.message})`);
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }
  throw new Error("Impossible de se connecter à la base de données");
}
