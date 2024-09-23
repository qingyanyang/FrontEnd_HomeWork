import {
  Column,
  IconBox,
  TextRegular,
  TextSmall,
  SizedBox,
  Padding,
} from "@/styles";
import { CityCardType } from "@/types";
import { getCityBgUrl, getWeatherIconUrl } from "@/utils/getImageUrl";
import { CityCardWrapper } from "./style";

interface CityCardProps extends CityCardType {
  onClick: () => void;
}
export const CityCard: React.FC<CityCardProps> = ({
  cityName,
  cityTempRange,
  weatherIconCode,
  onClick,
}) => {
  return (
    <CityCardWrapper
      $url={getCityBgUrl(cityName)}
      onClick={onClick}
      $borderRadius={16}
    >
      <Padding $horizontal={15} $vertical={15}>
        <Column>
          <IconBox
            $url={getWeatherIconUrl(`weatherIcon@1x/${weatherIconCode}`)}
            $width={40}
            $height={40}
          />
          <SizedBox $height={10} />
          <TextRegular $color="light">{cityName}</TextRegular>
          <SizedBox $height={10} />
          <TextSmall $color="light">{cityTempRange}</TextSmall>
        </Column>
      </Padding>
    </CityCardWrapper>
  );
};
