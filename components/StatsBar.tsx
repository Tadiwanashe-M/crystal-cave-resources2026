interface Stat {
  value: string
  label: string
  description?: string
}

interface StatsBarProps {
  stats: Stat[]
  className?: string
}

export default function StatsBar({ stats, className = '' }: StatsBarProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 md:p-8 rounded-xl bg-dark-surface/60 border border-white/5 backdrop-blur-sm"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-2">
                {stat.value}
              </p>
              <p className="text-accent font-semibold text-sm md:text-base uppercase tracking-wide mb-1">
                {stat.label}
              </p>
              {stat.description && (
                <p className="text-accent-muted text-sm hidden md:block">{stat.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
