import Uploads01 from '../../../commons/uploads/01/Uploads01.container';
import * as S from './BoardWrite.styles';
import type { IBoardWriteUIProps } from './BoardWrite.types';
import { v4 as uuidv4 } from 'uuid';

export default function BoardWriteUI(props: IBoardWriteUIProps): JSX.Element {
  return (
    <>
      {props.isOpen && (
        <S.AddressModal visible={true}>
          <S.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.Wrapper>
        <S.Title>게시글 {props.isEdit ? '수정' : '등록'}</S.Title>
        <S.WriterWrapper>
          <S.WriterWrapperContainer>
            <S.Label>작성자</S.Label>
            <S.Writer
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer ?? ''}
              readOnly={Boolean(props.data?.fetchBoard.writer)}
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
            <S.ZipCode
              placeholder="07250"
              readOnly
              value={
                props.zipcode !== ''
                  ? props.zipcode
                  : props.data?.fetchBoard.boardAddress?.zipcode ?? ''
              }
            />
            <S.ZipCodeButton onClick={props.onClickAddressSearch}>
              주소 검색
            </S.ZipCodeButton>
          </S.ZipCodeWrapper>
          <S.AddressOne
            readOnly
            value={
              props.address !== ''
                ? props.address
                : props.data?.fetchBoard.boardAddress?.address ?? ''
            }
          />
          <S.AddressTwo
            placeholder="상세 주소를 입력하세요."
            onChange={props.onChangeAddressDetail}
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail ?? ''
            }
          />
        </S.AddressWrapper>
        <S.YoutubeWrapper>
          <S.Label>유튜브</S.Label>
          <S.YoutubeLink
            placeholder="링크를 입력하세요."
            onChange={props.onChangeYoutubeUrl}
            defaultValue={props.data?.fetchBoard.youtubeUrl ?? ''}
          ></S.YoutubeLink>
        </S.YoutubeWrapper>
        <S.ImageWrapper>
          <S.Label>사진첨부</S.Label>
          <S.ImageBox>
            {props.fileUrls.map((el, index) => (
              <Uploads01
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </S.ImageBox>
        </S.ImageWrapper>
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
            isEdit={props.isEdit}
          >
            {props.isEdit ? '수정' : '등록'}하기
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
