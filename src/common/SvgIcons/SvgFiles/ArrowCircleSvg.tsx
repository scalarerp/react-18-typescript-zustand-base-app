import { svgProps, defaultProps } from './_svgBase'

const ArrowCircleSvg = (props: svgProps): JSX.Element => {
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
        <polyline points="12 8 8 12 12 16"></polyline>
        <line x1="16" y1="12" x2="8" y2="12"></line>
      </svg>
    </>
  )
}

export default ArrowCircleSvg
