import React, { useState } from "react";
import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Feature,
  Title,
  TextSmall,
  TextLink,
  Group,
  Profile,
  Picture,
  Dropdown,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from "./styles/header";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Header({ bg = true, children, ...resProps }) {
  return bg ? <Background {...resProps}>{children}</Background> : children;
}

Header.Feature = function HeaderFeature({ children, ...resProps }) {
  return <Feature {...resProps}>{children}</Feature>;
};
Header.Title = function HeaderTitle({ children, ...resProps }) {
  return <Title {...resProps}>{children}</Title>;
};
Header.TextSmall = function HeaderTextSmall({ children, ...resProps }) {
  return <TextSmall {...resProps}>{children}</TextSmall>;
};
Header.TextLink = function HeaderTextLink({ children, ...resProps }) {
  return <TextLink {...resProps}>{children}</TextLink>;
};
Header.Frame = function HeaderFrame({ children, ...resProps }) {
  return <Container {...resProps}>{children}</Container>;
};
Header.Group = function HeaderGroup({ children, ...resProps }) {
  return <Group {...resProps}>{children}</Group>;
};
Header.Profile = function HeaderProfile({ children, ...resProps }) {
  return <Profile {...resProps}>{children}</Profile>;
};
Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...resProps
}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...resProps}>
      <SearchIcon onClick={() => setSearchActive((prevValue) => !prevValue)}>
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
};
Header.Picture = function HeaderPicture({ src, ...resProps }) {
  return <Picture {...resProps} src={`/images/users/${src}.png`} />;
};
Header.Dropdown = function HeaderDropdown({ children, ...resProps }) {
  return <Dropdown {...resProps}>{children}</Dropdown>;
};
Header.Logo = function HeaderLogo({ to, ...resProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...resProps} />
    </ReactRouterLink>
  );
};
Header.ButtonLink = function HeaderButtonLink({ to, children, ...resProps }) {
  return (
    <ButtonLink to={to} {...resProps}>
      {children}
    </ButtonLink>
  );
};
Header.PlayButton = function HeaderPlayButton({ children, ...resProps }) {
  return <PlayButton {...resProps}>{children}</PlayButton>;
};
