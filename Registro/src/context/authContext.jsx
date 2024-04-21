import { createContext, useContext, useMemo, useState } from "react";


// Creamos el contexto
const AuthContext = createContext();

// Funcion que provee el contexto
export const AuthContextProvider = ({ children }) => {

    // Crear el estado del usuario
    const [ user, setUser ] = useState(() => {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    });

    // Crear la funcion de login
    const login = (data) => {
        localStorage.setItem("user", data);
        const parseUser = JSON.stringify(data);
        setUser(parseUser);
    };

    // Crear la funcion de logout
    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    // Crear el valor del contexto
    const value = useMemo(() => ({
        user,
        setUser,
        login,
        logout
    }), [user]);

    // Componente del contexto
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

// Usamos nuestr custom hook para usar el contexto
export const useAuth = () => useContext(AuthContext);