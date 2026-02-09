import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <Hero
        title="About Crystal Cave Resources"
        subtitle="Excellence in Mining Since Our Inception"
        backgroundImage="/Images/image6.jpeg"
      />

      <Section className="bg-dark-bg">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 rounded-lg overflow-hidden">
            <Image
              src="/Images/image2.jpg"
              alt="Mining Operations"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-8">Company Overview</h2>
          <div className="space-y-6 text-accent-muted text-lg leading-relaxed">
            <p>
              Crystal Cave Resources (Pty) Ltd ("CCR") is a multidisciplinary consulting firm providing
              integrated mining, geo-services, environmental, social, and digital advisory solutions to the
              mining, energy, infrastructure, financial, and public sectors. Established in 2024, CCR operates
              across the full mining life cycle – from exploration and feasibility through operations,
              rehabilitation, and closure.
            </p>
            <p>
              Registered as Crystal Cave Resources (Pty) Ltd and trading as Crystal Cave Resources (CCR), the
              company is headquartered in Potchefstroom, North-West Province, with operational offices in
              Klerksdorp, Rustenburg, and Kuruman. This strategic presence within South Africa’s most
              productive mining corridors enables close proximity to platinum, gold, chrome, and base-metal
              operations while serving national clients and preparing for broader Pan-African expansion.
            </p>
            <p>
              CCR delivers bankable, ESG-aligned solutions that meet international standards, addressing both
              the technical and regulatory requirements of mining projects. We are particularly focused on
              supporting Small, Medium and Mid-Tier Mining Companies (SMMEs and juniors), while remaining fully
              capable of servicing Tier-1 mining houses, governments, financiers, and international partners.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-dark-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-8">Vision & Mission</h2>
          <div className="space-y-6 text-accent-muted text-lg leading-relaxed mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-accent mb-2">Vision</h3>
              <p>
                To establish a premier, globally respected consulting firm delivering integrated geo-services
                and mining solutions that set new benchmarks for technical excellence, ESG performance, and
                innovation across Africa and emerging markets.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-accent mb-2">Mission</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Deliver efficient, high-quality, and bankable technical solutions using best-in-class
                  technologies and methodologies.
                </li>
                <li>
                  Provide consistently satisfactory services aligned with international standards and client
                  expectations.
                </li>
                <li>
                  Build strategic partnerships with mining companies, governments, financiers, and EPC firms to
                  unlock sustainable resource development.
                </li>
                <li>
                  Contribute meaningfully to youth employment, skills transfer, and transformation.
                </li>
                <li>
                  Create long-term shareholder value through advisory excellence and strategic participation in
                  mining-related investments.
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-dark-card p-6 rounded-lg border border-dark-card">
              <h3 className="text-xl font-semibold text-accent mb-4">Safety First</h3>
              <p className="text-accent-muted">
                We prioritize the safety and well-being of our employees, partners, and communities 
                above all else. Every operation is conducted with rigorous safety protocols and 
                continuous improvement.
              </p>
            </div>

            <div className="bg-dark-card p-6 rounded-lg border border-dark-card">
              <h3 className="text-xl font-semibold text-accent mb-4">Innovation</h3>
              <p className="text-accent-muted">
                We embrace cutting-edge technology and innovative methodologies to enhance efficiency, 
                reduce environmental impact, and deliver superior results.
              </p>
            </div>

            <div className="bg-dark-card p-6 rounded-lg border border-dark-card">
              <h3 className="text-xl font-semibold text-accent mb-4">Sustainability</h3>
              <p className="text-accent-muted">
                We are committed to responsible mining practices that protect the environment and 
                create lasting positive impacts for future generations.
              </p>
            </div>

            <div className="bg-dark-card p-6 rounded-lg border border-dark-card">
              <h3 className="text-xl font-semibold text-accent mb-4">Excellence</h3>
              <p className="text-accent-muted">
                We strive for excellence in every aspect of our operations, from project planning 
                to execution and beyond, ensuring the highest quality standards.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-dark-bg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-8">Why Choose CCR?</h2>
          <div className="space-y-6 text-accent-muted text-lg leading-relaxed">
            <p>
              CCR addresses a critical structural gap in the mining sector: the lack of integrated, execution-focused
              technical, regulatory, ESG, and project delivery support for junior miners, exploration companies, and
              emerging operators seeking to become bankable, compliant, and operationally efficient enterprises.
            </p>
            <p>
              With our headquarters in Potchefstroom and operational offices in Klerksdorp, Rustenburg, and Kuruman,
              we are strategically embedded within South Africa’s most productive mining corridors. This ensures rapid
              response, strong local insight, and cost-efficient delivery for clients across South Africa and, in time,
              the broader African continent.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
