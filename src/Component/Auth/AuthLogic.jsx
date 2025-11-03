import React, { createContext, useContext, useState, useEffect } from "react";

//  Create Auth Context
const AuthContext = createContext();

//  Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //  Check localStorage on first load
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  //  Register user
  const register = (email, password, name) => {
    if (!email || !password || !name) {
      alert("Please fill in all fields!");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    const newUser = { name, email, password };
    localStorage.setItem("authUser", JSON.stringify(newUser));
    setUser(newUser);
    // alert("Registration successful!");
  };

  //  Login user
  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem("authUser"));
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setUser(storedUser);
      alert("Login successful!");
    } else {
      alert("Invalid email or password.");
    }
  };

  //  Logout user
  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
    alert("Logged out successfully!");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

//  Custom Hook
export const useAuth = () => useContext(AuthContext);
