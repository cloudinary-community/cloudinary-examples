import { useMatches } from '@remix-run/react'

export const useEnv = () => {
  const matches = useMatches()
  const { ENV } = (matches.find((route) => {
    return route.id === 'root'
  })?.data || {})
  return ENV || {}
}
