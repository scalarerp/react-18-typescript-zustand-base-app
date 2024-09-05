import { svgProps, defaultProps } from './_svgBase'

const CircleSvg = (props: svgProps): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <>
      <svg
        {...defaultProps}
        {...props}
        width={size}
        height={size}
        stroke={color}
      >
        <circle cx="12" cy="12" r="10"></circle>
      </svg>
    </>
  )
}

export default CircleSvg
