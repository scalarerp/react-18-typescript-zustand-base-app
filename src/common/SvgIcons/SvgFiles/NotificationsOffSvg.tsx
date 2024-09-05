import { svgProps, defaultProps } from './_svgBase'

const NotificationsOffSvg = (props: svgProps): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <>
      <svg
        {...defaultProps}
        {...props}
        height={size}
        width={size}
        fill={color}
        viewBox="0 96 960 960"
      >
        <path d="m736.616 726.921-424.906-426q23.104-20.773 47.887-33.305 24.782-12.532 52.2-20.116v-26.485q0-28.675 19.797-48.519 19.797-19.844 48.406-19.844 28.536 0 48.797 19.844 20.261 19.844 20.261 48.519v26.419q81.637 20.015 134.598 89.541 52.96 69.525 52.96 157.916v232.03ZM139.232 862.913v-89.42h86.073V488.891q0-13.058 1.565-26.156 1.565-13.098 4.695-25.17l-187.832-188.5 58.188-57.949 759.586 761.108-58.188 58.186-149.18-147.497H139.232Zm341.688 133.29q-36.204 0-62.254-25.95-26.05-25.949-26.05-62.195h176.101q0 36.746-26.01 62.445-26.01 25.7-61.787 25.7Z" />
      </svg>
    </>
  )
}

export default NotificationsOffSvg
