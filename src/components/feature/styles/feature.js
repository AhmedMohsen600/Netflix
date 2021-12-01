import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0;
  text-align: center;
  @media (max-width: 414px) {
    margin: 50px 0;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  color: white;
  max-width: 640px;
  margin: 0;
  font-weight: 500;
  margin: auto;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
export const Subtitle = styled.h2`
  font-size: 26px;
  margin: 16px auto;
  font-weight: normal;
  color: white;
  @media (max-width: 900px) {
    font-size: 17px;
  }
`;
