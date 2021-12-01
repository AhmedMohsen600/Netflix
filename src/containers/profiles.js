import React from "react";
import { Header, Profiles } from "../components";
import * as ROUTES from "../constant/route";
import logo from "../logo.svg";
export default function SelectProfileContainer({ user, setProfile }) {
  const obj = {
    displayName: user.displayName,
    photoURL: user.photoURL,
  };
  return (
    <>
      <Header bg={false}>
        <Header.Frame onlyBrowseHeader>
          <Header.Logo to={ROUTES.BROWSE} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Titlle>Who is Watching now</Profiles.Titlle>
        <Profiles.List>
          <Profiles.User
            onClick={() => {
              setProfile(obj);
            }}
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
