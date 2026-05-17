export const WaveDivider: React.FC = () => {
  return (
    <div className="relative w-full h-24 overflow-hidden opacity-60">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#5eead4" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* First wave layer - slower */}
        <path
          d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
          fill="url(#wave-gradient)"
          className="animate-wave-motion"
          style={{ animationDuration: '20s' }}
        />

        {/* Second wave layer - faster */}
        <path
          d="M0,70 Q300,40 600,70 T1200,70 L1200,120 L0,120 Z"
          fill="url(#wave-gradient)"
          className="animate-wave-motion"
          style={{ animationDuration: '15s', animationDirection: 'reverse', opacity: 0.5 }}
        />

        {/* Third accent wave */}
        <path
          d="M0,80 Q300,55 600,80 T1200,80 L1200,120 L0,120 Z"
          stroke="#5eead4"
          strokeWidth="1"
          fill="none"
          className="animate-wave-motion"
          style={{ animationDuration: '25s', opacity: 0.3 }}
        />
      </svg>
    </div>
  )
}
