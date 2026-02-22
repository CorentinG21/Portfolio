export const skills = [
  {
    icon: '💻',
    name: 'HTML5',
    description: 'Utilisation des balises sémantiques, accessibilité et structuration optimale des contenus.',
  },
  {
    icon: '🎨',
    name: 'CSS3',
    description: 'Maîtrise de Flexbox, Grid, animations et création de designs adaptatifs et modernes.',
  },
  {
    icon: '📜',
    name: 'JavaScript',
    description: 'Ajout d\'interactivité, logique front-end et animations fluides pour une meilleure UX.',
  },
  {
    icon: '📱',
    name: 'Responsive Design',
    description: 'Optimisation des interfaces pour tous types d\'écrans : mobiles, tablettes et ordinateurs.',
  },
  {
    icon: '🔧',
    name: 'Flutter',
    description: 'Développement d\'applications mobiles et web performantes avec une seule base de code.',
  },
  {
    icon: '⚙️',
    name: 'Laravel',
    description: 'Développement web rapide et sécurisé avec l\'un des frameworks PHP les plus puissants.',
  },
  {
    icon: '🔩',
    name: 'Symfony',
    description: 'Conception d\'applications web solides, évolutives et bien structurées en PHP.',
  },
  {
    icon: '🗄️',
    name: 'SQL',
    description: 'Gestion de bases de données relationnelles, optimisation des requêtes et intégrité des données.',
  },
]

export const education = [
  {
    years: '2020-2022',
    logo: '/assets/images/lachatos.jpeg',
    logoAlt: 'Logo Lycée La Châtaigneraie',
    degree: 'Bac STI2D - Option ITEC',
    institution: 'Campus La Châtaigneraie, Le Mesnil-Esnard',
    description: 'Approfondissement des sciences de l\'ingénieur, axé sur l\'innovation technologique et l\'éco-conception.',
    skills: [
      'Conception et modélisation de produits innovants',
      'Étude des matériaux et procédés de fabrication',
      'Analyse fonctionnelle et cycle de vie',
      'Travail en équipe sur des projets techniques',
    ],
  },
  {
    years: '2022-2024',
    logo: '/assets/images/lachatos.jpeg',
    logoAlt: 'Logo Lycée La Châtaigneraie',
    degree: 'BTS SIO - Option SLAM',
    institution: 'Campus La Châtaigneraie, Le Mesnil-Esnard',
    description: 'Spécialisation en développement d\'applications (Solutions Logicielles et Applications Métiers).',
    skills: [
      'Programmation orientée objet (PHP, Java, etc.)',
      'Gestion de bases de données (SQL, MySQL)',
      'Gestion de projet en équipe (méthodes agiles)',
    ],
  },
  {
    years: '2024-2025',
    logo: '/assets/images/IRIS.png',
    logoAlt: 'Logo Media School IRIS',
    degree: 'Bachelor Développement Web',
    institution: 'Media School IRIS, Rouen',
    description: 'Approfondissement des compétences full-stack.',
    skills: [
      'Flutter/Dart',
      'Laravel',
      'Architecture logicielle',
      'Développement mobile',
    ],
  },
]

export const experiences = [
  {
    year: '2023',
    title: 'Stagiaire Développeur Web',
    company: 'CESI',
    description: 'Dans le cadre de mon stage obligatoire de première année. J\'ai travaillé sur la création de pages interactives et l\'utilisation d\'API, dans le cadre du Projet "Mobilité" de la metropole de Rouen.',
    stack: ['Google Data Studio', 'API REST', 'HTML/CSS/JavaScript'],
  },
  {
    year: '2024',
    title: 'Stagiaire Développeur Web',
    company: 'CESI',
    description: 'Dans le cadre de mon stage obligatoire de deuxième année, j\'ai travaillé sur la création de pages web et l\'utilisation d\'API ainsi que de JavaScript, toujours dans le cadre du projet "Mobilité".',
    stack: ['API REST', 'HTML/CSS/JavaScript'],
  },
  {
    year: '2025',
    title: 'Stagiaire Développeur Web',
    company: 'Home2Home',
    description: 'Dans le cadre de mon stage au sein de Home2Home, j\'ai contribué au développement de l\'application de livraison de colis entre particuliers via les transports ferroviaires en utilisant Flutter (Dart) pour créer des interfaces mobiles interactives. Cette expérience m\'a permis d\'acquérir de nouvelles compétences en développement mobile tout en optimisant l\'intégration entre le frontend (Flutter) et le backend (Laravel).',
    stack: ['Flutter (Dart)', 'Laravel', 'API REST'],
  },
]

export const projects = [
  {
    title: 'Site E-commerce',
    image: '/assets/images/E-ComLogo.png',
    description: 'Création d\'une boutique en ligne pour la vente de motos, accessoires et pièces détachées.',
    route: '/projets/e-com',
  },
  {
    title: 'Site Home2Home',
    image: '/assets/images/LogoHome2Home.png',
    description: 'Création d\'un site web mobile pour le transport de colis entre particuliers via le réseau ferroviaire.',
    route: '/projets/home2home',
  },
  {
    title: 'NaturaCorp',
    image: '/assets/images/NaturaLogo.png',
    description: 'Développement d\'une plateforme dédiée à la sensibilisation et à la gestion de projets écologiques.',
    route: '/projets/naturacorp',
  },
]

export const passions = [
  {
    title: 'Jeux Vidéo',
    image: '/assets/images/Passion/230213-jeux-video.jpg',
    description: 'Passionné par les jeux vidéo, je suis toujours à l\'affût des dernières tendances et sorties.',
    route: '/passions/jeux-video',
  },
  {
    title: 'E-sport',
    image: '/assets/images/Passion/m8.png',
    description: 'Suivre les compétitions d\'e-sport est une de mes passions. J\'aime analyser les stratégies des équipes.',
    route: '/passions/gentle-mates',
  },
]

export const gentleMatesMainGames = [
  { name: 'Valorant', icon: '🎯', desc: 'Équipe performante en VCT EMEA, au plus haut niveau européen.', color: 'from-red-600/30 to-red-800/20 border-red-600/50' },
  { name: 'Valorant Game Changers', icon: '🎯', desc: 'Équipe dédiée à l\'excellence féminine dans le jeu Valorant.', color: 'from-pink-600/30 to-pink-800/20 border-pink-600/50' },
  { name: 'Rocket League', icon: '🚀', desc: 'Une présence notable avec des joueurs talentueux.', color: 'from-blue-600/30 to-blue-800/20 border-blue-600/50' },
  { name: 'Call of Duty', icon: '🎖️', desc: 'Une équipe compétitive qui vise les sommets.', color: 'from-green-600/30 to-green-800/20 border-green-600/50' },
  { name: 'CS:GO', icon: '🔫', desc: 'Une équipe qui a su se faire une place dans la scène compétitive.', color: 'from-yellow-600/30 to-yellow-800/20 border-yellow-600/50' },

]

export const gentleMatesOtherGames = [
  { name: 'Fortnite', icon: '⚡' },
  { name: 'Teamfight Tactics', icon: '♟️' },
  { name: 'Age of Empires IV', icon: '🏰' },
  { name: 'Warzone 2', icon: '💣' },
  { name: '2XKO', icon: '🥊' },
]

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/corentin-godon/', ariaLabel: 'LinkedIn' },
  { label: 'GitHub', href: 'https://github.com/CorentinG21', ariaLabel: 'GitHub' },
  { label: 'Instagram', href: 'https://www.instagram.com/corentin._.gdn/', ariaLabel: 'Instagram' },
]

export const profileImages = [
  { src: '/assets/images/1000013048.png', alt: 'Photo de profil ghibli' },
  { src: '/assets/images/20230715_063227.jpg', alt: 'Photo de profil professionnelle' },
]
