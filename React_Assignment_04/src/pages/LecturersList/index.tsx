import { CardsContainer, NotificationText } from "./style";
import { LecturerCardType } from "@/types";
import { useState, useEffect } from "react";
import { LecturerCard } from "@/components/LecturerCard";

const LecturersList = () => {
  const [lecturerList, setLecturerList] = useState<LecturerCardType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const promiseLecturerListData = fetch(
      "https://my-json-server.typicode.com/JustinHu8/courseCardMock/lecturers"
    );
    promiseLecturerListData
      .then((data) => data.json())
      .then((data) => {
        setLecturerList(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <NotificationText>Loading...</NotificationText>;
  }

  return (
    <>
      <CardsContainer>
        {lecturerList.length > 0 ? (
          lecturerList.map((lecturer) => (
            <LecturerCard {...lecturer} key={lecturer.id} />
          ))
        ) : (
          <NotificationText>No lecturers found</NotificationText>
        )}
      </CardsContainer>
    </>
  );
};
export default LecturersList;
