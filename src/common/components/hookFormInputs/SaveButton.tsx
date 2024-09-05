import { memo } from 'react'
import { useFormContext } from 'react-hook-form'

const SaveButton = () => {
  const methods = useFormContext()
  const { isValid } = methods.formState
  return (
    <button
      type="submit"
      className="btn btn-outline btn-block"
      style={{ width: 150 }}
      disabled={!isValid}
    >
      Salvar
    </button>
  )
}

export default memo(SaveButton)
