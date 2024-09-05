import React from 'react'
import { omit } from 'common/util'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  isPassword?: boolean
}

const InputText = (props: Props) => {
  const type = Boolean(props.isPassword || false) ? 'password' : 'text'

  const omitProps = omit(props, ['isPassword', 'isInvalid', 'label'])
  return (
    <label className={`form-label`}>
      {`${props.label?.replace(':', '')}`}
      <input
        {...omitProps}
        className="form-control"
        type={type}
        autoCapitalize={'none'}
      />
    </label>
  )
}

export default InputText
