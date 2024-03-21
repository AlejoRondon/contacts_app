import { useState, useEffect } from 'react'

// Custom hook for managing session storage
function useSessionStorage(key, initialValue) {
  // Retrieve the stored value from session storage, or use the initial value
  const [value, setValue] = useState(() => {
    const storedValue = sessionStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : initialValue
  })

  // Update session storage when the value changes
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default useSessionStorage
