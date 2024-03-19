// ContactContext.js
import reqrest from '../services/reqres'
import { fetchAllContacts } from '../services/json-server/db_services'
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
    settings: {
      max_favorites_in_overview: 5,
      max_contacts_in_overview: 10,
      max_contacts_per_page: 15,
    },
    contacts: [],
    favorites: [],
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  useEffect(() => {
    // prettier-ignore
    (async () => {
      try {
        let response = await reqrest.get(`/?page=1`)
        let contacts_reqres = response.data.data

        response = await reqrest.get(`/?page=2`)
        contacts_reqres = [...contacts_reqres, ...response.data.data]
        contacts_reqres = contacts_reqres.map((e)=>{
          return {...e, 'favorite': false}
        })
        // console.log('contacts_reqres', contacts_reqres)

        let contacts_json_server = await fetchAllContacts()

        // console.log('contacts_json_server', contacts_json_server)
        dispatch({ type: 'SET_CONTACTS', payload: [...contacts_reqres, ...contacts_json_server] })
      } catch (error) {
        console.error('Error fetching pokemons information:', error)
      }
    })()
  }, [state.current_page])

  useEffect(() => {
    // console.log(JSON.stringify(state))
  }, [state])

  return <ContactsContext.Provider value={{ state, dispatch }}>{children}</ContactsContext.Provider>
}
