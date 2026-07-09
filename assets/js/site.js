/**
 * SOURCE: src/color-mode-toggler.js
 */
(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }
    // return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    return 'dark'; // FORCE DEFAULT
  }

  const setTheme = theme => {
    if (theme === 'auto') {
      document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#bd-theme').addEventListener('click', () => {
          const storedTheme = getStoredTheme()
          const theme = (storedTheme == 'light') ? 'dark' : 'light'
          setStoredTheme(theme)
          setTheme(theme)
        })
  })
})()
