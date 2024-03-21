// src/redux/todoSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  tasks: [
    { id: 1, title: 'Clean bathroom', description: 'created on initialState', done: false },
    { id: 2, title: 'Walk dog', description: 'created on initialState', done: false },
    { id: 3, title: 'Smile', description: 'created on initialState', done: true },
    { id: 4, title: 'Be happy!', description: 'created on initialState', done: true },
  ],
  settings: {
    max_favorites_in_overview: 5,
    max_contacts_in_overview: 10,
    max_contacts_per_page: 15,
  },
  contacts: [],
  favorites: [],
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
      state.contacts = state.contacts.filter(conctact => conctact.id !== action.payload)
    },
    toggleFavorite: (state, action) => {
      const contact = state.contacts.find(contact => contact.id === action.payload.id)
      if (contact) {
        contact.favorite = !contact.favorite // Toggle the task's status
      }
    },
  },
})

export const { setContacts, addContact, deleteContact, toggleFavorite, addTask, toggleTaskStatus, deleteTask, resetTasks } = appInfoSlice.actions
export default appInfoSlice.reducer
