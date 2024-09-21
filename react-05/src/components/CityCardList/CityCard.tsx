import {
  Card,
  Column,
  IconBox,
  TextRegular,
  TextSmall,
  SizedBox,
  Padding,
} from "@/styles";
import { getWeatherIconUrl } from "@/utils/getImageUrl";

export const CityCard = () => {
  return (
    <Card
      $borderRadius={20}
      $bg={"linear-gradient(to bottom right, #99b2ef, #5880e6)"}
      // 8999ec 565fcf
      // 898be3 675dd1
    >
      <Padding $horizontal={40} $vertical={15}>
        <Column>
          <IconBox
            $url={getWeatherIconUrl("weatherIcon@1x/10d")}
            $width={50}
            $height={50}
          />
          <TextRegular $color="light">Sydney</TextRegular>
          <SizedBox $height={10} />
          <TextSmall $color="light">28 ~ 32</TextSmall>
        </Column>
      </Padding>
    </Card>
  );
};
