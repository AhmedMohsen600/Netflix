import React from "react";
import {
  Container,
  Inner,
  Title,
  Subtitle,
  Image,
  Pane,
  Item,
  Video,
  VideoHolder,
  ImageHolder,
} from "./styles/jumbotron";
export default function Jumbotron({
  direction = "row",
  children,
  ...resProps
}) {
  return (
    <Item {...resProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...resProps }) {
  return <Container {...resProps}>{children}</Container>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...resProps }) {
  return <Title {...resProps}>{children}</Title>;
};
Jumbotron.Image = function JumbotronImage({ ...resProps }) {
  return <Image {...resProps} />;
};
Jumbotron.Subtitle = function JumbotronSubtitle({ children, ...resProps }) {
  return <Subtitle {...resProps}>{children}</Subtitle>;
};
Jumbotron.Pane = function JumbotronPane({ children, ...resProps }) {
  return <Pane {...resProps}>{children}</Pane>;
};
Jumbotron.Video = function JumbotronVideo({ children, ...resProps }) {
  return <Video {...resProps}>{children}</Video>;
};

Jumbotron.ImageHolder = function JumbotronImageHolder({
  children,
  ...resProps
}) {
  return <ImageHolder {...resProps}>{children}</ImageHolder>;
};

Jumbotron.VideoHolder = function JumbotronVideoHolder({
  children,
  ...resProps
}) {
  return <VideoHolder {...resProps}>{children}</VideoHolder>;
};
