import { svgProps, defaultProps } from './_svgBase'

const DigitalOutputSvg = (props: svgProps): JSX.Element => {
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
        viewBox="0 0 47 18"
      >
        <g id="Desktop" stroke="none" strokeWidth="1" fillRule="evenodd">
          <g
            id="Relatórios-Período(Texto)"
            transform="translate(-410.000000, -1273.000000)"
          >
            <g id="Instrumentos" transform="translate(88.000000, 449.000000)">
              <g id="Content" transform="translate(32.000000, 66.000000)">
                <g
                  id="COMP-Output"
                  transform="translate(226.000000, 741.010101)"
                >
                  <polygon
                    id="saida-digital"
                    points="64 16.989899 64 24.9593318 67.2982456 24.9593318 67.2982456 20.2137796 71.9707602 20.2137796 71.9707602 34.989899 94.4175205 34.989899 94.4175205 20.572705 99.7309942 20.572705 99.7309942 34.989899 111 34.989899 111 25.9888244 107.701754 25.9888244 107.701754 31.7660184 103.02924 31.7660184 103.02924 17.3477497 91.1181754 17.3477497 91.1181754 31.7660184 75.2690058 31.7660184 75.2690058 16.989899"
                  ></polygon>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </>
  )
}

export default DigitalOutputSvg
