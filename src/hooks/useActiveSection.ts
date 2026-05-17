import { useState, useEffect } from 'react'

export const useActiveSection = (sectionIds: string[]): number => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const scrollContainer = document.getElementById('root')
    if (!scrollContainer) return

    const observer = new IntersectionObserver(
      (entries) => {
        let maxVisibility = 0
        let mostVisibleIndex = 0

        entries.forEach((entry) => {
          const index = sectionIds.indexOf(entry.target.id)
          if (index !== -1 && entry.intersectionRatio > maxVisibility) {
            maxVisibility = entry.intersectionRatio
            mostVisibleIndex = index
          }
        })

        if (maxVisibility > 0.3) {
          setActiveIndex(mostVisibleIndex)
        }
      },
      {
        root: scrollContainer,
        threshold: 0.3,
      }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [sectionIds])

  return activeIndex
}
