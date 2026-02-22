import { Link } from 'react-router-dom'
import { ArrowLeft, Gamepad2, Monitor, Sparkles, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GalleryWithLightbox } from '@/components/ui/lightbox'

const galleryImages = [
  { src: '/assets/images/Jeux Vidéos/cyberpunk-2077.webp', alt: 'Cyberpunk 2077' },
  { src: '/assets/images/Jeux Vidéos/Satisfactory.jpg', alt: 'Satisfactory' },
  { src: '/assets/images/Jeux Vidéos/gta-5.webp', alt: 'GTA V' },
  { src: '/assets/images/Jeux Vidéos/Valorant.avif', alt: 'Valorant' },
]

const consoles = [
  {
    brand: 'Sony',
    logo: '/assets/images/Jeux Vidéos/Editeurs/sony-2-logo-black-and-white.png',
    accent: 'from-blue-600/30 to-blue-900/10 border-blue-600/40',
    dotColor: 'bg-blue-500',
    items: [
      { name: 'PlayStation 5', desc: 'Pour découvrir les dernières innovations de Sony et les jeux en 4K.' },
      { name: 'PlayStation 4', desc: 'Pour profiter des exclusivités Sony et de graphismes avancés sur console.' },
      { name: 'PlayStation 1', desc: 'La console qui a révolutionné le jeu vidéo 3D avec des classiques comme Crash Bandicoot.' },
      { name: 'PlayStation Vita', desc: 'La console portable de Sony, idéale pour jouer en déplacement avec des titres innovants.' },
    ],
  },
  {
    brand: 'Nintendo',
    logo: '/assets/images/Jeux Vidéos/Editeurs/nintendo.png',
    accent: 'from-red-600/30 to-red-900/10 border-red-600/40',
    dotColor: 'bg-red-500',
    items: [
      { name: 'Nintendo DS', desc: 'Ma toute première console, source de nombreux souvenirs avec Pokémon et Mario.' },
      { name: 'Nintendo 3DS', desc: 'Pour découvrir les jeux en 3D sans lunettes et continuer l\'aventure portable.' },
      { name: 'Nintendo Wii', desc: 'Pour jouer en famille et découvrir de nouveaux styles de jeu avec les manettes motion.' },
      { name: 'Nintendo Switch', desc: 'La console hybride permettant de jouer aussi bien en mode portable qu\'à la maison.' },
      { name: 'Game Boy Color (jaune)', desc: 'La console portable emblématique de Nintendo, parfaite pour jouer à des classiques comme Pokémon et Tetris.' },
    ],
  },
  {
    brand: 'Microsoft',
    logo: '/assets/images/Jeux Vidéos/Editeurs/Microsoft_logo.svg.png',
    accent: 'from-green-600/30 to-green-900/10 border-green-600/40',
    dotColor: 'bg-green-500',
    items: [
      { name: 'Xbox 360', desc: 'Ma première console Microsoft, idéale pour découvrir les exclusivités Xbox et le Kinect.' },
    ],
  },
  {
    brand: 'PC',
    logo: '/assets/images/Jeux Vidéos/Editeurs/pc.jpg',
    accent: 'from-slate-600/30 to-slate-900/10 border-slate-600/40',
    dotColor: 'bg-slate-400',
    items: [
      { name: 'PC Gamer', desc: 'Mon support principal aujourd\'hui, pour la polyvalence, la performance et le modding.' },
    ],
  },
]

const genres = [
  { icon: '🏙️', label: 'City builders', ex: 'Cities: Skylines, ...' },
  { icon: '🏭', label: 'Simulation', ex: 'Satisfactory, The Sims' },
  { icon: '🎯', label: 'FPS', ex: 'Valorant, Call of Duty' },
  { icon: '⚔️', label: 'RPG', ex: 'Cyberpunk 2077, ...' },
]

const impacts = [
  { icon: '🤝', label: 'Travail d\'équipe', desc: 'Réflexion stratégique, gestion du stress et coordination.' },
  { icon: '🌍', label: 'Ouverture culturelle', desc: 'Découverte de différentes cultures à travers les univers des jeux.' },
  { icon: '✨', label: 'Créativité', desc: 'Inspiration pour mes propres projets créatifs.' },
  { icon: '👥', label: 'Relations sociales', desc: 'Rencontre de personnes partageant les mêmes passions.' },
  { icon: '🇬🇧', label: 'Anglais', desc: 'Amélioration de mon niveau grâce aux jeux non traduits.' },
]

export default function JeuVideo() {
  return (
    <main className="mt-16">

      {/* HERO — bannière plein écran */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="/assets/images/Jeux Vidéos/Banniere.jpg"
          alt="Bannière jeux vidéo"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a] via-[#0d0d1a]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d1a]/60 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="w-[min(90%,900px)] mx-auto">
            <Link to="/#passion">
              <Button
                variant="ghost"
                size="sm"
                className="mb-4 gap-2 text-white/70 hover:text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <ArrowLeft className="h-4 w-4" /> Retour aux passions
              </Button>
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🎮</span>
              <span className="text-white/60 text-sm font-semibold uppercase tracking-widest">Passion</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-white">
              Jeux Vidéo
            </h1>
          </div>
        </div>
      </div>

      {/* CORPS */}
      <div className="bg-[#0d0d1a] min-h-screen">
        <div className="w-[min(90%,900px)] mx-auto px-4 py-12 space-y-16">

          {/* Mes Débuts */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-white mb-4 flex items-center gap-2">
              <Gamepad2 className="h-5 w-5 text-purple-400" />
              Mes Débuts dans le Jeu Vidéo
            </h2>
            <p className="text-white/60 leading-relaxed text-sm">
              Ma passion pour les jeux vidéo a commencé dès mon plus jeune âge, avec ma première console, une{' '}
              <span className="text-white font-semibold">Nintendo DS</span>. Je me souviens encore des heures passées
              à explorer les mondes de <span className="text-white font-semibold">Mario</span> et bien d'autres.
              Cette passion n'a fait que grandir avec le temps, évoluant vers des expériences plus complexes et immersives.
            </p>
          </section>

          {/* Galerie */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-white mb-4 flex items-center gap-2">
              <span className="text-purple-400">📸</span> Galerie de Mes Jeux Préférés
            </h2>
            <GalleryWithLightbox images={galleryImages} />
          </section>

          {/* Genres */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-white mb-2 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              Mes Genres Préférés
            </h2>
            <p className="text-white/50 text-sm mb-6">Au fil des années, j'ai exploré différents genres, chacun offrant une expérience unique :</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {genres.map((g) => (
                <div
                  key={g.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-start gap-4 hover:bg-white/8 hover:border-white/20 transition-all duration-200"
                >
                  <span className="text-3xl flex-shrink-0">{g.icon}</span>
                  <div>
                    <h3 className="text-white font-bold font-heading mb-1">{g.label}</h3>
                    <p className="text-white/50 text-xs">ex : {g.ex}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Consoles */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-white mb-2 flex items-center gap-2">
              <Monitor className="h-5 w-5 text-blue-400" />
              Mes Consoles
            </h2>
            <p className="text-white/50 text-sm mb-6">Un parcours gaming qui a traversé plusieurs générations de constructeurs :</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {consoles.map((c) => (
                <div
                  key={c.brand}
                  className={`bg-gradient-to-br ${c.accent} border rounded-2xl overflow-hidden`}
                >
                  {/* En-tête de la marque */}
                  <div className="flex items-center gap-3 p-4 border-b border-white/10">
                    <img src={c.logo} alt={`Logo ${c.brand}`} className="w-8 h-8 object-contain" />
                    <h3 className="text-white font-bold font-heading">{c.brand}</h3>
                  </div>
                  {/* Liste des consoles */}
                  <div className="p-4 space-y-3">
                    {c.items.map((item) => (
                      <div key={item.name} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${c.dotColor} mt-1.5 flex-shrink-0`} />
                        <div>
                          <p className="text-white font-semibold text-sm">{item.name}</p>
                          <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Impacts */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-white mb-2 flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-400 fill-red-400" />
              Ce Que le Jeu Vidéo M'a Apporté
            </h2>
            <p className="text-white/50 text-sm mb-6">Bien plus qu'un simple divertissement, les jeux vidéo ont eu un impact positif sur ma vie :</p>
            <div className="space-y-3">
              {impacts.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/8 transition-colors"
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">{item.label}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
