import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  position: relative;
  box-sizing: border-box;
  max-width: 450px;
  width: 100%;
  border-radius: 5px;
  margin: auto;
  margin-bottom: 100px;
  padding: 60px 68px 48px;
  @media (max-width: 414px) {
    min-height: 66vh;
    margin-top: 20px;
    margin-bottom: 68px;
    padding: 15px;
  }
`;
export const Title = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Erorr = styled.div`
  background-color: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;
export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #737373;
`;
export const Label = styled.label`
  position: absolute;
  left: 0;
  /* top: 10px; */
  color: #999;
  background-color: #fff;
  z-index: 10;
  transition: transform 150ms ease-out, font-size 150ms ease-out;
`;
export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;
export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
  gap: 20px;
`;

export const Submit = styled.button`
  border: none;
  margin: 25px 0 12px;
  font-size: 16px;
  font-weight: 700;
  background-color: #e50914;
  color: white;
  padding: 16px;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  :disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
export const Link = styled(ReactRouterLink)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  background-color: #333;
  border-radius: 4px;
  height: 50px;
  line-height: 50px;
  border: 0;
  color: white;
  padding: 16px;
  transition: padding 0.2s ease;
  ::placeholder {
    color: grey;
    font-size: 16px;
  }
  :focus {
    outline: none;
  }

  box-sizing: border-box;
`;
