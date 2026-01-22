import Hero from '@/components/Hero'
import Section from '@/components/Section'

export default function Services() {
  const services = [
    {
      title: 'Mining Operations Management',
      description: 'Comprehensive management of mining operations including planning, execution, and optimization. Our experienced teams ensure efficient resource extraction while maintaining the highest safety and environmental standards.',
    },
    {
      title: 'Exploration & Development',
      description: 'Advanced geological exploration services using cutting-edge technology to identify and assess mineral deposits. We provide complete development planning from discovery to production.',
    },
    {
      title: 'Equipment & Machinery',
      description: 'Supply and maintenance of state-of-the-art mining equipment including excavators, drills, haul trucks, and processing machinery. We offer both sales and rental options.',
    },
    {
      title: 'Processing & Refinement',
      description: 'Expert mineral processing and refinement services to maximize value from extracted materials. Our facilities utilize advanced technologies for efficient processing.',
    },
    {
      title: 'Safety & Compliance',
      description: 'Comprehensive safety management systems and regulatory compliance services. We ensure all operations meet or exceed industry standards and local regulations.',
    },
    {
      title: 'Environmental Management',
      description: 'Sustainable mining practices including land reclamation, water management, and environmental monitoring. We are committed to minimizing environmental impact.',
    },
    {
      title: 'Technical Consulting',
      description: 'Strategic consulting services to optimize operations, improve efficiency, and solve complex technical challenges. Our experts provide actionable insights.',
    },
    {
      title: 'Training & Development',
      description: 'Comprehensive training programs for mining personnel covering safety, operations, and best practices. We invest in building skilled, knowledgeable teams.',
    },
  ]

  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Comprehensive Mining Solutions"
        backgroundImage="/Images/image3.jpg"
      />

      <Section className="bg-dark-bg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Complete Mining Solutions
          </h2>
          <p className="text-accent-muted text-lg max-w-2xl mx-auto">
            From exploration to extraction, processing to distribution, we offer end-to-end services 
            that cover every aspect of mining operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-dark-card p-8 rounded-lg hover:bg-dark-card/80 transition-colors border border-dark-card hover:border-accent/20"
            >
              <h3 className="text-2xl font-semibold text-accent mb-4">{service.title}</h3>
              <p className="text-accent-muted leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-dark-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-accent-muted text-lg mb-8">
            Contact us today to discuss how our services can support your mining operations.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-dark-bg font-semibold rounded hover:bg-accent-muted transition-colors"
          >
            Contact Us
          </a>
        </div>
      </Section>
    </>
  )
}
