import { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextType {
    user: { username: string; isAuthenticated: boolean };
    login: (username: string) => void;
    logout: () => void;
}
const defaultAuthContext: AuthContextType = {
    user: { username: "", isAuthenticated: false },
    login: () => { },
    logout: () => { },
};
const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState({ username: "", isAuthenticated: false });

    const login = (username: string) => {
        setUser({ username, isAuthenticated: true });
    };

    const logout = () => {
        setUser({ username: "", isAuthenticated: false });
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
