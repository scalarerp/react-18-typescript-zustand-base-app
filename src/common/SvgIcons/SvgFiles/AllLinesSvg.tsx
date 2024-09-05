import { svgProps, defaultProps } from './_svgBase'
//lucide-impor
const AllLinesSvg = (props: svgProps): JSX.Element => {
  const { size = defaultProps.size } = props

  return (
    <>
      <svg
        {...defaultProps}
        {...props}
        width={size}
        height={size}
        viewBox="0 0 60 64"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Group-21" fillRule="nonzero">
            <circle id="Oval-3" fill="#D0021B" cx="30" cy="8" r="8"></circle>
            <circle
              id="Oval-3-Copy-3"
              fill="#F5A623"
              cx="52"
              cy="20"
              r="8"
            ></circle>
            <circle
              id="Oval-3-Copy-4"
              fill="#F8E71C"
              cx="52"
              cy="42"
              r="8"
            ></circle>
            <circle
              id="Oval-3-Copy-5"
              fill="#7ED321"
              cx="8"
              cy="43"
              r="8"
            ></circle>
            <circle
              id="Oval-3-Copy-6"
              fill="#417505"
              cx="8"
              cy="19"
              r="8"
            ></circle>
            <circle
              id="Oval-3-Copy"
              fill="#4A90E2"
              cx="30"
              cy="32"
              r="8"
            ></circle>
            <circle
              id="Oval-3-Copy-2"
              fill="#8B572A"
              cx="30"
              cy="56"
              r="8"
            ></circle>
          </g>
        </g>
      </svg>
    </>
  )
}

export default AllLinesSvg
