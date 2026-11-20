import React, { useState, useEffect, createContext, useContext } from 'react'

const RouteContext = createContext({ path: '/', navigate: () => {} })

export function RouterProvider({ children }) {
  const [path, setPath] = useState(window.location.pathname.replace(/\/+$/, '') || '/')
  useEffect(() => {
    const onPop = () => {
      setPath(window.location.pathname.replace(/\/+$/, '') || '/')
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  const navigate = (to) => {
    if (to.replace(/\/+$/, '') === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    window.history.pushState({}, '', to)
    setPath(to.replace(/\/+$/, '') || '/')
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
  return <RouteContext.Provider value={{ path, navigate }}>{children}</RouteContext.Provider>
}

export const useRoute = () => useContext(RouteContext)

export function Link({ to, children, className, onClick, ...rest }) {
  const { navigate } = useRoute()
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => { e.preventDefault(); onClick && onClick(e); navigate(to) }}
      {...rest}
    >
      {children}
    </a>
  )
}
