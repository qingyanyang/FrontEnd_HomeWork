import { Card, TextSmall, Column, Row } from "@/styles";
import { ReactNode } from "react";
import {
  HumiditySVG,
  PM25,
  SomatosensoryTemperature,
  WindSpeed,
} from "./MetaISVGs";
export const OtherDetailsCard = () => {
  return (
    <Card $borderRadius={10} $padding={15}>
      <Row $gap={20} $justifyContent="space-between">
        <DetailWidget data={"85%"}>
          <HumiditySVG />
        </DetailWidget>
        <DetailWidget data={"9km/h"}>
          <WindSpeed />
        </DetailWidget>
        <DetailWidget data={"75"}>
          <PM25 />
        </DetailWidget>
        <DetailWidget data={"26"}>
          <SomatosensoryTemperature />
        </DetailWidget>
      </Row>
    </Card>
  );
};

type DetailWidgetProps = {
  data: string;
  children: ReactNode;
};

const DetailWidget: React.FC<DetailWidgetProps> = ({ data, children }) => {
  return (
    <Column $gap={10}>
      {children}
      <TextSmall>{data}</TextSmall>
    </Column>
  );
};
