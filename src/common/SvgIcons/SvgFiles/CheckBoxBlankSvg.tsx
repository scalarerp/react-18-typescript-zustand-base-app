import { svgProps, defaultProps } from './_svgBase'

interface Props extends svgProps {
  checked?: boolean
}

const CheckBoxBlankSvg = (props: Props): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <>
      <svg
        {...defaultProps}
        {...props}
        width={size}
        height={size}
        fill={color}
        stroke={color}
        viewBox="0 -960 960 960"
      >
        <path d="M206.783-100.782q-44.305 0-75.153-30.848-30.848-30.848-30.848-75.153v-546.434q0-44.305 30.848-75.153 30.848-30.848 75.153-30.848h546.434q44.305 0 75.153 30.848 30.848 30.848 30.848 75.153v546.434q0 44.305-30.848 75.153-30.848 30.848-75.153 30.848H206.783Zm0-106.001h546.434v-546.434H206.783v546.434Z" />
      </svg>
    </>
  )
}

export default CheckBoxBlankSvg
