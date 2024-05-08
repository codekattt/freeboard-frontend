import styled from '@emotion/styled';

const Wrapper = styled.div`
  height: 200px;
  background-color: #d2cece;
  padding: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export default function LayoutFooter(): JSX.Element {
  return (
    <Wrapper>
      <p>여기는 푸터입니다.</p>
      <p>여기는 푸터입니다.</p>
      <p>여기는 푸터입니다.</p>
      <p>여기는 푸터입니다.</p>
    </Wrapper>
  );
}
