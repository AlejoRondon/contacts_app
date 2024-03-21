// src/redux/todoSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { saveToSessionStorage, loadFromSessionStorage } from '../services/sessionStorageUtils'
import { updateContactDB, deleteContactDB, createNewContactDB } from '../services/json-server/db_services'
const initialState = {
  settings: {
    max_favorites_in_overview: 5,
    max_contacts_in_overview: 10,
    max_contacts_per_page: 15,
  },
  contacts: [],
  reqres_favorites: loadFromSessionStorage('reqres_favorites'),
  reqres_deleted: loadFromSessionStorage('reqres_deleted'),
}

const appInfoSlice = createSlice({
  name: 'app_info',
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts = [...action.payload]
    },
    addContact: (state, action) => {
      state.contacts = [action.payload, ...state.contacts]
    },
    deleteContact: (state, action) => {
      const contact = state.contacts.find(contact => contact.id === action.payload.id)
      if (contact.source === 'api_reqres') {
        state.reqres_deleted = [...state.reqres_deleted, action.payload.id]
        state.reqres_favorites = state.reqres_favorites.filter(element => element !== action.payload.id)
      }
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id)
    },
    toggleFavorite: (state, action) => {
      console.log(action.payload)
      const contact = state.contacts.find(contact => contact.id === action.payload.id)
      if (contact) {
        contact.favorite = !contact.favorite // Toggle the task's status

        if (contact.source === 'api_reqres') {
          let temp_arr = state.reqres_favorites.includes(action.payload.id) ? state.reqres_favorites.filter(element => element !== action.payload.id) : [...state.reqres_favorites, contact.id]
          state.reqres_favorites = temp_arr
        }
      }
    },
  },
})

// Middleware to manage contacts in session storage
const updateSessionStorageMiddleware = store => next => action => {
  const result = next(action) // Pass the action to the next middleware in chain
  if (action.payload.source === 'api_reqres') {
    if (action.type === 'app_info/toggleFavorite') {
      console.log('updateSessionStorageMiddleware app_info/toggleFavorite', action.payload)
      saveToSessionStorage('reqres_favorites', store.getState().app_info.reqres_favorites)
    } else if (action.type === 'app_info/deleteContact') {
      console.log('updateSessionStorageMiddleware app_info/deleteContact', action.payload)
      saveToSessionStorage('reqres_favorites', store.getState().app_info.reqres_favorites)
      saveToSessionStorage('reqres_deleted', store.getState().app_info.reqres_deleted)
    }
  }
  return result // Return whatever the next middleware returns
}

// Middleware to manage contacts in JSON-Server DB
const updateJsonServerDbMiddleware = () => next => action => {
  const result = next(action) // Pass the action to the next middleware in chain
  if (action.payload.source === 'json_server') {
    if (action.type === 'app_info/toggleFavorite') {
      console.log('updateJsonServerDbMiddleware app_info/toggleFavorite', action.payload)

      updateContactDB(action.payload.id, { ...action.payload, favorite: !action.payload.favorite })
    } else if (action.type === 'app_info/deleteContact') {
      console.log('updateJsonServerDbMiddleware app_info/deleteContact', action.payload)
      deleteContactDB(action.payload.id)
    } else if (action.type === 'app_info/addContact') {
      console.log('updateJsonServerDbMiddleware app_info/addContact', action.payload)
      createNewContactDB(action.payload)
    }
  }
  return result // Return whatever the next middleware returns
}

// Export actions and reducer
export const { setContacts, addContact, deleteContact, toggleFavorite } = appInfoSlice.actions
export default appInfoSlice.reducer

// Export the middleware
export { updateSessionStorageMiddleware, updateJsonServerDbMiddleware }
