import { defaultProps, svgProps } from './_svgBase'

const TrendingUpSvg = (props: svgProps): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <>
      <svg {...defaultProps} {...props} width={size} height={size}>
        <path
          d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"
          fill={color}
          stroke="none"
        />
      </svg>
    </>
  )
}

export default TrendingUpSvg
