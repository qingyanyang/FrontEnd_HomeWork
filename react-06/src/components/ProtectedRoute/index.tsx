import { Navigate } from "react-router-dom";
import { useUser } from "../../context/useUser";
import { ReactNode } from "react";

export const ProtectedRoute: React.FC<{
  children: ReactNode;
  prop: string;
}> = ({ prop, children }) => {
  const { isAuthenticated } = useUser();
  if (prop === "content") {
    if (isAuthenticated) {
      return <Navigate to="/" />;
    }
  } else if (prop === "auth") {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
  }

  return children;
};
