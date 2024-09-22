import {
  SizedBox,
  Column,
  TextRegular,
  TextSmall,
  IconBox,
  TextMedium,
} from "@/styles";
import { WeeklyWeatherDataType } from "@/types";
import { getWeatherIconUrl } from "@/utils/getImageUrl";

export const FutureWeatherCard: React.FC<WeeklyWeatherDataType> = (props) => {
  const { tempRange, iconCode, date, day } = props;
  return (
    <Column>
      <TextRegular>{day}</TextRegular>
      <SizedBox $height={10} />
      <TextSmall>{date}</TextSmall>
      <SizedBox $height={20} />
      <IconBox
        $url={getWeatherIconUrl(`weatherIcon@2x/${iconCode}`)}
        $width={110}
        $height={110}
      />
      <SizedBox $height={20} />
      <TextMedium> {tempRange}</TextMedium>
    </Column>
  );
};
