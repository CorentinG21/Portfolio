import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GalleryWithLightbox } from '@/components/ui/lightbox'

const galleryImages = [
  { src: '/assets/images/GentleMates/Les_CEO.png', alt: 'Les fondateurs de Gentle Mates' },
  { src: '/assets/images/GentleMates/Les_1_an.jpg', alt: 'Célébration du premier anniversaire de Gentle Mates' },
  { src: '/assets/images/GentleMates/1st_roster.jpg', alt: 'Le premier roster de Gentle Mates sur Valorant' },
  { src: '/assets/images/GentleMates/Annonce_Cod.jpg', alt: 'Annonce de l\'équipe Call of Duty de Gentle Mates' },
]

const mainGames = [
  { name: 'Valorant', desc: 'Avec une équipe performante évoluant au plus haut niveau, notamment en VCT EMEA.' },
  { name: 'Rocket League', desc: 'Une présence notable avec des joueurs talentueux.' },
  { name: 'Fortnite', desc: 'Participation active aux compétitions majeures.' },
  { name: 'Call of Duty', desc: 'Une équipe compétitive qui vise les sommets.' },
]

const otherGames = [
  { name: 'Teamfight Tactics', desc: 'Mise en place d\'un roster compétitif avec participation à plusieurs tournois sur ce jeu d\'auto-battler.' },
  { name: 'Age of Empires IV', desc: 'Formation d\'une équipe lors d\'événements centrés sur ce jeu de stratégie en temps réel.' },
  { name: 'Warzone 2', desc: 'Développement d\'un roster actif engagé dans diverses compétitions de la scène Battle Royale.' },
]

const values = [
  { label: 'Fondateurs Iconiques', desc: 'Portée par des personnalités influentes et passionnées de l\'e-sport.' },
  { label: 'Communauté Engagée', desc: 'Un soutien massif et fervent de la part des fans (#M8WIN).' },
  { label: 'Ambition et Performance', desc: 'La volonté de concourir au plus haut niveau et de remporter des titres.' },
  { label: 'Proximité et Transparence', desc: 'Une communication régulière et authentique avec leur public.' },
]

const whyISupport = [
  { label: 'L\'énergie communicative', desc: 'L\'enthousiasme et la passion qui se dégagent de chaque annonce et compétition.' },
  { label: 'Les valeurs portées', desc: 'Le respect, le travail d\'équipe et la recherche de l\'excellence.' },
  { label: 'La fierté française', desc: 'Voir une structure française avec de telles ambitions et un tel impact sur la scène internationale est une grande source de motivation.' },
  { label: 'Le développement des talents', desc: 'L\'opportunité offerte aux joueurs de s\'épanouir dans un environnement professionnel et stimulant.' },
]

export default function GentleMates() {
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
            src="/assets/images/GentleMates/BanniereM8.webp"
            alt="Bannière Gentle Mates"
            className="max-w-full w-full rounded-xl shadow-md object-cover"
          />
        </div>

        <h1 className="text-4xl font-bold font-heading text-primary mb-2">Gentle Mates</h1>
        <div className="w-20 h-1 bg-secondary mb-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-4">Présentation de Gentle Mates</h2>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Gentle Mates</strong> (souvent abrégé M8) est une structure e-sport française de premier plan,
            co-fondée par les figures emblématiques que sont Squeezie, Gotaga et Brawks. Depuis son lancement, j'ai
            suivi avec enthousiasme l'ascension de cette équipe qui incarne des valeurs d'excellence, de passion et
            une forte connexion avec sa communauté. Leur ambition est de briller sur la scène nationale et
            internationale à travers différentes disciplines compétitives.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-2">Galerie M8</h2>
          <GalleryWithLightbox images={galleryImages} />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-4">Les Jeux Phares</h2>
          <p className="text-muted-foreground mb-3">Gentle Mates s'est rapidement imposée sur plusieurs jeux majeurs de la scène e-sportive :</p>
          <ul className="space-y-2">
            {mainGames.map((g) => (
              <li key={g.name} className="text-muted-foreground">
                <strong className="text-foreground">{g.name} :</strong> {g.desc}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-4">Les Autres Jeux</h2>
          <p className="text-muted-foreground mb-3">En plus des jeux phares, Gentle Mates explore d'autres titres populaires :</p>
          <ul className="space-y-2">
            {otherGames.map((g) => (
              <li key={g.name} className="text-muted-foreground">
                <strong className="text-foreground">{g.name} :</strong> {g.desc}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-4">Ce qui définit Gentle Mates</h2>
          <ul className="space-y-2">
            {values.map((v) => (
              <li key={v.label} className="text-muted-foreground">
                <strong className="text-foreground">{v.label} :</strong> {v.desc}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-4">Mon Soutien et Pourquoi</h2>
          <p className="text-muted-foreground mb-3">
            En tant que passionné d'e-sport et admirateur du parcours de ses fondateurs (surtout Gotaga), soutenir
            Gentle Mates dès son lancement m'a paru naturel. Je suis particulièrement sensible à :
          </p>
          <ul className="space-y-2 mb-6">
            {whyISupport.map((w) => (
              <li key={w.label} className="text-muted-foreground">
                <strong className="text-foreground">{w.label} :</strong> {w.desc}
              </li>
            ))}
          </ul>
          <a href="https://www.gentlemates.com/" target="_blank" rel="noopener noreferrer">
            <Button className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Site Officiel Gentle Mates
            </Button>
          </a>
        </section>
      </div>
    </main>
  )
}
