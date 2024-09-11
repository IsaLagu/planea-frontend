import { jwtDecode } from "jwt-decode";
import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";

const UserContext = createContext(null);

const decodeToken = (token) => {
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  useEffect(() => {
    if (isTokenExpired()) {
      clearToken();
    }

    if (token) {
      const decodedUser = decodeToken(token);
      setUser({ email: decodedUser.sub });
    } else {
      setUser(null);
    }
  }, [token]);

  const isTokenExpired = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken.exp * 1000 < Date.now();
    }
    return false;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isTokenExpired()) {
        clearToken();
        toast("🚀 ¡Uuuups! Tu sesión ha expirado");
      }
    }, 60 * 10 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  const saveToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const clearToken = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <UserContext.Provider value={{ user, token, setToken: saveToken, clearToken }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
