'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/sectors', label: 'Sectors' },
    { href: '/supply-chain', label: 'Supply Chain' },
    { href: '/sponsors', label: 'Partners' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className="bg-dark-surface/90 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-[4.5rem]">
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity shrink-0">
            <Image
              src="/Images/logo2.png"
              alt="Crystal Cave Resources Logo"
              width={180}
              height={50}
              className="h-9 lg:h-10 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.href)
                    ? 'text-gold'
                    : 'text-accent-muted hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/sponsors"
              className="ml-4 px-5 py-2 text-sm font-semibold bg-gold/10 text-gold border border-gold/30 rounded-md hover:bg-gold/20 transition-colors"
            >
              Invest With Us
            </Link>
          </div>

          <button
            className="lg:hidden text-accent hover:text-gold transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/5 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-3 rounded-md font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-gold bg-gold/5'
                    : 'text-accent-muted hover:text-accent hover:bg-white/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/sponsors"
              className="block mt-2 px-3 py-3 text-center font-semibold bg-gold/10 text-gold border border-gold/30 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Invest With Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
