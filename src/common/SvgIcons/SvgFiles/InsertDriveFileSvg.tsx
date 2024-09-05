import { defaultProps, svgProps } from './_svgBase'

const InsertDriveFileSvg = (props: svgProps): JSX.Element => {
  const {
    width,
    height,
    size = defaultProps.size,
    color = defaultProps.color,
  } = props

  return (
    <>
      <svg
        {...defaultProps}
        {...props}
        width={width || size}
        height={height || size}
        fill={color}
      >
        <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z" />
      </svg>
    </>
  )
}

export default InsertDriveFileSvg
