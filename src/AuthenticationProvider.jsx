import React, { createContext, useContext, useEffect, useState } from "react";

// Summary:
// AuthContext: A context for sharing user information.

// AuthProvider: A component that provides user information and related functions to the rest of the app.

// useAuth: A custom hook to access the user information and functions easily in your components.

// createContext() allows to share data - like user information - between different components without having to pass props down manually at every level
const AuthContext = createContext(null);

// AuthProvider is a special React component that "provides" the user information to any part of your app that needs it.
// This fn is imported and wrapped inn App.js
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // This code runs when the component first mounts. It checks if there's any user information stored in the browser's localStorage.
    const user = localStorage.getItem("user");

    // If there is a user saved in localStorage, it updates the user state with that information.
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // This function is used to log in or update the user. It: Updates the user state. Saves the user information in localStorage so it persists even if the page is refreshed.
  const _setUser = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  // The AuthContext.Provider wraps around the children components (the parts of the app that will use this context).
  // It provides (or "shares") the user, setUser, and logOut functions to any component that needs them.
  return (
    <AuthContext.Provider value={{ user, setUser: _setUser, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// useAuth is a custom hook. It makes it easier for components to access the user information and the functions (user, setUser, and logOut) from the AuthContext.
// It uses the useContext hook to get the context value (the user, setUser, and logOut functions) that the AuthProvider provides.
// If a component tries to use useAuth without being wrapped in an AuthProvider, it will throw an error. This ensures that the hook is only used where it's supposed to be.
export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}
