import React, { createContext, useContext, useReducer, useEffect } from 'react'

const AppContext = createContext()

const initialState = {
  darkMode: false,
  mobileMenuOpen: false,
  chatOpen: false,
  loading: false,
  user: {
    name: 'Maiyo Denis',
    title: 'Software Engineer',
    email: 'maiyo.denis@example.com',
    phone: '+1 (123) 456-7890',
    location: 'San Francisco, CA',
    website: 'www.maiyodenis.com',
    github: 'https://github.com/maiyodenis',
    linkedin: 'https://linkedin.com/in/maiyodenis',
    twitter: 'https://twitter.com/maiyodenis',
    instagram: 'https://instagram.com/maiyodenis'
  }
}

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_DARK_MODE':
      return { ...state, darkMode: action.payload }
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode }
    case 'TOGGLE_MOBILE_MENU':
      return { ...state, mobileMenuOpen: !state.mobileMenuOpen }
    case 'TOGGLE_CHAT':
      return { ...state, chatOpen: !state.chatOpen }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    case 'CLOSE_MOBILE_MENU':
      return { ...state, mobileMenuOpen: false }
    case 'CLOSE_CHAT':
      return { ...state, chatOpen: false }
    default:
      return state
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  // Dark mode persistence
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode !== null) {
      dispatch({ type: 'SET_DARK_MODE', payload: JSON.parse(savedDarkMode) })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(state.darkMode))
    if (state.darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [state.darkMode])

  const value = {
    state,
    dispatch,
    // Action creators
    toggleDarkMode: () => dispatch({ type: 'TOGGLE_DARK_MODE' }),
    toggleMobileMenu: () => dispatch({ type: 'TOGGLE_MOBILE_MENU' }),
    toggleChat: () => dispatch({ type: 'TOGGLE_CHAT' }),
    setLoading: (loading) => dispatch({ type: 'SET_LOADING', payload: loading }),
    closeMobileMenu: () => dispatch({ type: 'CLOSE_MOBILE_MENU' }),
    closeChat: () => dispatch({ type: 'CLOSE_CHAT' })
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}
