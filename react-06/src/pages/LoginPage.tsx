import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/useUser";
import { useEffect } from "react";

const LoginPage = () => {
  const { isAuthenticated, login } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="page">
      LoginPage
      <button
        onClick={() => {
          login();
        }}
      >
        <Link to="/">click to log in</Link>{" "}
      </button>
    </div>
  );
};

export default LoginPage;
