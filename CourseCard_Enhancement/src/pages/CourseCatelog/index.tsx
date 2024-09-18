import { CourseCard } from "@/components/CourseCard";
import { CardsContainer, NoCourseFound } from "./style";
import { CourseCardType, CourseLanguageType, LocationType } from "@/types";
import { CourseSearchInput } from "@/components/CourseSearchInput";
import { useState, useEffect } from "react";

const courseListData = [
  {
    id: 0,
    imgLink:
      "https://plus.unsplash.com/premium_photo-1682284352941-58dceb6cd601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Mastering Full-Stack Development: From Frontend to Backend",
    price: 49.98,
    language: "English" as CourseLanguageType,
    duration: "1 hour",
    location: "onsite" as LocationType,
    isNew: true,
    score: 4.1,
    reviews: 300,
    isCompleted: true,
    isFavorate: true,
  },
  {
    id: 1,
    imgLink:
      "https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Introduction to Machine Learning with Python",
    price: 99.98,
    language: "English" as CourseLanguageType,
    duration: "3 hours",
    location: "remote" as LocationType,
    isNew: false,
    score: 3.9,
    reviews: 102,
    isCompleted: false,
    isFavorate: true,
  },
  {
    id: 2,
    imgLink:
      "https://images.unsplash.com/photo-1645113748341-64d608cb29f2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Building Responsive Web Applications with React",
    price: 109.98,
    language: "Spanish" as CourseLanguageType,
    duration: "2 hours",
    location: "remote" as LocationType,
    isNew: false,
    score: 4.5,
    reviews: 403,
    isCompleted: false,
    isFavorate: false,
  },
  {
    id: 3,
    imgLink:
      "https://images.unsplash.com/photo-1601543461574-3a431aefc27d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Deep Dive into Database Management with SQL and NoSQL",
    price: 69.98,
    language: "Mandarin" as CourseLanguageType,
    duration: "1 hour",
    location: "onsite" as LocationType,
    isNew: true,
    score: 4.9,
    reviews: 599,
    isCompleted: false,
    isFavorate: true,
  },
  {
    id: 4,
    imgLink:
      "https://images.unsplash.com/photo-1588912914074-b93851ff14b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Fundamentals of Mobile App Development: iOS and Android",
    price: 29.98,
    language: "English" as CourseLanguageType,
    duration: "1 hour",
    location: "remote" as LocationType,
    isNew: true,
    score: 4.2,
    reviews: 290,
    isCompleted: false,
    isFavorate: false,
  },
];

const CourseCatelog = () => {
  const [courseList, setCourseList] = useState<CourseCardType[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const updateCourseComletion = (courseId: number) => {
    const updatedCourseList = courseList.map((course) => {
      if (courseId === course.id) {
        return { ...course, isCompleted: !course.isCompleted };
      } else {
        return course;
      }
    });
    setCourseList(updatedCourseList);
  };

  const updateCourseFavorate = (courseId: number) => {
    const updatedCourseList = courseList.map((course) => {
      if (courseId === course.id) {
        return { ...course, isFavorate: !course.isFavorate };
      } else {
        return course;
      }
    });
    setCourseList(updatedCourseList);
  };

  const handleSearch = (searchText: string) => {
    setSearchText(searchText);
  };

  const filteredCourseList = courseList.filter((course) =>
    course.title.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    if (courseList.length === 0) {
      // first time get courseList api data
      setCourseList(courseListData);
    } else {
      // update courseList api data
      console.log("update courseList api");
    }
  }, [courseList]);

  return (
    <>
      <CourseSearchInput handleSearch={handleSearch} />
      <CardsContainer>
        {filteredCourseList.length > 0 ? (
          filteredCourseList.map((course) => (
            <CourseCard
              updateCourseComletion={updateCourseComletion}
              updateCourseFavorate={updateCourseFavorate}
              {...course}
              key={course.id}
            />
          ))
        ) : (
          <NoCourseFound>No courses found</NoCourseFound>
        )}
      </CardsContainer>
    </>
  );
};
export default CourseCatelog;
