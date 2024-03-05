import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: auto;

  .slick-dots {
    transform: translateY(-35px);
  }
`;

export const SliderItem = styled.img`
  height: 350px;
  margin: auto;

  @media (max-width: 767px) {
    width: auto;
    height: auto;
  }
`;
