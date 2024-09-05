import { svgProps, defaultProps } from './_svgBase'
//unie903 de icomoon

const ConverterSvg = (props: svgProps): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <>
      <svg
        {...defaultProps}
        {...props}
        width={size}
        height={size}
        fill={color}
        viewBox="-10 0 1669 1024"
      >
        <path
          d="M1545 1024h-1441q-43 0 -73.5 -30.5t-30.5 -73.5v-451q0 -44 30.5 -74.5t73.5 -30.5h52v-34q0 -36 25.5 -61.5t61.5 -25.5t61.5 25.5t25.5 61.5v0v34h69v-34q0 -36 25.5 -61.5t61.5 -25.5t61.5 25.5t25.5 61.5v0v34h573v-277q0 -36 25.5 -61.5t61.5 -25.5t61 25.5
                   t25 61.5v0v277h52v-277q0 -36 25.5 -61.5t61.5 -25.5t61.5 25.5t25.5 61.5v277q43 1 73.5 31t30.5 74v451q0 43 -30.5 73.5t-73.5 30.5v0v0v0v0zM1458 503q-22 0 -37 15.5t-15 36.5v0v278q0 22 15 37t37 15q21 0 36.5 -15t15.5 -37v0v-278q0 -21 -15.5 -36.5t-36.5 -15.5v0
                   v0zM486 607q-36 0 -61 25.5t-25 61.5t25 61.5t61 25.5t61.5 -25.5t25.5 -61.5v0q0 -36 -25.5 -61.5t-61.5 -25.5v0v0zM243 607q-36 0 -61 25.5t-25 61.5t25 61.5t61 25.5t61.5 -25.5t25.5 -61.5v0v0v0q0 -36 -25.5 -61.5t-61.5 -25.5v0v0v0v0z"
        />
      </svg>
    </>
  )
}

export default ConverterSvg
