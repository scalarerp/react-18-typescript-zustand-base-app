import { omit } from 'common/util'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const InputCheckBox = (props: Props) => {
  const omitProps = omit(props, ['label'])
  return (
    <label className="form-check-label">
      <input
        {...omitProps}
        className="ms-2 me-2 form-check-input"
        type="checkbox"
      />
      {`${props?.label?.replace(':', '')}`}
    </label>
  )
}

export default InputCheckBox
