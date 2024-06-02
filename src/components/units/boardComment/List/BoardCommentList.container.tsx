import React, { ChangeEvent, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Modal, Input } from 'antd';
import BoardCommentListUI from './BoardCommentList.presenter';
import {
  doc,
  deleteDoc,
  getDoc,
  updateDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { db } from '../../../../commons/libraries/firebase';
import type { Comment } from './BoardCommentList.types';

interface CommentWithImage extends Comment {
  imageUrl: string;
}

const getRandomCatImage = () => {
  const randomIndex = Math.floor(Math.random() * 6) + 1;
  return `/img/profile_cat${randomIndex}.png`;
};

export default function BoardCommentList(): JSX.Element {
  const router = useRouter();
  const boardId =
    typeof router.query.boardId === 'string' ? router.query.boardId : '';

  const [comments, setComments] = useState<CommentWithImage[]>([]);
  const [commentPassword, setCommentPassword] = useState('');
  const [commentContents, setCommentContents] = useState('');
  const [star, setStar] = useState(0);
  const [commentIdToEdit, setCommentIdToEdit] = useState<string | null>(null);
  const [error, setError] = useState<string>('');

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [commentIdToDelete, setCommentIdToDelete] = useState<string | null>(
    null,
  );

  useEffect(() => {
    if (!boardId) return;

    const commentsRef = collection(db, 'boardComments', boardId, 'comments');
    const q = query(commentsRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const commentsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          imageUrl: getRandomCatImage(),
        })) as CommentWithImage[];
        setComments(commentsData);
      },
      (error) => {
        console.error('Error fetching comments: ', error);
        setError('댓글을 불러오지 못했습니다.');
      },
    );

    return () => unsubscribe();
  }, [boardId]);

  const onChangeCommentPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentPassword(event.target.value);
  };

  const onChangeCommentContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContents(event.target.value);
  };

  const onChangeStar = (value: number): void => {
    setStar(value);
  };

  const onClickEditComment = (commentId: string) => {
    setCommentIdToEdit(commentId);
  };

  const onCancelEditComment = () => {
    setCommentIdToEdit(null);
  };

  const onClickUpdateComment = async (commentId: string) => {
    if (!commentContents && star === 0) {
      alert('수정한 내용이 없습니다.');
      return;
    }

    if (!commentPassword) {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    try {
      const commentRef = doc(
        db,
        'boardComments',
        boardId,
        'comments',
        commentId,
      );
      const commentSnapshot = await getDoc(commentRef);

      if (!commentSnapshot.exists()) {
        alert('댓글을 찾을 수 없습니다.');
        return;
      }

      const commentData = commentSnapshot.data();
      if (commentData?.password !== commentPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }

      const updatedData: {
        contents?: string;
        rating?: number;
        updatedAt: Date;
      } = {
        updatedAt: new Date(),
      };
      if (commentContents) updatedData.contents = commentContents;
      if (star !== 0 && star !== commentData.rating) updatedData.rating = star;

      await updateDoc(commentRef, updatedData);

      setCommentIdToEdit(null);
      setCommentContents('');
      setCommentPassword('');
      setStar(0);

      alert('댓글이 수정되었습니다.');
    } catch (error) {
      console.error('Error updating comment: ', error);
      alert('댓글 수정 실패');
    }
  };

  const showModal = (commentId: string) => {
    setCommentIdToDelete(commentId);
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    if (!commentPassword) {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    try {
      const commentRef = doc(
        db,
        'boardComments',
        boardId,
        'comments',
        commentIdToDelete!,
      );
      const commentSnapshot = await getDoc(commentRef);

      if (!commentSnapshot.exists()) {
        alert('댓글을 찾을 수 없습니다.');
        return;
      }

      const commentData = commentSnapshot.data();
      if (commentData?.password !== commentPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }

      await deleteDoc(commentRef);
      alert('댓글이 삭제되었습니다.');

      setIsModalVisible(false);
      setCommentPassword('');
    } catch (error) {
      console.error('Error deleting comment: ', error);
      alert('댓글 삭제 실패');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCommentPassword('');
  };

  return (
    <>
      <BoardCommentListUI
        comments={comments}
        commentIdToEdit={commentIdToEdit}
        onChangeCommentContents={onChangeCommentContents}
        onChangeCommentPassword={onChangeCommentPassword}
        onChangeStar={onChangeStar}
        onClickDeleteComment={showModal}
        onClickEditComment={onClickEditComment}
        onCancelEditComment={onCancelEditComment}
        onClickUpdateComment={onClickUpdateComment}
        error={error}
      />
      <Modal
        title="댓글 삭제"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>비밀번호를 입력해주세요.</p>
        <Input.Password
          value={commentPassword}
          onChange={onChangeCommentPassword}
        />
      </Modal>
    </>
  );
}
