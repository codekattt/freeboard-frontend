import { useState } from 'react';
import {
  collection,
  addDoc,
  serverTimestamp,
  getFirestore,
} from 'firebase/firestore';
import { useRouter } from 'next/router';
import { firebaseApp } from '../../../../commons/libraries/firebase';
import BoardWriteUI from './BoardWrite.presenter';

export default function BoardWrite(): JSX.Element {
  const router = useRouter();
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const onClickSubmit = async () => {
    try {
      const firestore = getFirestore(firebaseApp); // Firestore 인스턴스 생성
      const boardCollection = collection(firestore, 'board');
      const newBoardRef = await addDoc(boardCollection, {
        writer,
        password,
        title,
        contents,
        createdAt: serverTimestamp(),
      });
      router.push(`/boards/${newBoardRef.id}`);
      alert('게시글이 등록되었습니다.');
    } catch (error) {
      alert('게시글 등록에 실패했습니다.');
      console.error(error);
    }
  };

  return (
    <BoardWriteUI
      writer={writer}
      setWriter={setWriter}
      password={password}
      setPassword={setPassword}
      title={title}
      setTitle={setTitle}
      contents={contents}
      setContents={setContents}
      onClickSubmit={onClickSubmit}
    />
  );
}
