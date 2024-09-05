import { svgProps, defaultProps } from './_svgBase'

const PowerOnOffSvg = (props: svgProps): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <>
      <svg
        {...defaultProps}
        {...props}
        height={size}
        width={size}
        stroke={color}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
        <line x1="12" x2="12" y1="2" y2="12" />
      </svg>
    </>
  )
}

export default PowerOnOffSvg
