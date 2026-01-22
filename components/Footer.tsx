import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-surface border-t border-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/Images/logo2.png"
                alt="Crystal Cave Resources Logo"
                width={180}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-accent-muted text-sm">
              Leading provider of mining solutions and resources. 
              Delivering excellence in mining operations, supply chain management, and sector expertise.
            </p>
          </div>

          <div>
            <h4 className="text-accent font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-accent-muted hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-accent-muted hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/sectors" className="text-accent-muted hover:text-accent transition-colors">
                  Sectors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-accent-muted hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-accent-muted">
              <li>Email: info@crystalcaveresources.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: Mining District, Industrial Zone</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-card text-center text-sm text-accent-muted">
          <p>&copy; {currentYear} Crystal Cave Resources. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
