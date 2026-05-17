interface TheoryCardProps {
  icon: string
  title: string
  desc: string
  color: string
}

export const TheoryCard: React.FC<TheoryCardProps> = ({ icon, title, desc, color }) => {
  return (
    <article
      className="group relative p-7 rounded-2xl border backdrop-blur-md transition-all duration-300 cursor-default hover:scale-105 hover:-translate-y-1"
      style={{
        background: 'rgba(255, 255, 255, 0.07)',
        borderColor: 'rgba(255, 255, 255, 0.18)',
        '--glow': color,
      } as React.CSSProperties & { '--glow': string }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.boxShadow = `0 0 40px ${color}40, 0 20px 50px rgba(0, 0, 0, 0.5)`
        el.style.borderColor = color
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.boxShadow = ''
        el.style.borderColor = 'rgba(255, 255, 255, 0.18)'
      }}
    >
      <span className="text-5xl mb-4 block">{icon}</span>
      <h3 className="font-display text-teal-light text-xl font-semibold mb-2 group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
    </article>
  )
}
