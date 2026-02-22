import { GraduationCap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { education } from '@/data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="bg-card py-20">
      <div className="w-[min(90%,1200px)] mx-auto px-4">
        <div className="mb-12">
          <h2 className="section-title">Mon Parcours Académique</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <div
              key={edu.years}
              className="group relative bg-background rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              {/* Header coloré */}
              <div className="relative bg-gradient-to-br from-primary to-primary/80 p-5 flex items-center justify-between">
                <div>
                  <span className="text-primary-foreground/60 text-xs font-medium uppercase tracking-widest">
                    Période
                  </span>
                  <p className="text-primary-foreground font-extrabold text-xl font-heading">{edu.years}</p>
                </div>
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <img
                    src={edu.logo}
                    alt={edu.logoAlt}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                {/* Numéro discret */}
                <span className="absolute top-2 right-2 text-primary-foreground/10 text-5xl font-black font-heading select-none">
                  0{i + 1}
                </span>
              </div>

              {/* Corps */}
              <div className="p-5">
                <div className="flex items-start gap-2 mb-1">
                  <GraduationCap className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <h4 className="font-bold text-foreground text-sm leading-snug">{edu.degree}</h4>
                </div>
                <p className="text-secondary text-xs font-medium italic mb-3 pl-6">{edu.institution}</p>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">{edu.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.skills.map((s) => (
                    <Badge
                      key={s}
                      className="text-[10px] px-2 py-0.5 bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20"
                    >
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
