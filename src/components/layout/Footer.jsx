import { Github, Linkedin, Instagram, Heart } from 'lucide-react'

const links = [
  { href: 'https://www.linkedin.com/in/corentin-godon/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://github.com/CorentinG21', icon: Github, label: 'GitHub' },
  { href: 'https://www.instagram.com/corentin._.gdn/', icon: Instagram, label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
      <div className="w-[min(90%,1200px)] mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          <div className="text-center sm:text-left">
            <p className="font-extrabold font-heading text-lg">
              Corentin<span className="text-secondary"> GODON</span>
            </p>
            <p className="text-primary-foreground/50 text-xs mt-0.5">Développeur Web Full-Stack</p>
          </div>

          <div className="flex items-center gap-2">
            {links.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-white text-primary-foreground/70 transition-all duration-200"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <p className="text-primary-foreground/40 text-xs flex items-center gap-1">
            &copy; {new Date().getFullYear()} — Fait avec <Heart className="h-3 w-3 text-accent fill-accent" />
          </p>
        </div>
      </div>
    </footer>
  )
}
