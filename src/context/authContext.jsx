import React, { createContext, useContext, useState } from 'react';


const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
  });

  const login = async (pseudo, password) => {
    if (pseudo === 'user' && password === 'pass') {
      setAuthState({
        isAuthenticated: true,
        user: pseudo,
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      user: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}