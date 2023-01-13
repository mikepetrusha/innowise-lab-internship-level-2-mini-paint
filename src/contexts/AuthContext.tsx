import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { FC, useContext, useEffect, useState, ReactNode } from "react";
import { auth } from "../api/firebase.config";

export interface IAuthContext {
  signin?: any;
  signup?: any;
  signout?: any;
  currentUserEmail?: string;
}

const AuthContext = React.createContext<IAuthContext>({});

export function useAuth(): IAuthContext {
  return useContext(AuthContext);
}

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUserEmail, setCurrentUserEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signout = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUserEmail(user?.email || "");
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: IAuthContext = {
    signin,
    signup,
    signout,
    currentUserEmail,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
