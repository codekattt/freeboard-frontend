import { Modal } from 'antd';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { IBoardWriteUIProps } from './BoardWrite.types';
import * as S from './BoardWrite.styles';

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Title>게시물 {props.isEdit ? '수정' : '등록'}</S.Title>
      <S.WriterWrapper>
        <S.WriterWrapperContainer>
          <S.Label>작성자</S.Label>
          <S.Writer
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeWriter}
            defaultValue={props.data?.fetchBoard.writer ?? ''}
            readOnly={!!props.data?.fetchBoard.writer}
          />
          <S.Error>{props.writerError}</S.Error>
        </S.WriterWrapperContainer>
        <S.WriterWrapperContainer>
          <S.Label>비밀번호</S.Label>
          <S.Password
            type="password"
            placeholder="비밀번호를 입력하세요."
            onChange={props.onChangePassword}
          />
          <S.Error>{props.passwordError}</S.Error>
        </S.WriterWrapperContainer>
      </S.WriterWrapper>
      <S.SubjectWrapper>
        <S.Label>제목</S.Label>
        <S.Subject
          type="text"
          placeholder="제목을 작성해 주세요."
          onChange={props.onChangeSubject}
          defaultValue={props.data?.fetchBoard.title}
        />
        <S.Error>{props.subjectError}</S.Error>
      </S.SubjectWrapper>
      <S.ContentsWrapper>
        <S.Label>내용</S.Label>
        <S.Contents
          placeholder="내용을 입력하세요."
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.contents}
        />
        <S.Error>{props.contentsError}</S.Error>
      </S.ContentsWrapper>
      <S.AddressWrapper>
        <S.Label>주소</S.Label>
        <S.ZipCodeWrapper>
          <S.ZipCode>{props.zonecode}</S.ZipCode>
          <S.ZipCodeButton onClick={props.addressModalOpen}>
            주소 검색
          </S.ZipCodeButton>
          {props.isModalOpen && (
            <Modal
              open={true}
              onOk={props.addressModalOpen}
              onCancel={props.addressModalOpen}
            >
              <DaumPostcodeEmbed onComplete={props.handleComplete} />
            </Modal>
          )}
        </S.ZipCodeWrapper>
        <S.AddressOne>{props.address}</S.AddressOne>
        <S.AddressTwo
          placeholder="상세 주소를 입력하세요."
          onChange={props.onChangeAddressDetail}
          defaultValue={
            props.data?.fetchBoard.boardAddress?.addressDetail || ''
          }
        />
      </S.AddressWrapper>
      <S.YoutubeWrapper>
        <S.Label>유튜브</S.Label>
        <S.YoutubeLink
          type="text"
          placeholder="링크를 복사하세요."
        ></S.YoutubeLink>
      </S.YoutubeWrapper>
      <S.ImgWrapper>
        <S.Label>사진 첨부</S.Label>
        <S.ImgContentsWrapper>
          <S.ImgButton>+</S.ImgButton>
          <S.ImgButton>+</S.ImgButton>
          <S.ImgButton>+</S.ImgButton>
        </S.ImgContentsWrapper>
      </S.ImgWrapper>
      <S.OptionWrapper>
        <S.Label>메인 설정</S.Label>
        <S.RadioButton type="radio" id="youtube" name="radio-button" />
        <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
        <S.RadioButton type="radio" id="image" name="radio-button" />
        <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
      </S.OptionWrapper>
      <S.ButtonWrapper>
        <S.SubmitButton
          onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
          isActive={props.isActive}
        >
          {props.isEdit ? '수정' : '등록'}하기
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
