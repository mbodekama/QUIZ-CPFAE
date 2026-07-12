/* ---------------------------------------------------------------------------
 * API CPFAE — service « app » (Node.js + Express).
 * Persiste la progression par pseudo dans MySQL. Servi en interne ; nginx
 * (service « web ») proxifie /api vers ce service.
 * ------------------------------------------------------------------------- */
import express from "express";
import cors from "cors";
import { ensureSchema, waitForDb } from "./db.js";
import usersRouter from "./routes/users.js";
import progressRouter from "./routes/progress.js";

const app = express();
const PORT = Number(process.env.PORT || 3000);

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

app.use("/api/users", usersRouter);
app.use("/api/progress", progressRouter);

// 404 API
app.use("/api", (_req, res) => res.status(404).json({ error: "Route introuvable." }));

// Gestion d'erreurs centralisée
app.use((err, _req, res, _next) => {
  console.error("[api] erreur :", err);
  res.status(500).json({ error: "Erreur serveur." });
});

async function start() {
  await waitForDb();
  await ensureSchema();
  app.listen(PORT, () => console.log(`[api] à l'écoute sur le port ${PORT}`));
}

start().catch((err) => {
  console.error("[api] démarrage impossible :", err);
  process.exit(1);
});
