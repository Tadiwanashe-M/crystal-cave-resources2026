import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import SectionHeading from '@/components/SectionHeading'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Partners & Sponsors | Crystal Cave Resources',
  description:
    'Partner with Crystal Cave Resources. Explore strategic sponsorship and investment opportunities in integrated mining, geo-services, and ESG consulting across South Africa and Africa.',
}

export default function Sponsors() {
  const opportunityPoints = [
    {
      title: 'Structural Market Gap',
      description:
        'South Africa\'s junior and mid-tier mining sector lacks integrated, execution-focused technical and ESG support. CCR is purpose-built to fill this gap with bankable, compliant solutions.',
    },
    {
      title: 'Strategic Geographic Position',
      description:
        'With offices in Potchefstroom, Klerksdorp, Rustenburg, and Kuruman, CCR is embedded within the country\'s most productive platinum, gold, chrome, and base-metal corridors.',
    },
    {
      title: 'Full Life-Cycle Capability',
      description:
        'Seven integrated service lines — from geological exploration through environmental compliance, mine planning, and closure — create recurring revenue and deep client relationships.',
    },
    {
      title: 'Pan-African Expansion Pathway',
      description:
        'Our South African foundation is designed for scalable expansion across the continent, aligned with growing demand for ESG-compliant, technically rigorous mining advisory.',
    },
  ]

  const partnerBenefits = [
    {
      title: 'Brand Alignment & Visibility',
      description:
        'Associate your organisation with a forward-thinking mining consultancy committed to ESG excellence, transformation, and sustainable resource development.',
    },
    {
      title: 'Access to Mining Networks',
      description:
        'Gain visibility across CCR\'s client base spanning junior miners, exploration companies, SMMEs, and emerging operators across multiple mineral sectors.',
    },
    {
      title: 'ESG & Transformation Impact',
      description:
        'Support meaningful youth employment, skills transfer, and B-BBEE objectives while contributing to responsible mining practices across the region.',
    },
    {
      title: 'Strategic Co-Development',
      description:
        'Collaborate on digital innovation, 4IR solutions, and project delivery partnerships that create shared value and long-term commercial returns.',
    },
  ]

  const tiers = [
    {
      name: 'Strategic Partner',
      description:
        'For institutional investors, mining houses, and corporate sponsors seeking deep strategic alignment and co-development opportunities.',
      highlights: [
        'Board-level advisory engagement',
        'Priority access to new market entries',
        'Co-branded project initiatives',
        'Exclusive sector intelligence briefings',
      ],
    },
    {
      name: 'Growth Partner',
      description:
        'For organisations looking to support CCR\'s expansion while gaining meaningful brand presence and commercial collaboration.',
      highlights: [
        'Prominent brand placement across platforms',
        'Joint marketing and event participation',
        'Preferred supplier considerations',
        'Quarterly performance updates',
      ],
    },
    {
      name: 'Community Partner',
      description:
        'For businesses and organisations committed to supporting transformation, skills development, and community upliftment in mining regions.',
      highlights: [
        'Community programme co-sponsorship',
        'Skills development initiative branding',
        'Local enterprise development support',
        'Annual impact reporting',
      ],
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description:
        'We begin with a confidential discussion to understand your strategic objectives, investment criteria, and areas of mutual interest.',
    },
    {
      step: '02',
      title: 'Partnership Proposal',
      description:
        'Our leadership team prepares a tailored partnership framework outlining alignment opportunities, deliverables, and engagement terms.',
    },
    {
      step: '03',
      title: 'Due Diligence & Agreement',
      description:
        'Both parties conduct appropriate due diligence before formalising the partnership through a clear, professionally structured agreement.',
    },
    {
      step: '04',
      title: 'Activation & Review',
      description:
        'Partnership benefits are activated with defined milestones, regular reporting, and structured review cycles to ensure mutual value creation.',
    },
  ]

  return (
    <>
      <Hero
        title="Partners & Sponsors"
        subtitle="Building lasting partnerships for sustainable resource development across Africa."
        eyebrow="Strategic Investment Opportunity"
        backgroundImage="/Images/image3.jpg"
        primaryCta={{ label: 'Request a Partnership Brief', href: '#inquiry' }}
        secondaryCta={{ label: 'Learn About CCR', href: '/about' }}
        compact
      />

      <Section className="bg-dark-bg">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Our Invitation"
            title="Partner With Purpose"
            subtitle="Crystal Cave Resources is seeking strategic sponsors and investment partners who recognise the opportunity in Africa's evolving mining landscape — and who share our commitment to technical excellence, regulatory compliance, and sustainable development."
            centered
          />
          <div className="space-y-6 text-accent-muted text-lg leading-relaxed">
            <p>
              Established in 2024, CCR has been built on a clear thesis: the mining sector — particularly
              junior and mid-tier operators — requires an integrated partner capable of delivering geological,
              environmental, engineering, and digital solutions under one accountable roof. We are not merely
              seeking capital; we are seeking aligned partners who can contribute to our growth trajectory
              while benefiting from the commercial and reputational value of association with a firm positioned
              at the forefront of Africa's resource advisory sector.
            </p>
            <p>
              Whether you represent a mining house, financial institution, equipment supplier, technology
              provider, or development finance organisation, we welcome the opportunity to explore how a
              partnership with CCR can create measurable, long-term value for all stakeholders.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-dark-surface">
        <SectionHeading
          eyebrow="The Opportunity"
          title="Why Now, Why CCR"
          subtitle="A compelling combination of market positioning, integrated capability, and growth ambition."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {opportunityPoints.map((point, index) => (
            <div key={index} className="card-premium">
              <h3 className="text-xl font-semibold text-accent mb-3">{point.title}</h3>
              <p className="text-accent-muted leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-dark-bg">
        <SectionHeading
          eyebrow="Mutual Value"
          title="What Partners Gain"
          subtitle="Sponsorship and investment with CCR is structured around tangible, measurable benefits — not passive association."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnerBenefits.map((benefit, index) => (
            <div key={index} className="flex gap-5">
              <div className="shrink-0 w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-accent mb-2">{benefit.title}</h3>
                <p className="text-accent-muted leading-relaxed text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-dark-surface">
        <SectionHeading
          eyebrow="Partnership Framework"
          title="Engagement Tiers"
          subtitle="We offer flexible partnership structures designed to accommodate different strategic objectives and investment profiles. All tiers are negotiable and tailored to mutual requirements."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`card-premium flex flex-col ${
                index === 0 ? 'border-gold/30 ring-1 ring-gold/10' : ''
              }`}
            >
              {index === 0 && (
                <span className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-accent mb-3">{tier.name}</h3>
              <p className="text-accent-muted text-sm leading-relaxed mb-6">{tier.description}</p>
              <ul className="space-y-3 mt-auto">
                {tier.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-accent-muted">
                    <svg
                      className="w-4 h-4 text-gold shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-accent-muted text-sm mt-10 max-w-2xl mx-auto">
          Specific financial terms, equity arrangements, and sponsorship packages are discussed
          confidentially during the consultation phase. We do not publish fixed pricing — every
          partnership is bespoke.
        </p>
      </Section>

      <Section className="bg-dark-bg">
        <SectionHeading
          eyebrow="How It Works"
          title="Partnership Process"
          subtitle="A structured, professional approach from first conversation to active partnership."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item, index) => (
            <div key={index} className="relative">
              <div className="card-premium h-full">
                <span className="text-3xl font-bold text-gold/40 mb-4 block">{item.step}</span>
                <h3 className="text-lg font-semibold text-accent mb-2">{item.title}</h3>
                <p className="text-accent-muted text-sm leading-relaxed">{item.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gold/30" />
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-dark-surface" id="inquiry">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Start the Conversation"
            subtitle="Complete the form below or reach out directly. All inquiries are treated with strict confidentiality."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-accent mb-4">Direct Contact</h3>
                <div className="space-y-4 text-accent-muted text-sm">
                  <div>
                    <p className="text-accent font-medium mb-1">General Inquiries</p>
                    <a
                      href="mailto:info@crystalcaveresources.com"
                      className="hover:text-gold transition-colors"
                    >
                      info@crystalcaveresources.com
                    </a>
                  </div>
                  <div>
                    <p className="text-accent font-medium mb-1">Head Office</p>
                    <p>
                      2306 Motsoenyane Street
                      <br />
                      Klerksdorp, North West, 2550
                      <br />
                      South Africa
                    </p>
                  </div>
                  <div>
                    <p className="text-accent font-medium mb-1">Phone</p>
                    <p>+27 73 489 9672</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-dark-card/60 border border-gold/10">
                <h3 className="text-accent font-semibold mb-3">Confidentiality Commitment</h3>
                <p className="text-accent-muted text-sm leading-relaxed">
                  We understand that partnership and investment discussions require discretion. All
                  communications are handled confidentially by our leadership team and are not shared
                  with third parties without explicit consent.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <form className="card-premium space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="org-name" className="block text-accent font-medium mb-2 text-sm">
                      Organisation Name
                    </label>
                    <input
                      type="text"
                      id="org-name"
                      name="org-name"
                      required
                      className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-md text-accent placeholder-accent-muted/60 focus:outline-none focus:border-gold/50 transition-colors text-sm"
                      placeholder="Your organisation"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-name" className="block text-accent font-medium mb-2 text-sm">
                      Contact Person
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="contact-name"
                      required
                      className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-md text-accent placeholder-accent-muted/60 focus:outline-none focus:border-gold/50 transition-colors text-sm"
                      placeholder="Full name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="sponsor-email" className="block text-accent font-medium mb-2 text-sm">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="sponsor-email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-md text-accent placeholder-accent-muted/60 focus:outline-none focus:border-gold/50 transition-colors text-sm"
                      placeholder="you@organisation.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="sponsor-phone" className="block text-accent font-medium mb-2 text-sm">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="sponsor-phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-md text-accent placeholder-accent-muted/60 focus:outline-none focus:border-gold/50 transition-colors text-sm"
                      placeholder="+27 ..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="partnership-type" className="block text-accent font-medium mb-2 text-sm">
                    Partnership Interest
                  </label>
                  <select
                    id="partnership-type"
                    name="partnership-type"
                    required
                    className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-md text-accent focus:outline-none focus:border-gold/50 transition-colors text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="strategic">Strategic Partner</option>
                    <option value="growth">Growth Partner</option>
                    <option value="community">Community Partner</option>
                    <option value="investment">Equity Investment</option>
                    <option value="other">Other — Please Specify</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="sponsor-message" className="block text-accent font-medium mb-2 text-sm">
                    Message
                  </label>
                  <textarea
                    id="sponsor-message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-md text-accent placeholder-accent-muted/60 focus:outline-none focus:border-gold/50 transition-colors resize-none text-sm"
                    placeholder="Tell us about your organisation, investment objectives, and how you envision partnering with CCR..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Submit Partnership Inquiry
                </button>

                <p className="text-accent-muted text-xs">
                  By submitting this form, you consent to CCR contacting you regarding partnership
                  opportunities. We will never share your information with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-dark-bg">
        <CTASection
          title="Prefer a Direct Conversation?"
          description="Our leadership team is available for confidential discussions with qualified sponsors and investors. We welcome the opportunity to present our full company profile and growth strategy."
          primaryCta={{ label: 'Contact Leadership', href: '/contact' }}
          secondaryCta={{ label: 'Download Company Overview', href: '/about' }}
        />
      </Section>
    </>
  )
}
