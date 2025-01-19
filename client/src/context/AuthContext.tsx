import React, { createContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import User from "../types/User";

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  login: (user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

// const sampleUser: User = {
//   id: "8",
//   username: "frankm",
//   email: "frankm@example.com",
//   address: "505 Chestnut Street, Blüdhaven",
//   userType: "Patient",
//   contactNumber: "888-999-0000",
//   birthdate: "1982-06-30",
//   gender: "Male",
//   profilePicURL:
//     "https://imgcdn.stablediffusionweb.com/2024/4/16/16040903-64ce-4111-a04d-c46fe903f530.jpg",
//   donations: { recent: 110, recursive: 525, total: 975 },
//   voulenteering: { recent: 5, total: 20 },
// };

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  const login = (user: User) => {
    setUser(user);
    setIsAuthenticated(true);
    navigate("/");
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    navigate("/login");
  };

  // // NOTE:Dev purpose
  // const isAuthenticated = true;

  return (
    <AuthContext.Provider
      value={{ user, setUser, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
