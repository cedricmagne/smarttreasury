import CoreFeatures from '@/components/landing/CoreFeature'
import EarlyAccess from '@/components/landing/EarlyAccess'
import Footer from '@/components/landing/Footer'
import Hero from '@/components/landing/Hero'
import ProductSection from '@/components/landing/ProductSection'
import SiteNav from '@/components/landing/SiteNav'
import StellarSection from '@/components/landing/StellarSection'
import UseCases from '@/components/landing/UseCases'
import WorkflowSection from '@/components/landing/WorkflowSection'

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteNav />
      <Hero />
      <ProductSection />
      <WorkflowSection />
      <CoreFeatures />
      <UseCases />
      <StellarSection />
      <EarlyAccess />
      <Footer />
    </main>
  )
}
