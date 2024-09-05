import { defaultProps, svgProps } from './_svgBase'

const ReplySvg = (props: svgProps) => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <svg
      {...defaultProps}
      {...props}
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
    >
      <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" />
    </svg>
  )
}

export default ReplySvg
