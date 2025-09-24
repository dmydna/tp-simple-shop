import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "./ProductosContext";

const AuthContext = createContext();


export function AuthProvider({ children }) 
{

  const  { products, setProducts } = useProducts()
  const useCat = useParams()
  const {category, setCategory} = products.filter((item) => item.category == useCat)



  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

   useEffect(() => 
    {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(savedUser);
    }
  }, []);


  const login = (username, password) => 
    {
    if (username === "admin" && password === "1234") 
      {
      const tokenFalso = "dG9rZW5GYWxzbzEyMzQ=";
      setToken(tokenFalso);
      setUser(username);
      localStorage.setItem("token", tokenFalso);
      localStorage.setItem("user", username);
      return true;
    }
    return false;
  };


    const logout = () => 
    {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

    return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);