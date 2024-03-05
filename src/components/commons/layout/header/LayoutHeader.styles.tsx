import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 152px;
  background-color: #f5f2fc;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    width: auto;
    height: auto;
    margin-top: 20px;
    padding: 0 24px;
  }
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

export const InnerLogo = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: 'live';
  font-style: italic;
  color: #5729ff;
  cursor: pointer;
`;

export const InnerButton = styled.span`
  margin: 10px;
  color: #5729ff;
  cursor: pointer;
`;
