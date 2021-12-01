import React from "react";
import { Container, Title, Subtitle } from "./styles/feature";
export default function Feature({ children, ...resProps }) {
  return <Container {...resProps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...resProps }) {
  return <Title {...resProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubtitle({ children, ...resProps }) {
  return <Subtitle {...resProps}>{children}</Subtitle>;
};
