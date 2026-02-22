import { Link } from 'react-router-dom'
import { ArrowLeft, Package, Wrench, Shield, Train } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  { icon: '📦', label: 'Dépôt de colis', desc: 'Formulaire en plusieurs étapes avec génération automatique de QR codes.' },
  { icon: '🔍', label: 'Recherche de trajets', desc: 'Affichage des trajets disponibles pour les voyageurs.' },
  { icon: '📷', label: 'Prise en charge de colis', desc: 'Système de scan de QR code pour validation.' },
  { icon: '📡', label: 'Suivi des colis', desc: 'État en temps réel : déposé, en transit, livré.' },
  { icon: '📱', label: 'Interface utilisateur claire', desc: 'Navigation fluide, design responsive mobile-first.' },
]

const techStack = [
  { label: 'Backend', value: 'Laravel 12', color: 'from-red-500/20 to-red-900/10 border-red-500/30' },
  { label: 'Frontend', value: 'Flutter', color: 'from-blue-500/20 to-blue-900/10 border-blue-500/30' },
  { label: 'Base de données', value: 'MySQL', color: 'from-orange-500/20 to-orange-900/10 border-orange-500/30' },
  { label: 'Authentification', value: 'Laravel Breeze', color: 'from-green-500/20 to-green-900/10 border-green-500/30' },
  { label: 'QR code', value: 'Librairie Laravel', color: 'from-purple-500/20 to-purple-900/10 border-purple-500/30' },
  { label: 'Outils', value: 'Git, GitHub, Notion', color: 'from-slate-500/20 to-slate-900/10 border-slate-500/30' },
]

const challenges = [
  { icon: '🔄', label: 'Synchronisation des étapes', desc: 'Gérer les statuts du colis entre les différents utilisateurs.' },
  { icon: '🎨', label: 'Expérience utilisateur', desc: 'Simplification du dépôt, du scan et de la prise en charge.' },
  { icon: '📲', label: 'Développement Flutter', desc: 'Prise en main d\'un nouveau framework mobile lors de mon stage.' },
  { icon: '🚆', label: 'Connexion API ferroviaire', desc: 'Pour lister les trajets réels (intégration prévue).' },
]

export default function Home2Home() {
  return (
    <main className="mt-16">

      {/* HERO — gradient avec logo */}
      <div className="relative h-64 md:h-80 overflow-hidden bg-[#0d0d1a]">
        <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-56 h-56 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="w-[min(90%,900px)] mx-auto">
            <Link to="/#projects">
              <Button
                variant="ghost"
                size="sm"
                className="mb-4 gap-2 text-white/70 hover:text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <ArrowLeft className="h-4 w-4" /> Retour aux projets
              </Button>
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/assets/images/LogoHome2Home.png"
                alt="Logo Home2Home"
                className="w-10 h-10 object-contain rounded-lg"
              />
              <span className="text-white/60 text-sm font-semibold uppercase tracking-widest">Projet · Stage</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-white">
              Home2Home
            </h1>
          </div>
        </div>
      </div>

      {/* CORPS */}
      <div className="bg-[#0d0d1a] min-h-screen">
        <div className="w-[min(90%,900px)] mx-auto px-4 py-12 space-y-16">

          {/* Contexte */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-white mb-4 flex items-center gap-2">
              <Train className="h-5 w-5 text-blue-400" />
              Contexte du projet
            </h2>
            <p className="text-white/60 leading-relaxed text-sm">
              <span className="text-white font-semibold">Home2Home</span> est une application web mobile développée dans le cadre de mon stage.
              Elle propose un service de livraison de colis entre particuliers en s'appuyant sur les trajets ferroviaires existants.
              L'objectif est de permettre à des voyageurs de transporter des colis d'un point A à un point B en échange d'une compensation,
              tout en assurant un suivi sécurisé.
            </p>
          </section>

          {/* Galerie indisponible */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-white mb-4 flex items-center gap-2">
              <span className="text-purple-400">📸</span> Galerie du Projet
            </h2>
            <div className="bg-white/5 border border-white/10 border-dashed rounded-2xl p-8 text-center">
              <p className="text-3xl mb-3">🚧</p>
              <p className="text-white/60 text-sm">La galerie sera bientôt disponible.</p>
              <p className="text-white/40 text-xs mt-1">Le projet est actuellement en cours de finalisation.</p>
            </div>
          </section>

          {/* Fonctionnalités */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-white mb-2 flex items-center gap-2">
              <Package className="h-5 w-5 text-cyan-400" />
              Fonctionnalités principales
            </h2>
            <p className="text-white/50 text-sm mb-6">Un service conçu pour faciliter la livraison entre particuliers via le réseau ferroviaire :</p>
            <div className="space-y-3">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/8 transition-colors"
                >
                  <span className="text-2xl flex-shrink-0">{f.icon}</span>
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">{f.label}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stack Technique */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-white mb-2 flex items-center gap-2">
              <Wrench className="h-5 w-5 text-yellow-400" />
              Technologies utilisées
            </h2>
            <p className="text-white/50 text-sm mb-6">La stack technique retenue pour ce projet :</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {techStack.map((t) => (
                <div
                  key={t.label}
                  className={`bg-gradient-to-br ${t.color} border rounded-xl p-3`}
                >
                  <p className="text-white/50 text-xs uppercase tracking-wide">{t.label}</p>
                  <p className="text-white font-semibold text-sm">{t.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Défis */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-white mb-2 flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-400" />
              Défis rencontrés
            </h2>
            <p className="text-white/50 text-sm mb-6">Les principaux défis techniques de ce projet de stage :</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {challenges.map((c) => (
                <div
                  key={c.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 hover:border-white/20 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{c.icon}</span>
                    <h3 className="text-white font-bold text-sm font-heading">{c.label}</h3>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
