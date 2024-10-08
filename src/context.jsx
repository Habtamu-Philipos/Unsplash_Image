import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setISDarkTheme] = useState(false)
  const [searchTerm, setSearchTerm] = useState('cat')
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setISDarkTheme(newDarkTheme)
    const body = document.querySelector('body')
    body.classList.toggle('dark-theme', newDarkTheme)
  }

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
