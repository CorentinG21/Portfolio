import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Moon, Sun } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useDarkMode } from '@/hooks/useDarkMode'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'À propos', href: '/#about' },
  { label: 'Compétences', href: '/#skills' },
  { label: 'Scolarité', href: '/#education' },
  { label: 'Expérience', href: '/#experience' },
  { label: 'Projets', href: '/#projects' },
  { label: 'Passions', href: '/#passion' },
  { label: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [isDark, setIsDark] = useDarkMode()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleNavClick(href, e) {
    setMobileOpen(false)
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') return
      e.preventDefault()
      const id = href.slice(2)
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-primary py-4'
      )}
    >
      <div className="w-[min(90%,1200px)] mx-auto px-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-extrabold font-heading text-primary-foreground tracking-tight hover:opacity-80 transition-opacity"
        >
          Corentin<span className="text-secondary"> GODON</span>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(item.href, e)}
              className="px-3 py-1.5 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground rounded-md hover:bg-white/10 transition-all duration-200"
            >
              {item.label}
            </a>
          ))}

          <div className="flex items-center gap-1.5 ml-3 pl-3 border-l border-primary-foreground/20">
            <Sun className="h-3.5 w-3.5 text-primary-foreground/60" />
            <Switch
              checked={isDark}
              onCheckedChange={setIsDark}
              aria-label="Basculer le mode sombre"
              className="scale-90"
            />
            <Moon className="h-3.5 w-3.5 text-primary-foreground/60" />
          </div>
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-3 lg:hidden">
          <div className="flex items-center gap-1">
            <Sun className="h-3.5 w-3.5 text-primary-foreground/60" />
            <Switch checked={isDark} onCheckedChange={setIsDark} className="scale-90" />
            <Moon className="h-3.5 w-3.5 text-primary-foreground/60" />
          </div>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 rounded-lg text-primary-foreground hover:bg-white/10 transition-colors"
                aria-label="Ouvrir le menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-primary text-primary-foreground border-none w-72 pt-16"
            >
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className="px-4 py-3 text-base font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10 rounded-lg transition-all"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
