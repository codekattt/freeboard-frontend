import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  margin-top: 32px;
`;

export const UserTitle = styled.div`
  width: 95%;
  text-align: center;
  font-size: 24px;
  padding: 10px 0 40px 0;
`;

export const CatImageWrapper = styled.div`
  position: relative;
  width: 95%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  .cat {
    width: 100%;
    height: 0;
    padding-top: 100%;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
  }

  .SpinLoader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const button = styled.div`
  width: 40%;
  font-size: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.hover};
  background-color: white;
  margin: 20px 0;
  padding: 10px 0;
  border: 1px solid ${({ theme }) => theme.colors.hover};
  border-radius: 8px;
  ::after {
    content: '고양이 더 부르기';
  }

  :hover {
    color: white;
    background-color: ${({ theme }) => theme.colors.hover};
    cursor: pointer;

    ::after {
      content: '야옹~ 😽';
      line-height: 1;
    }
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const SpinLoader = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
`;
