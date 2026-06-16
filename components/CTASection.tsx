import Link from 'next/link'

interface CTASectionProps {
  eyebrow?: string
  title: string
  description: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  variant?: 'default' | 'gold'
}

export default function CTASection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = 'default',
}: CTASectionProps) {
  const isGold = variant === 'gold'

  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-10 md:p-16 text-center ${
        isGold
          ? 'bg-gradient-to-br from-dark-card via-dark-elevated to-dark-card border border-gold/20'
          : 'bg-dark-surface border border-white/5'
      }`}
    >
      {isGold && (
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 0%, rgba(201, 162, 39, 0.3) 0%, transparent 60%)',
          }}
        />
      )}
      <div className="relative z-10 max-w-3xl mx-auto">
        {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">{title}</h2>
        <div className="gold-divider" />
        <p className="text-accent-muted text-lg mb-8 leading-relaxed">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryCta.href} className="btn-primary">
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link href={secondaryCta.href} className="btn-secondary">
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
