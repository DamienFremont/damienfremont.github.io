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

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme')

    if (!themeSwitcher) {
      return
    }

    const svg = themeSwitcher.querySelector('svg');
    svg.style.transform = (theme == 'dark') ? "rotate(180deg)" : "rotate(0deg)";

    if (focus) {
      themeSwitcher.focus()
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelector('#bd-theme').addEventListener('click', () => {
          const storedTheme = getStoredTheme()
          const theme = (storedTheme == 'dark') ? 'light' : 'dark'
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
  })
})()
