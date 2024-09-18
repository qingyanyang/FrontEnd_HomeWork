import CourseCatelog from "@/pages/CourseCatelog";
import NotFound from "@/pages/NotFound";

export default [
  {
    path: "/",
    element: <CourseCatelog />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
];
