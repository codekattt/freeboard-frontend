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
      <S.CommentWrapper>
        <S.CommentTop>
          <img src={`/img/rate_review-24px.svg`} />
          <p>댓글</p>
        </S.CommentTop>
        <S.CommentWriterWrapper>
          <S.CommentWriter type="text" placeholder="작성자" maxLength={6} />
          <S.CommentPassword
            type="password"
            placeholder="비밀번호"
            maxLength={16}
          />
          <S.CommentStar>★★★★★</S.CommentStar>
        </S.CommentWriterWrapper>
        <S.CommentDetail
          type="text"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          maxLength={100}
          rows={1}
        />
        <S.CommentReg>
          <S.CommentRegInput>0/100</S.CommentRegInput>
          <S.CommentRegButton>등록하기</S.CommentRegButton>
        </S.CommentReg>
        <S.Comment>
          <S.ProfileImg>
            <img src={`/img/profileIcon.svg`} width={48} height={48} />
          </S.ProfileImg>
          <S.CommentContentsArea>
            <S.CommentContentsWriter>
              <S.ContentsWriter>노원두</S.ContentsWriter>
              <S.ContentsRate>
                <p>★</p>
                <p>★</p>
                <p>★</p>
                <p>★</p>
                <p>★</p>
              </S.ContentsRate>
            </S.CommentContentsWriter>
            <S.CommentContents>짱이에요</S.CommentContents>
            <S.CommentDate>2023.04.01</S.CommentDate>
          </S.CommentContentsArea>
          <S.WriterIconWrapper>
            <img src={`/img/mode-24px.svg`} />
            <img src={`/img/clear-24px.svg`} />
          </S.WriterIconWrapper>
        </S.Comment>
      </S.CommentWrapper>
    </div>
  );
}
