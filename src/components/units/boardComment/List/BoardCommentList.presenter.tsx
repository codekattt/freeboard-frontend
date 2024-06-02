import React from 'react';
import type {
  IBoardCommentListUIProps,
  CommentWithImage,
} from './BoardCommentList.types';
import * as S from './BoardCommentList.styles';

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <>
      {props.error && <div>{props.error}</div>}
      {props.comments && (
        <S.Wrapper>
          {props.comments.map((el: CommentWithImage) =>
            props.commentIdToEdit === el.id ? (
              <S.EditCommentWrapper key={el.id}>
                <S.EditCommentWriterWrapper>
                  <S.EditCommentWriter>{el.writer}</S.EditCommentWriter>
                  <S.EditCommentPassword
                    placeholder="비밀번호"
                    onChange={props.onChangeCommentPassword}
                    type="password"
                  />
                  <S.EditStar onChange={props.onChangeStar} />
                </S.EditCommentWriterWrapper>
                <S.EditCommentContents
                  onChange={props.onChangeCommentContents}
                  defaultValue={el.contents}
                />
                <S.EditCommentReg>
                  <S.EditCommentRegInput>0/100</S.EditCommentRegInput>
                  <S.EditCommentRegButton
                    className="cancel"
                    onClick={props.onCancelEditComment}
                  >
                    수정취소
                  </S.EditCommentRegButton>
                  <S.EditCommentRegButton
                    className="reg"
                    id={el.id}
                    onClick={() => props.onClickUpdateComment(el.id)}
                  >
                    등록하기
                  </S.EditCommentRegButton>
                </S.EditCommentReg>
              </S.EditCommentWrapper>
            ) : (
              <S.CommentWrapper key={el.id}>
                <S.Comment>
                  <S.ProfileImg>
                    <img src={el.imageUrl} width={50} height={50} />
                  </S.ProfileImg>
                  <S.CommentContentsArea>
                    <S.CommentContentsWriter>
                      <S.ContentsWriter>{el.writer}</S.ContentsWriter>
                      <S.Star value={el.rating} disabled />
                    </S.CommentContentsWriter>
                    <S.CommentContents>{el.contents}</S.CommentContents>
                    <S.CommentDate>
                      {new Date(el.createdAt.seconds * 1000).toLocaleString()}
                    </S.CommentDate>
                  </S.CommentContentsArea>
                  <S.WriterIconWrapper
                    onClick={() => props.onClickEditComment(el.id)}
                  >
                    <img src={`/img/mode-24px.svg`} />
                  </S.WriterIconWrapper>
                  <S.WriterIconWrapper
                    id={el.id}
                    onClick={() => props.onClickDeleteComment(el.id)}
                  >
                    <img src={`/img/clear-24px.svg`} />
                  </S.WriterIconWrapper>
                </S.Comment>
              </S.CommentWrapper>
            ),
          )}
        </S.Wrapper>
      )}
    </>
  );
}
