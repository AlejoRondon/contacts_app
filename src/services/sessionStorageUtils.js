// src/utils/sessionStorageUtils.js

// Convert an object to a string and store it in sessionStorage
export function saveToSessionStorage(key, state) {
  try {
    const serialisedState = JSON.stringify(state)
    sessionStorage.setItem(key, serialisedState)
  } catch (e) {
    console.warn(`Error saving to sessionStorage: ${e}`)
  }
}

// Load a string from sessionStorage and convert it into an object
// Invalid output must be undefined
export function loadFromSessionStorage(key) {
  try {
    const storedValue = sessionStorage.getItem(key)
    if (storedValue) {
      return JSON.parse(storedValue)
    } else {
      saveToSessionStorage(key, [])
      return []
    }
  } catch (e) {
    console.warn(`Error loading from sessionStorage: ${e}`)
    return []
  }
}
