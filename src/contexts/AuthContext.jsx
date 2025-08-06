// src/contexts/AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [role, setRole] = useState(null);

  const login = (username, password) => {
    if (username === 'admin' && password === '123') {
      setIsLogged(true);
      setRole('admin');
      return true;
    }
    if (username === 'user' && password === '123') {
      setIsLogged(true);
      setRole('employee');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLogged(false);
    setRole(null);
  };

  return <AuthContext.Provider value={{ isLogged, role, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
