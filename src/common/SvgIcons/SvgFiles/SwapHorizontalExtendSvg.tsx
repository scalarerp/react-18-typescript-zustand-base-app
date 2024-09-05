import { defaultProps, svgProps } from './_svgBase'

interface Props extends svgProps {}

const SwapHorizontalExtendSvg = (props: Props): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <svg
      {...defaultProps}
      {...props}
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 3 4 4-4 4"></path>
      <path d="M20 7H4"></path>
      <path d="m8 21-4-4 4-4"></path>
      <path d="M4 17h16"></path>
    </svg>
  )
}

export default SwapHorizontalExtendSvg
