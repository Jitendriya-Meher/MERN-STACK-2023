import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    let isLoggedIn = !!token;
    console.log("isLoggedIn", isLoggedIn);

    const storeTokenInLS = (token) => {
        localStorage.setItem("token", token);
        setToken(token);
    }

    const logOutUser = () => {
        setToken("");
        localStorage.removeItem("token");
    }

    return <AuthContext.Provider value={{storeTokenInLS, logOutUser, isLoggedIn}}>
        {children}
    </AuthContext.Provider>

}

// constum hook
export const useAuth = () => {
    return useContext(AuthContext);
}