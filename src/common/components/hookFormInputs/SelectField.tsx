import { memo } from 'react'
import { useFormContext } from 'react-hook-form'

import { omit } from 'common/util'
import LabelWrapper from './labelWrapper'

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string
  showError?: boolean
  clearable?: boolean
  isLoading?: boolean
}

const SelectField = (props: Props) => {
  const {
    label,
    name = '',
    clearable = false,
    showError = false,
    isLoading = false,
  } = props
  const methods = useFormContext()

  if (name === '') {
    //dev error
    throw new Error('Every hook-form component needs a name')
  }
  const error =
    methods.formState.errors && (methods.formState.errors[name]?.message || '')

  const isValid = !error || error === ''

  const omitProps = omit(props, [
    'label',
    'showError',
    'clearable',
    'isLoading',
  ])

  return (
    <LabelWrapper
      label={label}
      clearable={clearable}
      name={name}
      showError={showError}
      isLoading={isLoading}
    >
      <select
        id={name}
        {...omitProps}
        {...methods.register(name)}
        className="form-select"
        aria-invalid={!isValid}
      />
    </LabelWrapper>
  )
}

export default memo(SelectField)
