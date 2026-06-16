import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/Images/logo2.png"
                alt="Crystal Cave Resources Logo"
                width={180}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-accent-muted text-sm leading-relaxed max-w-md mb-6">
              Crystal Cave Resources (Pty) Ltd is an integrated mining, geo-services, and environmental
              consulting firm delivering bankable technical and ESG solutions across the full mining life
              cycle — from exploration through to closure.
            </p>
            <Link
              href="/sponsors"
              className="inline-flex items-center text-sm font-semibold text-gold hover:text-gold-light transition-colors"
            >
              Explore partnership opportunities
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div>
            <h4 className="text-accent font-semibold mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/sectors', label: 'Sectors' },
                { href: '/supply-chain', label: 'Supply Chain' },
                { href: '/sponsors', label: 'Partners & Sponsors' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-accent-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-accent font-semibold mb-5 text-sm uppercase tracking-wider">Head Office</h4>
            <ul className="space-y-3 text-sm text-accent-muted">
              <li>
                <a
                  href="mailto:info@crystalcaveresources.com"
                  className="hover:text-gold transition-colors"
                >
                  info@crystalcaveresources.com
                </a>
              </li>
              <li>+27 73 489 9672</li>
              <li>
                2306 Motsoenyane Street
                <br />
                Klerksdorp, North West, 2550
                <br />
                South Africa
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-accent-muted">
          <p>&copy; {currentYear} Crystal Cave Resources (Pty) Ltd. All rights reserved.</p>
          <p className="text-xs">Registered in South Africa · B-BBEE Level Contributor</p>
        </div>
      </div>
    </footer>
  )
}
