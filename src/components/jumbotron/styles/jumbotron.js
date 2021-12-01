import styled from "styled-components/macro";
export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;
export const Container = styled.div``;
export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
export const Subtitle = styled.h2`
  font-size: 22px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
export const Image = styled.img`
  max-width: 100%;
  height: auto;
  position: relative;
  z-index: 2;
`;
export const Video = styled.video`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const Pane = styled.div`
  width: 60%;
  position: relative;
  overflow: hidden;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const ImageHolder = styled.div`
  width: 100%;
`;

export const VideoHolder = styled.div`
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 71%;
  max-height: 73%;
  @media (max-width: 950px) {
    max-width: 50%;
  }
`;
