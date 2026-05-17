import { useMemo } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export const OceanParticles: React.FC = () => {
  const bubbles = useMemo(() => {
    const particles: Particle[] = []
    for (let i = 0; i < 40; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 5,
      })
    }
    return particles
  }, [])

  const stars = useMemo(() => {
    const starParticles: Particle[] = []
    for (let i = 0; i < 50; i++) {
      starParticles.push({
        id: i + 100,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 3,
      })
    }
    return starParticles
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full animate-rise-up"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            background: `rgba(94, 234, 212, ${0.4 + Math.random() * 0.3})`,
            boxShadow: `0 0 ${bubble.size * 2}px rgba(94, 234, 212, 0.6)`,
            animation: `riseUp ${bubble.duration}s ease-in infinite`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: `rgba(245, 158, 11, ${0.3 + Math.random() * 0.4})`,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
