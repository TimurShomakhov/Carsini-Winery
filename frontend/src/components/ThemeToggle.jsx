import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  )

  useEffect(() => {
    const root = window.document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="border px-3 py-1 rounded text-sm text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {darkMode ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}

export default ThemeToggle
