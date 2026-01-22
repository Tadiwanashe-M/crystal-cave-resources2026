interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export default function Hero({ title, subtitle, backgroundImage }: HeroProps) {
  return (
    <div
      className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : 'linear-gradient(rgba(26, 58, 90, 0.8), rgba(26, 58, 90, 0.8)), url("data:image/svg+xml,%3Csvg width=\'1920\' height=\'1080\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect fill=\'%231a3a5a\' width=\'1920\' height=\'1080\'/%3E%3C/svg%3E")',
        backgroundColor: backgroundImage ? undefined : '#1a3a5a',
      }}
    >
      <div className={`absolute inset-0 ${backgroundImage ? 'bg-[#1a3a5a]/60' : 'bg-[#1a3a5a]/80'}`}></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-accent mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-accent-muted">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
