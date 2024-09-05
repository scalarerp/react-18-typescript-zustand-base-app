import { defaultProps, svgProps } from './_svgBase'

const DownloadSvg = (props: svgProps): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <>
      <svg
        {...defaultProps}
        {...props}
        stroke={color}
        width={size}
        height={size}
      >
        <path d="M12 2v8" />
        <path d="m16 6-4 4-4-4" />
        <rect width="20" height="8" x="2" y="14" rx="2" />
        <path d="M6 18h.01" />
        <path d="M10 18h.01" />
      </svg>
    </>
  )
}

export default DownloadSvg
