import { render, screen, fireEvent } from "@testing-library/react";
import { useAppDispatch } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/useUser";
import { taggleIsEnrolledAsync } from "../../store/modules/courseSlice";
import CourseCard from "./CourseCard";

/// mock used external functions
jest.mock("../../store/hooks", () => ({
  useAppDispatch: jest.fn(),
}));
const mockUseAppDispatch = useAppDispatch as unknown as jest.Mock;

jest.mock("../../context/useUser", () => ({
  useUser: jest.fn(),
}));
const mockUseUser = useUser as jest.Mock;

jest.mock("../../store/modules/courseSlice", () => ({
  taggleIsEnrolledAsync: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));
const mockUseNavigate = useNavigate as jest.Mock;

describe("test component CourseCard", () => {
  //arrange
  const courseProps = {
    id: 1,
    imgLink: "http://example.com/image.jpg",
    title: "React Course",
    price: 100,
    language: "English",
    duration: "10 hours",
    location: "Online",
    isEnrolled: false,
    score: 4.5,
    reviews: 120,
    fromProfile: false,
  };

  const navigateMock = jest.fn();
  const dispatchMock = jest.fn();

  beforeEach(() => {
    mockUseUser.mockReturnValue({ isAuthenticatedMock: true }); //default value
    mockUseNavigate.mockReturnValue(navigateMock);
    mockUseAppDispatch.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // act and asset
  /**
   * test1: basic UI content
   */
  test("renders basic course details correctly", () => {
    render(<CourseCard {...courseProps} />);
    expect(screen.getByText("React Course")).toBeInTheDocument();
    expect(screen.getByText("English · 10 hours · Online")).toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
    expect(screen.getByText("(120 reviews)")).toBeInTheDocument();
    expect(screen.getByText("$100")).toBeInTheDocument();
  });

  /**
   * test2: conditional UI
   */
  /// test2.1: visibility of enrolled badge
  /// describtion: only loged in users can see this badge when a course is enrolled by this user
  test("does not apply 'course-card__badge' class when not authenticated", () => {
    mockUseUser.mockReturnValue({ isAuthenticated: false });
    const { container } = render(
      <CourseCard {...courseProps} isEnrolled={true} />
    );
    expect(container.firstChild).not.toHaveClass("course-card__badge");
  });

  test("does not apply 'course-card__badge' class when not enrolled", () => {
    mockUseUser.mockReturnValue({ isAuthenticated: true });
    const { container } = render(
      <CourseCard {...courseProps} isEnrolled={false} />
    );
    expect(container.firstChild).not.toHaveClass("course-card__badge");
  });

  test("applies 'course-card__badge' class when authenticated and enrolled", () => {
    mockUseUser.mockReturnValue({ isAuthenticated: true });
    const { container } = render(
      <CourseCard {...courseProps} isEnrolled={true} />
    );
    expect(container.firstChild).toHaveClass("course-card__badge");
  });

  /// test2.2: button text change / button status change
  /// describtion:
  /// 1. for users not loged in: they can only see button with text: Enroll && status: active
  /// 2. for users logged in:
  ///   2.1 from courses page: button with text: Enroll && status is active when isEnroll === false, status is disabled when isEnrolled === true
  ///   2.2 from profile page: button with text: Cancel && status: active
  test("renders 'Cancel' button when fromProfile is true", () => {
    mockUseUser.mockReturnValue({ isAuthenticated: true });

    render(<CourseCard {...courseProps} fromProfile={true} />);

    const button = screen.getByText("Cancel");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(dispatchMock).toHaveBeenCalledWith(taggleIsEnrolledAsync(1, false));
  });

  test("renders active 'Enroll' button when user is not authenticated", () => {
    mockUseUser.mockReturnValue({ isAuthenticated: false });

    render(<CourseCard {...courseProps} />);

    const button = screen.getByText("Enroll");
    expect(button).toBeInTheDocument();

    /**
     * test3: event
     */
    fireEvent.click(button);
    expect(navigateMock).toHaveBeenCalledWith("/login");
  });

  test("renders active 'Enroll' button when user is authenticated and not enrolled", () => {
    mockUseUser.mockReturnValue({ isAuthenticated: true });

    render(<CourseCard {...courseProps} isEnrolled={false} />);

    const button = screen.getByText("Enroll");
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();

    /**
     * test3: event
     */
    fireEvent.click(button);
    expect(dispatchMock).toHaveBeenCalledWith(taggleIsEnrolledAsync(1, true));
  });

  test("renders disabled 'Enroll' button when user is authenticated and enrolled", () => {
    mockUseUser.mockReturnValue({ isAuthenticated: true });

    render(<CourseCard {...courseProps} isEnrolled={true} />);

    const button = screen.getByText("Enroll");
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});
