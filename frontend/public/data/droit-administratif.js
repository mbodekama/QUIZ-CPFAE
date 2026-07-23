/*
 * ============================================================================
 *  MODULE 4 — DROIT ADMINISTRATIF  (CPFAE / Formation Administration de Base)
 *  Source : docs/DROIT-ADMIN.pdf — « SUPPORT DE COURS DE DROIT ADMINISTRATIF »
 *  Unité pédagogique Droit — Catégorie A — Session 2026
 * ----------------------------------------------------------------------------
 *  Ce fichier alimente window.QUESTIONS / window.MODULES_META (comme les
 *  autres data/*.js). Il est chargé par index.html APRÈS questions.js.
 *  IDs préfixés `da-`. Modules/thèmes dérivés automatiquement des champs.
 *
 *  Plan du cours -> 12 thèmes :
 *   1. Introduction & caractères du droit administratif
 *   2. Centralisation, déconcentration, décentralisation
 *   3. Les procédés de contrôle (hiérarchique & tutelle)
 *   4. Les structures administratives (centrale, locale, EPN)
 *   5. Le principe de légalité & ses sources
 *   6. La portée & les limites du principe de légalité
 *   7. Le service public
 *   8. La police administrative
 *   9. L'acte administratif unilatéral
 *  10. Le contrat administratif
 *  11. Le recours pour excès de pouvoir (REP)
 *  12. La responsabilité administrative
 * ============================================================================
 */

// Métadonnée du module
window.MODULES_META = window.MODULES_META || {};
window.MODULES_META["Droit Administratif"] = {
  ordre: 4,
  icone: "📜",
  description:
    "Organisation administrative, principe de légalité, service public et police administrative, actes et contrats administratifs, recours pour excès de pouvoir et responsabilité administrative en Côte d'Ivoire.",
};

window.QUESTIONS = window.QUESTIONS || [];
window.QUESTIONS.push(
  // =====================================================================
  //  THÈME 1 — Introduction & caractères du droit administratif
  // =====================================================================
  {
    id: "da-001",
    module: "Droit Administratif",
    theme: "Introduction & caractères du droit administratif",
    difficulte: "facile",
    question: "À quelle grande division du droit se rattache le droit administratif ?",
    options: [
      "Au droit public",
      "Au droit privé",
      "Au droit international privé",
      "Au droit pénal",
    ],
    bonne_reponse: 0,
    explication:
      "Les disciplines juridiques relèvent tantôt du droit privé, tantôt du droit public. Le droit administratif est l'une des disciplines phares du droit public.",
  },
  {
    id: "da-002",
    module: "Droit Administratif",
    theme: "Introduction & caractères du droit administratif",
    difficulte: "moyen",
    question: "Le droit administratif se prête à une double définition. Lesquelles ?",
    options: [
      "Une définition organique et une définition matérielle",
      "Une définition civile et une définition pénale",
      "Une définition écrite et une définition orale",
      "Une définition nationale et une définition internationale",
    ],
    bonne_reponse: 0,
    explication:
      "Le droit administratif se prête à une double définition : organique (droit applicable à l'Administration) et matérielle (droit spécial fait de règles particulières dérogeant au droit commun).",
  },
  {
    id: "da-003",
    module: "Droit Administratif",
    theme: "Introduction & caractères du droit administratif",
    difficulte: "moyen",
    question: "Suivant la définition organique, qu'est-ce que le droit administratif ?",
    options: [
      "Le droit applicable à l'Administration, régissant ses droits, obligations et rapports avec les administrés",
      "L'ensemble des règles applicables aux relations entre particuliers",
      "Le droit des contrats commerciaux",
      "Le droit régissant uniquement les finances de l'État",
    ],
    bonne_reponse: 0,
    explication:
      "Suivant la définition organique, le droit administratif est le droit applicable à l'Administration ; il désigne un corps de règles définissant les droits et obligations de l'Administration et régissant ses rapports avec les administrés.",
  },
  {
    id: "da-004",
    module: "Droit Administratif",
    theme: "Introduction & caractères du droit administratif",
    difficulte: "difficile",
    question: "Selon le cours, quelle définition du droit administratif l'emporte sur l'autre ?",
    options: [
      "La définition matérielle l'emporte sur la définition organique",
      "La définition organique l'emporte sur la définition matérielle",
      "Les deux définitions ont exactement la même valeur",
      "Aucune des deux définitions n'est retenue",
    ],
    bonne_reponse: 0,
    explication:
      "La définition matérielle (droit spécial composé de règles particulières dérogeant au droit commun) l'emporte sur la définition organique. La définition du droit administratif peut donc se limiter à l'approche matérielle.",
  },
  {
    id: "da-005",
    module: "Droit Administratif",
    theme: "Introduction & caractères du droit administratif",
    difficulte: "facile",
    question: "Quel est l'objet du droit administratif ?",
    options: [
      "L'Administration",
      "Le commerce international",
      "La famille",
      "La propriété privée",
    ],
    bonne_reponse: 0,
    explication:
      "Toute discipline a un objet. L'Administration est l'objet du droit administratif.",
  },
  {
    id: "da-006",
    module: "Droit Administratif",
    theme: "Introduction & caractères du droit administratif",
    difficulte: "moyen",
    question: "Au plan organique, que désigne le mot « administration » ?",
    options: [
      "Un ensemble d'organes et d'institutions de l'État chargés de la gestion des affaires publiques",
      "L'ensemble des activités juridiques et matérielles d'intérêt général",
      "Un ensemble de règles de droit privé",
      "Les seules entreprises privées d'intérêt général",
    ],
    bonne_reponse: 0,
    explication:
      "Au plan organique, l'administration désigne un ensemble d'organes et d'institutions de l'État chargés de la gestion des affaires publiques (l'ensemble du personnel accomplissant des tâches administratives).",
  },
  {
    id: "da-007",
    module: "Droit Administratif",
    theme: "Introduction & caractères du droit administratif",
    difficulte: "moyen",
    question: "Au plan matériel ou fonctionnel, que désigne le mot « administration » ?",
    options: [
      "L'ensemble des activités juridiques et matérielles placées sous la responsabilité des autorités publiques et ayant pour but la satisfaction de l'intérêt général",
      "Uniquement les organes de l'État",
      "Les seuls rapports entre particuliers",
      "Le patrimoine privé des agents publics",
    ],
    bonne_reponse: 0,
    explication:
      "Au plan matériel ou fonctionnel, l'administration renvoie à l'ensemble des activités juridiques et matérielles placées sous la responsabilité des autorités publiques et ayant pour but la satisfaction de l'intérêt général.",
  },
  {
    id: "da-008",
    module: "Droit Administratif",
    theme: "Introduction & caractères du droit administratif",
    difficulte: "difficile",
    question: "Combien de caractères essentiels présente le droit administratif ?",
    options: ["Quatre", "Deux", "Trois", "Cinq"],
    bonne_reponse: 0,
    explication:
      "Le droit administratif présente, pour l'essentiel, quatre caractères : un droit autonome, un droit essentiellement jurisprudentiel, un droit de prérogatives de puissance publique et un droit de sujétions de puissance publique.",
  },
  {
    id: "da-009",
    module: "Droit Administratif",
    theme: "Introduction & caractères du droit administratif",
    difficulte: "moyen",
    question: "Par rapport à quoi s'apprécie l'autonomie du droit administratif ?",
    options: [
      "Par rapport au droit privé",
      "Par rapport au droit pénal",
      "Par rapport au droit international",
      "Par rapport au droit constitutionnel",
    ],
    bonne_reponse: 0,
    explication:
      "L'autonomie du droit administratif s'apprécie par rapport au droit privé. Elle implique un corps de règles propres, ayant des sources distinctes, animées par des principes originaux et se suffisant à eux-mêmes.",
  },
  {
    id: "da-010",
    module: "Droit Administratif",
    theme: "Introduction & caractères du droit administratif",
    difficulte: "moyen",
    question: "Dire que le droit administratif est « essentiellement jurisprudentiel » signifie que :",
    options: [
      "Il est majoritairement élaboré par le juge administratif, sans être exclusivement son œuvre",
      "Il est exclusivement l'œuvre du juge administratif",
      "Il ne comporte aucune règle écrite",
      "Il est uniquement défini par le législateur",
    ],
    bonne_reponse: 0,
    explication:
      "Le droit administratif est un corps de règles élaboré essentiellement (majoritairement) par le juge administratif. Il n'est cependant pas exclusivement son œuvre, car de larges secteurs sont régis par les textes.",
  },
  {
    id: "da-011",
    module: "Droit Administratif",
    theme: "Introduction & caractères du droit administratif",
    difficulte: "difficile",
    question:
      "Le pouvoir de modifier ou de résilier unilatéralement un contrat illustre quel caractère du droit administratif ?",
    options: [
      "Un droit de prérogatives de puissance publique",
      "Un droit de sujétions de puissance publique",
      "Un droit autonome",
      "Un droit jurisprudentiel",
    ],
    bonne_reponse: 0,
    explication:
      "Le droit de modifier ou de résilier unilatéralement le contrat illustre le caractère de prérogatives de puissance publique : le droit administratif est favorable à l'Administration, d'où son caractère inégalitaire.",
  },
  {
    id: "da-012",
    module: "Droit Administratif",
    theme: "Introduction & caractères du droit administratif",
    difficulte: "difficile",
    question:
      "Le fait que l'Administration ne puisse contracter que selon des procédures strictes imposées par la loi illustre quel caractère ?",
    options: [
      "Un droit de sujétions de puissance publique",
      "Un droit de prérogatives de puissance publique",
      "Un droit autonome",
      "Un droit purement matériel",
    ],
    bonne_reponse: 0,
    explication:
      "Ce caractère illustre les sujétions de puissance publique : le droit administratif limite l'action de l'Administration (ex. l'Administration ne peut contracter que selon des conditions de procédures strictes imposées par la loi).",
  },

  // =====================================================================
  //  THÈME 2 — Centralisation, déconcentration, décentralisation
  // =====================================================================
  {
    id: "da-013",
    module: "Droit Administratif",
    theme: "Centralisation, déconcentration, décentralisation",
    difficulte: "facile",
    question: "Combien de procédés techniques d'organisation administrative existe-t-il ?",
    options: ["Trois", "Deux", "Quatre", "Cinq"],
    bonne_reponse: 0,
    explication:
      "Les procédés techniques de l'organisation administrative sont au nombre de trois : la centralisation, la déconcentration et la décentralisation.",
  },
  {
    id: "da-014",
    module: "Droit Administratif",
    theme: "Centralisation, déconcentration, décentralisation",
    difficulte: "moyen",
    question: "Qu'est-ce que la centralisation (ou concentration) ?",
    options: [
      "Le procédé qui rattache tous les services publics à un centre unique de décision qu'est l'État",
      "Le transfert de pouvoirs à des organes locaux autonomes",
      "La création de collectivités territoriales dotées de la personnalité juridique",
      "Le partage du pouvoir entre l'État et les régions",
    ],
    bonne_reponse: 0,
    explication:
      "La centralisation (ou concentration) est le procédé d'organisation administrative qui rattache tous les services publics à un centre unique de décision qu'est l'État. Celui-ci émet des ordres depuis la capitale.",
  },
  {
    id: "da-015",
    module: "Droit Administratif",
    theme: "Centralisation, déconcentration, décentralisation",
    difficulte: "moyen",
    question: "Selon le cours, la déconcentration est en réalité :",
    options: [
      "Une modalité de la centralisation",
      "Une modalité de la décentralisation",
      "Un procédé démocratique",
      "Une forme de collectivité territoriale",
    ],
    bonne_reponse: 0,
    explication:
      "La centralisation étant difficile à mettre en œuvre en pratique, on a recours à la déconcentration qui, en réalité, est une modalité de la centralisation.",
  },
  {
    id: "da-016",
    module: "Droit Administratif",
    theme: "Centralisation, déconcentration, décentralisation",
    difficulte: "moyen",
    question: "Qu'est-ce que la déconcentration ?",
    options: [
      "Conférer des pouvoirs de décision à des organes qui, au plan local, représentent le pouvoir central",
      "Conférer l'autonomie juridique à une collectivité locale",
      "Supprimer tout pouvoir de décision local",
      "Transférer le pouvoir à des organes privés",
    ],
    bonne_reponse: 0,
    explication:
      "La déconcentration consiste à conférer des pouvoirs de décision plus ou moins étendus à des organes qui, au plan local, représentent le pouvoir central. Ces organes agissent au nom et pour le compte de ce pouvoir.",
  },
  {
    id: "da-017",
    module: "Droit Administratif",
    theme: "Centralisation, déconcentration, décentralisation",
    difficulte: "difficile",
    question: "Le préfet et le sous-préfet sont des exemples d'autorités :",
    options: [
      "Déconcentrées (déconcentration territoriale)",
      "Décentralisées",
      "Élues par la population",
      "Dotées de la personnalité juridique",
    ],
    bonne_reponse: 0,
    explication:
      "Dans la déconcentration territoriale, le pouvoir de décision est confié à une autorité dont la compétence s'exerce dans une circonscription administrative (absence de personnalité juridique). C'est l'exemple du préfet et du sous-préfet.",
  },
  {
    id: "da-018",
    module: "Droit Administratif",
    theme: "Centralisation, déconcentration, décentralisation",
    difficulte: "moyen",
    question: "Les ministères sont un exemple de quelle forme de déconcentration ?",
    options: [
      "La déconcentration technique",
      "La déconcentration territoriale",
      "La décentralisation territoriale",
      "La décentralisation technique",
    ],
    bonne_reponse: 0,
    explication:
      "Dans la déconcentration technique, le pouvoir est confié à une autorité spécialisée au plan technique. C'est l'exemple des ministères.",
  },
  {
    id: "da-019",
    module: "Droit Administratif",
    theme: "Centralisation, déconcentration, décentralisation",
    difficulte: "difficile",
    question:
      "Pourquoi la centralisation et la déconcentration sont-elles qualifiées de procédés autoritaires ?",
    options: [
      "Parce que les populations ne sont pas impliquées dans leur mise en œuvre",
      "Parce qu'elles sont interdites par la Constitution",
      "Parce qu'elles suppriment l'État",
      "Parce qu'elles reposent sur l'élection",
    ],
    bonne_reponse: 0,
    explication:
      "La centralisation et la déconcentration sont qualifiées de procédés autoritaires (non démocratiques). Leur autoritarisme vient de ce que les populations ne sont pas impliquées dans leur mise en œuvre, contrairement à la décentralisation.",
  },
  {
    id: "da-020",
    module: "Droit Administratif",
    theme: "Centralisation, déconcentration, décentralisation",
    difficulte: "moyen",
    question: "Qu'est-ce que la décentralisation ?",
    options: [
      "Conférer des pouvoirs de décision à des organes locaux, autonomes, distincts de ceux de l'État",
      "Rattacher tous les services à un centre unique de décision",
      "Confier le pouvoir à des représentants du pouvoir central",
      "Supprimer les collectivités territoriales",
    ],
    bonne_reponse: 0,
    explication:
      "La décentralisation est le procédé d'organisation administrative qui consiste à conférer des pouvoirs de décision à des organes locaux, autonomes, distincts de ceux de l'État.",
  },
  {
    id: "da-021",
    module: "Droit Administratif",
    theme: "Centralisation, déconcentration, décentralisation",
    difficulte: "difficile",
    question:
      "Que confère la décentralisation territoriale à une circonscription locale, formant une collectivité territoriale ?",
    options: [
      "La personnalité juridique et l'autonomie financière",
      "Un simple pouvoir de représentation de l'État",
      "Une compétence uniquement technique",
      "Aucune autonomie",
    ],
    bonne_reponse: 0,
    explication:
      "La décentralisation territoriale confère l'autonomie administrative à une circonscription locale en lui octroyant la personnalité juridique et l'autonomie financière : celle-ci est appelée collectivité territoriale.",
  },
  {
    id: "da-022",
    module: "Droit Administratif",
    theme: "Centralisation, déconcentration, décentralisation",
    difficulte: "moyen",
    question: "En Côte d'Ivoire, quelles sont les collectivités territoriales ?",
    options: [
      "La région et la commune",
      "Le département et le village",
      "La préfecture et la sous-préfecture",
      "Le district et le quartier",
    ],
    bonne_reponse: 0,
    explication:
      "En Côte d'Ivoire, les collectivités territoriales sont la région et la commune.",
  },
  {
    id: "da-023",
    module: "Droit Administratif",
    theme: "Centralisation, déconcentration, décentralisation",
    difficulte: "difficile",
    question: "Les Établissements publics nationaux (EPN) illustrent quelle forme de décentralisation ?",
    options: [
      "La décentralisation technique",
      "La décentralisation territoriale",
      "La déconcentration technique",
      "La déconcentration territoriale",
    ],
    bonne_reponse: 0,
    explication:
      "La décentralisation technique consiste à conférer l'autonomie administrative à un service public en lui octroyant la personnalité juridique et l'autonomie financière. C'est l'exemple des établissements publics nationaux (EPN).",
  },

  // =====================================================================
  //  THÈME 3 — Les procédés de contrôle (hiérarchique & tutelle)
  // =====================================================================
  {
    id: "da-024",
    module: "Droit Administratif",
    theme: "Les procédés de contrôle (hiérarchique & tutelle)",
    difficulte: "facile",
    question: "Quels sont les deux procédés de contrôle existant au sein de l'Administration ?",
    options: [
      "Le contrôle hiérarchique et le contrôle de tutelle",
      "Le contrôle juridictionnel et le contrôle politique",
      "Le contrôle a priori et le contrôle a posteriori",
      "Le contrôle interne et le contrôle externe",
    ],
    bonne_reponse: 0,
    explication:
      "Les procédés de contrôle existant au sein de l'Administration sont le contrôle hiérarchique (ou pouvoir hiérarchique) et le contrôle de tutelle.",
  },
  {
    id: "da-025",
    module: "Droit Administratif",
    theme: "Les procédés de contrôle (hiérarchique & tutelle)",
    difficulte: "moyen",
    question: "Le contrôle hiérarchique s'exerce :",
    options: [
      "Au sein d'une même personne publique, d'un supérieur sur ses subordonnés",
      "Entre l'État et les collectivités décentralisées",
      "Entre deux personnes publiques distinctes",
      "Par le juge sur l'Administration",
    ],
    bonne_reponse: 0,
    explication:
      "Le contrôle hiérarchique est celui qu'exerce, au sein d'une même personne publique, un chef appelé supérieur hiérarchique sur des agents appelés subordonnés. Il vise l'unité et la cohérence de l'action administrative.",
  },
  {
    id: "da-026",
    module: "Droit Administratif",
    theme: "Les procédés de contrôle (hiérarchique & tutelle)",
    difficulte: "difficile",
    question: "Quel principe gouverne le pouvoir hiérarchique quant à son fondement textuel ?",
    options: [
      "Le pouvoir hiérarchique existe sans texte et se présume",
      "Le pouvoir hiérarchique n'existe que s'il est prévu par un texte",
      "Le pouvoir hiérarchique doit être autorisé par le juge",
      "Le pouvoir hiérarchique est interdit sans loi",
    ],
    bonne_reponse: 0,
    explication:
      "Le contrôle hiérarchique s'exerce sans texte : c'est un pouvoir qui revient de droit au supérieur, qui peut l'exercer d'office même si aucun texte ne l'a prévu. Le contrôle hiérarchique se présume.",
  },
  {
    id: "da-027",
    module: "Droit Administratif",
    theme: "Les procédés de contrôle (hiérarchique & tutelle)",
    difficulte: "difficile",
    question:
      "Le subordonné est en principe tenu d'exécuter tout ordre de son supérieur. Dans quel cas cette obligation est-elle levée ?",
    options: [
      "Lorsque la décision du supérieur est manifestement illégale",
      "Lorsque le subordonné n'est pas d'accord",
      "Lorsque l'ordre est simplement inopportun",
      "Lorsque l'ordre est donné par écrit",
    ],
    bonne_reponse: 0,
    explication:
      "Le subordonné, dépourvu de moyen de défense, est tenu d'exécuter tout ordre, même illégal. Cette obligation ne peut être levée que si la décision du supérieur est manifestement illégale, c'est-à-dire susceptible d'entraîner des conséquences graves.",
  },
  {
    id: "da-028",
    module: "Droit Administratif",
    theme: "Les procédés de contrôle (hiérarchique & tutelle)",
    difficulte: "difficile",
    question:
      "Le pouvoir par lequel le supérieur hiérarchique met fin à l'acte du subordonné, qui disparaît ab initio, est :",
    options: [
      "Le pouvoir d'annulation",
      "Le pouvoir de réformation",
      "Le pouvoir d'instruction",
      "Le pouvoir d'approbation préalable",
    ],
    bonne_reponse: 0,
    explication:
      "Le pouvoir d'annulation est celui par lequel le supérieur hiérarchique met fin à l'acte du subordonné. L'acte annulé ou révoqué disparaît ab initio (depuis l'origine).",
  },
  {
    id: "da-029",
    module: "Droit Administratif",
    theme: "Les procédés de contrôle (hiérarchique & tutelle)",
    difficulte: "moyen",
    question:
      "Le pouvoir par lequel le supérieur hiérarchique modifie le contenu de l'acte pris par le subordonné est :",
    options: [
      "Le pouvoir de réformation",
      "Le pouvoir d'annulation",
      "Le pouvoir de substitution",
      "Le pouvoir d'instruction",
    ],
    bonne_reponse: 0,
    explication:
      "Le pouvoir de réformation est celui par lequel le supérieur hiérarchique modifie le contenu de l'acte pris par le subordonné.",
  },
  {
    id: "da-030",
    module: "Droit Administratif",
    theme: "Les procédés de contrôle (hiérarchique & tutelle)",
    difficulte: "difficile",
    question: "Sauf texte exprès, le pouvoir hiérarchique n'emporte pas :",
    options: [
      "Le pouvoir de substitution",
      "Le pouvoir d'annulation",
      "Le pouvoir de réformation",
      "Le pouvoir d'instruction",
    ],
    bonne_reponse: 0,
    explication:
      "Sauf texte exprès, le pouvoir hiérarchique n'emporte pas de pouvoir de substitution : le chef de service n'a pas le droit d'agir à la place de son subordonné si ce dernier n'est pas intervenu.",
  },
  {
    id: "da-031",
    module: "Droit Administratif",
    theme: "Les procédés de contrôle (hiérarchique & tutelle)",
    difficulte: "moyen",
    question: "Qu'est-ce que le contrôle de tutelle ?",
    options: [
      "Le contrôle exercé par l'État sur les collectivités décentralisées",
      "Le contrôle du supérieur sur ses subordonnés",
      "Le contrôle du juge sur les actes administratifs",
      "Le contrôle des administrés sur l'Administration",
    ],
    bonne_reponse: 0,
    explication:
      "Le contrôle de tutelle (ou pouvoir de tutelle) est le contrôle exercé par l'État sur les collectivités décentralisées. Il manifeste le caractère unitaire de l'État décentralisé.",
  },
  {
    id: "da-032",
    module: "Droit Administratif",
    theme: "Les procédés de contrôle (hiérarchique & tutelle)",
    difficulte: "difficile",
    question: "Quel principe fondamental gouverne le contrôle de tutelle ?",
    options: [
      "Il n'existe pas de tutelle sans texte : la tutelle ne se présume pas",
      "La tutelle se présume comme le pouvoir hiérarchique",
      "La tutelle s'exerce d'office sans limite",
      "La tutelle est interdite en droit ivoirien",
    ],
    bonne_reponse: 0,
    explication:
      "Le principe de base qui gouverne la tutelle est qu'il n'existe pas de tutelle sans texte : elle n'existe que si la loi l'a prévue, elle ne se présume donc pas. Cela se justifie par l'autonomie accordée aux structures décentralisées.",
  },
  {
    id: "da-033",
    module: "Droit Administratif",
    theme: "Les procédés de contrôle (hiérarchique & tutelle)",
    difficulte: "moyen",
    question:
      "Contrairement au subordonné hiérarchique, l'autorité décentralisée soumise à la tutelle :",
    options: [
      "Dispose de moyens de défense et peut contester devant le juge une décision qu'elle juge illégale",
      "Est totalement dépourvue de moyens de défense",
      "Ne peut jamais saisir le juge",
      "Doit exécuter tout ordre même manifestement illégal",
    ],
    bonne_reponse: 0,
    explication:
      "L'autorité décentralisée dispose de moyens de défense contre l'autorité de tutelle : elle peut contester devant le juge toute décision qu'elle juge illégale ou irrégulière.",
  },
  {
    id: "da-034",
    module: "Droit Administratif",
    theme: "Les procédés de contrôle (hiérarchique & tutelle)",
    difficulte: "difficile",
    question:
      "Dans le contrôle de tutelle sur les organes, quels pouvoirs peuvent frapper le président du conseil régional ou le maire ?",
    options: [
      "La suspension, la révocation et la dissolution",
      "L'instruction, l'approbation et la réformation",
      "L'annulation, le retrait et l'abrogation",
      "Le blâme, l'avertissement et la mutation",
    ],
    bonne_reponse: 0,
    explication:
      "Le contrôle de tutelle sur les organes s'exerce dans des conditions strictes : les pouvoirs sont la suspension, la révocation et la dissolution.",
  },
  {
    id: "da-035",
    module: "Droit Administratif",
    theme: "Les procédés de contrôle (hiérarchique & tutelle)",
    difficulte: "difficile",
    question: "Dans le contrôle de tutelle sur les actes, la suspension ne peut excéder :",
    options: ["Trente jours", "Quinze jours", "Deux mois", "Six mois"],
    bonne_reponse: 0,
    explication:
      "Le pouvoir de suspension permet à l'autorité de tutelle de différer temporairement certains actes des autorités décentralisées. La suspension ne peut excéder trente jours.",
  },
  {
    id: "da-036",
    module: "Droit Administratif",
    theme: "Les procédés de contrôle (hiérarchique & tutelle)",
    difficulte: "difficile",
    question:
      "Le pouvoir de substitution de l'autorité de tutelle obéit à deux conditions cumulatives. Lesquelles ?",
    options: [
      "La défaillance certaine de l'autorité décentralisée et la mise en demeure restée sans résultat",
      "L'accord du maire et l'avis du préfet",
      "Une décision de justice et l'urgence absolue",
      "Le vote du conseil régional et l'approbation du ministre",
    ],
    bonne_reponse: 0,
    explication:
      "La substitution d'office obéit à deux conditions cumulatives : la défaillance certaine de l'autorité décentralisée et la mise en demeure de l'autorité de tutelle restée sans résultat.",
  },

  // =====================================================================
  //  THÈME 4 — Les structures administratives (centrale, locale, EPN)
  // =====================================================================
  {
    id: "da-037",
    module: "Droit Administratif",
    theme: "Les structures administratives (centrale, locale, EPN)",
    difficulte: "moyen",
    question: "L'Exécutif ivoirien présente une structure :",
    options: [
      "Tricéphale : Président de la République, vice-Président et Gouvernement",
      "Bicéphale : Président de la République et Premier Ministre",
      "Monocéphale : Président de la République seul",
      "Collégiale : le seul Conseil des ministres",
    ],
    bonne_reponse: 0,
    explication:
      "L'Exécutif ivoirien présente une structure tricéphale : il est composé du Président de la République, du vice-Président de la République et du Gouvernement.",
  },
  {
    id: "da-038",
    module: "Droit Administratif",
    theme: "Les structures administratives (centrale, locale, EPN)",
    difficulte: "difficile",
    question: "Selon la Constitution, le Président de la République est le détenteur exclusif de quel pouvoir ?",
    options: [
      "Le pouvoir exécutif, c'est-à-dire le pouvoir réglementaire (article 63)",
      "Le pouvoir législatif",
      "Le pouvoir judiciaire",
      "Le pouvoir constituant",
    ],
    bonne_reponse: 0,
    explication:
      "Le Président de la République est, conformément à la Constitution, détenteur exclusif du pouvoir exécutif, c'est-à-dire du pouvoir réglementaire (article 63). Il dispose du Gouvernement et de l'Administration dont il est le chef (article 67).",
  },
  {
    id: "da-039",
    module: "Droit Administratif",
    theme: "Les structures administratives (centrale, locale, EPN)",
    difficulte: "moyen",
    question: "Aux termes de l'article 70 de la Constitution, le Premier Ministre est :",
    options: [
      "Le chef du Gouvernement",
      "Le chef de l'État",
      "Le président du Conseil des ministres",
      "Le détenteur exclusif du pouvoir exécutif",
    ],
    bonne_reponse: 0,
    explication:
      "Le Premier Ministre est, aux termes de l'article 70 de la Constitution, le chef du Gouvernement. À ce titre, il anime et coordonne l'action gouvernementale et préside le Conseil de Gouvernement.",
  },
  {
    id: "da-040",
    module: "Droit Administratif",
    theme: "Les structures administratives (centrale, locale, EPN)",
    difficulte: "difficile",
    question: "Le ministre est investi de trois grands types de pouvoir. Lesquels ?",
    options: [
      "Le pouvoir de décision, le pouvoir hiérarchique et le pouvoir de gestion",
      "Le pouvoir législatif, exécutif et judiciaire",
      "Le pouvoir de tutelle, d'annulation et de substitution",
      "Le pouvoir constituant, réglementaire et coutumier",
    ],
    bonne_reponse: 0,
    explication:
      "Le ministre est investi de trois grands types de pouvoir : le pouvoir de décision (actes administratifs unilatéraux), le pouvoir hiérarchique (chef de son département ministériel) et le pouvoir de gestion (bonne marche du service).",
  },
  {
    id: "da-041",
    module: "Droit Administratif",
    theme: "Les structures administratives (centrale, locale, EPN)",
    difficulte: "difficile",
    question:
      "Selon quelle jurisprudence les ministres peuvent-ils prendre des mesures d'organisation et de fonctionnement du service placé sous leur autorité ?",
    options: [
      "La jurisprudence Jamart",
      "La jurisprudence Blanco",
      "La jurisprudence Cadot",
      "La jurisprudence Terrier",
    ],
    bonne_reponse: 0,
    explication:
      "En principe, les ministres n'ont pas de pouvoir réglementaire général. Néanmoins, la jurisprudence Jamart leur permet de prendre des mesures d'organisation et de fonctionnement du service placé sous leur autorité.",
  },
  {
    id: "da-042",
    module: "Droit Administratif",
    theme: "Les structures administratives (centrale, locale, EPN)",
    difficulte: "difficile",
    question: "Quelle est la principale caractéristique des Autorités Administratives Indépendantes (AAI) ?",
    options: [
      "Elles ne sont pas subordonnées au pouvoir exécutif ni soumises au pouvoir hiérarchique ou à la tutelle",
      "Elles relèvent du pouvoir judiciaire",
      "Elles sont dotées de la personnalité juridique comme les établissements publics",
      "Elles votent les lois",
    ],
    bonne_reponse: 0,
    explication:
      "Les AAI sont conçues comme n'étant pas subordonnées au pouvoir exécutif, ni prolongements du pouvoir législatif ou judiciaire. Elles sont administratives et indépendantes : non soumises au pouvoir hiérarchique ni aux contrôles de tutelle.",
  },
  {
    id: "da-043",
    module: "Droit Administratif",
    theme: "Les structures administratives (centrale, locale, EPN)",
    difficulte: "difficile",
    question:
      "Selon la loi n° 2014-451 portant orientation de l'organisation de l'Administration territoriale, quelles sont les circonscriptions administratives, du plus grand au plus petit ?",
    options: [
      "Les régions, les départements, les sous-préfectures et les villages",
      "Les communes, les quartiers, les cantons et les hameaux",
      "Les districts, les régions, les communes et les villages",
      "Les provinces, les cercles, les arrondissements et les communes",
    ],
    bonne_reponse: 0,
    explication:
      "Aux termes de l'article 2 de la loi n° 2014-451, les circonscriptions administratives sont, du plus grand au plus petit : les régions, les départements, les sous-préfectures et les villages.",
  },
  {
    id: "da-044",
    module: "Droit Administratif",
    theme: "Les structures administratives (centrale, locale, EPN)",
    difficulte: "moyen",
    question: "Le département est administré par :",
    options: [
      "Un préfet nommé par décret en Conseil des ministres",
      "Un maire élu",
      "Un président de conseil régional",
      "Un chef de village",
    ],
    bonne_reponse: 0,
    explication:
      "Le département constitue l'échelon de relais entre la région et la sous-préfecture. Il est administré par un préfet nommé par décret en Conseil des ministres sur proposition du Ministre de l'Intérieur.",
  },
  {
    id: "da-045",
    module: "Droit Administratif",
    theme: "Les structures administratives (centrale, locale, EPN)",
    difficulte: "facile",
    question: "Quelle est la circonscription administrative de base du territoire national ?",
    options: ["Le village", "La sous-préfecture", "le département", "La région"],
    bonne_reponse: 0,
    explication:
      "Le village est la circonscription administrative de base du territoire national. Il est administré par un chef de village assisté d'un conseil de village.",
  },
  {
    id: "da-046",
    module: "Droit Administratif",
    theme: "Les structures administratives (centrale, locale, EPN)",
    difficulte: "moyen",
    question: "Les organes de la commune sont :",
    options: [
      "Le Conseil municipal, la municipalité et le maire",
      "Le Conseil régional, le bureau et le président",
      "Le préfet, le sous-préfet et le chef de village",
      "Le gouverneur, le bureau et le secrétaire",
    ],
    bonne_reponse: 0,
    explication:
      "La commune est une collectivité territoriale constituée d'un regroupement de quartiers ou de villages. Ses organes sont : le Conseil municipal, la municipalité et le maire.",
  },
  {
    id: "da-047",
    module: "Droit Administratif",
    theme: "Les structures administratives (centrale, locale, EPN)",
    difficulte: "difficile",
    question: "Selon le cours, quelle est la nature du district autonome ?",
    options: [
      "Une entité territoriale particulière de nature mixte (déconcentration et décentralisation)",
      "Une simple circonscription administrative",
      "Une collectivité territoriale ordinaire",
      "Un établissement public national",
    ],
    bonne_reponse: 0,
    explication:
      "Aux termes de la loi, le district autonome est une entité territoriale particulière de nature mixte : il est régi à la fois par les règles de la déconcentration et de la décentralisation.",
  },
  {
    id: "da-048",
    module: "Droit Administratif",
    theme: "Les structures administratives (centrale, locale, EPN)",
    difficulte: "difficile",
    question:
      "Selon la loi n° 2020-627, l'ancienne catégorie d'EPA est devenue :",
    options: [
      "L'établissement public administratif, social, culturel et environnemental (EPASCE)",
      "L'établissement public industriel et commercial (EPIC)",
      "L'établissement public hospitalier (EPH)",
      "L'agence d'exécution",
    ],
    bonne_reponse: 0,
    explication:
      "La loi n° 2020-627 a modifié la catégorie d'EPA qui devient désormais établissement public administratif, social, culturel et environnemental (EPASCE). La catégorie d'EPIC a, quant à elle, été reconduite.",
  },
  {
    id: "da-049",
    module: "Droit Administratif",
    theme: "Les structures administratives (centrale, locale, EPN)",
    difficulte: "difficile",
    question:
      "Quelles sont les nouvelles catégories d'établissements publics nationaux (EPN) ?",
    options: [
      "Les agences d'exécution et les établissements publics hospitaliers (EPH)",
      "Les EPA et les EPIC",
      "Les sociétés d'État et les EPASCE",
      "Les régions et les communes",
    ],
    bonne_reponse: 0,
    explication:
      "Les nouvelles catégories d'EPN sont composées des agences d'exécution et des établissements publics hospitaliers (EPH), créés par la loi n° 2019-678 portant réforme hospitalière.",
  },

  // =====================================================================
  //  THÈME 5 — Le principe de légalité & ses sources
  // =====================================================================
  {
    id: "da-050",
    module: "Droit Administratif",
    theme: "Le principe de légalité & ses sources",
    difficulte: "facile",
    question: "Que signifie le principe de légalité administrative ?",
    options: [
      "L'Administration est soumise au droit et tenue de le respecter et de le faire respecter",
      "L'Administration est au-dessus des lois",
      "L'Administration peut agir sans aucune règle",
      "L'Administration n'est soumise qu'aux ordres du Président",
    ],
    bonne_reponse: 0,
    explication:
      "Le principe de légalité signifie que l'Administration, dans l'exercice de ses fonctions, est soumise au droit (règles constitutionnelles, législatives, jurisprudentielles et administratives). Elle est tenue de respecter le droit et de le faire respecter.",
  },
  {
    id: "da-051",
    module: "Droit Administratif",
    theme: "Le principe de légalité & ses sources",
    difficulte: "moyen",
    question:
      "L'obligation pour l'Administration de respecter le droit comporte deux volets. Lesquels ?",
    options: [
      "Le respect des règles émanant d'autorités supérieures et le respect de ses propres règles",
      "Le respect du droit privé et du droit pénal",
      "Le respect des coutumes locales et internationales",
      "Le respect des ordres du supérieur et des administrés",
    ],
    bonne_reponse: 0,
    explication:
      "L'obligation de respecter le droit s'entend du respect des règles émanant d'autorités qui lui sont supérieures (constitution, traités, loi, PGD) de même que de ses propres règles (ses propres décisions).",
  },
  {
    id: "da-052",
    module: "Droit Administratif",
    theme: "Le principe de légalité & ses sources",
    difficulte: "facile",
    question: "Les sources de la légalité sont constituées de :",
    options: [
      "Règles écrites et de règles non écrites",
      "Règles orales et coutumières uniquement",
      "Règles internationales uniquement",
      "Décisions de justice uniquement",
    ],
    bonne_reponse: 0,
    explication:
      "Les sources de la légalité sont constituées de règles écrites (constitution, traités, loi, règlement) et de règles non écrites (jurisprudence, principes généraux de droit, coutume, doctrine).",
  },
  {
    id: "da-053",
    module: "Droit Administratif",
    theme: "Le principe de légalité & ses sources",
    difficulte: "moyen",
    question: "Quelles sont les sources écrites de la légalité, dans l'ordre hiérarchique ?",
    options: [
      "La constitution, les traités, la loi et le règlement",
      "Le règlement, la loi, les traités et la constitution",
      "La loi, la constitution, le règlement et les traités",
      "La jurisprudence, la coutume, la loi et la doctrine",
    ],
    bonne_reponse: 0,
    explication:
      "Les sources écrites de la légalité sont, dans l'ordre hiérarchique : la constitution, les traités, la loi et le règlement.",
  },
  {
    id: "da-054",
    module: "Droit Administratif",
    theme: "Le principe de légalité & ses sources",
    difficulte: "moyen",
    question: "Quelle est la norme suprême de l'État et dans l'État ?",
    options: ["La constitution", "La loi", "Le traité", "Le règlement"],
    bonne_reponse: 0,
    explication:
      "La constitution est l'ensemble des règles juridiques relatives à l'aménagement du pouvoir politique et à la détermination des droits et libertés. Elle est la norme suprême de l'État et dans l'État ; elle prévaut sur toutes les autres règles de droit.",
  },
  {
    id: "da-055",
    module: "Droit Administratif",
    theme: "Le principe de légalité & ses sources",
    difficulte: "difficile",
    question:
      "Selon l'article 123 de la Constitution, quelle est l'autorité des traités régulièrement ratifiés ?",
    options: [
      "Une autorité supérieure à celle des lois, sous réserve de leur application par l'autre partie",
      "Une autorité inférieure à celle des lois",
      "La même autorité que les règlements",
      "Aucune autorité tant qu'une loi ne les reprend pas",
    ],
    bonne_reponse: 0,
    explication:
      "Les traités régulièrement ratifiés ont, dès leur publication, une autorité supérieure à celle des lois, sous réserve, pour chaque traité, de son application par l'autre partie (article 123 de la Constitution).",
  },
  {
    id: "da-056",
    module: "Droit Administratif",
    theme: "Le principe de légalité & ses sources",
    difficulte: "difficile",
    question: "Suivant le critère organico-formel, la loi est :",
    options: [
      "L'acte élaboré par le parlement et promulgué par le Président de la République",
      "Tout acte pris par l'exécutif",
      "Toute décision du juge administratif",
      "Toute règle coutumière",
    ],
    bonne_reponse: 0,
    explication:
      "Le critère organico-formel se réfère à l'organe d'élaboration de l'acte et à la procédure suivie. Suivant ce critère, la loi est l'acte élaboré par le parlement et promulgué par le Président de la République.",
  },
  {
    id: "da-057",
    module: "Droit Administratif",
    theme: "Le principe de légalité & ses sources",
    difficulte: "difficile",
    question: "Les lois organiques ont pour objet de :",
    options: [
      "Fixer les modalités d'organisation et de fonctionnement des pouvoirs publics, votées à une majorité qualifiée",
      "Être votées directement par le peuple",
      "Émaner du pouvoir constituant",
      "Être votées à une majorité simple",
    ],
    bonne_reponse: 0,
    explication:
      "Les lois organiques ont pour objet de fixer les modalités d'organisation et de fonctionnement des pouvoirs publics dans les matières énumérées par la constitution. Elles sont votées à une majorité qualifiée.",
  },
  {
    id: "da-058",
    module: "Droit Administratif",
    theme: "Le principe de légalité & ses sources",
    difficulte: "difficile",
    question: "Qu'est-ce qu'une ordonnance en droit administratif ivoirien ?",
    options: [
      "La décision prise par l'exécutif (Président) dans le domaine de la loi, après habilitation du parlement",
      "Une décision du juge administratif",
      "Un acte pris par les collectivités territoriales",
      "Une décision du Conseil constitutionnel",
    ],
    bonne_reponse: 0,
    explication:
      "L'ordonnance est la décision prise par l'exécutif (le Président de la République) dans le domaine de la loi, après habilitation du parlement.",
  },
  {
    id: "da-059",
    module: "Droit Administratif",
    theme: "Le principe de légalité & ses sources",
    difficulte: "difficile",
    question: "Quel est le régime juridique de l'ordonnance avant sa ratification ?",
    options: [
      "Elle est de nature réglementaire et relève du contrôle de légalité",
      "Elle a valeur de loi et échappe à tout contrôle",
      "Elle est nulle et non avenue",
      "Elle a valeur constitutionnelle",
    ],
    bonne_reponse: 0,
    explication:
      "Avant la ratification, les ordonnances sont de nature réglementaire. En conséquence, elles relèvent du contrôle de légalité, notamment de la conformité à la loi d'habilitation. Après ratification, l'ordonnance acquiert valeur de loi.",
  },
  {
    id: "da-060",
    module: "Droit Administratif",
    theme: "Le principe de légalité & ses sources",
    difficulte: "moyen",
    question: "Quelles sont les sources non écrites de la légalité ?",
    options: [
      "La jurisprudence, les principes généraux de droit, la coutume et la doctrine",
      "La constitution, la loi, les traités et le règlement",
      "Les ordonnances, les décrets, les arrêtés et les circulaires",
      "Les décisions individuelles et réglementaires",
    ],
    bonne_reponse: 0,
    explication:
      "On considère comme sources non écrites de la légalité : la jurisprudence, les principes généraux de droit, la coutume et la doctrine.",
  },
  {
    id: "da-061",
    module: "Droit Administratif",
    theme: "Le principe de légalité & ses sources",
    difficulte: "difficile",
    question: "Dans la hiérarchie des normes, quelle est la valeur de la règle jurisprudentielle ?",
    options: [
      "Une valeur infra législative et supra décrétale (inférieure à la loi, supérieure au décret)",
      "Une valeur supérieure à la loi",
      "Une valeur constitutionnelle",
      "Une valeur inférieure au décret",
    ],
    bonne_reponse: 0,
    explication:
      "Dans la hiérarchie des normes, la règle jurisprudentielle a une valeur inférieure à la loi et supérieure au décret. On dit qu'elle a une valeur infra législative et supra décrétale.",
  },
  {
    id: "da-062",
    module: "Droit Administratif",
    theme: "Le principe de légalité & ses sources",
    difficulte: "difficile",
    question: "Que sont les principes généraux de droit (PGD) ?",
    options: [
      "Des principes non écrits élaborés par le juge, qui s'imposent à toute autorité réglementaire en l'absence de disposition législative",
      "Des règles écrites votées par le parlement",
      "Des coutumes locales sans valeur juridique",
      "Des décisions individuelles de l'Administration",
    ],
    bonne_reponse: 0,
    explication:
      "Les principes généraux du droit (PGD) sont des principes non écrits qui s'imposent à toute autorité réglementaire en l'absence de toute disposition législative. Ils sont élaborés par le juge pour protéger les libertés et droits individuels.",
  },
  {
    id: "da-063",
    module: "Droit Administratif",
    theme: "Le principe de légalité & ses sources",
    difficulte: "difficile",
    question: "La doctrine est-elle une source du droit administratif ?",
    options: [
      "Non directe, mais une source indirecte",
      "Une source directe et principale",
      "Une source écrite supérieure à la loi",
      "Elle n'a aucune importance en droit administratif",
    ],
    bonne_reponse: 0,
    explication:
      "La doctrine (opinion, réflexion des auteurs sur le droit) n'est pas une source directe du droit, mais une source indirecte. Elle a une importance en droit administratif car elle tire la cohérence contenue dans les arrêts pour les rendre accessibles.",
  },

  // =====================================================================
  //  THÈME 6 — La portée & les limites du principe de légalité
  // =====================================================================
  {
    id: "da-064",
    module: "Droit Administratif",
    theme: "La portée & les limites du principe de légalité",
    difficulte: "moyen",
    question: "Quelle est la sanction du principe de légalité ?",
    options: [
      "La nullité de l'acte administratif illégal",
      "L'amende pénale de l'agent",
      "La dissolution de l'Administration",
      "La démission du ministre",
    ],
    bonne_reponse: 0,
    explication:
      "La sanction du principe de légalité est la nullité de l'acte administratif illégal. Elle intervient à l'issue d'un contrôle dit contrôle de légalité.",
  },
  {
    id: "da-065",
    module: "Droit Administratif",
    theme: "La portée & les limites du principe de légalité",
    difficulte: "difficile",
    question: "En droit administratif, quel type de nullité prédomine ?",
    options: [
      "La nullité absolue",
      "La nullité relative",
      "La nullité conditionnelle",
      "La nullité provisoire",
    ],
    bonne_reponse: 0,
    explication:
      "On distingue la nullité absolue et la nullité relative. En droit administratif, ce sont les nullités absolues qui prédominent. Il importe cependant de distinguer la nullité de l'inexistence.",
  },
  {
    id: "da-066",
    module: "Droit Administratif",
    theme: "La portée & les limites du principe de légalité",
    difficulte: "difficile",
    question: "Le contrôle de légalité s'opère au travers de :",
    options: [
      "Le contrôle administratif et le contrôle juridictionnel",
      "Le contrôle politique et le contrôle financier",
      "Le contrôle interne et le contrôle de tutelle",
      "Le contrôle a priori et a posteriori",
    ],
    bonne_reponse: 0,
    explication:
      "Le contrôle de légalité vise à constater l'illégalité d'un acte et à l'annuler. Il s'opère au travers du contrôle administratif (recours gracieux et hiérarchique) et du contrôle juridictionnel.",
  },
  {
    id: "da-067",
    module: "Droit Administratif",
    theme: "La portée & les limites du principe de légalité",
    difficulte: "moyen",
    question: "Le recours gracieux est :",
    options: [
      "La contestation de la légalité d'un acte devant l'autorité qui l'a édicté",
      "La contestation portée devant le supérieur hiérarchique de l'auteur de l'acte",
      "La saisine directe du juge de la légalité",
      "Une plainte pénale contre l'agent",
    ],
    bonne_reponse: 0,
    explication:
      "Le recours gracieux est la contestation de la légalité d'un acte devant l'autorité qui l'a édictée. L'administré fait appel à l'administrateur mieux informé en lui demandant de revenir sur sa décision.",
  },
  {
    id: "da-068",
    module: "Droit Administratif",
    theme: "La portée & les limites du principe de légalité",
    difficulte: "difficile",
    question: "En période normale, les limites au principe de légalité résultent de :",
    options: [
      "Les lacunes du contrôle juridictionnel (pouvoir discrétionnaire et actes de gouvernement)",
      "L'absence de constitution",
      "La suppression du juge administratif",
      "L'inexistence de la loi",
    ],
    bonne_reponse: 0,
    explication:
      "Les limites au principe de légalité résultent, en période normale, des lacunes du contrôle juridictionnel — le pouvoir discrétionnaire de l'Administration et les actes de gouvernement — et, en période de crise, de la théorie des circonstances exceptionnelles.",
  },
  {
    id: "da-069",
    module: "Droit Administratif",
    theme: "La portée & les limites du principe de légalité",
    difficulte: "difficile",
    question: "Il y a compétence liée lorsque :",
    options: [
      "L'Administration est tenue non seulement d'agir, mais aussi d'agir dans un sens déterminé",
      "L'Administration a le choix entre agir et s'abstenir",
      "L'Administration peut déterminer librement le contenu de sa décision",
      "L'Administration n'a aucune obligation",
    ],
    bonne_reponse: 0,
    explication:
      "Il y a compétence liée lorsque l'Administration est tenue non seulement d'agir, mais également d'agir dans un sens déterminé.",
  },
  {
    id: "da-070",
    module: "Droit Administratif",
    theme: "La portée & les limites du principe de légalité",
    difficulte: "difficile",
    question: "Il y a compétence discrétionnaire lorsque :",
    options: [
      "L'Administration est libre d'agir ou de s'abstenir et de déterminer le contenu de sa décision",
      "L'Administration est tenue d'agir dans un sens précis",
      "L'Administration ne peut jamais agir",
      "Le juge décide à la place de l'Administration",
    ],
    bonne_reponse: 0,
    explication:
      "Il y a compétence discrétionnaire lorsque l'Administration est libre non seulement d'agir (choix entre l'action et l'abstention) mais également de déterminer le contenu de sa décision. Cette compétence n'est cependant jamais entièrement discrétionnaire.",
  },
  {
    id: "da-071",
    module: "Droit Administratif",
    theme: "La portée & les limites du principe de légalité",
    difficulte: "difficile",
    question: "Qu'est-ce qu'un acte de gouvernement ?",
    options: [
      "Un acte des autorités administratives les plus élevées, bénéficiant d'une immunité juridictionnelle en raison de son objet politique",
      "Un acte pris par un maire",
      "Un acte réglementaire ordinaire",
      "Un contrat administratif",
    ],
    bonne_reponse: 0,
    explication:
      "Les actes de gouvernement sont des actes pris par les autorités administratives les plus élevées et qui bénéficient d'une immunité juridictionnelle en raison de leur objet politique. Ils se limitent aux rapports entre l'exécutif et le parlement et aux relations internationales.",
  },
  {
    id: "da-072",
    module: "Droit Administratif",
    theme: "La portée & les limites du principe de légalité",
    difficulte: "difficile",
    question: "L'état de crise trouve son fondement dans quel article de la Constitution ?",
    options: [
      "L'article 73",
      "L'article 105",
      "L'article 63",
      "L'article 101",
    ],
    bonne_reponse: 0,
    explication:
      "L'état de crise trouve son fondement dans l'article 73 de la Constitution qui détermine ses conditions et ses effets. Il conduit à réunir au seul profit du Président de la République l'exercice du pouvoir politique (« dictature temporaire »).",
  },
  {
    id: "da-073",
    module: "Droit Administratif",
    theme: "La portée & les limites du principe de légalité",
    difficulte: "difficile",
    question: "Quel est le principal effet de l'état de siège (article 105 de la Constitution) ?",
    options: [
      "Le transfert à l'autorité militaire des pouvoirs de police exercés en temps normal par l'autorité civile",
      "La suspension de toute la Constitution",
      "La dissolution du parlement",
      "La réunion de tous les pouvoirs au profit du Premier Ministre",
    ],
    bonne_reponse: 0,
    explication:
      "L'état de siège (article 105) a pour effet le transfert à l'autorité militaire des pouvoirs de police exercés en période normale par l'autorité civile, l'élargissement des pouvoirs de police et l'extension de la compétence des tribunaux militaires.",
  },
  {
    id: "da-074",
    module: "Droit Administratif",
    theme: "La portée & les limites du principe de légalité",
    difficulte: "difficile",
    question:
      "Quelles sont les deux conditions cumulatives de la théorie jurisprudentielle des circonstances exceptionnelles ?",
    options: [
      "Un évènement exceptionnel et l'impossibilité pour l'Administration d'agir légalement",
      "Une loi d'habilitation et l'avis du Conseil constitutionnel",
      "L'urgence et l'accord du parlement",
      "Un décret et une mise en demeure",
    ],
    bonne_reponse: 0,
    explication:
      "Deux conditions cumulatives doivent être remplies : un évènement exceptionnel (survenance brutale d'évènements graves, anormaux ou imprévisibles) et une impossibilité pour l'Administration d'agir dans le respect des régimes normalement applicables.",
  },

  // =====================================================================
  //  THÈME 7 — Le service public
  // =====================================================================
  {
    id: "da-075",
    module: "Droit Administratif",
    theme: "Le service public",
    difficulte: "moyen",
    question: "Qu'est-ce que le service public ?",
    options: [
      "Une activité d'intérêt général assurée par une personne publique, ou par une personne privée sous le contrôle d'une personne publique",
      "Une activité commerciale à but lucratif",
      "Une activité privée sans contrôle public",
      "Une activité réservée aux seules entreprises d'État",
    ],
    bonne_reponse: 0,
    explication:
      "Le service public est une activité d'intérêt général assurée soit par une personne publique, soit par une personne privée sous le contrôle d'une personne publique. Trois critères en ressortent : matériel, finaliste et organique.",
  },
  {
    id: "da-076",
    module: "Droit Administratif",
    theme: "Le service public",
    difficulte: "moyen",
    question: "Quels sont les deux types de services publics ?",
    options: [
      "Le service public administratif (SPA) et le service public industriel et commercial (SPIC)",
      "Le service public national et le service public local",
      "Le service public gratuit et le service public payant",
      "Le service public civil et le service public militaire",
    ],
    bonne_reponse: 0,
    explication:
      "Il existe deux types de services publics : le service public administratif (SPA) et le service public industriel et commercial (SPIC). La distinction repose sur trois critères : l'objet, le mode de financement et le mode de gestion.",
  },
  {
    id: "da-077",
    module: "Droit Administratif",
    theme: "Le service public",
    difficulte: "difficile",
    question:
      "Un service alimenté par des redevances payées par les usagers en contrepartie des prestations reçues est :",
    options: [
      "Un service public industriel et commercial (SPIC)",
      "Un service public administratif (SPA)",
      "Un établissement d'utilité publique",
      "Une autorité administrative indépendante",
    ],
    bonne_reponse: 0,
    explication:
      "Selon le critère du mode de financement : si le service est alimenté par des redevances payées par les usagers en contrepartie des prestations, il s'agit d'un SPIC. S'il est alimenté par une subvention ou une taxe, c'est un SPA.",
  },
  {
    id: "da-078",
    module: "Droit Administratif",
    theme: "Le service public",
    difficulte: "moyen",
    question: "Combien de principes régissent le fonctionnement des services publics ?",
    options: ["Quatre", "Trois", "Deux", "Cinq"],
    bonne_reponse: 0,
    explication:
      "Les règles régissant les services publics sont au nombre de quatre : le principe d'égalité, le principe de continuité, le principe de mutabilité et le principe de neutralité.",
  },
  {
    id: "da-079",
    module: "Droit Administratif",
    theme: "Le service public",
    difficulte: "moyen",
    question: "Quel double aspect revêt le principe d'égalité devant le service public ?",
    options: [
      "L'égalité d'accès au service et l'égalité de traitement des usagers",
      "L'égalité des prix et l'égalité des salaires",
      "L'égalité entre agents et usagers",
      "L'égalité entre régions et communes",
    ],
    bonne_reponse: 0,
    explication:
      "Le principe d'égalité prône l'interdiction de toute discrimination devant le service public. Il revêt un double aspect : égalité d'accès au service et égalité de traitement des usagers (se trouvant dans les mêmes conditions).",
  },
  {
    id: "da-080",
    module: "Droit Administratif",
    theme: "Le service public",
    difficulte: "moyen",
    question: "Que signifie le principe de continuité du service public ?",
    options: [
      "Le service public doit fonctionner sans interruption, de façon continue",
      "Le service public doit être gratuit",
      "Le service public doit s'adapter en permanence",
      "Le service public doit être neutre politiquement",
    ],
    bonne_reponse: 0,
    explication:
      "Le principe de continuité signifie que le service public doit fonctionner sans interruption, c'est-à-dire de façon continue. Il comporte des conséquences sur la réglementation du droit de grève et le pouvoir de réquisition.",
  },
  {
    id: "da-081",
    module: "Droit Administratif",
    theme: "Le service public",
    difficulte: "difficile",
    question: "Que signifie le principe de mutabilité du service public ?",
    options: [
      "Le service public doit s'adapter à tout moment à l'évolution des exigences de l'intérêt général",
      "Le service public ne doit jamais changer",
      "Les usagers ont un droit acquis au maintien du service",
      "Le service public doit être identique dans toutes les régions",
    ],
    bonne_reponse: 0,
    explication:
      "Le principe de mutabilité (ou d'adaptation) signifie que le service public doit s'adapter à tout moment à l'évolution des exigences de l'intérêt général. Aucune situation acquise ne peut remettre en cause ce principe : ni l'agent, ni l'usager n'a de droit acquis au maintien.",
  },
  {
    id: "da-082",
    module: "Droit Administratif",
    theme: "Le service public",
    difficulte: "moyen",
    question: "Le principe de neutralité du service public signifie que celui-ci :",
    options: [
      "Doit fonctionner en ayant en vue uniquement l'intérêt général, sans prendre en compte opinions politiques, croyances, sexe, race ou ethnie",
      "Doit rester politiquement engagé",
      "Doit favoriser certains usagers",
      "Doit fonctionner sans interruption",
    ],
    bonne_reponse: 0,
    explication:
      "Le principe de neutralité signifie que le service public doit fonctionner en ayant en vue uniquement l'intérêt général, sans prendre en compte les opinions politiques, croyances religieuses, le sexe, la race ou les considérations ethniques. C'est un aspect du principe d'égalité.",
  },
  {
    id: "da-083",
    module: "Droit Administratif",
    theme: "Le service public",
    difficulte: "difficile",
    question: "Qu'est-ce que la gestion du service public en régie ?",
    options: [
      "Une gestion directe du service public par l'Administration, sans personnalité juridique ni autonomie propre",
      "La délégation du service à une personne privée",
      "La gestion par un établissement public autonome",
      "La concession à un particulier",
    ],
    bonne_reponse: 0,
    explication:
      "La régie correspond à une gestion directe du service public par l'Administration : la collectivité assure directement l'exploitation avec ses propres deniers. La régie est caractérisée par l'absence de personnalité juridique et l'absence d'autonomie administrative et financière.",
  },
  {
    id: "da-084",
    module: "Droit Administratif",
    theme: "Le service public",
    difficulte: "difficile",
    question: "Qu'est-ce que la concession de service public ?",
    options: [
      "Un contrat par lequel une personne publique confie à une personne privée l'exploitation d'un service public moyennant une rémunération perçue sur les usagers",
      "La gestion directe du service par l'État",
      "Un acte administratif unilatéral",
      "Une subvention accordée à une association",
    ],
    bonne_reponse: 0,
    explication:
      "La concession est le mode le plus usité de délégation de service public : c'est un contrat par lequel une personne publique (autorité concédante) confie à une personne privée (concessionnaire) l'exploitation d'un service public moyennant une rémunération perçue sur les usagers.",
  },

  // =====================================================================
  //  THÈME 8 — La police administrative
  // =====================================================================
  {
    id: "da-085",
    module: "Droit Administratif",
    theme: "La police administrative",
    difficulte: "moyen",
    question: "Qu'est-ce que la police administrative ?",
    options: [
      "Une activité destinée à prévenir un trouble à l'ordre public, relevant de la compétence exclusive de l'Administration",
      "Une activité de répression des infractions pénales",
      "Une activité réservée à l'autorité judiciaire",
      "Un service public industriel et commercial",
    ],
    bonne_reponse: 0,
    explication:
      "La police administrative est une activité destinée à prévenir un trouble à l'ordre public et qui relève de la compétence exclusive de l'administration. C'est avant tout une activité de prévention.",
  },
  {
    id: "da-086",
    module: "Droit Administratif",
    theme: "La police administrative",
    difficulte: "difficile",
    question:
      "Suivant le critère finaliste, quelle est la distinction entre police administrative et police judiciaire ?",
    options: [
      "La police administrative vise à prévenir le trouble, la police judiciaire poursuit la répression du trouble",
      "La police administrative réprime, la police judiciaire prévient",
      "Les deux ont exactement la même finalité",
      "La police administrative est privée, la police judiciaire est publique",
    ],
    bonne_reponse: 0,
    explication:
      "Suivant le critère finaliste, la police administrative vise à prévenir le trouble, alors que la police judiciaire poursuit la répression du trouble. La distinction repose sur la finalité et le régime juridique applicable.",
  },
  {
    id: "da-087",
    module: "Droit Administratif",
    theme: "La police administrative",
    difficulte: "difficile",
    question: "Dans sa conception actuelle, que comprend la notion d'ordre public ?",
    options: [
      "La tranquillité, la sécurité, la salubrité publiques, mais aussi la moralité publique, l'esthétique et le respect de la dignité humaine",
      "Uniquement la sécurité publique",
      "Uniquement la répression pénale",
      "Uniquement les considérations économiques",
    ],
    bonne_reponse: 0,
    explication:
      "Par le passé, l'ordre public se résumait à la tranquillité, la sécurité et la salubrité publiques. Dans sa conception actuelle, il englobe aussi la moralité publique, l'esthétique, les considérations d'ordre politique et économique, et le respect de la dignité humaine.",
  },
  {
    id: "da-088",
    module: "Droit Administratif",
    theme: "La police administrative",
    difficulte: "moyen",
    question: "Quelles sont les deux catégories d'autorités de police administrative ?",
    options: [
      "Les autorités de police générale et les autorités de police spéciale",
      "Les autorités civiles et les autorités militaires",
      "Les autorités nationales et internationales",
      "Les autorités préventives et répressives",
    ],
    bonne_reponse: 0,
    explication:
      "On distingue les autorités de police générale (visant l'ordre public à l'égard de tous) et les autorités de police spéciale (visant à réglementer un domaine particulier d'activités ou une catégorie de personnes).",
  },
  {
    id: "da-089",
    module: "Droit Administratif",
    theme: "La police administrative",
    difficulte: "moyen",
    question: "Qui exerce la police administrative générale ?",
    options: [
      "Le Président de la République, le ministre de l'intérieur et les autorités locales",
      "Uniquement le juge judiciaire",
      "Uniquement les ministres techniques",
      "Uniquement les collectivités décentralisées",
    ],
    bonne_reponse: 0,
    explication:
      "La police générale vise à maintenir l'ordre public à l'égard de tous et de toutes les activités. Elle est exercée par le Président de la République (première autorité de police générale, article 63), le ministre de l'intérieur et les autorités locales.",
  },
  {
    id: "da-090",
    module: "Droit Administratif",
    theme: "La police administrative",
    difficulte: "difficile",
    question:
      "En cas de concurrence entre une autorité de police générale et une autorité de police spéciale, quel est le principe ?",
    options: [
      "En principe, la police spéciale l'emporte sur la police générale",
      "En principe, la police générale l'emporte toujours",
      "Les deux polices s'annulent mutuellement",
      "Seul le juge peut trancher",
    ],
    bonne_reponse: 0,
    explication:
      "En cas de concurrence entre police générale et police spéciale, en principe la police spéciale l'emporte sur la police générale. Mais l'autorité de police générale peut intervenir à deux conditions : les circonstances locales le justifient et la mesure est plus grave.",
  },
  {
    id: "da-091",
    module: "Droit Administratif",
    theme: "La police administrative",
    difficulte: "moyen",
    question: "Parmi les procédés de police, la mesure par laquelle le particulier n'exerce une activité qu'après avoir obtenu l'accord exprès de l'autorité est :",
    options: [
      "L'autorisation préalable",
      "La déclaration préalable",
      "La réglementation",
      "L'interdiction",
    ],
    bonne_reponse: 0,
    explication:
      "L'autorisation préalable consiste, pour le particulier, à n'exercer l'activité qu'après avoir obtenu l'autorisation expresse de l'autorité de police. La déclaration préalable, elle, suppose seulement d'informer l'autorité.",
  },
  {
    id: "da-092",
    module: "Droit Administratif",
    theme: "La police administrative",
    difficulte: "difficile",
    question:
      "Concernant les limites du pouvoir de police, quel adage est admis par le juge ?",
    options: [
      "« La liberté est la règle et la restriction de police l'exception »",
      "« La police prime la liberté »",
      "« Nul ne peut se prévaloir de sa propre turpitude »",
      "« Le silence vaut acceptation »",
    ],
    bonne_reponse: 0,
    explication:
      "Étant entendu que le pouvoir de police porte atteinte aux libertés, il est admis que « la liberté est la règle et la restriction de police l'exception ». C'est pourquoi le juge exerce un contrôle étendu sur l'exercice de ce pouvoir.",
  },

  // =====================================================================
  //  THÈME 9 — L'acte administratif unilatéral
  // =====================================================================
  {
    id: "da-093",
    module: "Droit Administratif",
    theme: "L'acte administratif unilatéral",
    difficulte: "moyen",
    question: "Qu'est-ce qu'un acte administratif unilatéral ?",
    options: [
      "L'acte émanant de la seule volonté de l'Administration et revêtant un caractère exécutoire",
      "Un accord de volontés entre deux parties",
      "Une décision de justice",
      "Un fait juridique involontaire",
    ],
    bonne_reponse: 0,
    explication:
      "L'acte administratif unilatéral (ou la décision) est l'acte émanant de la seule volonté de l'Administration et revêtant un caractère exécutoire. Sa définition fait appel à un critère organique et à un critère matériel.",
  },
  {
    id: "da-094",
    module: "Droit Administratif",
    theme: "L'acte administratif unilatéral",
    difficulte: "difficile",
    question: "Selon le critère matériel, l'acte administratif est celui qui :",
    options: [
      "Revêt un caractère exécutoire et fait grief aux administrés",
      "Émane nécessairement d'une autorité privée",
      "Ne produit aucun effet de droit",
      "Est dépourvu de tout caractère obligatoire",
    ],
    bonne_reponse: 0,
    explication:
      "Selon le critère matériel, l'acte administratif est celui qui revêt un caractère exécutoire : immédiatement applicable sans recours préalable au juge, il affecte l'ordonnancement juridique et fait grief aux administrés.",
  },
  {
    id: "da-095",
    module: "Droit Administratif",
    theme: "L'acte administratif unilatéral",
    difficulte: "difficile",
    question:
      "La compétence d'une autorité administrative se définit à un triple point de vue. Lesquels ?",
    options: [
      "La compétence matérielle, la compétence territoriale et la compétence temporelle",
      "La compétence civile, pénale et administrative",
      "La compétence liée, discrétionnaire et exclusive",
      "La compétence nationale, régionale et communale",
    ],
    bonne_reponse: 0,
    explication:
      "La compétence d'une autorité administrative se définit à un triple point de vue : la compétence matérielle, la compétence territoriale et la compétence temporelle.",
  },
  {
    id: "da-096",
    module: "Droit Administratif",
    theme: "L'acte administratif unilatéral",
    difficulte: "difficile",
    question: "Quelle est la différence entre délégation de pouvoir et délégation de signature ?",
    options: [
      "La délégation de pouvoir transfère la compétence ; la délégation de signature ne transfère que la tâche matérielle de signer",
      "Les deux transfèrent la totalité de la compétence",
      "La délégation de signature transfère la compétence",
      "Il n'existe aucune différence entre les deux",
    ],
    bonne_reponse: 0,
    explication:
      "La délégation de pouvoir transfère le pouvoir du délégant au délégataire et modifie l'ordre des compétences ; le délégant est dessaisi. La délégation de signature ne transfère au délégataire que la tâche matérielle de la signature.",
  },
  {
    id: "da-097",
    module: "Droit Administratif",
    theme: "L'acte administratif unilatéral",
    difficulte: "difficile",
    question:
      "Concernant leur caractère, comment se distinguent la délégation de pouvoir et la délégation de signature ?",
    options: [
      "La délégation de pouvoir est impersonnelle, la délégation de signature est personnelle",
      "La délégation de pouvoir est personnelle, la délégation de signature est impersonnelle",
      "Les deux sont personnelles",
      "Les deux sont impersonnelles",
    ],
    bonne_reponse: 0,
    explication:
      "La délégation de pouvoir est impersonnelle (accordée au titulaire d'une fonction, elle demeure valable même si le délégant ou le délégataire change) ; la délégation de signature est personnelle (elle disparaît automatiquement en cas de changement de personne).",
  },
  {
    id: "da-098",
    module: "Droit Administratif",
    theme: "L'acte administratif unilatéral",
    difficulte: "difficile",
    question: "Selon la théorie de la fonction de fait, les actes accomplis par un agent incompétent :",
    options: [
      "Sont considérés comme valides (l'auteur est dit fonctionnaire de fait)",
      "Sont automatiquement nuls",
      "Doivent être ratifiés par le juge",
      "Sont toujours annulés sans exception",
    ],
    bonne_reponse: 0,
    explication:
      "En vertu de la théorie de la fonction de fait, les actes accomplis par un agent incompétent, ou même par un simple administré, sont considérés comme valides. L'auteur est dit fonctionnaire de fait. Cette théorie repose sur l'idée d'apparence ou de nécessité.",
  },
  {
    id: "da-099",
    module: "Droit Administratif",
    theme: "L'acte administratif unilatéral",
    difficulte: "moyen",
    question: "Quelle est la condition de l'opposabilité de l'acte administratif aux administrés ?",
    options: [
      "La publicité (notification pour les actes individuels, publication pour les actes réglementaires)",
      "La simple signature de l'acte",
      "L'accord des administrés",
      "L'homologation du juge",
    ],
    bonne_reponse: 0,
    explication:
      "L'acte n'est opposable aux administrés que s'il a fait l'objet d'une publicité. La publicité est la condition de l'opposabilité : elle prend la forme de la notification (actes individuels) et de la publication (actes réglementaires et individuels).",
  },
  {
    id: "da-100",
    module: "Droit Administratif",
    theme: "L'acte administratif unilatéral",
    difficulte: "moyen",
    question: "Que signifie la non-rétroactivité de l'acte administratif ?",
    options: [
      "L'acte ne peut produire d'effet avant la date de sa signature : les règlements ne disposent que pour l'avenir",
      "L'acte produit des effets dans le passé",
      "L'acte n'a aucun effet",
      "L'acte s'applique uniquement aux faits passés",
    ],
    bonne_reponse: 0,
    explication:
      "La non-rétroactivité signifie que l'acte administratif ne peut produire d'effet avant la date de sa signature : les règlements ne disposent que pour l'avenir. Cette règle comporte des exceptions (loi autorisant la rétroactivité, régularisation).",
  },
  {
    id: "da-101",
    module: "Droit Administratif",
    theme: "L'acte administratif unilatéral",
    difficulte: "difficile",
    question:
      "Pour exécuter ses décisions, l'Administration dispose de deux privilèges. Lesquels ?",
    options: [
      "Le privilège du préalable et le privilège de l'exécution d'office",
      "Le privilège de juridiction et le privilège de caisse",
      "Le privilège d'annulation et le privilège de retrait",
      "Le privilège de tutelle et le privilège hiérarchique",
    ],
    bonne_reponse: 0,
    explication:
      "Pour exécuter ses décisions, l'Administration dispose de moyens exorbitants de droit commun (privilèges) au nombre de deux : le privilège du préalable et le privilège de l'exécution d'office.",
  },
  {
    id: "da-102",
    module: "Droit Administratif",
    theme: "L'acte administratif unilatéral",
    difficulte: "difficile",
    question: "En quoi consiste le privilège du préalable ?",
    options: [
      "La possibilité de prendre des décisions qui s'imposent immédiatement aux administrés sans s'adresser préalablement au juge",
      "La possibilité de recourir à la force sans condition",
      "L'obligation de saisir le juge avant toute décision",
      "Le droit d'annuler tout acte à tout moment",
    ],
    bonne_reponse: 0,
    explication:
      "Le privilège du préalable consiste dans la possibilité qu'a l'Administration de prendre des décisions qui s'imposent immédiatement aux administrés sans s'adresser préalablement au juge. L'administré doit d'abord se conformer, puis saisir le juge.",
  },
  {
    id: "da-103",
    module: "Droit Administratif",
    theme: "L'acte administratif unilatéral",
    difficulte: "difficile",
    question: "Quelle est la différence entre l'abrogation et le retrait d'un acte administratif ?",
    options: [
      "L'abrogation supprime l'acte pour l'avenir ; le retrait le supprime avec tous les effets déjà accomplis",
      "L'abrogation supprime les effets passés ; le retrait supprime pour l'avenir",
      "Les deux ont exactement le même effet",
      "Le retrait ne concerne que les contrats",
    ],
    bonne_reponse: 0,
    explication:
      "L'abrogation s'entend de la suppression de l'acte pour l'avenir, tandis que le retrait est la suppression de l'acte avec tous les effets déjà accomplis (effet rétroactif).",
  },
  {
    id: "da-104",
    module: "Droit Administratif",
    theme: "L'acte administratif unilatéral",
    difficulte: "difficile",
    question:
      "Un acte régulier créateur de droits peut-il être retiré ?",
    options: [
      "Non : l'acte régulier créateur de droits ne peut être rapporté",
      "Oui, à tout moment sans condition",
      "Oui, dans un délai de six mois",
      "Oui, uniquement par le juge",
    ],
    bonne_reponse: 0,
    explication:
      "Le retrait de l'acte régulier n'est possible que si celui-ci n'a pas créé de droits. L'acte régulier créateur de droits ne peut être rapporté ; au contraire, l'acte régulier non créateur de droits peut être rapporté.",
  },

  // =====================================================================
  //  THÈME 10 — Le contrat administratif
  // =====================================================================
  {
    id: "da-105",
    module: "Droit Administratif",
    theme: "Le contrat administratif",
    difficulte: "moyen",
    question: "Un contrat est administratif :",
    options: [
      "Soit par qualification légale, soit par détermination jurisprudentielle",
      "Uniquement par qualification légale",
      "Uniquement lorsqu'il est conclu entre particuliers",
      "Toujours, dès qu'une personne publique est partie",
    ],
    bonne_reponse: 0,
    explication:
      "Le contrat est administratif soit par qualification légale (la loi confère la qualification), soit par détermination jurisprudentielle (le juge la retient à défaut de texte).",
  },
  {
    id: "da-106",
    module: "Droit Administratif",
    theme: "Le contrat administratif",
    difficulte: "difficile",
    question:
      "Selon le critère organique de détermination jurisprudentielle, pour qu'un contrat soit administratif :",
    options: [
      "L'une au moins des parties doit être une personne publique ou son mandataire",
      "Les deux parties doivent être des personnes privées",
      "Le contrat doit porter sur une somme d'argent importante",
      "Le contrat doit être écrit et notarié",
    ],
    bonne_reponse: 0,
    explication:
      "Selon le critère organique, pour qu'un contrat revête le caractère administratif, il faut que l'une au moins des parties soit une personne publique ou son mandataire. Les contrats entre personnes privées ne peuvent être administratifs.",
  },
  {
    id: "da-107",
    module: "Droit Administratif",
    theme: "Le contrat administratif",
    difficulte: "difficile",
    question:
      "Quels sont les trois critères matériels alternatifs de détermination jurisprudentielle du contrat administratif ?",
    options: [
      "L'objet (exécution du service public), les clauses exorbitantes de droit commun, ou le régime exorbitant",
      "Le prix, la durée et le lieu du contrat",
      "La forme écrite, la signature et la publication",
      "La nationalité, la capacité et le consentement des parties",
    ],
    bonne_reponse: 0,
    explication:
      "Les critères matériels, alternatifs, sont au nombre de trois : soit le juge retient l'objet du contrat (exécution même du service public), soit la présence de clauses exorbitantes de droit commun, soit le régime exorbitant.",
  },
  {
    id: "da-108",
    module: "Droit Administratif",
    theme: "Le contrat administratif",
    difficulte: "moyen",
    question: "Quel est le mode de passation privilégié des contrats administratifs ?",
    options: [
      "L'appel d'offres",
      "Le gré à gré",
      "L'entente directe",
      "Le tirage au sort",
    ],
    bonne_reponse: 0,
    explication:
      "L'appel d'offres est le mode de passation privilégié des contrats administratifs. En matière de marchés publics, l'appel d'offres ouvert est la règle ; tout autre mode doit être exceptionnel et justifié.",
  },
  {
    id: "da-109",
    module: "Droit Administratif",
    theme: "Le contrat administratif",
    difficulte: "difficile",
    question:
      "Parmi les prérogatives de l'Administration dans l'exécution du contrat, laquelle lui permet d'imposer des obligations nouvelles au cocontractant ?",
    options: [
      "Le pouvoir de modification unilatérale",
      "Le pouvoir de résiliation unilatérale",
      "Le pouvoir de sanction",
      "Le pouvoir de direction et de contrôle",
    ],
    bonne_reponse: 0,
    explication:
      "Le pouvoir de modification unilatérale permet à l'Administration de modifier unilatéralement les clauses du contrat en imposant à son cocontractant des obligations nouvelles, différentes de celles initialement prévues.",
  },
  {
    id: "da-110",
    module: "Droit Administratif",
    theme: "Le contrat administratif",
    difficulte: "difficile",
    question:
      "Quelles sont les garanties du cocontractant de l'Administration ?",
    options: [
      "Le droit au paiement du prix et les droits à indemnité",
      "Le pouvoir de résiliation et de sanction",
      "Le pouvoir de modification unilatérale",
      "Le pouvoir de direction et de contrôle",
    ],
    bonne_reponse: 0,
    explication:
      "En contrepartie des prérogatives de l'Administration, le cocontractant dispose de garanties fondées sur le principe de l'équilibre financier du contrat : le droit au paiement du prix et les droits à indemnité.",
  },
  {
    id: "da-111",
    module: "Droit Administratif",
    theme: "Le contrat administratif",
    difficulte: "difficile",
    question: "Qu'est-ce que la théorie du fait du prince ?",
    options: [
      "Une mesure de l'autorité contractante qui rend plus onéreuse l'exécution du contrat et rompt son équilibre financier",
      "Un évènement naturel imprévisible",
      "Une faute du cocontractant",
      "Une décision du juge administratif",
    ],
    bonne_reponse: 0,
    explication:
      "Il y a fait du prince lorsque l'autorité contractante prend des mesures qui rendent plus onéreuse l'exécution du contrat et rompent ainsi l'équilibre financier. La mesure doit être imprévisible, émaner de l'autorité contractante et être particulière au cocontractant. L'indemnisation est intégrale.",
  },
  {
    id: "da-112",
    module: "Droit Administratif",
    theme: "Le contrat administratif",
    difficulte: "difficile",
    question:
      "En cas d'imprévision, l'indemnité versée au cocontractant est :",
    options: [
      "Limitée (non intégrale), destinée à permettre le rétablissement de l'équilibre financier",
      "Intégrale et couvrant tout déficit définitif",
      "Nulle en toute circonstance",
      "Fixée librement par le cocontractant",
    ],
    bonne_reponse: 0,
    explication:
      "L'imprévision (circonstances exceptionnelles, imprévisibles, étrangères à la volonté des parties qui bouleversent l'économie du contrat) emporte des effets limités : l'indemnité d'imprévision n'est pas intégrale ; elle n'a pas pour objet de couvrir des déficits définitifs.",
  },
  {
    id: "da-113",
    module: "Droit Administratif",
    theme: "Le contrat administratif",
    difficulte: "difficile",
    question: "Quelles sont les trois conditions d'application de la force majeure ?",
    options: [
      "Un évènement imprévisible, indépendant de la volonté des parties, rendant impossible l'exécution",
      "Un évènement prévisible, voulu par les parties et facile à exécuter",
      "Une faute du cocontractant, un retard et un déficit",
      "Une mesure de l'autorité contractante, imprévisible et particulière",
    ],
    bonne_reponse: 0,
    explication:
      "La force majeure suppose trois conditions : l'évènement doit être imprévisible au moment de la conclusion du contrat, indépendant de la volonté des parties, et rendre absolument impossible l'exécution de la prestation. Elle exonère de la responsabilité contractuelle.",
  },

  // =====================================================================
  //  THÈME 11 — Le recours pour excès de pouvoir (REP)
  // =====================================================================
  {
    id: "da-114",
    module: "Droit Administratif",
    theme: "Le recours pour excès de pouvoir (REP)",
    difficulte: "moyen",
    question: "Qu'est-ce que le recours pour excès de pouvoir (REP) ?",
    options: [
      "Une requête adressée au juge compétent ayant pour objet de voir annuler un acte administratif suspecté d'illégalité",
      "Une demande d'indemnisation d'un préjudice",
      "Un recours contre une décision de justice",
      "Une plainte pénale contre un agent public",
    ],
    bonne_reponse: 0,
    explication:
      "Le recours pour excès de pouvoir (contentieux de l'annulation) est une requête adressée au juge compétent et ayant pour objet de voir annuler un acte administratif suspecté d'illégalité.",
  },
  {
    id: "da-115",
    module: "Droit Administratif",
    theme: "Le recours pour excès de pouvoir (REP)",
    difficulte: "difficile",
    question: "En Côte d'Ivoire, quelle juridiction connaît du recours pour excès de pouvoir ?",
    options: [
      "Le Conseil d'État",
      "La Cour de cassation",
      "La Cour des comptes",
      "Le Conseil constitutionnel",
    ],
    bonne_reponse: 0,
    explication:
      "En Côte d'Ivoire, c'est au Conseil d'État que revient la compétence de connaître du recours pour excès de pouvoir. Les tribunaux administratifs et les Cours administratives d'appel ne sont pas encore fonctionnels.",
  },
  {
    id: "da-116",
    module: "Droit Administratif",
    theme: "Le recours pour excès de pouvoir (REP)",
    difficulte: "difficile",
    question: "Que signifie le caractère « non suspensif » du REP ?",
    options: [
      "La saisine du juge n'a pas d'effet immédiat sur l'acte : l'Administration continue de l'appliquer tant qu'il n'est pas annulé",
      "L'acte est immédiatement suspendu dès la saisine",
      "L'acte est annulé automatiquement",
      "Le recours suspend tous les délais",
    ],
    bonne_reponse: 0,
    explication:
      "Le caractère non suspensif du REP signifie que la saisine du juge est sans conséquence immédiate sur l'acte : le REP ne suspend pas l'exécution de la décision attaquée, l'Administration continue de l'appliquer. Le sursis à exécution est l'exception.",
  },
  {
    id: "da-117",
    module: "Droit Administratif",
    theme: "Le recours pour excès de pouvoir (REP)",
    difficulte: "difficile",
    question:
      "En Côte d'Ivoire, combien de conditions de recevabilité du REP sont exigées ?",
    options: [
      "Cinq (dont le recours administratif préalable)",
      "Trois",
      "Deux",
      "Une seule",
    ],
    bonne_reponse: 0,
    explication:
      "Dans bon nombre de pays, les conditions de recevabilité sont au nombre de quatre (nature de l'acte, qualité du requérant, délais, absence de recours parallèle). En Côte d'Ivoire, une cinquième condition est prévue : le recours administratif préalable (RAP).",
  },
  {
    id: "da-118",
    module: "Droit Administratif",
    theme: "Le recours pour excès de pouvoir (REP)",
    difficulte: "moyen",
    question: "Quel doit être le délai du recours administratif préalable (RAP) ?",
    options: [
      "Deux mois suivant la publicité de l'acte (publication ou notification)",
      "Six mois suivant l'acte",
      "Un an suivant l'acte",
      "Quinze jours suivant l'acte",
    ],
    bonne_reponse: 0,
    explication:
      "Le RAP doit intervenir dans les deux mois qui suivent la publicité de l'acte (publication ou notification). L'absence de RAP emporte systématiquement l'irrecevabilité du REP.",
  },
  {
    id: "da-119",
    module: "Droit Administratif",
    theme: "Le recours pour excès de pouvoir (REP)",
    difficulte: "difficile",
    question:
      "Quels sont les quatre cas d'ouverture du recours pour excès de pouvoir ?",
    options: [
      "L'incompétence, le vice de forme, le détournement de pouvoir et la violation de la loi",
      "La faute, le préjudice, le lien de causalité et le dommage",
      "L'urgence, la nécessité, l'imprévision et la force majeure",
      "La nullité, l'inexistence, le retrait et l'abrogation",
    ],
    bonne_reponse: 0,
    explication:
      "Les cas d'ouverture du REP (irrégularités susceptibles de vicier l'acte) sont au nombre de quatre : l'incompétence, le vice de forme, le détournement de pouvoir et la violation de la loi.",
  },
  {
    id: "da-120",
    module: "Droit Administratif",
    theme: "Le recours pour excès de pouvoir (REP)",
    difficulte: "difficile",
    question: "Aux yeux du juge, quel est le cas d'ouverture considéré comme l'irrégularité la plus grave ?",
    options: [
      "L'incompétence (les règles de compétence sont d'ordre public)",
      "Le vice de forme",
      "Le détournement de pouvoir",
      "La violation de la loi",
    ],
    bonne_reponse: 0,
    explication:
      "L'incompétence apparaît, aux yeux du juge, comme l'irrégularité la plus grave, parce que les règles de compétence sont d'ordre public. Le juge doit la soulever d'office ; il peut même déclarer l'acte inexistant.",
  },
  {
    id: "da-121",
    module: "Droit Administratif",
    theme: "Le recours pour excès de pouvoir (REP)",
    difficulte: "difficile",
    question: "Qu'est-ce que le détournement de pouvoir ?",
    options: [
      "Le fait pour une autorité d'accomplir un acte de sa compétence mais dans un but autre que celui pour lequel il pouvait être édicté",
      "Le fait d'agir sans en avoir la compétence",
      "Le fait de méconnaître les règles de forme",
      "Le fait de violer directement une règle de droit",
    ],
    bonne_reponse: 0,
    explication:
      "Le détournement de pouvoir existe lorsqu'une autorité accomplit un acte qui relève normalement de sa compétence, mais dans un but autre que celui pour lequel l'acte pouvait être édicté. Il porte sur le but poursuivi et amène le juge à rechercher les mobiles psychologiques.",
  },
  {
    id: "da-122",
    module: "Droit Administratif",
    theme: "Le recours pour excès de pouvoir (REP)",
    difficulte: "difficile",
    question: "Parmi les cas d'ouverture, lequel est la catégorie la plus fournie ?",
    options: [
      "La violation de la loi (erreur de droit et erreur sur les motifs de fait)",
      "L'incompétence",
      "Le vice de forme",
      "Le détournement de pouvoir",
    ],
    bonne_reponse: 0,
    explication:
      "La violation de la loi est de loin la catégorie la plus fournie. Elle concentre l'essentiel du contrôle du juge, au double plan de l'erreur de droit et de l'erreur tenant aux motifs de fait (exactitude matérielle et qualification juridique des faits).",
  },
  {
    id: "da-123",
    module: "Droit Administratif",
    theme: "Le recours pour excès de pouvoir (REP)",
    difficulte: "difficile",
    question: "Quel est l'effet de l'annulation prononcée par le juge de l'excès de pouvoir ?",
    options: [
      "L'acte disparaît ab initio (rétroactivement) et à l'égard de tous",
      "L'acte disparaît seulement pour l'avenir",
      "L'acte reste valable pour les tiers",
      "L'acte est simplement suspendu",
    ],
    bonne_reponse: 0,
    explication:
      "L'annulation prononcée par le juge fait disparaître l'acte rétroactivement (ab initio) : non seulement l'acte ne produira plus d'effets, mais les effets déjà produits disparaissent. La disparition vaut à l'égard de tous (requérant, tiers, Administration).",
  },

  // =====================================================================
  //  THÈME 12 — La responsabilité administrative
  // =====================================================================
  {
    id: "da-124",
    module: "Droit Administratif",
    theme: "La responsabilité administrative",
    difficulte: "difficile",
    question:
      "Quel arrêt de 1873 a affirmé le principe de la responsabilité administrative ?",
    options: [
      "L'arrêt Blanco (Tribunal des Conflits)",
      "L'arrêt Cadot",
      "L'arrêt Jamart",
      "L'arrêt Terrier",
    ],
    bonne_reponse: 0,
    explication:
      "Le principe de la responsabilité de la puissance publique n'a pas toujours été admis. C'est seulement en 1873 que le Tribunal des Conflits, dans l'arrêt Blanco, a affirmé le principe de la responsabilité administrative.",
  },
  {
    id: "da-125",
    module: "Droit Administratif",
    theme: "La responsabilité administrative",
    difficulte: "moyen",
    question: "La responsabilité de l'Administration est retenue :",
    options: [
      "Tantôt sur la base d'une faute, tantôt en l'absence de toute faute",
      "Uniquement sur la base d'une faute",
      "Uniquement en l'absence de faute",
      "Uniquement en cas d'infraction pénale",
    ],
    bonne_reponse: 0,
    explication:
      "La responsabilité de l'Administration est retenue tantôt sur la base d'une faute (responsabilité pour faute), tantôt en l'absence de toute faute (responsabilité sans faute).",
  },
  {
    id: "da-126",
    module: "Droit Administratif",
    theme: "La responsabilité administrative",
    difficulte: "moyen",
    question: "Qu'est-ce que la faute de service ?",
    options: [
      "Tout manquement aux obligations de service, imputable à l'Administration",
      "La faute révélant l'homme avec ses faiblesses et passions",
      "Une infraction pénale de l'agent",
      "Un préjudice sans lien avec le service",
    ],
    bonne_reponse: 0,
    explication:
      "La faute de service est celle imputable à l'Administration. Elle s'entend de tout manquement aux obligations de service, résultant soit du mauvais fonctionnement, soit de l'inertie du service (service n'ayant pas fonctionné ou ayant fonctionné à retardement).",
  },
  {
    id: "da-127",
    module: "Droit Administratif",
    theme: "La responsabilité administrative",
    difficulte: "difficile",
    question:
      "En principe, sur la base de quelle faute la responsabilité de l'Administration est-elle engagée ?",
    options: [
      "Une faute simple ; la faute lourde n'est exigée que lorsque le service présente des difficultés particulières",
      "Toujours une faute lourde",
      "Toujours une faute intentionnelle",
      "Une faute pénale exclusivement",
    ],
    bonne_reponse: 0,
    explication:
      "En principe, la responsabilité de l'Administration est engagée sur la base d'une faute simple. Mais lorsque les services présentent des difficultés particulières de fonctionnement, cette responsabilité ne peut être engagée que sur la base d'une faute lourde (d'une particulière gravité).",
  },
  {
    id: "da-128",
    module: "Droit Administratif",
    theme: "La responsabilité administrative",
    difficulte: "difficile",
    question:
      "Quelle est la distinction entre faute de service et faute personnelle ?",
    options: [
      "La faute de service révèle un administrateur sujet à erreur ; la faute personnelle révèle l'homme avec ses faiblesses, passions et imprudences",
      "La faute de service est intentionnelle, la faute personnelle est involontaire",
      "La faute de service engage l'agent, la faute personnelle engage l'État",
      "Il n'existe aucune distinction",
    ],
    bonne_reponse: 0,
    explication:
      "La faute de service révèle un administrateur plus ou moins sujet à erreur, alors que la faute personnelle révèle l'homme avec ses faiblesses, ses passions, ses imprudences. La faute personnelle engage la responsabilité personnelle de l'agent.",
  },
  {
    id: "da-129",
    module: "Droit Administratif",
    theme: "La responsabilité administrative",
    difficulte: "difficile",
    question: "Que permet le cumul de responsabilité à la victime ?",
    options: [
      "Un droit d'option : poursuivre soit l'Administration, soit l'agent, pour l'intégralité de la réparation",
      "Une double indemnisation intégrale",
      "L'impossibilité de poursuivre l'Administration",
      "L'obligation de poursuivre uniquement l'agent",
    ],
    bonne_reponse: 0,
    explication:
      "Le cumul de responsabilité offre un droit d'option à la victime : elle peut poursuivre soit l'Administration, soit l'agent. La personne poursuivie assure l'intégralité de la réparation, quitte à exercer une action récursoire contre l'autre.",
  },
  {
    id: "da-130",
    module: "Droit Administratif",
    theme: "La responsabilité administrative",
    difficulte: "difficile",
    question:
      "Dans quelles deux grandes hypothèses intervient la responsabilité sans faute de l'Administration ?",
    options: [
      "Lorsqu'il y a un risque créé par l'Administration et lorsqu'il y a rupture de l'égalité devant les charges publiques",
      "Lorsqu'il y a faute simple et faute lourde",
      "Lorsqu'il y a faute personnelle et faute de service",
      "Lorsqu'il y a incompétence et détournement de pouvoir",
    ],
    bonne_reponse: 0,
    explication:
      "La responsabilité sans faute de l'Administration intervient dans deux grandes hypothèses : lorsqu'il y a un risque créé par l'administration, et lorsqu'il y a rupture de l'égalité devant les charges publiques.",
  },
  {
    id: "da-131",
    module: "Droit Administratif",
    theme: "La responsabilité administrative",
    difficulte: "difficile",
    question:
      "Dans le régime de la responsabilité sans faute, que doit prouver la victime pour obtenir réparation ?",
    options: [
      "Le lien de cause à effet entre l'activité administrative et le préjudice",
      "La faute lourde de l'Administration",
      "L'intention de nuire de l'agent",
      "La violation d'une loi pénale",
    ],
    bonne_reponse: 0,
    explication:
      "Le régime de la responsabilité sans faute est favorable aux victimes : elles peuvent obtenir réparation dès lors qu'elles prouvent le lien de cause à effet entre l'activité administrative et le préjudice, sans avoir à démontrer une faute.",
  },
  {
    id: "da-132",
    module: "Droit Administratif",
    theme: "La responsabilité administrative",
    difficulte: "difficile",
    question:
      "Un acte administratif légalement pris peut engager la responsabilité sans faute de l'Administration s'il entraîne :",
    options: [
      "Un préjudice spécial et anormal d'une certaine gravité",
      "Un simple désagrément ordinaire",
      "Un préjudice partagé par tous les citoyens",
      "Aucun préjudice",
    ],
    bonne_reponse: 0,
    explication:
      "Au titre de la rupture de l'égalité devant les charges publiques, un acte administratif légalement pris peut entraîner la responsabilité de l'Administration s'il a pour effet de causer, au détriment d'une personne, un préjudice spécial et anormal d'une certaine gravité.",
  }
);
