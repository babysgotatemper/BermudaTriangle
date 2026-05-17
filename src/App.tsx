import { useActiveSection } from './hooks/useActiveSection'
import { sections } from './data/sections'
import { NavDots } from './components/layout/NavDots'
import { Hero } from './components/sections/Hero'
import { WhatIsIt } from './components/sections/WhatIsIt'
import { Location } from './components/sections/Location'
import { NameOrigin } from './components/sections/NameOrigin'
import { Disappeared } from './components/sections/Disappeared'
import { Theories } from './components/sections/Theories'
import { Reality } from './components/sections/Reality'
import { Footer } from './components/sections/Footer'

const sectionIds = sections.map((s) => s.id)

export default function App() {
  const activeIndex = useActiveSection(sectionIds)

  return (
    <main id="root" className="bg-ocean-deep text-white">
      <Hero />
      <WhatIsIt />
      <Location />
      <NameOrigin />
      <Disappeared />
      <Theories />
      <Reality />
      <Footer />

      <NavDots sections={sections} activeIndex={activeIndex} />
    </main>
  )
}
