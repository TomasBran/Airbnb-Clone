import React, { createContext, useState, useContext } from 'react';
import { login, logout, register } from '../services/apiRequests';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginUser = (userData) => {
    
    login(userData)
    setUser(userData);
  };

  const logoutUser = () => {
    logout()
    setUser(null);
  };

  const registerUser = (userData) => {
    register(userData)
  }

  return (
    <AuthContext.Provider value={{ user, setUser, loginUser, logoutUser, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
