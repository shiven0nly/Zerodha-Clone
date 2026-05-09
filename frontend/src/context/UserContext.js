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
      // You could also add a backend route to verify the token and get user info
      // For now, we'll just assume the token existence means logged in if we don't have a verify endpoint
      // Or we can decode the JWT if needed.
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
