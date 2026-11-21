import React, { createContext, useContext, useEffect, useState } from 'react'

const RouteContext = createContext(null)
const normalized = (value) => (value.replace(/\/+$/, '') || '/')

export function RouterProvider({ children }) {
  const [path, setPath] = useState(() => normalized(window.location.pathname))

  useEffect(() => {
    const onPop = () => setPath(normalized(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  function navigate(to) {
    const next = normalized(to)
    if (next === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    window.history.pushState(null, '', next)
    setPath(next)
  }

  return <RouteContext.Provider value={{ path, navigate }}>{children}</RouteContext.Provider>
}

export function useRoute() {
  const context = useContext(RouteContext)
  if (!context) throw new Error('useRoute must be used inside RouterProvider')
  return context
}

export function Link({ to, onClick, children, ...rest }) {
  const { navigate } = useRoute()
  return (
    <a
      {...rest}
      href={to}
      onClick={(event) => {
        onClick?.(event)
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || rest.target === '_blank') return
        event.preventDefault()
        navigate(to)
      }}
    >
      {children}
    </a>
  )
}
