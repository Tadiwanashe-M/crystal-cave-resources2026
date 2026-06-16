import Hero from '@/components/Hero'
import Section from '@/components/Section'
import SectionHeading from '@/components/SectionHeading'
import StatsBar from '@/components/StatsBar'
import CTASection from '@/components/CTASection'
import Link from 'next/link'

export default function Home() {
  const stats = [
    { value: '4+', label: 'Regional Offices', description: 'Strategic mining corridor presence' },
    { value: '7', label: 'Core Service Lines', description: 'Integrated technical & ESG solutions' },
    { value: '100%', label: 'ESG Aligned', description: 'International standards compliance' },
    { value: '2024', label: 'Established', description: 'Built for Africa\'s mining future' },
  ]

  const services = [
    {
      title: 'Geological & Resource Services',
      description:
        'Exploration planning, geological modelling, resource estimation, and feasibility study support.',
    },
    {
      title: 'Environmental & Regulatory (ESG)',
      description:
        'EIAs, mining rights applications, compliance monitoring, and stakeholder engagement.',
    },
    {
      title: 'Digital Innovation & 4IR',
      description:
        'GIS mapping, 3D geological models, digital twins, and VR training environments.',
    },
  ]

  const sectors = [
    {
      title: 'Energy Minerals',
      description: 'Coal, uranium, and energy-critical minerals extraction and processing.',
    },
    {
      title: 'Industrial Minerals',
      description: 'Limestone, gypsum, salt, and essential industrial mineral resources.',
    },
    {
      title: 'Metals & Precious Metals',
      description: 'Gold, platinum, chrome, copper, and base-metal operations.',
    },
  ]

  const differentiators = [
    {
      title: 'Integrated Delivery',
      description:
        'End-to-end technical, regulatory, ESG, and digital advisory under one roof — reducing complexity for clients.',
    },
    {
      title: 'Mining Corridor Presence',
      description:
        'Offices in Potchefstroom, Klerksdorp, Rustenburg, and Kuruman place us at the heart of South Africa\'s most productive mining regions.',
    },
    {
      title: 'Bankable Solutions',
      description:
        'Every deliverable is designed to meet international standards and financier requirements — from juniors to Tier-1 operators.',
    },
    {
      title: 'Pan-African Vision',
      description:
        'Built in South Africa with a deliberate strategy for broader African expansion and strategic partnerships.',
    },
  ]

  return (
    <>
      <Hero
        title="Crystal Cave Resources"
        subtitle="Integrated mining, geo-services, and ESG solutions — delivering bankable excellence across the full mining life cycle."
        eyebrow="South Africa · Pan-African Ambition"
        backgroundImage="/Images/image1.jpg"
        primaryCta={{ label: 'Explore Our Services', href: '/services' }}
        secondaryCta={{ label: 'Partner With Us', href: '/sponsors' }}
      />

      <div className="relative -mt-16 z-10 pb-4">
        <StatsBar stats={stats} />
      </div>

      <Section className="bg-dark-bg">
        <SectionHeading
          eyebrow="Who We Are"
          title="A Trusted Partner in Resource Development"
          subtitle="Crystal Cave Resources (Pty) Ltd (CCR) is an integrated mining, geo-services, and environmental consulting company providing end-to-end technical, ESG, and digital advisory solutions. Headquartered in Potchefstroom with operational offices across South Africa's premier mining corridors."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => (
            <div key={index} className="card-premium">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                <span className="text-gold font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-xl font-semibold text-accent mb-3">{item.title}</h3>
              <p className="text-accent-muted leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-dark-surface">
        <SectionHeading
          eyebrow="What We Do"
          title="Comprehensive Mining Solutions"
          subtitle="Integrated service lines spanning geological, environmental, engineering, planning, and digital domains."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-premium">
              <h3 className="text-xl font-semibold text-accent mb-3">{service.title}</h3>
              <p className="text-accent-muted leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </Section>

      <Section className="bg-dark-bg">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Mining Sectors"
          subtitle="Specialised expertise across diverse mineral categories and operational contexts."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div key={index} className="card-premium">
              <h3 className="text-xl font-semibold text-accent mb-3">{sector.title}</h3>
              <p className="text-accent-muted">{sector.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/sectors" className="btn-secondary">
            Explore All Sectors
          </Link>
        </div>
      </Section>

      <Section className="bg-dark-surface">
        <CTASection
          eyebrow="Growth & Partnership"
          title="Join Us in Shaping Africa's Mining Future"
          description="CCR is actively seeking strategic sponsors and investment partners who share our vision for sustainable, bankable resource development. Partner with a firm positioned at the intersection of technical excellence, ESG leadership, and continental growth."
          primaryCta={{ label: 'Explore Partnership Opportunities', href: '/sponsors' }}
          secondaryCta={{ label: 'Contact Our Team', href: '/contact' }}
          variant="gold"
        />
      </Section>
    </>
  )
}
