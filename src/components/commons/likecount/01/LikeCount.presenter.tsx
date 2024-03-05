import * as S from './LikeCount.styles';
import { ILikeCountUIProps } from './LikeCount.types';

export default function LikeCountUI(props: ILikeCountUIProps): JSX.Element {
  return (
    <S.IconWrapper>
      <S.Up>
        <img src={`/img/ic_thumb_up.svg`} onClick={props.onClickLike} />
        <span>{props.likeCount}</span>
      </S.Up>
      <S.Down>
        <img src={`/img/ic_thumb_down.svg`} onClick={props.onClickDislike} />
        <span>{props.dislikeCount}</span>
      </S.Down>
    </S.IconWrapper>
  );
}
