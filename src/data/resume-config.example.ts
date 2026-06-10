import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Alexia LACOMBE',
    photo: '/images/photo.jpg',
    photoBackEmoji: '🥽',
    title: {
      fr: 'Ingénieure 3D / Réalité Virtuelle',
    },
    subtitle: {
      fr: 'Création d\'expériences immersives éducatives et professionnelles',
    },
  },

  // ===== SEO =====
  seo: {
    title: 'Alexia Lacombe — Ingénieure 3D / Réalité Virtuelle',
    description: 'CV interactif d\'Alexia Lacombe, ingénieure spécialisée en réalité virtuelle et création d\'expériences immersives éducatives et professionnelles.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'fr',
    available: ['fr'],
    labels: {
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'phone', label: '+33 7 50 26 55 65' },
    { type: 'email', label: 'lacombe.a67@gmail.com' },
    { type: 'location', label: '17 rue Desbureaux, 51100 Reims' },
    { type: 'linkedin', label: 'Lacombe-Alexia', href: 'https://www.linkedin.com/in/Lacombe-Alexia/' },
    { type: 'website', label: 'lacombea.itch.io', href: 'https://lacombea.itch.io/' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { fr: 'Langages' },
      type: 'badges',
      items: [
        { name: 'C#' },
        { name: 'C++' },
        { name: 'Python' },
        { name: 'JavaScript' },
        { name: 'HTML' },
        { name: 'CSS' },
      ],
    },
    {
      title: { fr: 'Moteur 3D' },
      type: 'badges',
      items: [
        { name: 'Unity'},
        { name: 'Unreal' },
        { name: 'Godot' },
      ],
    },
    {
      title: { fr: 'Versionning' },
      type: 'badges',
      items: [
        { name: 'Git' },
        { name: 'Perforce' },
      ],
    },
    {
      title: { fr: 'Base de données' },
      type: 'badges',
      items: [
        { name: 'SQL' },
        { name: 'Firebase' },
        { name: 'PlayFab' },
      ],
    },
    {
      title: { fr: 'Conception' },
      type: 'text',
      items: [
        { name: { fr: 'Design Pattern, POO, UML, SOLID' } },
      ],
    },
    {
      title: { fr: 'Méthodologie' },
      type: 'text',
      items: [
        { name: { fr: 'Agile, Scrum' } },
      ],
    },
    {
      title: { fr: 'Gestion de projet' },
      type: 'text',
      items: [
        { name: { fr: 'Trello, Jira' } },
      ],
    },
    {
      title: { fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { fr: 'Français' }, level: { fr: ': langue maternelle' } },
        { name: { fr: 'Anglais' }, level: { fr: ': B2 avancé' }, details: 'TOEIC 955/990' },
        { name: { fr: 'Allemand' }, level: { fr: ': B1 intermédiaire' } },
      ],
    },
  ],

  // ===== EXPERIENCES =====
  experiences: [
    {
      id: 'cesi',
      company: { fr: 'CESI' },
      role: { fr: 'Formateur externe' },
      type: { fr: 'Temps partiel' },
      period: { fr: 'Depuis sept. 2025' },
      description: {
        fr: 'Conception et animation de cours et TD en mathématiques (matrices) et informatique (RIA 2D/3D) — publics étudiants et reconversion.',
      },
      techs: ['JavaScript', 'C#'],
    },
    {
      id: 'urca',
      companyUrl: 'https://www.univ-reims.fr/demetere/',
      company: { fr: 'URCA DeMETeRe' },
      role: { fr: 'Ingénieure en réalité virtuelle' },
      type: { fr: 'CDI' },
      period: { fr: 'Depuis juil. 2024' },
      description: {
        fr: 'Développement de simulateurs pédagogiques VR industriels et référente technique sur deux projets partenaires en santé et maintenance.',
      },
      techs: ['Godot', 'GDScript'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Projet ANR France 2030 — équipe pluridisciplinaire de 3 personnes (ingénierie pédagogique, graphisme, expertise métier). Deux projets partenaires menés en parallèle du développement interne.',
        },
        tasks: {
          fr: [
            'Développement d\'un simulateur de formation à l\'analyse vibratoire : placement de capteurs, paramétrisation des mesures et chasse aux risques en environnement VR.',
            'Développement d\'un simulateur de découverte de machine industrielle : exploration en vue éclatée et suivi de la progression des apprenants.',
            'Référente technique sur deux projets partenaires : validation et cohérence technico-pédagogique d\'un simulateur de communication en santé par IA et d\'un simulateur de maintenance industrielle.',
            'Déploiement des simulateurs auprès des parties prenantes, présentations sur salons (Foire de Châlons-en-Champagne, visites de collèges) et enrichissement continu du contenu.',
          ],
        },
        env: {
          fr: 'Godot 4 / GDScript / XR Tools / Git / Pico 4 / Meta Quest 3',
        },
      },
    },
    {
      id: 'uqac-dev',
      company: { fr: 'UQAC' },
      companyUrl: 'https://www.uqac.ca/cogni-actif/',
      role: { fr: 'Développeuse de jeux sérieux' },
      type: { fr: 'CDD' },
      period: { fr: 'Mai 2023 – Juin 2024' },
      description: {
        fr: 'Développement gameplay, UI et base de données en ligne (PlayFab) pour Cogni-Actif, jeu sérieux d\'apprentissage physiquement actif — équipe de 2 développeurs, en collaboration avec une kinésiologue.',
      },
      techs: ['C#', 'Unity', 'PlayFab'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Projet de recherche UQAC — jeu sérieux destiné aux écoles primaires du Québec. Équipe de 2 développeurs en collaboration avec une kinésiologue pour l\'expertise métier.',
        },
        tasks: {
          fr: [
            'Développement du système d\'activité physique : minutage haute/basse intensité, synchronisation des animations et intégration des questions pédagogiques (mathématiques, français).',
            'Intégration et automatisation de l\'import des contenus pédagogiques, paramètres de jeu et gestion audio (playlists, effets sonores).',
            'Intégration de PlayFab pour la sauvegarde et le suivi de la progression des élèves en temps réel.',
            'Conception et mise en place de protocoles de tests utilisateurs dans 4 classes (~120 élèves) pour itérer sur l\'expérience de jeu.',
          ],
        },
        env: {
          fr: 'Unity / C# / PlayFab / Git',
        },
      },
    },
    {
      id: 'uqac-pedagogy',
      company: { fr: 'UQAC' },
      role: { fr: 'Aide pédagogique' },
      type: { fr: 'Temps partiel' },
      period: { fr: 'Sept. 2022 – Avr. 2024' },
      description: {
        fr: 'Encadrement de TD de mathématiques et programmation (bac informatique et génie) — suivi, accompagnement et correction.',
      },
      techs: ['C++'],
    },
    {
      id: 'emanrisk',
      company: { fr: 'e-ManRisk (groupe E.Leclerc)' },
      role: { fr: 'Assistante ingénieure en réalité virtuelle' },
      type: { fr: 'Stage' },
      period: { fr: 'Févr. – Juin 2022' },
      description: {
        fr: 'Développement d\'un POC VR de formation aux procédures de traçabilité et d\'hygiène alimentaire.',
      },
      techs: ['Unity', 'C#', 'JavaScript', 'Git'],
      details: {
        context: {
          fr: 'Filiale du groupe E.Leclerc. Collaboration avec le CERV (Centre Européen de Réalité Virtuelle) pour l\'intégration du système Mascaret.',
        },
        tasks: {
          fr: [
            'Modélisation d\'un environnement VR et développement d\'un scénario de formation initiale aux procédures d\'hygiène alimentaire (cuisson, refroidissement, stockage).',
            'Intégration du logiciel métier e-ManRisk dans l\'environnement 3D via une tablette interactive pilotée par Puppeteer.',
          ],
        },
        env: {
          fr: 'Unity / C# / SteamVR / Oculus Quest / Puppeteer / TypeScript / Git',
        },
      },
    },
  ],

  // ===== PROJECTS =====
  projects: [
    {
      id: 'sensory-awakening',
      title: { fr: 'The Sensory Awakening' },
      description: {
        fr: 'Jeu narratif 3D solo sur l\'éveil des sens — prototype jouable développé en solo sur Unreal dans le cadre du programme de mentoring Dev at Ubisoft.',
      },
      techs: ['Unreal', 'Blueprint'],
      url: 'https://lacombea.itch.io/the-sensory-awakening',
    },
    {
      id: 'between-the-lines',
      title: { fr: 'Between the Lines' },
      description: {
        fr: 'Jeu narratif 2D explorant l\'identité et l\'adaptation sociale — seule programmeuse au sein d\'une équipe de 5, Game Jam des Audacieux.ses.',
      },
      techs: ['C#', 'Unity'],
      url: 'https://mayzhy.itch.io/between-the-lines',
    },
    {
      id: 'hotato-party',
      title: { fr: 'Hotato Party' },
      description: {
        fr: 'Jeu mobile de soirée multijoueur local — 1er prix de la Wonder Jam UQAC, développé en 48h en équipe de 2.',
      },
      techs: ['C#', 'Unity'],
      url: 'https://lacombea.itch.io/hotatoparty',
    },
    {
      id: 'flickering-shadows',
      title: { fr: 'Flickering Shadows' },
      description: {
        fr: 'Jeu d\'arcade 3D — programmation IA : apparition, comportement et disparition des monstres selon la proximité du joueur. Projet scolaire UQAC, équipe de 4.',
      },
      techs: ['C#', 'Unity'],
      url: 'https://lacombea.itch.io/flickering-shadows',
    },
    {
      id: 'chromascore',
      title: { fr: 'ChromaScore' },
      description: {
        fr: 'Jeu de rythme arcade — UI et système de sauvegarde, premier rhythm game pour toute l\'équipe, développé en 72h en équipe de 5. Coding Blocks Game Jam 2023.',
      },
      techs: ['C#', 'Unity'],
      url: 'https://eddiebreeg.itch.io/chromascore',
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { fr: 'UQAC' },
      degree: { fr: 'Maîtrise en informatique (jeux vidéo)' },
      specialty: {
        fr: 'Principes de conception et de développement de jeux vidéo • Interaction 3D et réalité virtuelle • Jeux sérieux • Principes des moteurs de jeux • Programmation réseau dans les jeux vidéo • Fondamentaux de l\'apprentissage automatique • IA pour le jeu vidéo • Programmation de plateformes mobiles',
      },
      period: 'Sept. 2022 – Jan. 2024',
    },
    {
      school: { fr: 'ENIB' },
      degree: { fr: 'Diplôme d\'ingénieur généraliste' },
      period: 'Sept. 2018 – Jan. 2024',
    },
    {
      school: { fr: 'IAE Brest' },
      degree: { fr: 'Diplôme Universitaire Entrepreneuriat' },
      period: '2021',
    },
  ],

  // ===== HOBBIES =====
  hobbies: [
      
  ],

  // ===== THEME =====
  theme: {
    preset: 'ocean',
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { fr: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { fr: 'FORMATIONS' },
      projects: { fr: 'AUTRES PROJETS' },
      hobbies: { fr: 'CENTRE D\'INTÉRÊTS' },
    },
    experience: {
      mainTasks: { fr: 'Missions :' },
      moreTasks: { fr: 'autres missions…' },
      techEnv: { fr: 'Env. technique :' },
      technologies: { fr: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur une expérience pour voir les détails' },
      switchTheme: { fr: 'Changer le thème' },
      downloadPdf: { fr: 'Télécharger le PDF' },
    },
  },
}