interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className = '', style }) => {
  return (
    <section
      id={id}
      className={`snap-section min-h-screen flex flex-col justify-center ${className}`}
      style={style}
    >
      {children}
    </section>
  )
}
