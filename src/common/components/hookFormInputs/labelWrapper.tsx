import React, { memo, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

import { XSvg } from 'common/SvgIcons'

interface Props extends React.InputHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
  clearable: boolean
  label?: string
  name: string
  showError?: boolean
  isLoading?: boolean
}

const LabelWrapper = (props: Props) => {
  const {
    children,
    clearable = false,
    label,
    name = '',
    showError = false,
    isLoading = false,
  } = props

  const methods = useFormContext()

  //dev error checks
  useEffect(() => {
    if (name === '') {
      throw new Error('❌ Every hook-form component needs a name')
    }

    const d = methods.formState.defaultValues
    if (!d) {
      throw new Error(`❌ Must define defaultValues in hook-form context. `)
    }
    if (!Object.keys(d).includes(name)) {
      throw new Error(`❌ Field ${name} not exist in hook-form context`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return <div className="d-flex gap-3 m-2">{label}.....</div>
  }

  const error =
    methods.formState.errors && (methods.formState.errors[name]?.message || '')

  const isValid = !error || error === ''
  const _label = `${!isValid ? '* ' : ''} ${label?.replace(':', '')}`

  return (
    <div className="field-container">
      <div className="field">
        <label htmlFor={name}>
          {label && (
            <div className={`${!isValid ? ' text-danger ' : ''}  ms-2`}>
              {_label}
            </div>
          )}
        </label>
        <div className="input-wrapper">
          <div className="d-flex align-items-center">
            {children}
            {clearable && (methods.getValues(name) || '') !== '' && (
              <XSvg
                className="ms-2 me-2"
                role="button"
                onClick={() => {
                  methods.setValue(name, '')
                  methods.trigger(name)
                }}
              />
            )}
          </div>
          {showError && !isValid && (
            <div className="ms-2 text-danger">{`${JSON.stringify(error)}`}</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default memo(LabelWrapper)
