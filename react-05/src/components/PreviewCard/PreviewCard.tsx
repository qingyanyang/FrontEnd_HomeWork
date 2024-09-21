import {
  TextSmall,
  Column,
  TextRegular,
  TextBold,
  IconBox,
  TextMedium,
  SizedBox,
} from "@/styles";
import cloudyImage from "@/assets/cloudy.png";
import { OtherDetailsCard } from "./OtherDetailsCard";
import { DetailWrapper, PreviewCardWrapper } from "./style";
export const PreviewCard = () => {
  return (
    <PreviewCardWrapper $bgColor="blue" $padding={16} $borderRadius={20}>
      <TextSmall $color={"light"}>23 July, Sunday 12:00</TextSmall>
      <SizedBox $height={20} />
      <DetailWrapper>
        <TextRegular $color="light">Sydney</TextRegular>
        <Column>
          <TextBold $color="light">32</TextBold>
          <TextMedium $color="light">28 ~ 32</TextMedium>
        </Column>
        <IconBox $url={cloudyImage} $width={140} $height={140} />
        <OtherDetailsCard />
      </DetailWrapper>
    </PreviewCardWrapper>
  );
};
