import { useState } from 'react'

export function useLocalStorage ({ key, initialValue }) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = value => {
    try {
      setStoredValue(value)
    } catch (error) {
      console.error(error)
    }
  }
  return ([storedValue, setValue])
}
