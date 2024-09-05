import { defaultProps, svgProps } from './_svgBase'

interface Props extends svgProps {}

const GavelSvg = (props: Props): JSX.Element => {
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
      <path d="M101 1012V907h539v105H101Zm260-195L94 550l124-125 268 267-125 125Zm307-309L401 240l125-123 268 266-126 125Zm160 439L263 382l95-97 565 566-95 96Z" />
    </svg>
  )
}

export default GavelSvg
