import * as S from './LikeCount.styles';
import { ILikeCountUIProps } from './LikeCount.types';

export default function LikeCountUI(props: ILikeCountUIProps): JSX.Element {
  return (
    <S.IconWrapper>
      <S.Up onClick={props.onClickLike}>
        <img src={`/img/ic_thumb_up.svg`} />
        <span>{props.likeCount}</span>
      </S.Up>
      <S.Down onClick={props.onClickDislike}>
        <img src={`/img/ic_thumb_down.svg`} />
        <span>{props.dislikeCount}</span>
      </S.Down>
    </S.IconWrapper>
  );
}
