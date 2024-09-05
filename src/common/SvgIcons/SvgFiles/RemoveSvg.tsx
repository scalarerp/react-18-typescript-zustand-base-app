import { defaultProps, svgProps } from './_svgBase'

const RemoveSvg = (props: svgProps): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <>
      <svg {...defaultProps} {...props} width={size} height={size} fill={color}>
        <path d="M19 13H5v-2h14v2z" />
      </svg>
    </>
  )
}

export default RemoveSvg
