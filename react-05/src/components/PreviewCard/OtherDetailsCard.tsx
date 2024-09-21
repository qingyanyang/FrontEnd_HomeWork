import { Card, TextSmall, Column, Row } from "@/styles";

export const OtherDetailsCard = () => {
  return (
    <Card $borderRadius={10} $padding={15}>
      <Row $gap={20}>
        <Column $gap={10}>
          <i className="fa-solid fa-droplet"></i>
          <TextSmall>85%</TextSmall>
        </Column>
        <Column $gap={10}>
          <i className="fa-solid fa-wind"></i>
          <TextSmall>9km/h</TextSmall>
        </Column>
        <Column $gap={10}>
          <i className="fa-solid fa-smog"></i>
          <TextSmall>75</TextSmall>
        </Column>
        <Column $gap={10}>
          <i className="fa-solid fa-temperature-three-quarters"></i>
          <TextSmall>26</TextSmall>
        </Column>
      </Row>
    </Card>
  );
};
