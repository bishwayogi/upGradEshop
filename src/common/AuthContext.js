import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);
  const [address, setaddress] = useState([]);
  const login = (islogedin,isAdmin,address) => {
    setIsLoggedIn(islogedin);
    setisAdmin(isAdmin);
   
  };
  const logout = (islogout) => {
    setIsLoggedIn(islogout);
    setisAdmin(islogout);
    setaddress([])
  };
  
  const setAddress=(data)=>{
    console.log(data)
    setaddress(address);
  }
  return (
    <AuthContext.Provider value={{ isLoggedIn,isAdmin,address,login,logout,setAddress }}>
      {children}
    </AuthContext.Provider>
  );
};