import React, { createContext, useState, ReactNode, useEffect } from 'react'

type TContextType = {
  toggleDark: () => void
  isDark: boolean
}

const defaultContext: TContextType = {
  toggleDark: () => {},
  isDark: false,
}

const ThemeContext = createContext(defaultContext)

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(true)

  useEffect(() => {
    const lsTheme = localStorage.getItem('ThemeContext:isDark')
    if (typeof lsTheme === 'string') {
      const lsDark = JSON.parse(lsTheme)
      if (lsDark !== undefined && lsDark !== null) {
        setIsDark(lsDark)
      } else if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: light)').matches
      ) {
        setIsDark(false)
      }
    }
  }, [])

  const context: TContextType = {
    toggleDark: () => {
      localStorage.setItem('ThemeContext:isDark', String(!isDark))
      setIsDark(!isDark)
    },
    isDark,
  }

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContext
