import React from "react";
import { Container, Title, List, User, Picture, Name } from "./styles/profile";
export default function Profiles({ children, ...resProps }) {
  return <Container {...resProps}> {children}</Container>;
}

Profiles.Titlle = function ProfilesTitle({ children, ...resProps }) {
  return <Title {...resProps}>{children}</Title>;
};
Profiles.List = function ProfilesList({ children, ...resProps }) {
  return <List {...resProps}>{children}</List>;
};
Profiles.User = function ProfilesUser({ children, ...resProps }) {
  return <User {...resProps}>{children}</User>;
};

Profiles.Picture = function ProfilesPicture({ src, ...resProps }) {
  return (
    <Picture
      {...resProps}
      src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}
    />
  );
};
Profiles.Name = function ProfilesName({ children, ...resProps }) {
  return <Name {...resProps}>{children}</Name>;
};
