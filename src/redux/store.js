// src/store.js
import { configureStore } from '@reduxjs/toolkit'
import appInfoReducer from './appInfoSlice'

export const store = configureStore({
  reducer: {
    app_info: appInfoReducer, // Add your reducer here
  },
})
