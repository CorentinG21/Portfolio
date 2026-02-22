import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CheckCircle2, ArrowLeft } from 'lucide-react'

export default function Merci() {
  return (
    <main className="mt-16 min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-card via-background to-card px-4">
      {/* Décorations background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative text-center max-w-md w-full">
        <div className="bg-card rounded-3xl shadow-2xl border border-border/50 p-10">
          {/* Icône avec halo */}
          <div className="relative inline-flex mb-6">
            <div className="absolute inset-0 rounded-full bg-secondary/20 blur-xl scale-150" />
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shadow-lg shadow-secondary/30">
              <CheckCircle2 className="h-10 w-10 text-white" />
            </div>
          </div>

          <h1 className="text-4xl font-extrabold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
            Merci !
          </h1>
          <p className="text-foreground font-medium mb-2">Votre message a bien été envoyé.</p>
          <p className="text-muted-foreground text-sm mb-8">Je vous répondrai dans les plus brefs délais.</p>

          <Link to="/">
            <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-xl h-11 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
