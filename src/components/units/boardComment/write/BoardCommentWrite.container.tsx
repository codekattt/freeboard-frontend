import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import type { ChangeEvent } from 'react';
import BoardCommentWriteUI from './BoardCommentWrite.presenter';
import { FETCH_BOARD_COMMENTS } from '../detail/BoardCommentDetail.queries';
import { CREATE_BOARD_COMMENT } from './BoardCommentWrite.queries';
import { CommentPassword } from './BoardCommentWrite.styles';

export default function BoardCommentWrite(): JSX.Element {
  //별점 시작
  const ARRAY = [0, 1, 2, 3, 4];
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const starClick = (index: number) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);

    //true 갯수 세기
    const newNumberOfTrue = clickStates.filter(
      (value) => value === true,
    ).length;
    setNumberOfTrue(newNumberOfTrue);
  };
  //별점 끝

  const router = useRouter();

  const [isActive, setIsActive] = useState(false);

  const [commentWriter, setCommentWriter] = useState('');
  const [commentPassword, setCommentPassword] = useState('');
  const [commentContents, setCommentContents] = useState('');
  const [numberOfTrue, setNumberOfTrue] = useState(0);

  const [commentWriterError, setCommentWriterError] = useState('');
  const [commentPasswordError, setCommentPasswordError] = useState('');
  const [commentContentsError, setCommentContentsError] = useState('');

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const onChangeCommentWriter = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setCommentWriter(event.target.value);
    if (event.target.value !== '') {
      setCommentWriterError('');
    }

    if (event.target.value && commentPassword && commentContents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeCommentPassword = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setCommentPassword(event.target.value);
    if (event.target.value !== '') {
      setCommentPasswordError('');
    }

    if (commentWriter && event.target.value && commentContents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeCommentContents = (
    event: ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setCommentContents(event.target.value);
    if (event.target.value !== '') {
      setCommentContentsError('');
    }

    if (commentWriter && commentPassword && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickCommentSubmit = async () => {
    if (!commentWriter) {
      alert('작성자를 입력해주세요.');
      return;
    }
    if (!commentPassword) {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    if (!commentContents) {
      alert('내용을 입력해주세요.');
      return;
    }
    if (!numberOfTrue) {
      alert('평점을 선택해주세요.');
      return;
    }

    if (commentWriter && commentPassword && commentContents && numberOfTrue) {
      try {
        const result = await createBoardComment({
          variables: {
            boardId: router.query.boardId,
            createBoardCommentInput: {
              writer: commentWriter,
              password: commentPassword,
              contents: commentContents,
              rating: numberOfTrue,
            },
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
        });
        alert('댓글이 등록되었습니다.');
      } catch (error) {
        alert((error as { message: string }).message);
      }
    }
    setCommentWriter('');
    setCommentPassword('');
    setCommentContents('');
  };

  return (
    <>
      <BoardCommentWriteUI
        commentWriter={commentWriter}
        commentPassword={commentPassword}
        commentContents={commentContents}
        commentWriterError={commentWriterError}
        commentPasswordError={commentPasswordError}
        commentContentsError={commentContentsError}
        onChangeCommentWriter={onChangeCommentWriter}
        onChangeCommentPassword={onChangeCommentPassword}
        onChangeCommentContents={onChangeCommentContents}
        onClickCommentSubmit={onClickCommentSubmit}
        isActive={isActive}
        ARRAY={ARRAY}
        starClick={starClick}
        clicked={clicked}
      />
    </>
  );
}
