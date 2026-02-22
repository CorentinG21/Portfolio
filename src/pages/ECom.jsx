import { Link } from 'react-router-dom'
import { ArrowLeft, ShoppingCart, Code2, Shield, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GalleryWithLightbox } from '@/components/ui/lightbox'

const galleryImages = [
  { src: '/assets/images/E-Com/ImageMotos.png', alt: 'Catalogue produits' },
  { src: '/assets/images/E-Com/ImageDashBoardAdmin.png', alt: 'Dashboard administrateur' },
  { src: '/assets/images/E-Com/ImageInfosLivraison.png', alt: 'Page infos de livraison' },
]

const features = [
  { icon: '🛍️', label: 'Catalogue produits', desc: 'Affichage dynamique avec images, descriptions, catégories, tri et filtres.' },
  { icon: '🛒', label: 'Panier utilisateur', desc: 'Ajout, modification et suppression d\'articles avec gestion de la quantité.' },
  { icon: '📦', label: 'Tunnel de commande', desc: 'Formulaire de livraison et récapitulatif avant validation.' },
  { icon: '👤', label: 'Comptes utilisateurs', desc: 'Système de connexion/inscription avec historique des commandes.' },
  { icon: '⚙️', label: 'Espace administrateur', desc: 'CRUD complet des produits et gestion des utilisateurs.' },
]

const techStack = [
  { label: 'Framework', value: 'Laravel 11', color: 'border-l-red-500' },
  { label: 'Front-end', value: 'Blade + Tailwind CSS + JS', color: 'border-l-blue-500' },
  { label: 'Base de données', value: 'MySQL + Eloquent ORM', color: 'border-l-orange-500' },
  { label: 'Authentification', value: 'Laravel Breeze', color: 'border-l-green-500' },
  { label: 'Architecture', value: 'MVC', color: 'border-l-purple-500' },
  { label: 'Outils', value: 'Git, GitHub, PHPMyAdmin', color: 'border-l-slate-400' },
]

const challenges = [
  { icon: '🔗', label: 'Relations entre modèles', desc: 'Gestion des relations produits, utilisateurs, commandes dans Eloquent.' },
  { icon: '✅', label: 'Validation des formulaires', desc: 'Via les règles de validation Laravel avec gestion des erreurs.' },
  { icon: '🖥️', label: 'Interface Blade dynamique', desc: 'Réutilisation de composants et mise en page responsive.' },
  { icon: '🔒', label: 'Sécurité', desc: 'Protection CSRF, hachage des mots de passe, middleware pour les routes.' },
]

export default function ECom() {
  return (
    <main className="mt-16">

      {/* HERO — fond sombre fixe (slate en light, très sombre en dark) */}
      <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 dark:from-[#0d0d1a] dark:to-[#111827]">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full bg-red-500/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="w-[min(90%,900px)] mx-auto">
            <Link to="/#projects">
              <Button variant="ghost" size="sm" className="mb-4 gap-2 text-white/70 hover:text-white hover:bg-white/10 backdrop-blur-sm">
                <ArrowLeft className="h-4 w-4" /> Retour aux projets
              </Button>
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <img src="/assets/images/E-ComLogo.png" alt="Logo E-Com" className="w-10 h-10 object-contain rounded-lg" />
              <span className="text-white/60 text-sm font-semibold uppercase tracking-widest">Projet</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-white">
              Site E-commerce
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
              <ShoppingCart className="h-5 w-5 text-orange-500" />
              Contexte du projet
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Le projet <span className="text-foreground font-semibold">E-Com</span> est un site e-commerce développé en groupe de 3
              dans le cadre de ma formation Bachelor Développement Web. Il avait pour objectif de simuler un site de vente en ligne
              (motos, accessoires et pièces détachées) avec les fonctionnalités essentielles d'un vrai site marchand.
              Ce projet m'a permis d'appréhender l'ensemble du cycle de développement web, du front-end au back-end.
            </p>
          </section>

          {/* Galerie */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-foreground mb-4 flex items-center gap-2">
              <span className="text-purple-500">📸</span> Galerie du Projet
            </h2>
            <GalleryWithLightbox images={galleryImages} />
          </section>

          {/* Fonctionnalités */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-foreground mb-2 flex items-center gap-2">
              <Code2 className="h-5 w-5 text-blue-500" />
              Fonctionnalités principales
            </h2>
            <p className="text-muted-foreground text-sm mb-6">Un ensemble de fonctionnalités couvrant les besoins d'un site e-commerce complet :</p>
            <div className="space-y-3">
              {features.map((f) => (
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

          {/* Stack Technique */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-foreground mb-2 flex items-center gap-2">
              <Wrench className="h-5 w-5 text-yellow-500" />
              Technologies utilisées
            </h2>
            <p className="text-muted-foreground text-sm mb-6">La stack technique choisie pour ce projet :</p>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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