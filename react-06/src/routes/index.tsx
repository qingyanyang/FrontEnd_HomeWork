import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CourseListPage from "../pages/CourseListPage";
import UserProfilePage from "../pages/UserProfilePage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../components/ProtectedRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/courses" element={<CourseListPage />}></Route>
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <UserProfilePage />
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
};
export default Router;
