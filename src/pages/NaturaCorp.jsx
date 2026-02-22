import { Link } from 'react-router-dom'
import { ArrowLeft, Leaf, Map, Wrench, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GalleryWithLightbox } from '@/components/ui/lightbox'

const galleryImages = [
  { src: '/assets/images/NaturaCorp/AccueilVitrine.png', alt: 'Accueil Site Vitrine NaturaCorp' },
  { src: '/assets/images/NaturaCorp/Accueil.png', alt: 'Accueil CRM NaturaCorp' },
  { src: '/assets/images/NaturaCorp/PagePharmacies.png', alt: 'Liste des Pharmacies' },
  { src: '/assets/images/NaturaCorp/PageCarte.png', alt: 'Carte des Pharmacies' },
  { src: '/assets/images/NaturaCorp/PageCommande.png', alt: 'Gestion des Commandes' },
]

const mainFeatures = [
  { icon: '🏥', label: 'Gestion des pharmacies', desc: 'Permettre aux commerciaux de gérer les pharmacies (clients et prospects).' },
  { icon: '📋', label: 'Gestion des commandes', desc: 'Permettre aux commerciaux de gérer les commandes associées aux pharmacies.' },
  { icon: '🗺️', label: 'Carte interactive', desc: 'Afficher une carte de France interactive présentant les pharmacies (clients et prospects).' },
]

const secondaryFeatures = [
  { icon: '🔍', label: 'Recherche & filtres avancés', desc: 'Rechercher et filtrer les pharmacies par nom, région, statut, etc.' },
  { icon: '🔔', label: 'Notifications internes', desc: 'Alerter les commerciaux sur les actions importantes (commande en retard, prospect non contacté).' },
  { icon: '📊', label: 'Rapports personnalisés', desc: 'Générer des rapports (ex : liste des pharmacies converties sur une période donnée).' },
  { icon: '🕵️', label: 'Audit trail', desc: 'Permettre aux administrateurs de suivre les connexions et activités des utilisateurs.' },
  { icon: '📂', label: 'Import / Export CSV', desc: 'Import et export de données sous forme de fichiers CSV (pharmacies, commandes).' },
  { icon: '📎', label: 'Pièces jointes', desc: 'Associer des fichiers (contrats, documents) aux pharmacies pour un suivi administratif.' },
  { icon: '📍', label: 'Géolocalisation auto', desc: 'Récupérer automatiquement les coordonnées GPS via une API et les enregistrer en base.' },
]

const techStack = [
  { label: 'Frontend', value: 'Vue.js 3 + Inertia.js', color: 'border-l-green-500' },
  { label: 'Backend', value: 'Laravel 12', color: 'border-l-red-500' },
  { label: 'Base de données', value: 'MySQL', color: 'border-l-orange-500' },
  { label: 'Cartographie', value: 'Leaflet.js + OpenStreetMap', color: 'border-l-blue-500' },
  { label: 'Authentification', value: 'Laravel Breeze', color: 'border-l-purple-500' },
]

const challenges = [
  { icon: '🗺️', label: 'Carte interactive', desc: 'Mettre en place une carte avec des filtres dynamiques par région.' },
  { icon: '🔄', label: 'Statuts dynamiques', desc: 'Rendre le statut des pharmacies dynamique en fonction de leurs commandes.' },
  { icon: '🔔', label: 'Système de notifications', desc: 'Mettre en place une gestion des notifications internes pour les commerciaux.' },
]

export default function NaturaCorp() {
  return (
    <main className="mt-16">

      {/* HERO — fond sombre fixe */}
      <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 dark:from-[#0d0d1a] dark:to-[#111827]">
        <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full bg-green-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="w-[min(90%,900px)] mx-auto">
            <Link to="/#projects">
              <Button variant="ghost" size="sm" className="mb-4 gap-2 text-white/70 hover:text-white hover:bg-white/10 backdrop-blur-sm">
                <ArrowLeft className="h-4 w-4" /> Retour aux projets
              </Button>
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <img src="/assets/images/NaturaLogo.png" alt="Logo NaturaCorp" className="w-10 h-10 object-contain rounded-lg" />
              <span className="text-white/60 text-sm font-semibold uppercase tracking-widest">Projet · CRM</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-white">
              NaturaCorp
            </h1>
          </div>
        </div>
      </div>

      {/* CORPS — thème dynamique light/dark */}
      <div className="bg-background min-h-screen">
        <div className="w-[min(90%,900px)] mx-auto px-4 py-12 space-y-16">

          {/* Contexte */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-foreground mb-4 flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-500" />
              Contexte du projet
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              <span className="text-foreground font-semibold">NaturaCorp</span> est un projet visant à développer un site vitrine et un CRM
              pour l'entreprise du même nom — une startup fondée par Benjamin DUFOUR (ingénieur agronome) et Hannah COSTA
              (consultante en communication). L'objectif est de commercialiser un complément alimentaire à base d'extrait
              d'un champignon japonais. Le site vitrine présente l'entreprise et son produit, tandis que le CRM gère la
              distribution auprès des clients, le suivi des commandes et les activités commerciales.
            </p>
          </section>

          {/* Galerie */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-foreground mb-4 flex items-center gap-2">
              <span className="text-purple-500">📸</span> Galerie du Projet
            </h2>
            <GalleryWithLightbox images={galleryImages} />
          </section>

          {/* Fonctionnalités principales */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-foreground mb-2 flex items-center gap-2">
              <Map className="h-5 w-5 text-emerald-500" />
              Fonctionnalités principales
            </h2>
            <p className="text-muted-foreground text-sm mb-6">Les fonctionnalités clés du CRM NaturaCorp :</p>
            <div className="space-y-3">
              {mainFeatures.map((f) => (
                <div
                  key={f.label}
                  className="flex items-start gap-4 bg-muted/50 border rounded-xl p-4 hover:bg-muted transition-colors"
                >
                  <span className="text-2xl flex-shrink-0">{f.icon}</span>
                  <div>
                    <p className="text-foreground font-semibold text-sm mb-0.5">{f.label}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Fonctionnalités secondaires */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-foreground mb-2 flex items-center gap-2">
              <span className="text-blue-500">✨</span> Fonctionnalités secondaires
            </h2>
            <p className="text-muted-foreground text-sm mb-6">Des fonctionnalités avancées pour compléter l'expérience :</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {secondaryFeatures.map((f) => (
                <div
                  key={f.label}
                  className="bg-muted/50 border rounded-2xl p-4 hover:bg-muted transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg">{f.icon}</span>
                    <h3 className="text-foreground font-bold text-sm font-heading">{f.label}</h3>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Stack Technique */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-foreground mb-2 flex items-center gap-2">
              <Wrench className="h-5 w-5 text-yellow-500" />
              Technologies utilisées
            </h2>
            <p className="text-muted-foreground text-sm mb-6">La stack technique retenue pour ce projet :</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {techStack.map((t) => (
                <div
                  key={t.label}
                  className={`border-l-4 ${t.color} bg-muted/50 border rounded-xl p-3`}
                >
                  <p className="text-muted-foreground text-xs uppercase tracking-wide">{t.label}</p>
                  <p className="text-foreground font-semibold text-sm">{t.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Défis */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-foreground mb-2 flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              Défis rencontrés
            </h2>
            <p className="text-muted-foreground text-sm mb-6">Les principaux obstacles techniques surmontés durant ce projet :</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {challenges.map((c) => (
                <div
                  key={c.label}
                  className="bg-muted/50 border rounded-2xl p-5 hover:bg-muted transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{c.icon}</span>
                    <h3 className="text-foreground font-bold text-sm font-heading">{c.label}</h3>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}