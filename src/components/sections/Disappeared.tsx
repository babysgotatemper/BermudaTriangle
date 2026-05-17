import { motion } from 'framer-motion'
import { SectionWrapper } from '../layout/SectionWrapper'
import { FlipCard } from '../cards/FlipCard'
import { OceanParticles } from '../ui/OceanParticles'
import { WaveDivider } from '../ui/WaveDivider'
import { vessels } from '../../data/vessels'

export const Disappeared: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="disappeared"
      className="relative bg-ocean-darker"
    >
      <OceanParticles />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title mb-4" variants={itemVariants}>
          👻 Хто там зник?
        </motion.h2>
        <motion.p className="lead text-center max-w-3xl mx-auto mb-12" variants={itemVariants}>
          Понад 70 кораблів і літаків зникло в цій ділянці. От деякі з найвідоміших випадків…
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vessels.map((vessel) => (
            <motion.div key={vessel.id} variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <FlipCard {...vessel} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <WaveDivider />
    </SectionWrapper>
  )
}
