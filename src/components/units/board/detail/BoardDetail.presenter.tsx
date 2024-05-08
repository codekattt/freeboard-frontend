import { getDateTime } from '../../../../commons/libraries/utils';
import LikeCount from '../../../commons/likecount/01/LikeCount.container';
import * as S from './BoardDetail.styles';
import { IBoardDetailUIProps } from './BoardDetail.types';
import { Tooltip } from 'antd';

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.WriterWrapper>
          <S.ProfileImg src={`/img/profileIcon.svg`} width={60} height={60} />
          <S.ProfileWrapper>
            <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
            <S.Date>{getDateTime(props.data?.fetchBoard?.createdAt)}</S.Date>
          </S.ProfileWrapper>
          <S.WriterIconWrapper>
            <S.WriterIcon src={`/img/ic_link-32px.svg`} />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address ?? ''} ${
                props.data?.fetchBoard.boardAddress?.addressDetail ?? ''
              }`}
            >
              <S.WriterIcon src={`/img/ic_location_on-32px.svg`} />
            </Tooltip>
          </S.WriterIconWrapper>
        </S.WriterWrapper>
        <S.Title>{props.data?.fetchBoard?.title}</S.Title>
        <S.ImageWrapper>
          {props.data?.fetchBoard.images
            ?.filter((el) => el)
            .map((el) => (
              <S.Image key={el} src={`https://storage.googleapis.com/${el}`} />
            ))}
        </S.ImageWrapper>
        <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
        {props.data?.fetchBoard.youtubeUrl !== '' && (
          <S.Youtube
            url={props.data?.fetchBoard.youtubeUrl ?? ''}
            width="auto"
            height="auto"
            controls={true}
          />
        )}
        <LikeCount />
      </S.Wrapper>
      <S.ButtonWrapper>
        <S.ContentsBtn onClick={props.onClickMoveToList}>
          목록으로
        </S.ContentsBtn>
        <S.ContentsBtn onClick={props.onClickMoveToEdit}>
          수정하기
        </S.ContentsBtn>
        <S.ContentsBtn onClick={props.onClickDelete}>삭제하기</S.ContentsBtn>
      </S.ButtonWrapper>
    </>
  );
}
