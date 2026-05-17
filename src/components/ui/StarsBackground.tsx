import { useMemo } from 'react'

export const StarsBackground: React.FC = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 50 }, () => ({
      cx: Math.random() * 100,
      cy: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
    }))
  }, [])

  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-40"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {stars.map((star, i) => (
        <circle
          key={i}
          cx={star.cx}
          cy={star.cy}
          r="0.3"
          fill="#f59e0b"
          style={{
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </svg>
  )
}
