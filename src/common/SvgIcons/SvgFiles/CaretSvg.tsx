import { svgProps, defaultProps } from './_svgBase'

const CaretSvg = (props: svgProps): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <>
      <svg
        {...defaultProps}
        {...props}
        width={size}
        height={size}
        stroke={color}
        fill={color}
        viewBox="0 0 256 256"
      >
        <path d="M188.8,121.2,68.2,47.4A8,8,0,0,0,56,54.3V201.7a8,8,0,0,0,12.2,6.9l120.6-73.8A8,8,0,0,0,188.8,121.2Z"></path>
      </svg>
    </>
  )
}

export default CaretSvg
