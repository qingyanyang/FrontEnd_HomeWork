import { Link } from "react-router-dom";
import { useUser } from "../../context/useUser";

const NavBar = () => {
  const { logout, userName, isAuthenticated } = useUser();
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
              <Link to="/">
                <button onClick={logout}>Logout</button>
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
