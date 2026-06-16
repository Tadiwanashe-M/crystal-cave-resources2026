import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle?: string
  eyebrow?: string
  backgroundImage?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  compact?: boolean
}

export default function Hero({
  title,
  subtitle,
  eyebrow,
  backgroundImage,
  primaryCta,
  secondaryCta,
  compact = false,
}: HeroProps) {
  return (
    <div
      className={`relative flex items-center justify-center bg-cover bg-center bg-no-repeat ${
        compact ? 'h-[45vh] min-h-[380px]' : 'h-[70vh] min-h-[560px]'
      }`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundColor: backgroundImage ? undefined : '#0f2438',
      }}
    >
      <div className="absolute inset-0 bg-hero-overlay" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(201, 162, 39, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(201, 162, 39, 0.05) 0%, transparent 50%)',
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
        {eyebrow && <p className="section-eyebrow mb-4">{eyebrow}</p>}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-accent mb-6 text-balance leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-accent-muted max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            {primaryCta && (
              <Link href={primaryCta.href} className="btn-primary">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-secondary">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
