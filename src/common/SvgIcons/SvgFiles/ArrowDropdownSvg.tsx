import { svgProps, defaultProps } from './_svgBase'

const ArrowDropdownSvg = (props: svgProps): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <>
      <svg {...defaultProps} {...props} width={size} height={size} fill={color}>
        <path d="M7 10l5 5 5-5H7z" />
      </svg>
    </>
  )
}

export default ArrowDropdownSvg
