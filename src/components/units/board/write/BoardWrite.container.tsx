import { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import BoardWriteUI from './BoardWrite.presenter';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
import type {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from '../../../../commons/types/generated/types';
import type { IBoardWriteProps } from './BoardWrite.types';
import type { Address } from 'react-daum-postcode';

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const router = useRouter();
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
  const [fileUrls, setFileUrls] = useState(['', '', '']);

  const [writerError, setWriterError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contentsError, setContentsError] = useState('');

  const [createBoard] = useMutation<
    Pick<IMutation, 'createBoard'>,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [updateBoard] = useMutation<
    Pick<IMutation, 'updateBoard'>,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

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

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>): void => {
    setYoutubeUrl(event.target.value);
  };

  const onChangeAddressDetail = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setAddressDetail(event.target.value);
  };

  const onClickAddressSearch = () => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = (data: Address) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    onClickAddressSearch();
    console.log(data);
  };

  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    const images = props.data?.fetchBoard.images;
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [props.data]);

  const onClickSubmit = async (): Promise<void> => {
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
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title: title,
              contents,
              youtubeUrl,
              images: [...fileUrls],
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });

        void router.push(`/boards/${result.data?.createBoard._id}`);
        alert('게시글이 등록되었습니다.');
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickEdit = async () => {
    const currentFiles = JSON.stringify(fileUrls);
    const deFaultFiles = JSON.stringify(props.data?.fetchBoard.images);
    const isChangedFiles = currentFiles !== deFaultFiles;

    if (
      !title &&
      !contents &&
      !zipcode &&
      !address &&
      !addressDetail &&
      !youtubeUrl &&
      !isChangedFiles
    ) {
      alert('수정한 내용이 없습니다.');
      return;
    }

    if (!password) {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (typeof router.query.boardId !== 'string') {
      alert('시스템에 문가 있습니다.');
      return;
    }
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode !== '' || address !== '' || addressDetail !== '') {
      updateBoardInput.boardAddress = {};
      if (zipcode !== '') updateBoardInput.boardAddress.zipcode = zipcode;
      if (address !== '') updateBoardInput.boardAddress.address = address;
      if (addressDetail !== '')
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    if (isChangedFiles) updateBoardInput.images = fileUrls;

    try {
      if (typeof router.query.boardId !== 'string') {
        alert('시스템에 문제가 있습니다.');
        return;
      }
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });
      if (result.data?.updateBoard._id === undefined) {
        alert('요청에 문제가 있습니다.');
        return;
      }
      console.log(result);
      void router.push(`/boards/${result.data?.updateBoard._id}`);
      alert('게시글이 수정되었습니다.');
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardWriteUI
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
      onChangeFileUrls={onChangeFileUrls}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      fileUrls={fileUrls}
    />
  );
}
