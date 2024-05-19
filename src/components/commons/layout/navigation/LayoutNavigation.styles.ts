import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #ffffff;

  @media screen and (max-width: 767px) {
    font-size: 16px;

    & .payment-menu {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const MenuItem = styled.div`
  margin: 0px 2%;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`;
