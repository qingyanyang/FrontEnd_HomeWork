export type LecturerCardType = {
  id: number;
  name: string;
  title: string;
  biography: string;
  coursesTaught: CourseType[];
  yearsOfExperience: number;
};
export type CourseType = {
  courseId: number;
  courseTitle: string;
  lessons: number;
};
