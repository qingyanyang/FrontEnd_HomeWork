import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/useUser";

const NavBar = () => {
  const { logout, userName, isAuthenticated } = useUser();
  const navigate = useNavigate();
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        |
        <li>
          <Link to="/courses"> Courses</Link>
        </li>
        |
        <li>
          <Link to="/profile"> Profile</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <p>{userName}</p>
            </li>
            <li>
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
