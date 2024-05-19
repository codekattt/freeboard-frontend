import * as S from './market.styles';

export default function MarketPage(): JSX.Element {
  const items = [
    {
      id: 1,
      title: '귀여운 고양이',
      contents: '귀여운 고잉이 입니다',
      price: '19,990원',
      imgSrc: 'img/main-cat1.png',
    },
    {
      id: 2,
      title: '깜찍한 고양이',
      contents: '깜찍한 고양이 입니다.',
      price: '9,900원',
      imgSrc: 'img/main-cat2.png',
    },
    {
      id: 3,
      title: '활발한 고양이',
      contents: '활발한 고양이 입니다.',
      price: '6,800원',
      imgSrc: 'img/main-cat3.png',
    },
    {
      id: 4,
      title: '고양이와 나비',
      contents: '고양이와 나비 입니다.',
      price: '12,450원',
      imgSrc: 'img/main-cat4.png',
    },
    {
      id: 5,
      title: '상품명5',
      contents: '상품설명5',
      price: '가격5',
      imgSrc: 'img/slide1.png',
    },
  ];

  return (
    <>
      <S.GridWrapper>
        {items.map((item) => (
          <S.ItemWrapper key={item.id}>
            <S.ImgWrapper>
              <img src={item.imgSrc} alt={item.title} />
            </S.ImgWrapper>
            <S.ContentsWrapper>
              <S.Title>{item.title}</S.Title>
              <S.Contents>{item.contents}</S.Contents>
              <S.Price>{item.price}</S.Price>
            </S.ContentsWrapper>
          </S.ItemWrapper>
        ))}
      </S.GridWrapper>
    </>
  );
}
