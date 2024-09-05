import { defaultProps, svgProps } from './_svgBase'

interface Props extends svgProps {}

const SwapHorizontalSvg = (props: Props): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <svg
      {...defaultProps}
      {...props}
      width={size}
      height={size}
      fill={color}
      viewBox="0 96 960 960"
    >
      <path d="m252.5 916-214-214 214-214 64.5 64-103.5 104H505v91.5H213.5L317 852l-64.5 64ZM708 663.5l-64.5-64L748 495H456.5v-91.5H748l-104-104 64.5-64 213.5 214-214 214Z" />
    </svg>
  )
}

export default SwapHorizontalSvg
