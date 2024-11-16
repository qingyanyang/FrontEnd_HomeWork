import { useEffect } from "react";
import CourseCard, { courseType } from "../components/CourseCard";
import { getCourseListAsync } from "../store/modules/courseSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const CourseListPage = () => {
  const { courseList } = useAppSelector((state) => state.course);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCourseListAsync());
  }, []);

  return (
    <div className="grid-container">
      courseTest
      {courseList.map((course: courseType) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
};

export default CourseListPage;
