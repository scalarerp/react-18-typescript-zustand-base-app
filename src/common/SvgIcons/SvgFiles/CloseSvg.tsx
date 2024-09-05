import { svgProps, defaultProps } from './_svgBase'

const CloseSvg = (props: svgProps): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <>
      <svg
        {...defaultProps}
        {...props}
        viewBox="0 -960 960 960"
        width={size}
        height={size}
        fill={color}
      >
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    </>
  )
}

export default CloseSvg
