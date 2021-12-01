import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222222;
  position: relative;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : `../images/misc/home-bg.jpg`})
    top left / cover no-repeat;
  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none; border:none;`}
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 0 0 56px;
  height: 64px;
  min-height: ${({ onlyBrowseHeader }) => onlyBrowseHeader && "9vh"};
  padding-right: ${({ paddingBrowse }) => paddingBrowse && "56px"};
  justify-content: space-between;
  margin-right: ${({ otherPages }) => otherPages && "56px"};
  align-items: center;
  a {
    display: flex;
  }
  position: ${({ stickyBrowse }) => stickyBrowse && "sticky"};
  top: 0;
  background-color: ${({ active }) => (active ? "black" : "transparent")};
  transition: background-color 0.3s ease;
  @media (max-width: 1000px) {
    margin: 0 0 0 30px;
    padding-right: 30px;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;
export const ButtonLink = styled(ReactRouterLink)`
  background-color: #e50914;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  &:hover {
    background-color: #f40612;
  }
`;

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;
export const Title = styled.h1`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
  margin-bottom: 20px;
`;
export const TextSmall = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;
export const TextLink = styled.p`
  /// this is how u pass props on style component
  font-weight: ${({ active }) => (active ? "600" : "normal")};
  cursor: pointer;
  transition: color 0.1s ease;
  font-size: 14px;
  margin-left: 30px;
  color: ${({ active }) => (active ? "white" : "#c3c3c3")};
  &:hover {
    color: white;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
export const Group = styled.div`
  display: flex;
  align-items: center;
`;
export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  width: 32px;
  height: 32px;
  cursor: pointer;
  background-repeat: no-repeat;
  border: none;
  :focus {
    outline: none;
  }
`;
export const Dropdown = styled.div`
  position: absolute;
  padding: 10px;
  width: 100px;
  top: 32px;
  z-index: 10000;
  background-color: black;
  transition: all 0.1s ease;
  transform: scale(0.9);
  opacity: 0;
  pointer-events: none;
  right: 10px;
  ${Group}:last-of-type ${TextLink} {
    cursor: pointer;
    margin-left: 0;
  }
  ${Group} {
    margin-bottom: 20px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${TextLink},${Picture} {
      cursor: default;
    }
    ${TextLink} {
      margin-left: 9px;
    }
  }

  button {
    margin-right: 8px;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }
  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
    transform: scale(1);
    opacity: 1;
    pointer-events: all;
    @media (max-width: 1100px) {
      background-color: #171a1b;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: white;
    cursor: pointer;
  }
  @media (max-width: 603px) {
    display: none;
  }
`;
export const SearchIcon = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 16px;
    filter: brightness(0) invert(1);
  }
`;
export const SearchInput = styled.input`
  background-color: #44444459;
  color: white;
  border: 1px solid white;
  transition: all 0.3s;
  height: 30px;
  font-size: 14px;
  margin-left: ${({ active }) => (active ? "10px" : "0")};
  width: ${({ active }) => (active ? "200px" : "0")};
  padding: ${({ active }) => (active ? "0 10px" : "0")};
  border-width: ${({ active }) => (active ? "1px" : "0")};

  :focus {
    outline: none;
  }
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border: 0;
  border-radius: 5px;
  padding: 10px 20px;
  max-width: 130px;
  width: 100%;
  cursor: pointer;
  font-size: 20px;
  margin-top: 30px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;
