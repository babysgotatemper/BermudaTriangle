import { useState } from 'react'

interface FlipCardProps {
  emoji: string
  name: string
  date: string
  story: string
}

export const FlipCard: React.FC<FlipCardProps> = ({ emoji, name, date, story }) => {
  const [flipped, setFlipped] = useState(false)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setFlipped(!flipped)
    }
  }

  return (
    <div
      className="group relative w-full aspect-[3/4] cursor-pointer perspective"
      onClick={() => setFlipped(!flipped)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`${name} - натисни для деталей`}
      style={{ perspective: '1200px' }}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl p-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-ocean-mid to-ocean-deep border-2 border-teal-brand/40 shadow-2xl group-hover:border-teal-brand group-hover:shadow-teal-brand/50 transition-all"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <span className="text-7xl mb-4">{emoji}</span>
          <h3 className="font-display text-coral-brand text-2xl font-semibold mb-2">{name}</h3>
          <div className="inline-block px-3 py-1 mb-3 bg-gradient-to-r from-gold-light to-gold-brand rounded-full">
            <span className="text-ocean-deep font-bold text-sm">📅 {date}</span>
          </div>
          <p className="text-xs text-slate-400 italic mt-4">Натисни щоб дізнатись →</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl p-6 flex flex-col justify-center text-center bg-gradient-to-b from-ocean-darker to-ocean-deep border-2 border-coral-brand shadow-2xl shadow-coral-brand/30"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <p className="text-text-muted font-medium text-base leading-relaxed">{story}</p>
          <p className="text-xs text-slate-400 italic mt-4">Натисни ще раз ←</p>
        </div>
      </div>
    </div>
  )
}
