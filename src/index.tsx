import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './main/app'

import { Toaster } from 'sonner'

import 'assets/bootstrap.scss'
import 'assets/index.scss'

const root = ReactDOM.createRoot(document.getElementById('app')!)
root.render(
  <React.StrictMode>
    <Suspense fallback={<>.......</>}>
      <App />
      <Toaster
        expand
        richColors
        closeButton
        visibleToasts={9}
        position={
          process.env.NODE_ENV !== 'production' ? 'bottom-right' : 'top-right'
        }
      />
    </Suspense>
  </React.StrictMode>
)
