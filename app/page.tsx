import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Education } from '@/components/education'
import { Skills } from '@/components/skills'
import { Experience } from '@/components/experience'
import { Services } from '@/components/services'
import { Projects } from '@/components/projects'
import { Achievements } from '@/components/achievements'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Services />
      <Projects />
      <Achievements />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
