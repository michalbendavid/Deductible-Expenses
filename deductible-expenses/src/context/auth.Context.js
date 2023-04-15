import { createContext, useContext, useState, useEffect } from "react";
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "../firebase.config";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const register = async ({ registerEmail, registerPassword }) => {
        await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        console.log("mail", registerEmail, "password", registerPassword);
    };

    const login = async ({ loginEmail, loginPassword }) => {
        await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log("mail", loginEmail, "password", loginPassword);
    };

    const logout = async () => {
        await signOut(auth);
    };

    const contextValues = {
        user,
        register,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );
};