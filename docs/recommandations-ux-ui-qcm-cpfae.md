# Recommandations UX/UI — QCM CPFAE

Audit réalisé le 11/07/2026 sur la PWA "QCM CPFAE — Révision Fonction Publique".

## Points forts à conserver

- Cartes de modules claires avec progression et dernier score visibles.
- Feedback immédiat et pédagogique après chaque réponse (explication contextuelle).
- Code couleur des niveaux de difficulté (facile / moyen / difficile) facilitant le repérage visuel.
- Manifest PWA bien configuré et service worker actif : l'usage hors-ligne fonctionne correctement.

## Friction critique : perte de session sans confirmation

Cliquer sur le badge du pseudo (en haut à droite) déconnecte immédiatement l'utilisateur et le renvoie à l'écran de connexion, sans confirmation, même en plein milieu d'un quiz.

**Recommandation :** ajouter une confirmation ("Voulez-vous changer d'utilisateur ?") ou transformer ce badge en menu déroulant plutôt qu'en action directe.

## Absence de sortie explicite pendant un quiz

Une fois un quiz lancé, aucun bouton "Quitter" ou "Retour au module" n'est visible. La seule échappatoire est le bouton retour du navigateur ou le badge de profil (qui déconnecte).

**Recommandation :** ajouter un lien discret "Abandonner le quiz" en haut de l'écran de quiz.

## Chronomètre peu visible

Le compte à rebours (option chronomètre) n'apparaît que sous forme d'un petit texte gris en haut à droite. Il ne change de couleur qu'à 0 seconde ("Temps écoulé" en rouge).

**Recommandation :** ajouter un indicateur visuel progressif (barre ou anneau) qui se colore en orange puis rouge à l'approche de la fin du temps imparti.

## Accessibilité des éléments interactifs

Plusieurs boutons (notamment les cartes de modules) n'ont pas de nom accessible explicite pour les lecteurs d'écran ; ils remontent comme de simples "button" sans libellé.

**Recommandation :** ajouter des attributs `aria-label` descriptifs, par exemple "Ouvrir le module Déontologie de la Fonction Publique".

## Utilisation de l'espace sur grand écran

Sur desktop, le contenu reste cantonné à une colonne centrale étroite avec beaucoup d'espace vide de part et d'autre.

**Recommandation :** envisager une mise en page adaptative au-delà d'un certain seuil d'écran (grille à deux colonnes pour les modules, panneau latéral pour les statistiques).

## Personnalisation et confort de lecture

Aucune option de thème sombre ni de réglage de taille de police n'est proposée.

**Recommandation :** ajouter un mode sombre, utile pour les sessions de révision prolongées ou en soirée.

## Petits détails à peaufiner

- Le texte "232 questions · 2 module(s)" est en gris clair sur fond gris très clair : vérifier le contraste (WCAG AA).
- Remplacer la mention "Pas encore commencé" par un appel à l'action plus engageant, par exemple "Commencer ce module".

## Priorités

1. Confirmation avant changement d'utilisateur (évite les pertes de session accidentelles).
2. Bouton explicite pour quitter un quiz en cours.
3. Amélioration visuelle du chronomètre.
4. Accessibilité (aria-labels).
5. Mode sombre et exploitation de l'espace sur grand écran.
