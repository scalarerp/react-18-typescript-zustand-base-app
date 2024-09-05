import { svgProps, defaultProps } from './_svgBase'

const ArrowRightSvg = (props: svgProps): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <>
      <svg {...defaultProps} {...props} width={size} height={size} fill={color}>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M10 17l5-5-5-5v10z" />
      </svg>
    </>
  )
}

export default ArrowRightSvg
