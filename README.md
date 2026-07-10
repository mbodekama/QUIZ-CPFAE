# QCM CPFAE — Révision de la Fonction Publique

Application web de QCM (type Moodle simplifié), **mobile-first**, pour réviser
module par module. Premier module intégré : **Déontologie de la Fonction
Publique** (117 questions, 11 thèmes).

## Lancer l'application

Aucune installation, aucun serveur, aucune connexion internet requise.

- **Option simple** : ouvrez `index.html` dans un navigateur (double-clic).
- **Sur téléphone** : transférez le dossier complet et ouvrez `index.html`,
  ou servez-le sur le réseau local :
  ```bash
  cd QUIZ_CPFAE_APP
  python3 -m http.server 8000
  ```
  puis ouvrez `http://ADRESSE-IP-DU-PC:8000` depuis le téléphone.

> **Astuce mobile** : dans le navigateur du téléphone, « Ajouter à l'écran
> d'accueil » pour l'utiliser comme une application.

## Structure du projet

```
QUIZ_CPFAE_APP/
├── index.html          Point d'entrée
├── styles.css          Styles (mobile-first, thème clair/sombre auto)
├── app.js              Logique (écrans, quiz, progression, persistance)
└── data/
    └── questions.js    Banque de questions (le seul fichier à éditer
                        pour ajouter du contenu)
```

## Fonctionnalités

- **Accès par pseudo** — pas d'inscription, pas de mot de passe. La
  progression est retrouvée au retour (elle est stockée sur l'appareil).
- **Écran Modules** — liste des modules avec % maîtrisé et dernier score.
- **Écran Module** — choix du niveau (Facile / Moyen / Difficile / Mixte),
  du nombre de questions (10 / 20 / Toutes), chronomètre optionnel (30 s /
  question), et taux de réussite par thème.
- **Quiz** — une question à la fois, feedback immédiat (bonne/mauvaise +
  explication citant l'article/texte de loi), barre de progression permanente.
- **Résultats** — score, questions justes/à revoir, durée, **« Revoir les
  questions ratées »**, **« Recommencer »**, détail de toutes les réponses.
- **Révision ciblée** — depuis un module, un bouton propose de rejouer
  uniquement les questions déjà ratées.

## Stockage des données

La progression est enregistrée par pseudo via une couche `Store` (dans
`app.js`), avec des clés claires :

- `progress:{pseudo}:{module}` — questions vues, réussite par question,
  historique des tentatives (dont la liste des questions ratées).

> **Note technique.** Le prompt d'origine visait l'environnement d'artifact
> de claude.ai et son API `window.storage`. Pour une application locale
> ouverte dans un navigateur, `window.storage` n'existe pas ; la couche
> `Store` s'appuie donc sur `localStorage`. Elle est isolée dans un seul
> objet en haut de `app.js` : pour porter l'app vers un artifact claude.ai,
> il suffit de remplacer le corps de `Store.get/set/remove/list` par des
> appels à `window.storage`. Les données ne sont pas partagées entre
> utilisateurs (chaque pseudo a ses propres clés).

---

## ➕ Comment ajouter un nouveau module

Tout se passe dans **`data/questions.js`** — rien d'autre à modifier.
L'application construit automatiquement la liste des modules et des thèmes à
partir des questions.

### 1. Ajouter les métadonnées du module (facultatif mais recommandé)

Dans l'objet `MODULES_META`, en haut du fichier :

```js
window.MODULES_META = {
  "Déontologie de la Fonction Publique": { /* ... */ },
  "Statut Général de la Fonction Publique": {   // ← nouveau module
    ordre: 2,
    icone: "📜",
    description: "Résumé du module en une phrase.",
  },
};
```

### 2. Ajouter les questions

À la fin du tableau `QUESTIONS`, ajoutez des objets au même format. Le champ
`module` crée automatiquement le module ; le champ `theme` crée les
sous-thèmes.

```js
{
  id: "sg-001",                                  // identifiant unique
  module: "Statut Général de la Fonction Publique",
  theme: "Champ d'application",
  difficulte: "facile",                          // facile | moyen | difficile
  question: "Votre question reformulée ?",
  options: ["Proposition A", "Proposition B", "Proposition C", "Proposition D"],
  bonne_reponse: 0,                              // index (0–3) de la bonne option
  explication: "Justification courte, avec l'article/texte de loi si pertinent.",
},
```

**Règles à respecter :**

- `id` unique dans tout le fichier (préfixe par module, ex. `sg-001`).
- Exactement **4 options**, dont **une seule** correcte.
- `bonne_reponse` = index de la bonne option (0 = A, 1 = B, 2 = C, 3 = D).
  Les options sont **mélangées** automatiquement à l'affichage.
- Répartition conseillée : ~40 % facile, ~35 % moyen, ~25 % difficile.

### 3. (Alternative) Un fichier par module

Pour garder les modules bien séparés, vous pouvez créer un fichier
`data/statut-general.js` contenant :

```js
window.QUESTIONS.push(
  { id: "sg-001", module: "...", /* ... */ },
  // ...
);
```

puis l'ajouter dans `index.html` **après** `data/questions.js` :

```html
<script src="data/questions.js"></script>
<script src="data/statut-general.js"></script>   <!-- nouveau -->
<script src="app.js"></script>
```

Rien d'autre à changer : le nouveau module apparaît sur l'écran d'accueil,
avec sa progression et ses statistiques par thème. L'existant n'est pas
affecté.
```
