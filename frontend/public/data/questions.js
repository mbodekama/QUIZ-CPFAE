/*
 * Banque de questions — QCM CPFAE
 * =================================
 * POINT D'ENTRÉE POUR AJOUTER UN MODULE :
 *   Chaque question porte un champ `module` et un champ `theme`.
 *   L'application construit dynamiquement la liste des modules et des thèmes
 *   à partir de ces champs. Pour ajouter un nouveau module, il suffit
 *   d'ajouter ses questions dans le tableau `QUESTIONS` ci-dessous (ou de
 *   charger un second fichier .js qui fait QUESTIONS.push(...)).
 *
 *   Métadonnées optionnelles par module dans MODULES_META (ordre, description,
 *   icône). Un module sans métadonnées reste affiché avec des valeurs par défaut.
 *
 * Format d'une question :
 *   {
 *     id: "deo-001",            // identifiant unique
 *     module: "...",            // nom du module
 *     theme: "...",             // sous-thème / chapitre
 *     difficulte: "facile" | "moyen" | "difficile",
 *     question: "...",          // énoncé (reformulé)
 *     options: ["A","B","C","D"],
 *     bonne_reponse: 0,          // index (0-3) de l'option correcte
 *     explication: "..."        // justification pédagogique
 *   }
 */

window.MODULES_META = {
  "Déontologie de la Fonction Publique": {
    ordre: 1,
    icone: "⚖️",
    description:
      "Recrutement, carrière, droits, obligations et discipline du fonctionnaire — Statut général (loi n°2023-892 du 23 novembre 2023).",
  },
};

window.QUESTIONS = [
  /* ============================================================
   * THÈME 1 — Sources et notions générales
   * ============================================================ */
  {
    id: "deo-001",
    module: "Déontologie de la Fonction Publique",
    theme: "Sources et notions générales",
    difficulte: "facile",
    question:
      "Quel texte constitue aujourd'hui le socle juridique principal de la déontologie de la Fonction Publique en Côte d'Ivoire ?",
    options: [
      "La loi n°2023-892 du 23 novembre 2023 portant statut général de la Fonction Publique",
      "La loi n°92-570 du 11 septembre 1992 portant statut général de la Fonction Publique",
      "Le décret n°2015-432 du 10 juin 2015 portant classification des grades",
      "L'ordonnance n°2018-517 du 30 mai 2018",
    ],
    bonne_reponse: 0,
    explication:
      "Le statut général en vigueur est la loi n°2023-892 du 23 novembre 2023. L'ancienne loi de 1992 a été abrogée ; les autres textes cités sont des textes spéciaux ou d'application.",
  },
  {
    id: "deo-002",
    module: "Déontologie de la Fonction Publique",
    theme: "Sources et notions générales",
    difficulte: "facile",
    question: "Que désigne la « déontologie de la Fonction Publique » ?",
    options: [
      "L'ensemble des primes et indemnités versées aux fonctionnaires",
      "L'ensemble des règles dont la stricte observance permet de rendre un service public de qualité aux usagers",
      "La liste des concours administratifs ouverts chaque année",
      "Le régime des pensions de retraite des agents de l'État",
    ],
    bonne_reponse: 1,
    explication:
      "La déontologie regroupe les règles (droits, obligations, ligne de conduite) dont le respect strict garantit un service public de qualité aux usagers.",
  },
  {
    id: "deo-003",
    module: "Déontologie de la Fonction Publique",
    theme: "Sources et notions générales",
    difficulte: "facile",
    question:
      "La conception ivoirienne de la Fonction Publique est à l'image de celle de quel pays ?",
    options: ["Les États-Unis", "Le Royaume-Uni", "La France", "Le Canada"],
    bonne_reponse: 2,
    explication:
      "La Fonction Publique ivoirienne est calquée sur le modèle français : une Fonction Publique de carrière (dite « fermée »).",
  },
  {
    id: "deo-004",
    module: "Déontologie de la Fonction Publique",
    theme: "Sources et notions générales",
    difficulte: "moyen",
    question:
      "Qu'implique le fait que la Fonction Publique ivoirienne soit dite « de carrière » ou « fermée » ?",
    options: [
      "Le fonctionnaire est recruté pour une mission précise et repart une fois celle-ci achevée",
      "Le fonctionnaire est lié à l'administration par un engagement qui ne prend fin, en principe, qu'à la retraite",
      "Seuls les nationaux peuvent y accéder",
      "Le fonctionnaire signe un contrat de travail renouvelable chaque année",
    ],
    bonne_reponse: 1,
    explication:
      "Dans une Fonction Publique de carrière, le fonctionnaire est durablement lié à l'administration jusqu'à la retraite, contrairement à la Fonction Publique d'emploi (« ouverte »), comme aux États-Unis.",
  },
  {
    id: "deo-005",
    module: "Déontologie de la Fonction Publique",
    theme: "Sources et notions générales",
    difficulte: "facile",
    question:
      "Quel texte porte attributions, composition, organisation et fonctionnement du Conseil de Discipline de la Fonction Publique ?",
    options: [
      "Le décret n°2022-636 du 03 août 2022",
      "Le décret n°2023-1002 du 20 décembre 2023",
      "Le décret n°2015-432 du 10 juin 2015",
      "La loi n°2019-871 du 14 octobre 2019",
    ],
    bonne_reponse: 1,
    explication:
      "Le Conseil de Discipline de la Fonction Publique est régi par le décret n°2023-1002 du 20 décembre 2023.",
  },
  {
    id: "deo-006",
    module: "Déontologie de la Fonction Publique",
    theme: "Sources et notions générales",
    difficulte: "facile",
    question:
      "Tout manquement d'un fonctionnaire à ses obligations professionnelles constitue :",
    options: [
      "Une simple erreur sans conséquence",
      "Une faute l'exposant à des sanctions disciplinaires, sans préjudice le cas échéant de peines pénales",
      "Un motif automatique de radiation des cadres",
      "Une cause de mise à la retraite d'office",
    ],
    bonne_reponse: 1,
    explication:
      "Le manquement aux obligations professionnelles est une faute exposant à des sanctions disciplinaires, sans préjudice, le cas échéant, des peines prévues par la loi pénale.",
  },
  {
    id: "deo-007",
    module: "Déontologie de la Fonction Publique",
    theme: "Sources et notions générales",
    difficulte: "difficile",
    question:
      "Deux décrets du 26 février 2025 précisent les modalités d'application du statut général. Comment se répartissent-ils ?",
    options: [
      "Le décret 2025-120 (modalités particulières) et le décret 2025-121 (modalités communes)",
      "Le décret 2025-120 (modalités communes) et le décret 2025-121 (modalités particulières)",
      "Les deux portent uniquement sur la rémunération",
      "Les deux portent uniquement sur la discipline",
    ],
    bonne_reponse: 1,
    explication:
      "Le décret n°2025-120 porte modalités communes d'application, et le décret n°2025-121 porte modalités particulières d'application de la loi portant statut général.",
  },
  {
    id: "deo-008",
    module: "Déontologie de la Fonction Publique",
    theme: "Sources et notions générales",
    difficulte: "moyen",
    question:
      "L'ordonnance n°2018-517 du 30 mai 2018 concerne le pouvoir disciplinaire des ministres chargés notamment :",
    options: [
      "De l'Éducation nationale et de la Santé",
      "De la Douane, des Eaux et Forêts, des Affaires Maritimes et Portuaires et des Services Pénitentiaires",
      "De l'Économie et des Finances",
      "De la Justice et des Affaires étrangères",
    ],
    bonne_reponse: 1,
    explication:
      "Cette ordonnance, ratifiée par la loi n°2019-871 du 14 octobre 2019, vise le pouvoir disciplinaire des ministres chargés des corps paramilitaires : Douane, Eaux et Forêts, Affaires Maritimes et Portuaires, Services Pénitentiaires.",
  },

  /* ============================================================
   * THÈME 2 — Le recrutement et l'accès à la Fonction Publique
   * ============================================================ */
  {
    id: "deo-009",
    module: "Déontologie de la Fonction Publique",
    theme: "Le recrutement",
    difficulte: "facile",
    question: "Quelle est la voie normale d'accès à la Fonction Publique ?",
    options: [
      "La nomination directe par décret",
      "Le concours",
      "La cooptation par les syndicats",
      "Le contrat de droit privé",
    ],
    bonne_reponse: 1,
    explication:
      "Les fonctionnaires sont recrutés par voie de concours ou, à titre dérogatoire, par décret. Le concours demeure la voie normale d'accès.",
  },
  {
    id: "deo-010",
    module: "Déontologie de la Fonction Publique",
    theme: "Le recrutement",
    difficulte: "moyen",
    question:
      "La voie dérogatoire de recrutement par décret relève de la compétence exclusive de :",
    options: [
      "Le Ministre chargé de la Fonction Publique",
      "Le Président de la République",
      "Le Directeur Général de la Fonction Publique",
      "Le Conseil de Discipline",
    ],
    bonne_reponse: 1,
    explication:
      "Le recrutement dérogatoire par décret relève de la compétence exclusive du Président de la République, qui tient ce pouvoir de la Constitution.",
  },
  {
    id: "deo-011",
    module: "Déontologie de la Fonction Publique",
    theme: "Le recrutement",
    difficulte: "facile",
    question:
      "Parmi les conditions générales d'accès à la Fonction Publique figure l'immatriculation à :",
    options: [
      "La Caisse Nationale de Prévoyance Sociale (CNPS)",
      "La Couverture Maladie Universelle (CMU)",
      "Un ordre professionnel",
      "Un syndicat représentatif",
    ],
    bonne_reponse: 1,
    explication:
      "Le candidat doit notamment être immatriculé à la Couverture Maladie Universelle (CMU) parmi les conditions générales d'accès.",
  },
  {
    id: "deo-012",
    module: "Déontologie de la Fonction Publique",
    theme: "Le recrutement",
    difficulte: "facile",
    question:
      "Quelle nationalité est exigée pour accéder à la Fonction Publique ivoirienne ?",
    options: [
      "Une nationalité d'un pays de la CEDEAO",
      "La nationalité ivoirienne",
      "Aucune condition de nationalité",
      "La double nationalité",
    ],
    bonne_reponse: 1,
    explication:
      "L'égalité d'accès aux emplois publics est ouverte à tous les Ivoiriens : avoir la nationalité ivoirienne est une condition générale d'accès.",
  },
  {
    id: "deo-013",
    module: "Déontologie de la Fonction Publique",
    theme: "Le recrutement",
    difficulte: "moyen",
    question:
      "L'exigence d'une taille minimale est une condition particulière imposée aux concours de :",
    options: [
      "L'enseignement primaire et secondaire",
      "La Police Nationale, la Gendarmerie Nationale et la Police Maritime",
      "Tous les emplois de catégorie A",
      "L'administration des Impôts et du Trésor",
    ],
    bonne_reponse: 1,
    explication:
      "L'exigence de la taille est une condition particulière liée à la spécificité de l'emploi, imposée aux concours de la Police Nationale, de la Gendarmerie Nationale et de la Police Maritime.",
  },
  {
    id: "deo-014",
    module: "Déontologie de la Fonction Publique",
    theme: "Le recrutement",
    difficulte: "moyen",
    question:
      "Pendant sa période de formation professionnelle, l'impétrant admis au concours :",
    options: [
      "A déjà la qualité de fonctionnaire titulaire",
      "N'a pas encore la qualité de fonctionnaire",
      "Est considéré comme agent contractuel",
      "Est placé en position de détachement",
    ],
    bonne_reponse: 1,
    explication:
      "Le début et la fin de la formation sont actés par un acte administratif, mais pendant toute cette période l'impétrant n'a pas encore la qualité de fonctionnaire.",
  },
  {
    id: "deo-015",
    module: "Déontologie de la Fonction Publique",
    theme: "Le recrutement",
    difficulte: "facile",
    question:
      "L'attestation de non bégaiement et de non surdité est exigée pour le recrutement des :",
    options: ["Magistrats", "Enseignants", "Militaires", "Médecins"],
    bonne_reponse: 1,
    explication:
      "C'est un exemple de condition particulière : l'attestation de non bégaiement et de non surdité est exigée pour le recrutement des enseignants.",
  },
  {
    id: "deo-016",
    module: "Déontologie de la Fonction Publique",
    theme: "Le recrutement",
    difficulte: "difficile",
    question:
      "Laquelle de ces conditions n'est PAS une condition générale d'accès à la Fonction Publique ?",
    options: [
      "Jouir de ses droits civiques et être de bonne moralité",
      "Remplir les conditions d'aptitude physique et mentale",
      "Remplir une condition de taille minimale",
      "Avoir les diplômes ou titres requis pour l'emploi",
    ],
    bonne_reponse: 2,
    explication:
      "La taille minimale est une condition particulière (liée à certains corps), non une condition générale. Les autres sont des conditions générales d'accès.",
  },

  /* ============================================================
   * THÈME 3 — Notion de fonctionnaire et d'agents publics
   * ============================================================ */
  {
    id: "deo-017",
    module: "Déontologie de la Fonction Publique",
    theme: "Fonctionnaire et agents publics",
    difficulte: "facile",
    question: "Quel article du statut général définit le fonctionnaire ?",
    options: ["L'article 1", "L'article 6", "L'article 21", "L'article 53"],
    bonne_reponse: 0,
    explication:
      "L'article 1 du statut général définit le fonctionnaire. (L'article 6 précise, lui, qu'il est dans une situation statutaire et réglementaire.)",
  },
  {
    id: "deo-018",
    module: "Déontologie de la Fonction Publique",
    theme: "Fonctionnaire et agents publics",
    difficulte: "moyen",
    question: "Combien d'éléments caractérisent le fonctionnaire ?",
    options: ["Deux", "Trois", "Quatre", "Cinq"],
    bonne_reponse: 2,
    explication:
      "Quatre éléments : occupation d'un emploi administratif, nomination à titre permanent, titularisation après stage probatoire dans un grade, et soumission au statut général.",
  },
  {
    id: "deo-019",
    module: "Déontologie de la Fonction Publique",
    theme: "Fonctionnaire et agents publics",
    difficulte: "moyen",
    question: "Le statut général de la Fonction Publique ne s'applique PAS :",
    options: [
      "Aux enseignants et médecins de l'État",
      "Aux magistrats de l'ordre judiciaire, au personnel militaire et au personnel de la Sûreté Nationale",
      "Aux agents des collectivités territoriales",
      "Aux fonctionnaires en détachement",
    ],
    bonne_reponse: 1,
    explication:
      "Le statut ne s'applique pas aux magistrats de l'ordre judiciaire, au personnel militaire et au personnel de la Sûreté Nationale, qui relèvent de statuts particuliers.",
  },
  {
    id: "deo-020",
    module: "Déontologie de la Fonction Publique",
    theme: "Fonctionnaire et agents publics",
    difficulte: "facile",
    question:
      "Selon l'article 6, le fonctionnaire est, vis-à-vis de l'Administration, dans une situation :",
    options: [
      "Contractuelle",
      "Statutaire et réglementaire",
      "Provisoire et révocable",
      "Purement conventionnelle",
    ],
    bonne_reponse: 1,
    explication:
      "Sa situation est statutaire et réglementaire : définie par un acte unilatéral des autorités (loi ou règlement), et non par un contrat.",
  },
  {
    id: "deo-021",
    module: "Déontologie de la Fonction Publique",
    theme: "Fonctionnaire et agents publics",
    difficulte: "facile",
    question: "Comment se définit un « agent public » ?",
    options: [
      "Uniquement un fonctionnaire titulaire",
      "Toute personne investie d'une mission de service public",
      "Toute personne rémunérée par l'État",
      "Tout salarié de droit privé",
    ],
    bonne_reponse: 1,
    explication:
      "L'agent public désigne toute personne investie d'une mission de service public. Cette catégorie englobe ceux ayant ou non la qualité d'agent de l'État.",
  },
  {
    id: "deo-022",
    module: "Déontologie de la Fonction Publique",
    theme: "Fonctionnaire et agents publics",
    difficulte: "facile",
    question: "Quelle est la durée du stage probatoire du fonctionnaire stagiaire ?",
    options: ["Six mois", "Un (1) an", "Deux (2) ans", "Trois (3) ans"],
    bonne_reponse: 1,
    explication:
      "Toute personne admise à occuper un emploi public en qualité de fonctionnaire est soumise à un stage d'une (1) année, éventuellement prolongé d'une seconde année.",
  },
  {
    id: "deo-023",
    module: "Déontologie de la Fonction Publique",
    theme: "Fonctionnaire et agents publics",
    difficulte: "moyen",
    question: "En principe, les agents contractuels de la Fonction Publique sont régis par :",
    options: [
      "Le statut général de la Fonction Publique",
      "La loi portant Code du Travail",
      "Le Code Pénal",
      "Le décret sur le Conseil de Discipline",
    ],
    bonne_reponse: 1,
    explication:
      "Les agents contractuels se trouvent dans une situation contractuelle de droit privé : leur régime est fixé par le Code du Travail, le statut général ne leur étant pas, en principe, applicable.",
  },
  {
    id: "deo-024",
    module: "Déontologie de la Fonction Publique",
    theme: "Fonctionnaire et agents publics",
    difficulte: "moyen",
    question:
      "Le contrat d'un agent contractuel recruté pour un emploi de catégorie A ne peut excéder :",
    options: [
      "Un an, non renouvelable",
      "Deux (2) ans, renouvelable une seule fois",
      "Trois ans, renouvelable deux fois",
      "Cinq ans, renouvelable indéfiniment",
    ],
    bonne_reponse: 1,
    explication:
      "Selon l'article 18 du statut, ces agents sont engagés par contrat à durée déterminée ne pouvant excéder deux (2) ans, renouvelable une seule fois.",
  },
  {
    id: "deo-025",
    module: "Déontologie de la Fonction Publique",
    theme: "Fonctionnaire et agents publics",
    difficulte: "difficile",
    question:
      "Le licenciement du fonctionnaire stagiaire pour insuffisance professionnelle notoire ne peut intervenir qu'après :",
    options: [
      "Trois mois de stage, sans avis particulier",
      "Six (6) mois de stage au moins et après avis de la Commission Administrative de Recours",
      "La fin de la deuxième année de stage uniquement",
      "Un an de stage et avis du Conseil de Discipline",
    ],
    bonne_reponse: 1,
    explication:
      "Le licenciement pour insuffisance professionnelle notoire ne peut intervenir qu'après six (6) mois de stage au moins et après avis de la Commission Administrative de Recours.",
  },
  {
    id: "deo-026",
    module: "Déontologie de la Fonction Publique",
    theme: "Fonctionnaire et agents publics",
    difficulte: "facile",
    question:
      "Parmi les agents publics n'ayant PAS la qualité d'agent de l'État, on trouve notamment :",
    options: [
      "Les attachés administratifs et contrôleurs du Trésor",
      "Les maires, avocats, jurés, huissiers et notaires",
      "Les enseignants et archivistes",
      "Les médecins des hôpitaux publics",
    ],
    bonne_reponse: 1,
    explication:
      "Les agents publics n'ayant pas la qualité d'agent de l'État sont notamment les maires, avocats, jurés, huissiers et notaires.",
  },
  {
    id: "deo-027",
    module: "Déontologie de la Fonction Publique",
    theme: "Fonctionnaire et agents publics",
    difficulte: "difficile",
    question:
      "Quelle sanction du second degré est applicable au fonctionnaire stagiaire ?",
    options: [
      "Le blâme",
      "L'exclusion définitive de l'emploi",
      "La révocation avec suspension des droits à pension",
      "La rétrogradation",
    ],
    bonne_reponse: 1,
    explication:
      "Pour le stagiaire, la sanction du 1er degré comprend avertissement, blâme et réduction de traitement ; la sanction du 2nd degré est l'exclusion définitive de l'emploi.",
  },
  {
    id: "deo-028",
    module: "Déontologie de la Fonction Publique",
    theme: "Fonctionnaire et agents publics",
    difficulte: "moyen",
    question: "La nomination d'un non-fonctionnaire à un emploi supérieur de l'État :",
    options: [
      "Entraîne automatiquement sa titularisation dans un grade",
      "N'entraîne pas sa titularisation dans un grade",
      "Lui confère immédiatement la qualité de fonctionnaire",
      "Est prononcée par le Conseil de Discipline",
    ],
    bonne_reponse: 1,
    explication:
      "Les nominations aux emplois supérieurs sont laissées à la discrétion du Gouvernement ; celle d'un non-fonctionnaire à ces emplois n'entraîne pas sa titularisation dans un grade.",
  },

  /* ============================================================
   * THÈME 4 — Le déroulement de la carrière
   * ============================================================ */
  {
    id: "deo-029",
    module: "Déontologie de la Fonction Publique",
    theme: "Déroulement de la carrière",
    difficulte: "facile",
    question:
      "Quel acte consiste à attribuer un poste de travail identifié et codifié à un fonctionnaire ?",
    options: ["La nomination", "L'affectation", "La mutation", "La titularisation"],
    bonne_reponse: 1,
    explication:
      "L'affectation consiste à attribuer un poste de travail identifié et codifié à un fonctionnaire, conformément à son grade.",
  },
  {
    id: "deo-030",
    module: "Déontologie de la Fonction Publique",
    theme: "Déroulement de la carrière",
    difficulte: "moyen",
    question:
      "Quel est le délai maximum pour prendre service après notification de la décision d'affectation ?",
    options: ["Un mois", "Deux mois", "Trois (3) mois", "Six mois"],
    bonne_reponse: 2,
    explication:
      "La personne affectée est tenue de prendre service dans un délai maximum de trois mois ; à défaut, sauf force majeure, elle perd le bénéfice de son admission.",
  },
  {
    id: "deo-031",
    module: "Déontologie de la Fonction Publique",
    theme: "Déroulement de la carrière",
    difficulte: "facile",
    question: "En combien de catégories les fonctionnaires sont-ils classés ?",
    options: ["Trois (A, B, C)", "Quatre (A, B, C, D)", "Cinq", "Six"],
    bonne_reponse: 1,
    explication:
      "Les fonctionnaires sont classés en quatre catégories : A, B, C et D, selon le niveau de formation et la qualification professionnelle.",
  },
  {
    id: "deo-032",
    module: "Déontologie de la Fonction Publique",
    theme: "Déroulement de la carrière",
    difficulte: "moyen",
    question: "Quels sont les grades de la catégorie A ?",
    options: [
      "A1, A2, A3, A4",
      "A3, A4, A5, A6, A7",
      "A1 à A5",
      "A4 à A8",
    ],
    bonne_reponse: 1,
    explication:
      "Les grades de la catégorie A sont A3, A4, A5, A6 et A7 (par ordre croissant).",
  },
  {
    id: "deo-033",
    module: "Déontologie de la Fonction Publique",
    theme: "Déroulement de la carrière",
    difficulte: "moyen",
    question: "Le Président de la République nomme par décret aux emplois des grades :",
    options: ["D1 à C3", "B1 à A3", "A4 à A7", "D1 à A3"],
    bonne_reponse: 2,
    explication:
      "Le Président de la République nomme par décret aux emplois supérieurs (grades A4 à A7) ; le Ministre chargé de la Fonction Publique nomme par arrêté pour les grades D1 à A3.",
  },
  {
    id: "deo-034",
    module: "Déontologie de la Fonction Publique",
    theme: "Déroulement de la carrière",
    difficulte: "facile",
    question: "L'arrêté de titularisation est signé par :",
    options: [
      "Le Président de la République",
      "Le Ministre chargé de la Fonction Publique",
      "Le Directeur des Ressources Humaines",
      "Le Préfet",
    ],
    bonne_reponse: 1,
    explication:
      "La titularisation confère à titre définitif un grade ; l'arrêté de titularisation est signé par le Ministre chargé de la Fonction Publique.",
  },
  {
    id: "deo-035",
    module: "Déontologie de la Fonction Publique",
    theme: "Déroulement de la carrière",
    difficulte: "facile",
    question: "En principe, l'avancement d'échelon a lieu :",
    options: [
      "Chaque année",
      "Tous les deux (2) ans",
      "Tous les trois ans",
      "Tous les cinq ans",
    ],
    bonne_reponse: 1,
    explication:
      "L'avancement d'échelon a lieu de façon continue, en principe tous les deux (2) ans, en tenant compte de l'ancienneté et de l'évaluation.",
  },
  {
    id: "deo-036",
    module: "Déontologie de la Fonction Publique",
    theme: "Déroulement de la carrière",
    difficulte: "difficile",
    question:
      "Pour un fonctionnaire particulièrement méritant, la durée d'avancement d'échelon peut être réduite de :",
    options: [
      "Un ou deux mois",
      "Trois (3) ou six (6) mois",
      "Douze mois",
      "Aucune réduction n'est possible",
    ],
    bonne_reponse: 1,
    explication:
      "Pour les fonctionnaires méritants (évaluation satisfaisante ou distinction dans l'Ordre du Mérite), une réduction de trois (3) ou six (6) mois peut être accordée.",
  },
  {
    id: "deo-037",
    module: "Déontologie de la Fonction Publique",
    theme: "Déroulement de la carrière",
    difficulte: "facile",
    question:
      "La loi n°2023-892 a institué, en remplacement de la notation, un dispositif appelé :",
    options: ["L'audit", "L'évaluation", "L'inspection", "Le classement"],
    bonne_reponse: 1,
    explication:
      "La loi de 2023 a institué l'évaluation des fonctionnaires en remplacement de la notation prévue par l'ancienne loi.",
  },
  {
    id: "deo-038",
    module: "Déontologie de la Fonction Publique",
    theme: "Déroulement de la carrière",
    difficulte: "facile",
    question: "La promotion se définit comme :",
    options: [
      "Le passage d'un échelon à l'échelon immédiatement supérieur",
      "Le passage du fonctionnaire de son grade au grade immédiatement supérieur",
      "Le changement de poste dans le même organisme",
      "L'attribution d'une distinction honorifique",
    ],
    bonne_reponse: 1,
    explication:
      "La promotion est le passage du fonctionnaire de son grade au grade immédiatement supérieur, par voie de concours ou, à titre exceptionnel, par décret.",
  },
  {
    id: "deo-039",
    module: "Déontologie de la Fonction Publique",
    theme: "Déroulement de la carrière",
    difficulte: "difficile",
    question:
      "Pour une mobilité professionnelle vers un emploi d'une famille d'emplois différente, l'ancienneté minimale requise dans l'emploi d'origine est de :",
    options: [
      "Cinq (5) années",
      "Dix (10) années",
      "Deux (2) années",
      "Quinze (15) années",
    ],
    bonne_reponse: 1,
    explication:
      "Il faut au moins 5 ans de services effectifs si l'emploi sollicité relève de la même famille, et au moins 10 ans si les emplois relèvent de familles différentes.",
  },
  {
    id: "deo-040",
    module: "Déontologie de la Fonction Publique",
    theme: "Déroulement de la carrière",
    difficulte: "facile",
    question: "Comment est désigné un grade ?",
    options: [
      "Par un chiffre uniquement",
      "Par la lettre de la catégorie suivie d'un chiffre",
      "Par un nom de fonction",
      "Par une couleur",
    ],
    bonne_reponse: 1,
    explication:
      "Le grade est désigné par la lettre de la catégorie (A, B, C, D) suivie d'un chiffre : par exemple A4, B2, C1, D2.",
  },
  {
    id: "deo-041",
    module: "Déontologie de la Fonction Publique",
    theme: "Déroulement de la carrière",
    difficulte: "moyen",
    question: "En combien de familles d'emplois les emplois de la Fonction Publique sont-ils regroupés ?",
    options: ["Quatre (4)", "Cinq (5)", "Six (6)", "Sept (7)"],
    bonne_reponse: 2,
    explication:
      "Les emplois sont regroupés en six (6) familles d'emplois (éducation/formation ; scientifiques et techniques ; administratif et juridique ; production littéraire et artistique ; affaires sociales ; gestion économique et financière).",
  },
  {
    id: "deo-042",
    module: "Déontologie de la Fonction Publique",
    theme: "Déroulement de la carrière",
    difficulte: "difficile",
    question:
      "À quel niveau de diplôme correspond au minimum la catégorie C ?",
    options: [
      "CEPE (Certificat d'Étude Primaire)",
      "BEPC ou CAP (enseignement secondaire du 1er cycle)",
      "BAC ou BT",
      "Licence ou BTS",
    ],
    bonne_reponse: 1,
    explication:
      "La catégorie C (fonctions d'exécution) correspond à l'enseignement secondaire du 1er cycle : BEPC, CAP. Le CEPE relève de la catégorie D.",
  },

  /* ============================================================
   * THÈME 5 — Les positions du fonctionnaire
   * ============================================================ */
  {
    id: "deo-043",
    module: "Déontologie de la Fonction Publique",
    theme: "Les positions du fonctionnaire",
    difficulte: "facile",
    question:
      "Selon l'article 53, dans combien de positions le fonctionnaire peut-il être placé au cours de sa carrière ?",
    options: ["Deux", "Trois", "Quatre", "Cinq"],
    bonne_reponse: 2,
    explication:
      "Quatre positions : l'activité, le détachement, la disponibilité et la position sous les drapeaux.",
  },
  {
    id: "deo-044",
    module: "Déontologie de la Fonction Publique",
    theme: "Les positions du fonctionnaire",
    difficulte: "facile",
    question: "Quelle est la position normale du fonctionnaire ?",
    options: ["Le détachement", "La disponibilité", "L'activité", "Sous les drapeaux"],
    bonne_reponse: 2,
    explication:
      "L'activité est la position normale ; le détachement, la disponibilité et la position sous les drapeaux sont des positions exceptionnelles.",
  },
  {
    id: "deo-045",
    module: "Déontologie de la Fonction Publique",
    theme: "Les positions du fonctionnaire",
    difficulte: "moyen",
    question: "Le détachement de courte durée ne peut, en principe, excéder :",
    options: [
      "Trois mois",
      "Six (6) mois, sans renouvellement",
      "Un an renouvelable",
      "Deux ans",
    ],
    bonne_reponse: 1,
    explication:
      "Le détachement de courte durée ne peut excéder six (6) mois ni être renouvelé (délai porté à un an s'il s'agit d'une mission d'enseignement à l'étranger).",
  },
  {
    id: "deo-046",
    module: "Déontologie de la Fonction Publique",
    theme: "Les positions du fonctionnaire",
    difficulte: "moyen",
    question: "Le détachement de longue durée ne peut excéder :",
    options: [
      "Trois (3) ans",
      "Cinq (5) années, renouvelable",
      "Dix (10) ans",
      "Deux (2) ans",
    ],
    bonne_reponse: 1,
    explication:
      "Le détachement de longue durée ne peut excéder cinq (5) années ; il peut être renouvelé par périodes successives de cinq ans.",
  },
  {
    id: "deo-047",
    module: "Déontologie de la Fonction Publique",
    theme: "Les positions du fonctionnaire",
    difficulte: "difficile",
    question: "Le détachement auprès d'une entreprise privée ne peut excéder :",
    options: [
      "Un an renouvelable",
      "Trois (3) ans non renouvelables",
      "Cinq ans renouvelables",
      "Six mois",
    ],
    bonne_reponse: 1,
    explication:
      "Le détachement auprès d'une entreprise privée, subordonné à l'accord du Conseil des Ministres, ne peut excéder trois (3) ans non renouvelables.",
  },
  {
    id: "deo-048",
    module: "Déontologie de la Fonction Publique",
    theme: "Les positions du fonctionnaire",
    difficulte: "moyen",
    question: "En position de détachement, le fonctionnaire perçoit sa rémunération :",
    options: [
      "Auprès de son administration d'origine",
      "Auprès de l'organisme d'accueil",
      "Auprès du Trésor Public directement",
      "Il ne perçoit aucune rémunération",
    ],
    bonne_reponse: 1,
    explication:
      "Le fonctionnaire en détachement perçoit sa rémunération auprès de l'organisme d'accueil, tout en conservant ses droits à l'avancement, à la promotion et à la retraite.",
  },
  {
    id: "deo-049",
    module: "Déontologie de la Fonction Publique",
    theme: "Les positions du fonctionnaire",
    difficulte: "facile",
    question: "La disponibilité est une position :",
    options: [
      "Décidée d'office par l'administration pour raisons de service",
      "Accordée à la demande du fonctionnaire, pour des raisons personnelles",
      "Réservée aux fonctionnaires stagiaires",
      "Automatique en cas de maladie",
    ],
    bonne_reponse: 1,
    explication:
      "La disponibilité est la position du fonctionnaire dont l'activité est suspendue temporairement, à sa demande, pour des raisons personnelles.",
  },
  {
    id: "deo-050",
    module: "Déontologie de la Fonction Publique",
    theme: "Les positions du fonctionnaire",
    difficulte: "moyen",
    question: "En position de disponibilité, le fonctionnaire :",
    options: [
      "Continue de percevoir l'intégralité de sa rémunération",
      "N'a droit à aucune rémunération et perd ses droits à l'avancement",
      "Perçoit la moitié de son traitement",
      "Conserve tous ses droits à la promotion",
    ],
    bonne_reponse: 1,
    explication:
      "Le fonctionnaire en disponibilité n'a droit à aucune rémunération et perd ses droits à l'avancement, à la formation, à la promotion, à la distinction et à la retraite pendant cette durée.",
  },
  {
    id: "deo-051",
    module: "Déontologie de la Fonction Publique",
    theme: "Les positions du fonctionnaire",
    difficulte: "difficile",
    question:
      "La demande de renouvellement d'un détachement (ou la réintégration) doit être sollicitée au moins :",
    options: [
      "Un mois avant le terme fixé",
      "Deux (2) mois avant le terme fixé",
      "Six mois avant le terme fixé",
      "Le jour même du terme fixé",
    ],
    bonne_reponse: 1,
    explication:
      "Le fonctionnaire placé en détachement à sa demande doit solliciter le renouvellement ou sa réintégration deux (2) mois au moins avant le terme fixé (règle identique pour la disponibilité).",
  },
  {
    id: "deo-052",
    module: "Déontologie de la Fonction Publique",
    theme: "Les positions du fonctionnaire",
    difficulte: "moyen",
    question:
      "Le fonctionnaire placé « sous les drapeaux » perçoit :",
    options: [
      "Sa rémunération d'activité intégrale",
      "Sa seule solde militaire (il perd sa rémunération d'activité)",
      "Une double rémunération",
      "Aucune rémunération",
    ],
    bonne_reponse: 1,
    explication:
      "Sous les drapeaux, il perd sa rémunération d'activité et ne perçoit que sa solde militaire. La période est toutefois prise en compte pour l'avancement et la retraite.",
  },
  {
    id: "deo-053",
    module: "Déontologie de la Fonction Publique",
    theme: "Les positions du fonctionnaire",
    difficulte: "difficile",
    question:
      "Quelle position exceptionnelle reste ouverte au fonctionnaire stagiaire ?",
    options: [
      "Le détachement",
      "La disponibilité",
      "La position sous les drapeaux",
      "Aucune",
    ],
    bonne_reponse: 2,
    explication:
      "Les positions exceptionnelles sont interdites au fonctionnaire stagiaire, à l'exception de la position sous les drapeaux.",
  },

  /* ============================================================
   * THÈME 6 — La cessation définitive d'activité
   * ============================================================ */
  {
    id: "deo-054",
    module: "Déontologie de la Fonction Publique",
    theme: "Cessation définitive d'activité",
    difficulte: "facile",
    question: "La cessation définitive d'activité entraînant la perte de la qualité de fonctionnaire résulte de :",
    options: [
      "La seule mise à la retraite",
      "La retraite, le licenciement, la démission, la révocation et le décès",
      "La mutation et le détachement",
      "La disponibilité et la mise sous les drapeaux",
    ],
    bonne_reponse: 1,
    explication:
      "La cessation définitive de fonction résulte de l'admission à la retraite, du licenciement, de la démission, de la révocation et du décès.",
  },
  {
    id: "deo-055",
    module: "Déontologie de la Fonction Publique",
    theme: "Cessation définitive d'activité",
    difficulte: "moyen",
    question: "Quelle est la limite d'âge de départ à la retraite pour les grades D1 à A3 ?",
    options: ["55 ans", "60 ans", "63 ans", "65 ans"],
    bonne_reponse: 1,
    explication:
      "La limite d'âge statutaire est de 60 ans pour les grades D1 à A3, et de 65 ans pour les grades A4 à A7.",
  },
  {
    id: "deo-056",
    module: "Déontologie de la Fonction Publique",
    theme: "Cessation définitive d'activité",
    difficulte: "moyen",
    question: "Quelle est la limite d'âge de départ à la retraite pour les grades A4 à A7 ?",
    options: ["60 ans", "62 ans", "65 ans", "67 ans"],
    bonne_reponse: 2,
    explication:
      "La limite d'âge est de 65 ans pour les grades A4 à A7 (contre 60 ans pour les grades D1 à A3).",
  },
  {
    id: "deo-057",
    module: "Déontologie de la Fonction Publique",
    theme: "Cessation définitive d'activité",
    difficulte: "difficile",
    question:
      "Selon le décret n°2023-655 du 12 juillet 2023, à quelle date le fonctionnaire est-il sorti des effectifs ?",
    options: [
      "Le jour de son anniversaire",
      "Le 31 décembre de l'année de son anniversaire",
      "Le 1er janvier de l'année suivant celle de son 60e ou 65e anniversaire",
      "À la fin du trimestre de son anniversaire",
    ],
    bonne_reponse: 2,
    explication:
      "Les fonctionnaires font valoir leurs droits à la retraite le 31 décembre de l'année de leur 60e ou 65e anniversaire et sont sortis des effectifs le 1er janvier de l'année suivante.",
  },
  {
    id: "deo-058",
    module: "Déontologie de la Fonction Publique",
    theme: "Cessation définitive d'activité",
    difficulte: "facile",
    question: "Le licenciement est prononcé par :",
    options: [
      "Le Président de la République",
      "Le Ministre chargé de la Fonction Publique",
      "Le Conseil de Discipline",
      "Le supérieur hiérarchique direct",
    ],
    bonne_reponse: 1,
    explication:
      "Le licenciement, mesure administrative pour motifs non disciplinaires, est prononcé par le Ministre chargé de la Fonction Publique.",
  },
  {
    id: "deo-059",
    module: "Déontologie de la Fonction Publique",
    theme: "Cessation définitive d'activité",
    difficulte: "moyen",
    question: "Le licenciement est une mesure administrative fondée sur des motifs :",
    options: [
      "Disciplinaires",
      "Non disciplinaires (inaptitude, insuffisance professionnelle notoire, perte de nationalité)",
      "Uniquement liés à l'âge",
      "Purement budgétaires",
    ],
    bonne_reponse: 1,
    explication:
      "Le licenciement met fin aux fonctions pour des motifs NON disciplinaires : inaptitude physique/mentale, insuffisance professionnelle notoire, ou perte de la nationalité ivoirienne.",
  },
  {
    id: "deo-060",
    module: "Déontologie de la Fonction Publique",
    theme: "Cessation définitive d'activité",
    difficulte: "moyen",
    question:
      "En l'absence de décision de l'autorité dans les deux mois suivant la demande, la démission est :",
    options: [
      "Rejetée d'office",
      "Réputée acceptée",
      "Reportée d'un an",
      "Soumise au Conseil de Discipline",
    ],
    bonne_reponse: 1,
    explication:
      "La décision doit intervenir dans un délai de deux (2) mois à compter de la réception de la demande par le Ministre ; passé ce délai, la démission est réputée acceptée.",
  },
  {
    id: "deo-061",
    module: "Déontologie de la Fonction Publique",
    theme: "Cessation définitive d'activité",
    difficulte: "facile",
    question: "Une démission régulièrement acceptée est :",
    options: [
      "Révocable à tout moment",
      "Irrévocable et ne peut être rapportée",
      "Valable seulement six mois",
      "Soumise à l'accord du syndicat",
    ],
    bonne_reponse: 1,
    explication:
      "La démission régulièrement acceptée est irrévocable et ne peut être rapportée.",
  },
  {
    id: "deo-062",
    module: "Déontologie de la Fonction Publique",
    theme: "Cessation définitive d'activité",
    difficulte: "facile",
    question: "La révocation est une sanction disciplinaire :",
    options: [
      "Du premier degré",
      "Du second degré",
      "Purement administrative sans caractère disciplinaire",
      "Réservée aux stagiaires",
    ],
    bonne_reponse: 1,
    explication:
      "La révocation est une sanction disciplinaire du second degré, conséquence d'une faute professionnelle grave, prononcée avec ou sans suspension des droits à pension.",
  },
  {
    id: "deo-063",
    module: "Déontologie de la Fonction Publique",
    theme: "Cessation définitive d'activité",
    difficulte: "difficile",
    question: "Au décès du fonctionnaire, le capital décès versé aux ayants droit représente :",
    options: [
      "Six mois de rémunération",
      "Une année de rémunération du défunt",
      "Deux années de rémunération",
      "Le montant des cotisations de retraite",
    ],
    bonne_reponse: 1,
    explication:
      "Les ayants droit peuvent prétendre à la réversion de pension ainsi qu'au capital décès représentant une année de rémunération du défunt.",
  },
  {
    id: "deo-064",
    module: "Déontologie de la Fonction Publique",
    theme: "Cessation définitive d'activité",
    difficulte: "difficile",
    question:
      "Le fonctionnaire démissionnaire qui cesse son travail avant la date prévue par l'Administration :",
    options: [
      "Bénéficie d'une prime de départ",
      "Se met en situation d'abandon de poste et s'expose à une sanction disciplinaire",
      "Voit sa démission automatiquement annulée",
      "Est immédiatement mis à la retraite",
    ],
    bonne_reponse: 1,
    explication:
      "S'il part avant la date fixée, il se met en situation irrégulière (abandon de poste) et s'expose à une sanction disciplinaire.",
  },

  /* ============================================================
   * THÈME 7 — Les droits du fonctionnaire (libertés, syndical, grève)
   * ============================================================ */
  {
    id: "deo-065",
    module: "Déontologie de la Fonction Publique",
    theme: "Droits, libertés et grève",
    difficulte: "facile",
    question:
      "Quels sont les droits reconnus au fonctionnaire en tant que citoyen (libertés publiques) ?",
    options: [
      "Le droit au logement, à la formation et à la promotion",
      "La liberté d'opinion et d'expression, le droit syndical et le droit de grève",
      "Le droit au congé annuel et de maternité",
      "Le droit à la protection et à l'évaluation",
    ],
    bonne_reponse: 1,
    explication:
      "En tant que citoyen, le fonctionnaire jouit de libertés publiques : liberté d'opinion et d'expression, droit syndical et droit de grève.",
  },
  {
    id: "deo-066",
    module: "Déontologie de la Fonction Publique",
    theme: "Droits, libertés et grève",
    difficulte: "facile",
    question: "La liberté d'opinion est reconnue au fonctionnaire par l'article :",
    options: ["21 du statut", "28 du statut", "35 du statut", "37 du statut"],
    bonne_reponse: 0,
    explication:
      "L'article 21 du statut dispose que la liberté d'opinion est reconnue aux fonctionnaires, sans distinction fondée sur leurs opinions politiques, philosophiques ou religieuses.",
  },
  {
    id: "deo-067",
    module: "Déontologie de la Fonction Publique",
    theme: "Droits, libertés et grève",
    difficulte: "facile",
    question: "Quel texte fixe les modalités de la grève dans les services publics ?",
    options: [
      "La loi n°92-571 du 11 septembre 1992",
      "La loi n°2023-892 du 23 novembre 2023",
      "Le décret du 17 janvier 1963",
      "L'ordonnance n°2018-517",
    ],
    bonne_reponse: 0,
    explication:
      "Le droit de grève s'exerce dans le cadre défini par la loi n°92-571 du 11 septembre 1992 relative aux modalités de la grève dans les services publics.",
  },
  {
    id: "deo-068",
    module: "Déontologie de la Fonction Publique",
    theme: "Droits, libertés et grève",
    difficulte: "moyen",
    question: "Une grève dite « perlée » se caractérise par :",
    options: [
      "Le refus total d'assurer le service et le départ des locaux",
      "Un ralentissement du travail : les agents restent à leur poste mais assurent mal le service",
      "Une grève illimitée sans préavis",
      "L'occupation des locaux de la direction",
    ],
    bonne_reponse: 1,
    explication:
      "La grève est perlée lorsqu'un ralentissement est constaté : les fonctionnaires restent à leur poste mais assurent mal le service (à l'inverse de la grève totale).",
  },
  {
    id: "deo-069",
    module: "Déontologie de la Fonction Publique",
    theme: "Droits, libertés et grève",
    difficulte: "moyen",
    question: "Le préavis de grève doit être déposé au moins :",
    options: [
      "Trois jours avant le déclenchement",
      "Six (6) jours ouvrables ou ouvrés avant le déclenchement",
      "Un mois avant le déclenchement",
      "Le jour même du déclenchement",
    ],
    bonne_reponse: 1,
    explication:
      "Le déclenchement de la grève est subordonné à un préavis déposé six (6) jours ouvrables ou ouvrés avant, par le syndicat.",
  },
  {
    id: "deo-070",
    module: "Déontologie de la Fonction Publique",
    theme: "Droits, libertés et grève",
    difficulte: "difficile",
    question: "Auprès de qui le préavis de grève doit-il être déposé ?",
    options: [
      "Uniquement auprès du Président de la République",
      "Auprès de l'employeur et du Ministre chargé de la Fonction Publique",
      "Auprès du Conseil de Discipline",
      "Auprès du Procureur de la République",
    ],
    bonne_reponse: 1,
    explication:
      "Le préavis est déposé auprès de l'employeur et auprès du Ministre chargé de la Fonction Publique, qui délivre un récépissé de dépôt.",
  },
  {
    id: "deo-071",
    module: "Déontologie de la Fonction Publique",
    theme: "Droits, libertés et grève",
    difficulte: "facile",
    question: "Pendant toute la durée de la grève, le fonctionnaire gréviste perçoit :",
    options: [
      "L'intégralité de son traitement",
      "Aucune rémunération (application du principe du service fait)",
      "La moitié de son traitement",
      "Uniquement ses primes",
    ],
    bonne_reponse: 1,
    explication:
      "Aucune rémunération n'est versée pendant la grève : l'Administration opère une retenue sur le traitement, en vertu du principe du service fait.",
  },
  {
    id: "deo-072",
    module: "Déontologie de la Fonction Publique",
    theme: "Droits, libertés et grève",
    difficulte: "difficile",
    question:
      "La retenue sur traitement opérée en cas de grève ne porte PAS sur :",
    options: [
      "Le traitement de base",
      "Les indemnités",
      "Les primes",
      "Les allocations familiales",
    ],
    bonne_reponse: 3,
    explication:
      "La retenue porte sur le traitement de base, les indemnités et les primes, à l'exclusion des allocations familiales.",
  },
  {
    id: "deo-073",
    module: "Déontologie de la Fonction Publique",
    theme: "Droits, libertés et grève",
    difficulte: "difficile",
    question:
      "La réquisition des fonctionnaires grévistes peut être opérée par décret pris en vertu de la loi du :",
    options: [
      "11 septembre 1992",
      "17 janvier 1963",
      "23 novembre 2023",
      "30 mai 2018",
    ],
    bonne_reponse: 1,
    explication:
      "Le Gouvernement peut réquisitionner les grévistes par décret pris en vertu de la loi du 17 janvier 1963, pour assurer le fonctionnement du service public.",
  },
  {
    id: "deo-074",
    module: "Déontologie de la Fonction Publique",
    theme: "Droits, libertés et grève",
    difficulte: "moyen",
    question:
      "Parmi ces personnels, lequel voit son droit de grève limité ou interdit en raison de la nature de ses fonctions ?",
    options: [
      "Les agents des impôts",
      "Le corps médical (tenu à un service minimum)",
      "Les enseignants du primaire",
      "Les agents des ressources humaines",
    ],
    bonne_reponse: 1,
    explication:
      "Certains statuts particuliers limitent ou interdisent la grève : corps médical (service minimum), magistrats, personnel de la sûreté nationale, personnel assurant le trafic aérien, etc.",
  },

  /* ============================================================
   * THÈME 8 — Rémunération et avantages sociaux
   * ============================================================ */
  {
    id: "deo-075",
    module: "Déontologie de la Fonction Publique",
    theme: "Rémunération et avantages sociaux",
    difficulte: "moyen",
    question:
      "Le traitement du fonctionnaire s'obtient en multipliant son indice par la référence indiciaire de :",
    options: ["100", "233,457", "500", "7.500"],
    bonne_reponse: 1,
    explication:
      "Le traitement s'obtient en multipliant l'indice du fonctionnaire par la référence indiciaire de 233,457.",
  },
  {
    id: "deo-076",
    module: "Déontologie de la Fonction Publique",
    theme: "Rémunération et avantages sociaux",
    difficulte: "facile",
    question: "Quel est le taux de retenue pour pension appliqué sur le traitement ?",
    options: ["5%", "8,33%", "10%", "15%"],
    bonne_reponse: 1,
    explication:
      "Le traitement est soumis à une retenue pour pension dont le taux est fixé à 8,33%.",
  },
  {
    id: "deo-077",
    module: "Déontologie de la Fonction Publique",
    theme: "Rémunération et avantages sociaux",
    difficulte: "facile",
    question: "L'indemnité de résidence représente :",
    options: [
      "10% du traitement de base",
      "15% du traitement de base",
      "25% du traitement de base",
      "33,33% du traitement de base",
    ],
    bonne_reponse: 1,
    explication:
      "L'indemnité de résidence représente 15% du traitement de base.",
  },
  {
    id: "deo-078",
    module: "Déontologie de la Fonction Publique",
    theme: "Rémunération et avantages sociaux",
    difficulte: "facile",
    question: "À combien est fixé le montant des allocations familiales par enfant ?",
    options: ["5.000 FCFA", "7.500 FCFA", "10.000 FCFA", "15.000 FCFA"],
    bonne_reponse: 1,
    explication:
      "Le montant des allocations familiales est uniformément fixé à 7.500 FCFA par enfant.",
  },
  {
    id: "deo-079",
    module: "Déontologie de la Fonction Publique",
    theme: "Rémunération et avantages sociaux",
    difficulte: "facile",
    question: "Quel est le nombre maximum d'enfants ouvrant droit aux allocations familiales ?",
    options: ["Quatre", "Cinq", "Six", "Sept"],
    bonne_reponse: 2,
    explication:
      "Le nombre d'enfants ouvrant droit aux allocations familiales ne peut être supérieur à six (6).",
  },
  {
    id: "deo-080",
    module: "Déontologie de la Fonction Publique",
    theme: "Rémunération et avantages sociaux",
    difficulte: "facile",
    question: "Quelle est la durée du congé annuel ?",
    options: [
      "Quinze (15) jours",
      "Vingt et un (21) jours",
      "Trente (30) jours consécutifs par année de service",
      "Soixante (60) jours",
    ],
    bonne_reponse: 2,
    explication:
      "Le fonctionnaire en activité a droit à un congé annuel rémunéré de trente (30) jours consécutifs par année de service accompli.",
  },
  {
    id: "deo-081",
    module: "Déontologie de la Fonction Publique",
    theme: "Rémunération et avantages sociaux",
    difficulte: "facile",
    question: "Quelle est la durée du congé de maternité ?",
    options: ["14 semaines", "16 semaines", "24 semaines", "30 semaines"],
    bonne_reponse: 2,
    explication:
      "Le congé de maternité est de 24 semaines.",
  },
  {
    id: "deo-082",
    module: "Déontologie de la Fonction Publique",
    theme: "Rémunération et avantages sociaux",
    difficulte: "difficile",
    question: "Comment se répartissent les 24 semaines du congé de maternité ?",
    options: [
      "12 semaines prénatales et 12 semaines post-natales",
      "8 semaines prénatales et 16 semaines post-natales",
      "16 semaines prénatales et 8 semaines post-natales",
      "6 semaines prénatales et 18 semaines post-natales",
    ],
    bonne_reponse: 1,
    explication:
      "Le congé de maternité comprend une période prénatale de huit (8) semaines et une période post-natale de seize (16) semaines.",
  },
  {
    id: "deo-083",
    module: "Déontologie de la Fonction Publique",
    theme: "Rémunération et avantages sociaux",
    difficulte: "facile",
    question: "Quelle est la durée du congé de paternité ?",
    options: ["3 jours", "10 jours", "Trente (30) jours", "Quarante-cinq (45) jours"],
    bonne_reponse: 2,
    explication:
      "Le fonctionnaire bénéficie, à sa demande, d'un congé de paternité d'une durée de trente (30) jours à l'occasion de la naissance de son enfant.",
  },
  {
    id: "deo-084",
    module: "Déontologie de la Fonction Publique",
    theme: "Rémunération et avantages sociaux",
    difficulte: "difficile",
    question: "Quelle est la durée totale du congé de maladie de longue durée ?",
    options: [
      "12 mois",
      "24 mois",
      "36 mois (6 tranches de 6 mois)",
      "60 mois",
    ],
    bonne_reponse: 2,
    explication:
      "Le congé de maladie de longue durée est de 36 mois (6 tranches de 6 mois). Le traitement est intégral pendant 6 mois puis réduit de moitié.",
  },
  {
    id: "deo-085",
    module: "Déontologie de la Fonction Publique",
    theme: "Rémunération et avantages sociaux",
    difficulte: "difficile",
    question:
      "En cas d'accident de travail ou de maladie professionnelle, la durée totale du congé exceptionnel de maladie est de :",
    options: [
      "36 mois",
      "48 mois",
      "60 mois (5 ans)",
      "72 mois",
    ],
    bonne_reponse: 2,
    explication:
      "Le congé exceptionnel de maladie (accident de travail/maladie professionnelle) est d'une durée totale de 60 mois (5 ans), avec plein traitement et remboursement des frais médicaux.",
  },
  {
    id: "deo-086",
    module: "Déontologie de la Fonction Publique",
    theme: "Rémunération et avantages sociaux",
    difficulte: "moyen",
    question:
      "En cas de décès d'un ascendant, d'un descendant en ligne directe ou du conjoint, la permission spéciale d'absence est de :",
    options: [
      "2 jours ouvrables",
      "3 jours ouvrables",
      "Cinq (5) jours ouvrables",
      "Dix (10) jours ouvrables",
    ],
    bonne_reponse: 2,
    explication:
      "Le décès d'un ascendant, d'un descendant en ligne directe ou du conjoint ouvre droit à 5 jours ouvrables de permission spéciale (comme le mariage du fonctionnaire).",
  },
  {
    id: "deo-087",
    module: "Déontologie de la Fonction Publique",
    theme: "Rémunération et avantages sociaux",
    difficulte: "difficile",
    question:
      "Depuis sa revalorisation d'août 2025, la prime exceptionnelle de fin d'année représente :",
    options: [
      "33,33% du traitement indiciaire de base",
      "50% du traitement indiciaire de base",
      "66,66% (deux tiers) du traitement indiciaire de base",
      "100% du traitement indiciaire de base",
    ],
    bonne_reponse: 2,
    explication:
      "Instituée en août 2022 à 33,33%, la prime exceptionnelle de fin d'année a été revalorisée en août 2025 : elle représente désormais 66,66%, soit deux tiers du traitement indiciaire de base.",
  },
  {
    id: "deo-088",
    module: "Déontologie de la Fonction Publique",
    theme: "Rémunération et avantages sociaux",
    difficulte: "moyen",
    question:
      "Quel est le montant de l'indemnité de transport pour les fonctionnaires résidant dans le District d'Abidjan ?",
    options: ["10.000 FCFA", "15.000 FCFA", "20.000 FCFA", "25.000 FCFA"],
    bonne_reponse: 2,
    explication:
      "L'indemnité de transport atteint 20.000 FCFA pour les résidents du District d'Abidjan (15.000 FCFA à Bouaké et dans les chefs-lieux de région, 10.000 FCFA ailleurs).",
  },
  {
    id: "deo-089",
    module: "Déontologie de la Fonction Publique",
    theme: "Rémunération et avantages sociaux",
    difficulte: "difficile",
    question:
      "Au titre du droit individuel à la formation (décret n°2025-291), quelle durée est accordée au fonctionnaire par année de service effectif ?",
    options: [
      "Dix (10) jours",
      "Vingt (20) jours, cumulables jusqu'à 60 jours",
      "Trente (30) jours",
      "Soixante (60) jours par an",
    ],
    bonne_reponse: 1,
    explication:
      "Le droit individuel à la formation accorde 20 jours par année de service effectif, cumulables jusqu'à une durée maximale de 60 jours.",
  },
  {
    id: "deo-090",
    module: "Déontologie de la Fonction Publique",
    theme: "Rémunération et avantages sociaux",
    difficulte: "moyen",
    question:
      "Quels sont les trois grades de l'Ordre du Mérite de la Fonction Publique, du plus grand au plus petit ?",
    options: [
      "Chevalier, Officier, Commandeur",
      "Commandeur, Officier, Chevalier",
      "Grand-Croix, Officier, Chevalier",
      "Commandeur, Chevalier, Officier",
    ],
    bonne_reponse: 1,
    explication:
      "L'Ordre du Mérite comprend trois grades, du plus grand au plus petit : Commandeur, Officier, Chevalier.",
  },

  /* ============================================================
   * THÈME 9 — Les obligations du fonctionnaire
   * ============================================================ */
  {
    id: "deo-091",
    module: "Déontologie de la Fonction Publique",
    theme: "Les obligations du fonctionnaire",
    difficulte: "facile",
    question: "L'obligation d'obéissance hiérarchique est prévue par l'article :",
    options: ["21 du statut", "28 du statut", "35 du statut", "37 du statut"],
    bonne_reponse: 3,
    explication:
      "L'obligation d'obéissance hiérarchique est prévue par l'article 37 du statut général de la Fonction Publique.",
  },
  {
    id: "deo-092",
    module: "Déontologie de la Fonction Publique",
    theme: "Les obligations du fonctionnaire",
    difficulte: "moyen",
    question: "Dans quel cas le fonctionnaire a-t-il le DEVOIR de désobéir à un ordre du supérieur ?",
    options: [
      "Lorsqu'il juge l'ordre simplement inopportun",
      "Lorsque l'ordre est manifestement illégal et de nature à compromettre un intérêt public",
      "Lorsque l'ordre lui déplaît personnellement",
      "Lorsque l'ordre vient d'un autre service",
    ],
    bonne_reponse: 1,
    explication:
      "Le fonctionnaire doit désobéir lorsque l'ordre reçu est manifestement illégal et de nature à compromettre un intérêt public, ou lorsque son exécution constitue une infraction pénale.",
  },
  {
    id: "deo-093",
    module: "Déontologie de la Fonction Publique",
    theme: "Les obligations du fonctionnaire",
    difficulte: "facile",
    question:
      "L'obligation de discrétion et de secret professionnel est prévue par l'article :",
    options: ["21 du statut", "28 du statut", "35 du statut", "37 du statut"],
    bonne_reponse: 2,
    explication:
      "Le fonctionnaire est tenu au secret professionnel conformément à l'article 35 du statut (la violation du secret est réprimée par l'article 383 du Code Pénal).",
  },
  {
    id: "deo-094",
    module: "Déontologie de la Fonction Publique",
    theme: "Les obligations du fonctionnaire",
    difficulte: "facile",
    question: "Le fait, pour un fonctionnaire, de soustraire à son profit de l'argent des caisses de l'État est :",
    options: [
      "La concussion",
      "Le détournement de deniers publics",
      "Le trafic d'influence",
      "La corruption",
    ],
    bonne_reponse: 1,
    explication:
      "Le détournement de deniers publics est le fait de soustraire à son profit de l'argent ou des fonds des caisses de l'État.",
  },
  {
    id: "deo-095",
    module: "Déontologie de la Fonction Publique",
    theme: "Les obligations du fonctionnaire",
    difficulte: "moyen",
    question:
      "Le fait, pour un fonctionnaire, de percevoir à son profit une somme non due ou supérieure à celle réellement due est :",
    options: [
      "La corruption",
      "La concussion",
      "Le détournement de deniers publics",
      "Le délit d'ingérence",
    ],
    bonne_reponse: 1,
    explication:
      "La concussion est le fait pour un fonctionnaire de percevoir à son profit une somme non due, ou une somme supérieure à celle réellement due.",
  },
  {
    id: "deo-096",
    module: "Déontologie de la Fonction Publique",
    theme: "Les obligations du fonctionnaire",
    difficulte: "difficile",
    question:
      "Le fait, pour un fonctionnaire, d'avoir des intérêts dans une entreprise ayant des relations avec son service constitue :",
    options: [
      "La concussion",
      "Le délit d'ingérence",
      "Le trafic d'influence",
      "L'abus de confiance",
    ],
    bonne_reponse: 1,
    explication:
      "Il est interdit au fonctionnaire d'avoir des intérêts dans une entreprise ayant des relations avec son service : c'est le délit d'ingérence, qui protège l'impartialité et l'indépendance du fonctionnaire.",
  },
  {
    id: "deo-097",
    module: "Déontologie de la Fonction Publique",
    theme: "Les obligations du fonctionnaire",
    difficulte: "moyen",
    question: "L'obligation de réserve est la contrepartie de :",
    options: [
      "L'obligation d'obéissance",
      "La liberté d'opinion et surtout de la liberté d'expression",
      "Le droit à la rémunération",
      "Le droit syndical",
    ],
    bonne_reponse: 1,
    explication:
      "L'obligation de réserve est la contrepartie de la liberté d'opinion et surtout de la liberté d'expression ; soumis au devoir de neutralité, le fonctionnaire doit modérer l'expression de ses opinions.",
  },
  {
    id: "deo-098",
    module: "Déontologie de la Fonction Publique",
    theme: "Les obligations du fonctionnaire",
    difficulte: "facile",
    question:
      "En principe, l'exercice par le fonctionnaire d'une activité privée lucrative à titre professionnel est :",
    options: [
      "Libre et sans condition",
      "Interdit, sauf dérogation accordée par décret",
      "Autorisé uniquement le week-end",
      "Réservé aux fonctionnaires de catégorie A",
    ],
    bonne_reponse: 1,
    explication:
      "Il est interdit au fonctionnaire d'exercer à titre professionnel une activité privée lucrative de quelque nature que ce soit, sauf dérogation accordée par décret.",
  },
  {
    id: "deo-099",
    module: "Déontologie de la Fonction Publique",
    theme: "Les obligations du fonctionnaire",
    difficulte: "difficile",
    question:
      "L'interdiction d'exercer une activité privée lucrative ne s'applique PAS à :",
    options: [
      "La gestion d'un commerce",
      "La production d'œuvres scientifiques, littéraires ou artistiques",
      "La direction d'une société commerciale",
      "L'exercice d'une profession libérale à plein temps",
    ],
    bonne_reponse: 1,
    explication:
      "L'interdiction ne s'applique pas à la production d'œuvres scientifiques, littéraires ou artistiques ; par autorisation du Ministre, le fonctionnaire peut aussi donner des consultations, expertises ou enseignements.",
  },

  /* ============================================================
   * THÈME 10 — La discipline et les sanctions
   * ============================================================ */
  {
    id: "deo-100",
    module: "Déontologie de la Fonction Publique",
    theme: "La discipline et les sanctions",
    difficulte: "facile",
    question: "Combien de membres compte le Conseil de Discipline de la Fonction Publique ?",
    options: [
      "Au minimum 9 et au maximum 11",
      "Au minimum 13 et au maximum 15",
      "Exactement 12",
      "Au minimum 15 et au maximum 20",
    ],
    bonne_reponse: 1,
    explication:
      "Le Conseil de Discipline compte au minimum treize (13) membres et au maximum quinze (15) membres.",
  },
  {
    id: "deo-101",
    module: "Déontologie de la Fonction Publique",
    theme: "La discipline et les sanctions",
    difficulte: "facile",
    question: "À qui appartient le pouvoir disciplinaire ?",
    options: [
      "Au Président de la République",
      "Au Ministre chargé de la Fonction Publique",
      "Au Conseil de Discipline exclusivement",
      "Au supérieur hiérarchique direct uniquement",
    ],
    bonne_reponse: 1,
    explication:
      "Le pouvoir disciplinaire appartient au Ministre chargé de la Fonction Publique, qui l'exerce (pour le 2nd degré) après avis du Conseil de Discipline, sur saisine des autorités compétentes.",
  },
  {
    id: "deo-102",
    module: "Déontologie de la Fonction Publique",
    theme: "La discipline et les sanctions",
    difficulte: "moyen",
    question: "En principe, la procédure disciplinaire est engagée par :",
    options: [
      "Une convocation immédiate devant le Conseil de Discipline",
      "Une demande d'explication écrite adressée au fonctionnaire",
      "Une suspension automatique de fonction",
      "Un communiqué de presse",
    ],
    bonne_reponse: 1,
    explication:
      "L'autorité hiérarchique engage la procédure par une demande d'explication écrite adressée au fonctionnaire (sauf le cas particulier de l'abandon de poste).",
  },
  {
    id: "deo-103",
    module: "Déontologie de la Fonction Publique",
    theme: "La discipline et les sanctions",
    difficulte: "difficile",
    question:
      "En cas d'abandon de poste, à défaut de pouvoir remettre une demande d'explication, l'autorité diffuse un communiqué invitant l'agent à reprendre son poste après :",
    options: [
      "Vingt-quatre (24) heures d'absence",
      "Trois (3) jours d'absence",
      "Huit (8) jours d'absence",
      "Un (1) mois d'absence",
    ],
    bonne_reponse: 1,
    explication:
      "En cas d'abandon de poste, après trois (3) jours d'absence, l'autorité diffuse sans délai un communiqué invitant l'agent à se présenter immédiatement à son poste (art. 34 du décret sur le Conseil de Discipline).",
  },
  {
    id: "deo-104",
    module: "Déontologie de la Fonction Publique",
    theme: "La discipline et les sanctions",
    difficulte: "facile",
    question: "Laquelle de ces sanctions relève du premier degré ?",
    options: [
      "La révocation",
      "L'avertissement",
      "L'exclusion temporaire",
      "La rétrogradation",
    ],
    bonne_reponse: 1,
    explication:
      "Les sanctions du 1er degré comprennent l'avertissement, le blâme, le déplacement d'office, la radiation du tableau d'avancement et la réduction de traitement (max 25%, ≤ 30 jours).",
  },
  {
    id: "deo-105",
    module: "Déontologie de la Fonction Publique",
    theme: "La discipline et les sanctions",
    difficulte: "moyen",
    question:
      "La réduction de traitement, sanction du 1er degré, ne peut excéder :",
    options: [
      "10% pour 15 jours",
      "25% pour une durée ne pouvant excéder 30 jours",
      "50% pour 3 mois",
      "25% pour 3 mois",
    ],
    bonne_reponse: 1,
    explication:
      "Au 1er degré, la réduction de traitement est plafonnée à 25% pour une durée ne pouvant excéder trente (30) jours (au 2nd degré : 50% pour 3 mois maximum).",
  },
  {
    id: "deo-106",
    module: "Déontologie de la Fonction Publique",
    theme: "La discipline et les sanctions",
    difficulte: "moyen",
    question: "L'exclusion temporaire (sanction du 2nd degré) ne peut excéder :",
    options: ["Un (1) mois", "Trois (3) mois", "Six (6) mois", "Un (1) an"],
    bonne_reponse: 2,
    explication:
      "Parmi les sanctions du 2nd degré, l'exclusion temporaire ne peut excéder six (6) mois.",
  },
  {
    id: "deo-107",
    module: "Déontologie de la Fonction Publique",
    theme: "La discipline et les sanctions",
    difficulte: "difficile",
    question: "Quelle autorité est compétente pour prononcer les sanctions du second degré ?",
    options: [
      "Le supérieur hiérarchique direct",
      "Le Ministre chargé de la Fonction Publique",
      "Le Préfet",
      "Le Directeur de l'Établissement Public",
    ],
    bonne_reponse: 1,
    explication:
      "L'autorité compétente pour prononcer les sanctions du second degré est le Ministre en charge de la Fonction Publique (les sanctions du 1er degré peuvent être prononcées par le Ministre technique, le Président de l'Institution, le Directeur d'EP ou le Préfet).",
  },
  {
    id: "deo-108",
    module: "Déontologie de la Fonction Publique",
    theme: "La discipline et les sanctions",
    difficulte: "difficile",
    question:
      "Lorsque le Ministre chargé de la Fonction Publique conclut à une mesure de révocation, il saisit pour avis :",
    options: [
      "Le Conseil de Discipline à nouveau",
      "Le Président de la République",
      "Le Conseil d'État",
      "Le Premier Ministre",
    ],
    bonne_reponse: 1,
    explication:
      "Dans le cas spécifique de la révocation, le Ministre chargé de la Fonction Publique saisit le Président de la République pour avis. L'intervention du Président ne concerne que ce cas.",
  },
  {
    id: "deo-109",
    module: "Déontologie de la Fonction Publique",
    theme: "La discipline et les sanctions",
    difficulte: "moyen",
    question: "Pendant combien de temps les sanctions du 1er degré sont-elles archivées dans le dossier personnel ?",
    options: [
      "Trois (3) ans",
      "Cinq (5) ans",
      "Dix (10) ans",
      "Indéfiniment",
    ],
    bonne_reponse: 1,
    explication:
      "Les sanctions du 1er degré sont archivées pendant cinq (5) ans, et celles du 2nd degré pendant dix (10) ans.",
  },
  {
    id: "deo-110",
    module: "Déontologie de la Fonction Publique",
    theme: "La discipline et les sanctions",
    difficulte: "difficile",
    question:
      "La faute grave suppose des conditions cumulatives. Laquelle figure parmi elles ?",
    options: [
      "Les faits doivent avoir été commis en dehors du service",
      "Les faits doivent être d'une gravité telle qu'ils empêchent le maintien du fonctionnaire dans le service",
      "Les faits doivent avoir causé un préjudice financier chiffré",
      "Les faits doivent avoir été médiatisés",
    ],
    bonne_reponse: 1,
    explication:
      "La faute grave suppose trois conditions cumulatives : faits personnellement imputables ; violation d'une obligation statutaire ou manquement aux règles de discipline/éthique ; gravité empêchant le maintien dans le service.",
  },
  {
    id: "deo-111",
    module: "Déontologie de la Fonction Publique",
    theme: "La discipline et les sanctions",
    difficulte: "moyen",
    question: "Le fonctionnaire suspendu de ses fonctions :",
    options: [
      "Continue de percevoir l'intégralité de sa rémunération",
      "Ne perçoit aucune rémunération, mais conserve la totalité des prestations familiales",
      "Perçoit la moitié de son traitement",
      "Perd toute prestation, y compris familiale",
    ],
    bonne_reponse: 1,
    explication:
      "Le fonctionnaire suspendu ne peut prétendre à aucune rémunération ; il continue toutefois à percevoir la totalité des prestations familiales.",
  },
  {
    id: "deo-112",
    module: "Déontologie de la Fonction Publique",
    theme: "La discipline et les sanctions",
    difficulte: "difficile",
    question:
      "À long terme, une sanction disciplinaire peut priver le fonctionnaire de son droit à la promotion pendant :",
    options: [
      "Un (1) an",
      "Trois (3) ans",
      "Cinq (5) ans",
      "Dix (10) ans",
    ],
    bonne_reponse: 2,
    explication:
      "Les sanctions disciplinaires privent le fonctionnaire de certains avantages : le fonctionnaire fautif se voit ainsi privé de son droit à la promotion pendant une période de 5 ans.",
  },

  /* ============================================================
   * THÈME 11 — Les voies de recours du fonctionnaire
   * ============================================================ */
  {
    id: "deo-113",
    module: "Déontologie de la Fonction Publique",
    theme: "Les voies de recours",
    difficulte: "facile",
    question: "Quelles sont les deux grandes voies de recours du fonctionnaire ?",
    options: [
      "Le recours gracieux et le recours pénal",
      "Le recours administratif et le recours juridictionnel",
      "Le recours syndical et le recours hiérarchique",
      "Le recours amiable et le recours d'urgence",
    ],
    bonne_reponse: 1,
    explication:
      "On distingue le recours administratif (gracieux ou hiérarchique) et le recours juridictionnel (devant le Conseil d'État).",
  },
  {
    id: "deo-114",
    module: "Déontologie de la Fonction Publique",
    theme: "Les voies de recours",
    difficulte: "moyen",
    question: "Quel est le délai pour exercer un recours administratif à compter de la notification de la sanction ?",
    options: [
      "Quinze (15) jours",
      "Un (1) mois",
      "Deux (2) mois",
      "Six (6) mois",
    ],
    bonne_reponse: 2,
    explication:
      "Le fonctionnaire dispose d'un délai de deux (2) mois à compter de la notification de la sanction pour exercer son recours administratif (gracieux ou hiérarchique).",
  },
  {
    id: "deo-115",
    module: "Déontologie de la Fonction Publique",
    theme: "Les voies de recours",
    difficulte: "moyen",
    question: "Le recours juridictionnel du fonctionnaire s'exerce devant :",
    options: [
      "Le Tribunal du Travail",
      "Le Conseil d'État",
      "Le Conseil de Discipline",
      "La Cour Pénale",
    ],
    bonne_reponse: 1,
    explication:
      "Le recours juridictionnel, qui vise l'annulation de la sanction pour excès de pouvoir, est porté devant le Conseil d'État.",
  },
  {
    id: "deo-116",
    module: "Déontologie de la Fonction Publique",
    theme: "Les voies de recours",
    difficulte: "difficile",
    question:
      "Le « détournement de pouvoir », l'un des moyens d'excès de pouvoir, désigne :",
    options: [
      "Une décision prise par une autorité incompétente",
      "Une décision prise dans le mépris des formalités substantielles",
      "Une décision prise pour des motifs étrangers au service",
      "Une décision reposant sur une mauvaise interprétation de la loi",
    ],
    bonne_reponse: 2,
    explication:
      "Le détournement de pouvoir vise une décision prise pour des motifs étrangers au service. (Les autres moyens : incompétence, vice de forme, violation de la loi.)",
  },
  {
    id: "deo-117",
    module: "Déontologie de la Fonction Publique",
    theme: "Les voies de recours",
    difficulte: "difficile",
    question:
      "Qu'a consacré l'arrêt n°62 du 20 avril 2016 (affaire COULIBALY NAZOLOMA AMARA) ?",
    options: [
      "L'irresponsabilité pénale du fonctionnaire",
      "Le contrôle par le juge de la proportionnalité de la sanction à la gravité de la faute",
      "La suppression du Conseil de Discipline",
      "L'automaticité de la révocation en cas de faute",
    ],
    bonne_reponse: 1,
    explication:
      "Cet arrêt marque que le juge administratif se déclare compétent pour apprécier la proportionnalité de la sanction disciplinaire à la gravité de la faute reprochée (et non plus la seule matérialité des faits).",
  },
];
