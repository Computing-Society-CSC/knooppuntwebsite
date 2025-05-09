interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

const SectionTitle = ({ title, subtitle, centered = false }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className={`section-title ${centered ? "mx-auto after:left-1/2 after:-translate-x-1/2" : ""}`}>{title}</h2>
      {subtitle && (
        <p className={`text-gray-600 mt-6 max-w-3xl ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
