import { defaultProps, svgProps } from './_svgBase'

const TextFieldsSvg = (props: svgProps): JSX.Element => {
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
        <path d="M2.5,4v3h5v12h3V7h5V4H2.5z M21.5,9h-9v3h3v7h3v-7h3V9z" />
      </svg>
    </>
  )
}

export default TextFieldsSvg
