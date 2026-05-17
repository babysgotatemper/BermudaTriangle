import { motion } from 'framer-motion'
import { SectionWrapper } from '../layout/SectionWrapper'

export const Footer: React.FC = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const emojiVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  }

  const emojis = ['🔺', '🌊', '⛵', '✈️', '🏝️']

  return (
    <SectionWrapper
      id="footer"
      className="bg-ocean-darker min-h-[60vh] flex items-center justify-center"
    >
      <motion.div className="text-center" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="text-5xl mb-6 space-x-4 flex justify-center">
          {emojis.map((emoji, idx) => (
            <motion.span key={idx} custom={idx} variants={emojiVariants} whileHover={{ scale: 1.2, rotate: 10 }}>
              {emoji}
            </motion.span>
          ))}
        </div>

        <motion.p className="text-slate-300 text-xl mb-3" variants={itemVariants}>
          Сайт створено з любов'ю до пригод і таємниць
        </motion.p>
        <motion.p className="text-slate-500 text-sm" variants={itemVariants}>
          © 2026 · Артем досліджує світ 🔍
        </motion.p>
        <motion.p className="text-slate-600 text-xs mt-4" variants={itemVariants}>
          Inspired by Artem · Developed by Roman
        </motion.p>
      </motion.div>
    </SectionWrapper>
  )
}
