import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const storeTokenInLS = (token) => {

        localStorage.setItem("token", token);
    }

    return <AuthContext.Provider value={{storeTokenInLS}}>
        {children}
    </AuthContext.Provider>

}

// constum hook
export const useAuth = () => {
    return useContext(AuthContext);
}