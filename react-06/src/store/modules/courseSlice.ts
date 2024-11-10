import {
  createSlice,
  PayloadAction,
  ThunkAction,
  UnknownAction,
} from "@reduxjs/toolkit";
import { courseType } from "../../components/CourseCard";
import { RootState } from "..";

const initialState = {
  courseList: [] as courseType[],
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    getCourseList: (state, action: PayloadAction<courseType[]>) => {
      state.courseList = action.payload;
    },
    taggleIsEnrolled: (
      state,
      action: PayloadAction<{ id: number; isEnrolled: boolean }>
    ) => {
      const { id, isEnrolled } = action.payload;
      const existingCourse = state.courseList.find(
        (course: courseType) => course.id === id
      );
      if (existingCourse) existingCourse.isEnrolled = isEnrolled;
    },
  },
});

export const { getCourseList, taggleIsEnrolled } = courseSlice.actions;

export const getCourseListAsync =
  (): ThunkAction<void, RootState, unknown, UnknownAction> =>
  async (dispatch) => {
    try {
      const courses = await fetch("http://localhost:3001/courses");
      const coursesJson = await courses.json();
      dispatch(getCourseList(coursesJson));
    } catch (error) {
      console.error("Unexpected Error in updateTrainingDataById:", error);
    }
  };

export const taggleIsEnrolledAsync =
  (
    id: number,
    isEnrolled: boolean
  ): ThunkAction<void, RootState, unknown, UnknownAction> =>
  async (dispatch) => {
    try {
      const partialUpdate = { isEnrolled: isEnrolled };
      await fetch(`http://localhost:3001/courses/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(partialUpdate),
      });
      dispatch(taggleIsEnrolled({ id, isEnrolled }));
    } catch (error) {
      console.error("Unexpected Error in updateTrainingDataById:", error);
    }
  };

export default courseSlice.reducer;
