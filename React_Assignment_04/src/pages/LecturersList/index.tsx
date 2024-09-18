import { CardsContainer, NotificationText } from "./style";
import { LecturerCardType } from "@/types";
import { useState, useEffect } from "react";
import { LecturerCard } from "@/components/LecturerCard";
import axios from "axios";

const LecturersList = () => {
  const [lecturerList, setLecturerList] = useState<LecturerCardType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // // promise
  // useEffect(() => {
  //   setLoading(true);
  //   const promiseLecturerListData = fetch(
  //     "https://my-json-server.typicode.com/JustinHu8/courseCardMock/lecturers"
  //   );
  //   promiseLecturerListData
  //     .then((data) => data.json())
  //     .then((data) => {
  //       setLecturerList(data);
  //     })
  //     .catch((err) => {
  //       console.error("Unexpected error:", err);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  // // async await
  // const fetchData = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch(
  //       "https://my-json-server.typicode.com/JustinHu8/courseCardMock/lecturers"
  //     );

  //     const responseJson = await response.json(); // this is an async method

  //     setLecturerList(responseJson);
  //   } catch (err) {
  //     console.error("Unexpected error:", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // async await with axios
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get<LecturerCardType[]>(
        "https://my-json-server.typicode.com/JustinHu8/courseCardMock/lecturers"
      );
      setLecturerList(response.data); // can get json form data directly
    } catch (err) {
      console.error("Unexpected error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
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
