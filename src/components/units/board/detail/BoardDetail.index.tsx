import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { db, firebaseApp } from '../../../../commons/libraries/firebase';
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  deleteDoc,
  collection,
  updateDoc,
  increment,
} from 'firebase/firestore';
import { Tooltip } from 'antd';
import { getDateTime } from '../../../../commons/libraries/utils';
import { useMoveToPage } from '../../../commons/hooks/customs/useMoveToPage';
import * as S from './BoardDetail.styles';
import { deleteObject, getStorage, ref } from 'firebase/storage';

const incrementViewCount = async (boardId: string) => {
  try {
    const boardRef = doc(db, 'board', boardId);
    await updateDoc(boardRef, {
      views: increment(1),
    });
  } catch (error) {
    console.error('Failed to increment view count:', error);
  }
};

const fetchBoard = async (
  documentId: string,
  setWriter: Function,
  setTitle: Function,
  setContents: Function,
  setCreatedAt: Function,
  setAddress: Function,
  setAddressDetail: Function,
  setFileUrls: Function,
  setYoutubeUrl: Function,
  setError: Function,
  setViews: Function, // 조회수 상태 업데이트 함수 추가
): Promise<void> => {
  try {
    const db = getFirestore(firebaseApp);
    const docRef = doc(db, 'board', documentId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      setWriter(data.writer);
      setTitle(data.title);
      setContents(data.contents);
      setCreatedAt(data.createdAt.toDate().toString());
      setAddress(data.address);
      setAddressDetail(data.addressDetail);
      setYoutubeUrl(data.youtubeUrl);
      setFileUrls(data.fileUrls);
      setViews(data.views || 0); // 조회수 데이터 설정
    } else {
      console.log('No such document!');
      setError('Document does not exist');
    }
  } catch (error) {
    console.error('Error fetching document: ', error);
    setError('Error fetching document');
  }
};

export default function BoardDetail() {
  const router = useRouter();
  const { boardId } = router.query;

  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [fileUrls, setFileUrls] = useState<string[]>([]);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [error, setError] = useState('');
  const [views, setViews] = useState(0);

  const { onClickMoveToPage } = useMoveToPage();

  useEffect(() => {
    const loadBoardDetails = async () => {
      if (boardId) {
        await fetchBoard(
          boardId as string,
          setWriter,
          setTitle,
          setContents,
          setCreatedAt,
          setAddress,
          setAddressDetail,
          setFileUrls,
          setYoutubeUrl,
          setError,
          setViews,
        );
        await incrementViewCount(boardId as string);
      }
    };

    loadBoardDetails();
  }, [boardId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const deleteBoard = async (boardId: string) => {
    const confirmed = window.confirm('게시글을 삭제하시겠습니까?');
    if (!confirmed) return;

    const password = prompt('비밀번호를 입력해주세요.');
    if (!password) return;

    try {
      const storage = getStorage(firebaseApp);

      const boardRef = doc(db, 'board', boardId);
      const boardDataSnapshot = await getDoc(boardRef);
      const boardData = boardDataSnapshot.data();

      if (boardData?.password !== password) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }

      // Firebase Storage에서 이미지 삭제
      const imageDeletePromises = fileUrls.map((imageUrl) => {
        const imageRef = ref(storage, imageUrl);
        return deleteObject(imageRef);
      });
      await Promise.all(imageDeletePromises);

      // 댓글 삭제
      const commentsCollectionRef = collection(
        db,
        'boardComments',
        boardId,
        'comments',
      );
      const commentsSnapshot = await getDocs(commentsCollectionRef);
      const commentsDeletePromises = commentsSnapshot.docs.map((commentDoc) =>
        deleteDoc(commentDoc.ref),
      );
      await Promise.all(commentsDeletePromises);

      // 게시글 삭제
      await deleteDoc(boardRef);

      alert('게시글이 삭제되었습니다.');
      void router.push('/boards');
    } catch (error) {
      console.error('게시글 삭제 중 오류가 발생했습니다: ', error);
      alert('게시글 삭제 중 오류가 발생했습니다');
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.WriterWrapper>
          <S.ProfileImg src={`/img/profileIcon.svg`} width={60} height={60} />
          <S.ProfileWrapper>
            <S.Writer>{writer}</S.Writer>
            <S.Date>{getDateTime(createdAt)}</S.Date>
            <div>조회수: {1 + views}</div>
          </S.ProfileWrapper>
          <S.WriterIconWrapper>
            <S.WriterIcon src={`/img/ic_link-32px.svg`} />
            <Tooltip
              placement="topRight"
              title={`${address ?? ''} ${addressDetail ?? ''}`}
            >
              <S.WriterIcon src={`/img/ic_location_on-32px.svg`} />
            </Tooltip>
          </S.WriterIconWrapper>
        </S.WriterWrapper>
        <S.Title>{title}</S.Title>
        <S.ImageWrapper>
          {fileUrls.map(
            (url, index) =>
              url && <S.Image key={index} src={url} alt={`image-${index}`} />,
          )}
        </S.ImageWrapper>
        <S.Contents>{contents}</S.Contents>
        {youtubeUrl !== '' && (
          <S.Youtube
            url={youtubeUrl}
            width="400px"
            height="300px"
            controls={true}
          />
        )}
      </S.Wrapper>
      <S.ButtonWrapper>
        <S.ContentsBtn onClick={onClickMoveToPage('/boards')}>
          목록으로
        </S.ContentsBtn>
        <S.ContentsBtn
          onClick={onClickMoveToPage(`/boards/${router.query.boardId}/edit`)}
        >
          수정하기
        </S.ContentsBtn>
        <S.ContentsBtn onClick={() => deleteBoard(boardId as string)}>
          삭제하기
        </S.ContentsBtn>
      </S.ButtonWrapper>
    </>
  );
}
