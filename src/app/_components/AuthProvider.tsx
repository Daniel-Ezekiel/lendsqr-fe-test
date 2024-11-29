"use client";
import { useEffect, useState } from "react";
import { AuthContext } from "../_contexts/AuthUserContext";
import { auth } from "../_services/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setCurrentUser(user);
        setIsLoggedIn(true);
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
