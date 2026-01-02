interface SectionTitleProps {
  subtitle:  string
  title: string
  description?: string
  className?: string
}

export default function SectionTitle({ subtitle, title, description, className = '' }: SectionTitleProps) {
  return (
    <div className={`flex flex-col lg:flex-row lg:justify-between lg:items-start mb-12 ${className}`}>
      <div>
        <p className="uppercase text-lg font-bold tracking-widest text-roman-silver mb-5">
          {subtitle}
        </p>
        <h2 className="text-7xl font-bold text-white leading-none">
          {title}
        </h2>
      </div>
      {description && (
        <p className="text-roman-silver max-w-[900px] lg:text-left">
          {description}
        </p>
      )}
    </div>
  )
}