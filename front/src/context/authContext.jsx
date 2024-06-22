/*
  - This component responsible for  
    - useEffect (check for the authentication token on mounting)
    - login (set authToken on cookies, update authToken State)
    - logout (remove authToken from cookies, update authToken State)

  - So childrens will have the token, login function, and logout function so that it can use it any where
    - 
 */

import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext(); // this is used by the component who wants to access the provided data(authToken, login, logout)

export default function AuthProvider({ children }) {

    // Token State
    const [authToken, setAuthToken] = useState(null);

    // Check for AuthToken on Mounting
    useEffect(() => {
        const token = Cookies.get("authToken");
        if (token) {
            setAuthToken(token);
        }
    }, []);

    // Login Function
    const login = (token) => {
        Cookies.set("authToken", token, { expires: 1 });
        setAuthToken(token);
    };

    // Logout Function
    const logout = () => {
        Cookies.remove("authToken");
        setAuthToken(null);
    };

    return <AuthContext.Provider value={{ authToken, login, logout }}>{children}</AuthContext.Provider>;
}
