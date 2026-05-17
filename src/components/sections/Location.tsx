import { motion } from 'framer-motion'
import { useLeafletMap } from '../../hooks/useLeafletMap'
import { SectionWrapper } from '../layout/SectionWrapper'
import { LocationCard } from '../cards/LocationCard'
import { WaveDivider } from '../ui/WaveDivider'
import { locations } from '../../data/sections'

export const Location: React.FC = () => {
  useLeafletMap('map')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <SectionWrapper
      id="location"
      className="bg-ocean-mid relative"
    >
      {/* Compass decoration */}
      <motion.div
        className="absolute -right-20 -top-20 w-64 h-64 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="#5eead4">
          <circle cx="100" cy="100" r="95" fill="none" stroke="#5eead4" strokeWidth="1" />
          <path d="M 100 10 L 115 90 L 100 75 L 85 90 Z" />
          <path d="M 100 190 L 115 110 L 100 125 L 85 110 Z" />
          <path d="M 10 100 L 90 85 L 75 100 L 90 115 Z" />
          <path d="M 190 100 L 110 85 L 125 100 L 110 115 Z" />
          <circle cx="100" cy="100" r="8" />
        </svg>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="section-title mb-8" variants={itemVariants}>
          🗺️ Де він знаходиться?
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Leaflet Map */}
          <motion.div
            className="lg:col-span-2 h-96 lg:h-[500px] rounded-2xl border-4 border-teal-brand shadow-2xl overflow-hidden"
            style={{
              boxShadow: '0 0 40px rgba(20, 184, 166, 0.4)',
            }}
            id="map"
            variants={itemVariants}
            whileHover={{ boxShadow: '0 0 60px rgba(20, 184, 166, 0.8)' }}
          />

          {/* Location Cards */}
          <div className="flex flex-col gap-4">
            {locations.map((loc, idx) => (
              <motion.div key={idx} variants={itemVariants} whileHover={{ scale: 1.05 }}>
                <LocationCard emoji={loc.emoji} name={loc.name} sub={loc.sub} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <WaveDivider />
    </SectionWrapper>
  )
}
