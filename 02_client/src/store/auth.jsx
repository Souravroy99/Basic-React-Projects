import { createContext, useContext, useEffect, useState } from "react";

// Step 1
export const AuthContext = createContext() ;    // Context API


// Step 2
export const AuthProvider = (props) => {

    const [token, setToken] = useState(localStorage.getItem('token')) ;
    const [user, setUser] = useState("") ;
    const [services, setServices] = useState([]) ;


    const storeTokenInLocalStorage = (serverToken) => {

        setToken(serverToken); // Very Important
        return localStorage.setItem("token", serverToken) ;
    }


    // Check that, is the user loggedIn or not
    const isLoggedIn = !!token ;

    console.log(isLoggedIn, token)



    // Logout Functionality
    const LogoutUser = () => {
        setToken("") ;
        return localStorage.removeItem('token') ;
    };
 

    // JWT AUTHENTICATION - to get the currently LoggedIn user data from Backend
    const userAuthentication = async() => {  // Never write (req,res), because this is 'Frontend'
        try{                                     
            const response = await fetch(`http://localhost:5000/api/auth/user`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });

            const data = await response.json() ;
            if(response.ok) {
                setUser(data.userData) ;
            } 
            else {
                console.log("The user is not LoggedIn(auth.jsx), So we are unable to provide JWT Token!!!");
            }
        } 
        catch(error) {
            console.log("Error in fetching user data(auth.jsx) : ", error) ;
        }
 
    };

    // To fetch Services data from database
    const getServices = async() => {
        try {
            const response = await fetch(`http://localhost:5000/api/data/service`, {
                method: "GET",
            });

            if(response.ok) {
                const data = await response.json() ;
                console.log(data.message) ;
                setServices(data.message) ;
            }
            else {
                console.log(`In getServices function(auth.jsx)--> response is not 'OK'`) ;
            }
        }
        catch(error){
            console.log(`Services frontend error : ${error}`) ;
        }
    } 


    useEffect(() => {
        getServices() ;
        userAuthentication() ;
    }, []);


    return (
        <AuthContext.Provider value={ { storeTokenInLocalStorage, LogoutUser, isLoggedIn , user , services , token } }>
            {props.children} 
        </AuthContext.Provider>
    )
};


// Step 3
export const useAuth = () => {
    return useContext(AuthContext) ;
}