import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { GalleryWithLightbox } from '@/components/ui/lightbox'

const galleryImages = [
  { src: '/assets/images/E-Com/ImageMotos.png', alt: 'Catalogue produits' },
  { src: '/assets/images/E-Com/ImageDashBoardAdmin.png', alt: 'Dashboard administrateur' },
  { src: '/assets/images/E-Com/ImageInfosLivraison.png', alt: 'Page infos de livraison' },
]

const features = [
  { label: 'Catalogue produits', desc: 'affichage dynamique avec images, descriptions, catégories, tri et filtres' },
  { label: 'Panier utilisateur', desc: 'ajout, modification et suppression d\'articles avec gestion de la quantité' },
  { label: 'Tunnel de commande', desc: 'formulaire de livraison et récapitulatif avant validation' },
  { label: 'Comptes utilisateurs', desc: 'système de connexion/inscription avec historique des commandes' },
  { label: 'Espace administrateur', desc: 'CRUD complet des produits et gestion des utilisateurs' },
]

const techStack = [
  { label: 'Framework', value: 'Laravel 11' },
  { label: 'Front-end', value: 'Blade, Tailwind CSS, JavaScript' },
  { label: 'Base de données', value: 'MySQL avec Eloquent ORM' },
  { label: 'Authentification', value: 'Laravel Breeze' },
  { label: 'Architecture', value: 'MVC (Modèle - Vue - Contrôleur)' },
  { label: 'Outils', value: 'Git, GitHub, PHPMyAdmin' },
]

const challenges = [
  { label: 'Gestion des relations entre modèles', desc: 'produits, utilisateurs, commandes, etc.' },
  { label: 'Validation des formulaires', desc: 'via les règles de validation Laravel et gestion des erreurs' },
  { label: 'Interface Blade dynamique', desc: 'avec réutilisation de composants et mise en page responsive' },
  { label: 'Sécurité', desc: 'protection CSRF, hachage des mots de passe, middleware pour les routes' },
]

export default function ECom() {
  return (
    <main className="mt-16 py-12">
      <div className="w-[min(90%,900px)] mx-auto px-4">
        <Link to="/#projects">
          <Button variant="ghost" className="mb-6 gap-2 text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Retour aux projets
          </Button>
        </Link>

        <h1 className="text-4xl font-bold font-heading text-primary mb-2">Site E-commerce</h1>
        <div className="w-20 h-1 bg-secondary mb-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-4">Contexte du projet</h2>
          <p className="text-muted-foreground leading-relaxed">
            Le projet <strong className="text-foreground">E-Com</strong> est un site e-commerce que j'ai développé en groupe de 3 dans le cadre
            de ma formation Bachelor Développement Web. Il avait pour objectif de simuler un site de vente en ligne
            (Motos, accessoires et pièces détachées) avec des fonctionnalités essentielles d'un vrai site marchand.
            Ce projet m'a permis d'appréhender l'ensemble du cycle de développement web, du front-end au back-end.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-2">Galerie du Projet</h2>
          <GalleryWithLightbox images={galleryImages} />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-4">Fonctionnalités principales</h2>
          <ul className="space-y-2">
            {features.map((f) => (
              <li key={f.label} className="text-muted-foreground">
                <strong className="text-foreground">{f.label} :</strong> {f.desc}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-4">Technologies utilisées</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((t) => (
              <div key={t.label} className="text-muted-foreground text-sm">
                <strong className="text-foreground">{t.label} :</strong> {t.value}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-4">Défis rencontrés</h2>
          <ul className="space-y-2">
            {challenges.map((c) => (
              <li key={c.label} className="text-muted-foreground">
                <strong className="text-foreground">{c.label} :</strong> {c.desc}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
