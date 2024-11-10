import { useEffect } from "react";
import CourseCard, { courseType } from "../components/CourseCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getCourseListAsync } from "../store/modules/courseSlice";

const UserProfilePage = () => {
  const { courseList } = useAppSelector((state) => state.course);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCourseListAsync());
  }, []);

  return (
    <div className="grid-container">
      {courseList
        .filter((course) => course.isEnrolled === true)
        .map((course: courseType) => (
          <CourseCard key={course.id} {...course} fromProfile={true} />
        ))}
    </div>
  );
};

export default UserProfilePage;
