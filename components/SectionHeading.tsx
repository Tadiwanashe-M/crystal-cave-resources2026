interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 md:mb-16 ${className}`}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className={`section-title ${centered ? 'mx-auto' : ''}`}>{title}</h2>
      <div className={centered ? 'gold-divider' : 'gold-divider-left'} />
      {subtitle && (
        <p className={`section-subtitle ${centered ? 'mx-auto' : ''}`}>{subtitle}</p>
      )}
    </div>
  )
}
