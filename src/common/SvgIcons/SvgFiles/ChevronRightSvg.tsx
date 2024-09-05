import { svgProps, defaultProps } from './_svgBase'

const ChevronRightSvg = (props: svgProps): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <>
      <svg {...defaultProps} {...props} width={size} height={size} fill={color}>
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
      </svg>
    </>
  )
}

export default ChevronRightSvg
