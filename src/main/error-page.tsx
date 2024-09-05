import { useRouteError } from 'react-router-dom'
import { goTo } from 'router'

import { toast } from 'sonner'

interface Error {
  statusText?: string
  message?: string
}

export default function ErrorPage() {
  const error = useRouteError() as Error

  toast.error(error.statusText)
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <button
        type="button"
        className=" btn btn-outline"
        onClick={() => goTo('/')}
      >
        <h1>Voltar para Inicio</h1>
      </button>
    </div>
  )
}
