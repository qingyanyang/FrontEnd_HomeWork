import { LecturerCardType } from "@/types";
import {
  Card,
  CardName,
  CardTitle,
  CardDescription,
  CardCourseTaught,
  CardYearsOfExperience,
} from "./style";
import { Padding, SizedBox } from "@/styles";

export const LecturerCard: React.FC<LecturerCardType> = (props) => {
  const { name, title, biography, coursesTaught, yearsOfExperience } = props;

  return (
    <Card>
      {/* card content */}
      <Padding $horizontal={20} $vertical={20}>
        <CardName>{name}</CardName>
        <SizedBox $height={10} />
        <CardTitle>{title}</CardTitle>
        <SizedBox $height={10} />
        <CardDescription>"{biography}"</CardDescription>
        <SizedBox $height={10} />
        <strong>Courses Taught</strong> ⭐
        <SizedBox $height={10} />
        {coursesTaught.map((course) => (
          <>
            <CardCourseTaught>
              💡 {course.courseTitle} <strong>·</strong> {course.lessons}{" "}
              Lessons
            </CardCourseTaught>
            <SizedBox $height={5} />
          </>
        ))}
        <SizedBox $height={10} />
        <strong>Years Of Experience</strong> 📝
        <SizedBox $height={10} />
        <CardYearsOfExperience>
          📚 {yearsOfExperience} year
          {yearsOfExperience > 1 && "s"}
        </CardYearsOfExperience>
      </Padding>
    </Card>
  );
};
