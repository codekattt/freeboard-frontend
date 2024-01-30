import { getDateTime } from '../../../../commons/libraries/utils';
import { FaStar } from 'react-icons/fa';
import type { IBoardCommentListUIProps } from './BoardCommentList.types';
import * as S from './BoardCommentList.styles';

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <div>
      {props.data?.fetchBoardComments.map((el: any) =>
        props.commentIdToEdit === el._id ? (
          <S.EditCommentWrapper>
            <S.EditCommentWriterWrapper>
              <S.EditCommentWriter>{el.writer}</S.EditCommentWriter>
              <S.EditCommentPassword
                placeholder="비밀번호"
                onChange={props.onChangeCommentPassword}
                type="password"
              />
              <S.EditCommentStar>
                {/* ★★★★★ */}
                {props.ARRAY.map((el, index) => (
                  <FaStar
                    key={index}
                    size="23"
                    onClick={() => props.starClick(index)}
                    className={
                      (props.clicked[el] ? 'yellowStar' : undefined) as string
                    }
                  ></FaStar>
                ))}
              </S.EditCommentStar>
            </S.EditCommentWriterWrapper>
            <S.EditCommentContents
              onChange={props.onChangeCommentContents}
              defaultValue={el.contents}
            />
            <S.EditCommentReg>
              <S.EditCommentRegInput>0/100</S.EditCommentRegInput>
              <S.EditCommentRegButton onClick={props.onCancelEditComment}>
                수정취소
              </S.EditCommentRegButton>
              <S.EditCommentRegButton
                id={el._id}
                onClick={() => props.onClickUpdateComment(el._id)}
              >
                등록하기
              </S.EditCommentRegButton>
            </S.EditCommentReg>
          </S.EditCommentWrapper>
        ) : (
          <S.CommentWrapper>
            <S.Comment>
              <S.ProfileImg>
                <img src={`/img/profile-cat.png`} width={50} height={50} />
              </S.ProfileImg>
              <S.CommentContentsArea>
                <S.CommentContentsWriter>
                  <S.ContentsWriter>{el.writer}</S.ContentsWriter>
                  <S.ContentsRate value={el.rating} disabled />
                </S.CommentContentsWriter>
                <S.CommentContents>{el.contents}</S.CommentContents>
                <S.CommentDate>{getDateTime(el.createdAt)}</S.CommentDate>
              </S.CommentContentsArea>
              <S.WriterIconWrapper
                onClick={() => props.onClickEditComment(el._id)}
              >
                {/* 수정 아이콘 */}
                <img src={`/img/mode-24px.svg`} />
              </S.WriterIconWrapper>
              <S.WriterIconWrapper
                id={el._id}
                onClick={() => props.onClickDeleteComment(el._id)}
              >
                {/* 삭제 아이콘 */}
                <img src={`/img/clear-24px.svg`} />
              </S.WriterIconWrapper>
            </S.Comment>
          </S.CommentWrapper>
        ),
      )}
    </div>
  );
}
