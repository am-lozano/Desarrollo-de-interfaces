// AuthContext.ts
import { createContext, useState, ReactNode } from "react";

type AuthContextType = {
    isLoggedIn: boolean;
    userName: string | null;
    loginUser: (name: string) => void;
    logoutUser: () => void;
};

export const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    userName: null,
    loginUser: () => { },
    logoutUser: () => { },
});

type ProviderProps = {
    children: ReactNode;
};

export function AuthProvider({ children }: ProviderProps) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState<string | null>(null);

    const loginUser = (name: string) => {
        setIsLoggedIn(true);
        setUserName(name);
    };

    const logoutUser = () => {
        setIsLoggedIn(false);
        setUserName(null);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userName, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
}
