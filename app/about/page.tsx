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
              Crystal Cave Resources has established itself as a leading force in the mining industry, 
              providing comprehensive solutions that span the entire mining lifecycle. Founded on principles 
              of excellence, safety, and sustainability, we have built a reputation for delivering results 
              that exceed expectations.
            </p>
            <p>
              Our team of experienced professionals brings together decades of industry knowledge, 
              cutting-edge technology, and innovative approaches to solve complex mining challenges. 
              We understand that every mining operation is unique, and we tailor our services to meet 
              the specific needs of each client.
            </p>
            <p>
              From exploration and extraction to processing and distribution, Crystal Cave Resources 
              offers end-to-end solutions that drive operational efficiency and maximize value for our 
              clients and stakeholders.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-dark-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-8">Our Mission</h2>
          <p className="text-accent-muted text-lg leading-relaxed mb-8">
            To be the world's most trusted mining solutions provider by delivering exceptional value, 
            maintaining the highest safety standards, and driving sustainable practices that benefit 
            our clients, communities, and the environment.
          </p>

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
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-8">Our Values</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Integrity',
                description: 'We conduct business with honesty, transparency, and ethical practices in all our dealings.',
              },
              {
                title: 'Collaboration',
                description: 'We believe in building strong partnerships with clients, suppliers, and communities.',
              },
              {
                title: 'Accountability',
                description: 'We take responsibility for our actions and deliver on our commitments.',
              },
              {
                title: 'Respect',
                description: 'We value diversity, treat everyone with dignity, and respect the environment we operate in.',
              },
            ].map((value, index) => (
              <div key={index} className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-xl font-semibold text-accent mb-2">{value.title}</h3>
                <p className="text-accent-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
