import { defaultProps, svgProps } from './_svgBase'

interface Props extends svgProps {}

const FilterNoneSvg = (props: Props): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <>
      <svg
        {...defaultProps}
        {...props}
        width={size}
        height={size}
        fill={color}
        viewBox="0 96 960 960"
      >
        <path d="M328.37 818.63q-37.783 0-64.392-26.608-26.608-26.609-26.608-64.392V253.37q0-37.783 26.608-64.392 26.609-26.609 64.392-26.609h474.26q37.783 0 64.392 26.609 26.609 26.609 26.609 64.392v474.26q0 37.783-26.609 64.392-26.609 26.608-64.392 26.608H328.37Zm0-91h474.26V253.37H328.37v474.26Zm-171 262.001q-37.783 0-64.392-26.609-26.609-26.609-26.609-64.392V333.37h91.001v565.26h565.26v91.001H157.37Zm171-736.261v474.26-474.26Z" />
      </svg>
    </>
  )
}

export default FilterNoneSvg
