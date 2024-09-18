import LecturersList from "@/pages/LecturersList";
import NotFound from "@/pages/NotFound";

export default [
  {
    path: "/",
    element: <LecturersList />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
];
