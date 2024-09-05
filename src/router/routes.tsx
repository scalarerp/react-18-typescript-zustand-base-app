import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { routePaths } from './types'
import Main from 'main'
import ErrorPage from 'main/error-page'

const HomePage = lazy(() => import('features/home'))

const AllSvgIconsGallery = lazy(
  () => import('common/SvgIcons/SvgGallery/AllSvgIconsGallery')
)

export const router = createBrowserRouter([
  {
    id: 'root',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: routePaths.home,
        element: <HomePage />,
        // children: [
        //   { path: routePaths.logs, element: <Logs /> },
        // ],
      },
      {
        path: routePaths.svg,
        element: <AllSvgIconsGallery />,
      },
    ],
  },
])
