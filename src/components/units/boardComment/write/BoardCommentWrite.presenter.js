import * as S from './BoardCommentWrite.styles';
import { FaStar } from 'react-icons/fa';

export default function BoardCommentWriteUI(props) {
  return (
    <>
      <S.CommentWrapper>
        <S.CommentTop>
          <img src={`/img/rate_review-24px.svg`} />
          <p>댓글</p>
        </S.CommentTop>
        <S.CommentWriterWrapper>
          <S.CommentWriter
            type="text"
            placeholder="작성자"
            maxLength={6}
            onChange={props.onChangeCommentWriter}
          />
          <S.CommentPassword
            type="password"
            placeholder="비밀번호"
            maxLength={16}
            onChange={props.onChangeCommentPassword}
          />
          <S.CommentStar>
            {/* ★★★★★ */}
            {props.ARRAY.map((el, index) => (
              <FaStar
                key={index}
                size="23"
                onClick={() => props.starClick(index)}
                className={props.clicked[el] && 'yellowStar'}
              ></FaStar>
            ))}
          </S.CommentStar>
        </S.CommentWriterWrapper>
        <S.CommentDetail
          type="text"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          maxLength={100}
          rows={1}
          onChange={props.onChangeCommentContents}
        />
        <S.CommentReg>
          <S.CommentRegInput>0/100</S.CommentRegInput>
          <S.CommentRegButton onClick={props.onClickCommentSubmit}>
            등록하기
          </S.CommentRegButton>
        </S.CommentReg>
      </S.CommentWrapper>
    </>
  );
}
