import {
  Card,
  Column,
  IconBox,
  TextRegular,
  TextSmall,
  SizedBox,
  Padding,
} from "@/styles";
import cloudyImage from "@/assets/cloudy.png";

export const CityCard = () => {
  return (
    <Card $borderRadius={20}>
      <Padding $horizontal={40} $vertical={15}>
        <Column>
          <IconBox $url={cloudyImage} $width={50} $height={50} />
          <TextRegular>Sydney</TextRegular>
          <SizedBox $height={10} />
          <TextSmall>28 ~ 32</TextSmall>
        </Column>
      </Padding>
    </Card>
  );
};
