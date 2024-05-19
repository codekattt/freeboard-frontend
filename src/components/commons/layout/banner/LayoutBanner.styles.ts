import styled from '@emotion/styled';

export const NaviWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 5%;
  height: auto;
  position: absolute;
  z-index: 99;
  transform: translateY(150px);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NaviPrev = styled.div`
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 100%;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 12px 0px rgba(68, 61, 97, 0.25);
  padding-top: 10px;
  cursor: pointer;

  & img {
    padding-right: 5px;
  }
`;

export const NaviNext = styled.div`
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 100%;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 12px 0px rgba(68, 61, 97, 0.25);
  padding-top: 10px;
  cursor: pointer;

  & img {
    padding-left: 5px;
  }
`;
