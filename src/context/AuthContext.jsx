import React, { createContext, useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [profile, setProfile] = useState(false);
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("username") || localStorage.getItem("username");
    if(loggedInUser){
      const user = JSON.parse(loggedInUser);
      setUsername(user);
      console.log(user.email)
    }
 
  },[]);

  const handleDropdown = () => {
    setProfile((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("username") || sessionStorage.removeItem("username");
    localStorage.removeItem("token") || sessionStorage.removeItem("token");
    navigate("/");
  }

    return(
        <AuthContext.Provider value={{ profile, username, handleLogout, handleDropdown }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);
