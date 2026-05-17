import { motion } from 'framer-motion'
import { SectionWrapper } from '../layout/SectionWrapper'
import { FunFactBox } from '../cards/FunFactBox'
import { WaveDivider } from '../ui/WaveDivider'

export const Reality: React.FC = () => {
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

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <SectionWrapper
      id="reality"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 22, 40, 0.85), rgba(5, 13, 26, 0.9)), url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?w=1200&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="relative"
    >
      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="section-title mb-8" variants={itemVariants}>
          🔬 А насправді?
        </motion.h2>

        <motion.article
          className="p-8 rounded-3xl text-slate-200 leading-relaxed"
          style={{
            background: 'rgba(20, 41, 70, 0.85)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(94, 234, 212, 0.2)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
          } as React.CSSProperties}
          variants={itemVariants}
        >
          <p className="mb-6 text-lg font-semibold text-teal-light">
            ⚠️ Вчені з'ясували: Бермудський трикутник <strong>не такий небезпечний</strong>, як його малюють!
          </p>

          <p className="mb-4 text-lg">
            У 2013 році дослідники провели глобальне дослідження і з'ясували, що Бермудський трикутник навіть <strong>не входить</strong> до топ-10 найнебезпечніших морських шляхів світу.
          </p>

          <p className="mb-6 text-lg">
            Більшість зникнень можна пояснити звичайними причинами:
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { icon: '⛈️', label: 'Погода' },
              { icon: '🌊', label: 'Течії' },
              { icon: '🤷', label: 'Помилки людей' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="p-4 rounded-lg text-center"
                style={{
                  background: 'rgba(20, 184, 166, 0.1)',
                  border: '1px solid rgba(20, 184, 166, 0.25)',
                }}
                variants={statVariants}
                whileHover={{ scale: 1.1, background: 'rgba(20, 184, 166, 0.2)' }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-sm font-semibold text-teal-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <FunFactBox icon="✨">
            Але хто знає? Можливо, саме ти колись розгадаєш цю загадку Бермудського трикутника! 🔍
          </FunFactBox>
        </motion.article>
      </motion.div>

      <WaveDivider />
    </SectionWrapper>
  )
}
