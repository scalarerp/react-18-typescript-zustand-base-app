import { defaultProps, svgProps } from './_svgBase'

interface Props extends svgProps {}

const FilterSvg = (props: Props): JSX.Element => {
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
        <g fill={color} strokeWidth={0}>
          <path d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"></path>
        </g>
      </svg>
    </>
  )
}

export default FilterSvg
