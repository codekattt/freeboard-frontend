import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import ReactPlayer from 'react-player/youtube';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  border: 1px solid black;
  margin: 5% 0;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;

  @media (max-width: 767px) {
    margin: 5% 0 40px 0;
  }
`;

export const WriterWrapper = styled.div`
  width: 100%;
  max-width: 996px;
  height: 100px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
`;

export const ProfileWrapper = styled.div`
  width: calc(100% - 200px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3px;

  @media (max-width: 767px) {
    width: calc(100% - 150px);
    margin-left: 14px;
  }
`;

export const Writer = styled.div`
  width: auto;
  height: auto;
  font-size: 24px;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const Date = styled.div`
  width: auto;
  height: auto;
  font-size: 16px;
  font-weight: 400;
  color: #828282;
  margin-top: 5px;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const WriterIconWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const WriterIcon = styled.img`
  @media (max-width: 767px) {
    width: 30px;
    height: 30px;
    margin-left: 4px;
  }
`;

export const Title = styled.div`
  width: 100%;
  max-width: 996px;
  font-size: 36px;
  font-weight: 700;
  margin: 40px 0px 40px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Contents = styled.div`
  width: 100%;
  max-width: 996px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 60px;
  line-height: 24px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 996px;
  height: auto;
  margin-bottom: 14px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Youtube = styled(ReactPlayer)`
  margin-top: 120px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  margin-bottom: 40px;
`;

export const ContentsBtn = styled.button`
  width: 179px;
  height: 45px;
  border: 1px solid #bdbdbd;
  background-color: white;
  margin-left: 12px;
  margin-right: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  :hover {
    color: white;
    background-color: #6d30d7;
    animation: ${fadeIn} 0.2s ease-in-out;
  }
`;
