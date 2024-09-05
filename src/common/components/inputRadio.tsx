import { omit } from 'common/util'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}
const InputRadio = (props: Props) => {
  const omitProps = omit(props, ['label'])
  return (
    <label className="form-check-label">
      <input
        {...omitProps}
        className="ms-2 me-2 form-check-input"
        type="radio"
      />
      {`${props?.label?.replace(':', '')}`}
    </label>
  )
}

export default InputRadio
