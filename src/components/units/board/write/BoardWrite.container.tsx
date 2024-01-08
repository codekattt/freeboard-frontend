import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
import { IBoardWriteProps } from './BoardWrite.types';
import BoardWriteUI from './BoardWrite.presenter';
import { Address } from 'react-daum-postcode';

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [subject, setSubject] = useState('');
  const [contents, setContents] = useState('');
  const [addressInfo, setAddressInfo] = useState({
    address: props.address,
    zonecode: props.zonecode,
  });
  const [addressDetail, setAddressDetail] = useState('');

  const [writerError, setWriterError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [contentsError, setContentsError] = useState('');
  const [addressDetailError, setAddressDetailError] = useState('');

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value !== '') {
      setWriterError('');
    }

    if (
      event.target.value &&
      password &&
      subject &&
      contents &&
      addressDetail
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== '') {
      setPasswordError('');
    }

    if (writer && event.target.value && subject && contents && addressDetail) {
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

    if (writer && password && event.target.value && contents && addressDetail) {
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

    if (writer && password && subject && event.target.value && addressDetail) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const addressModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (data: Address) => {
    setAddressInfo({
      address: data.address,
      zonecode: data.zonecode,
    });
    addressModalOpen();
    console.log(data);
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
    if (event.target.value !== '') {
      setAddressDetailError('');
    }

    if (writer && password && subject && contents && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError('작성자를 입력해주세요.');
    }
    if (!password) {
      setPasswordError('비밀번호를 입력해주세요.');
    }
    if (!subject) {
      setSubjectError('제목을 입력해주세요.');
    }
    if (!contents) {
      setContentsError('내용을 입력해주세요.');
    }
    if (!addressInfo.zonecode || !addressInfo.address) {
      // 우편번호나 주소가 입력되지 않은 경우 처리
      setAddressDetailError('주소를 입력해주세요.');
    }
    if (
      writer &&
      password &&
      subject &&
      contents &&
      addressInfo.zonecode &&
      addressInfo.address &&
      addressDetail
    ) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title: subject,
              contents,
              boardAddress: {
                zipcode: addressInfo.zonecode,
                address: addressInfo.address,
                addressDetail,
              },
            },
          },
        });

        console.log(result);
        // console.log(result.data.createBoard._id);
        router.push(`/boards/${result.data.createBoard._id}`);
        alert('게시글이 등록되었습니다.');
      } catch (error) {
        alert((error as { message: string }).message);
      }
    }
  };

  const onClickEdit = async () => {
    interface IUpdateBoardInput {
      title?: string;
      contents?: string;
    }

    if (!subject && !contents) {
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
    // if (subject) updateBoardInput.title = subject;
    // if (contents) updateBoardInput.contents = contents;

    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });
      console.log(result);
      router.push(`/boards/${result.data.updateBoard._id}`);
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
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      addressModalOpen={addressModalOpen}
      handleComplete={handleComplete}
      isModalOpen={isModalOpen}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
      address={addressInfo.address}
      zonecode={addressInfo.zonecode}
    />
  );
}
