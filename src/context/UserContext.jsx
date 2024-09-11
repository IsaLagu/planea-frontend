import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const checkTokenExpiration = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);

      const isExpired = decodedToken.exp * 1000 < Date.now();
      if (isExpired) {
        clearToken();
        toast("🚀 ¡Uuuups! Su sesión ha expirado");
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken.exp * 1000 > Date.now()) {
        setUser({ email: decodedToken.sub });
      } else {
        clearToken();
      }
    }

    const intervalId = setInterval(() => {
      checkTokenExpiration();
    }, 60 * 10 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  const setToken = (token) => {
    localStorage.setItem("token", token);
    const decodedToken = jwtDecode(token);
    setUser({ email: decodedToken.sub });
  };

  const clearToken = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return <UserContext.Provider value={{ user, setToken, clearToken }}>{children}</UserContext.Provider>;
};
