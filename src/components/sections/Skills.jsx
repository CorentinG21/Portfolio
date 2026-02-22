import { skills } from '@/data/portfolioData'

const accentColors = [
  'from-blue-500 to-cyan-400',
  'from-violet-500 to-purple-400',
  'from-amber-500 to-orange-400',
  'from-emerald-500 to-teal-400',
  'from-rose-500 to-pink-400',
  'from-indigo-500 to-blue-400',
  'from-fuchsia-500 to-pink-400',
  'from-cyan-500 to-sky-400',
]

export default function Skills() {
  return (
    <section id="skills" className="bg-background py-20">
      <div className="w-[min(90%,1200px)] mx-auto px-4">
        <div className="mb-12">
          <h2 className="section-title">Mes Compétences</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              {/* Barre gradient en haut */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${accentColors[i % accentColors.length]}`} />

              <div className="p-6 text-center">
                {/* Icône dans une bulle */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${accentColors[i % accentColors.length]} mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{skill.icon}</span>
                </div>

                <h3 className="text-base font-bold font-heading text-foreground mb-2">{skill.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
