export const routePaths = {
  // login: '/login',
  home: '/',
  svg: '/svg',
  // generals: '/generals',
  // logs: '/logs',
} as const

export type IRoutePaths = (typeof routePaths)[keyof typeof routePaths]
