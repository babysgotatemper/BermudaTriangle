interface FunFactBoxProps {
  children: React.ReactNode
  icon?: string
}

export const FunFactBox: React.FC<FunFactBoxProps> = ({ children, icon = '💡' }) => {
  return (
    <div className="mt-6 p-5 rounded-xl border-l-4 border-gold-brand bg-gradient-to-r from-gold-brand/15 to-coral-brand/10">
      <span className="text-2xl mr-2">{icon}</span>
      <span className="text-amber-100 font-medium text-lg">{children}</span>
    </div>
  )
}
