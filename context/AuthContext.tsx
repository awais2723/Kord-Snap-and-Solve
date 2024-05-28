/* This file sets up an authentication context using the Firebase SDK. 
It provides a React context (`AuthContext`) to manage and access 
authentication state throughout the application. The context includes 
information about the current user, whether a user is logged in, and 
the loading state of the authentication process. Here's a breakdown of what
each part is doing: */
import { useContext, useState, useEffect, createContext, ReactNode } from 'react';
import { onAuthStateChanged, User } from 'node_modules/firebase/auth';

import { auth } from '@/firebase/config';

export type AuthContextType = {
  currentUser: User | null;
  userLoggedIn: boolean;
  loading: boolean;
  resetAuth: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

type Props = {
  children: ReactNode;
};

const AuthProvider: React.FC<Props> = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const initializeUser = (user: User | null) => {
      setLoading(true);
      if (user) {
        setCurrentUser(user);
        setUserLoggedIn(true);
      } else {
        setCurrentUser(null);
        setUserLoggedIn(false);
      }
      setLoading(false);
    };

    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return () => unsubscribe();
  }, []);

  const resetAuth = () => {
    setLoading(false);
    setUserLoggedIn(false);
    setCurrentUser(null);
  };

  const value: AuthContextType = {
    loading,
    userLoggedIn,
    currentUser,
    resetAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
