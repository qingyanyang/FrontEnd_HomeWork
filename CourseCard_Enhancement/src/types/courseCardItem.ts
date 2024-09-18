export type CourseLanguageType = "English" | "Mandarin" | "Spanish" | "French";
export type LocationType = "remote" | "onsite";

export interface CourseCardType {
  id: number;
  imgLink: string;
  title: string;
  price: number;
  language: CourseLanguageType;
  duration: string;
  location: LocationType;
  isNew: boolean;
  score: number;
  reviews: number;
  isCompleted: boolean;
  isFavorate: boolean;
}

export interface CourseCardProps extends CourseCardType {
  updateCourseComletion: (courseId: number) => void;
  updateCourseFavorate: (courseId: number) => void;
}
