import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
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
    color: '#003791',
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
    color: '#e60012',
    items: [
      { name: 'Nintendo DS', desc: 'Ma toute première console, source de nombreux souvenirs avec Pokémon et Mario.' },
      { name: 'Nintendo 3DS', desc: 'Pour découvrir les jeux en 3D sans lunettes et continuer l\'aventure portable.' },
      { name: 'Nintendo Wii', desc: 'Pour jouer en famille et découvrir de nouveaux styles de jeu avec les manettes motion.' },
      { name: 'Nintendo Switch', desc: 'La console hybride permettant de jouer aussi bien en mode portable qu\'à la maison, avec un large choix de jeux innovants surtout Mario Kart.' },
      { name: 'Game Boy Color (jaune)', desc: 'La console portable emblématique de Nintendo, parfaite pour jouer à des classiques comme Pokémon et Tetris partout.' },
    ],
  },
  {
    brand: 'Microsoft',
    logo: '/assets/images/Jeux Vidéos/Editeurs/Microsoft_logo.svg.png',
    color: '#289461',
    items: [
      { name: 'Xbox 360', desc: 'Ma première console Microsoft, idéale pour découvrir les exclusivités Xbox et découvrir le Kinect.' },
    ],
  },
  {
    brand: 'PC',
    logo: '/assets/images/Jeux Vidéos/Editeurs/pc.jpg',
    color: '#333333',
    items: [
      { name: 'PC Gamer', desc: 'Mon support principal aujourd\'hui, pour la polyvalence, la performance et le modding.' },
    ],
  },
]

const genres = [
  'City builders (ex : Cities: Skylines, ...)',
  'Jeux de simulation (ex : Satisfactory, The Sims)',
  'FPS (First Person Shooter) (ex : Valorant, Call of Duty)',
  'RPG (Role Playing Game) (ex : Cyberpunk 2077, ...)',
]

const impacts = [
  { label: 'Développement de compétences', desc: 'Travail d\'équipe, réflexion stratégique, gestion du stress' },
  { label: 'Ouverture culturelle', desc: 'Découverte de différentes cultures à travers les univers des jeux' },
  { label: 'Créativité', desc: 'Inspiration pour mes propres projets créatifs' },
  { label: 'Relations sociales', desc: 'Rencontre de personnes partageant les mêmes passions' },
  { label: 'Anglais', desc: 'Amélioration de mon niveau grâce aux jeux non traduits' },
]

export default function JeuVideo() {
  return (
    <main className="mt-16 py-12">
      <div className="w-[min(90%,900px)] mx-auto px-4">
        <Link to="/#passion">
          <Button variant="ghost" className="mb-6 gap-2 text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Retour aux passions
          </Button>
        </Link>

        {/* Bannière */}
        <div className="text-center mb-8">
          <img
            src="/assets/images/Jeux Vidéos/Banniere.jpg"
            alt="Bannière jeux vidéo"
            className="max-w-full w-full rounded-xl shadow-md object-cover max-h-64"
          />
        </div>

        <h1 className="text-4xl font-bold font-heading text-primary mb-2">Jeux Vidéo</h1>
        <div className="w-20 h-1 bg-secondary mb-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-4">Mes Débuts dans le Jeu Vidéo</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ma passion pour les jeux vidéo a commencé dès mon plus jeune âge, avec ma première console, une{' '}
            <strong className="text-foreground">Nintendo DS</strong>. Je me souviens encore des heures passées à explorer les mondes de{' '}
            <strong className="text-foreground">Mario</strong> et aussi tant d'autres. Cette passion n'a fait que grandir avec le temps,
            évoluant vers des expériences plus complexes et immersives.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-2">Galerie de Mes Jeux Préférés</h2>
          <GalleryWithLightbox images={galleryImages} />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-4">Mes Genres Préférés</h2>
          <p className="text-muted-foreground mb-3">Au fil des années, j'ai exploré différents genres de jeux vidéo, chacun offrant une expérience unique :</p>
          <ul className="space-y-1 list-disc list-inside">
            {genres.map((g, i) => (
              <li key={i} className="text-muted-foreground">{g}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-6">Mes Consoles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {consoles.map((c) => (
              <Card key={c.brand} className="overflow-hidden shadow-md">
                <div className="flex items-center gap-3 p-4" style={{ backgroundColor: c.color }}>
                  <img src={c.logo} alt={`Logo ${c.brand}`} className="w-10 h-10 object-contain" />
                  <h3 className="text-lg font-bold font-heading text-white">{c.brand}</h3>
                </div>
                <CardContent className="p-4 space-y-3">
                  {c.items.map((item) => (
                    <div key={item.name} className="p-3 bg-muted rounded-lg">
                      <h4 className="font-semibold text-primary text-sm mb-1">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-4">Ce Que le Jeu Vidéo M'a Apporté</h2>
          <p className="text-muted-foreground mb-3">Bien plus qu'un simple divertissement, les jeux vidéo ont eu un impact positif sur ma vie :</p>
          <ul className="space-y-2">
            {impacts.map((item) => (
              <li key={item.label} className="text-muted-foreground">
                <strong className="text-foreground">{item.label} :</strong> {item.desc}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
