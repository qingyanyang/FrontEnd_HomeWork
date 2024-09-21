import {
  SizedBox,
  Column,
  TextRegular,
  TextSmall,
  IconBox,
  TextMedium,
} from "@/styles";
import { getWeatherIconUrl } from "@/utils/getImageUrl";

export const FutureWeatherCard = () => {
  return (
    <Column>
      <TextRegular>Monday</TextRegular>
      <SizedBox $height={10} />
      <TextSmall>24 July</TextSmall>
      <SizedBox $height={20} />
      <IconBox
        $url={getWeatherIconUrl("weatherIcon@2x/09d")}
        $width={120}
        $height={120}
      />
      <SizedBox $height={20} />
      <TextMedium> 20 ~ 25</TextMedium>
    </Column>
  );
};
