/* ---------------------------------------------------------------------------
 * API CPFAE — service « app » (Node.js + Express).
 * Persiste la progression par pseudo dans MySQL. Servi en interne ; nginx
 * (service « web ») proxifie /api vers ce service.
 * ------------------------------------------------------------------------- */
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { ensureSchema, waitForDb } from "./db.js";
import usersRouter from "./routes/users.js";
import progressRouter from "./routes/progress.js";

const app = express();
const PORT = Number(process.env.PORT || 3000);

// Derrière le proxy nginx/Traefik : nécessaire pour que le rate-limit et les
// logs voient l'IP réelle du client (X-Forwarded-For) et non celle du proxy.
app.set("trust proxy", 1);

// En-têtes de sécurité HTTP. L'API ne sert que du JSON (pas de HTML), donc la
// CSP par défaut de helmet n'a pas d'impact sur la PWA (servie par nginx).
app.use(helmet());

// CORS restreint : allowlist d'origines via CORS_ORIGIN (séparées par des
// virgules). Vide => on n'autorise que le même origine (requêtes sans en-tête
// Origin), ce qui est le cas derrière le proxy nginx/Traefik.
const allowedOrigins = (process.env.CORS_ORIGIN || "")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);
app.use(
  cors({
    origin(origin, cb) {
      // Requêtes same-origin / server-to-server (pas d'en-tête Origin) : OK.
      if (!origin) return cb(null, true);
      if (allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error("Origine non autorisée par CORS."));
    },
  })
);

app.use(express.json({ limit: "1mb" }));

// Limitation de débit sur l'API : protège création de comptes et écritures.
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300, // 300 requêtes / IP / fenêtre
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Trop de requêtes, réessayez plus tard." },
});
app.use("/api", apiLimiter);

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
