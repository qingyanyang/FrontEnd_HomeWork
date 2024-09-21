import { PreviewCard } from "@/components/PreviewCard";
import { CardsContainer } from "./style";
import { Column, SizedBox } from "@/styles";
import { FutureWeathers } from "@/components/FutureWeathers";
import { SearchInput } from "@/components/SearchInput";
import { CityCardList } from "@/components/CityCardList";

const WeatherPage = () => {
  return (
    <CardsContainer $borderRadius={30} $padding={20}>
      <PreviewCard />
      <Column $alignItems={"top"}>
        <FutureWeathers />
        <SizedBox $height={20} />
        <SearchInput />
        <SizedBox $height={50} />
        <CityCardList />
      </Column>
    </CardsContainer>
  );
};
export default WeatherPage;
