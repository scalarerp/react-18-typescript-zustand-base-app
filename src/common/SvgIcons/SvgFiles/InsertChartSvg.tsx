import { defaultProps, svgProps } from './_svgBase'

const InsertChartSvg = (props: svgProps): JSX.Element => {
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
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
      </svg>
    </>
  )
}

export default InsertChartSvg
