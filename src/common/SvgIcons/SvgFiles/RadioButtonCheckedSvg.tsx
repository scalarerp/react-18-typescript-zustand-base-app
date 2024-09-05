import { defaultProps, svgProps } from './_svgBase'

const RadioButtonCheckedSvg = (props: svgProps): JSX.Element => {
  const { size = 26, color = defaultProps.color } = props

  return (
    <>
      <svg
        {...defaultProps}
        {...props}
        height={size}
        width={size}
        fill={color}
        viewBox="0 96 960 960"
      >
        <path d="M480 776q83 0 141.5-58.5T680 576q0-83-58.5-141.5T480 376q-83 0-141.5 58.5T280 576q0 83 58.5 141.5T480 776Zm0 200q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
      </svg>
    </>
  )
}

export default RadioButtonCheckedSvg
