import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f5f2fc;
  padding: 20px 5%;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;

export const InnerLogo = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: 'live';
  font-style: italic;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.hover};
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const InnerButton = styled.span`
  margin: 10px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`;

// 텍스트 애니메이션 구간

export const Container = styled.span`
  padding: 8px 0;
  color: #e5e5e5;
  font-size: 2.26rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  & p {
    text-shadow: 0 0 7px rgba(255, 255, 255, 0.3),
      0 0 3px rgba(255, 255, 255, 0.3);
    margin: 0;
  }
`;

const TextAnimation = keyframes`
  0%, 20% { transform: translateY(0); }
  25%, 45% { transform: translateY(-33%); }
  50%, 70% { transform: translateY(0); }
  75%, 95% { transform: translateY(33%); }
  100% { transform: translateY(0); }
`;

export const Animation = styled.span`
  height: 2.8rem;
  overflow: hidden;
  margin-left: 1rem;
  display: flex;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    animation: ${TextAnimation} 8s infinite;
  }

  & > div > div {
    display: flex;
    align-items: center;
  }

  @media (max-width: 767px) {
    height: 2rem;
  }
`;

export const First = styled.div`
  width: fit-content;
  margin: 10px 0;
  padding: 10px;
  background-color: #20a7d8;
`;
export const Second = styled.div`
  width: fit-content;
  margin: 10px 0;
  padding: 10px;
  background-color: #cd921e;
`;
export const Third = styled.div`
  width: fit-content;
  margin: 10px 0;
  padding: 10px;
  background-color: #c10528;
`;
