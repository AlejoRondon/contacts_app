// src/store.js
import { configureStore } from '@reduxjs/toolkit'
import appInfoReducer, { updateSessionStorageMiddleware, updateJsonServerDbMiddleware } from './appInfoSlice'

export const store = configureStore({
  reducer: {
    app_info: appInfoReducer, // Add your reducer here
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(updateSessionStorageMiddleware).concat(updateJsonServerDbMiddleware), // Correct placement of middleware
})
