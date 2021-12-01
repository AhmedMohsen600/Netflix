import React, { createContext, useState, useContext } from "react";

import {
  Container,
  Inner,
  Title,
  Body,
  Item,
  Header,
} from "./styles/accordion";
const ToggleContext = createContext();
export default function Accordion({ children, ...resProps }) {
  return (
    <Container {...resProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}
Accordion.Title = function AccordionTitle({ children, ...resProps }) {
  return <Title {...resProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...resProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...resProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...resProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header
      onClick={() => setToggleShow((prevValue) => !prevValue)}
      {...resProps}
    >
      {children}
      {toggleShow ? (
        <img
          draggable="false"
          src="/images/icons/close-slim.png"
          alt="close"
        ></img>
      ) : (
        <img draggable="false" src="/images/icons/add.png" alt="add" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...resProps }) {
  const { toggleShow } = useContext(ToggleContext);
  return toggleShow ? <Body {...resProps}>{children}</Body> : null;
};
