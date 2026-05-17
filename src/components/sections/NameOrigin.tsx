import { motion } from 'framer-motion'
import { SectionWrapper } from '../layout/SectionWrapper'
import { AnimatedNumber } from '../ui/AnimatedNumber'
import { WaveDivider } from '../ui/WaveDivider'

export const NameOrigin: React.FC = () => {
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
      id="name"
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #1a4d7a 100%)',
      }}
    >
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="section-title mb-12" variants={itemVariants}>
          📚 Чому така назва?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Big Year Display */}
          <motion.div className="text-center" variants={itemVariants}>
            <span className="block text-slate-400 text-lg mb-2">У році</span>
            <motion.div
              className="text-8xl md:text-9xl font-bold leading-none mb-2"
              style={{
                background: 'linear-gradient(180deg, #fbbf24 0%, #f97316 100%)',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 60px rgba(245, 158, 11, 0.4)',
              }}
            >
              <AnimatedNumber value={1964} duration={1500} />
            </motion.div>
            <span className="block text-slate-400 text-lg">з'явилась назва</span>
          </motion.div>

          {/* Story Card */}
          <motion.article
            className="p-8 rounded-3xl text-slate-200 leading-relaxed"
            style={{
              background: 'rgba(20, 41, 70, 0.85)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(249, 115, 22, 0.3)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
            }}
            variants={itemVariants}
          >
            <p className="mb-4 text-lg">
              Назва <strong>"Бермудський трикутник"</strong> придумана американським письменником <strong>Вінсентом Геддісом</strong> у 1964 році.
            </p>
            <p className="mb-4 text-lg">
              Йому сподобалась історія про зникнення літаків і кораблів, і він назвав цей регіон <strong>"дияволовим морем"</strong> в одній з своїх статей.
            </p>
            <p className="text-base text-slate-300">
              <em>Цікаво, що раніше морехідці називали цей район "Морем Диявола" (Sea of the Devil) та "Зачарованим морем" (Enchanted Sea). Але саме назва Геддіса закріпилась в історії!</em>
            </p>
          </motion.article>
        </div>
      </motion.div>

      <WaveDivider />
    </SectionWrapper>
  )
}
