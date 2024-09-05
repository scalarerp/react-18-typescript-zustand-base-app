interface Props {
  label: string
  children: React.ReactNode
  className?: string
}
const CardLabelValue = (props: Props) => {
  const { label = '', children, className = '' } = props
  return (
    <div className={`${className} d-flex flex-column justify-content-center`}>
      <div>{label}</div>
      <div className="fs-3">{children}</div>
    </div>
  )
}

export default CardLabelValue
