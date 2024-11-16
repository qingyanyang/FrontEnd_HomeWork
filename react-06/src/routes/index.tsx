import HomePage from "../pages/HomePage";
import CourseListPage from "../pages/CourseListPage";
import UserProfilePage from "../pages/UserProfilePage";
import LoginPage from "../pages/LoginPage";
import { ProtectedRoute } from "../components/ProtectedRoute";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

// const Router = () => {
//   return (
//     <Routes>
//       <Route
//         path="/login"
//         element={
//           <ProtectedRoute prop="content">
//             <LoginPage />
//           </ProtectedRoute>
//         }
//       />
//       <Route path="/" element={<HomePage />}></Route>
//       <Route path="/courses" element={<CourseListPage />}></Route>
//       <Route
//         path="/profile"
//         element={
//           <ProtectedRoute prop="auth">
//             <UserProfilePage />
//           </ProtectedRoute>
//         }
//       ></Route>
//     </Routes>
//   );
// };

// export default Router;
const Layout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

const router = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/courses",
        element: <CourseListPage />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute prop="auth">
            <UserProfilePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute prop="content">
        <LoginPage />
      </ProtectedRoute>
    ),
  },
];
export default router;
