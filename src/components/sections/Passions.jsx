import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { passions } from '@/data/portfolioData'

export default function Passions() {
  return (
    <section id="passion" className="bg-background py-20">
      <div className="w-[min(90%,1200px)] mx-auto px-4">
        <div className="mb-12">
          <h2 className="section-title">Mes Passions</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {passions.map((passion) => (
            <Link
              key={passion.route}
              to={passion.route}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image avec overlay */}
              <div className="relative h-56 overflow-hidden bg-muted">
                <img
                  src={passion.image}
                  alt={passion.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-2 text-white font-semibold text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                    En savoir plus <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1 text-center">
                <h3 className="text-base font-bold font-heading text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {passion.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{passion.description}</p>
                <div className="mt-4 flex items-center gap-1 text-secondary text-xs font-semibold justify-center">
                  Explorer <ArrowUpRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
