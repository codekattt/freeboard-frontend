import { getDateTime } from '../../../../commons/libraries/utils';
import * as S from './BoardCommentDetail.styles';

export default function BoardCommentDetailUI(props) {
  return (
    <div>
      {props.data?.fetchBoardComments.map((el) => (
        <S.CommentWrapper key={el._id}>
          <S.Comment>
            <S.ProfileImg>
              <img src={`/img/profileIcon.svg`} width={48} height={48} />
            </S.ProfileImg>
            <S.CommentContentsArea>
              <S.CommentContentsWriter>
                <S.ContentsWriter>{el.writer}</S.ContentsWriter>
                <S.ContentsRate value={el.rating} disabled />
              </S.CommentContentsWriter>
              <S.CommentContents>{el.contents}</S.CommentContents>
              <S.CommentDate>{getDateTime(el.createdAt)}</S.CommentDate>
            </S.CommentContentsArea>
            <S.WriterIconWrapper>
              <img src={`/img/mode-24px.svg`} />
            </S.WriterIconWrapper>
            <S.WriterIconWrapper id={el._id}>
              <img src={`/img/clear-24px.svg`} />
            </S.WriterIconWrapper>
          </S.Comment>
        </S.CommentWrapper>
      ))}
    </div>
  );
}
