// ContactContext.js
import reqrest from '../services/reqrest'
import { createContext, useReducer, useContext, useEffect } from 'react'

const ContactsContext = createContext()

const contactReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CONTACTS':
      return { ...state, contacts: action.payload }
    case 'INCREASE_PAGE':
      return { ...state, current_page: state.current_page + 1 }
    case 'DECREASE_PAGE':
      return { ...state, current_page: state.current_page - 1 }
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.payload] }
    default:
      return state
  }
}

export const useContactsContext = () => useContext(ContactsContext)

export const ContactsProvider = ({ children }) => {
  const initialState = {
    current_page: 1,
    contacts: [],
    favorites: [],
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  useEffect(() => {
    // prettier-ignore
    (async () => {
      try {
        const response = await reqrest.get(`/?page=${state.current_page}`)
        let contacts_temp = response.data.data
        console.log(contacts_temp)
        dispatch({ type: 'SET_CONTACTS', payload: contacts_temp })
      } catch (error) {
        console.error('Error fetching pokemons information:', error)
      }
    })()
  }, [state.current_page])

  useEffect(() => {
    console.log(JSON.stringify(state))
  }, [state])

  return <ContactsContext.Provider value={{ state, dispatch }}>{children}</ContactsContext.Provider>
}
