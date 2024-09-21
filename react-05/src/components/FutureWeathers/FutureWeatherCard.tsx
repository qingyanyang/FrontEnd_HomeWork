import {
  SizedBox,
  Column,
  TextRegular,
  TextSmall,
  IconBox,
  TextMedium,
} from "@/styles";
import RainyNSunnyImg from "@/assets/RainyNSunny.png";

export const FutureWeatherCard = () => {
  return (
    <Column>
      <TextRegular>Monday</TextRegular>
      <SizedBox $height={10} />
      <TextSmall>24 July</TextSmall>
      <SizedBox $height={20} />
      <IconBox $url={RainyNSunnyImg} $width={120} $height={120} />
      <SizedBox $height={20} />
      <TextMedium> 20 ~ 25</TextMedium>
    </Column>
  );
};
