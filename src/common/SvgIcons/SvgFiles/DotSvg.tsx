import { svgProps, defaultProps } from './_svgBase'

const DotSvg = (props: svgProps): JSX.Element => {
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
        <circle cx="12.1" cy="12.1" r="1" />
      </svg>
    </>
  )
}

export default DotSvg
