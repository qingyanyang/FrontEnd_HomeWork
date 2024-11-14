export const getCourses = async () => {
  const courses = await fetch(
    "https://course-server-x7mv.onrender.com/courses"
  );
  const coursesJson = await courses.json();
  return coursesJson;
};

export const updateCourseById = async (
  id: number,
  partialUpdate: { isEnrolled: boolean }
) => {
  await fetch(`https://course-server-x7mv.onrender.com/courses/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(partialUpdate),
  });
};
