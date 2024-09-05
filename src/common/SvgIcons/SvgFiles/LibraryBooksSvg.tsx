import { defaultProps, svgProps } from './_svgBase'

const LibraryBooksSvg = (props: svgProps): JSX.Element => {
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
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
      </svg>
    </>
  )
}

export default LibraryBooksSvg
