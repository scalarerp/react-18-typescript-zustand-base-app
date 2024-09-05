import { svgProps, defaultProps } from './_svgBase'

const CheckSvg = (props: svgProps): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <>
      <svg
        {...defaultProps}
        {...props}
        width={size}
        height={size}
        viewBox="0 -960 960 960"
        fill={color}
        stroke={color}
      >
        <path d="M378-229.348 136.913-470.435l59.913-59.913L378-348.609l384.609-384.609 59.913 59.348L378-229.348Z" />
      </svg>
    </>
  )
}

export default CheckSvg
