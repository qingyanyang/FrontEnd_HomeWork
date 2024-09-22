import {
  Card,
  Column,
  IconBox,
  TextRegular,
  TextSmall,
  SizedBox,
  Padding,
} from "@/styles";
import { CityCardType } from "@/types";
import { getCityBgUrl, getWeatherIconUrl } from "@/utils/getImageUrl";

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
    <Card
      $borderRadius={16}
      $url={getCityBgUrl(cityName)}
      $bg={
        "linear-gradient(to bottom right, rgba(153, 178, 239,1), rgba(26, 110, 234, 0.8))"
      }
      onClick={onClick}
      // 8999ec 565fcf
      // 898be3 675dd1
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
    </Card>
  );
};
