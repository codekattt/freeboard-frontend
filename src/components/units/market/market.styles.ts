import styled from '@emotion/styled';

export const GridWrapper = styled.div`
  display: grid;
  gap: 16px;
  width: 100%;
  max-width: 1600px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    cursor: pointer;
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  position: relative;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 12px 0 0 8px;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 8px;
`;

export const Contents = styled.div`
  color: gray;
  margin-bottom: 8px;
`;

export const Price = styled.div`
  font-weight: bold;
  color: #ff0000;
  margin-bottom: 20px;
`;
