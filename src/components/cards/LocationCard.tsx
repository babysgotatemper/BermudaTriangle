interface LocationCardProps {
  emoji: string
  name: string
  sub: string
}

export const LocationCard: React.FC<LocationCardProps> = ({ emoji, name, sub }) => {
  return (
    <div className="group flex items-center gap-3 p-5 rounded-2xl border bg-teal-brand/10 border-teal-brand/30 transition-all hover:bg-teal-brand/20 hover:border-teal-brand hover:translate-x-2">
      <span className="text-4xl">{emoji}</span>
      <div>
        <h3 className="font-display font-semibold text-teal-light text-lg">{name}</h3>
        <p className="text-xs text-slate-400">{sub}</p>
      </div>
    </div>
  )
}
