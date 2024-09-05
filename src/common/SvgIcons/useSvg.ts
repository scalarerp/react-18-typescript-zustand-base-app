import React from 'react'
import { useMemo } from 'react'
import { AllSvgNames } from './AllSvgNames'

export const useSvg = (svgName: AllSvgNames) => {
  const SvgComponent = useMemo(
    () =>
      React.lazy(async () => {
        return await import(`./SvgFiles/${svgName}`)
      }),
    [svgName]
  )
  return SvgComponent
}
