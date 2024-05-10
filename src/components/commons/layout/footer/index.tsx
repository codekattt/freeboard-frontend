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
    width: 10%;
    border-radius: 150px;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export default function LayoutFooter(): JSX.Element {
  return (
    <Wrapper>
      <img src="img/logo1.png" />
      <img src="img/logo2.png" />
      <img src="img/logo3.png" />
      <img src="img/logo4.png" />
    </Wrapper>
  );
}
