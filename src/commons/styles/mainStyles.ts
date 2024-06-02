import styled from '@emotion/styled';

interface GridItemProps {
  delay: number;
}

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  width: 60%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const fadeInUpAnimation = `
  @keyframes fadeInUp {
    0% { 
      opacity: 0; 
      transform: translateY(20px); 
    }
    100% { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }
`;

export const GridItem = styled.div<GridItemProps>`
  position: relative;
  width: 100%;
  padding-bottom: 100%; /* 1:1 비율 유지 */
  overflow: hidden;
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
  animation-delay: ${({ delay }) => delay}s;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    border-radius: 10px;
  }
`;

export const MainTitle = styled.div`
  font-size: 46px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;
