import Hero from '@/components/Hero'
import Section from '@/components/Section'

export default function SupplyChain() {
  const services = [
    {
      title: 'Procurement Services',
      description: 'Strategic procurement of mining equipment, materials, and supplies from trusted global suppliers. We leverage our extensive network to secure competitive pricing and ensure quality.',
      features: [
        'Equipment sourcing and procurement',
        'Material supply chain management',
        'Vendor relationship management',
        'Quality assurance and inspection',
      ],
    },
    {
      title: 'Logistics & Transportation',
      description: 'Efficient transportation and logistics solutions for mining operations. We manage complex supply chains to ensure timely delivery of materials and equipment.',
      features: [
        'Freight and transportation management',
        'Warehouse and storage solutions',
        'Route optimization',
        'Customs and regulatory compliance',
      ],
    },
    {
      title: 'Distribution Networks',
      description: 'Extensive distribution networks to deliver mined materials to processing facilities, refineries, and end markets efficiently and reliably.',
      features: [
        'Multi-modal transportation',
        'Distribution center management',
        'Inventory optimization',
        'Real-time tracking and monitoring',
      ],
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Data-driven supply chain optimization to reduce costs, improve efficiency, and enhance reliability across all operations.',
      features: [
        'Supply chain analytics',
        'Demand forecasting',
        'Cost optimization strategies',
        'Risk management and mitigation',
      ],
    },
  ]

  return (
    <>
      <Hero
        title="Supply Chain & Logistics"
        subtitle="Efficient End-to-End Solutions"
        backgroundImage="/Images/image5.jpg"
      />

      <Section className="bg-dark-bg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Integrated Supply Chain Solutions
          </h2>
          <p className="text-accent-muted text-lg max-w-2xl mx-auto">
            Our comprehensive supply chain and logistics services ensure seamless operations from 
            procurement to distribution, optimizing efficiency and reducing costs throughout the process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-dark-card p-8 rounded-lg border border-dark-card hover:border-accent/20 transition-colors"
            >
              <h3 className="text-2xl font-semibold text-accent mb-4">{service.title}</h3>
              <p className="text-accent-muted mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-accent-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-dark-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-8 text-center">
            Why Choose Our Supply Chain Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Global Network',
                description: 'Extensive network of suppliers, partners, and distribution centers worldwide.',
              },
              {
                title: 'Technology-Driven',
                description: 'Advanced systems and analytics for real-time visibility and optimization.',
              },
              {
                title: 'Reliability',
                description: 'Proven track record of on-time delivery and consistent service quality.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center"
              >
                <h3 className="text-xl font-semibold text-accent mb-3">{benefit.title}</h3>
                <p className="text-accent-muted">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-dark-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
            Streamline Your Operations
          </h2>
          <p className="text-accent-muted text-lg mb-8">
            Let us handle your supply chain and logistics needs so you can focus on core mining operations.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-dark-bg font-semibold rounded hover:bg-accent-muted transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </Section>
    </>
  )
}
