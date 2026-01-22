import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero
        title="Crystal Cave Resources"
        subtitle="Excellence in Mining Solutions"
        backgroundImage="/Images/image1.jpg"
      />

      <Section className="bg-dark-bg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
            Leading Mining Solutions Provider
          </h2>
          <p className="text-lg text-accent-muted leading-relaxed">
            Crystal Cave Resources is a premier mining solutions company dedicated to delivering 
            excellence across all aspects of mining operations. With decades of combined experience, 
            we provide comprehensive services that drive efficiency, safety, and sustainability in 
            the mining industry.
          </p>
        </div>
      </Section>

      <Section className="bg-dark-surface">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Our Services</h2>
          <p className="text-accent-muted text-lg">Comprehensive mining solutions tailored to your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Mining Operations',
              description: 'Expert management and execution of mining operations with focus on safety and efficiency.',
            },
            {
              title: 'Equipment & Technology',
              description: 'State-of-the-art mining equipment and cutting-edge technology solutions.',
            },
            {
              title: 'Consulting Services',
              description: 'Strategic consulting to optimize your mining operations and maximize productivity.',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-dark-card p-6 rounded-lg hover:bg-dark-card/80 transition-colors border border-dark-card hover:border-accent/20"
            >
              <h3 className="text-xl font-semibold text-accent mb-3">{service.title}</h3>
              <p className="text-accent-muted">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block px-8 py-3 bg-accent text-dark-bg font-semibold rounded hover:bg-accent-muted transition-colors"
          >
            View All Services
          </Link>
        </div>
      </Section>

      <Section className="bg-dark-bg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Mining Sectors</h2>
          <p className="text-accent-muted text-lg">Serving diverse industries with specialized expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Energy Minerals',
              description: 'Coal, uranium, and other energy-critical minerals extraction and processing.',
            },
            {
              title: 'Industrial Minerals',
              description: 'Limestone, gypsum, salt, and other essential industrial mineral resources.',
            },
            {
              title: 'Metals & Precious Metals',
              description: 'Gold, silver, copper, iron ore, and other valuable metal extraction.',
            },
          ].map((sector, index) => (
            <div
              key={index}
              className="bg-dark-card p-6 rounded-lg hover:bg-dark-card/80 transition-colors border border-dark-card hover:border-accent/20"
            >
              <h3 className="text-xl font-semibold text-accent mb-3">{sector.title}</h3>
              <p className="text-accent-muted">{sector.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/sectors"
            className="inline-block px-8 py-3 bg-accent text-dark-bg font-semibold rounded hover:bg-accent-muted transition-colors"
          >
            Explore All Sectors
          </Link>
        </div>
      </Section>
    </>
  )
}
