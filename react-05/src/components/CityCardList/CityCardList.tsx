import { CityCardType } from "@/types";
import { CityCard } from "./CityCard";
import { Row } from "@/styles";

type CityCardListProps = {
  cityList: CityCardType[];
  getClickedCity: (index: number) => void;
};
export const CityCardList: React.FC<CityCardListProps> = ({
  cityList,
  getClickedCity,
}) => {
  return (
    <Row $justifyContent="space-between" $gap={20}>
      {cityList.map((singleCityData, index) => {
        return (
          <CityCard
            key={singleCityData.cityName}
            {...singleCityData}
            onClick={() => getClickedCity(index)}
          />
        );
      })}
    </Row>
  );
};
