export const initialState = {
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

export function appReducer(state, action) {
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
