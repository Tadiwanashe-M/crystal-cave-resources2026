import Hero from '@/components/Hero'
import Section from '@/components/Section'

export default function Services() {
  const services = [
    {
      title: 'Geological & Resource Services',
      description:
        'End-to-end geological and resource solutions including exploration planning, geological mapping, core logging, sampling, drilling supervision, orebody and geological modelling, mineral resource estimation, and prefeasibility/feasibility study support.',
    },
    {
      title: 'Environmental, Social & Regulatory (ESG)',
      description:
        'Comprehensive ESG services including EIAs, EMPrs, mining and prospecting rights applications, IWULA/water use licences, public participation and stakeholder engagement, environmental auditing and compliance monitoring, ISO 14001:2015 audits, and social impact assessments.',
    },
    {
      title: 'Rock Engineering',
      description:
        'Rock engineering support comprising weekly, monthly, and quarterly inspections, incident and accident investigations, monthly planning and design input, and risk assessments to ensure safe, compliant operations.',
    },
    {
      title: 'Mine Planning',
      description:
        'Life-of-Mine (LoM) planning services across short, medium, and long-term horizons, including open-pit and underground mine design and optimisation, production scheduling, and ore blending strategies.',
    },
    {
      title: 'Water, Tailings & Geotechnical Services',
      description:
        'Hydrogeological investigations, hydrology and surface water studies, water balance modelling and water management plans, TSF design and audits, GISTM conformance, geotechnical investigations, problem soil assessments, and dam safety reviews and rehabilitation.',
    },
    {
      title: 'Rehabilitation, Closure & Sustainability',
      description:
        'Mine rehabilitation planning and optimisation, closure planning and costing, long-term erosion and land-use modelling, wetland delineation and rehabilitation, contaminated land assessments, and environmental risk reduction strategies.',
    },
    {
      title: 'Digital Innovation & 4IR Solutions',
      description:
        'Digital and 4IR solutions including GIS mapping and spatial analysis, 3D geological models and digital twins, VR training environments, simulation of mining operations and process flows, and digital risk and scenario analysis.',
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
            Core Service Lines
          </h2>
          <p className="text-accent-muted text-lg max-w-2xl mx-auto">
            CCR provides integrated, bankable technical and ESG solutions across geological, environmental,
            engineering, planning, and digital domains – supporting clients from exploration through to closure.
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
