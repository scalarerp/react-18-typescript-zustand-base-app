import { defaultProps, svgProps } from './_svgBase'

const SelectAllMarkSvg = (props: svgProps): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <>
      <svg
        {...defaultProps}
        {...props}
        width={size}
        height={size}
        fill={color}
        viewBox="0 0 18 18"
      >
        <path
          fill={color}
          d="M3.8,2A1.8,1.8,0,0,0,2,3.8V14.6a1.8,1.8,0,0,0,1.8,1.8H14.6a1.8,1.8,0,0,0,1.8-1.8V3.8A1.8,1.8,0,0,0,14.6,2Zm9,3.6a.9.9,0,0,1,.636,1.536l-4.5,4.5a.9.9,0,0,1-1.273,0l-2.7-2.7A.9.9,0,0,1,6.236,7.664L8.3,9.727l3.864-3.864A.9.9,0,0,1,12.8,5.6Zm6.3,0a.9.9,0,0,0-.9.9V18.2H6.5a.9.9,0,1,0,0,1.8H18.2A1.8,1.8,0,0,0,20,18.2V6.5A.9.9,0,0,0,19.1,5.6Z"
          transform="translate(-2 -2)"
        />
      </svg>
    </>
  )
}

export default SelectAllMarkSvg
