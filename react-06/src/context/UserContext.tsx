import { createContext, useState, ReactNode } from "react";

type UserContextType = {
  userName: string;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const userName = "Qian_5059";
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = () => {
    setIsAuthenticated(true);
  };
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <UserContext.Provider value={{ userName, isAuthenticated, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
