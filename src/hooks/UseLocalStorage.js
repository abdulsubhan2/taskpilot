import { useState } from 'react';

function getStoredValue(key, initialValue) {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } catch (e) {
    return initialValue;
  }
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => getStoredValue(key, initialValue));

  const setStoredValue = (newVal) => {
    try {
      const valueToStore = typeof newVal === 'function' ? newVal(value) : newVal;
      setValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (e) {
      // ignore write errors
    }
  };

  const remove = () => {
    try {
      window.localStorage.removeItem(key);
      setValue(initialValue);
    } catch (e) {}
  };

  return [value, setStoredValue, remove];
}
