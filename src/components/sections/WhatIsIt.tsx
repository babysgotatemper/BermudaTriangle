import { motion } from 'framer-motion'
import { SectionWrapper } from '../layout/SectionWrapper'
import { FunFactBox } from '../cards/FunFactBox'
import { WaveDivider } from '../ui/WaveDivider'

export const WhatIsIt: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <SectionWrapper
      id="what"
      className="relative"
      style={{
        background: 'radial-gradient(circle at 20% 50%, rgba(20,184,166,0.08), transparent 50%), #0a1628',
      }}
    >
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="section-title mb-8" variants={itemVariants}>
          🌊 Що це таке?
        </motion.h2>

        <motion.article
          className="p-8 rounded-3xl text-slate-200 leading-relaxed"
          style={{
            background: 'rgba(20, 41, 70, 0.85)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(94, 234, 212, 0.2)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          }}
          variants={itemVariants}
        >
          <p className="mb-4 text-lg">
            Бермудський трикутник — це область Атлантичного океану розміром, більшим за Техас! Його вершини знаходяться у трьох точках: у Маямі (Флорида), на Бермудських островах і в Сан-Хуані (Пуерто-Ріко).
          </p>
          <p className="mb-6 text-lg">
            На протязі останніх століть у цій ділянці зникло понад 70 кораблів і літаків. Деякі дослідники стверджують, що це найнебезпечніше місце на планеті, але чи це правда?
          </p>

          <FunFactBox>
            Площа Бермудського трикутника — близько 1 440 000 км²! Це більше за всю Україну 🇺🇦
          </FunFactBox>
        </motion.article>
      </motion.div>

      <WaveDivider />
    </SectionWrapper>
  )
}
