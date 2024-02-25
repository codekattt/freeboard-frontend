import { useState, useRef } from 'react';
import type { ChangeEvent } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import BoardWriteUI from './BoardWrite.presenter';
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from './BoardWrite.queries';
import type {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IMutationUploadFileArgs,
  IUpdateBoardInput,
} from '../../../../commons/types/generated/types';
import type { IBoardWriteProps } from './BoardWrite.types';
import type { Address } from 'react-daum-postcode';
import { checkValidationFile } from '../../../../commons/libraries/validationFile';

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [subject, setSubject] = useState('');
  const [contents, setContents] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const [writerError, setWriterError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [contentsError, setContentsError] = useState('');

  const [createBoard] = useMutation<
    Pick<IMutation, 'createBoard'>,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [updateBoard] = useMutation<
    Pick<IMutation, 'updateBoard'>,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const [uploadFile] = useMutation<
    Pick<IMutation, 'uploadFile'>,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
    if (event.target.value !== '') {
      setWriterError('');
    }

    if (
      event.target.value !== '' &&
      password !== '' &&
      subject !== '' &&
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
      subject !== '' &&
      contents !== ''
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeSubject = (event: ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
    if (event.target.value !== '') {
      setSubjectError('');
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
      subject !== '' &&
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

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = event.target.files?.[0];
    console.log(file);

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({ variables: { file } });
    console.log(result.data?.uploadFile.url);
    setImageUrl(result.data?.uploadFile.url ?? '');
  };

  const onClickImage = (): void => {
    fileRef.current?.click();
  };

  const onClickSubmit = async (): Promise<void> => {
    if (!writer) {
      setWriterError('✕ 작성자를 입력해주세요.');
    }
    if (!password) {
      setPasswordError('✕ 비밀번호를 입력해주세요.');
    }
    if (!subject) {
      setSubjectError('✕ 제목을 입력해주세요.');
    }
    if (!contents) {
      setContentsError('✕ 내용을 입력해주세요.');
    }
    if (
      writer &&
      password &&
      subject &&
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
              title: subject,
              contents,
              youtubeUrl,
              images: [imageUrl],
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });

        console.log(result);
        // console.log(result.data.createBoard._id);
        void router.push(`/boards/${result.data?.createBoard._id}`);
        alert('게시글이 등록되었습니다.');
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickEdit = async () => {
    if (
      !subject &&
      !contents &&
      !zipcode &&
      !address &&
      !addressDetail &&
      !youtubeUrl
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
    if (subject) updateBoardInput.title = subject;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode !== '' || address !== '' || addressDetail !== '') {
      updateBoardInput.boardAddress = {};
      if (zipcode !== '') updateBoardInput.boardAddress.zipcode = zipcode;
      if (address !== '') updateBoardInput.boardAddress.address = address;
      if (addressDetail !== '')
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }

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
      subjectError={subjectError}
      contentsError={contentsError}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeSubject={onChangeSubject}
      onChangeContents={onChangeContents}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeFile={onChangeFile}
      onClickImage={onClickImage}
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
      fileRef={fileRef}
      imageUrl={imageUrl}
    />
  );
}
