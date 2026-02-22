import { useState, useEffect } from 'react'

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('darkMode') === 'enabled'
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('darkMode', 'enabled')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('darkMode', 'disabled')
    }
  }, [isDark])

  return [isDark, setIsDark]
}
