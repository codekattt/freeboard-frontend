import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import type {
  IBoardCommentListUIProps,
  Comment,
} from './BoardCommentList.types';
import * as S from './BoardCommentList.styles';
import { db } from '../../../../commons/libraries/firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  const router = useRouter();
  const { boardId } = router.query;

  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!boardId) return;

    const commentsRef = collection(
      db,
      'boardComments',
      boardId as string,
      'comments',
    );
    const q = query(commentsRef, orderBy('createdAt', 'desc'));

    // Firestore 실시간 업데이트 설정
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const commentsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Comment[];
        setComments(commentsData);
      },
      (error) => {
        console.error('Error fetching comments: ', error);
        setError('댓글을 불러오지 못했습니다.');
      },
    );

    return () => unsubscribe();
  }, [boardId]);

  return (
    <>
      {error && <div>{error}</div>}
      {comments && (
        <S.Wrapper>
          {comments.map((el: Comment) =>
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
                    <img src={`/img/profile-cat.png`} width={50} height={50} />
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
