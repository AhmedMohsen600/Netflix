import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
  }
`;
export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  height: 60px;
  padding: 10px;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.div`
  border: 0;
  background-color: #e50914;
  display: flex;
  gap: 6px;
  height: 60px;
  color: white;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
  font-size: 26px;
  font-weight: 350;
  cursor: pointer;
  img {
    width: 16px;
    filter: brightness(0) invert(1);
    @media (max-width: 600px) {
      width: 9px;
    }
  }
  &:hover {
    background-color: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    margin-top: 20px;
    font-size: 16px;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 19.2px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
