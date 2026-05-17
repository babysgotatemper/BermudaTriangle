import { motion } from 'framer-motion'
import { SectionWrapper } from '../layout/SectionWrapper'
import { TheoryCard } from '../cards/TheoryCard'
import { OceanParticles } from '../ui/OceanParticles'
import { WaveDivider } from '../ui/WaveDivider'
import { theories } from '../../data/theories'

export const Theories: React.FC = () => {
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
      id="theories"
      style={{
        background:
          'radial-gradient(circle at 80% 20%, rgba(249,115,22,0.15), transparent 40%), radial-gradient(circle at 20% 80%, rgba(20,184,166,0.15), transparent 40%), #0a1628',
      }}
      className="relative"
    >
      <OceanParticles />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title mb-12" variants={itemVariants}>
          🤔 А чому це відбувається?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {theories.map((theory) => (
            <motion.div key={theory.id} variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <TheoryCard {...theory} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <WaveDivider />
    </SectionWrapper>
  )
}
