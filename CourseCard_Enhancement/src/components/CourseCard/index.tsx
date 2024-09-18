import { CourseCardProps } from "@/types";
import {
  Card,
  CardImage,
  CardTitle,
  CardDescribtion,
  CardFavorateButton,
  CardCompletionButton,
  CardReview,
  CardScore,
  CardReviews,
  CardPrice,
} from "./style";
import { Expanded, Padding, SizedBox, Row } from "@/styles";

export const CourseCard: React.FC<CourseCardProps> = (props) => {
  const {
    id,
    imgLink,
    title,
    price,
    language,
    duration,
    location,
    isNew,
    score,
    reviews,
    isCompleted,
    updateCourseComletion,
    isFavorate,
    updateCourseFavorate,
  } = props;

  const handleMarkAsFavorate = () => {
    updateCourseFavorate(id);
  };

  const handleMarkAsCompleted = () => {
    updateCourseComletion(id);
  };

  const isCompletedText = isCompleted ? "Revisit Course" : "Start Course";
  const isFavorateText = isFavorate ? "Unfavorite" : "Favorite";

  return (
    <Card $isNew={isNew}>
      {/* card image */}
      <CardImage $imgLink={imgLink} />
      {/* card content */}
      <Expanded>
        <Padding $horizontal={20} $vertical={20}>
          <CardTitle>
            {title}&nbsp;{isFavorate && "⭐"}
          </CardTitle>
          <SizedBox $height={10} />
          <CardFavorateButton onClick={handleMarkAsFavorate}>
            {isFavorateText}
          </CardFavorateButton>
          <SizedBox $height={20} />
          <Row $gap={20}>
            <CardDescribtion>
              {language} · {duration} · {location}
            </CardDescribtion>
            <CardCompletionButton onClick={handleMarkAsCompleted}>
              {isCompletedText}
            </CardCompletionButton>
          </Row>
        </Padding>
      </Expanded>
      {/* card review section */}
      <CardReview>
        <Padding $vertical={20} $horizontal={20}>
          <Row $gap={15}>
            <CardScore>
              <i className="fa-regular fa-star"></i>
              &nbsp;
              {score}
            </CardScore>
            <CardReviews>({reviews} reviews)</CardReviews>
            <Expanded />
            <CardPrice>${price}</CardPrice>
          </Row>
        </Padding>
      </CardReview>
    </Card>
  );
};
