import { motion } from 'framer-motion'
import { StarsBackground } from '../ui/StarsBackground'
import { SectionWrapper } from '../layout/SectionWrapper'
import { WaveDivider } from '../ui/WaveDivider'

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <SectionWrapper
      id="hero"
      className="relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 22, 40, 0.75), rgba(5, 13, 26, 0.85)), url('https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <StarsBackground />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced Floating Triangle with Orbiting Elements */}
        <motion.div
          className="relative w-64 h-64 mb-8 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {/* Outer rotating ring */}
          <svg
            className="absolute inset-0"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(20, 184, 166, 0.2))',
            }}
          >
            <circle cx="128" cy="128" r="120" stroke="#5eead4" strokeWidth="1" fill="none" opacity="0.3" />
          </svg>

          {/* Main Triangle */}
          <svg
            className="w-40 h-40 animate-float"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: 'drop-shadow(0 0 40px #14b8a6)',
            }}
          >
            <polygon
              points="100,50 170,150 30,150"
              stroke="#14b8a6"
              strokeWidth="3"
              fill="none"
              strokeDasharray="8 4"
            />
            {/* Inner triangle */}
            <polygon
              points="100,70 160,140 40,140"
              stroke="#5eead4"
              strokeWidth="1"
              fill="none"
              opacity="0.5"
            />
          </svg>

          {/* Orbiting dots */}
          {[0, 120, 240].map((angle) => (
            <motion.div
              key={angle}
              className="absolute w-3 h-3 rounded-full bg-coral-brand"
              style={{
                top: '50%',
                left: '50%',
                marginTop: '-6px',
                marginLeft: '-6px',
              }}
              animate={{
                x: Math.cos((angle * Math.PI) / 180) * 100,
                y: Math.sin((angle * Math.PI) / 180) * 100,
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
          ))}
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="font-display text-6xl md:text-7xl font-bold mb-6"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #5eead4 50%, #f59e0b 100%)',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 40px rgba(20, 184, 166, 0.3)',
          }}
          variants={itemVariants}
        >
          Бермудський трикутник
        </motion.h1>

        {/* Subtitle */}
        <motion.p className="lead max-w-2xl mb-8 text-slate-200" variants={itemVariants}>
          Найзагадковіше місце на Землі де кораблі і літаки зникають без сліду…
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-16 text-teal-brand text-3xl"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </motion.div>

      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <WaveDivider />
      </div>
    </SectionWrapper>
  )
}
