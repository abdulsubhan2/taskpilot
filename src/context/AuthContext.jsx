import React, { createContext, useContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/UseLocalStorage';
import { setCookie, getCookie, eraseCookie } from '../utils/cookieUtil';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // store minimal user info in localStorage
  const [user, setUser, removeUser] = useLocalStorage('taskpilot_user', null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // If session cookie exists, consider the user authenticated.
    // Try to rehydrate user from localStorage if available; if not, keep user null but allow session.
    const session = getCookie('taskpilot_session');
    if (session) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [user]);

  function login(userDetails) {
    // set session cookie (no days -> session cookie cleared when browser closes)
    setCookie('taskpilot_session', '1');
    setUser(userDetails);
    setIsAuthenticated(true);
  }

  function logout() {
    eraseCookie('taskpilot_session');
    removeUser();
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
