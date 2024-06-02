import * as S from './market.styles';

export default function MarketPage(): JSX.Element {
  const items = [
    {
      id: 1,
      title: '모찌네 츄르',
      contents: '맛있는 고양이 간식',
      price: '19,990원',
      imgSrc: 'img/prd1.png',
    },
    {
      id: 2,
      title: '잇쭈 고양이 츄르',
      contents: '영양만점 간식',
      price: '9,900원',
      imgSrc: 'img/prd2.png',
    },
    {
      id: 3,
      title: '하트루스틱',
      contents: '비타민 함유 츄르',
      price: '6,800원',
      imgSrc: 'img/prd3.png',
    },
    {
      id: 4,
      title: '굿츄 츄르',
      contents: '최고급 연어 사용',
      price: '12,450원',
      imgSrc: 'img/prd4.png',
    },
    {
      id: 5,
      title: '촉촉츄르',
      contents: '촉촉한 츄르 참치맛',
      price: '990원',
      imgSrc: 'img/prd5.png',
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
