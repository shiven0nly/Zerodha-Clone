import React, { createContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cookies, , removeCookie] = useCookies(['token']);

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.token) {
        setUser(null);
        return;
      }
      // If a token exists in cookies, mark user as logged in.
      // If you have a backend verify endpoint you can call it here and populate user info.
      setUser({ token: cookies.token });
    };
    verifyUser();
  }, [cookies.token]);

  const logout = () => {
    removeCookie('token');
    setUser(null);
    window.location.href = "/";
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
