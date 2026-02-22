import { useState } from 'react'
import { ChevronLeft, ChevronRight, Github, Linkedin, Instagram, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { profileImages } from '@/data/portfolioData'

const techTags = ['Laravel', 'Flutter', 'React', 'JavaScript', 'SQL', 'PHP']

const socialLinks = [
  { href: 'https://www.linkedin.com/in/corentin-godon/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://github.com/CorentinG21', icon: Github, label: 'GitHub' },
  { href: 'https://www.instagram.com/corentin._.gdn/', icon: Instagram, label: 'Instagram' },
]

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0)

  function prev() {
    setActiveIndex((i) => (i - 1 + profileImages.length) % profileImages.length)
  }
  function next() {
    setActiveIndex((i) => (i + 1) % profileImages.length)
  }

  return (
    <section
      id="about"
      className="relative min-h-[calc(100vh-4rem)] mt-16 flex items-center overflow-hidden bg-gradient-to-br from-card via-background to-card"
    >
      {/* Décoration background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative w-[min(90%,1200px)] mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* Photo + carrousel */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative">
              {/* Ring décoratif */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-secondary to-accent opacity-20 blur-sm" />
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-secondary/20">
                {profileImages.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      i === activeIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}

                <button
                  onClick={prev}
                  aria-label="Image précédente"
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-accent/80 transition-colors backdrop-blur-sm"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Image suivante"
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-accent/80 transition-colors backdrop-blur-sm"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {profileImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`transition-all duration-300 rounded-full ${
                        i === activeIndex
                          ? 'w-5 h-2 bg-white'
                          : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Texte */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3 flex items-center gap-2 justify-center md:justify-start">
              <Code2 className="h-4 w-4" />
              Développeur Web
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading leading-tight mb-5">
              Salut, je suis{' '}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Corentin GODON
              </span>
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-4 max-w-xl">
              Développeur web passionné et actuellement étudiant, j'ai développé des applications web avec
              Laravel, Flutter et d'autres frameworks modernes. CRM, e-commerce, outils métiers — je veille
              toujours à la qualité du code, à l'ergonomie et à la performance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl">
              En dehors du développement, je suis passionné de jeux vidéo et d'E-sport.
            </p>

            {/* Tags tech */}
            <div className="flex flex-wrap gap-2 mb-7 justify-center md:justify-start">
              {techTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="px-3 py-1 text-xs font-semibold bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20 transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Liens sociaux + CTA */}
            <div className="flex items-center gap-3 justify-center md:justify-start flex-wrap">
              <a href="#contact" onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}>
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-6">
                  Me contacter
                </Button>
              </a>
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-secondary hover:text-white text-muted-foreground transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
