import { useEffect, useState } from 'react';
import { useMoveToPage } from '../../../commons/hooks/customs/useMoveToPage';
import {
  getFirestore,
  getDocs,
  collection,
  query,
  orderBy,
  limit,
  startAfter,
  QueryDocumentSnapshot,
  DocumentData,
} from 'firebase/firestore';
import { db, firebaseApp } from '../../../../commons/libraries/firebase';
import { getDateTime } from '../../../../commons/libraries/utils';
import * as S from './BoardList.styles';

interface IBoard {
  id: string;
  writer: string;
  title: string;
  createdAt: string;
}

const PAGE_SIZE = 10; // 한 페이지에 보여줄 게시글 수 조정

const fetchBoards = async (
  startAfterDoc: QueryDocumentSnapshot<DocumentData> | null = null,
): Promise<{
  boards: IBoard[];
  lastDoc: QueryDocumentSnapshot<DocumentData>;
}> => {
  const boardCollection = collection(db, 'board');

  let boardQuery = query(
    boardCollection,
    orderBy('createdAt', 'desc'),
    limit(PAGE_SIZE),
  );

  if (startAfterDoc) {
    boardQuery = query(
      boardCollection,
      orderBy('createdAt', 'desc'),
      startAfter(startAfterDoc),
      limit(PAGE_SIZE),
    );
  }

  const result = await getDocs(boardQuery);
  const data = result.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate().toString() ?? '',
      } as IBoard),
  );

  const lastVisible = result.docs[result.docs.length - 1] || null;

  return { boards: data, lastDoc: lastVisible };
};

export default function BoardList(): JSX.Element {
  const [boards, setBoards] = useState<IBoard[]>([]);
  const [pageDocs, setPageDocs] = useState<
    QueryDocumentSnapshot<DocumentData>[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { onClickMoveToPage } = useMoveToPage();

  useEffect(() => {
    const initializeBoards = async () => {
      const { boards: boardData, lastDoc: lastVisible } = await fetchBoards(
        null,
      );
      setBoards(boardData);
      setPageDocs([lastVisible]); // 첫 페이지의 마지막 게시글 저장
      const totalDocs = await getDocs(
        collection(getFirestore(firebaseApp), 'board'),
      );
      setTotalPages(Math.ceil(totalDocs.size / PAGE_SIZE));
    };
    initializeBoards();
  }, []);

  const handlePageClick = async (page: number) => {
    setCurrentPage(page);
    const startAfterDoc = page === 1 ? null : pageDocs[page - 2]; // 클릭한 페이지의 이전 페이지의 마지막 게시글 가져옴
    const { boards: boardData, lastDoc: lastVisible } = await fetchBoards(
      startAfterDoc,
    );
    setBoards(boardData);
    setPageDocs((prev) => {
      const newPageDocs = [...prev];
      newPageDocs[page - 1] = lastVisible;
      return newPageDocs;
    });
  };

  const handlePrevPage = async () => {
    if (currentPage === 1) return;
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    const startAfterDoc = newPage === 1 ? null : pageDocs[newPage - 2];
    const { boards: boardData, lastDoc: lastVisible } = await fetchBoards(
      startAfterDoc,
    );
    setBoards(boardData);
  };

  const handleNextPage = async () => {
    if (currentPage === totalPages) return;
    const startAfterDoc = pageDocs[currentPage - 1];
    const { boards: newBoards, lastDoc: lastVisible } = await fetchBoards(
      startAfterDoc,
    );
    setBoards(newBoards);
    setCurrentPage((prevPage) => prevPage + 1);
    setPageDocs((prev) => [...prev, lastVisible]);
  };

  return (
    <S.Wrapper>
      <S.BoardList>
        {boards.map((el) => (
          <S.BoardItem key={el.id}>
            <S.BoardTitle onClick={onClickMoveToPage(`/boards/${el.id}`)}>
              제목: {el.title}
            </S.BoardTitle>
            <S.BoardWriter>작성자: {el.writer}</S.BoardWriter>
            <S.BoardDate>{getDateTime(el.createdAt)}</S.BoardDate>
          </S.BoardItem>
        ))}
      </S.BoardList>
      <S.Pagination>
        <S.PageButton onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </S.PageButton>
        {Array.from({ length: totalPages }, (_, i) => (
          <S.PageButton
            key={i + 1}
            onClick={() => handlePageClick(i + 1)}
            active={currentPage === i + 1}
          >
            {i + 1}
          </S.PageButton>
        ))}
        <S.PageButton
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </S.PageButton>
      </S.Pagination>
      <S.Button onClick={onClickMoveToPage('/boards/new')}>
        <img src="/img/write.png" />
        <span className="hide-text">게시물 등록</span>
      </S.Button>
    </S.Wrapper>
  );
}
