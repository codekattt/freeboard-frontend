import styled from '@emotion/styled';

const Wrapper = styled.div`
  height: 200px;
  background-color: #dddddd;
  padding: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  & img {
    width: 20%;
    border-radius: 150px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 150px;

    & img {
      width: 35%;
    }
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

export default function LayoutFooter(): JSX.Element {
  return (
    <Wrapper>
      <LogoWrapper>
        <img src="/img/logo1.png"></img>
        <img src="/img/logo2.png"></img>
        <img src="/img/logo3.png"></img>
        <img src="/img/logo4.png"></img>
      </LogoWrapper>
    </Wrapper>
  );
}
