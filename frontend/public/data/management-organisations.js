/*
 * ============================================================================
 *  MODULE 3 — MANAGEMENT DES ORGANISATIONS PUBLIQUES  (CPFAE / Catégorie A)
 *  Source : "CPFAE Management des organisations _Catégorie A.pdf" (107 pages)
 *  Cadre administratif A4/A3 — Unité pédagogique Management des Organisations
 * ----------------------------------------------------------------------------
 *  Ce fichier alimente window.QUESTIONS / window.MODULES_META (comme les
 *  autres data/*.js). Il est chargé par index.html APRÈS questions.js.
 *  IDs préfixés `mo-`. Modules/thèmes dérivés automatiquement des champs.
 * ============================================================================
 */

// Métadonnée du module
window.MODULES_META = window.MODULES_META || {};
window.MODULES_META["Management des Organisations"] = {
  ordre: 3,
  icone: "🏛️",
  description:
    "Du management des organisations au management public : acteurs, NMP, planification et décision, leadership et motivation, gouvernance, éthique, performance, changement et gestion des conflits.",
};

window.QUESTIONS = window.QUESTIONS || [];
window.QUESTIONS.push(
  // =====================================================================
  //  THÈME 1 — Management des organisations & management public
  // =====================================================================
  {
    id: "mo-001",
    module: "Management des Organisations",
    theme: "Management des organisations & management public",
    difficulte: "facile",
    question:
      "Selon Robbins (1998), comment définit-on une organisation vue comme « entité » ?",
    options: [
      "Un ensemble de moyens structurés constituant une unité de coordination, aux frontières identifiables, fonctionnant en continu pour atteindre des objectifs partagés",
      "Un groupe de personnes réunies temporairement sans objectif commun",
      "Une administration publique exclusivement chargée de l'intérêt général",
      "Un ensemble de règles écrites impersonnelles",
    ],
    bonne_reponse: 0,
    explication:
      "Robbins définit l'organisation comme un ensemble de moyens structurés, unité de coordination aux frontières identifiables, fonctionnant en continu en vue d'objectifs partagés par ses membres.",
  },
  {
    id: "mo-002",
    module: "Management des Organisations",
    theme: "Management des organisations & management public",
    difficulte: "moyen",
    question:
      "Dans la culture française, quelle distinction fait-on entre « management » et « administration » (Encadré 1) ?",
    options: [
      "Le management est relatif à la chose privée (bien et propriété), l'administration à la chose publique, laïque et républicaine",
      "Le management concerne l'État, l'administration concerne l'entreprise",
      "Les deux termes sont strictement synonymes",
      "Le management est juridique, l'administration est commerciale",
    ],
    bonne_reponse: 0,
    explication:
      "La culture française sépare le Management (relatif à la chose privée : bien et propriété) de l'Administration (relative à la chose publique, laïque et républicaine).",
  },
  {
    id: "mo-003",
    module: "Management des Organisations",
    theme: "Management des organisations & management public",
    difficulte: "moyen",
    question:
      "Quelle est l'étymologie latine du mot « management » ?",
    options: [
      "Du latin « manus » qui signifie main (outil à main)",
      "Du latin « manere » qui signifie rester",
      "Du grec « manos » qui signifie diriger",
      "Du latin « mandare » qui signifie ordonner",
    ],
    bonne_reponse: 0,
    explication:
      "Le mot management dérive du latin « manus » (la main, un outil à main), puis de l'italien « maneggiare » (entraîner un cheval au manège) et de l'anglais « to manage ».",
  },
  {
    id: "mo-004",
    module: "Management des Organisations",
    theme: "Management des organisations & management public",
    difficulte: "facile",
    question:
      "Qu'est-ce qui caractérise l'organisation publique dans la typologie des organisations ?",
    options: [
      "Produire des services non marchands, redistribuer les richesses et réguler l'économie avec une finalité non lucrative d'intérêt général et une propriété publique",
      "Rechercher exclusivement le profit dans un cadre concurrentiel",
      "Fonctionner uniquement au niveau international",
      "Distribuer des dividendes à des actionnaires privés",
    ],
    bonne_reponse: 0,
    explication:
      "L'organisation publique produit des services non marchands, redistribue les richesses et régule l'économie, avec une finalité non lucrative de satisfaction de l'intérêt général et une propriété publique.",
  },
  {
    id: "mo-005",
    module: "Management des Organisations",
    theme: "Management des organisations & management public",
    difficulte: "moyen",
    question:
      "Selon Fayol (1916), quelles sont les cinq (5) tâches essentielles de la fonction administrative (POCCC) ?",
    options: [
      "Prévoir, Organiser, Commander, Coordonner, Contrôler",
      "Planifier, Organiser, Diriger, Communiquer, Corriger",
      "Prévoir, Organiser, Concevoir, Contrôler, Conclure",
      "Produire, Optimiser, Coordonner, Commander, Compter",
    ],
    bonne_reponse: 0,
    explication:
      "Fayol (1916) identifie les cinq tâches administratives essentielles résumées par POCCC : Prévoir, Organiser, Commander, Coordonner, Contrôler.",
  },
  {
    id: "mo-006",
    module: "Management des Organisations",
    theme: "Management des organisations & management public",
    difficulte: "moyen",
    question:
      "Dans la typologie des théories fondatrices, quel auteur est associé à l'école bureaucratique et aux trois formes d'autorité ?",
    options: [
      "Max Weber (1911)",
      "Henri Fayol (1916)",
      "Elton Mayo",
      "Herbert Simon",
    ],
    bonne_reponse: 0,
    explication:
      "Max Weber (1911) fonde l'école bureaucratique et met en évidence trois formes d'autorité : charismatique, traditionnelle et bureaucratique (rationnelle/légale). La bureaucratie est pour lui la forme la plus rationnelle d'organisation.",
  },
  {
    id: "mo-007",
    module: "Management des Organisations",
    theme: "Management des organisations & management public",
    difficulte: "difficile",
    question:
      "Selon Weber, quelles sont les trois (3) formes d'autorité ?",
    options: [
      "Charismatique, traditionnelle, bureaucratique (rationnelle/légale)",
      "Directive, persuasive, délégative",
      "Politique, administrative, technique",
      "Stratégique, tactique, opérationnelle",
    ],
    bonne_reponse: 0,
    explication:
      "Weber distingue l'autorité charismatique (qualités du leader), traditionnelle (le statut du poste) et bureaucratique ou rationnelle/légale (règles écrites selon des critères objectifs).",
  },
  {
    id: "mo-008",
    module: "Management des Organisations",
    theme: "Management des organisations & management public",
    difficulte: "moyen",
    question:
      "À quelle école de pensée rattache-t-on Mayo, Maslow et Herzberg ?",
    options: [
      "L'école comportementale ou behavioriste (relations humaines)",
      "L'école administrative de Fayol",
      "L'école bureaucratique de Weber",
      "L'école de Carnegie",
    ],
    bonne_reponse: 0,
    explication:
      "Mayo, Maslow et Herzberg relèvent de l'école comportementale/behavioriste (relations humaines), centrée sur l'analyse des besoins sociaux, l'implication et la motivation des salariés.",
  },
  {
    id: "mo-009",
    module: "Management des Organisations",
    theme: "Management des organisations & management public",
    difficulte: "facile",
    question:
      "Quelles sont les cinq (5) grandes fonctions du management ?",
    options: [
      "Planification, Organisation, Direction, Contrôle et Gestion des Ressources Humaines",
      "Prévision, Budget, Audit, Communication et Contrôle",
      "Stratégie, Tactique, Opération, Décision et Évaluation",
      "Recrutement, Formation, Rémunération, Notation et Discipline",
    ],
    bonne_reponse: 0,
    explication:
      "Le management se résume en cinq grandes fonctions : la Planification, l'Organisation, la Direction, le Contrôle et la G.R.H.",
  },
  {
    id: "mo-010",
    module: "Management des Organisations",
    theme: "Management des organisations & management public",
    difficulte: "difficile",
    question:
      "Quel axe du management est « focalisé sur la légitimité et l'image de l'entreprise dans la société » ?",
    options: [
      "Le management sociétal (extérieur)",
      "Le management concurrentiel (le marché)",
      "Le management entrepreneurial (le futur)",
      "Le management administratif (l'intérieur)",
    ],
    bonne_reponse: 0,
    explication:
      "Le management sociétal (extérieur) est focalisé sur la légitimité et l'image de l'entreprise dans la société. Le concurrentiel vise le marché, l'entrepreneurial le futur (opportunités/innovation), l'administratif l'intérieur (mobilisation des moyens).",
  },
  {
    id: "mo-011",
    module: "Management des Organisations",
    theme: "Management des organisations & management public",
    difficulte: "moyen",
    question:
      "Quelle dimension du management consiste à définir les grandes orientations de l'organisation sur un horizon de moyen ou long terme ?",
    options: [
      "Le management stratégique",
      "Le management tactique",
      "Le management opérationnel",
      "Le management administratif",
    ],
    bonne_reponse: 0,
    explication:
      "Le management stratégique définit les grandes orientations à moyen/long terme pour améliorer, modifier ou conforter la position concurrentielle. Le tactique optimise les ressources ; l'opérationnel pilote au quotidien.",
  },
  {
    id: "mo-012",
    module: "Management des Organisations",
    theme: "Management des organisations & management public",
    difficulte: "facile",
    question:
      "Comment définit-on l'administration publique dans ce cours ?",
    options: [
      "L'ensemble des structures étatiques, organisations, processus et ressources chargés de mettre en œuvre les politiques publiques pour le bon fonctionnement des institutions de l'État",
      "L'ensemble des entreprises privées sous contrôle de l'État",
      "Le seul pouvoir exécutif et son gouvernement",
      "L'ensemble des collectivités territoriales décentralisées",
    ],
    bonne_reponse: 0,
    explication:
      "L'administration publique est l'ensemble des structures étatiques, organisations, processus et ressources chargés de mettre en œuvre les politiques publiques pour le bon fonctionnement des institutions de l'État.",
  },
  {
    id: "mo-013",
    module: "Management des Organisations",
    theme: "Management des organisations & management public",
    difficulte: "moyen",
    question:
      "Quelles sont les trois (3) catégories de service public ?",
    options: [
      "Les services régaliens ou de souveraineté, les services sociaux et culturels, les services à caractère économique (SPIC)",
      "Les services centraux, déconcentrés et décentralisés",
      "Les services gratuits, payants et mixtes",
      "Les services de l'État, des collectivités et des associations",
    ],
    bonne_reponse: 0,
    explication:
      "On distingue les services régaliens/de souveraineté (justice, police, défense, finances publiques), les services sociaux et culturels (éducation, santé…) et les services à caractère économique ou SPIC (énergie, transport, communication).",
  },
  {
    id: "mo-014",
    module: "Management des Organisations",
    theme: "Management des organisations & management public",
    difficulte: "difficile",
    question:
      "Le principe selon lequel le service public doit modifier ses règles et moyens selon les contingences de l'environnement pour répondre aux besoins des usagers s'appelle :",
    options: [
      "Le principe d'adaptabilité (ou mutabilité)",
      "Le principe de continuité",
      "Le principe d'égalité",
      "Le principe de neutralité",
    ],
    bonne_reponse: 0,
    explication:
      "Le principe d'adaptabilité (ou mutabilité) exprime la capacité du service public à modifier ses règles et moyens selon les contingences de l'environnement. La continuité vise le fonctionnement régulier, l'égalité le traitement sans discrimination.",
  },
  {
    id: "mo-015",
    module: "Management des Organisations",
    theme: "Management des organisations & management public",
    difficulte: "moyen",
    question:
      "Dans l'organisation de l'administration publique, quel niveau est « directement en contact avec les usagers du service public » ?",
    options: [
      "L'administration locale",
      "L'administration centrale",
      "L'administration déconcentrée",
      "Le cabinet ministériel",
    ],
    bonne_reponse: 0,
    explication:
      "L'administration locale est directement en contact avec les usagers pour traduire l'effectivité de la mission du ministère. La centrale définit les politiques, la déconcentrée les met en œuvre techniquement.",
  },
  {
    id: "mo-016",
    module: "Management des Organisations",
    theme: "Management des organisations & management public",
    difficulte: "difficile",
    question:
      "Selon Bartoli (2005), le management public est l'ensemble des processus de finalisation, d'organisation, d'animation et de contrôle des organisations publiques visant à :",
    options: [
      "Développer leurs performances générales et piloter leur évolution dans le respect de leur vocation",
      "Maximiser leur profit et leur rentabilité financière",
      "Remplacer totalement la bureaucratie par le marché",
      "Supprimer les règles et procédures administratives",
    ],
    bonne_reponse: 0,
    explication:
      "Pour Bartoli (2005), le management public vise à développer les performances générales des organisations publiques et à piloter leur évolution dans le respect de leur vocation (service public).",
  },
  {
    id: "mo-017",
    module: "Management des Organisations",
    theme: "Management des organisations & management public",
    difficulte: "moyen",
    question:
      "Selon Peter Drucker, quelle est la différence entre efficacité et efficience ?",
    options: [
      "Par efficacité on fait de bonnes choses (atteinte des objectifs) ; par efficience on fait bien les choses (à moindre coût)",
      "L'efficacité concerne les coûts, l'efficience les résultats",
      "Les deux notions sont identiques",
      "L'efficacité est financière, l'efficience est humaine",
    ],
    bonne_reponse: 0,
    explication:
      "Drucker résume : « Par efficacité on fait de bonnes choses ; par efficience on fait bien les choses. » L'efficacité vise l'atteinte des objectifs, l'efficience l'usage optimal des ressources (moindre coût).",
  },
  {
    id: "mo-018",
    module: "Management des Organisations",
    theme: "Management des organisations & management public",
    difficulte: "difficile",
    question:
      "Dans le « branding territorial », en quoi consiste la démarche ?",
    options: [
      "Transformer les territoires en « destinations » attractives proposant une offre sous forme de package d'expériences garantis par une « marque »",
      "Vendre des terrains publics à des investisseurs privés",
      "Fusionner plusieurs collectivités en une seule région",
      "Interdire toute communication commerciale d'une commune",
    ],
    bonne_reponse: 0,
    explication:
      "Le branding territorial (années 1990) transforme les territoires en destinations attractives proposant une offre-package d'expériences, d'émotions et de souvenirs garantis par une marque, ciblant investisseurs, talents et touristes.",
  },

  // =====================================================================
  //  THÈME 2 — Le manager et le cadre public
  // =====================================================================
  {
    id: "mo-019",
    module: "Management des Organisations",
    theme: "Le manager et le cadre public",
    difficulte: "moyen",
    question:
      "Selon Mintzberg (1995), quelles sont les trois fonctions qu'un manager réalise au quotidien ?",
    options: [
      "L'information (chercher et communiquer), le contact (relier, guider), l'action (décider et mettre en œuvre)",
      "La prévision, l'organisation et le contrôle",
      "Le recrutement, la formation et la notation",
      "La stratégie, la tactique et l'opération",
    ],
    bonne_reponse: 0,
    explication:
      "Mintzberg observe trois fonctions du manager au quotidien : l'information (chercher/communiquer), le contact (relier/guider) et l'action (décider/mettre en œuvre). L'essentiel étant de motiver, responsabiliser et encourager.",
  },
  {
    id: "mo-020",
    module: "Management des Organisations",
    theme: "Le manager et le cadre public",
    difficulte: "difficile",
    question:
      "Dans la typologie des rôles du manager (Mintzberg), les rôles « symbole, dirigeant, liaison » correspondent à quelle catégorie ?",
    options: [
      "Les rôles interpersonnels",
      "Les rôles d'information",
      "Les rôles de décision",
      "Les rôles de contrôle",
    ],
    bonne_reponse: 0,
    explication:
      "Les rôles interpersonnels regroupent symbole, dirigeant et liaison. Les rôles d'information : récepteur, transmetteur, porte-parole. Les rôles de décision : chef d'entreprise, pacificateur, répartiteur de ressources, négociateur.",
  },
  {
    id: "mo-021",
    module: "Management des Organisations",
    theme: "Le manager et le cadre public",
    difficulte: "moyen",
    question:
      "Selon Shaw (Trust in the balance), quelles sont les trois (3) bases de la confiance ?",
    options: [
      "La production de résultats, l'intégrité, le souci des autres",
      "La compétence, l'autorité, la sanction",
      "La règle, le contrôle, l'obéissance",
      "La communication, la délégation, la coopération",
    ],
    bonne_reponse: 0,
    explication:
      "Shaw identifie trois bases de la confiance : la production de résultats (compter sur les références antérieures), l'intégrité (cohérence paroles/actes) et le souci des autres (intérêt général avant intérêt particulier).",
  },
  {
    id: "mo-022",
    module: "Management des Organisations",
    theme: "Le manager et le cadre public",
    difficulte: "difficile",
    question:
      "Quels sont les trois (3) niveaux de confiance identifiés dans le cours ?",
    options: [
      "La confiance rationnelle, la confiance interpersonnelle, la confiance institutionnelle",
      "La confiance légale, morale et sociale",
      "La confiance directe, indirecte et mixte",
      "La confiance stratégique, tactique et opérationnelle",
    ],
    bonne_reponse: 0,
    explication:
      "On distingue la confiance rationnelle (calcul rationnel/sanctions), la confiance interpersonnelle (bases cognitives et affectives) et la confiance institutionnelle (ancrée sur un système légal, perçue comme repère public).",
  },
  {
    id: "mo-023",
    module: "Management des Organisations",
    theme: "Le manager et le cadre public",
    difficulte: "moyen",
    question:
      "Selon la loi n°2023-892 du 23 novembre 2023, quelles fonctions sont rattachées à la catégorie A ?",
    options: [
      "Études générales, Conception, Direction, Supervision",
      "Exécution, Contrôle, Application, Saisie",
      "Recrutement, Formation, Notation, Discipline",
      "Planification, Budget, Audit, Communication",
    ],
    bonne_reponse: 0,
    explication:
      "La loi n°2023-892 rattache à la catégorie A les fonctions d'Études générales, de Conception, de Direction et de Supervision.",
  },
  {
    id: "mo-024",
    module: "Management des Organisations",
    theme: "Le manager et le cadre public",
    difficulte: "facile",
    question:
      "À partir de quel grade débute la carrière de cadre supérieur public ?",
    options: [
      "Le grade A4 (avec transition possible par le grade intermédiaire A3)",
      "Le grade A1",
      "Le grade B2",
      "Le grade C3",
    ],
    bonne_reponse: 0,
    explication:
      "Le cadre public est un agent public qui débute la carrière de cadre supérieur à partir du grade A4, avec une transition possible par le grade intermédiaire ou moyen A3.",
  },
  {
    id: "mo-025",
    module: "Management des Organisations",
    theme: "Le manager et le cadre public",
    difficulte: "difficile",
    question:
      "Au cœur de quelles trois (3) cultures se trouve le cadre public pour assurer la performance de l'administration ?",
    options: [
      "Culture juridique, culture administrative, culture entreprise/managériale",
      "Culture politique, culture sociale, culture économique",
      "Culture nationale, régionale et locale",
      "Culture orale, écrite et numérique",
    ],
    bonne_reponse: 0,
    explication:
      "Le cadre public est au cœur de trois cultures : juridique (cluster juridique, droit public), administrative (cluster public, sciences politiques/administratives) et entreprise/managériale (cluster corporate, management), à renforcer par une culture éthique.",
  },
  {
    id: "mo-026",
    module: "Management des Organisations",
    theme: "Le manager et le cadre public",
    difficulte: "moyen",
    question:
      "Qu'est-ce qui différencie le statut général de la fonction publique des statuts particuliers ?",
    options: [
      "Le statut général pose les règles communes ; les statuts particuliers adaptent ou dérogent selon la situation des corps (ex. collectivités territoriales, diplomates)",
      "Le statut général ne concerne que les contractuels",
      "Les statuts particuliers sont supérieurs au statut général",
      "Il n'y a aucune différence entre les deux",
    ],
    bonne_reponse: 0,
    explication:
      "Le statut général (loi n°2023-892) pose les règles communes. Les statuts particuliers adaptent ces règles générales ou y dérogent selon la situation des corps (collectivités territoriales, diplomates, personnel d'ambassade…).",
  },
  {
    id: "mo-027",
    module: "Management des Organisations",
    theme: "Le manager et le cadre public",
    difficulte: "moyen",
    question:
      "En début de carrière, quelles responsabilités le cadre supérieur de catégorie A exerce-t-il typiquement ?",
    options: [
      "Chargé d'études, chef de service, sous-directeur, chef de projet",
      "Directeur général, cabinet ministériel, inspecteur d'État",
      "Agent de saisie, secrétaire, planton",
      "Représentant national à l'international",
    ],
    bonne_reponse: 0,
    explication:
      "En début de carrière, le cadre A exerce comme chargé d'études, chef de service, sous-directeur ou chef de projet. Au sommet de carrière : coordonnateur/directeur de projet, directeur d'administration centrale, directeur général, cabinet ministériel…",
  },
  {
    id: "mo-028",
    module: "Management des Organisations",
    theme: "Le manager et le cadre public",
    difficulte: "difficile",
    question:
      "En quoi le cadre public représente-t-il « un relais essentiel entre stratégie et exécution » ?",
    options: [
      "Il pilote une unité opérationnelle, met en œuvre les décisions de la hiérarchie, supervise une équipe et garantit la bonne exécution administrative des tâches",
      "Il décide seul des orientations politiques de l'État",
      "Il se limite à des tâches d'exécution sans encadrement",
      "Il ne rend compte à aucune hiérarchie",
    ],
    bonne_reponse: 0,
    explication:
      "Le cadre A relaie stratégie et exécution : il pilote une unité opérationnelle, met en œuvre les décisions de la hiérarchie, supervise une équipe (répartition, suivi, discipline) et garantit la bonne exécution administrative des tâches.",
  },
  {
    id: "mo-029",
    module: "Management des Organisations",
    theme: "Le manager et le cadre public",
    difficulte: "moyen",
    question:
      "Les référentiels de compétences par famille d'emploi (projet du ministère) identifient notamment :",
    options: [
      "Les conditions d'accès, les conditions d'évolution de carrière et les conditions d'éligibilité à une responsabilité",
      "Le montant des primes et indemnités",
      "La liste des sanctions disciplinaires",
      "Le calendrier des congés annuels",
    ],
    bonne_reponse: 0,
    explication:
      "Les référentiels de compétences (à l'instar du RMAS du MENA) identifient, pour chaque famille d'emplois, les conditions d'accès, les conditions d'évolution en profil de carrière et les conditions d'éligibilité à une responsabilité.",
  },
  {
    id: "mo-030",
    module: "Management des Organisations",
    theme: "Le manager et le cadre public",
    difficulte: "moyen",
    question:
      "Dans le tableau des attributions GRH, quelle structure est compétente pour la classification des emplois (corps, grades, échelons) et la notation ?",
    options: [
      "Le Ministère d'État, Ministère de la Fonction Publique et de la Modernisation de l'Administration",
      "Chaque ministère ou entité publique ayant exprimé le besoin",
      "La Cour des comptes",
      "L'Assemblée nationale",
    ],
    bonne_reponse: 0,
    explication:
      "Le Ministère de la Fonction Publique assure recrutement, classification des emplois (corps/grades/échelons), rémunération, notation, promotion, mobilité, admission à la retraite… Les entités ayant exprimé le besoin gèrent les contractuels et actes courants.",
  },
  {
    id: "mo-031",
    module: "Management des Organisations",
    theme: "Le manager et le cadre public",
    difficulte: "facile",
    question:
      "Parmi les qualités d'un manager, laquelle relève de « l'enthousiasme et de l'entrain » ?",
    options: [
      "Le respect des principes éthiques et l'intégrité personnelle",
      "L'aptitude à la coordination",
      "L'habileté à superviser",
      "La capacité à préserver la cohésion du groupe",
    ],
    bonne_reponse: 0,
    explication:
      "Le respect des principes éthiques et l'intégrité personnelle relèvent de l'enthousiasme/entrain, avec l'esprit de décision, l'énergie, la maturité psychologique, le courage, la créativité… Les autres options relèvent des aptitudes interpersonnelles et sociales.",
  },

  // =====================================================================
  //  THÈME 3 — Le Nouveau Management Public (NMP)
  // =====================================================================
  {
    id: "mo-032",
    module: "Management des Organisations",
    theme: "Le Nouveau Management Public (NMP)",
    difficulte: "facile",
    question:
      "Qu'est-ce que le Nouveau Management Public (NMP) ?",
    options: [
      "Un modèle de gestion inspiré du secteur privé depuis les années 1980, qui vise à améliorer les performances de l'administration et des services publics",
      "Un retour à la bureaucratie wébérienne classique",
      "La suppression de toute règle dans l'administration",
      "Un modèle exclusivement financier de réduction des impôts",
    ],
    bonne_reponse: 0,
    explication:
      "Le NMP (New Public Management) est un modèle de gestion inspiré du secteur privé depuis les années 1980, s'appuyant sur ses principes et outils de management pour améliorer les performances de l'administration et des services publics.",
  },
  {
    id: "mo-033",
    module: "Management des Organisations",
    theme: "Le Nouveau Management Public (NMP)",
    difficulte: "moyen",
    question:
      "Dans l'évolution des modes de gestion publique, à quelle période apparaît le « modèle managérial » ?",
    options: [
      "Dans les années 1980, avec autonomisation, responsabilisation du personnel et fixation d'objectifs",
      "Dans les années 1960, avec la gestion des ressources",
      "Au XIXᵉ siècle, avec la bureaucratie wébérienne",
      "En 2023, avec le nouveau statut général",
    ],
    bonne_reponse: 0,
    explication:
      "Le modèle managérial apparaît dans les années 1980 (rationalités multiples, autonomisation et responsabilisation du personnel, fixation des objectifs). Il succède au modèle bureaucratique et au modèle gestionnaire (1960).",
  },
  {
    id: "mo-034",
    module: "Management des Organisations",
    theme: "Le Nouveau Management Public (NMP)",
    difficulte: "moyen",
    question:
      "Le NMP est apparu à la suite du développement de quel outil de gestion (Peter Drucker) ?",
    options: [
      "La Direction Par les Objectifs (DPO) avec la gestion axée sur les résultats",
      "La comptabilité en partie double",
      "Le contrôle financier a priori",
      "La hiérarchie des normes",
    ],
    bonne_reponse: 0,
    explication:
      "Le NMP est apparu à la suite du développement de la Direction Par les Objectifs (DPO) de Peter Drucker, avec la gestion axée sur les résultats.",
  },
  {
    id: "mo-035",
    module: "Management des Organisations",
    theme: "Le Nouveau Management Public (NMP)",
    difficulte: "difficile",
    question:
      "Selon Crozier (1963), le « cercle vicieux bureaucratique » traduit l'idée que le phénomène bureaucratique est :",
    options: [
      "Un système d'organisation incapable de se corriger en fonction de ses erreurs",
      "Un modèle parfaitement rationnel et sans défaut",
      "Un système fondé sur la seule autorité charismatique",
      "Une organisation dépourvue de règles écrites",
    ],
    bonne_reponse: 0,
    explication:
      "Pour Crozier (1963), le phénomène bureaucratique est un système d'organisation incapable de se corriger en fonction de ses erreurs ; ses dysfonctions deviennent des éléments essentiels de son équilibre (cercle vicieux bureaucratique).",
  },
  {
    id: "mo-036",
    module: "Management des Organisations",
    theme: "Le Nouveau Management Public (NMP)",
    difficulte: "difficile",
    question:
      "Selon Merton (1940), le comportement « ritualiste » du fonctionnaire consiste à :",
    options: [
      "Considérer la règle comme « sacrée », ce qui induit rigidité et effets pervers",
      "Innover en permanence en ignorant les règles",
      "Refuser toute hiérarchie",
      "Rechercher le profit personnel",
    ],
    bonne_reponse: 0,
    explication:
      "Merton (1940) montre que la personnalité bureaucratique développe un comportement ritualiste où la règle est considérée comme « sacrée », induisant rigidité, incapacité d'adaptation et effets pervers.",
  },
  {
    id: "mo-037",
    module: "Management des Organisations",
    theme: "Le Nouveau Management Public (NMP)",
    difficulte: "moyen",
    question:
      "Dans la comparaison administration traditionnelle wébérienne / NMP, quels sont respectivement les objectifs de chacune ?",
    options: [
      "Traditionnelle : respecter les règles ; NMP : atteindre les résultats",
      "Traditionnelle : atteindre les résultats ; NMP : respecter les règles",
      "Les deux visent uniquement le profit",
      "Les deux visent uniquement la conformité juridique",
    ],
    bonne_reponse: 0,
    explication:
      "Selon Amar et Berthier (2007), l'administration wébérienne vise à respecter les règles tandis que le NMP vise à atteindre les résultats ; l'organisation passe de centralisée/hiérarchique à décentralisée/en réseau.",
  },
  {
    id: "mo-038",
    module: "Management des Organisations",
    theme: "Le Nouveau Management Public (NMP)",
    difficulte: "moyen",
    question:
      "Dans le NMP, le recrutement et la promotion évoluent de quelle manière par rapport à l'administration traditionnelle ?",
    options: [
      "Recrutement par contrat (contrat-objectif) et promotion au mérite/à la performance, au lieu du concours et de l'ancienneté",
      "Recrutement par cooptation et promotion héréditaire",
      "Suppression de tout recrutement",
      "Recrutement uniquement par concours et promotion à l'ancienneté",
    ],
    bonne_reponse: 0,
    explication:
      "Dans le NMP, le recrutement se fait par contrat (contrat-objectif) et la promotion au mérite et à la performance, alors que l'administration traditionnelle recrute par concours et promeut à l'ancienneté sans favoritisme.",
  },
  {
    id: "mo-039",
    module: "Management des Organisations",
    theme: "Le Nouveau Management Public (NMP)",
    difficulte: "difficile",
    question:
      "Selon Verhoest (2003), à quel moment se situe principalement le contrôle dans le secteur public de type NMP par rapport au secteur traditionnel ?",
    options: [
      "Ex post (résultats), contre ex ante (inputs et procédures) dans le traditionnel",
      "Ex ante uniquement, dans les deux cas",
      "Ex post dans le traditionnel, ex ante dans le NMP",
      "Il n'y a aucun contrôle dans le NMP",
    ],
    bonne_reponse: 0,
    explication:
      "Verhoest (2003) : le contrôle traditionnel est ex ante et porte sur les inputs/procédures, tandis que le contrôle de type NMP est ex post et porte sur les résultats (mécanisme de marché, critères d'efficience/efficacité/coût/qualité).",
  },
  {
    id: "mo-040",
    module: "Management des Organisations",
    theme: "Le Nouveau Management Public (NMP)",
    difficulte: "facile",
    question:
      "La DPO (Direction Par les Objectifs) est un modèle de gestion proposé par :",
    options: [
      "Peter Drucker en 1954",
      "Henri Fayol en 1916",
      "Max Weber en 1921",
      "Herbert Simon en 1947",
    ],
    bonne_reponse: 0,
    explication:
      "La DPO est un modèle de gestion proposé par Peter Drucker en 1954, consistant à fixer (unilatéralement ou de manière négociée) aux différentes sections de l'organisation des objectifs quantitatifs ou qualitatifs à atteindre.",
  },
  {
    id: "mo-041",
    module: "Management des Organisations",
    theme: "Le Nouveau Management Public (NMP)",
    difficulte: "facile",
    question:
      "Que signifie l'acronyme SMART qui qualifie un bon objectif ?",
    options: [
      "Spécifique, Mesurable, Atteignable, Réaliste, Temporel",
      "Stratégique, Managérial, Adaptable, Rationnel, Transversal",
      "Simple, Moderne, Ambitieux, Rapide, Testé",
      "Solide, Motivant, Adapté, Régulier, Total",
    ],
    bonne_reponse: 0,
    explication:
      "Un objectif SMART est Spécifique, Mesurable, Atteignable, Réaliste et Temporel.",
  },
  {
    id: "mo-042",
    module: "Management des Organisations",
    theme: "Le Nouveau Management Public (NMP)",
    difficulte: "moyen",
    question:
      "Qui est à l'origine du concept de Gestion Axée sur les Résultats (GAR) ?",
    options: [
      "Peter Drucker (1964), dans « Managing for results »",
      "Igor Ansoff (1965)",
      "Henry Mintzberg (1995)",
      "Michel Crozier (1963)",
    ],
    bonne_reponse: 0,
    explication:
      "Peter Drucker (1964), dans « Managing for results », est à l'origine du concept de gestion axée sur les résultats (GAR).",
  },
  {
    id: "mo-043",
    module: "Management des Organisations",
    theme: "Le Nouveau Management Public (NMP)",
    difficulte: "difficile",
    question:
      "La matrice du cadre logique (MCL), outil de la GAR, a été développée en 1969 par :",
    options: [
      "Le cabinet Practical Concepts pour la coopération américaine (USAID)",
      "L'OCDE pour la coopération européenne",
      "L'UEMOA pour la coopération ouest-africaine",
      "La Banque mondiale pour la coopération internationale",
    ],
    bonne_reponse: 0,
    explication:
      "La MCL a été développée en 1969 par le cabinet Practical Concepts pour la coopération américaine (USAID). Elle permet d'identifier et formuler logiquement les éléments clés d'un projet.",
  },
  {
    id: "mo-044",
    module: "Management des Organisations",
    theme: "Le Nouveau Management Public (NMP)",
    difficulte: "difficile",
    question:
      "Dans la matrice du cadre logique, que concerne la « logique verticale » ?",
    options: [
      "L'enchaînement logique des objectifs (ce que le projet vise), la causalité et les hypothèses/incertitudes",
      "La mesure des effets par des indicateurs et sources de vérification",
      "Uniquement le budget du projet",
      "La liste des bénéficiaires du projet",
    ],
    bonne_reponse: 0,
    explication:
      "La logique verticale identifie ce que le projet vise à réaliser, clarifie les liens de causalité et spécifie les hypothèses/incertitudes. La logique horizontale mesure les effets via indicateurs et sources de vérification.",
  },
  {
    id: "mo-045",
    module: "Management des Organisations",
    theme: "Le Nouveau Management Public (NMP)",
    difficulte: "moyen",
    question:
      "Selon Doeringer (1996), quelles sont les grandes réformes de l'État ?",
    options: [
      "L'externalisation, le downsizing, la décentralisation, l'amélioration de l'efficience interne",
      "La nationalisation, la centralisation, le protectionnisme, le contrôle a priori",
      "La privatisation totale, la suppression de l'État, le libéralisme absolu",
      "La bureaucratisation, la standardisation, la spécialisation",
    ],
    bonne_reponse: 0,
    explication:
      "Doeringer (1996) identifie quatre grandes réformes : l'externalisation (délégation de services publics), le downsizing (réduction de la taille de l'État), la décentralisation et l'amélioration de l'efficience interne des services publics.",
  },
  {
    id: "mo-046",
    module: "Management des Organisations",
    theme: "Le Nouveau Management Public (NMP)",
    difficulte: "moyen",
    question:
      "En Côte d'Ivoire, quelle structure a pour mandat d'accompagner la réforme de l'État et la modernisation de l'administration publique ?",
    options: [
      "Le PRIME (Programme national d'appui aux Réformes Institutionnelles et à la Modernisation de l'État)",
      "La DITP (Direction interministérielle de la transformation publique)",
      "La Cour des comptes",
      "La Direction du Portefeuille de l'État",
    ],
    bonne_reponse: 0,
    explication:
      "Placé sous l'autorité du Ministre de la Fonction Publique, le PRIME a pour mandat d'accompagner la réforme de l'État et la modernisation de l'administration publique. La DITP est l'exemple français cité en encadré.",
  },
  {
    id: "mo-047",
    module: "Management des Organisations",
    theme: "Le Nouveau Management Public (NMP)",
    difficulte: "moyen",
    question:
      "Parmi les exemples de réformes en Côte d'Ivoire, laquelle a remplacé la loi n°92-570 du 11 septembre 1992 ?",
    options: [
      "La loi n°2023-892 du 23 novembre 2023 portant statut général de la fonction publique",
      "L'ordonnance n°2016-541 du 20 juillet 2016",
      "Le décret n°2021-28 du 20 janvier 2021",
      "La loi n°2020-886 du 21 octobre 2020",
    ],
    bonne_reponse: 0,
    explication:
      "La refonte des statuts s'est traduite par la loi n°2023-892 du 23 novembre 2023 portant statut général de la fonction publique, qui a remplacé la loi n°92-570 du 11 septembre 1992.",
  },

  // =====================================================================
  //  THÈME 4 — Planification & stratégie publique
  // =====================================================================
  {
    id: "mo-048",
    module: "Management des Organisations",
    theme: "Planification & stratégie publique",
    difficulte: "facile",
    question:
      "Comment définit-on la planification stratégique ?",
    options: [
      "Un processus formalisé qui élabore une représentation voulue de l'état futur (3, 5 ou 10 ans) et spécifie les voies pour l'atteindre",
      "L'exécution quotidienne des tâches courantes",
      "Le contrôle a posteriori des dépenses de l'État",
      "La rédaction du budget annuel uniquement",
    ],
    bonne_reponse: 0,
    explication:
      "La planification stratégique est un processus formalisé qui élabore une représentation voulue de l'état futur (trois, cinq ou dix ans) et spécifie les voies pour l'atteindre.",
  },
  {
    id: "mo-049",
    module: "Management des Organisations",
    theme: "Planification & stratégie publique",
    difficulte: "moyen",
    question:
      "Selon Fayol, comment définit-il la « prévoyance » à l'origine de la planification (1916) ?",
    options: [
      "« Prévoir, c'est à la fois supputer l'avenir et le préparer ; prévoir, c'est déjà agir »",
      "« Prévoir, c'est attendre passivement l'avenir »",
      "« Prévoir, c'est renoncer à toute action »",
      "« Prévoir, c'est uniquement établir un budget »",
    ],
    bonne_reponse: 0,
    explication:
      "Fayol définit la prévoyance : « Prévoir, c'est à la fois supputer l'avenir et le préparer ; prévoir, c'est déjà agir. » La planification d'entreprise a été mise en évidence par Fayol en 1916.",
  },
  {
    id: "mo-050",
    module: "Management des Organisations",
    theme: "Planification & stratégie publique",
    difficulte: "difficile",
    question:
      "Que signifie l'acronyme anglais POSDCORB (Gulick) parfois associé aux fonctions de la planification ?",
    options: [
      "Planning, Organizing, Staffing, Directing, Coordinating, Reporting, Budgeting",
      "Planning, Operating, Selling, Delivering, Costing, Reviewing, Balancing",
      "Prevention, Organization, Supervision, Direction, Control, Reporting, Budget",
      "Planning, Ordering, Scheduling, Deciding, Controlling, Recording, Billing",
    ],
    bonne_reponse: 0,
    explication:
      "En anglais, POSDCORB (souvent écrit POSCORB dans le support) désigne Planning, Organizing, Staffing, Coordinating, Reporting, Budgeting — proche du POCCC de Fayol (Prévoir, Organiser, Commander, Coordonner, Contrôler).",
  },
  {
    id: "mo-051",
    module: "Management des Organisations",
    theme: "Planification & stratégie publique",
    difficulte: "moyen",
    question:
      "Quelle est la différence entre prévision et prospective comme techniques de planification ?",
    options: [
      "La prévision est quantitative/extrapolative (le futur prolonge le passé) ; la prospective est qualitative et envisage plusieurs avenirs par scénarios",
      "La prévision est qualitative ; la prospective est quantitative",
      "Les deux sont identiques",
      "La prévision concerne le passé, la prospective le présent",
    ],
    bonne_reponse: 0,
    explication:
      "La prévision évalue l'évolution des contextes par voies quantitatives, extrapolatives et déterministes (le futur prolonge le passé). La prospective élabore des représentations qualitatives et envisage plusieurs avenirs possibles par des scénarios.",
  },
  {
    id: "mo-052",
    module: "Management des Organisations",
    theme: "Planification & stratégie publique",
    difficulte: "difficile",
    question:
      "Dans la formulation de la planification publique, la « finalité d'intérêt général » répond à quelle question ?",
    options: [
      "« Pourquoi l'organisation existe-t-elle ? » — c'est son fondement philosophique et juridique",
      "« Que faisons-nous ? » — c'est la mission de service public",
      "« Où voulons-nous aller ? » — c'est la vision politique",
      "« Comment le service est-il rendu ? » — ce sont les canaux",
    ],
    bonne_reponse: 0,
    explication:
      "La finalité d'intérêt général répond à « Pourquoi l'organisation existe-t-elle ? ». C'est le fondement philosophique et juridique, la raison d'être de l'administration : la satisfaction de l'intérêt général et la cohésion sociale.",
  },
  {
    id: "mo-053",
    module: "Management des Organisations",
    theme: "Planification & stratégie publique",
    difficulte: "moyen",
    question:
      "Dans le modèle d'action publique, que désigne la « proposition de valeur publique » ?",
    options: [
      "Quel service rendons-nous ? Quel problème public résolvons-nous ?",
      "Qui sont les bénéficiaires et usagers du service ?",
      "Quelle est l'origine des financements ?",
      "Comment mesure-t-on l'impact social ?",
    ],
    bonne_reponse: 0,
    explication:
      "La proposition de valeur publique répond à : quel service rendons-nous ? quel problème public résolvons-nous ? Les autres composantes du modèle d'action publique traitent des bénéficiaires, canaux, ressources, activités, partenaires, coûts et impacts.",
  },
  {
    id: "mo-054",
    module: "Management des Organisations",
    theme: "Planification & stratégie publique",
    difficulte: "facile",
    question:
      "Comment définit-on la stratégie dans ce cours ?",
    options: [
      "Un plan, une direction, une trajectoire, un guide pour l'action orientée vers le futur, un chemin qui permet d'aller d'ici à là-bas",
      "L'exécution des tâches quotidiennes de régulation",
      "Un ensemble de sanctions disciplinaires",
      "La comptabilité des recettes et dépenses",
    ],
    bonne_reponse: 0,
    explication:
      "La stratégie est un plan, une direction, une trajectoire, un guide pour l'action orientée vers le futur, un chemin qui permet d'aller d'ici à là-bas.",
  },
  {
    id: "mo-055",
    module: "Management des Organisations",
    theme: "Planification & stratégie publique",
    difficulte: "difficile",
    question:
      "Aux États-Unis, sous quelle forme la planification stratégique s'est-elle notamment développée ?",
    options: [
      "Le PPBS (Planning-Programming-Budgeting System)",
      "Le CRM (Customer Relationship Management)",
      "Le TQM (Total Quality Management)",
      "Le BPR (Business Process Reengineering)",
    ],
    bonne_reponse: 0,
    explication:
      "Aux États-Unis, la planification s'est muée en planification stratégique sous la forme du PPBS (Planning-Programming-Budgeting System).",
  },
  {
    id: "mo-056",
    module: "Management des Organisations",
    theme: "Planification & stratégie publique",
    difficulte: "moyen",
    question:
      "Parmi les fonctions principales du dispositif stratégique, laquelle vise à « fédérer toutes les parties prenantes autour des politiques publiques » ?",
    options: [
      "Mobiliser les acteurs",
      "Cadrer l'action de l'État",
      "Adapter et réagir",
      "Mesurer et piloter",
    ],
    bonne_reponse: 0,
    explication:
      "« Mobiliser les acteurs » consiste à fédérer les parties prenantes autour des politiques publiques. Cadrer donne l'orientation commune, adapter/réagir assure la résilience, mesurer/piloter suit l'avancement par indicateurs.",
  },
  {
    id: "mo-057",
    module: "Management des Organisations",
    theme: "Planification & stratégie publique",
    difficulte: "moyen",
    question:
      "Dans les étapes de la planification stratégique publique, que désigne l'« orientation stratégique » ?",
    options: [
      "Les grands axes prioritaires définis par l'État pour atteindre les objectifs de développement (ex. digitalisation, santé pour tous)",
      "Les lois, décrets et règlements qui encadrent l'action publique",
      "La projection à long terme de l'aspiration de l'administration",
      "L'ensemble des valeurs de gouvernance et de citoyenneté",
    ],
    bonne_reponse: 0,
    explication:
      "L'orientation stratégique désigne les grands axes prioritaires définis par l'État pour atteindre les objectifs de développement (ex. digitalisation de l'administration, santé pour tous, alphabétisation, réduction de la pauvreté).",
  },
  {
    id: "mo-058",
    module: "Management des Organisations",
    theme: "Planification & stratégie publique",
    difficulte: "difficile",
    question:
      "Quels sont les deux niveaux de planification distingués dans le cours ?",
    options: [
      "La planification stratégique (choix d'activités pour le bien-être des populations) et la planification opérationnelle (traduction en programmes d'action à moyen terme)",
      "La planification annuelle et la planification décennale",
      "La planification centrale et la planification locale",
      "La planification budgétaire et la planification comptable",
    ],
    bonne_reponse: 0,
    explication:
      "On distingue la planification stratégique (choix d'activités permettant d'améliorer le bien-être des populations) et la planification opérationnelle (traduction des orientations en programmes d'action à moyen terme applicables par les services).",
  },

  // =====================================================================
  //  THÈME 5 — Décision & délégation de pouvoir
  // =====================================================================
  {
    id: "mo-059",
    module: "Management des Organisations",
    theme: "Décision & délégation de pouvoir",
    difficulte: "facile",
    question:
      "Comment définit-on la décision dans le cours ?",
    options: [
      "Le choix d'une action portant sur la mise en œuvre des ressources ou sur la détermination des objectifs dans l'entreprise",
      "L'application mécanique d'une règle sans réflexion",
      "La rédaction d'un rapport d'activité",
      "Le contrôle des résultats obtenus",
    ],
    bonne_reponse: 0,
    explication:
      "La décision est le choix d'une action portant sur la mise en œuvre des ressources ou sur la détermination des objectifs dans l'entreprise.",
  },
  {
    id: "mo-060",
    module: "Management des Organisations",
    theme: "Décision & délégation de pouvoir",
    difficulte: "moyen",
    question:
      "Selon Igor Ansoff, quelles sont les trois catégories de décision par niveau ?",
    options: [
      "Décisions stratégiques, décisions tactiques, décisions opérationnelles",
      "Décisions programmables, non programmables et mixtes",
      "Décisions par consensus, à la majorité et par délégation",
      "Décisions rationnelles, intuitives et affectives",
    ],
    bonne_reponse: 0,
    explication:
      "Ansoff distingue les décisions stratégiques (orientation générale, sommet de la hiérarchie), tactiques (gestion des ressources, hiérarchie intermédiaire) et opérationnelles (exploitation courante, personnel exécutant).",
  },
  {
    id: "mo-061",
    module: "Management des Organisations",
    theme: "Décision & délégation de pouvoir",
    difficulte: "moyen",
    question:
      "Selon Herbert Simon, quelle est la différence entre décisions programmables et non programmables ?",
    options: [
      "Les programmables respectent des procédures existantes ; les non programmables sont imprévisibles, sans modèle à appliquer",
      "Les programmables sont imprévisibles ; les non programmables suivent des procédures",
      "Les deux types sont strictement identiques",
      "Les programmables concernent l'État, les non programmables l'entreprise",
    ],
    bonne_reponse: 0,
    explication:
      "Selon Simon, les décisions programmables respectent des procédures (décisions tactiques et opérationnelles), tandis que les non programmables sont imprévisibles, sans modèle à appliquer (décisions structurées et non structurées).",
  },
  {
    id: "mo-062",
    module: "Management des Organisations",
    theme: "Décision & délégation de pouvoir",
    difficulte: "difficile",
    question:
      "Le modèle IMC de Simon décrit les étapes de réflexion avant toute décision. Que recouvrent ses trois lettres ?",
    options: [
      "Intelligence (identifier le problème), Modélisation (proposer des solutions/scénarios), Choix (sélectionner la solution satisfaisante)",
      "Information, Management, Contrôle",
      "Innovation, Mesure, Communication",
      "Instruction, Motivation, Coordination",
    ],
    bonne_reponse: 0,
    explication:
      "Le modèle IMC de Simon : Intelligence (identifier le problème à partir de symptômes), Modélisation (proposer des solutions après évaluation des impacts, coûts, risques via des scénarios) et Choix (sélectionner la solution satisfaisante).",
  },
  {
    id: "mo-063",
    module: "Management des Organisations",
    theme: "Décision & délégation de pouvoir",
    difficulte: "moyen",
    question:
      "Quelle est la différence entre décentralisation verticale et décentralisation horizontale ?",
    options: [
      "La verticale (délégation/déconcentration) disperse le pouvoir vers le bas de la hiérarchie ; l'horizontale (management participatif) transfère l'autonomie de décision",
      "La verticale concerne le privé, l'horizontale le public",
      "La verticale supprime la hiérarchie, l'horizontale la renforce",
      "Les deux sont synonymes de centralisation",
    ],
    bonne_reponse: 0,
    explication:
      "La décentralisation verticale (délégation de pouvoir/déconcentration) disperse le pouvoir vers le bas de la hiérarchie. La décentralisation horizontale (management ou gouvernance participative) transfère l'autonomie de décision et responsabilise.",
  },
  {
    id: "mo-064",
    module: "Management des Organisations",
    theme: "Décision & délégation de pouvoir",
    difficulte: "moyen",
    question:
      "Que signifie une prise de décision « par consensus » dans un groupe ?",
    options: [
      "Non pas un accord à 100 %, mais que chaque membre accepte la décision et la soutiendra ensuite",
      "Un vote à la majorité des membres",
      "La décision prise par un seul expert",
      "Le refus de toute décision collective",
    ],
    bonne_reponse: 0,
    explication:
      "La décision par consensus ne signifie pas un accord à 100 %, mais que chaque membre de l'équipe accepte la décision et la soutiendra par la suite. Les autres modalités sont la décision à la majorité (vote) et par délégation.",
  },
  {
    id: "mo-065",
    module: "Management des Organisations",
    theme: "Décision & délégation de pouvoir",
    difficulte: "difficile",
    question:
      "La méthode Ringi de prise de décision en groupe se caractérise par :",
    options: [
      "Des décisions prises à la base puis transmises de manière ascendante",
      "Des décisions imposées par le sommet de la hiérarchie",
      "Un participant qui critique systématiquement les hypothèses des autres",
      "Un groupe de 6 à 10 participants proposant des solutions ingénieuses",
    ],
    bonne_reponse: 0,
    explication:
      "La méthode Ringi consiste à prendre les décisions à la base pour les transmettre de manière ascendante. La méthode de l'avocat du diable critique les hypothèses ; le brainstorming (Osborn) réunit 6 à 10 participants pour des solutions ingénieuses.",
  },
  {
    id: "mo-066",
    module: "Management des Organisations",
    theme: "Décision & délégation de pouvoir",
    difficulte: "facile",
    question:
      "Qu'est-ce que la délégation de pouvoir ?",
    options: [
      "Une technique de gestion qui consiste à donner une autonomie de décision (transfert de pouvoir) à un subordonné pour l'exécution d'une tâche",
      "La suppression de tout pouvoir hiérarchique",
      "Le contrôle a priori de toutes les décisions",
      "La centralisation du pouvoir au sommet",
    ],
    bonne_reponse: 0,
    explication:
      "La délégation est une technique de gestion qui consiste à donner une autonomie de décision (transfert de pouvoir) à un subordonné pour l'exécution d'une tâche. C'est une décentralisation verticale, de personnes à personnes.",
  },
  {
    id: "mo-067",
    module: "Management des Organisations",
    theme: "Décision & délégation de pouvoir",
    difficulte: "difficile",
    question:
      "Quelle est la différence essentielle entre délégation de pouvoir (responsabilité) et délégation de signature ?",
    options: [
      "La délégation de pouvoir dessaisit le délégant (transfert de décision) ; la délégation de signature ne le dessaisit pas et il peut réintervenir",
      "La délégation de signature transfère la décision, la délégation de pouvoir non",
      "Les deux dessaisissent définitivement le délégant",
      "Aucune des deux n'a d'effet juridique",
    ],
    bonne_reponse: 0,
    explication:
      "La délégation de pouvoir/responsabilité dessaisit le délégant de sa compétence (véritable transfert de décision). La délégation de signature ne dessaisit pas le délégant, qui peut à tout moment réintervenir et signer l'acte.",
  },
  {
    id: "mo-068",
    module: "Management des Organisations",
    theme: "Décision & délégation de pouvoir",
    difficulte: "difficile",
    question:
      "Qu'est-ce que la « délégation de service public » (Encadré 13) ?",
    options: [
      "Un contrat administratif par lequel une personne morale de droit public confie la gestion d'un service public à un délégataire rémunéré selon les résultats de l'exploitation, à ses risques et périls",
      "Une simple délégation de signature entre agents",
      "Une décision unilatérale sans contrat",
      "La privatisation totale et définitive d'un service",
    ],
    bonne_reponse: 0,
    explication:
      "La délégation de service public est un contrat administratif par lequel une personne morale de droit public (commune, département, région, établissement) confie la gestion d'un service public à un délégataire, rémunéré selon les résultats de l'exploitation, à ses risques et périls — ce qui la distingue d'un marché public.",
  },
  {
    id: "mo-069",
    module: "Management des Organisations",
    theme: "Décision & délégation de pouvoir",
    difficulte: "moyen",
    question:
      "Dans le diagramme d'Eisenhower, que faut-il faire d'une tâche « urgente et non-importante » ?",
    options: [
      "La déléguer",
      "La faire soi-même immédiatement",
      "La planifier",
      "L'éliminer",
    ],
    bonne_reponse: 0,
    explication:
      "Selon la matrice d'Eisenhower : urgent + important = Faire ; non-urgent + important = Planifier ; urgent + non-important = Déléguer ; non-urgent + non-important = Éliminer.",
  },

  // =====================================================================
  //  THÈME 6 — Leadership & motivation
  // =====================================================================
  {
    id: "mo-070",
    module: "Management des Organisations",
    theme: "Leadership & motivation",
    difficulte: "facile",
    question:
      "Comment définit-on le leadership (Natalie Rinfret) ?",
    options: [
      "La capacité à créer une relation émotionnelle véritable avec les membres d'un groupe afin de les amener à transcender leurs besoins individuels au profit d'objectifs communs",
      "Le pouvoir hiérarchique conféré par le statut officiel",
      "La capacité à appliquer strictement les règles",
      "L'aptitude à sanctionner les collaborateurs",
    ],
    bonne_reponse: 0,
    explication:
      "Le leadership est la capacité à créer une relation émotionnelle véritable avec les membres d'un groupe afin de les amener à transcender leurs besoins individuels au profit d'objectifs communs (représentation d'un groupe par l'un de ses membres qui l'influence).",
  },
  {
    id: "mo-071",
    module: "Management des Organisations",
    theme: "Leadership & motivation",
    difficulte: "moyen",
    question:
      "Selon la théorie des quatre systèmes de Rensis Likert, quels sont les quatre styles de gestion élémentaire ?",
    options: [
      "Autoritaire, Paternaliste, Consultatif, Participatif",
      "Directif, Persuasif, Participatif, Délégatif",
      "Symbole, Dirigeant, Liaison, Négociateur",
      "Stratégique, Tactique, Opérationnel, Administratif",
    ],
    bonne_reponse: 0,
    explication:
      "Likert met en évidence quatre styles de gestion : Autoritaire, Paternaliste, Consultatif et Participatif.",
  },
  {
    id: "mo-072",
    module: "Management des Organisations",
    theme: "Leadership & motivation",
    difficulte: "difficile",
    question:
      "Dans le leadership situationnel de Hersey et Blanchard, quel style correspond au manager qui « dicte des instructions et consignes précises à exécuter à la lettre » ?",
    options: [
      "Le style Directif",
      "Le style Persuasif",
      "Le style Participatif",
      "Le style Délégatif",
    ],
    bonne_reponse: 0,
    explication:
      "Le style Directif : le manager dicte instructions et consignes précises à exécuter à la lettre. Persuasif : il convainc en expliquant ses choix. Participatif : décisions collégiales. Délégatif : il délègue en restant disponible.",
  },
  {
    id: "mo-073",
    module: "Management des Organisations",
    theme: "Leadership & motivation",
    difficulte: "moyen",
    question:
      "Le style de leadership situationnel varie selon quel critère (Hersey et Blanchard) ?",
    options: [
      "Le niveau de maturité des individus et du groupe",
      "Le niveau de rémunération des agents",
      "L'âge du manager",
      "La taille du budget disponible",
    ],
    bonne_reponse: 0,
    explication:
      "Dans la théorie du cycle de vie (leadership situationnel), le type de leadership à exercer varie selon le niveau de maturité des individus et du groupe.",
  },
  {
    id: "mo-074",
    module: "Management des Organisations",
    theme: "Leadership & motivation",
    difficulte: "moyen",
    question:
      "Quelle est la distinction faite dans le cours entre le manager et le leader ?",
    options: [
      "Le manager (technocrate) fait les choses comme il se doit ; le leader fait ce qu'il faut pour réaliser sa vision et influence le groupe",
      "Le manager influence, le leader exécute",
      "Les deux sont strictement identiques",
      "Le leader applique les règles, le manager les transgresse",
    ],
    bonne_reponse: 0,
    explication:
      "Le manager est un technocrate qui « fait les choses comme il se doit » (compétences, objectifs assignés). Le leader « fait ce qu'il faut » pour réaliser sa vision et est capable de guider, mener et influencer un groupe.",
  },
  {
    id: "mo-075",
    module: "Management des Organisations",
    theme: "Leadership & motivation",
    difficulte: "difficile",
    question:
      "Qu'est-ce que le « self leadership » (auto-influence) ?",
    options: [
      "Une dynamique d'auto-influence qui encourage la réalisation d'activités professionnelles motivantes au service de l'organisation et du développement personnel du manager",
      "L'influence exercée uniquement sur les subordonnés",
      "Le refus de toute autorité hiérarchique",
      "La délégation totale de ses responsabilités",
    ],
    bonne_reponse: 0,
    explication:
      "Le self leadership est une dynamique d'auto-influence qui encourage la réalisation d'activités professionnelles motivantes, aidant à faire ce qui doit être fait, au service de l'organisation et du développement personnel du manager (motivation intrinsèque).",
  },
  {
    id: "mo-076",
    module: "Management des Organisations",
    theme: "Leadership & motivation",
    difficulte: "facile",
    question:
      "Comment définit-on la motivation dans le cours ?",
    options: [
      "Une force latente qui pousse un individu à agir dans le sens des objectifs de l'organisation",
      "Une sanction disciplinaire appliquée aux agents",
      "Un contrôle a posteriori des résultats",
      "Une obligation légale du fonctionnaire",
    ],
    bonne_reponse: 0,
    explication:
      "La motivation est une force latente qui pousse un individu à agir dans le sens des objectifs de l'organisation.",
  },
  {
    id: "mo-077",
    module: "Management des Organisations",
    theme: "Leadership & motivation",
    difficulte: "moyen",
    question:
      "Dans la théorie de la hiérarchie des besoins de Maslow, quels besoins distingue-t-on ?",
    options: [
      "Physiologiques, Sécurité, Appartenance, Estime, Accomplissement",
      "Hygiène, Motivation, Valence, Instrumentalité, Expectation",
      "Autoritaire, Paternaliste, Consultatif, Participatif, Délégatif",
      "Intelligence, Modélisation, Choix, Contrôle, Action",
    ],
    bonne_reponse: 0,
    explication:
      "Maslow distingue cinq besoins : physiologiques, de sécurité, d'appartenance, d'estime et d'accomplissement.",
  },
  {
    id: "mo-078",
    module: "Management des Organisations",
    theme: "Leadership & motivation",
    difficulte: "difficile",
    question:
      "Dans la théorie bi-factorielle de Herzberg, à quoi correspondent les « facteurs d'hygiène » ?",
    options: [
      "Des facteurs externes (conditions de travail, rémunération, relations hiérarchiques) qui influencent l'insatisfaction et le mécontentement",
      "Des facteurs internes qui engendrent la satisfaction et la motivation",
      "Les besoins d'accomplissement de soi",
      "L'attrait ressenti vis-à-vis des objectifs fixés",
    ],
    bonne_reponse: 0,
    explication:
      "Les facteurs d'hygiène (physiologiques/externes : conditions de travail, ambiance, rémunération, modes de management, relations avec le supérieur) influencent l'insatisfaction. Les facteurs de motivation (internes : contenu du travail, autonomie, évolution) engendrent la satisfaction.",
  },
  {
    id: "mo-079",
    module: "Management des Organisations",
    theme: "Leadership & motivation",
    difficulte: "difficile",
    question:
      "Dans la théorie VIE (des attentes) de Vroom, la formule Motivation = V × I × E fait intervenir :",
    options: [
      "Valence (attrait de la récompense), Instrumentalité (probabilité d'être récompensé), Expectation (croire pouvoir réussir)",
      "Vision, Innovation, Efficacité",
      "Valeur, Impact, Évaluation",
      "Volonté, Intérêt, Engagement",
    ],
    bonne_reponse: 0,
    explication:
      "Selon Vroom, la force motivationnelle dépend de la Valence (attrait/valeur de la récompense), de l'Instrumentalité (probabilité d'être récompensé selon la performance) et de l'Expectation (confiance dans sa capacité à réussir la tâche).",
  },
  {
    id: "mo-080",
    module: "Management des Organisations",
    theme: "Leadership & motivation",
    difficulte: "moyen",
    question:
      "Sur quoi repose la théorie de l'équité d'Adams ?",
    options: [
      "Les employés se comparent aux autres au regard de leurs efforts et de ce qu'ils en retirent, pour s'assurer d'un traitement juste et équitable",
      "La hiérarchie des besoins fondamentaux",
      "La distinction entre facteurs d'hygiène et de motivation",
      "Le produit valence × instrumentalité × expectation",
    ],
    bonne_reponse: 0,
    explication:
      "Selon Adams, les employés se comparent aux autres en ce qui concerne leurs efforts et ce qu'ils en retirent, pour s'assurer d'être traités d'une manière juste et équitable.",
  },
  {
    id: "mo-081",
    module: "Management des Organisations",
    theme: "Leadership & motivation",
    difficulte: "moyen",
    question:
      "Parmi les piliers de l'auto-management, quel outil est cité pour prioriser les tâches ?",
    options: [
      "La méthode Eisenhower",
      "La méthode Ringi",
      "La méthode de l'avocat du diable",
      "La roue de Deming",
    ],
    bonne_reponse: 0,
    explication:
      "Dans la gestion du temps (pilier de l'auto-management), la méthode Eisenhower est citée comme outil efficace pour prioriser les tâches (urgence/importance).",
  },
  {
    id: "mo-082",
    module: "Management des Organisations",
    theme: "Leadership & motivation",
    difficulte: "facile",
    question:
      "Qu'est-ce que l'auto-management (gestion de soi) ?",
    options: [
      "La capacité à se gérer de manière autonome, à prendre des décisions éclairées, à organiser ses actions et optimiser son efficacité",
      "La délégation de toutes ses tâches à un subordonné",
      "Le contrôle exercé par la hiérarchie sur l'agent",
      "La gestion exclusive des ressources financières",
    ],
    bonne_reponse: 0,
    explication:
      "L'auto-management désigne la capacité à se gérer de manière autonome, à prendre des décisions éclairées, à organiser ses actions et à optimiser son efficacité. Il comprend la gestion du temps, des priorités, des émotions et du stress.",
  },

  // =====================================================================
  //  THÈME 7 — Gouvernance publique
  // =====================================================================
  {
    id: "mo-083",
    module: "Management des Organisations",
    theme: "Gouvernance publique",
    difficulte: "facile",
    question:
      "Comment définit-on la gouvernance publique ?",
    options: [
      "L'ensemble de principes qui préconisent une gestion ouverte, efficace et efficiente des affaires publiques pour soutenir le développement durable",
      "L'exercice unilatéral du pouvoir par le seul gouvernement",
      "La gestion exclusivement comptable des finances de l'État",
      "Le contrôle policier des citoyens",
    ],
    bonne_reponse: 0,
    explication:
      "La gouvernance publique est l'ensemble de principes qui préconisent une gestion ouverte (démocratique sans corruption), efficace et efficiente des affaires publiques (entreprises et administrations) pour soutenir le développement durable.",
  },
  {
    id: "mo-084",
    module: "Management des Organisations",
    theme: "Gouvernance publique",
    difficulte: "moyen",
    question:
      "Parmi les principes de la gouvernance publique, lesquels figurent dans le cours ?",
    options: [
      "Transparence et accès à l'information, imputabilité et responsabilité, redevabilité, participation, règle de droit, indépendance de la justice, réflexivité",
      "Centralisation, standardisation, spécialisation, hiérarchie stricte",
      "Rentabilité, profit, dividendes, concurrence",
      "Autoritarisme, opacité, discrétion, secret",
    ],
    bonne_reponse: 0,
    explication:
      "Les principes de la gouvernance publique sont : transparence et accès à l'information, imputabilité et responsabilité, redevabilité, participation, règle de droit, indépendance de la justice et réflexivité.",
  },
  {
    id: "mo-085",
    module: "Management des Organisations",
    theme: "Gouvernance publique",
    difficulte: "difficile",
    question:
      "Dans la chaîne de gouvernement, qui est désigné comme « le principal » ?",
    options: [
      "Le Gouvernement",
      "Le peuple / les électeurs",
      "Les conseils d'administration (agent de premier ordre)",
      "Les directeurs généraux / managers (agent de deuxième ordre)",
    ],
    bonne_reponse: 0,
    explication:
      "Dans la chaîne de gouvernement, le Gouvernement est « le principal ». Les conseils d'administration sont « l'agent de premier ordre » et les directeurs généraux/managers « l'agent de deuxième ordre ».",
  },
  {
    id: "mo-086",
    module: "Management des Organisations",
    theme: "Gouvernance publique",
    difficulte: "difficile",
    question:
      "Selon la Direction du Portefeuille de l'État (2024), combien d'entités publiques compte la Côte d'Ivoire ?",
    options: [
      "183 entités (81 entreprises publiques + 102 établissements publics nationaux)",
      "81 entités au total",
      "102 entités au total",
      "40 entités au total",
    ],
    bonne_reponse: 0,
    explication:
      "En 2024, la Côte d'Ivoire compte 183 entités publiques : 81 entreprises publiques et 102 établissements publics nationaux (EPN), selon la Direction du Portefeuille de l'État.",
  },
  {
    id: "mo-087",
    module: "Management des Organisations",
    theme: "Gouvernance publique",
    difficulte: "moyen",
    question:
      "Parmi les structures de contrôle de la gouvernance publique en Côte d'Ivoire, laquelle exerce le contrôle juridictionnel des performances des entités publiques ?",
    options: [
      "La Cour des comptes",
      "L'Assemblée nationale",
      "La Haute Autorité pour la Bonne Gouvernance",
      "La Direction du Portefeuille de l'État",
    ],
    bonne_reponse: 0,
    explication:
      "La Cour des comptes exerce le contrôle juridictionnel : dans le cadre des budgets-programmes, elle assure le suivi des performances des entités publiques. L'Assemblée nationale exerce le contrôle parlementaire.",
  },
  {
    id: "mo-088",
    module: "Management des Organisations",
    theme: "Gouvernance publique",
    difficulte: "difficile",
    question:
      "Selon Freeman (1984), qu'est-ce qu'une partie prenante dans l'organisation ?",
    options: [
      "Tout groupe d'individus ou tout individu qui peut affecter ou être affecté par la réalisation des objectifs organisationnels",
      "Uniquement les actionnaires de l'entreprise",
      "Seulement les agents publics de l'organisation",
      "Exclusivement les usagers directs du service",
    ],
    bonne_reponse: 0,
    explication:
      "Selon Freeman (1984), une partie prenante est tout groupe d'individus ou tout individu qui peut affecter ou être affecté par la réalisation des objectifs organisationnels.",
  },
  {
    id: "mo-089",
    module: "Management des Organisations",
    theme: "Gouvernance publique",
    difficulte: "difficile",
    question:
      "Dans la matrice pouvoir/intérêt de Mendelow, comment traiter une partie prenante à fort pouvoir et fort intérêt ?",
    options: [
      "Ce sont des acteurs clés (case D) — à impliquer étroitement",
      "Effort minimal (case A)",
      "À garder informés (case B)",
      "À garder satisfaits (case C)",
    ],
    bonne_reponse: 0,
    explication:
      "Dans la matrice pouvoir/intérêt de Mendelow (1991) : faible pouvoir/faible intérêt = effort minimal (A) ; faible pouvoir/fort intérêt = garder informés (B) ; fort pouvoir/faible intérêt = garder satisfaits (C) ; fort pouvoir/fort intérêt = acteurs clés (D).",
  },
  {
    id: "mo-090",
    module: "Management des Organisations",
    theme: "Gouvernance publique",
    difficulte: "difficile",
    question:
      "Dans le modèle « salience » de Mitchell, Agle et Wood (1997), quels sont les trois attributs majeurs des parties prenantes ?",
    options: [
      "Pouvoir, Légitimité, Urgence",
      "Intérêt, Influence, Impact",
      "Autorité, Compétence, Ressource",
      "Vision, Mission, Valeur",
    ],
    bonne_reponse: 0,
    explication:
      "Le modèle salience de Mitchell, Agle et Wood (1997) classe les parties prenantes selon trois attributs : le Pouvoir, la Légitimité et l'Urgence.",
  },

  // =====================================================================
  //  THÈME 8 — Éthique dans les services publics
  // =====================================================================
  {
    id: "mo-091",
    module: "Management des Organisations",
    theme: "Éthique dans les services publics",
    difficulte: "moyen",
    question:
      "Selon Mercier (1999), comment définit-on l'éthique ?",
    options: [
      "L'ensemble de principes, de valeurs et de croyances qui dirigent la conduite des individus",
      "L'ensemble des sanctions disciplinaires d'un corps",
      "Le seul respect des lois écrites",
      "Les bonnes manières et l'étiquette sociale",
    ],
    bonne_reponse: 0,
    explication:
      "Selon Mercier (1999), l'éthique est l'ensemble de principes, de valeurs et de croyances qui dirigent la conduite des individus (conceptions morales dictant les actes jugés bons en vue du bien-agir).",
  },
  {
    id: "mo-092",
    module: "Management des Organisations",
    theme: "Éthique dans les services publics",
    difficulte: "difficile",
    question:
      "Quelle est la distinction entre éthique, morale et déontologie ?",
    options: [
      "L'éthique = principes/valeurs guidant la conduite ; la morale = valeurs et règles de conduite de la société ; la déontologie = obligations (règles et devoirs) d'un professionnel",
      "Les trois notions sont strictement identiques",
      "La morale concerne le professionnel, la déontologie la société",
      "L'éthique est juridique, la déontologie est philosophique",
    ],
    bonne_reponse: 0,
    explication:
      "L'éthique est l'ensemble des principes/valeurs qui dirigent la conduite. La morale représente les valeurs et règles de conduite de la société. La déontologie est l'ensemble des obligations (règles et devoirs) d'un professionnel dans l'exercice de sa mission.",
  },
  {
    id: "mo-093",
    module: "Management des Organisations",
    theme: "Éthique dans les services publics",
    difficulte: "difficile",
    question:
      "Qu'est-ce qu'un dilemme éthique ?",
    options: [
      "Un problème dans lequel aucune option n'est entièrement bonne ou mauvaise ; la décision aura des répercussions à la fois positives et négatives",
      "Une situation où une option est clairement bonne et l'autre clairement mauvaise",
      "Une infraction pénale caractérisée",
      "Un simple désaccord sans conséquence",
    ],
    bonne_reponse: 0,
    explication:
      "Un dilemme éthique est un problème dans lequel aucune option n'est entièrement bonne ou entièrement mauvaise ; quelle que soit la décision, le résultat aura des répercussions à la fois positives et négatives.",
  },
  {
    id: "mo-094",
    module: "Management des Organisations",
    theme: "Éthique dans les services publics",
    difficulte: "moyen",
    question:
      "Face à un dilemme éthique, si l'on se demande « De quoi cela aurait-il l'air dans la presse ? », quelle réponse appropriée le cours propose-t-il ?",
    options: [
      "Si cela devient public demain, le feriez-vous aujourd'hui ?",
      "Faites-le quand même en toute discrétion",
      "Attendez que la hiérarchie décide à votre place",
      "Ignorez la question, elle n'est pas pertinente",
    ],
    bonne_reponse: 0,
    explication:
      "Le cadre public face aux dilemmes se pose des questions-tests. À « De quoi cela aurait-il l'air dans la presse ? » la réponse est : si cela devient public demain, le feriez-vous aujourd'hui ?",
  },
  {
    id: "mo-095",
    module: "Management des Organisations",
    theme: "Éthique dans les services publics",
    difficulte: "moyen",
    question:
      "Quel texte constitue le principal cadre normatif du comportement éthique des fonctionnaires en Côte d'Ivoire ?",
    options: [
      "La loi n°2023-892 du 23 novembre 2023 portant statut général de la fonction publique",
      "La loi n°92-570 du 11 septembre 1992",
      "Le décret n°2021-28 du 20 janvier 2021",
      "L'ordonnance n°2016-541 du 20 juillet 2016",
    ],
    bonne_reponse: 0,
    explication:
      "La loi n°2023-892 du 23 novembre 2023 portant statut général de la fonction publique est le principal texte normatif qui encadre le comportement éthique des fonctionnaires et agents de l'État en Côte d'Ivoire.",
  },
  {
    id: "mo-096",
    module: "Management des Organisations",
    theme: "Éthique dans les services publics",
    difficulte: "difficile",
    question:
      "Selon l'article 32 du statut général, avec quelles valeurs les fonctionnaires doivent-ils servir l'État ?",
    options: [
      "Loyauté, Dignité, Intégrité, Dévouement, et en assurant le service",
      "Rentabilité, Profit, Concurrence, Performance financière",
      "Discrétion, Secret, Opacité, Réserve totale",
      "Autonomie, Indépendance, Liberté, Créativité",
    ],
    bonne_reponse: 0,
    explication:
      "L'article 32 dispose que les fonctionnaires doivent servir l'État avec loyauté, dignité, intégrité (lutte contre corruption, trafic d'influence, concussion), dévouement et en assurant le service (intégralité du temps de travail).",
  },
  {
    id: "mo-097",
    module: "Management des Organisations",
    theme: "Éthique dans les services publics",
    difficulte: "difficile",
    question:
      "Comment définit-on un conflit d'intérêts dans le secteur public ?",
    options: [
      "Toute situation d'interférence entre un intérêt public et des intérêts privés, de nature à influencer ou paraître influencer l'exercice indépendant, impartial et objectif d'une fonction",
      "Un désaccord entre deux agents de même rang",
      "Une simple divergence d'opinion politique",
      "Un litige commercial entre deux entreprises privées",
    ],
    bonne_reponse: 0,
    explication:
      "Un conflit d'intérêts correspond à toute situation d'interférence entre un intérêt public et des intérêts privés, de nature à influencer ou paraître influencer l'exercice indépendant, impartial et objectif d'une fonction.",
  },
  {
    id: "mo-098",
    module: "Management des Organisations",
    theme: "Éthique dans les services publics",
    difficulte: "difficile",
    question:
      "Qu'est-ce que le « pantouflage » évoqué dans la prise d'intérêt ?",
    options: [
      "La prise illégale d'intérêts d'un ancien agent public qui va travailler dans une entreprise qu'il a dû contrôler ou surveiller, dans les 3 ans suivant la fin de ses fonctions",
      "Le fait de refuser une promotion pour rester à son poste",
      "La délégation de signature à un subordonné",
      "Le cumul de deux emplois publics",
    ],
    bonne_reponse: 0,
    explication:
      "Le pantouflage est la prise illégale d'intérêts de l'ancien agent public qui consiste à travailler dans une entreprise qu'il a dû contrôler ou surveiller lorsqu'il était agent public, et ce dans les 3 ans qui suivent la fin de ses fonctions.",
  },
  {
    id: "mo-099",
    module: "Management des Organisations",
    theme: "Éthique dans les services publics",
    difficulte: "moyen",
    question:
      "Selon l'article 34 du statut général, que dispose-t-il au sujet des dons et cadeaux ?",
    options: [
      "Le fonctionnaire ne peut solliciter ni recevoir, directement ou par personne interposée, dans l'exercice de ses fonctions, des dons, gratifications ou avantages quelconques",
      "Le fonctionnaire peut accepter tout cadeau à titre culturel",
      "Le fonctionnaire peut recevoir de l'argent si le montant est faible",
      "Les cadeaux sont autorisés s'ils sont déclarés à la hiérarchie",
    ],
    bonne_reponse: 0,
    explication:
      "L'article 34 dispose que le fonctionnaire ne peut solliciter ni recevoir, directement ou par personne interposée, dans l'exercice de ses fonctions ou en raison de celles-ci, des dons, des gratifications ou avantages quelconques.",
  },
  {
    id: "mo-100",
    module: "Management des Organisations",
    theme: "Éthique dans les services publics",
    difficulte: "moyen",
    question:
      "Parmi les formes de corruption citées dans le cours, laquelle figure ?",
    options: [
      "La falsification de documents administratifs, le chantage et les pots-de-vin, l'influence indue pour des avantages illégitimes",
      "La transparence et l'accès à l'information",
      "La délégation de signature",
      "La gestion axée sur les résultats",
    ],
    bonne_reponse: 0,
    explication:
      "Les formes de corruption citées sont la falsification de documents administratifs, le chantage et les pots-de-vin, et l'influence indue pour des avantages illégitimes. Les stratégies de lutte incluent prévention, dénonciation (alerte), transparence et sanctions.",
  },
  {
    id: "mo-101",
    module: "Management des Organisations",
    theme: "Éthique dans les services publics",
    difficulte: "difficile",
    question:
      "Selon Yukl (2013), qu'est-ce que le leadership éthique ?",
    options: [
      "Un processus d'influence sociale où les leaders éthiques tentent d'influencer leurs collaborateurs en suscitant leur adhésion à leurs valeurs et croyances",
      "Un pouvoir fondé uniquement sur la sanction",
      "L'application stricte des seules procédures écrites",
      "La recherche exclusive du profit de l'organisation",
    ],
    bonne_reponse: 0,
    explication:
      "Selon Yukl (2013), le leadership éthique est un processus d'influence sociale où les leaders éthiques tentent d'influencer leurs collaborateurs en suscitant leur adhésion à leurs valeurs et à leurs croyances (être une personne de sens moral et un manager de sens moral).",
  },
  {
    id: "mo-102",
    module: "Management des Organisations",
    theme: "Éthique dans les services publics",
    difficulte: "moyen",
    question:
      "Qu'est-ce que l'étiquette, distinguée de l'éthique dans le cours ?",
    options: [
      "Le comportement social, poli, les bonnes manières — « assimilée à la petite éthique » et rarement consignée à l'écrit",
      "L'ensemble des obligations légales du fonctionnaire",
      "Le cadre normatif de lutte contre la corruption",
      "La procédure formalisée d'un processus",
    ],
    bonne_reponse: 0,
    explication:
      "L'étiquette est le comportement social, poli, les bonnes manières — assimilée à « la petite éthique ». Elle est rarement consignée à l'écrit et s'apprend selon le milieu social ; c'est le code de comportement accepté.",
  },

  // =====================================================================
  //  THÈME 9 — Performance, qualité & changement
  // =====================================================================
  {
    id: "mo-103",
    module: "Management des Organisations",
    theme: "Performance, qualité & changement",
    difficulte: "moyen",
    question:
      "Selon Bourguignon (2000), comment définit-on la performance ?",
    options: [
      "La réalisation des objectifs organisationnels, quelles que soient la nature et la variété de ces objectifs",
      "Le seul montant des recettes fiscales collectées",
      "La conformité aux procédures administratives",
      "La rapidité d'exécution des tâches",
    ],
    bonne_reponse: 0,
    explication:
      "Selon Bourguignon (2000), la performance est la réalisation des objectifs organisationnels, quelles que soient la nature et la variété de ces objectifs. C'est le degré d'atteinte des résultats visés (à moindre coût et en adéquation avec les moyens).",
  },
  {
    id: "mo-104",
    module: "Management des Organisations",
    theme: "Performance, qualité & changement",
    difficulte: "difficile",
    question:
      "Dans le schéma de la performance de Bouquin (2004), quelles relations relient Ressources, Processus et Résultats ?",
    options: [
      "Économie (ressources), Efficience (processus), Efficacité (résultats)",
      "Pertinence, Cohérence, Conformité",
      "Planification, Organisation, Contrôle",
      "Intelligence, Modélisation, Choix",
    ],
    bonne_reponse: 0,
    explication:
      "Selon Bouquin (2004) : les Ressources renvoient à l'Économie, le Processus à l'Efficience et les Résultats à l'Efficacité. La performance se définit par la relation entre objectifs, moyens et résultats (pertinence, efficacité, efficience).",
  },
  {
    id: "mo-105",
    module: "Management des Organisations",
    theme: "Performance, qualité & changement",
    difficulte: "moyen",
    question:
      "Comment définit-on la qualité des services publics ?",
    options: [
      "L'aptitude des services publics à répondre aux attentes et exigences des usagers et de la population",
      "Le respect exclusif des procédures budgétaires",
      "La réduction du nombre d'agents publics",
      "L'augmentation des recettes fiscales",
    ],
    bonne_reponse: 0,
    explication:
      "La qualité est l'aptitude des services publics à répondre aux attentes et exigences des usagers et de la population.",
  },
  {
    id: "mo-106",
    module: "Management des Organisations",
    theme: "Performance, qualité & changement",
    difficulte: "difficile",
    question:
      "Selon Hafsi et Fabi (1997), comment définit-on le changement ?",
    options: [
      "Un processus de transformation radicale ou marginale des structures et des compétences qui ponctue le processus d'évolution des organisations",
      "Le maintien à l'identique des pratiques existantes",
      "La suppression de toute structure organisationnelle",
      "Un simple ajustement comptable annuel",
    ],
    bonne_reponse: 0,
    explication:
      "Selon Hafsi et Fabi (1997), le changement est un processus de transformation radicale ou marginale des structures et des compétences qui ponctue le processus d'évolution des organisations.",
  },
  {
    id: "mo-107",
    module: "Management des Organisations",
    theme: "Performance, qualité & changement",
    difficulte: "moyen",
    question:
      "Quelle est la différence entre changement de premier ordre et changement de second ordre ?",
    options: [
      "Le premier ordre (incrémental) ne modifie pas la logique dominante ; le second ordre (radical/disruptif) bouleverse le fonctionnement et la structure de l'organisation",
      "Le premier ordre bouleverse tout, le second est marginal",
      "Les deux sont identiques",
      "Le premier ordre concerne le privé, le second le public",
    ],
    bonne_reponse: 0,
    explication:
      "Le changement de premier ordre (incrémental) ne modifie pas la logique dominante (ex. nouvel applicatif). Le changement de second ordre (radical/disruptif) bouleverse significativement le fonctionnement et la structure (ex. refonte complète du SIRH).",
  },
  {
    id: "mo-108",
    module: "Management des Organisations",
    theme: "Performance, qualité & changement",
    difficulte: "difficile",
    question:
      "Qu'est-ce que le « processus d'escalade » (escalation of commitment) selon Staw (1991) ?",
    options: [
      "La tendance à poursuivre une action qui ne produit pas les effets désirés, parce qu'on ne veut pas « perdre » les ressources déjà consacrées",
      "L'accélération réussie d'un projet performant",
      "La montée en grade d'un cadre public",
      "L'augmentation progressive du budget d'un service",
    ],
    bonne_reponse: 0,
    explication:
      "Selon Staw (1991), le processus d'escalade est la tendance à poursuivre une action alors même qu'elle ne produit pas les effets désirés, parce qu'on ne veut pas se résoudre à « perdre » les ressources (temps, argent) déjà consacrées à cette action.",
  },
  {
    id: "mo-109",
    module: "Management des Organisations",
    theme: "Performance, qualité & changement",
    difficulte: "moyen",
    question:
      "Qu'est-ce que la « logique dominante », frein au changement ?",
    options: [
      "La reproduction par les organisations publiques des mêmes comportements qui ont fait leur succès dans le passé",
      "L'adoption systématique de comportements innovants",
      "Le transfert du pouvoir vers le bas de la hiérarchie",
      "La mesure de la satisfaction des usagers",
    ],
    bonne_reponse: 0,
    explication:
      "La logique dominante est la reproduction par les organisations publiques des mêmes comportements qui ont fait leur succès dans le passé. Elle guide la trajectoire mais peut empêcher le changement stratégique (rituels administratifs, dérive stratégique).",
  },
  {
    id: "mo-110",
    module: "Management des Organisations",
    theme: "Performance, qualité & changement",
    difficulte: "facile",
    question:
      "La roue de Deming (PDCA), boucle d'amélioration continue, comprend quelles étapes ?",
    options: [
      "Plan (Planifier), Do (Déployer/réaliser), Check (Contrôler/évaluer), Act (Analyser/améliorer)",
      "Prévoir, Organiser, Commander, Contrôler",
      "Intelligence, Modélisation, Choix, Action",
      "Spécifique, Mesurable, Atteignable, Réaliste",
    ],
    bonne_reponse: 0,
    explication:
      "La roue de Deming (PDCA) : Plan (planifier les actions), Do (déployer/réaliser), Check (contrôler/évaluer les écarts), Act (analyser les écarts et améliorer). Le respect des quatre étapes crée les conditions d'une amélioration régulière.",
  },
  {
    id: "mo-111",
    module: "Management des Organisations",
    theme: "Performance, qualité & changement",
    difficulte: "difficile",
    question:
      "Selon l'ISO 9000:2000, comment définit-on un processus ?",
    options: [
      "Un ensemble d'activités corrélées ou interactives qui transforme des éléments d'entrée en éléments de sortie",
      "Un document qui formalise les tâches à accomplir",
      "Une simple succession de tâches sans finalité",
      "L'organigramme hiérarchique de l'entreprise",
    ],
    bonne_reponse: 0,
    explication:
      "Selon l'ISO 9000:2000, un processus est un « ensemble d'activités corrélées ou interactives qui transforme des éléments d'entrée en éléments de sortie ». Une procédure, elle, est le document qui décrit et formalise les tâches pour mettre en œuvre le processus.",
  },
  {
    id: "mo-112",
    module: "Management des Organisations",
    theme: "Performance, qualité & changement",
    difficulte: "difficile",
    question:
      "Dans la typologie des processus, quel type « contribue directement à la réalisation du produit ou service » et constitue le cœur de métier ?",
    options: [
      "Les processus opérationnels (de réalisation/production)",
      "Les processus de pilotage (de direction/management)",
      "Les processus supports (de soutien)",
      "Les processus de mesure",
    ],
    bonne_reponse: 0,
    explication:
      "Les processus opérationnels (réalisation/production) contribuent directement à la réalisation du produit/service, depuis la détection du besoin jusqu'à la satisfaction : c'est le cœur de métier. Les processus de pilotage orientent, les supports apportent les ressources.",
  },
  {
    id: "mo-113",
    module: "Management des Organisations",
    theme: "Performance, qualité & changement",
    difficulte: "moyen",
    question:
      "Comment définit-on le management par projet dans le secteur public (normes X50-115, ISO 10006) ?",
    options: [
      "Un processus unique fait d'activités coordonnées et maîtrisées, avec dates de début et de fin, visant un objectif conforme à des contraintes de délais, coûts et ressources",
      "La gestion permanente et répétitive des tâches courantes",
      "L'application des seules règles bureaucratiques",
      "La délégation de service public à un tiers privé",
    ],
    bonne_reponse: 0,
    explication:
      "Le management par projet est un processus unique consistant en un ensemble d'activités coordonnées et maîtrisées, comportant des dates de début et de fin, entrepris pour atteindre un objectif conforme à des exigences (contraintes de délais, coûts, ressources).",
  },
  {
    id: "mo-114",
    module: "Management des Organisations",
    theme: "Performance, qualité & changement",
    difficulte: "moyen",
    question:
      "Dans un projet, que représentent les TDR (termes de référence) ?",
    options: [
      "Un document officiel décrivant les objectifs, le cadre, les attentes, le contexte, la portée, les responsabilités et les résultats attendus d'un projet ou d'une mission",
      "Le budget annuel voté par le Parlement",
      "La grille indiciaire de rémunération des agents",
      "Le rapport final d'évaluation du projet",
    ],
    bonne_reponse: 0,
    explication:
      "Les TDR (termes de référence) représentent un document officiel qui décrit les objectifs, le cadre, les attentes, le contexte, la portée, les responsabilités et les résultats attendus d'un projet ou d'une mission (base contractuelle, cadre pour les parties prenantes).",
  },

  // =====================================================================
  //  THÈME 10 — Gestion des conflits
  // =====================================================================
  {
    id: "mo-115",
    module: "Management des Organisations",
    theme: "Gestion des conflits",
    difficulte: "facile",
    question:
      "Comment définit-on le conflit dans les services publics ?",
    options: [
      "Une situation (désaccord, contradiction, incompatibilité) qui oppose des agents entre eux ou des agents à l'organisation",
      "Un simple malentendu sans conséquence",
      "Une procédure administrative normale",
      "Une sanction disciplinaire prononcée par la hiérarchie",
    ],
    bonne_reponse: 0,
    explication:
      "Le conflit est une situation (désaccord, contradiction, incompatibilité) qui oppose des agents entre eux ou des agents à l'organisation.",
  },
  {
    id: "mo-116",
    module: "Management des Organisations",
    theme: "Gestion des conflits",
    difficulte: "difficile",
    question:
      "Qu'est-ce qu'un « conflit mimétique » ?",
    options: [
      "Un conflit né d'un apprentissage par mimétisme où le subordonné finit par dépasser son supérieur par une pratique assidue et maîtrisée",
      "Un conflit portant uniquement sur les idées ou pensées",
      "Un conflit qui oppose des personnes de même rang hiérarchique",
      "Un conflit fondé sur une simple erreur d'interprétation",
    ],
    bonne_reponse: 0,
    explication:
      "Le conflit mimétique naît d'un apprentissage par mimétisme d'un subordonné face à son supérieur : le subordonné va dépasser le supérieur (qui détient le savoir théorique) par une activité pratique assidue et maîtrisée.",
  },
  {
    id: "mo-117",
    module: "Management des Organisations",
    theme: "Gestion des conflits",
    difficulte: "moyen",
    question:
      "Selon leur manifestation, quels types de conflits distingue-t-on ?",
    options: [
      "Le conflit déclaré (au grand jour), le conflit latent ou larvé (étouffé), le conflit refoulé (ancien conflit sans solution)",
      "Le conflit stratégique, tactique et opérationnel",
      "Le conflit rationnel, interpersonnel et institutionnel",
      "Le conflit programmable et non programmable",
    ],
    bonne_reponse: 0,
    explication:
      "Selon l'ampleur et la portée : le conflit déclaré (mis au grand jour), le conflit latent ou larvé (étouffé, se traduisant par non-dits, absentéisme, stress) et le conflit refoulé (ancien conflit sans solution acceptable, risquant de devenir déclaré).",
  },
  {
    id: "mo-118",
    module: "Management des Organisations",
    theme: "Gestion des conflits",
    difficulte: "moyen",
    question:
      "Les effets des conflits peuvent être « constructifs ». Qu'est-ce que cela signifie ?",
    options: [
      "Ils entraînent une expérience permettant d'éviter les futurs conflits, produisent des idées créatives et augmentent la cohésion du groupe",
      "Ils paralysent systématiquement le service public",
      "Ils augmentent toujours l'absentéisme",
      "Ils entraînent un climat compétitif à outrance néfaste",
    ],
    bonne_reponse: 0,
    explication:
      "Les conflits constructifs entraînent une expérience permettant d'éviter les futurs conflits (climat coopératif), sont source d'idées créatives, permettent le réexamen des opinions et augmentent la cohésion du groupe. À l'inverse, les conflits destructifs créent un climat compétitif néfaste.",
  },
  {
    id: "mo-119",
    module: "Management des Organisations",
    theme: "Gestion des conflits",
    difficulte: "moyen",
    question:
      "Parmi les techniques de résolution des conflits, qu'est-ce que la médiation ?",
    options: [
      "Une méthode permettant aux parties de parvenir à une solution acceptable pour tous",
      "L'imposition d'une décision par la hiérarchie",
      "La sanction disciplinaire des agents en conflit",
      "Le licenciement de l'une des parties",
    ],
    bonne_reponse: 0,
    explication:
      "La médiation est une méthode permettant aux parties de parvenir à une solution acceptable pour tous. Les autres techniques : négociation, formation continue, ateliers de communication, jeux de rôle, développement de l'intelligence émotionnelle.",
  },
  {
    id: "mo-120",
    module: "Management des Organisations",
    theme: "Gestion des conflits",
    difficulte: "difficile",
    question:
      "Dans la négociation, quelle issue correspond au « meilleur accord possible faisant l'unanimité des parties » ?",
    options: [
      "Le consensus",
      "La concession",
      "Le compromis",
      "L'échec",
    ],
    bonne_reponse: 0,
    explication:
      "Un protocole d'accord peut prendre la forme de concessions (renonciation à certains points), de compromis (concessions mutuelles préservant l'essentiel) ou de consensus (meilleur accord possible faisant l'unanimité des parties). L'échec conduit au recours à un conciliateur/médiateur.",
  },
  {
    id: "mo-121",
    module: "Management des Organisations",
    theme: "Gestion des conflits",
    difficulte: "moyen",
    question:
      "Parmi les compétences émotionnelles à développer pour la gestion des conflits figure la « communication non violente ». En quoi consiste-t-elle ?",
    options: [
      "Exprimer ses besoins sans agression",
      "Imposer son point de vue par la force",
      "Éviter tout contact avec l'autre partie",
      "Dénoncer publiquement l'adversaire",
    ],
    bonne_reponse: 0,
    explication:
      "La communication non violente consiste à exprimer ses besoins sans agression. Avec l'empathie (comprendre les perspectives de chacun) et la gestion du stress (aborder les conflits avec calme), elle relève du développement de l'intelligence émotionnelle.",
  },
  {
    id: "mo-122",
    module: "Management des Organisations",
    theme: "Gestion des conflits",
    difficulte: "difficile",
    question:
      "Parmi les conséquences d'une mauvaise gestion des conflits, que désigne le « turn-over élevé » ?",
    options: [
      "Les agents changent de service ou de corps d'emplois en raison de l'affirmation de la mobilité de carrière entre familles d'emploi",
      "L'augmentation des recettes du service public",
      "La réduction du temps de traitement des dossiers",
      "L'amélioration de la cohésion des équipes",
    ],
    bonne_reponse: 0,
    explication:
      "Le turn-over élevé : les agents peuvent changer de service ou de corps d'emplois en raison de l'affirmation de la mobilité de carrière entre familles d'emploi dans le statut général. La mauvaise gestion des conflits entraîne aussi baisse de productivité et absentéisme.",
  }
);
