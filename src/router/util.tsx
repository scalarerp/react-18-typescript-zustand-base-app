import { Location, NavigateFunction, Navigate } from 'react-router-dom'
import { IRoutePaths, routePaths } from './types'

interface IRouterNav {
  navigate: NavigateFunction | null
  location: Location<any> | null
}

export const routerNav: IRouterNav = {
  navigate: null,
  location: null,
}

export const goTo = (route: IRoutePaths, id?: string | number) => {
  if (!routerNav.navigate) {
    console.log('goTo without navigate', route)
    alert('location not charged for goTo' + route)
  }

  if (routerNav.navigate && checkIsValidRoute(route)) {
    if (route.includes(':')) {
      const result = route.substring(0, route.indexOf(':')) + id
      routerNav.navigate(result)
      return
    }

    routerNav.navigate(route)
  }
}

export const NavigateToComponent = ({ route }: { route: IRoutePaths }) => {
  if (!route) {
    route = '/'
  }

  if (!routerNav.location) {
    console.log('NavigateTo without Location')
    alert('location not charged')
  }

  if (routerNav.location && checkIsValidRoute(route)) {
    return <Navigate to={route} state={{ from: routerNav.location }} />
  }

  return <>invalid route</>
}

const checkIsValidRoute = (route: IRoutePaths) => {
  const isValid = Object.values(routePaths).includes(route)
  if (!isValid) {
    console.log('goTo invalid Route', route)
    alert('invalid Route')
  }
  return isValid
}

export const goBack = () => {
  if (!routerNav.navigate) {
    console.log('goTo without navigate')
    alert('location not charged')
  }

  if (routerNav.navigate) {
    routerNav.navigate(-1)
  }
}
