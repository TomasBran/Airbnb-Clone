import React, { createContext, useState, useContext } from 'react';
import { login, logout } from '../services/apiRequests';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
    const logoutUser = () => {
      logout()
      setUser(null);
    };

    
  const loginUser = (userData) => {
    
    login(userData)
  };     


  

  return (
    <AuthContext.Provider value={{ user, setUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
