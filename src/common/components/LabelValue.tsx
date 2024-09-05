import { nanoid } from 'nanoid'

interface Props {
  label: string
  children: React.ReactNode
  className?: string
  isLabelHalfSize?: boolean
  showAsReadOnlyInput?: boolean
}

const LabelValue = (props: Props) => {
  const {
    label = '',
    children,
    className = '',
    isLabelHalfSize = false,
    showAsReadOnlyInput = false,
  } = props

  const _label = `${label?.replace(':', '')}`

  if (showAsReadOnlyInput) {
    const inputId = nanoid()

    return (
      <div className="field-container">
        <div className="field">
          <label htmlFor={inputId}>
            <div className="ms-2">{_label}</div>
          </label>
          <div className="input-wrapper">
            <div className="d-flex align-items-center">
              <input
                disabled
                id={inputId}
                name={inputId}
                className="form-control"
                aria-invalid="false"
                value={children?.toString()}
                onChange={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${className} d-flex  gap-1`}>
      <div className={`${isLabelHalfSize ? 'w-50' : 'w-25'}  text-end`}>
        {_label}
      </div>
      <div className={`${isLabelHalfSize ? 'w-50' : 'w-75'} ms-2`}>
        {children}
      </div>
    </div>
  )
}

export default LabelValue
