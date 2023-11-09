import { getDateTime } from '../../../../commons/libraries/utils';
import * as S from './BoardDetail.styles';

export default function BoardDetailUI(props) {
  return (
    <div>
      <S.Wrapper>
        <S.WriterWrapper>
          <S.ProfileImg>
            <img src={`/img/profileIcon.svg`} width={60} height={60} />
          </S.ProfileImg>
          <S.ProfileWrapper>
            <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
            <S.Date>{getDateTime(props.data?.fetchBoard?.createdAt)}</S.Date>
          </S.ProfileWrapper>
          <S.WriterIconWrapper>
            <img src={`/img/ic_link-32px.svg`} />
            <img src={`/img/ic_location_on-32px.svg`} />
          </S.WriterIconWrapper>
        </S.WriterWrapper>
        <S.Title>{props.data?.fetchBoard?.title}</S.Title>
        <img src={`/img/board-image.png`} />
        <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
        <S.Video>
          <img src={`/img/board-video.png`} />
        </S.Video>
        <S.IconWrapper>
          <S.Up>
            <img src={`/img/ic_thumb_up.svg`} />
            <p>1920</p>
          </S.Up>
          <S.Down>
            <img src={`/img/ic_thumb_down.svg`} />
            <p>1920</p>
          </S.Down>
        </S.IconWrapper>
      </S.Wrapper>
      <S.ButtonWrapper>
        <S.ContentsBtn onClick={props.onClickMoveToList}>
          목록으로
        </S.ContentsBtn>
        <S.ContentsBtn onClick={props.onClickMoveToEdit}>
          수정하기
        </S.ContentsBtn>
        <S.ContentsBtn onClick={props.onClickDelete}>삭제하기</S.ContentsBtn>
      </S.ButtonWrapper>
    </div>
  );
}
