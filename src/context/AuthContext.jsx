import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(
    JSON.parse(localStorage.getItem("usuarioActivo")) || null
  );

  const login = (userData) => {
    localStorage.setItem("usuarioActivo", JSON.stringify(userData));
    setUsuario(userData);
  };

  const logout = () => {
    localStorage.removeItem("usuarioActivo");
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
