import { ChangeEvent, useEffect, useState } from 'react';
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { useRouter } from 'next/router';
import { db, firebaseApp } from '../../../../commons/libraries/firebase';
import BoardWriteUI from './BoardWrite.presenter';
import { IBoardWriteProps } from './BoardWrite.types';
import { Address } from 'react-daum-postcode';
import { uploadImage } from '../../../commons/uploads/02_firebase/UploadImage.container';
import {
  getStorage,
  ref,
  deleteObject,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const router = useRouter();
  const { boardId } = router.query;

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');

  const [selectedFiles, setSelectedFiles] = useState<(File | null)[]>([
    null,
    null,
    null,
  ]);
  const [fileUrls, setFileUrls] = useState<string[]>([]);

  const [writerError, setWriterError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contentsError, setContentsError] = useState('');

  useEffect(() => {
    if (boardId) {
      const fetchBoard = async () => {
        try {
          const docRef = doc(db, 'board', boardId as string);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            setWriter(data.writer);
            setTitle(data.title);
            setContents(data.contents);
            setZipcode(data.zipcode);
            setAddress(data.address);
            setAddressDetail(data.addressDetail);
            setYoutubeUrl(data.youtubeUrl);
            setFileUrls(data.fileUrls);
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching document: ', error);
        }
      };

      fetchBoard();
    }
  }, [boardId]);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
    if (event.target.value !== '') {
      setWriterError('');
    }

    if (
      event.target.value !== '' &&
      password !== '' &&
      title !== '' &&
      contents !== ''
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
    if (event.target.value !== '') {
      setPasswordError('');
    }

    if (
      writer !== '' &&
      event.target.value !== '' &&
      title !== '' &&
      contents !== ''
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== '') {
      setTitleError('');
    }

    if (
      writer !== '' &&
      password !== '' &&
      event.target.value !== '' &&
      contents !== ''
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (event.target.value !== '') {
      setContentsError('');
    }

    if (
      writer !== '' &&
      password !== '' &&
      title !== '' &&
      event.target.value !== ''
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeAddressDetail = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setAddressDetail(event.target.value);
  };

  const onClickAddressSearch = () => {
    setIsOpen((prev) => !prev);
    console.log;
  };

  const onCompleteAddressSearch = (data: Address) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    onClickAddressSearch();
  };

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>): void => {
    setYoutubeUrl(event.target.value);
  };

  const isImageFile = (file: File): boolean => {
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const extension = file.name.split('.').pop()?.toLowerCase();
    return extension ? allowedExtensions.includes(extension) : false;
  };

  const maxSizeInBytes = 5 * 1024 * 1024; // 5MB

  const onClickUploadImg = async (
    event: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // 이미지 파일인지 확인
    if (!isImageFile(file)) {
      alert('이미지 파일만 업로드할 수 있습니다.');
      return;
    }

    if (file.size > maxSizeInBytes) {
      alert('5MB 이하의 이미지만 업로드할 수 있습니다.');
      return;
    }

    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles[index] = file;
    setSelectedFiles(newSelectedFiles);
  };

  const onClickEditUploadImg = async (
    event: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // 이미지 파일인지 확인
    if (!isImageFile(file)) {
      alert('이미지 파일만 업로드할 수 있습니다.');
      return;
    }

    if (file.size > maxSizeInBytes) {
      alert('5MB 이하의 이미지만 업로드할 수 있습니다.');
      return;
    }

    // 새로운 파일을 selectedFiles에 저장
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles[index] = file;
    setSelectedFiles(newSelectedFiles);

    // 기존 URL을 null로 변경 (삭제 표시)
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = URL.createObjectURL(file);
    setFileUrls(newFileUrls);
  };

  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError('✕ 작성자를 입력해주세요.');
    }
    if (!password) {
      setPasswordError('✕ 비밀번호를 입력해주세요.');
    }
    if (!title) {
      setTitleError('✕ 제목을 입력해주세요.');
    }
    if (!contents) {
      setContentsError('✕ 내용을 입력해주세요.');
    }
    if (
      writer &&
      password &&
      title &&
      contents
      // zipcode &&
      // address &&
      // addressDetail &&
      // youtubeUrl
    ) {
      try {
        const uploadedFileUrls = await Promise.all(
          selectedFiles.map(async (file) => {
            if (file) {
              const url = await uploadImage(file);
              return url;
            }
            return null;
          }),
        );

        const filteredFileUrls = uploadedFileUrls.filter((url) => url !== null);
        const boardCollection = collection(db, 'board');
        const newBoardRef = await addDoc(boardCollection, {
          writer,
          password,
          title,
          contents,
          zipcode,
          address,
          addressDetail,
          youtubeUrl,
          fileUrls: filteredFileUrls,
          createdAt: serverTimestamp(),
        });
        void router.push(`/boards/${newBoardRef.id}`);
        alert('게시글이 등록되었습니다.');
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickEdit = async () => {
    if (!writer || !password || !title || !contents) {
      if (!writer) setWriterError('✕ 작성자를 입력해주세요.');
      if (!password) setPasswordError('✕ 비밀번호를 입력해주세요.');
      if (!title) setTitleError('✕ 제목을 입력해주세요.');
      if (!contents) setContentsError('✕ 내용을 입력해주세요.');
      return;
    }

    try {
      const storage = getStorage(firebaseApp);
      const docRef = doc(db, 'board', boardId as string);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        alert('해당 문서가 존재하지 않습니다.');
        return;
      }

      const data = docSnap.data();
      if (!data.password || data.password !== password) {
        setPasswordError('✕ 비밀번호가 일치하지 않습니다.');
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }

      const newFileUrls = [...data.fileUrls];
      const promises = [];

      for (let index = 0; index < selectedFiles.length; index++) {
        const file = selectedFiles[index];
        if (file) {
          // 변경된 파일이 있는 경우
          // 기존 파일 삭제
          if (newFileUrls[index]) {
            const fileRef = ref(storage, newFileUrls[index]);
            promises.push(deleteObject(fileRef));
          }

          // 새 파일 업로드
          const newFileRef = ref(storage, `images/${file.name}`);
          const uploadTask = await uploadBytes(newFileRef, file);
          const newUrl = await getDownloadURL(uploadTask.ref);
          newFileUrls[index] = newUrl; // URL 업데이트
        }
      }

      await Promise.all(promises);

      await updateDoc(docRef, {
        writer,
        password,
        title,
        contents,
        zipcode,
        address,
        addressDetail,
        youtubeUrl,
        fileUrls: newFileUrls,
        updatedAt: serverTimestamp(),
      });

      alert('게시글이 수정되었습니다.');
      router.push(`/boards/${boardId}`);
    } catch (error) {
      console.error('Error updating document:', error);
      alert('게시글 수정 중 오류가 발생했습니다.');
    }
  };

  return (
    <BoardWriteUI
      isActive={isActive}
      isOpen={isOpen}
      isEdit={props.isEdit}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      fileUrls={fileUrls}
      selectedFiles={selectedFiles}
      onClickUploadImg={onClickUploadImg}
      data={{ fetchBoard: { writer, title, contents, youtubeUrl, fileUrls } }}
      onClickEditUploadImg={onClickEditUploadImg}
    />
  );
}
