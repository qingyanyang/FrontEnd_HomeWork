import {
  TextSmall,
  Column,
  TextSimiBold,
  TextBold,
  IconBox,
  TextMedium,
  SizedBox,
} from "@/styles";
import { OtherDetailsCard } from "./OtherDetailsCard";
import { DetailWrapper, PreviewCardWrapper } from "./style";
import { getWeatherBGUrl, getWeatherIconUrl } from "@/utils/getImageUrl";
export const PreviewCard = () => {
  return (
    <PreviewCardWrapper
      $padding={16}
      $borderRadius={20}
      $url={getWeatherBGUrl("sunnyBg")}
    >
      <TextSmall $color={"light"}>23 July, Sunday 12:00</TextSmall>
      <SizedBox $height={20} />
      <DetailWrapper>
        <TextSimiBold $color="light">Sydney</TextSimiBold>
        <Column>
          <TextBold $color="light">32</TextBold>
          <TextMedium $color="light">28 ~ 32</TextMedium>
        </Column>
        <IconBox
          $url={getWeatherIconUrl("weatherIcon@2x/01d")}
          $width={140}
          $height={140}
        />
        <OtherDetailsCard />
      </DetailWrapper>
    </PreviewCardWrapper>
  );
};
