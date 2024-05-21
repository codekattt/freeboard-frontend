import { useRouter } from 'next/router';
import { useMutationDeleteBoard } from '../../../commons/hooks/mutations/useMutationDeleteBoard';
import { useMoveToPage } from '../../../commons/hooks/customs/useMoveToPage';
import { useQueryFetchBoard } from '../../../commons/hooks/queries/useQueryFetchBoard';
import { useQueryIdChecker } from '../../../commons/hooks/customs/useQueryIdChecker';
import { getDateTime } from '../../../../commons/libraries/utils';
import LikeCount from '../../../commons/likecount/01/LikeCount.container';
import { Tooltip } from 'antd';
import * as S from './BoardDetail.styles';
import {
  getFirestore,
  getDocs,
  collection,
  getDoc,
  doc,
} from 'firebase/firestore';
import { firebaseApp } from '../../../../commons/libraries/firebase';
import { useState } from 'react';

const onClickFetch = async (
  documentId: string,
  setWriter: Function,
  setTitle: Function,
  setContents: Function,
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
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error fetching document: ', error);
  }
};

export default function BoardDetail() {
  const [documentId, setDocumentId] = useState('AAxTklYmu4lRvx1BlvN7');
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const router = useRouter();
  const { id } = useQueryIdChecker('boardId');
  const { data, loading, error } = useQueryFetchBoard({ boardId: id });
  const { onClickMoveToPage } = useMoveToPage();
  const onClickDelete = useMutationDeleteBoard();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <S.Wrapper>
        <S.WriterWrapper>
          <S.ProfileImg src={`/img/profileIcon.svg`} width={60} height={60} />
          <S.ProfileWrapper>
            <S.Writer>{data?.fetchBoard?.writer}</S.Writer>
            <S.Date>{getDateTime(data?.fetchBoard?.createdAt)}</S.Date>
          </S.ProfileWrapper>
          <S.WriterIconWrapper>
            <S.WriterIcon src={`/img/ic_link-32px.svg`} />
            <Tooltip
              placement="topRight"
              title={`${data?.fetchBoard.boardAddress?.address ?? ''} ${
                data?.fetchBoard.boardAddress?.addressDetail ?? ''
              }`}
            >
              <S.WriterIcon src={`/img/ic_location_on-32px.svg`} />
            </Tooltip>
          </S.WriterIconWrapper>
        </S.WriterWrapper>
        <S.Title>{data?.fetchBoard?.title}</S.Title>
        <S.ImageWrapper>
          {data?.fetchBoard.images
            ?.filter((el) => el)
            .map((el, index) => (
              <S.Image
                key={index}
                src={`https://storage.googleapis.com/${el}`}
              />
            ))}
        </S.ImageWrapper>
        <S.Contents>{data?.fetchBoard?.contents}</S.Contents>
        {data?.fetchBoard.youtubeUrl !== '' && (
          <S.Youtube
            url={data?.fetchBoard.youtubeUrl ?? ''}
            width="auto"
            height="auto"
            controls={true}
          />
        )}
        <LikeCount />
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
        <S.ContentsBtn onClick={onClickDelete}>삭제하기</S.ContentsBtn>
      </S.ButtonWrapper>
      <div>writer: {writer}</div>
      <div>title: {title}</div>
      <div>contents: {contents}</div>
      <S.ContentsBtn
        onClick={() =>
          onClickFetch(documentId, setWriter, setTitle, setContents)
        }
      >
        파이어베이스 데이터 가져오기
      </S.ContentsBtn>
    </>
  );
}
