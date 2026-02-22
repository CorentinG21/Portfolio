import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Trophy, Users, Zap, MessageSquare, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { GalleryWithLightbox } from '@/components/ui/lightbox'
import { gentleMatesMainGames, gentleMatesOtherGames } from '@/data/portfolioData'

const galleryImages = [
  { src: '/assets/images/GentleMates/Les_CEO.png', alt: 'Les fondateurs de Gentle Mates' },
  { src: '/assets/images/GentleMates/Les_1_an.jpg', alt: 'Célébration du premier anniversaire' },
  { src: '/assets/images/GentleMates/1st_roster.jpg', alt: 'Premier roster Valorant' },
  { src: '/assets/images/GentleMates/Annonce_Cod.jpg', alt: 'Annonce équipe Call of Duty' },
]

const values = [
  { icon: Star, label: 'Fondateurs Iconiques', desc: 'Portée par Squeezie, Gotaga et Brawks — des personnalités influentes et passionnées.' },
  { icon: Users, label: 'Communauté Engagée', desc: 'Un soutien massif et fervent de la part des fans (#M8WIN).' },
  { icon: Trophy, label: 'Ambition et Performance', desc: 'La volonté de concourir au plus haut niveau et de remporter des titres.' },
  { icon: MessageSquare, label: 'Proximité et Transparence', desc: 'Une communication régulière et authentique avec leur public.' },
]

const whyISupport = [
  { icon: '⚡', label: 'L\'énergie communicative', desc: 'L\'enthousiasme et la passion qui se dégagent de chaque annonce et compétition.' },
  { icon: '🎯', label: 'Les valeurs portées', desc: 'Le respect, le travail d\'équipe et la recherche de l\'excellence.' },
  { icon: '🇫🇷', label: 'La fierté française', desc: 'Une structure française avec de telles ambitions sur la scène internationale.' },
  { icon: '📈', label: 'Le développement des talents', desc: 'L\'opportunité offerte aux joueurs de s\'épanouir dans un environnement professionnel.' },
]

export default function GentleMates() {
  return (
    <main className="mt-16">

      {/* HERO — plein écran avec bannière */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="/assets/images/GentleMates/BanniereM8.webp"
          alt="Bannière Gentle Mates"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a] via-[#0d0d1a]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d1a]/60 to-transparent" />

        {/* Contenu sur la bannière */}
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
              <img
                src="/assets/images/GentleMates/Logo_GentleMates_2025.png"
                alt="Logo Gentle Mates"
                className="w-10 h-10 object-contain"
              />
              <span className="text-white/60 text-sm font-semibold uppercase tracking-widest">E-Sport</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-white">
              Gentle Mates
              <span className="ml-3 text-2xl md:text-3xl font-bold text-white/50">#M8WIN</span>
            </h1>
          </div>
        </div>
      </div>

      {/* CORPS — fond sombre gaming */}
      <div className="bg-[#0d0d1a] min-h-screen">
        <div className="w-[min(90%,900px)] mx-auto px-4 py-12 space-y-16">

          {/* Présentation */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-white mb-4 flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-400" />
              Présentation
            </h2>
            <p className="text-white/60 leading-relaxed text-sm">
              <span className="text-white font-semibold">Gentle Mates</span> (souvent abrégé <span className="text-white font-semibold">M8</span>) est une structure e-sport française de premier plan,
              co-fondée par les figures emblématiques que sont <span className="text-white font-semibold">Squeezie</span>, <span className="text-white font-semibold">Gotaga</span> et <span className="text-white font-semibold">Brawks</span>.
              Depuis son lancement, j'ai suivi avec enthousiasme l'ascension de cette équipe qui incarne des valeurs d'excellence,
              de passion et une forte connexion avec sa communauté.
            </p>
          </section>

          {/* Galerie */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-white mb-4 flex items-center gap-2">
              <span className="text-purple-400">📸</span> Galerie M8
            </h2>
            <GalleryWithLightbox images={galleryImages} />
          </section>

          {/* Jeux Phares */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-white mb-2 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-400" />
              Les Jeux Phares
            </h2>
            <p className="text-white/50 text-sm mb-6">M8 s'est rapidement imposée sur plusieurs jeux majeurs de la scène e-sportive.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {gentleMatesMainGames.map((g) => (
                <div
                  key={g.name}
                  className={`bg-gradient-to-br ${g.color} border rounded-2xl p-4 flex items-start gap-4 hover:scale-[1.02] transition-transform duration-200`}
                >
                  <span className="text-3xl flex-shrink-0">{g.icon}</span>
                  <div>
                    <h3 className="text-white font-bold font-heading mb-1">{g.name}</h3>
                    <p className="text-white/55 text-xs leading-relaxed">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Autres Jeux */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-white mb-4 flex items-center gap-2">
              <span className="text-blue-400">🎮</span> Les Autres Jeux
            </h2>
            <p className="text-white/50 text-sm mb-4">En plus des jeux phares, M8 explore d'autres titres populaires :</p>
            <div className="flex flex-wrap gap-3">
              {gentleMatesOtherGames.map((g) => (
                <div
                  key={g.name}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 transition-colors"
                >
                  <span>{g.icon}</span>
                  <span className="text-white/80 text-sm font-medium">{g.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Ce qui définit M8 */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-white mb-6 flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              Ce qui définit Gentle Mates
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 hover:border-white/20 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-secondary" />
                    </div>
                    <h3 className="text-white font-bold text-sm font-heading">{label}</h3>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mon Soutien */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-white mb-2 flex items-center gap-2">
              <span className="text-red-400">❤️</span> Pourquoi je soutiens M8
            </h2>
            <p className="text-white/50 text-sm mb-6">
              En tant que passionné d'e-sport et admirateur du parcours de ses fondateurs (surtout Gotaga),
              soutenir Gentle Mates dès son lancement m'a paru naturel.
            </p>
            <div className="space-y-3">
              {whyISupport.map((w) => (
                <div
                  key={w.label}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/8 transition-colors"
                >
                  <span className="text-2xl flex-shrink-0">{w.icon}</span>
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">{w.label}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="flex justify-center pb-4">
            <a href="https://www.gentlemates.com/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-[#0d0d1a] hover:bg-white/90 font-bold px-8 h-12 rounded-full gap-2 text-sm shadow-lg shadow-white/10">
                <ExternalLink className="h-4 w-4" />
                Site Officiel Gentle Mates
              </Button>
            </a>
          </div>

        </div>
      </div>
    </main>
  )
}
