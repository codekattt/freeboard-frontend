import { Key } from 'react';
import { ICatPleaseUIProps } from './catPlease.types';
import { Spin } from 'antd';
import * as S from './catPlease.styles';

export default function CatPleaseUI(props: ICatPleaseUIProps): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.UserTitle>
          {props.data?.fetchUserLoggedIn.name}님의 냥스타그램
        </S.UserTitle>
        <S.CatImageWrapper>
          {[...props.cats]
            .reverse()
            .map((cat: string | undefined, index: Key | null | undefined) => (
              <div
                key={index}
                className="cat"
                style={{ backgroundImage: `url(${cat})` }}
              />
            ))}
          <Spin spinning={props.spinning} className="SpinLoader" size="large" />
        </S.CatImageWrapper>
        <S.button onClick={props.fetchCats} />
      </S.Wrapper>
    </>
  );
}
