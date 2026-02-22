import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Github, Linkedin, Instagram, Send } from 'lucide-react'

const FORMSPREE_URL = 'https://formspree.io/f/xyzerkzk'

const contactInfo = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'corentin-godon',
    href: 'https://www.linkedin.com/in/corentin-godon/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'CorentinG21',
    href: 'https://github.com/CorentinG21',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@corentin._.gdn',
    href: 'https://www.instagram.com/corentin._.gdn/',
  },
]

export default function Contact() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    const data = new FormData(e.target)
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (response.ok) {
        navigate('/merci')
      } else {
        setError('Une erreur est survenue. Veuillez réessayer.')
      }
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-card py-20">
      <div className="w-[min(90%,1200px)] mx-auto px-4">
        <div className="mb-12">
          <h2 className="section-title">Contactez-moi</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Infos contact */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-lg font-bold font-heading text-foreground mb-2">Discutons ensemble !</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Vous avez un projet, une opportunité ou simplement envie d'échanger ?
                N'hésitez pas à me contacter, je réponds rapidement.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-background hover:bg-secondary/5 border border-border/50 hover:border-secondary/30 group transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors flex-shrink-0">
                    <Icon className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-sm font-medium text-foreground">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-3 bg-background rounded-2xl p-6 border border-border/50 shadow-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="name" className="text-sm font-medium">Nom</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Votre nom"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="votre@email.com"
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Décrivez votre projet ou votre demande..."
                  className="rounded-xl resize-none"
                />
              </div>

              {error && <p className="text-destructive text-sm">{error}</p>}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-xl h-11 gap-2"
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
