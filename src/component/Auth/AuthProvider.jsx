import React, { createContext, useContext } from "react";

export const AuthContext = createContext({
  handleLogin: (response) => {},
  handleLogout: () => {},
});

export const AuthProvider = ({ children }) => {

  const handleLogin = (response) => {
    try {
      localStorage.setItem("userId", response.id)
      localStorage.setItem("email", response.email);
      localStorage.setItem("token", response.token);
    } catch (error) {
      console.error("Failed to JWT: ", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userId")
    localStorage.removeItem("email");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};