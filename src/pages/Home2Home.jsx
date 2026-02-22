import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  { label: 'Dépôt de colis', desc: 'formulaire en plusieurs étapes avec génération automatique de QR codes' },
  { label: 'Recherche de trajets', desc: 'affichage des trajets disponibles pour les voyageurs' },
  { label: 'Prise en charge de colis', desc: 'système de scan de QR code pour validation' },
  { label: 'Suivi des colis', desc: 'état en temps réel (déposé, en transit, livré)' },
  { label: 'Interface utilisateur claire', desc: 'navigation fluide, design responsive' },
]

const techStack = [
  { label: 'Backend', value: 'Laravel 12' },
  { label: 'Frontend', value: 'Flutter' },
  { label: 'Base de données', value: 'MySQL' },
  { label: 'Authentification', value: 'Laravel Breeze' },
  { label: 'QR code', value: 'Génération automatique avec une librairie Laravel' },
  { label: 'Outils', value: 'Git, GitHub, Notion' },
]

const challenges = [
  { label: 'Synchronisation des étapes', desc: 'gérer les statuts du colis entre utilisateurs' },
  { label: 'Conception de l\'expérience utilisateur', desc: 'simplification du dépôt/scan/prise en charge' },
  { label: 'Développement Flutter', desc: 'prise en main d\'un nouveau framework mobile' },
  { label: 'Connexion API ferroviaire', desc: 'pour lister les trajets réels (intégration prévue)' },
]

export default function Home2Home() {
  return (
    <main className="mt-16 py-12">
      <div className="w-[min(90%,900px)] mx-auto px-4">
        <Link to="/#projects">
          <Button variant="ghost" className="mb-6 gap-2 text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Retour aux projets
          </Button>
        </Link>

        <h1 className="text-4xl font-bold font-heading text-primary mb-2">Home2Home</h1>
        <div className="w-20 h-1 bg-secondary mb-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-4">Contexte du projet</h2>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Home2Home</strong> est une application web mobile développée dans le cadre de mon stage. Elle
            propose un service de livraison de colis entre particuliers en s'appuyant sur les trajets ferroviaires
            existants. L'objectif est de permettre à des voyageurs de transporter des colis d'un point A à un point
            B en échange d'une compensation, tout en assurant un suivi sécurisé.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-4">Galerie du Projet</h2>
          <p className="text-muted-foreground italic">
            La galerie sera bientôt disponible. Le projet est actuellement en cours de finalisation et n'a pas encore été déployé.
          </p>
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
