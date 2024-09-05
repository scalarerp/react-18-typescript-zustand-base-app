import { defaultProps, svgProps } from './_svgBase'

const ReportTrendingSvg = (props: svgProps) => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <svg
      {...defaultProps}
      {...props}
      width={size}
      height={size}
      fill={color}
      viewBox="-10 0 831 1024"
    >
      <path
        fill={color}
        d="M725 1024h-640q-35 0 -60 -25t-25 -60v0v-854q0 -35 25 -60t60 -25v0h640q36 0 61 25t25 60v0v854q0 35 -25 60t-61 25v0zM634 398q-15 0 -26 10.5t-11 25.5v463q0 15 11 26t26 11h48q15 0 26 -11t11 -26v-463q0 -15 -11 -25.5t-26 -10.5v0h-48zM464 533q-15 0 -26 10.5 t-11 25.5v328q0 15 11 26t26 11h48q15 0 26 -11t11 -26v-328q0 -15 -11 -25.5t-26 -10.5v0h-48zM294 454q-15 0 -26 11t-11 26v406q0 15 11 26t26 11h48q15 0 26 -11t11 -26v-406q0 -15 -11 -26t-26 -11v0h-48zM124 585q-15 0 -26 10.5t-11 25.5v276q0 15 11 26t26 11h48 q15 0 26 -11t11 -26v-276q0 -15 -11 -25.5t-26 -10.5v0h-48zM316 289v0v0q-14 0 -26.5 5.5t-22.5 14.5l-175 176q-3 3 -5 7t-2 9t2 9t5 8v0q3 3 7 4.5t9 1.5t9 -1.5t8 -4.5l175 -176q3 -3 7.5 -5t8.5 -2q5 0 9.5 2t7.5 5v0l73 73q9 10 22 15.5t27 5.5t27 -5.5t22 -15.5 l182 -182v106q0 10 7 16.5t17 6.5q9 0 16 -6.5t7 -16.5v0v-162q0 -9 -7 -16t-16 -7v0h-163q-9 0 -16 7t-7 16q0 10 7 16.5t16 6.5h107l-183 183q-3 3 -7 4.5t-9 1.5t-9 -1.5t-7 -4.5v0l-74 -74q-9 -9 -21.5 -14.5t-27.5 -5.5v0v0v0v0z"
      />
    </svg>
  )
}

export default ReportTrendingSvg
