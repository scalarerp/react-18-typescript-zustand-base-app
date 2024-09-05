import PageHeader from './pageHeader'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { routerNav } from 'router'

const Main = () => {
  routerNav.navigate = useNavigate()
  routerNav.location = useLocation()

  return (
    <div className="d-flex flex-column w-100 vh-100">
      <PageHeader />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Main
