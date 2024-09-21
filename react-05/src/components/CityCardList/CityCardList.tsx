import { CityCard } from "./CityCard";
import { Row } from "@/styles";

export const CityCardList = () => {
  return (
    <Row $justifyContent="space-between" $gap={20}>
      <CityCard />
      <CityCard />
      <CityCard />
      <CityCard />
    </Row>
  );
};
