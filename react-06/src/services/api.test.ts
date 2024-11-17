import { getCourses } from "./api";

describe("fetch courses", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("returns courses data successfully!", async () => {
    // arange
    const mockCourses = [
      {
        id: "0",
        imgLink:
          "https://plus.unsplash.com/premium_photo-1682284352941-58dceb6cd601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Mastering Full-Stack Development: From Frontend to Backend",
        price: 49.98,
        language: "English",
        duration: "1 month",
        location: "remote",
        isEnrolled: true,
        score: 4.1,
        reviews: 300,
      },
      {
        id: "1",
        imgLink:
          "https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Introduction to Machine Learning with Python",
        price: 99.98,
        language: "English",
        duration: "3 month",
        location: "remote",
        isEnrolled: false,
        score: 3.9,
        reviews: 102,
      },
    ];
    globalThis.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => mockCourses,
    });

    // act
    const result = await getCourses();

    // assert
    expect(globalThis.fetch).toHaveBeenCalledTimes(1);
    expect(globalThis.fetch).toHaveBeenCalledWith(
      "https://course-server-x7mv.onrender.com/courses"
    );
    expect(result).toEqual(mockCourses); // equal response
  });
});
