import React from "react";
import { Container, Input, Button, Text, Break } from "./styles/opt-form";
export default function OptForm({ children, ...resProps }) {
  return <Container {...resProps}>{children}</Container>;
}

OptForm.Input = function OtpFormInput({ children, ...resProps }) {
  return <Input {...resProps} />;
};

OptForm.Button = function OtpFormButton({ children, ...resProps }) {
  return (
    <Button {...resProps}>
      {children}
      <img
        draggable="false"
        src="/images/icons/chevron-right.png"
        alt="Try now"
      ></img>
    </Button>
  );
};
OptForm.Text = function OtpFormText({ children, ...resPros }) {
  return <Text {...resPros}>{children}</Text>;
};
OptForm.Break = function OtpFormBreak() {
  return <Break />;
};
