import { useEffect, useRef, useState } from 'react'

interface AnimatedNumberProps {
  value: number
  duration?: number
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 1500 }) => {
  const [displayValue, setDisplayValue] = useState(0)
  const hasRunRef = useRef(false)

  useEffect(() => {
    if (hasRunRef.current) return

    const startTime = Date.now()
    const endTime = startTime + duration

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      const currentValue = Math.floor(value * progress)
      setDisplayValue(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
        hasRunRef.current = true
      }
    }

    requestAnimationFrame(animate)
  }, [value, duration])

  return <>{displayValue.toLocaleString()}</>
}
