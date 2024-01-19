import styled from '@emotion/styled';

const Wrapper = styled.div`
  height: 300px;
  background-color: #d2cece;
  padding: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
