import { getLimitedRange } from 'common/util'
import React from 'react'

const PercentageSvg = ({
  size = 24,
  percentage = 100,
  color = 'green',
}: {
  size?: number
  percentage?: number
  color?: string
}) => {
  const _percentage = getLimitedRange(percentage, 1, 100)

  const roundRadius = 40
  const roundCircum = 2 * roundRadius * Math.PI
  const roundDraw = (_percentage * roundCircum) / 100
  const svgStyle: React.CSSProperties = {
    transform: 'rotate(90deg)',
    transition: 'all 1s ease-in-out',
  }

  return (
    <svg
      fill="none"
      stroke={color}
      strokeWidth="16"
      strokeLinecap="round"
      strokeDasharray={`${roundDraw} 999`}
      viewBox="0 0 100 100"
      width={size}
      height={size}
      style={svgStyle}
    >
      <circle cx="50" cy="50" r={roundRadius}></circle>
    </svg>
  )
}

export default PercentageSvg
