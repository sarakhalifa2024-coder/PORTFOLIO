import { Header } from '@/components/header'
import { Pricing } from '@/components/pricing'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
