import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  min-height: 80vh;
  max-width: 80%;
`;
export const Title = styled.h1`
  color: white;
  font-size: 48px;
  text-align: center;
  font-weight: 400;
  width: 100%;
  text-align: center;
`;
export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  border-radius: 5px;
  box-sizing: border-box;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
  :hover {
    border-color: white;
  }
`;
export const User = styled.li`
  max-height: 280px;
  max-width: 280px;
  list-style-type: none;
  text-align: center;
`;
export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  position: relative;
  box-sizing: border-box;

  &:hover > ${Picture} {
    border: 3px solid white;
  }
  &:hover ${Name} {
    color: white;
  }
  :last-of-type {
    margin-right: 0;
  }
`;
