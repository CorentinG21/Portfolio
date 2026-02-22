import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Education from '@/components/sections/Education'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Passions from '@/components/sections/Passions'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Passions />
      <Contact />
    </main>
  )
}
