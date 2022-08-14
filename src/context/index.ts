import { createContext } from "react";

type AuthContextType = {
    isAuth: boolean; 
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
    isLoading: boolean
}

export const AuthContext = createContext<AuthContextType>({
    isAuth: false, 
    setIsAuth: ()=>{},
    isLoading: true
})