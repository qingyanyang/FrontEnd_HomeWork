import { Row, Padding } from "@/styles";
import { FutureWeatherCard } from "./FutureWeatherCard";

export const FutureWeathers = () => {
  return (
    <Padding $vertical={30}>
      <Row $gap={50}>
        <FutureWeatherCard />
        <FutureWeatherCard />
        <FutureWeatherCard />
        <FutureWeatherCard />
      </Row>
    </Padding>
  );
};
