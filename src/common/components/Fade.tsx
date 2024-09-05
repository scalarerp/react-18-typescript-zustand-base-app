import { useCallback, useEffect, useState } from 'react'
import { IOpenStoreNames, useIsOpenStore } from 'store/isOpenStore'
import { useEventListener } from 'usehooks-ts'

interface Props {
  children: React.ReactNode
  show: boolean
  zIndex?: number
  id?: IOpenStoreNames
}

const Fade = (props: Props) => {
  const { show, children, zIndex = 1059, id } = props
  const [render, setRender] = useState(show)
  const { closeByName } = useIsOpenStore()

  useEffect(() => {
    if (show) setRender(true)
  }, [show])

  const onAnimationEnd = () => {
    if (!show) setRender(false)
  }

  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (!id) return
        closeByName(id)
      }
    },
    [closeByName, id]
  )

  useEventListener('keydown', handleEsc)

  if (!render) return <></>

  return (
    <div
      aria-labelledby="fadeInFadeOut"
      style={{
        zIndex, //1060 = modal do bootstrap 5.0
        animation: `${show ? 'fadeIn' : 'fadeOut'} 0.5s`,
        position: 'relative',
      }}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  )
}

export default Fade
