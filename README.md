# QCM CPFAE — PWA de révision de la Fonction Publique

Application de QCM (type Moodle simplifié), **mobile-first**, pour réviser la
Fonction Publique ivoirienne module par module. Désormais une **PWA React**
(installable, hors-ligne), servie par **nginx**, avec une **API Node/Express**
et une base **MySQL**, le tout orchestré par **Docker Compose** et routé par
**Traefik**.

Modules intégrés :
- ⚖️ **Déontologie de la Fonction Publique** — 117 questions, 11 thèmes
- 💰 **Finances Publiques** — 115 questions, 11 thèmes

## Architecture

```
                 Internet
                    │
             ┌──────▼───────┐
             │   Traefik    │  (sur l'hôte : TLS + routage par domaine)
             └──────┬───────┘
        réseau      │  (réseau externe « traefik »)
     ┌──────────────▼──────────────────────────────────┐
     │  web  (nginx)                                    │
     │   • sert la PWA React (statique, précachée SW)   │
     │   • proxy /api ─────────────┐                    │
     └─────────────────────────────┼────────────────────┘
                                   │  (réseau interne)
                        ┌──────────▼──────────┐
                        │  app (Node/Express) │  API REST
                        │   • /api/users      │
                        │   • /api/progress   │
                        └──────────┬──────────┘
                                   │
                          ┌────────▼────────┐
                          │   db (MySQL 8)  │  + volume persistant
                          └─────────────────┘
```

**Offline-first** : la PWA garde la progression en `localStorage` (utilisable
sans réseau) et la **synchronise** vers l'API (MySQL) dès que la connexion est
disponible. Le contenu des questions reste statique (précaché par le service
worker) — la base ne stocke que les utilisateurs et leur progression.

## Arborescence

```
QUIZ_CPFAE_APP/
├── docker-compose.yml        PROD — 3 services + Traefik HTTPS (websecure + TLS)
├── docker-compose-dev.yml    DEV  — même stack en HTTP local (cpfae.localhost)
├── .env.example              Variables (domaine, réseau Traefik, MySQL)
├── frontend/                 PWA React (Vite)
│   ├── Dockerfile            build React → nginx
│   ├── nginx.conf            statique + proxy /api → app
│   ├── vite.config.js        PWA (manifest, service worker)
│   ├── index.html
│   ├── public/
│   │   ├── icon.svg
│   │   └── data/             Banque de questions (contenu statique)
│   │       ├── questions.js            (Déontologie)
│   │       └── finances-publiques.js   (Finances Publiques)
│   └── src/
│       ├── main.jsx, App.jsx, styles.css
│       ├── data.js, store.js, api.js
│       ├── lib/ (quiz, sync, format, constants, toast)
│       ├── components/ (AppBar, Toast)
│       └── screens/ (Home, Modules, ModuleDetail, Quiz, Results, Review)
└── backend/                  API Node/Express
    ├── Dockerfile
    ├── src/ (index.js, db.js, routes/)
    └── db/init.sql           Schéma initial MySQL
```

## Démarrage avec Docker

Deux fichiers Compose distincts partagent **le même `.env`** (variables `MYSQL_*`
et `TRAEFIK_NETWORK`). Ils sont isolés l'un de l'autre (project name et volume
MySQL différents), donc dev et prod peuvent tourner sur la même machine sans
conflit.

Prérequis communs : Docker + Docker Compose, et un **Traefik déjà en place** sur
l'hôte avec son réseau Docker externe.

```bash
cp .env.example .env
# éditez .env : identifiants MySQL, et pour la prod DOMAIN / TRAEFIK_*
```

### Développement (HTTP local)

Prérequis : **Traefik doit tourner** (`cd ../TRAEFIK && docker compose up -d`).

```bash
docker compose -f docker-compose-dev.yml up -d --build
```

- `http://cpfae.localhost` — la PWA, via Traefik (entrypoint `web`, sans TLS)
- `http://cpfae.localhost/api/health` — API, via le proxy nginx
- `http://localhost:3000/api/health` — API en direct (debug)
- `localhost:3307` — MySQL exposé pour un client SQL (debug)

Le service `web` **n'expose aucun port hôte** : on passe par Traefik, comme les
autres projets (`gestion-stock.localhost`, etc.). Ne publiez pas le port 80 du
web sur l'hôte — le port `8080` est réservé au **dashboard Traefik**.

Seules variables requises dans `.env` pour le dev : `TRAEFIK_NETWORK` et les
`MYSQL_*`. Le host (`cpfae.localhost`) et l'entrypoint HTTP sont figés dans le
fichier dev, inutile d'y toucher.

### Production (HTTPS via Traefik)

```bash
# éditez .env : DOMAIN, TRAEFIK_NETWORK, TRAEFIK_ENTRYPOINT, TRAEFIK_CERTRESOLVER
docker compose up -d --build
```

Traefik détecte le service `web` via ses labels et route `https://$DOMAIN` vers
lui. nginx sert la PWA et proxifie `/api` vers le backend.

> Si vous ne gérez pas le TLS via Traefik, retirez les lignes
> `traefik.http.routers.cpfae.tls*` du service `web` dans `docker-compose.yml`.

> **DNS au build** : si `docker compose build` échoue sur `failed to resolve
> ... registry-1.docker.io: no such host` alors que le réseau fonctionne, c'est
> le stub systemd-resolved (`127.0.0.53`) que BuildKit ne peut pas joindre.
> Corrigez le DNS du démon :
> ```bash
> echo '{ "dns": ["1.1.1.1", "8.8.8.8"] }' | sudo tee /etc/docker/daemon.json
> sudo systemctl restart docker
> ```

## Développement local (sans Docker)

Deux terminaux :

```bash
# 1) API (nécessite un MySQL accessible ; variables DB_* dans l'environnement)
cd backend && npm install && npm run dev

# 2) PWA (proxy /api → http://localhost:3000 configuré dans vite.config.js)
cd frontend && npm install && npm run dev
```

Puis ouvrez l'URL affichée par Vite (par défaut http://localhost:5173).

## API

| Méthode | Route                              | Rôle                                   |
|--------:|------------------------------------|----------------------------------------|
| GET     | `/api/health`                      | Vérification de santé                  |
| POST    | `/api/users`                       | Crée/retrouve un pseudo                 |
| GET     | `/api/progress/:pseudo`            | Toute la progression d'un pseudo        |
| GET     | `/api/progress/:pseudo/:module`    | Progression d'un module                 |
| PUT     | `/api/progress/:pseudo/:module`    | Enregistre la progression d'un module   |

La progression est un objet JSON `{ perQuestion, attempts }`, identique côté
client et côté serveur.

## Ajouter / modifier des questions

Le contenu vit dans `frontend/public/data/*.js` (format inchangé : chaque
fichier alimente `window.QUESTIONS` et `window.MODULES_META`). Pour un nouveau
module, ajoutez un fichier `frontend/public/data/mon-module.js` qui fait
`window.QUESTIONS.push(...)` et déclare son entrée `MODULES_META`, puis
référencez-le dans `frontend/index.html` (après les autres scripts `data/`).
L'application construit automatiquement la liste des modules et des thèmes.
# QUIZ-CPFAE
