import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/useUser";
import { useAppDispatch } from "../../store/hooks";
import { taggleIsEnrolledAsync } from "../../store/modules/courseSlice";
import "./CourseCard.css";

export type courseType = {
  id: number;
  imgLink: string;
  title: string;
  price: number;
  language: string;
  duration: string;
  location: string;
  isEnrolled: boolean;
  score: number;
  reviews: number;
};

const CourseCard: React.FC<courseType & { fromProfile?: boolean }> = ({
  fromProfile,
  ...course
}) => {
  const {
    id,
    isEnrolled,
    title,
    imgLink,
    language,
    duration,
    location,
    score,
    reviews,
    price,
  } = course;
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const handleEnrollCourse = (isEnrolled: boolean) => {
    if (isAuthenticated) {
      dispatch(taggleIsEnrolledAsync(id, isEnrolled));
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      className={`course-card ${
        isAuthenticated && isEnrolled && "course-card__badge"
      }`}
    >
      <div
        className="course-card__image"
        style={{ "--imgLink": `url(${imgLink})` } as React.CSSProperties}
      ></div>
      <div className="course-card__content">
        <h3 className="course-card__title">{title}</h3>
        <div className="course-card__details">
          <p className="course-card__tags">
            {language} · {duration} · {location}
          </p>
          {fromProfile ? (
            <button
              onClick={() => handleEnrollCourse(false)}
              className="enroll-btn"
            >
              Cancel
            </button>
          ) : !isAuthenticated ? (
            <button
              onClick={() => handleEnrollCourse(true)}
              className="enroll-btn"
            >
              Enroll
            </button>
          ) : isEnrolled ? (
            <button disabled className="enroll-btn">
              Enroll
            </button>
          ) : (
            <button
              onClick={() => handleEnrollCourse(true)}
              className="enroll-btn"
            >
              Enroll
            </button>
          )}

          <div className="course-card__row">
            <i className="fa-regular fa-star"></i>
            <p className="course-card__score">{score}</p>
            <p className="course-card__reviews">({reviews} reviews)</p>
            <h3 className="course-card__price">${price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
