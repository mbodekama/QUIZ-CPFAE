/*
 * ============================================================================
 *  MODULE 2 — FINANCES PUBLIQUES  (CPFAE / Formation Administration de Base)
 *  Source : SUPPORT_DE_COURS_FINANCES_PUBLIQUES_FAB_2026.pdf (164 pages)
 * ----------------------------------------------------------------------------
 *  Fichier de données EN ATTENTE DE VALIDATION.
 *  Il n'est PAS encore chargé par index.html : à intégrer seulement après
 *  validation des questions par l'utilisateur.
 *
 *  Pour intégrer :
 *   1) ajouter l'entrée MODULES_META ci-dessous dans data/questions.js
 *   2) ajouter <script src="data/finances-publiques.js"></script> dans
 *      index.html APRÈS questions.js et AVANT app.js
 *  (ce fichier fait window.QUESTIONS.push(...), l'existant n'est pas affecté)
 * ============================================================================
 */

// Métadonnée du module (à recopier dans MODULES_META de data/questions.js)
window.MODULES_META = window.MODULES_META || {};
window.MODULES_META["Finances Publiques"] = {
  ordre: 2,
  icone: "💰",
  description:
    "Rôle de l'État, budget, LOLF, recettes, exécution, contrôles, TOFE et dette publique en Côte d'Ivoire.",
};

window.QUESTIONS = window.QUESTIONS || [];
window.QUESTIONS.push(
  // =====================================================================
  //  THÈME 1 — Généralités & rôle de l'État
  // =====================================================================
  {
    id: "fp-001",
    module: "Finances Publiques",
    theme: "Généralités & rôle de l'État",
    difficulte: "facile",
    question:
      "Pour les juristes, en combien de branches est traditionnellement divisé le droit public financier ?",
    options: [
      "Trois : droit fiscal, comptabilité publique et droit budgétaire",
      "Deux : droit fiscal et droit budgétaire",
      "Quatre : droit fiscal, douanier, budgétaire et monétaire",
      "Une seule : le droit budgétaire",
    ],
    bonne_reponse: 0,
    explication:
      "Le droit public financier comprend trois branches : le droit fiscal (détermination et perception des impôts), la comptabilité publique (encaissement/décaissement des deniers publics) et le droit budgétaire (adoption et mise en œuvre du budget).",
  },
  {
    id: "fp-002",
    module: "Finances Publiques",
    theme: "Généralités & rôle de l'État",
    difficulte: "facile",
    question:
      "Comment appelle-t-on la conception de l'État dont l'intervention se limite aux fonctions régaliennes (défense, police, justice, diplomatie) ?",
    options: [
      "L'État-gendarme (ou État régalien)",
      "L'État-providence",
      "L'État interventionniste",
      "L'État fédéral",
    ],
    bonne_reponse: 0,
    explication:
      "L'État-gendarme (ou régalien) caractérise l'intervention minimale de l'État, limitée aux fonctions régaliennes. Il cède la place, au XXᵉ siècle, à l'État-providence qui intervient dans les domaines économique et social.",
  },
  {
    id: "fp-003",
    module: "Finances Publiques",
    theme: "Généralités & rôle de l'État",
    difficulte: "facile",
    question:
      "Selon Richard Musgrave, quelles sont les trois fonctions économiques de l'État ?",
    options: [
      "Allocation des ressources, redistribution des revenus, stabilisation de la conjoncture",
      "Production, distribution, consommation",
      "Prévision, exécution, contrôle",
      "Législation, exécution, juridiction",
    ],
    bonne_reponse: 0,
    explication:
      "La trilogie de Richard Musgrave : la fonction d'allocation (affectation) des ressources, la fonction de redistribution des revenus et la fonction de stabilisation de la conjoncture.",
  },
  {
    id: "fp-004",
    module: "Finances Publiques",
    theme: "Généralités & rôle de l'État",
    difficulte: "moyen",
    question:
      "La fonction de stabilisation de l'État vise principalement deux objectifs. Lesquels ?",
    options: [
      "Le plein emploi des facteurs de production et la stabilité des prix",
      "La croissance du PIB et l'ouverture commerciale",
      "La justice sociale et l'égalité des revenus",
      "La production de biens publics et la lutte contre le monopole",
    ],
    bonne_reponse: 0,
    explication:
      "La fonction de stabilisation correspond à la régulation de l'économie : assurer le plein emploi des facteurs de production (surtout du travail) et la stabilité des prix (lutte contre inflation et déflation).",
  },
  {
    id: "fp-005",
    module: "Finances Publiques",
    theme: "Généralités & rôle de l'État",
    difficulte: "moyen",
    question:
      "La redistribution dite « verticale » de l'État correspond à quel type de mécanisme ?",
    options: [
      "Un système d'assistance qui ne nécessite pas de cotisation (ex. bourses d'étude, CMU)",
      "Un système d'assurance nécessitant une cotisation sur le salaire (ex. maladie, retraite)",
      "Un prélèvement proportionnel identique pour tous",
      "Une redistribution entre entreprises uniquement",
    ],
    bonne_reponse: 0,
    explication:
      "La redistribution verticale est un système d'assistance qui ne nécessite pas de cotisation (bourses, CMU/RSA). La redistribution horizontale, elle, est un système d'assurance financé par cotisation (maladie, chômage, retraite).",
  },
  {
    id: "fp-006",
    module: "Finances Publiques",
    theme: "Généralités & rôle de l'État",
    difficulte: "facile",
    question:
      "Dans la zone UEMOA, qui est responsable de la politique monétaire ?",
    options: [
      "La Banque Centrale des États de l'Afrique de l'Ouest (BCEAO)",
      "Le Ministère des Finances et du Budget de chaque État",
      "La Cour des comptes",
      "La Direction Générale du Trésor",
    ],
    bonne_reponse: 0,
    explication:
      "La politique monétaire n'est pas mise en œuvre par l'État de Côte d'Ivoire : elle relève de la BCEAO, banque centrale commune aux États de l'UEMOA.",
  },
  {
    id: "fp-007",
    module: "Finances Publiques",
    theme: "Généralités & rôle de l'État",
    difficulte: "facile",
    question:
      "Quels sont les principaux objectifs de la politique économique ?",
    options: [
      "Croissance économique, plein emploi, stabilité des prix et équilibre des comptes extérieurs",
      "Croissance, inflation, endettement et dévaluation",
      "Recettes, dépenses, déficit et dette",
      "Éducation, santé, sécurité et justice",
    ],
    bonne_reponse: 0,
    explication:
      "Les quatre grands objectifs de la politique économique (le « carré magique ») : la croissance économique, le plein emploi, la stabilité des prix et l'équilibre des comptes extérieurs.",
  },
  {
    id: "fp-008",
    module: "Finances Publiques",
    theme: "Généralités & rôle de l'État",
    difficulte: "moyen",
    question:
      "Une politique budgétaire de relance (d'inspiration keynésienne) repose sur quels moyens ?",
    options: [
      "La hausse des dépenses publiques et la baisse des impôts",
      "La baisse des dépenses publiques et la hausse des impôts",
      "La hausse des impôts et la limitation de l'endettement",
      "La stabilité des dépenses et la hausse des taux d'intérêt",
    ],
    bonne_reponse: 0,
    explication:
      "En cas de croissance faible et de chômage élevé, la politique de relance (keynésienne) utilise la hausse des dépenses publiques, la baisse des impôts et le creusement du déficit pour soutenir la demande globale.",
  },
  {
    id: "fp-009",
    module: "Finances Publiques",
    theme: "Généralités & rôle de l'État",
    difficulte: "difficile",
    question:
      "Selon la théorie du financement de Gurley et Shaw, transposée aux finances publiques, que désigne le « financement interne » de l'État ?",
    options: [
      "Le financement de ses dépenses par ses ressources propres (impôts, revenus du domaine)",
      "L'émission d'obligations et de bons du Trésor sur le marché",
      "L'emprunt auprès du système bancaire",
      "Les dons reçus des partenaires extérieurs",
    ],
    bonne_reponse: 0,
    explication:
      "Le financement interne (self-finance) correspond à l'utilisation par l'État de ses ressources propres (impôts, revenus de la propriété et du capital). Le financement externe recouvre l'emprunt (émission de titres, crédits bancaires).",
  },
  {
    id: "fp-010",
    module: "Finances Publiques",
    theme: "Généralités & rôle de l'État",
    difficulte: "moyen",
    question:
      "Les « finances publiques classiques » (avant la Première Guerre mondiale) reposent sur trois principes. Lesquels ?",
    options: [
      "Neutralité budgétaire, limitation des dépenses et équilibre budgétaire",
      "Relance, rigueur et cohésion sociale",
      "Allocation, redistribution et stabilisation",
      "Annualité, unité et universalité",
    ],
    bonne_reponse: 0,
    explication:
      "Les finances classiques (conception libérale) obéissent à la neutralité budgétaire (le budget n'agit pas sur la conjoncture), la limitation des dépenses et l'équilibre budgétaire (le déficit est proscrit).",
  },
  {
    id: "fp-011",
    module: "Finances Publiques",
    theme: "Généralités & rôle de l'État",
    difficulte: "facile",
    question:
      "L'inflation, indicateur suivi lors de l'élaboration du budget, traduit :",
    options: [
      "La détérioration du pouvoir d'achat des salariés (hausse générale des prix)",
      "La baisse générale et durable des prix",
      "L'augmentation du chômage",
      "La hausse du PIB par habitant",
    ],
    bonne_reponse: 0,
    explication:
      "L'inflation correspond à la hausse générale des prix et donc à la détérioration du pouvoir d'achat. Socialement néfaste, elle est aussi cause de perte de compétitivité des entreprises à l'extérieur.",
  },

  // =====================================================================
  //  THÈME 2 — Notions, définitions & agrégats
  // =====================================================================
  {
    id: "fp-012",
    module: "Finances Publiques",
    theme: "Notions & agrégats",
    difficulte: "facile",
    question: "Que mesure le Produit Intérieur Brut (PIB) ?",
    options: [
      "Le résultat final de l'activité de production des unités productrices résidentes",
      "Le total des impôts perçus par l'État en une année",
      "L'encours de la dette publique",
      "Le montant du budget de l'État",
    ],
    bonne_reponse: 0,
    explication:
      "Le PIB est un agrégat représentant le résultat final de l'activité de production des unités productrices résidentes dans le pays, indépendamment de leur nationalité. Sa variation mesure le taux de croissance.",
  },
  {
    id: "fp-013",
    module: "Finances Publiques",
    theme: "Notions & agrégats",
    difficulte: "facile",
    question: "Comment se calcule la pression fiscale ?",
    options: [
      "(Recettes fiscales / PIB) × 100",
      "(Dette publique / PIB) × 100",
      "(Salaire des fonctionnaires / recettes fiscales) × 100",
      "(Dépenses / recettes) × 100",
    ],
    bonne_reponse: 0,
    explication:
      "Pression fiscale = (Recettes fiscales / PIB) × 100. Elle mesure le poids des impôts dans l'économie et l'effort de recouvrement de l'État.",
  },
  {
    id: "fp-014",
    module: "Finances Publiques",
    theme: "Notions & agrégats",
    difficulte: "facile",
    question:
      "Quel taux de pression fiscale l'UEMOA recommande-t-elle à ses États membres ?",
    options: ["20 %", "35 %", "70 %", "15 %"],
    bonne_reponse: 0,
    explication:
      "L'UEMOA recommande un taux de pression fiscale de 20 %. En 2025, la Côte d'Ivoire le projetait à environ 15,4 %, ce qui constitue un point de discussion avec le FMI.",
  },
  {
    id: "fp-015",
    module: "Finances Publiques",
    theme: "Notions & agrégats",
    difficulte: "facile",
    question:
      "Comment se calcule le taux d'endettement, et quelle est la norme fixée par l'UEMOA ?",
    options: [
      "(Dette publique / PIB) × 100 ; norme de 70 %",
      "(Recettes fiscales / PIB) × 100 ; norme de 20 %",
      "(Dette / recettes fiscales) × 100 ; norme de 35 %",
      "(Service de la dette / budget) × 100 ; norme de 40 %",
    ],
    bonne_reponse: 0,
    explication:
      "Taux d'endettement = (Dette publique / PIB) × 100. L'UEMOA a fixé la norme communautaire à 70 %.",
  },
  {
    id: "fp-016",
    module: "Finances Publiques",
    theme: "Notions & agrégats",
    difficulte: "moyen",
    question:
      "Le ratio de la masse salariale rapporte le salaire des fonctionnaires à quel agrégat, et quel est le critère UEMOA ?",
    options: [
      "Aux recettes fiscales ; critère de 35 %",
      "Au PIB ; critère de 70 %",
      "Aux dépenses totales ; critère de 20 %",
      "À la dette publique ; critère de 40 %",
    ],
    bonne_reponse: 0,
    explication:
      "Ratio masse salariale = (Salaire des fonctionnaires / recettes fiscales) × 100. Critère UEMOA : 35 %. Le principe : un pays doit assurer les salaires avec ses recettes propres, non avec la dette.",
  },
  {
    id: "fp-017",
    module: "Finances Publiques",
    theme: "Notions & agrégats",
    difficulte: "facile",
    question: "Qu'est-ce que le déficit budgétaire ?",
    options: [
      "La situation dans laquelle les recettes de l'État sont inférieures à ses dépenses",
      "La situation dans laquelle les recettes dépassent les dépenses",
      "Le montant total de la dette publique",
      "L'écart entre le PIB et les recettes fiscales",
    ],
    bonne_reponse: 0,
    explication:
      "Le déficit budgétaire est un solde négatif : les recettes de l'État sont inférieures à ses dépenses au cours d'une année. On le mesure souvent en pourcentage du PIB et il se lit dans le TOFE.",
  },
  {
    id: "fp-018",
    module: "Finances Publiques",
    theme: "Notions & agrégats",
    difficulte: "facile",
    question: "À quoi correspond l'accumulation des déficits budgétaires sur plusieurs années ?",
    options: [
      "À la dette publique",
      "À la pression fiscale",
      "Au solde primaire",
      "Au service de la dette",
    ],
    bonne_reponse: 0,
    explication:
      "L'accumulation des déficits budgétaires sur plusieurs années constitue la dette publique.",
  },
  {
    id: "fp-019",
    module: "Finances Publiques",
    theme: "Notions & agrégats",
    difficulte: "moyen",
    question: "Le service de la dette publique se décompose en :",
    options: [
      "Charge financière (paiement des intérêts) + charge de trésorerie (amortissement du capital)",
      "Dette intérieure + dette extérieure",
      "Emprunt-programme + don-programme",
      "Encours + arriérés",
    ],
    bonne_reponse: 0,
    explication:
      "Service de la dette = charge financière de la dette (paiement des intérêts) + charge de trésorerie (amortissement, c.-à-d. remboursement du capital). Il mesure ce que l'État doit rembourser chaque année.",
  },
  {
    id: "fp-020",
    module: "Finances Publiques",
    theme: "Notions & agrégats",
    difficulte: "difficile",
    question: "À quoi correspond l'appui budgétaire ?",
    options: [
      "À l'emprunt-programme + le don-programme",
      "À l'emprunt-projet + le don-projet",
      "Aux recettes fiscales + non fiscales",
      "À la dette intérieure + la dette extérieure",
    ],
    bonne_reponse: 0,
    explication:
      "Appui budgétaire = emprunt-programme + don-programme. À la différence de l'emprunt-projet/don-projet, l'État détermine librement l'utilisation de ces ressources selon ses propres modes de programmation.",
  },
  {
    id: "fp-021",
    module: "Finances Publiques",
    theme: "Notions & agrégats",
    difficulte: "moyen",
    question:
      "Qu'est-ce qui distingue un impôt direct d'un impôt indirect ?",
    options: [
      "L'impôt direct est supporté directement par l'assujetti (recouvré par rôle) ; l'impôt indirect frappe la dépense et s'incorpore au prix",
      "L'impôt direct frappe la consommation ; l'impôt indirect frappe le revenu",
      "L'impôt direct est perçu par les douanes ; l'impôt indirect par le Trésor",
      "Il n'existe aucune différence réelle entre les deux",
    ],
    bonne_reponse: 0,
    explication:
      "L'impôt direct est supporté directement par les personnes assujetties (souvent recouvré par rôle, liste nominative). L'impôt indirect frappe la dépense, s'incorpore dans le prix des biens et est versé par les entreprises (ex. TVA).",
  },
  {
    id: "fp-022",
    module: "Finances Publiques",
    theme: "Notions & agrégats",
    difficulte: "difficile",
    question:
      "Sur l'échelle de notation financière, que signifie la note AAA et quelles sont les agences de notation de la zone UEMOA ?",
    options: [
      "Risque de crédit extrêmement faible ; agences Bloomfield Investment Corporation et GCR/WARA",
      "Défaut de paiement avéré ; agences Moody's et Fitch",
      "Risque modéré ; agences S&P et Bloomfield",
      "Risque spéculatif élevé ; agences WARA et Fitch",
    ],
    bonne_reponse: 0,
    explication:
      "AAA correspond au risque de crédit extrêmement faible (meilleure note). Les agences de la zone UEMOA sont Bloomfield Investment Corporation et GCR West Africa Ratings (ex-WARA), filiale de Moody's.",
  },

  // =====================================================================
  //  THÈME 3 — Principes budgétaires
  // =====================================================================
  {
    id: "fp-023",
    module: "Finances Publiques",
    theme: "Principes budgétaires",
    difficulte: "facile",
    question: "Quels sont les cinq principes budgétaires classiques ?",
    options: [
      "Annualité, unité, universalité, spécialité et équilibre",
      "Transparence, sincérité, performance, responsabilité et lisibilité",
      "Neutralité, limitation, équilibre, unité et clarté",
      "Prévision, autorisation, exécution, contrôle et sanction",
    ],
    bonne_reponse: 0,
    explication:
      "Les cinq principes classiques sont : l'annualité, l'unité, l'universalité, la spécialité et l'équilibre. Ils sont complétés par les principes modernes (transparence, sincérité, performance, responsabilité).",
  },
  {
    id: "fp-024",
    module: "Finances Publiques",
    theme: "Principes budgétaires",
    difficulte: "facile",
    question: "Le principe de l'annualité budgétaire signifie que le budget est voté et exécuté pour :",
    options: [
      "Une année civile",
      "Une période de trois ans",
      "Une période glissante indéterminée",
      "La durée d'une législature",
    ],
    bonne_reponse: 0,
    explication:
      "Le principe d'annualité impose que la loi de finances prévoie et autorise, pour chaque année civile, l'ensemble des ressources et des charges de l'État.",
  },
  {
    id: "fp-025",
    module: "Finances Publiques",
    theme: "Principes budgétaires",
    difficulte: "moyen",
    question:
      "Quel système de rattachement des opérations la LOLF de 2014 a-t-elle consacré en Côte d'Ivoire ?",
    options: [
      "Le système de l'exercice (droits constatés)",
      "Le système de la gestion (système de caisse)",
      "Le système mixte caisse-exercice",
      "Le système de l'encaissement-décaissement uniquement",
    ],
    bonne_reponse: 0,
    explication:
      "La LOLF du 05/06/2014 a consacré le système de l'exercice (droits constatés) : les recettes et dépenses sont prises en compte au titre de l'exercice au cours duquel elles sont nées (art. 74 et 76), et non à la date d'encaissement/décaissement.",
  },
  {
    id: "fp-026",
    module: "Finances Publiques",
    theme: "Principes budgétaires",
    difficulte: "moyen",
    question:
      "Le principe d'universalité comporte deux implications majeures. Lesquelles ?",
    options: [
      "La règle de non-compensation et la règle de non-affectation",
      "La règle de l'annualité et la règle de l'unité",
      "La règle de sincérité et la règle de transparence",
      "La règle de spécialité et la règle d'équilibre",
    ],
    bonne_reponse: 0,
    explication:
      "L'universalité implique la règle de non-compensation (point de vue comptable : pas de contraction recettes/dépenses) et la règle de non-affectation (point de vue juridique : une recette ne finance pas une dépense précise).",
  },
  {
    id: "fp-027",
    module: "Finances Publiques",
    theme: "Principes budgétaires",
    difficulte: "moyen",
    question: "Que signifie la règle de non-affectation ?",
    options: [
      "On ne peut pas affecter une recette déterminée à une dépense déterminée",
      "On ne peut pas déduire les dépenses des recettes",
      "On ne peut pas dépasser le montant des crédits votés",
      "On ne peut pas reporter des crédits d'une année sur l'autre",
    ],
    bonne_reponse: 0,
    explication:
      "La non-affectation interdit d'assigner telle recette à telle dépense : toutes les recettes sont collectées dans une masse unique. La non-compensation, elle, interdit de déduire les dépenses des recettes.",
  },
  {
    id: "fp-028",
    module: "Finances Publiques",
    theme: "Principes budgétaires",
    difficulte: "facile",
    question:
      "Selon le principe d'unité budgétaire, toutes les recettes et dépenses sont imputées à :",
    options: [
      "Un compte unique intitulé « budget général »",
      "Autant de comptes qu'il y a de ministères",
      "Des comptes spéciaux distincts",
      "Un budget par programme",
    ],
    bonne_reponse: 0,
    explication:
      "Le principe d'unité veut que toutes les dépenses et recettes soient imputées à un compte unique intitulé budget général. Cette règle est complémentaire du principe d'universalité.",
  },
  {
    id: "fp-029",
    module: "Finances Publiques",
    theme: "Principes budgétaires",
    difficulte: "moyen",
    question:
      "Avec la LOLF de 2014, les crédits ouverts par la loi de finances sont désormais spécialisés (votés) par :",
    options: [
      "Programme (et par dotation pour les crédits non répartis)",
      "Chapitre uniquement",
      "Ministère uniquement",
      "Nature de dépense uniquement",
    ],
    bonne_reponse: 0,
    explication:
      "Sous la LOLF (art. 15), les crédits sont votés par programme ; les crédits non répartis en programme sont spécialisés par dotation (art. 17). L'ancienne spécialisation « par chapitre » (ordonnance de 1959) a évolué.",
  },
  {
    id: "fp-030",
    module: "Finances Publiques",
    theme: "Principes budgétaires",
    difficulte: "difficile",
    question:
      "À qui attribue-t-on la célèbre justification politique du principe de spécialité : « sans la spécialité […] vous aurez voté le nécessaire, on l'emploiera pour le superflu » (1820) ?",
    options: [
      "Benjamin Constant",
      "Raymond Muselec",
      "Richard Musgrave",
      "Gaudemet et Molinier",
    ],
    bonne_reponse: 0,
    explication:
      "Cette formule de 1820 est de Benjamin Constant. Elle illustre la justification politique de la spécialité : plus la spécialisation est étroite, plus le contrôle parlementaire est strict.",
  },
  {
    id: "fp-031",
    module: "Finances Publiques",
    theme: "Principes budgétaires",
    difficulte: "moyen",
    question:
      "Par quel texte les principes budgétaires modernes (transparence, sincérité…) sont-ils devenus opérationnels en Côte d'Ivoire ?",
    options: [
      "La loi organique n°2014-337 du 05 juin 2014 portant Code de transparence dans la gestion des finances publiques",
      "La loi organique n°2014-336 du 05 juin 2014 (LOLF)",
      "L'ordonnance de 1959 relative aux lois de finances",
      "Le décret n°2013-461 du 19 juin 2013",
    ],
    bonne_reponse: 0,
    explication:
      "C'est la loi organique n°2014-337 du 05 juin 2014 portant Code de transparence dans la gestion des finances publiques qui rend opérationnels les principes modernes (transparence, sincérité, lisibilité).",
  },
  {
    id: "fp-032",
    module: "Finances Publiques",
    theme: "Principes budgétaires",
    difficulte: "facile",
    question: "Que garantit le principe de sincérité budgétaire ?",
    options: [
      "Que les lois de finances présentent de façon fiable et fidèle l'ensemble des ressources et des charges de l'État",
      "Que le budget soit voté avant le 31 décembre",
      "Que chaque recette soit affectée à une dépense précise",
      "Que le déficit soit strictement nul",
    ],
    bonne_reponse: 0,
    explication:
      "Selon l'art. 8 de la loi organique n°2014-337, la sincérité implique que les lois de finances présentent de façon fiable et fidèle l'ensemble des ressources et charges de l'État, appréciée compte tenu des informations disponibles.",
  },
  {
    id: "fp-033",
    module: "Finances Publiques",
    theme: "Principes budgétaires",
    difficulte: "difficile",
    question:
      "Qu'est-ce qui caractérise les budgets annexes (par rapport aux comptes spéciaux du Trésor) ?",
    options: [
      "Ils retracent les opérations de services de l'État à caractère industriel ou commercial, non dotés de personnalité morale",
      "Ils retracent des opérations appelées à se solder (ex. fonds de cautionnement)",
      "Ils sont totalement exclus du budget de l'État",
      "Ils sont gérés directement par la Cour des comptes",
    ],
    bonne_reponse: 0,
    explication:
      "Les budgets annexes concernent les services de l'État à caractère industriel ou commercial non dotés de personnalité morale (art. 33 de l'ordonnance de 1959). Ils figurent au budget comme des sections particulières. Les comptes spéciaux, eux, retracent des opérations appelées à se solder.",
  },

  // =====================================================================
  //  THÈME 4 — Loi de finances & budget
  // =====================================================================
  {
    id: "fp-034",
    module: "Finances Publiques",
    theme: "Loi de finances & budget",
    difficulte: "facile",
    question:
      "Selon l'article 5 de la LOLF, quelles sont les trois catégories de lois de finances ?",
    options: [
      "La loi de finances de l'année, les lois de finances rectificatives et la loi de règlement",
      "La loi de finances initiale, le collectif budgétaire et la loi de programmation",
      "La loi organique, la loi ordinaire et la loi de règlement",
      "Le budget général, les budgets annexes et les comptes spéciaux",
    ],
    bonne_reponse: 0,
    explication:
      "Ont le caractère de lois de finances : les lois de finances de l'année, les lois de finances rectificatives et les lois de règlement (art. 5 de la loi organique n°2014-336).",
  },
  {
    id: "fp-035",
    module: "Finances Publiques",
    theme: "Loi de finances & budget",
    difficulte: "facile",
    question: "À quoi sert une loi de finances rectificative ?",
    options: [
      "À modifier, en cours d'année, les dispositions de la loi de finances initiale",
      "À constater les résultats financiers de l'année écoulée",
      "À autoriser le budget pour la première fois",
      "À fixer les orientations budgétaires sur trois ans",
    ],
    bonne_reponse: 0,
    explication:
      "La loi de finances rectificative (ou collectif budgétaire) modifie en cours d'année les dispositions de la loi de finances initiale, notamment en cas de déséquilibre ou de dépassement des prévisions de recettes.",
  },
  {
    id: "fp-036",
    module: "Finances Publiques",
    theme: "Loi de finances & budget",
    difficulte: "moyen",
    question: "Quel est l'objet de la loi de règlement ?",
    options: [
      "Constater les résultats financiers de l'année civile et rendre compte de l'exécution du budget",
      "Autoriser les recettes et les dépenses de l'année à venir",
      "Modifier la loi de finances en cours d'exécution",
      "Fixer le cadre pluriannuel des dépenses",
    ],
    bonne_reponse: 0,
    explication:
      "La loi de règlement constate les résultats financiers de chaque année civile et rend compte de l'exécution du budget ainsi que de l'utilisation des crédits (art. 49 à 51 de la LOLF).",
  },
  {
    id: "fp-037",
    module: "Finances Publiques",
    theme: "Loi de finances & budget",
    difficulte: "facile",
    question: "Quels sont les trois caractères du budget de l'État ?",
    options: [
      "Un document politique, juridique et financier",
      "Un document comptable, fiscal et douanier",
      "Un document annuel, mensuel et pluriannuel",
      "Un document législatif, exécutif et judiciaire",
    ],
    bonne_reponse: 0,
    explication:
      "Le budget est à la fois un document politique (choix des gouvernants), juridique (voté par le parlement, à caractère législatif et prévisionnel) et financier (recettes évaluatives, dépenses limitatives).",
  },
  {
    id: "fp-038",
    module: "Finances Publiques",
    theme: "Loi de finances & budget",
    difficulte: "moyen",
    question:
      "Dans le budget, quel est le caractère respectif des recettes et des dépenses ?",
    options: [
      "Les recettes ont un caractère évaluatif, les dépenses un caractère limitatif",
      "Les recettes ont un caractère limitatif, les dépenses un caractère évaluatif",
      "Les deux ont un caractère strictement limitatif",
      "Les deux ont un caractère purement indicatif",
    ],
    bonne_reponse: 0,
    explication:
      "Les recettes ont un caractère évaluatif (impossible de déterminer avec exactitude leur volume) tandis que les dépenses ont un caractère limitatif (l'ordonnateur ne peut aller au-delà du montant inscrit), sauf crédits évaluatifs pour certaines dépenses obligatoires.",
  },
  {
    id: "fp-039",
    module: "Finances Publiques",
    theme: "Loi de finances & budget",
    difficulte: "moyen",
    question:
      "Selon l'article 61 de la LOLF, quels amendements parlementaires sont irrecevables (plafonnement des dépenses) ?",
    options: [
      "Ceux dont l'adoption aurait pour conséquence la création ou l'aggravation d'une charge",
      "Ceux qui augmentent une recette existante",
      "Ceux qui suppriment un article du projet de loi",
      "Ceux qui portent sur la dette publique",
    ],
    bonne_reponse: 0,
    explication:
      "L'art. 61 de la LOLF rend irrecevables les propositions et amendements des parlementaires dont l'adoption entraînerait la création ou l'aggravation d'une charge. C'est le plafonnement des dépenses.",
  },
  {
    id: "fp-040",
    module: "Finances Publiques",
    theme: "Loi de finances & budget",
    difficulte: "difficile",
    question:
      "En matière de recettes, que prévoit le « plancher des recettes » pour les parlementaires ?",
    options: [
      "Les propositions à la baisse d'une ressource sont irrecevables, sauf à majorer une autre ressource en compensation",
      "Toute augmentation de recette est interdite",
      "Les parlementaires ne peuvent pas modifier les recettes",
      "Toute suppression d'impôt doit être approuvée par la Cour des comptes",
    ],
    bonne_reponse: 0,
    explication:
      "Le plancher des recettes : les parlementaires peuvent diminuer une ressource, mais ils doivent en compensation majorer une autre ressource pour maintenir l'équilibre budgétaire. Les propositions à la baisse non compensées sont irrecevables.",
  },
  {
    id: "fp-041",
    module: "Finances Publiques",
    theme: "Loi de finances & budget",
    difficulte: "difficile",
    question: "Quel est aujourd'hui le rapport entre le budget et la loi de finances ?",
    options: [
      "La loi de finances a un champ plus large ; le budget en fait partie intégrante",
      "Le budget et la loi de finances sont deux documents strictement identiques",
      "Le budget a un champ plus large que la loi de finances",
      "Le budget remplace désormais la loi de finances",
    ],
    bonne_reponse: 0,
    explication:
      "La loi de finances est plus globalisante : elle autorise les prévisions et fixe les objectifs économiques de l'État. Le budget, au champ plus restreint (prévisions de recettes et autorisations de dépenses), fait partie intégrante de la loi de finances.",
  },
  {
    id: "fp-042",
    module: "Finances Publiques",
    theme: "Loi de finances & budget",
    difficulte: "moyen",
    question: "Comment se décomposent les dépenses de l'État ?",
    options: [
      "Dépenses de fonctionnement + dépenses en capital (investissement) + dette + prêts et avances",
      "Recettes fiscales + recettes non fiscales + dons",
      "Dépenses ordinaires + recettes ordinaires",
      "Charge financière + charge de trésorerie uniquement",
    ],
    bonne_reponse: 0,
    explication:
      "DÉPENSES = dépenses de fonctionnement + dépenses en capital (investissement) + dette extérieure et intérieure + prêts et avances.",
  },

  // =====================================================================
  //  THÈME 5 — Recettes & fiscalité
  // =====================================================================
  {
    id: "fp-043",
    module: "Finances Publiques",
    theme: "Recettes & fiscalité",
    difficulte: "facile",
    question: "De quoi proviennent essentiellement les recettes fiscales de l'État ?",
    options: [
      "Des impôts payés par les contribuables",
      "Des dons des partenaires extérieurs",
      "Des emprunts sur les marchés financiers",
      "Des dividendes des entreprises publiques",
    ],
    bonne_reponse: 0,
    explication:
      "Les recettes fiscales proviennent essentiellement de la fiscalité, c'est-à-dire des impôts payés par les contribuables. Les recettes non fiscales (privatisations, dividendes, revenus du domaine…) s'y ajoutent.",
  },
  {
    id: "fp-044",
    module: "Finances Publiques",
    theme: "Recettes & fiscalité",
    difficulte: "facile",
    question: "La TVA (Taxe sur la Valeur Ajoutée) est un impôt :",
    options: [
      "Indirect, général, sur la consommation",
      "Direct, sur le revenu",
      "Direct, sur les sociétés",
      "Indirect, uniquement sur les produits pétroliers",
    ],
    bonne_reponse: 0,
    explication:
      "La TVA est un impôt indirect général sur la consommation. Neutre par rapport aux circuits de production, elle est supportée par le consommateur final mais collectée par les entreprises au profit de l'État.",
  },
  {
    id: "fp-045",
    module: "Finances Publiques",
    theme: "Recettes & fiscalité",
    difficulte: "facile",
    question: "Quel est le taux de la TVA en Côte d'Ivoire sur les biens et services ?",
    options: ["18 %", "20 %", "15 %", "10 %"],
    bonne_reponse: 0,
    explication:
      "Le taux de TVA en Côte d'Ivoire est de 18 % sur les biens et services. Des exemptions sont accordées à certaines catégories (régime synthétique, pharmacies, etc.).",
  },
  {
    id: "fp-046",
    module: "Finances Publiques",
    theme: "Recettes & fiscalité",
    difficulte: "facile",
    question: "Qui supporte réellement la TVA et qui la collecte ?",
    options: [
      "Elle est supportée par le consommateur final et collectée par les entreprises",
      "Elle est supportée par les entreprises et collectée par l'État",
      "Elle est supportée et collectée par les seules douanes",
      "Elle est supportée par l'État et collectée par les banques",
    ],
    bonne_reponse: 0,
    explication:
      "La TVA est supportée par le dernier consommateur, mais sa collecte est assurée par les entreprises au profit de l'État. C'est la plus importante « manne fiscale » de l'État.",
  },
  {
    id: "fp-047",
    module: "Finances Publiques",
    theme: "Recettes & fiscalité",
    difficulte: "moyen",
    question: "L'impôt sur les sociétés (IS) revêt deux caractères essentiels. Lesquels ?",
    options: [
      "Il est stratégique et élastique",
      "Il est direct et forfaitaire",
      "Il est indirect et neutre",
      "Il est proportionnel et fixe",
    ],
    bonne_reponse: 0,
    explication:
      "L'IS est stratégique (il peut, par une politique d'incitation fiscale, stimuler l'investissement) et élastique (son assiette dépend de la conjoncture et son taux est modulable).",
  },
  {
    id: "fp-048",
    module: "Finances Publiques",
    theme: "Recettes & fiscalité",
    difficulte: "difficile",
    question:
      "Parmi ces éléments, lequel figure parmi les recettes NON fiscales de l'État ?",
    options: [
      "Les revenus du domaine et les dividendes (ex. PETROCI)",
      "La TVA",
      "L'impôt sur le revenu (IR)",
      "Les droits de douane à l'importation",
    ],
    bonne_reponse: 0,
    explication:
      "Les recettes non fiscales regroupent notamment les revenus du domaine, les dividendes (PETROCI, autres), les recettes des services et le bonus de signature. La TVA, l'IR et les droits de douane sont des recettes fiscales.",
  },
  {
    id: "fp-049",
    module: "Finances Publiques",
    theme: "Recettes & fiscalité",
    difficulte: "difficile",
    question: "Comment se composent les « ressources intérieures » de l'État ?",
    options: [
      "Recettes fiscales + recettes non fiscales + recettes des comptes spéciaux du Trésor + privatisation + prêts rétrocédés",
      "Emprunt-projet + don-projet",
      "Dette intérieure + dette extérieure",
      "Recettes fiscales + emprunts extérieurs",
    ],
    bonne_reponse: 0,
    explication:
      "Les ressources intérieures (ressources propres, sans dette) = recettes fiscales + recettes non fiscales + recettes des comptes spéciaux du Trésor + privatisation + prêts rétrocédés.",
  },
  {
    id: "fp-050",
    module: "Finances Publiques",
    theme: "Recettes & fiscalité",
    difficulte: "facile",
    question: "En Côte d'Ivoire, comment appelle-t-on la taxe professionnelle ?",
    options: [
      "La patente",
      "La TVA",
      "L'AIRSI",
      "La TOB",
    ],
    bonne_reponse: 0,
    explication:
      "La taxe professionnelle est appelée patente en Côte d'Ivoire. Elle est prélevée sur les personnes physiques ou morales exerçant une profession industrielle, commerciale, libérale ou artistique.",
  },
  {
    id: "fp-051",
    module: "Finances Publiques",
    theme: "Recettes & fiscalité",
    difficulte: "moyen",
    question: "À quoi correspond le financement extérieur des projets ?",
    options: [
      "À l'emprunt-projet + le don-projet",
      "À l'emprunt-programme + le don-programme",
      "Aux recettes fiscales affectées",
      "Aux comptes spéciaux du Trésor",
    ],
    bonne_reponse: 0,
    explication:
      "Financement extérieur des projets = emprunt-projet + don-projets. C'est l'ensemble des financements étrangers reçus par l'État pour financer ses projets (contrairement à l'appui budgétaire, non affecté).",
  },

  // =====================================================================
  //  THÈME 6 — Budget-programmes & réforme (LOLF)
  // =====================================================================
  {
    id: "fp-052",
    module: "Finances Publiques",
    theme: "Budget-programmes (LOLF)",
    difficulte: "facile",
    question:
      "Quelle est la référence exacte de la loi organique relative aux lois de finances (LOLF) en Côte d'Ivoire ?",
    options: [
      "Loi organique n°2014-336 du 05 juin 2014",
      "Loi organique n°2014-337 du 05 juin 2014",
      "Loi n°2024-350 du 06 juin 2024",
      "Ordonnance de 1959 relative aux lois de finances",
    ],
    bonne_reponse: 0,
    explication:
      "La LOLF est la loi organique n°2014-336 du 05 juin 2014. À ne pas confondre avec la loi n°2014-337 du même jour (Code de transparence).",
  },
  {
    id: "fp-053",
    module: "Finances Publiques",
    theme: "Budget-programmes (LOLF)",
    difficulte: "facile",
    question:
      "Quelle est la nouvelle nomenclature de présentation des crédits introduite par la LOLF ?",
    options: [
      "Missions, programmes et actions",
      "Titres, chapitres et articles",
      "Ministères, directions et services",
      "Fonctions, sous-fonctions et lignes",
    ],
    bonne_reponse: 0,
    explication:
      "La LOLF décrit les crédits en missions, programmes et actions (finalité des dépenses), remplaçant l'ancienne nomenclature par nature de dépense et par ministère. Elle fait passer d'une logique de moyens à une logique de résultats.",
  },
  {
    id: "fp-054",
    module: "Finances Publiques",
    theme: "Budget-programmes (LOLF)",
    difficulte: "moyen",
    question: "Que sont les « dotations » au sens de la LOLF ?",
    options: [
      "Les crédits non répartis en programmes (ex. crédits des institutions constitutionnelles), et qui ne sont pas évalués",
      "Les crédits d'investissement des ministères techniques",
      "Les subventions accordées aux établissements publics",
      "Les crédits ouverts par une loi de finances rectificative",
    ],
    bonne_reponse: 0,
    explication:
      "Les dotations renvoient aux crédits non répartis en programmes, comme les crédits des institutions constitutionnelles destinés à l'exercice de leurs missions. NB : les dotations ne sont pas évaluées (au sens de la performance).",
  },
  {
    id: "fp-055",
    module: "Finances Publiques",
    theme: "Budget-programmes (LOLF)",
    difficulte: "moyen",
    question:
      "Quelle limite s'impose au responsable de programme malgré sa grande liberté de gestion ?",
    options: [
      "Il ne peut pas dépasser le plafond fixé pour les dépenses de personnel",
      "Il ne peut engager aucune dépense sans le Premier Ministre",
      "Il doit soumettre chaque dépense au vote du Parlement",
      "Il ne peut pas redéployer les crédits à l'intérieur du programme",
    ],
    bonne_reponse: 0,
    explication:
      "Le responsable de programme dispose d'une grande liberté (redéploiement des crédits dans le programme), mais avec pour limite de ne pas dépasser le plafond des dépenses de personnel, et l'obligation de rendre compte (redevabilité).",
  },
  {
    id: "fp-056",
    module: "Finances Publiques",
    theme: "Budget-programmes (LOLF)",
    difficulte: "difficile",
    question:
      "Que désigne le DPBEP dans la chaîne de programmation budgétaire ?",
    options: [
      "Le Document de Programmation Budgétaire et Économique Pluriannuel (cadrage global triennal glissant)",
      "Le Document de Programmation Pluriannuelle des Dépenses (périmètre sectoriel)",
      "Le Projet Annuel de Performance",
      "Le Rapport Annuel de Performance",
    ],
    bonne_reponse: 0,
    explication:
      "Le DPBEP est l'instrument de cadrage global des recettes et des dépenses sur une période triennale glissante. Il sert de base au Débat d'Orientation Budgétaire (DOB). Il est distinct du DPPD, à périmètre sectoriel/ministériel.",
  },
  {
    id: "fp-057",
    module: "Finances Publiques",
    theme: "Budget-programmes (LOLF)",
    difficulte: "difficile",
    question: "Qu'est-ce que le DPPD ?",
    options: [
      "Le Document de Programmation Pluriannuelle des Dépenses, à périmètre sectoriel (par ministère)",
      "Le document de cadrage macroéconomique de la nation",
      "Le rapport de la Cour des comptes sur l'exécution",
      "Le tableau des opérations financières de l'État",
    ],
    bonne_reponse: 0,
    explication:
      "Le DPPD est une programmation pluriannuelle (triennale glissante) des dépenses, assortie d'objectifs et d'indicateurs, à périmètre sectoriel : chaque département ministériel présente son DPPD regroupant ses programmes.",
  },
  {
    id: "fp-058",
    module: "Finances Publiques",
    theme: "Budget-programmes (LOLF)",
    difficulte: "moyen",
    question: "Qu'est-ce que le Projet Annuel de Performance (PAP) ?",
    options: [
      "Un document annexé au budget présentant les objectifs et résultats attendus, mesurés par des indicateurs (engagement sur les résultats)",
      "Un document qui rend compte a posteriori des résultats obtenus",
      "Le cadrage macroéconomique de l'année",
      "La lettre de cadrage du Premier Ministre",
    ],
    bonne_reponse: 0,
    explication:
      "Le PAP est un document annexé au budget qui présente les objectifs des politiques ministérielles et les résultats attendus mesurés par des indicateurs. C'est un engagement sur les résultats. Le compte rendu a posteriori est le RAP.",
  },
  {
    id: "fp-059",
    module: "Finances Publiques",
    theme: "Budget-programmes (LOLF)",
    difficulte: "moyen",
    question: "À quoi sert le Rapport Annuel de Performance (RAP) ?",
    options: [
      "À présenter les résultats obtenus par rapport aux objectifs fixés dans le budget-programme",
      "À fixer les objectifs et cibles pour l'année à venir",
      "À autoriser les recettes et dépenses",
      "À constater les infractions comptables",
    ],
    bonne_reponse: 0,
    explication:
      "Le RAP présente les résultats obtenus par rapport aux objectifs fixés dans le budget-programme et rend compte de l'utilisation des ressources. Ce n'est pas un simple rapport d'activités. Il complète le chaînage Programme → PAP → RAP.",
  },
  {
    id: "fp-060",
    module: "Finances Publiques",
    theme: "Budget-programmes (LOLF)",
    difficulte: "difficile",
    question:
      "Le « chaînage vertueux » de la gestion axée sur les résultats relie dans l'ordre :",
    options: [
      "Programme → Projet Annuel de Performance (PAP) → Rapport Annuel de Performance (RAP)",
      "PAP → Programme → RAP",
      "RAP → PAP → Programme",
      "Programme → RAP → PAP",
    ],
    bonne_reponse: 0,
    explication:
      "Le chaînage vertueux relie le Programme (engagement sur les résultats) au PAP puis au RAP (compte rendu sur les résultats), avec réorientation des actions en fonction des résultats obtenus.",
  },
  {
    id: "fp-061",
    module: "Finances Publiques",
    theme: "Budget-programmes (LOLF)",
    difficulte: "difficile",
    question:
      "Quelle innovation de la LOLF permet à un gestionnaire de redéployer des crédits, avec toutefois l'interdiction d'abonder les dépenses de personnel depuis d'autres natures de crédits ?",
    options: [
      "La fongibilité asymétrique des crédits",
      "La spécialité par chapitre",
      "La règle de non-affectation",
      "Le report automatique des crédits",
    ],
    bonne_reponse: 0,
    explication:
      "La fongibilité asymétrique (art. 23 LOLF) permet de redéployer des crédits au sein d'un programme, mais de manière asymétrique : on ne peut pas augmenter les dépenses de personnel à partir d'autres crédits (le plafond de personnel ne peut être dépassé).",
  },

  // =====================================================================
  //  THÈME 7 — Élaboration du budget
  // =====================================================================
  {
    id: "fp-062",
    module: "Finances Publiques",
    theme: "Élaboration du budget",
    difficulte: "facile",
    question: "Quel pouvoir est chargé de préparer et d'élaborer le budget de l'État ?",
    options: [
      "Le pouvoir exécutif (le Gouvernement)",
      "Le pouvoir législatif (le Parlement)",
      "Le pouvoir judiciaire (la Cour des comptes)",
      "La BCEAO",
    ],
    bonne_reponse: 0,
    explication:
      "C'est un pouvoir de monopole constitutionnel du Gouvernement (pouvoir exécutif) : l'institution qui exécute le budget l'élabore. Le Parlement le discute, le vote et exerce le contrôle a posteriori.",
  },
  {
    id: "fp-063",
    module: "Finances Publiques",
    theme: "Élaboration du budget",
    difficulte: "moyen",
    question:
      "Parmi les acteurs de l'élaboration du budget, quelle est la particularité du Ministre chargé du Budget ?",
    options: [
      "Il a une prépondérance de fait, due à son pouvoir financier, malgré une égalité juridique avec les autres ministres",
      "Il est juridiquement supérieur à tous les autres ministres",
      "Il n'intervient qu'au stade de l'exécution",
      "Il vote le budget à la place du Parlement",
    ],
    bonne_reponse: 0,
    explication:
      "Juridiquement égal aux autres ministres, le Ministre chargé du Budget a une prépondérance (supériorité) de fait : il conduit l'élaboration de la loi de finances et intervient lors de son exécution. Tous les actes à incidence financière sont contresignés par lui.",
  },
  {
    id: "fp-064",
    module: "Finances Publiques",
    theme: "Élaboration du budget",
    difficulte: "moyen",
    question:
      "Qu'est-ce que le Programme d'Investissements Publics (PIP) et par quel ministère est-il élaboré ?",
    options: [
      "Une programmation triennale glissante des investissements publics, élaborée par le Ministère en charge du Plan et du Développement",
      "Le cadrage macroéconomique, élaboré par la DGE",
      "Le tableau des recettes fiscales, élaboré par la DGI",
      "La loi de règlement, élaborée par la Cour des comptes",
    ],
    bonne_reponse: 0,
    explication:
      "Le PIP est une programmation triennale glissante des investissements publics, réactualisée chaque année. Il est élaboré par le Ministère en charge du Plan et du Développement (DPIP), au plus tard mi-mars selon le calendrier budgétaire.",
  },
  {
    id: "fp-065",
    module: "Finances Publiques",
    theme: "Élaboration du budget",
    difficulte: "moyen",
    question: "Qui élabore le cadrage macroéconomique ?",
    options: [
      "La Direction Générale de l'Économie (DGE), en collaboration avec l'Agence Nationale de la Statistique",
      "La Direction Générale du Budget et des Finances (DGBF)",
      "La Cour des comptes",
      "Le Payeur Général de la Dette Publique",
    ],
    bonne_reponse: 0,
    explication:
      "Le cadrage macroéconomique est élaboré par la DGE en collaboration avec l'Agence Nationale de la Statistique. Sur la base du taux de croissance projeté, sont effectuées les prévisions de recettes fiscales.",
  },
  {
    id: "fp-066",
    module: "Finances Publiques",
    theme: "Élaboration du budget",
    difficulte: "difficile",
    question:
      "Dans le processus technique d'élaboration du budget, quel est l'ordre correct des trois premières étapes ?",
    options: [
      "Cadrage macroéconomique → cadrage budgétaire → détermination des enveloppes",
      "Cadrage budgétaire → cadrage macroéconomique → détermination des enveloppes",
      "Détermination des enveloppes → cadrage budgétaire → cadrage macroéconomique",
      "Cadrage macroéconomique → détermination des enveloppes → cadrage budgétaire",
    ],
    bonne_reponse: 0,
    explication:
      "Les étapes techniques s'enchaînent : 1) cadrage macroéconomique (DGE) ; 2) cadrage budgétaire (DGBF) ; 3) détermination des enveloppes budgétaires (DGBF).",
  },
  {
    id: "fp-067",
    module: "Finances Publiques",
    theme: "Élaboration du budget",
    difficulte: "moyen",
    question:
      "Quel document sert de base au Débat d'Orientation Budgétaire (DOB) tenu avec le Parlement ?",
    options: [
      "Le DPBEP (Document de Programmation Budgétaire et Économique Pluriannuel)",
      "La loi de règlement",
      "Le Rapport Annuel de Performance",
      "Le TOFE",
    ],
    bonne_reponse: 0,
    explication:
      "Le DPBEP fixe les orientations budgétaires et économiques des trois années à venir et établit le cadre de base du Débat d'Orientation Budgétaire (DOB) tenu avec le Parlement.",
  },
  {
    id: "fp-068",
    module: "Finances Publiques",
    theme: "Élaboration du budget",
    difficulte: "moyen",
    question:
      "Quel acte permet au Premier Ministre de notifier les enveloppes budgétaires aux ministères et institutions ?",
    options: [
      "La lettre de cadrage du Premier Ministre",
      "L'avant-projet de budget",
      "Le décret de répartition",
      "La loi de finances rectificative",
    ],
    bonne_reponse: 0,
    explication:
      "La lettre de cadrage du Premier Ministre (art. 11 du décret n°2013-461 du 19 juin 2013) indique les orientations de l'action gouvernementale et notifie les enveloppes budgétaires aux institutions, ministères et collectivités.",
  },
  {
    id: "fp-069",
    module: "Finances Publiques",
    theme: "Élaboration du budget",
    difficulte: "difficile",
    question:
      "Dans la détermination des enveloppes, quelle est la différence entre crédits « ventilables » et « non ventilables » ?",
    options: [
      "Les crédits ventilables couvrent le fonctionnement courant (répartis par les ministères) ; les non ventilables portent sur des opérations ciblées/sécurisées (bourses, élections…)",
      "Les crédits ventilables sont les investissements ; les non ventilables le personnel",
      "Les crédits ventilables sont extérieurs ; les non ventilables intérieurs",
      "Il n'existe aucune différence entre les deux",
    ],
    bonne_reponse: 0,
    explication:
      "Les crédits ventilables sont destinés au fonctionnement courant des services (répartition par les ministères eux-mêmes). Les crédits non ventilables correspondent à des opérations spécifiques/sécurisées (pécules et bourses, subventions aux écoles privées, élections…).",
  },
  {
    id: "fp-070",
    module: "Finances Publiques",
    theme: "Élaboration du budget",
    difficulte: "facile",
    question:
      "À quel moment le projet de budget validé est-il transmis au Parlement ?",
    options: [
      "Dès l'ouverture de la session d'octobre (session budgétaire), conformément à l'article 80 de la Constitution",
      "Au plus tard le 1er janvier",
      "Dès le mois de mars",
      "Après la promulgation par le Président de la République",
    ],
    bonne_reponse: 0,
    explication:
      "Le projet de budget validé en Conseil des Ministres est transmis au Parlement dès l'ouverture de sa session d'octobre (session budgétaire), conformément à l'article 80 de la Constitution.",
  },
  {
    id: "fp-071",
    module: "Finances Publiques",
    theme: "Élaboration du budget",
    difficulte: "facile",
    question:
      "Après le vote du budget par le Parlement, quel acte du Président de la République clôt le processus ?",
    options: [
      "La promulgation du budget",
      "Le cadrage macroéconomique",
      "La lettre de cadrage",
      "L'arbitrage budgétaire",
    ],
    bonne_reponse: 0,
    explication:
      "Après le vote du budget par le Parlement, le Président de la République le signe et il est publié : par cet acte, le Président promulgue le budget.",
  },

  // =====================================================================
  //  THÈME 8 — Exécution du budget
  // =====================================================================
  {
    id: "fp-072",
    module: "Finances Publiques",
    theme: "Exécution du budget",
    difficulte: "facile",
    question:
      "Avant d'être payées, les dépenses de l'État passent par quelles trois étapes de la phase administrative ?",
    options: [
      "L'engagement, la liquidation et l'ordonnancement",
      "La prise en charge, le recouvrement et le paiement",
      "La constatation, la certification et le visa",
      "L'autorisation, l'exécution et le contrôle",
    ],
    bonne_reponse: 0,
    explication:
      "Les opérations de dépenses obéissent à la procédure d'engagement préalable : avant d'être payées, les dépenses sont engagées, liquidées et ordonnancées (phase administrative), puis prises en charge et payées (phase comptable).",
  },
  {
    id: "fp-073",
    module: "Finances Publiques",
    theme: "Exécution du budget",
    difficulte: "facile",
    question: "Qu'est-ce que l'engagement d'une dépense ?",
    options: [
      "L'acte par lequel l'ordonnateur crée ou constate à l'encontre de l'État une obligation de laquelle résultera une charge",
      "L'acte par lequel le comptable paie la dépense",
      "L'acte par lequel on vérifie la réalité de la dette",
      "L'ordre de recouvrer une recette",
    ],
    bonne_reponse: 0,
    explication:
      "L'engagement juridique est l'acte par lequel l'ordonnateur crée ou constate à l'encontre de l'État une obligation de laquelle résultera une charge. Il est limitatif et doit rester dans la limite des autorisations budgétaires.",
  },
  {
    id: "fp-074",
    module: "Finances Publiques",
    theme: "Exécution du budget",
    difficulte: "moyen",
    question: "Quel est l'objet de la liquidation d'une dépense ?",
    options: [
      "Vérifier la réalité de la dette et arrêter le montant de la dépense",
      "Créer l'obligation à l'encontre de l'État",
      "Donner l'ordre de payer au comptable",
      "Libérer l'État de sa dette",
    ],
    bonne_reponse: 0,
    explication:
      "La liquidation a pour objet de vérifier la réalité de la dette et d'arrêter le montant de la dépense. Elle comporte la réception du service fait, le contrôle de sa réalité (visa) et la certification par l'ordonnateur.",
  },
  {
    id: "fp-075",
    module: "Finances Publiques",
    theme: "Exécution du budget",
    difficulte: "facile",
    question: "Qu'est-ce que l'ordonnancement ?",
    options: [
      "L'acte par lequel l'ordonnateur donne au comptable l'ordre de payer la dette de l'État (par un mandat)",
      "L'acte par lequel on identifie la matière imposable",
      "L'acte par lequel le comptable encaisse une recette",
      "L'acte par lequel le Parlement autorise la dépense",
    ],
    bonne_reponse: 0,
    explication:
      "L'ordonnancement est l'acte par lequel l'ordonnateur donne au comptable assignataire l'ordre de payer la dette de l'État, conformément aux résultats de la liquidation. Il se matérialise par la transmission d'un mandat.",
  },
  {
    id: "fp-076",
    module: "Finances Publiques",
    theme: "Exécution du budget",
    difficulte: "facile",
    question: "Le paiement est l'acte par lequel :",
    options: [
      "Un comptable public libère l'État de sa dette",
      "L'ordonnateur engage la dépense",
      "Le contrôleur financier vise la liquidation",
      "Le Parlement vote les crédits",
    ],
    bonne_reponse: 0,
    explication:
      "Le paiement est l'acte par lequel un comptable public libère l'État de sa dette. Il constitue la dernière étape de la phase comptable, après la prise en charge du mandat.",
  },
  {
    id: "fp-077",
    module: "Finances Publiques",
    theme: "Exécution du budget",
    difficulte: "moyen",
    question:
      "Comment se répartissent les étapes de la dépense entre phase administrative et phase comptable ?",
    options: [
      "Phase administrative : engagement, liquidation, ordonnancement ; phase comptable : prise en charge, paiement",
      "Phase administrative : prise en charge, paiement ; phase comptable : engagement, liquidation, ordonnancement",
      "Phase administrative : engagement, paiement ; phase comptable : liquidation, ordonnancement",
      "Les deux phases comportent les mêmes étapes",
    ],
    bonne_reponse: 0,
    explication:
      "La phase administrative (ou budgétaire) comporte l'engagement, la liquidation et l'ordonnancement (conduits par l'ordonnateur). La phase comptable comporte la prise en charge et le paiement (conduits par le comptable public).",
  },
  {
    id: "fp-078",
    module: "Finances Publiques",
    theme: "Exécution du budget",
    difficulte: "facile",
    question:
      "Qui est l'ordonnateur principal unique des recettes du budget général, des budgets annexes et des comptes spéciaux du Trésor ?",
    options: [
      "Le Ministre chargé du Budget",
      "Le Directeur Général des Impôts",
      "Le Premier Ministre",
      "Le Président de la République",
    ],
    bonne_reponse: 0,
    explication:
      "Le Ministre chargé du Budget est ordonnateur principal unique des recettes du budget général, des budgets annexes et des comptes spéciaux du Trésor. Il délègue ses fonctions (DGI pour les produits fiscaux, DGD pour les produits douaniers, etc.).",
  },
  {
    id: "fp-079",
    module: "Finances Publiques",
    theme: "Exécution du budget",
    difficulte: "moyen",
    question: "Qui sont les ordonnateurs principaux des dépenses ?",
    options: [
      "Les Présidents des institutions et les Ministres, pour les crédits de leur institution ou ministère",
      "Le seul Ministre chargé du Budget",
      "Les comptables publics",
      "Les contrôleurs financiers",
    ],
    bonne_reponse: 0,
    explication:
      "Les Présidents des institutions et les Ministres sont ordonnateurs principaux des crédits des dotations, des programmes et des budgets annexes de leur institution ou de leur ministère (principe des ordonnateurs multiples introduit par la LOLF).",
  },
  {
    id: "fp-080",
    module: "Finances Publiques",
    theme: "Exécution du budget",
    difficulte: "difficile",
    question: "Que désigne le sigle SIGOBE ?",
    options: [
      "Le Système Intégré de Gestion des Opérations Budgétaires de l'État",
      "Le Service Interministériel de Gestion des Obligations Budgétaires Extérieures",
      "Le Solde Intégré Global du Budget de l'État",
      "Le Système d'Information et de Gestion des Organismes Budgétaires Étatiques",
    ],
    bonne_reponse: 0,
    explication:
      "Le SIGOBE est le Système Intégré de Gestion des Opérations Budgétaires de l'État, destiné à l'élaboration, à l'exécution et à la clôture du budget de l'État. Il relie les différents acteurs (ordonnateurs, comptables, contrôleurs…).",
  },
  {
    id: "fp-081",
    module: "Finances Publiques",
    theme: "Exécution du budget",
    difficulte: "difficile",
    question:
      "Quelle limite s'impose au montant annuel cumulé des virements et transferts affectant un programme ou une dotation ?",
    options: [
      "Il ne peut dépasser 10 % des crédits votés de ce programme ou de cette dotation",
      "Il ne peut dépasser 35 % des crédits votés",
      "Il ne peut dépasser 5 % du budget général",
      "Il n'existe aucune limite réglementaire",
    ],
    bonne_reponse: 0,
    explication:
      "Le montant annuel cumulé des virements et transferts affectant un programme ou une dotation ne peut dépasser 10 % des crédits votés de ce programme ou de cette dotation (limite valable pour le programme débité comme crédité).",
  },
  {
    id: "fp-082",
    module: "Finances Publiques",
    theme: "Exécution du budget",
    difficulte: "moyen",
    question:
      "Qui est ordonnateur délégué pour les dépenses relatives au remboursement de la dette publique ?",
    options: [
      "Le Directeur Général des Financements (DGF)",
      "Le Directeur de la Solde",
      "Le Directeur Général du Budget",
      "L'Agent Comptable Central du Trésor",
    ],
    bonne_reponse: 0,
    explication:
      "Le Directeur Général des Financements est ordonnateur délégué pour les dépenses relatives au remboursement de la dette et aux pertes de change qui y sont liées. Ces dépenses ne sont pas soumises au contrôle a priori du Contrôleur Financier.",
  },
  {
    id: "fp-083",
    module: "Finances Publiques",
    theme: "Exécution du budget",
    difficulte: "moyen",
    question:
      "Dans l'exécution des recettes, quelles sont les étapes de la phase administrative ?",
    options: [
      "La constatation, la liquidation et l'ordonnancement",
      "L'engagement, la liquidation et l'ordonnancement",
      "La prise en charge et le recouvrement",
      "Le visa, la certification et le paiement",
    ],
    bonne_reponse: 0,
    explication:
      "En matière de recettes, la phase administrative comporte la constatation (identifier et évaluer la matière imposable), la liquidation (déterminer le montant de la créance) et l'ordonnancement (ordre de recouvrer). La phase comptable : prise en charge et recouvrement.",
  },

  // =====================================================================
  //  THÈME 9 — Contrôles & Cour des comptes
  // =====================================================================
  {
    id: "fp-084",
    module: "Finances Publiques",
    theme: "Contrôles & Cour des comptes",
    difficulte: "facile",
    question: "Quels sont les grands types de contrôle des finances publiques ?",
    options: [
      "Administratif, juridictionnel et parlementaire (politique)",
      "Interne, externe et mixte",
      "Fiscal, douanier et monétaire",
      "Préventif, curatif et répressif",
    ],
    bonne_reponse: 0,
    explication:
      "Les finances publiques font l'objet d'un contrôle administratif (par l'administration), juridictionnel (Cour des comptes) et parlementaire/politique (le Parlement), exercés a priori ou a posteriori.",
  },
  {
    id: "fp-085",
    module: "Finances Publiques",
    theme: "Contrôles & Cour des comptes",
    difficulte: "facile",
    question: "Un contrôle « a priori » est un contrôle exercé :",
    options: [
      "Avant l'opération (ex. visa préalable du contrôleur financier)",
      "Après l'exécution de l'opération",
      "Uniquement par le Parlement",
      "Uniquement par la Cour des comptes",
    ],
    bonne_reponse: 0,
    explication:
      "Le contrôle a priori s'exerce avant l'opération (par exemple le visa préalable du Contrôleur Financier ou Budgétaire sur les actes de dépense). Le contrôle a posteriori intervient après l'exécution.",
  },
  {
    id: "fp-086",
    module: "Finances Publiques",
    theme: "Contrôles & Cour des comptes",
    difficulte: "moyen",
    question:
      "Par quel texte la Cour des comptes de Côte d'Ivoire a-t-elle été créée, et quand a-t-elle été installée ?",
    options: [
      "Créée par la Constitution du 1er août 2000, installée le 09 janvier 2018",
      "Créée par la LOLF de 2014, installée en 2016",
      "Créée par la loi n°2024-350, installée en 2024",
      "Créée par l'ordonnance de 1959, installée en 1960",
    ],
    bonne_reponse: 0,
    explication:
      "La Cour des comptes a été créée par la Constitution du 1er août 2000 et installée le 09 janvier 2018. Elle est régie par la loi organique n°2018-979 du 27 décembre 2018.",
  },
  {
    id: "fp-087",
    module: "Finances Publiques",
    theme: "Contrôles & Cour des comptes",
    difficulte: "difficile",
    question:
      "En quoi consiste la « règle du double arrêt » appliquée par la Cour des comptes ?",
    options: [
      "La Cour rend d'abord un arrêt provisoire, puis un arrêt définitif, afin de préserver les droits de la défense",
      "La Cour rend deux arrêts identiques pour confirmer sa décision",
      "La Cour statue deux fois par an sur les mêmes comptes",
      "La Cour partage sa décision entre deux chambres",
    ],
    bonne_reponse: 0,
    explication:
      "Pour préserver les droits de la défense, le législateur a institué la règle du double arrêt : les charges relevées contre le comptable lui sont d'abord portées à connaissance par un arrêt provisoire, avant l'arrêt définitif.",
  },
  {
    id: "fp-088",
    module: "Finances Publiques",
    theme: "Contrôles & Cour des comptes",
    difficulte: "difficile",
    question:
      "Quelles sont les trois sortes d'arrêt définitif que peut prendre la Cour des comptes lors du jugement des comptes ?",
    options: [
      "Comptable quitte, comptable en avance, comptable en débet",
      "Comptable acquitté, condamné, relaxé",
      "Arrêt de rejet, d'admission, de renvoi",
      "Arrêt provisoire, définitif, exécutoire",
    ],
    bonne_reponse: 0,
    explication:
      "La Cour peut prendre trois sortes d'arrêt définitif : lorsque le comptable est quitte, lorsqu'il est en avance, ou lorsqu'il est en débet. Dans les deux premiers cas, elle prononce la décharge ; dans le troisième, un arrêt de débet.",
  },
  {
    id: "fp-089",
    module: "Finances Publiques",
    theme: "Contrôles & Cour des comptes",
    difficulte: "moyen",
    question: "Que prononce la Cour des comptes lorsque le comptable est en débet ?",
    options: [
      "Un arrêt de débet, condamnant le comptable à solder son débet avec les intérêts",
      "Un arrêt de décharge définitive",
      "Le remboursement de son cautionnement",
      "Un non-lieu",
    ],
    bonne_reponse: 0,
    explication:
      "Lorsque le montant de l'exercice du comptable est inférieur à la ligne de compte, la Cour prononce un arrêt de débet : elle condamne le comptable à solder son débet avec les intérêts au Trésor.",
  },
  {
    id: "fp-090",
    module: "Finances Publiques",
    theme: "Contrôles & Cour des comptes",
    difficulte: "difficile",
    question:
      "Contre un arrêt définitif de la Cour des comptes, quelle voie de recours est ouverte et devant quelle juridiction ?",
    options: [
      "Un pourvoi en cassation devant la Cour Suprême, dans les deux mois suivant la notification",
      "Un appel devant la Cour d'appel, dans un délai d'un mois",
      "Aucun recours n'est possible, l'arrêt est définitif",
      "Un recours gracieux devant le Ministre du Budget",
    ],
    bonne_reponse: 0,
    explication:
      "Les arrêts définitifs sont exécutoires et sans appel. Toutefois, un pourvoi en cassation peut être introduit devant la Cour Suprême, dans les deux mois de la notification, pour vice de forme, incompétence ou violation de la loi. Le pourvoi n'a pas d'effet suspensif.",
  },
  {
    id: "fp-091",
    module: "Finances Publiques",
    theme: "Contrôles & Cour des comptes",
    difficulte: "moyen",
    question:
      "Quels sont les deux éléments constitutifs de la notion de gestion de fait ?",
    options: [
      "Le maniement des deniers publics et l'absence de titre légal",
      "L'engagement et l'ordonnancement",
      "Le déficit et le débet",
      "La constatation et la liquidation",
    ],
    bonne_reponse: 0,
    explication:
      "La gestion de fait suppose deux éléments : le maniement des deniers publics (recouvrer des recettes ou payer des dépenses) et l'absence de titre légal (la personne n'a pas la qualité de comptable public).",
  },
  {
    id: "fp-092",
    module: "Finances Publiques",
    theme: "Contrôles & Cour des comptes",
    difficulte: "difficile",
    question:
      "Quel est le montant minimum de l'amende sanctionnant une faute de gestion ?",
    options: [
      "20 000 francs, le maximum pouvant atteindre le traitement ou salaire brut annuel",
      "100 000 francs, sans plafond",
      "50 000 francs, plafonné à 1 million",
      "10 000 francs, plafonné au tiers du salaire",
    ],
    bonne_reponse: 0,
    explication:
      "L'amende pour faute de gestion varie selon la nature et la gravité de la faute : le montant minimum ne peut être inférieur à 20 000 francs et le maximum peut atteindre le montant du traitement ou salaire brut annuel à la date de l'infraction.",
  },
  {
    id: "fp-093",
    module: "Finances Publiques",
    theme: "Contrôles & Cour des comptes",
    difficulte: "moyen",
    question: "Pourquoi le contrôle parlementaire est-il théoriquement le contrôle principal ?",
    options: [
      "Parce que les finances publiques sont une matière réservée à la compétence législative (vote des lois de finances)",
      "Parce que le Parlement exécute lui-même le budget",
      "Parce que le Parlement nomme les comptables publics",
      "Parce que le Parlement remplace la Cour des comptes",
    ],
    bonne_reponse: 0,
    explication:
      "Théoriquement, le contrôle parlementaire est le contrôle principal car les finances publiques constituent une matière réservée à la compétence législative : le vote des lois de finances permet aux députés d'exercer un contrôle sur le programme du gouvernement.",
  },

  // =====================================================================
  //  THÈME 10 — Statistiques & TOFE
  // =====================================================================
  {
    id: "fp-094",
    module: "Finances Publiques",
    theme: "Statistiques & TOFE",
    difficulte: "facile",
    question: "Que signifie le sigle TOFE ?",
    options: [
      "Tableau des Opérations Financières de l'État",
      "Tableau des Obligations Fiscales de l'État",
      "Total des Opérations Financières Extérieures",
      "Tableau d'Orientation Financière et Économique",
    ],
    bonne_reponse: 0,
    explication:
      "Le TOFE est le Tableau des Opérations Financières de l'État : un document statistique qui retrace toutes les transactions financières d'une unité du secteur public sur une période donnée, établi selon les standards internationaux.",
  },
  {
    id: "fp-095",
    module: "Finances Publiques",
    theme: "Statistiques & TOFE",
    difficulte: "facile",
    question: "Que mesurent les statistiques des finances publiques (SFP) ?",
    options: [
      "Les activités financières des administrations publiques d'une économie",
      "Uniquement les recettes fiscales de l'État",
      "Le patrimoine des entreprises privées",
      "La masse monétaire en circulation",
    ],
    bonne_reponse: 0,
    explication:
      "Les statistiques de finances publiques (SFP) mesurent les activités financières des administrations publiques d'une économie. Elles offrent des instruments de pilotage et assurent la comparabilité entre les pays.",
  },
  {
    id: "fp-096",
    module: "Finances Publiques",
    theme: "Statistiques & TOFE",
    difficulte: "facile",
    question: "Le TOFE comprend trois parties. Lesquelles ?",
    options: [
      "Les recettes totales & dons, les dépenses totales et le financement",
      "Les impôts directs, les impôts indirects et les dons",
      "La dette intérieure, la dette extérieure et les intérêts",
      "Le fonctionnement, l'investissement et les transferts",
    ],
    bonne_reponse: 0,
    explication:
      "Le TOFE comprend trois parties : les recettes totales & dons, les dépenses totales et le financement.",
  },
  {
    id: "fp-097",
    module: "Finances Publiques",
    theme: "Statistiques & TOFE",
    difficulte: "difficile",
    question: "Quelle relation d'équilibre caractérise le TOFE ?",
    options: [
      "Recette totale & dons – Dépenses totales + financement = 0",
      "Recettes = Dépenses",
      "Dette = Encours + arriérés",
      "Solde primaire = Recettes – Intérêts",
    ],
    bonne_reponse: 0,
    explication:
      "Bien que le TOFE ne soit pas un document comptable, il est en principe équilibré : Recette totale & dons – Dépenses totales + financement = 0 (autrement dit, recette moins dépense est égal au financement).",
  },
  {
    id: "fp-098",
    module: "Finances Publiques",
    theme: "Statistiques & TOFE",
    difficulte: "facile",
    question: "Le TOFE est-il un document comptable ?",
    options: [
      "Non, ce n'est pas un document comptable, mais il est en principe équilibré",
      "Oui, c'est le principal document comptable de l'État",
      "Oui, il remplace la loi de règlement",
      "Non, et il n'est jamais équilibré",
    ],
    bonne_reponse: 0,
    explication:
      "Le TOFE n'est pas un document comptable. Toutefois, il est en principe équilibré (recette moins dépense = financement) et sert au pilotage des finances publiques.",
  },
  {
    id: "fp-099",
    module: "Finances Publiques",
    theme: "Statistiques & TOFE",
    difficulte: "moyen",
    question: "Quelle structure élabore le TOFE en Côte d'Ivoire ?",
    options: [
      "La DGTCP, à travers sa structure technique la DCS (Direction de la Coordination Statistique)",
      "La Direction Générale des Impôts (DGI)",
      "La Cour des comptes",
      "La BCEAO",
    ],
    bonne_reponse: 0,
    explication:
      "En Côte d'Ivoire, le TOFE est élaboré par la DGTCP à travers sa structure technique, la DCS (Direction de la Coordination Statistique), à partir d'informations collectées auprès de la DGI, DGD, DGBF, etc.",
  },
  {
    id: "fp-100",
    module: "Finances Publiques",
    theme: "Statistiques & TOFE",
    difficulte: "difficile",
    question: "Comment se calcule le solde budgétaire global dans le TOFE ?",
    options: [
      "Recettes totales et dons – dépenses totales",
      "Recettes totales (hors dons) – dépenses totales (hors intérêts de la dette)",
      "Encours – amortissement",
      "Recettes fiscales – masse salariale",
    ],
    bonne_reponse: 0,
    explication:
      "Le solde budgétaire global = Recettes totales et dons MOINS les dépenses totales. Il indique la capacité (excédent) ou le besoin (déficit) de financement de l'État.",
  },
  {
    id: "fp-101",
    module: "Finances Publiques",
    theme: "Statistiques & TOFE",
    difficulte: "difficile",
    question: "Comment se définit le solde primaire dans le TOFE ?",
    options: [
      "Recettes totales (hors dons) – dépenses totales (hors intérêts dus sur la dette publique)",
      "Recettes totales et dons – dépenses totales",
      "Recettes fiscales – dépenses de fonctionnement",
      "Encours (n) – encours (n-1)",
    ],
    bonne_reponse: 0,
    explication:
      "Le solde primaire = Recettes totales (hors dons) MOINS les dépenses totales (hors intérêts dus sur la dette publique). Il mesure l'effort d'ajustement à entreprendre pour faire face au service de la dette.",
  },
  {
    id: "fp-102",
    module: "Finances Publiques",
    theme: "Statistiques & TOFE",
    difficulte: "moyen",
    question:
      "Selon quel manuel le TOFE actuel de la Côte d'Ivoire est-il élaboré, et vers quel manuel évolue-t-il ?",
    options: [
      "Élaboré selon le MSFP 1986, en évolution vers le MSFP 2001/2014",
      "Élaboré selon le MSFP 2014, en évolution vers le MSFP 1986",
      "Élaboré selon les normes IFRS",
      "Élaboré selon le SYSCOHADA",
    ],
    bonne_reponse: 0,
    explication:
      "Le TOFE actuel couvre l'administration centrale budgétaire y compris les caisses de sécurité et est élaboré selon le manuel des statistiques des finances publiques (MSFP) 1986. Des travaux sont en cours pour produire le TOFE selon le MSFP 2001/2014.",
  },

  // =====================================================================
  //  THÈME 11 — Dette publique & UEMOA
  // =====================================================================
  {
    id: "fp-103",
    module: "Finances Publiques",
    theme: "Dette publique & UEMOA",
    difficulte: "facile",
    question: "Qu'est-ce que la dette publique ?",
    options: [
      "L'ensemble des engagements financiers pris sous forme d'emprunts par l'État, avec obligation de remboursement du capital et/ou des intérêts",
      "L'ensemble des recettes fiscales non recouvrées",
      "Le total des dépenses d'investissement de l'année",
      "L'écart entre les importations et les exportations",
    ],
    bonne_reponse: 0,
    explication:
      "La dette publique est l'ensemble des engagements effectifs à la charge d'un État, avec pour obligation le remboursement du capital et/ou le versement des intérêts. C'est un moyen de financement (instrument de gestion).",
  },
  {
    id: "fp-104",
    module: "Finances Publiques",
    theme: "Dette publique & UEMOA",
    difficulte: "facile",
    question: "En quelles deux composantes se décompose la dette publique ?",
    options: [
      "La dette intérieure et la dette extérieure",
      "La dette multilatérale et la dette bilatérale",
      "L'encours et les arriérés",
      "Le capital et les intérêts",
    ],
    bonne_reponse: 0,
    explication:
      "La dette publique comprend la dette intérieure et la dette extérieure, selon l'origine du créancier (résident ou non-résident).",
  },
  {
    id: "fp-105",
    module: "Finances Publiques",
    theme: "Dette publique & UEMOA",
    difficulte: "facile",
    question: "Quelle est la différence de libellé entre dette intérieure et dette extérieure ?",
    options: [
      "La dette intérieure est libellée en monnaie locale ; la dette extérieure généralement en devises (Euro, Dollar US…)",
      "La dette intérieure est en devises ; la dette extérieure en monnaie locale",
      "Les deux sont libellées en francs CFA",
      "Les deux sont libellées en dollars US",
    ],
    bonne_reponse: 0,
    explication:
      "La dette intérieure est contractée auprès d'agents économiques résidents et toujours libellée en monnaie locale. La dette extérieure est contractée auprès d'agents non-résidents et généralement libellée en devises (Euro, Dollar US, etc.).",
  },
  {
    id: "fp-106",
    module: "Finances Publiques",
    theme: "Dette publique & UEMOA",
    difficulte: "facile",
    question: "Parmi ces créanciers, lesquels relèvent de la dette multilatérale ?",
    options: [
      "Le FMI, la Banque Mondiale et la BAD",
      "Le Club de Paris et le Club de Londres",
      "Les banques commerciales locales",
      "Les détenteurs d'Eurobonds",
    ],
    bonne_reponse: 0,
    explication:
      "La dette multilatérale est contractée auprès d'organismes internationaux dont le FMI, la Banque Mondiale et la BAD. Le Club de Paris (créanciers bilatéraux) et le Club de Londres (dette commerciale/privée) sont d'autres catégories.",
  },
  {
    id: "fp-107",
    module: "Finances Publiques",
    theme: "Dette publique & UEMOA",
    difficulte: "difficile",
    question:
      "Quel règlement communautaire constitue le cadre de référence de la politique d'endettement public dans l'UEMOA ?",
    options: [
      "Le Règlement n°09/2007/CM/UEMOA",
      "La Directive n°06/2009/CM/UEMOA",
      "Le Règlement n°09/2007/CM/CEDEAO",
      "La Loi n°2024-350 du 06 juin 2024",
    ],
    bonne_reponse: 0,
    explication:
      "Le Règlement n°09/2007/CM/UEMOA porte cadre de référence de la politique d'endettement public et de gestion de la dette publique dans les États membres de l'UEMOA.",
  },
  {
    id: "fp-108",
    module: "Finances Publiques",
    theme: "Dette publique & UEMOA",
    difficulte: "facile",
    question:
      "À quelle date la Côte d'Ivoire a-t-elle atteint le point d'achèvement de l'Initiative PPTE ?",
    options: [
      "Le 26 juin 2012",
      "Le 1er août 2000",
      "Le 09 janvier 2018",
      "En janvier 1994",
    ],
    bonne_reponse: 0,
    explication:
      "La Côte d'Ivoire a atteint le point d'achèvement de l'Initiative PPTE le 26 juin 2012, ce qui a contribué à restaurer sa crédibilité vis-à-vis de la communauté financière internationale.",
  },
  {
    id: "fp-109",
    module: "Finances Publiques",
    theme: "Dette publique & UEMOA",
    difficulte: "difficile",
    question:
      "Quel montant de dette a été annulé au titre de l'IPPTE au point d'achèvement, et pour quel taux d'annulation ?",
    options: [
      "4 090 milliards de FCFA, soit un taux d'annulation de 64,2 %",
      "1 173 milliards de FCFA, soit 41 %",
      "6 264 milliards de FCFA, soit 100 %",
      "2 283 milliards de FCFA, soit 36 %",
    ],
    bonne_reponse: 0,
    explication:
      "L'IPPTE a permis un allègement de 4 090 milliards de FCFA annulés sur un stock de 6 373,9 milliards, soit un taux d'annulation de 64,2 % (répartis entre PPTE, IADM et C2D).",
  },
  {
    id: "fp-110",
    module: "Finances Publiques",
    theme: "Dette publique & UEMOA",
    difficulte: "facile",
    question:
      "Quel événement de janvier 1994 a entraîné presque un doublement du stock de la dette extérieure de la Côte d'Ivoire ?",
    options: [
      "La dévaluation du franc CFA",
      "Le point d'achèvement de l'IPPTE",
      "La création de la Cour des comptes",
      "L'adoption de la LOLF",
    ],
    bonne_reponse: 0,
    explication:
      "La dévaluation du franc CFA en janvier 1994 a entraîné presque un doublement du stock de la dette extérieure, dans un contexte de chute des cours des produits d'exportation et de hausse des taux d'intérêt.",
  },
  {
    id: "fp-111",
    module: "Finances Publiques",
    theme: "Dette publique & UEMOA",
    difficulte: "difficile",
    question:
      "Quelle est l'évolution institutionnelle de la gestion de la dette publique en Côte d'Ivoire ?",
    options: [
      "CAA (1959-1997) → Trésor Public/DGTCP (1997-2021) → Direction Générale des Financements (depuis le 08 septembre 2021)",
      "DGF (1959) → CAA (1997) → Trésor (2021)",
      "Trésor (1959) → CAA (1997) → BCEAO (2021)",
      "Cour des comptes (1959) → DGI (1997) → DGF (2021)",
    ],
    bonne_reponse: 0,
    explication:
      "La gestion de la dette a été assurée par la CAA (Caisse Autonome d'Amortissement) de 1959 à 1997, puis par le Trésor Public (DGTCP) de 1997 à 2021, avant d'être confiée à la Direction Générale des Financements (DGF) depuis le 08 septembre 2021.",
  },
  {
    id: "fp-112",
    module: "Finances Publiques",
    theme: "Dette publique & UEMOA",
    difficulte: "difficile",
    question:
      "Quelle est la formule de calcul de l'encours de la dette ?",
    options: [
      "Encours (n) = Encours (n-1) + Tirages – Service dû en capital",
      "Encours (n) = Encours (n-1) + Intérêts – Dons",
      "Encours (n) = Recettes – Dépenses + Financement",
      "Encours (n) = Stock + Arriérés – Amortissement",
    ],
    bonne_reponse: 0,
    explication:
      "La formule de calcul de l'encours : Encours (n) = Encours (n-1) + Tirages – Service dû en capital. L'encours est le montant décaissé (tiré) mais non encore remboursé ou annulé.",
  },
  {
    id: "fp-113",
    module: "Finances Publiques",
    theme: "Dette publique & UEMOA",
    difficulte: "moyen",
    question: "Que désigne le mécanisme C2D ?",
    options: [
      "Le Contrat de Désendettement et de Développement, mécanisme d'allègement de la dette par la France sous forme de subventions",
      "La Caisse de Consolidation de la Dette",
      "Le Cadre Communautaire de la Dette",
      "Le Comité de Contrôle de la Dette",
    ],
    bonne_reponse: 0,
    explication:
      "Le C2D (Contrat de Désendettement et de Développement) est un mécanisme complémentaire d'allègement de la dette par la France : après remboursement, la France reverse les sommes sous forme de subventions finançant des secteurs prioritaires (éducation, santé, infrastructures…).",
  },
  {
    id: "fp-114",
    module: "Finances Publiques",
    theme: "Dette publique & UEMOA",
    difficulte: "difficile",
    question:
      "Quelle loi nationale récente porte politique nationale d'endettement et de gestion de la dette publique ?",
    options: [
      "La loi n°2024-350 du 06 juin 2024",
      "La loi organique n°2014-336 du 05 juin 2014",
      "La loi n°2018-979 du 27 décembre 2018",
      "Le décret n°2011-424 du 30 novembre 2011",
    ],
    bonne_reponse: 0,
    explication:
      "La loi n°2024-350 du 06 juin 2024 porte politique nationale d'endettement et de gestion de la dette publique. Elle complète le cadre communautaire (Règlement n°09/2007/CM/UEMOA).",
  },
  {
    id: "fp-115",
    module: "Finances Publiques",
    theme: "Dette publique & UEMOA",
    difficulte: "moyen",
    question:
      "Parmi les agrégats de la dette, comment définit-on le « stock de la dette » ?",
    options: [
      "La somme de l'encours et des arriérés",
      "Le total des tirages de l'année",
      "Le montant des intérêts payés",
      "La différence entre encours (n) et encours (n-1)",
    ],
    bonne_reponse: 0,
    explication:
      "Parmi les opérations de stock (cumul) : l'encours (décaissé non remboursé), les arriérés (montants non payés à bonne date) et le stock de la dette, qui est la somme de l'encours et des arriérés.",
  }
);
