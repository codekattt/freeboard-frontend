import * as S from './BoardCommentWrite.styles';
import type { IBoardCommentWriteUIProps } from './BoardCommentWrite.types';

export default function BoardCommentWriteUI(
  props: IBoardCommentWriteUIProps,
): JSX.Element {
  return (
    <>
      <S.CommentWrapper>
        <S.CommentTop>
          <img src={`/img/rate_review-24px.svg`} width={30} height={30} />
          <p>댓글</p>
        </S.CommentTop>
        <S.CommentWriterWrapper>
          <S.CommentWriter
            type="text"
            placeholder="작성자"
            maxLength={6}
            onChange={props.onChangeCommentWriter}
            value={props.commentWriter}
          />
          <S.CommentPassword
            type="password"
            placeholder="비밀번호"
            maxLength={16}
            onChange={props.onChangeCommentPassword}
            value={props.commentPassword}
          />
          <S.Star onChange={props.onChangeStar} />
        </S.CommentWriterWrapper>
        <S.CommentDetail
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          maxLength={100}
          rows={1}
          onChange={props.onChangeCommentContents}
          value={props.commentContents}
        />
        <S.CommentReg>
          <S.CommentRegInput>
            <span>{props.inputCount}</span>
            <span>/100 자</span>
          </S.CommentRegInput>
          <S.CommentRegButton onClick={props.onClickCommentSubmit}>
            등록하기
          </S.CommentRegButton>
        </S.CommentReg>
      </S.CommentWrapper>
    </>
  );
}
