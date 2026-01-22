import Hero from '@/components/Hero'
import Section from '@/components/Section'

export default function Sectors() {
  const sectors = [
    {
      title: 'Energy Minerals',
      description: 'We specialize in the extraction and processing of energy-critical minerals including coal, uranium, and oil sands. Our expertise ensures efficient operations while maintaining environmental responsibility.',
      details: [
        'Coal mining and processing',
        'Uranium extraction',
        'Oil sands operations',
        'Energy mineral logistics',
      ],
    },
    {
      title: 'Industrial Minerals',
      description: 'Providing essential industrial minerals for construction, manufacturing, and various industrial applications. We supply limestone, gypsum, salt, and other critical materials.',
      details: [
        'Limestone and aggregates',
        'Gypsum extraction',
        'Salt mining',
        'Industrial mineral processing',
      ],
    },
    {
      title: 'Metals & Precious Metals',
      description: 'Expert extraction and processing of valuable metals including gold, silver, copper, iron ore, and rare earth elements. We deliver high-quality metals to global markets.',
      details: [
        'Gold and silver mining',
        'Base metals (copper, zinc, lead)',
        'Iron ore operations',
        'Rare earth elements',
      ],
    },
    {
      title: 'Gemstones & Specialty Minerals',
      description: 'Specialized operations for gemstone and specialty mineral extraction. We handle delicate extraction processes with precision and care.',
      details: [
        'Diamond mining',
        'Gemstone extraction',
        'Specialty mineral processing',
        'Quality grading and sorting',
      ],
    },
  ]

  return (
    <>
      <Hero
        title="Mining Sectors"
        subtitle="Serving Diverse Industries"
        backgroundImage="/Images/image4.jpg"
      />

      <Section className="bg-dark-bg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Industry Expertise
          </h2>
          <p className="text-accent-muted text-lg max-w-2xl mx-auto">
            Our extensive experience spans multiple mining sectors, allowing us to provide 
            specialized solutions tailored to each industry's unique requirements.
          </p>
        </div>

        <div className="space-y-12">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="bg-dark-card p-8 rounded-lg border border-dark-card hover:border-accent/20 transition-colors"
            >
              <h3 className="text-3xl font-semibold text-accent mb-4">{sector.title}</h3>
              <p className="text-accent-muted text-lg mb-6 leading-relaxed">
                {sector.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sector.details.map((detail, detailIndex) => (
                  <div
                    key={detailIndex}
                    className="flex items-start space-x-3"
                  >
                    <span className="text-accent mt-1">•</span>
                    <span className="text-accent-muted">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-dark-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
            Cross-Sector Capabilities
          </h2>
          <p className="text-accent-muted text-lg leading-relaxed">
            While we specialize in specific sectors, our integrated approach allows us to leverage 
            expertise across industries. Our cross-sector capabilities enable us to provide innovative 
            solutions and best practices that benefit all our clients, regardless of their primary 
            mining focus.
          </p>
        </div>
      </Section>
    </>
  )
}
