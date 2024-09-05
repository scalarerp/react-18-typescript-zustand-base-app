import { svgProps, defaultProps } from './_svgBase'

const CalendarWeekSvg = (props: svgProps): JSX.Element => {
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
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
        <path d="M17 14h-6"></path>
        <path d="M13 18H7"></path>
        <path d="M7 14h.01"></path>
        <path d="M17 18h.01"></path>
      </svg>
    </>
  )
}

export default CalendarWeekSvg
