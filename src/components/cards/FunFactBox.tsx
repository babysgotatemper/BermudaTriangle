interface FunFactBoxProps {
  children: React.ReactNode
  icon?: string
}

export const FunFactBox: React.FC<FunFactBoxProps> = ({ children, icon = '💡' }) => {
  return (
    <div className="mt-8 p-6 rounded-2xl border-l-4 border-gold-brand bg-gradient-to-r from-gold-brand/15 to-coral-brand/10 text-center">
      <span className="text-3xl block mb-3">{icon}</span>
      <span className="text-amber-100 font-medium text-lg leading-relaxed block">{children}</span>
    </div>
  )
}
