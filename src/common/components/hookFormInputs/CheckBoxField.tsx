import React, { memo } from 'react'
import { useFormContext } from 'react-hook-form'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode
  isSwitch?: boolean
}

const CheckBoxField = (props: Props) => {
  const { children, name = '', isSwitch = false, disabled = false } = props

  const methods = useFormContext()

  if (name === '') {
    //dev error
    throw new Error('Every hook-form component needs a name')
  }

  const error =
    methods.formState.errors && (methods.formState.errors[name]?.message || '')

  const isValid = !error || error === ''

  const childrenArray = React.Children.toArray(children)
  if (childrenArray.length > 1) {
    throw new Error('só pode haver um children em CheckBoxField')
  }
  // console.log(childrenArray)

  return (
    <div className={`form-check ${isSwitch ? 'form-switch' : ''}  gap-3`}>
      <input
        id={name}
        disabled={disabled}
        {...methods.register(name)}
        className="form-check-input"
        role={isSwitch ? 'switch' : 'button'}
        type="checkbox"
        aria-invalid={!isValid}
      />
      <label className="form-check-label" htmlFor={name}>
        {children}
      </label>
    </div>
  )
}

export default memo(CheckBoxField)
