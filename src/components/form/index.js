import React from "react";
import {
  Container,
  Base,
  Title,
  Text,
  TextSmall,
  Erorr,
  Link,
  Input,
  Submit,
  Label,
} from "./styles/form";

export default function Form({ children, ...resProps }) {
  return <Container {...resProps}>{children}</Container>;
}

Form.Erorr = function FormErorr({ children, ...resProps }) {
  return <Erorr {...resProps}>{children}</Erorr>;
};
Form.Base = function FormBase({ children, ...resProps }) {
  return <Base {...resProps}>{children}</Base>;
};
Form.Title = function FormTitle({ children, ...resProps }) {
  return <Title {...resProps}>{children}</Title>;
};
Form.Text = function FormText({ children, ...resProps }) {
  return <Text {...resProps}>{children}</Text>;
};
Form.Input = function FormInput({ children, ...resProps }) {
  return <Input {...resProps}>{children}</Input>;
};
Form.Submit = function FormSubmit({ children, ...resProps }) {
  return <Submit {...resProps}>{children}</Submit>;
};

Form.Link = function FormLink({ children, ...resProps }) {
  return <Link {...resProps}>{children}</Link>;
};

Form.TextSmall = function FormTextSmall({ children, ...resProps }) {
  return <TextSmall {...resProps}>{children}</TextSmall>;
};

Form.Label = function FormLabel({ children, ...resProps }) {
  return <Label {...resProps}>{children}</Label>;
};
