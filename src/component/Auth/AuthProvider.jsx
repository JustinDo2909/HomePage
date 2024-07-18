import React, { createContext, useContext } from "react";
import { logout } from "../../utils/ApiFunction";

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

  const handleLogout = async() => {
    const id = localStorage.getItem("userId");
    const response = await logout(id);
    if(response.status === 200){
      localStorage.removeItem("userId")
      localStorage.removeItem("email");
      localStorage.removeItem("token");
    }
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