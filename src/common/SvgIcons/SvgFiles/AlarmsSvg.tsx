import { svgProps, defaultProps } from './_svgBase'
//unie905 de icomoon
//icone dos settings

const AlarmsSvg = (props: svgProps): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <>
      <svg
        {...defaultProps}
        {...props}
        width={size}
        height={size}
        fill={color}
        viewBox="-10 0 899 1024"
      >
        <path
          d="M860 707l-11 -14q-38 -45 -59.5 -92.5t-21.5 -176.5v-8v-8q0 -57 -17 -108.5t-47 -93.5l1 1q-25 -32 -57 -55.5t-69 -38.5h-2q-1 -1 -1.5 -1t-0.5 -1v0q-10 -48 -48 -79.5t-88 -31.5t-87.5 31.5t-47.5 78.5v1l-1 1l-1 1v0q-48 20 -84 49t-60 67.5t-36 87.5
q-11 48 -11 107q0 129 -21.5 176.5t-59.5 93.5q-3 3 -6 6.5t-5 6.5q-9 10 -14 23.5t-5 27.5q0 10 2 19t6 17v-1q11 22 31.5 35t45.5 13h0.5h1.5h-1h706h1h1q25 0 45.5 -13t30.5 -34l1 -1q3 -7 5.5 -16t2.5 -19q0 -14 -5 -27.5t-14 -23.5v0v0zM439 1024q52 0 94.5 -26.5
t66.5 -68.5v-1q1 -1 1 -2v-3q0 -3 -2.5 -6t-6.5 -3v0v0h-306v0v0q-4 0 -6.5 3t-2.5 6q0 2 0.5 3t0.5 2v0q24 43 66.5 69.5t94.5 26.5v0v0z"
        />
      </svg>
    </>
  )
}

export default AlarmsSvg
