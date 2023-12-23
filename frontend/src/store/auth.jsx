import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    let isLoggedIn = !!token;
    console.log("isLoggedIn", isLoggedIn);

    const [user, setUser] = useState({
        username:"",
        email:""
    });

    const storeTokenInLS = (token) => {
        localStorage.setItem("token", token);
        setToken(token);
    }

    const logOutUser = () => {
        setToken("");
        localStorage.removeItem("token");
    };

    // jwt authentivations -to get the current user

    const userAuthentication = async () => {
        try{
            const response = await fetch(`http://localhost:5000/api/auth/user`,{
                method: 'GET',
                headers: {
                    Authorization : 'Bearer ' + token,
                }
            });
            console.log("res",response);

            if( response.ok){
                const data = await response.json();
                console.log("data",data.msg);

                setUser(data.msg);
            }
        }
        catch(err){

        }
    }

    // to fetch the services data from the server
    const [services, setServices] = useState([]);
    const getServices = async () => {
        try{
            const res = await fetch('http://localhost:5000/api/data/service');
            const data = await res.json();
            // console.log("object",data);
            setServices(data.data);
        }   
        catch(err){

        }
    }

    useEffect( () => {
        userAuthentication();
        getServices();
    },[]);


    return <AuthContext.Provider value={{storeTokenInLS, logOutUser, isLoggedIn, user,services}}>
        {children}
    </AuthContext.Provider>

}

// constum hook
export const useAuth = () => {
    return useContext(AuthContext);
}