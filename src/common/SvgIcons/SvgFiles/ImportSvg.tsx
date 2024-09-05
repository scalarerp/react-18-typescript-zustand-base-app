import { defaultProps, svgProps } from './_svgBase'
//lucide-impor
const ImportSvg = (props: svgProps): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <>
      <svg
        {...defaultProps}
        {...props}
        width={size}
        height={size}
        stroke={color}
      >
        <path d="M12 3v12"></path>
        <path d="m8 11 4 4 4-4"></path>
        <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"></path>
      </svg>
    </>
  )
}

export default ImportSvg
