interface ContainerProps {
  children: React. ReactNode
  className?: string
}

export default function Container({ children, className = '' }:  ContainerProps) {
  return (
    <div className={`px-3 mx-auto max-w-[1200px] ${className}`}>
      {children}
    </div>
  )
}