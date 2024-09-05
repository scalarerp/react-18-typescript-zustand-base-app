import { defaultProps, svgProps } from './_svgBase'

const DoubleArrowSvg = (props: svgProps): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <>
      <svg {...defaultProps} {...props} width={size} height={size} fill={color}>
        <polygon points="15.5,5 11,5 16,12 11,19 15.5,19 20.5,12" />
        <polygon points="8.5,5 4,5 9,12 4,19 8.5,19 13.5,12" />
      </svg>
    </>
  )
}

export default DoubleArrowSvg
