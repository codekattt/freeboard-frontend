import React from 'react';
import { useEffect, useRef } from 'react';
import type { IBoardWriteUIProps } from './BoardWrite.types';
import * as S from './BoardWrite.styles';

export default function BoardWriteUI(props: IBoardWriteUIProps): JSX.Element {
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    fileInputRefs.current = fileInputRefs.current.slice(
      0,
      props.selectedFiles.length,
    );
  }, [props.selectedFiles.length]);

  const openFileInput = (index: number) => {
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index]?.click();
    } else {
      console.error('File input not available');
    }
  };

  return (
    <>
      {props.isOpen && (
        <S.AddressModal
          open={props.isOpen}
          onOk={props.onClickAddressSearch}
          onCancel={props.onClickAddressSearch}
        >
          <S.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.Wrapper>
        <S.Post>게시글 {props.isEdit ? '수정' : '등록'}</S.Post>
        <S.WriterWrapper>
          <S.WriterWrapperContainer>
            <S.Label>
              <span>*</span>작성자
            </S.Label>
            <S.Writer
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer ?? ''}
              disabled={props.isEdit}
            />
            <S.Error>{props.writerError}</S.Error>
          </S.WriterWrapperContainer>
          <S.WriterWrapperContainer>
            <S.Label>
              <span>*</span>비밀번호
            </S.Label>
            <S.Password
              type="password"
              placeholder="비밀번호를 입력하세요."
              onChange={props.onChangePassword}
            />
            <S.Error>{props.passwordError}</S.Error>
          </S.WriterWrapperContainer>
        </S.WriterWrapper>
        <S.TitleWrapper>
          <S.Label>
            <span>*</span>제목
          </S.Label>
          <S.Title
            type="text"
            placeholder="제목을 작성해 주세요."
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <S.Error>{props.titleError}</S.Error>
        </S.TitleWrapper>
        <S.ContentsWrapper>
          <S.Label>
            <span>*</span>내용
          </S.Label>
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
              placeholder="우편번호"
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
          <S.Label>유튜브 링크</S.Label>
          <S.YoutubeLink
            placeholder="링크를 입력하세요."
            onChange={props.onChangeYoutubeUrl}
            defaultValue={props.data?.fetchBoard.youtubeUrl ?? ''}
          ></S.YoutubeLink>
        </S.YoutubeWrapper>
        <S.ImageWrapper>
          <S.Label>사진첨부</S.Label>
          <S.ImageBox>
            {props.selectedFiles.map((file, index) => (
              <div key={index}>
                {file ? (
                  <img src={URL.createObjectURL(file)} alt={`Image ${index}`} />
                ) : (
                  props.fileUrls[index] && (
                    <img src={props.fileUrls[index]} alt={`Image ${index}`} />
                  )
                )}
                <input
                  type="file"
                  ref={(el) => (fileInputRefs.current[index] = el)}
                  style={{ display: 'none' }}
                  onChange={(e) =>
                    props.isEdit
                      ? props.onClickEditUploadImg(e, index)
                      : props.onClickUploadImg(e, index)
                  }
                />
                <S.UploadButton onClick={() => openFileInput(index)}>
                  파일 업로드
                </S.UploadButton>
              </div>
            ))}
          </S.ImageBox>
        </S.ImageWrapper>
        <S.SubmitButton
          onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
          isActive={props.isActive}
          isEdit={props.isEdit}
        >
          {props.isEdit ? '수정' : '등록'}하기
        </S.SubmitButton>
      </S.Wrapper>
    </>
  );
}
