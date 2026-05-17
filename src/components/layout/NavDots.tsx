import { Section } from '../../types'

interface NavDotsProps {
  sections: Section[]
  activeIndex: number
}

export const NavDots: React.FC<NavDotsProps> = ({ sections, activeIndex }) => {
  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="hidden sm:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
      {sections.map((section, index) => (
        <div key={section.id} className="group relative">
          <button
            onClick={() => handleClick(section.id)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? 'w-3 h-3 bg-coral-brand shadow-lg shadow-coral-brand/60'
                : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Перейти до ${section.title}`}
            aria-current={activeIndex === index ? 'page' : undefined}
          />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-ocean-deep/95 text-white text-xs px-2 py-1 rounded border border-teal-brand/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {section.title}
          </span>
        </div>
      ))}
    </nav>
  )
}
