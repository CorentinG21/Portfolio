import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="bg-card py-20">
      <div className="w-[min(90%,1200px)] mx-auto px-4">
        <div className="mb-12">
          <h2 className="section-title">Mes Projets</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.route}
              to={project.route}
              className="group relative bg-background rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image avec overlay */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-2 text-white font-semibold text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                    Voir le projet <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold font-heading text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{project.description}</p>
                <div className="mt-4 flex items-center gap-1 text-secondary text-xs font-semibold">
                  Découvrir <ArrowUpRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
