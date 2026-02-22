import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
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
  'Permettre aux commerciaux de gérer les pharmacies (clients et prospects).',
  'Permettre aux commerciaux de gérer les commandes associées aux pharmacies.',
  'Afficher une carte de France interactive présentant les pharmacies (clients et prospects).',
]

const secondaryFeatures = [
  'Permettre de rechercher et filtrer les pharmacies dans la base de données par critères avancés (nom, région, statut, etc.).',
  'Implémenter un système de notifications internes pour alerter les commerciaux sur les actions importantes (ex. : commande en retard, prospect non contacté).',
  'Permettre de générer des rapports personnalisés (ex. : liste des pharmacies converties sur une période donnée).',
  'Permettre aux administrateurs de suivre les connexions et activités des utilisateurs du CRM (audit trail).',
  'Permettre l\'import et l\'export de données sous forme de fichiers CSV (pharmacies, commandes).',
  'Proposer une interface de gestion des zones de prospection, avec possibilité d\'affecter des pharmacies à un commercial.',
  'Permettre d\'associer des fichiers (contrats, documents réglementaires) aux pharmacies pour un suivi administratif.',
  'Récupérer automatiquement les coordonnées GPS des pharmacies en utilisant une API en ligne, et les enregistrer dans la base de données.',
]

const techStack = [
  { label: 'Frontend', value: 'Vue.js 3 avec Inertia.js' },
  { label: 'Backend', value: 'Laravel 12' },
  { label: 'Base de données', value: 'MySQL' },
  { label: 'Cartographie', value: 'Leaflet.js avec intégration OpenStreetMap' },
  { label: 'Authentification', value: 'Laravel Breeze' },
]

const challenges = [
  { label: 'Carte interactive', desc: 'Avoir une carte interactive avec des filtres par région' },
  { label: 'Dynamisation des pharmacies', desc: 'Rendre le statut des pharmacies dynamique en fonction des commandes' },
  { label: 'Notifications', desc: 'Mettre en place une gestion des notifications internes' },
]

export default function NaturaCorp() {
  return (
    <main className="mt-16 py-12">
      <div className="w-[min(90%,900px)] mx-auto px-4">
        <Link to="/#projects">
          <Button variant="ghost" className="mb-6 gap-2 text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Retour aux projets
          </Button>
        </Link>

        <h1 className="text-4xl font-bold font-heading text-primary mb-2">NaturaCorp</h1>
        <div className="w-20 h-1 bg-secondary mb-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-4">Contexte du projet</h2>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">NaturaCorp</strong> est un projet visant à développer un site vitrine ainsi qu'un CRM pour
            l'entreprise du même nom. NaturaCorp est une startup fondée par Benjamin DUFOUR (ingénieur agronome) et Hannah COSTA
            (consultante en communication). L'objectif de l'entreprise est de commercialiser un complément alimentaire
            à base d'extrait d'un champignon japonais. Le site vitrine a pour but de présenter l'entreprise, ses valeurs
            et son produit, tandis que le CRM est destiné à gérer la distribution auprès des clients, le suivi des
            commandes et l'ensemble des activités commerciales.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-2">Galerie du Projet</h2>
          <GalleryWithLightbox images={galleryImages} />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-4">Fonctionnalités principales</h2>
          <ul className="space-y-2 list-disc list-inside">
            {mainFeatures.map((f, i) => (
              <li key={i} className="text-muted-foreground">{f}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-4">Fonctionnalités secondaires</h2>
          <ul className="space-y-2 list-disc list-inside">
            {secondaryFeatures.map((f, i) => (
              <li key={i} className="text-muted-foreground">{f}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-4">Technologies utilisées</h2>
          <ul className="space-y-2">
            {techStack.map((t) => (
              <li key={t.label} className="text-muted-foreground text-sm">
                <strong className="text-foreground">{t.label} :</strong> {t.value}
              </li>
            ))}
          </ul>
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
