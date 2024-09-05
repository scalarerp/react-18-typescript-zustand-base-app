export const omit = <T extends Record<string, any>>(
  obj: T,
  arr: string[]
): Partial<T> =>
  Object.keys(obj)
    .filter((k) => !arr.includes(k))
    .reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {})

export const getLimitedRange = (
  value: number,
  min: number,
  max: number
): number => {
  const result = value < min ? min : value > max ? max : value
  return result
}

export const isUpdatingInParams = () => {
  const result = getParameterValue('status')
  return result === 'update'
}

export const isUpdateDoneInParams = (isRunning = false) => {
  if (isRunning) return false
  const result = getParameterValue('status')
  return result === 'updateDone'
}

const getParameterValue = (parameterName: string): string => {
  const currentUrl = new URL(window.location.href)
  const searchParams = new URLSearchParams(currentUrl.search)
  const result = searchParams.get(parameterName)
  return result || ''
}
