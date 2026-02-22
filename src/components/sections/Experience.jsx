import { Badge } from '@/components/ui/badge'
import { Briefcase } from 'lucide-react'
import { experiences } from '@/data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="bg-background py-20">
      <div className="w-[min(90%,1200px)] mx-auto px-4">
        <div className="mb-12">
          <h2 className="section-title">Expériences Professionnelles</h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Ligne verticale */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary via-secondary/50 to-transparent md:-translate-x-px" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, index) => (
              <div
                key={exp.year + exp.company}
                className={`relative flex items-start md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot central */}
                <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 z-10 w-5 h-5 rounded-full bg-secondary border-4 border-background shadow-lg shadow-secondary/30" />

                {/* Spacer côté vide sur desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div
                  className={`ml-14 md:ml-0 w-full md:w-[calc(50%-2.5rem)] bg-card rounded-2xl p-5 shadow-sm border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                    index % 2 === 0 ? 'md:ml-10' : 'md:mr-10'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                      <Briefcase className="h-3 w-3" />
                      {exp.year}
                    </span>
                    <span className="text-secondary font-semibold text-sm">{exp.company}</span>
                  </div>

                  <h3 className="text-base font-bold font-heading text-foreground mb-2">{exp.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-3">{exp.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((tech) => (
                      <Badge
                        key={tech}
                        className="text-[10px] px-2 py-0.5 bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
