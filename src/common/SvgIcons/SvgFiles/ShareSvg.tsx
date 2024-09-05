import { defaultProps, svgProps } from './_svgBase'
//lucide-share

const ShareSvg = (props: svgProps): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <>
      <svg {...defaultProps} {...props} width={size} height={size} fill={color}>
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
        <polyline points="16 6 12 2 8 6"></polyline>

        <line x1="12" x2="12" y1="2" y2="15"></line>
      </svg>
    </>
  )
}

export default ShareSvg
