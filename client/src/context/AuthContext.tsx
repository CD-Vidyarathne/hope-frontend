import React, { createContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/User";

interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const sampleUser: User = {
  id: "1324135",
  username: "Chamindu Vidyarathne",
  email: "chamindudvidyarathne@gmail.com",
  address: "blah blah blah",
  profilePicURL:
    "https://via.assets.so/img.jpg?w=200&h=150&tc=black&bg=#cecece&t=Placeholder",
  contactNumber: "0716935097",
  donations: {
    recent: 0,
    recursive: 0,
    total: 0,
  },
  voulenteering: {
    recent: 0,
    total: 0,
  },
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(sampleUser);
  const navigate = useNavigate();

  const login = (user: User) => {
    setUser(user);
    navigate("/");
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  // const isAuthenticated = !!user;

  // NOTE:Dev purpose
  const isAuthenticated = true;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
