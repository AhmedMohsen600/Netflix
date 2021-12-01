import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 8px;
  max-width: 790px;
  width: 100%;
  &:first-of-type {
    margin-top: 3em;
  }
  @media (max-width: 1000px) {
    max-width: 670px;
  }
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 790px;
  /* margin: auto; */
`;

export const Title = styled.h1`
  font-size: 50px;
  color: white;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Body = styled.div`
  border-top: 1px solid black;
  background-color: #303030;
  padding: 0.8em 1.2em;
  max-height: 851;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  white-space: pre-wrap;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background-color: #303030;
  padding: 0.8em 1.2em;
  align-items: center;
  user-select: none;
  img {
    width: 24px;
    // convert image color to white
    filter: brightness(0) invert(1);
    @media (max-width: 600px) {
      width: 15px;
    }
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
