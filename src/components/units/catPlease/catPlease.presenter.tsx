import { Key } from 'react';
import { ICatPleaseUIProps } from './catPlease.types';
import * as S from './catPlease.styles';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export default function CatPleaseUI(props: ICatPleaseUIProps): JSX.Element {
  return (
    <div style={{ margin: 10 }}>
      <S.button onClick={props.fetchCats}>애옹이 주세요</S.button>
      <S.Wrapper>
        {/* Spin 컴포넌트를 이미지 로딩 영역에 적용 */}
        <Spin
          spinning={props.spinning}
          indicator={
            <LoadingOutlined style={{ fontSize: 60 }} spin rev={undefined} />
          }
        >
          <div style={{ position: 'relative', minHeight: '300px' }}>
            {' '}
            {/* minHeight는 Spin 표시 시 최소 높이를 보장 */}
            {props.cats.map(
              (cat: string | undefined, index: Key | null | undefined) => (
                <img
                  key={index}
                  src={cat}
                  alt={`Random Cat ${index}`}
                  width={300}
                  height={300}
                />
              ),
            )}
          </div>
        </Spin>
      </S.Wrapper>
    </div>
  );
}
