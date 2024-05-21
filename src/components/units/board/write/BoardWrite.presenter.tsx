import { ChangeEvent } from 'react';
import type { IBoardWriteUIProps } from './BoardWrite.types';
import * as S from './BoardWrite.styles';

export default function BoardWriteUI(props: IBoardWriteUIProps): JSX.Element {
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    props.setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    props.setPassword(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    props.setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    props.setContents(event.target.value);
  };

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Label>작성자</S.Label>
        <S.Input
          type="text"
          placeholder="작성자를 입력하세요."
          value={props.writer}
          onChange={onChangeWriter}
        />
      </S.TitleWrapper>
      <S.TitleWrapper>
        <S.Label>비밀번호</S.Label>
        <S.Input
          type="password"
          placeholder="비밀번호를 입력하세요."
          value={props.password}
          onChange={onChangePassword}
        />
      </S.TitleWrapper>
      <S.TitleWrapper>
        <S.Label>제목</S.Label>
        <S.Input
          type="text"
          placeholder="제목을 입력하세요."
          value={props.title}
          onChange={onChangeTitle}
        />
      </S.TitleWrapper>
      <S.TitleWrapper>
        <S.Label>내용</S.Label>
        <S.Textarea
          placeholder="내용을 입력하세요."
          value={props.contents}
          onChange={onChangeContents}
        />
      </S.TitleWrapper>
      <S.Button onClick={props.onClickSubmit}>등록하기</S.Button>
    </S.Wrapper>
  );
}
