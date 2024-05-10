import styled from '@emotion/styled';
import InfiniteScroll from 'react-infinite-scroller';
import { keyframes } from '@emotion/react';
import { Rate } from 'antd';

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

export const ProfileImg = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  padding-bottom: 50px;
  filter: drop-shadow(2px 2px 5px #bbbbbb);
`;

export const Comment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #bdbdbd;

  /* animation: ${fadeIn} 0.5s ease-in-out; */

  @media (max-width: 767px) {
    width: 100%;
    padding-bottom: 24px;
  }
`;

export const CommentContentsArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CommentContentsWriter = styled.div`
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const ContentsWriter = styled.div`
  margin-right: 5px;
`;

export const ContentsRate = styled(Rate)`
  margin-left: 20px;

  .ant-rate-star:not(:last-child) {
    margin-right: 3px; /* 별점 간격 조절 */
  }
`;

export const CommentContents = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
  margin-top: 5px;
`;
export const CommentDate = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #bdbdbd;
  margin-top: 30px;
`;

export const WriterIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 3px;

  cursor: pointer;

  &:hover {
    background-color: lightgrey;
    border-radius: 5px;
  }
`;

// 아래부터 댓글 수정 스타일스 //

export const EditCommentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 270px;
  border-bottom: 1px solid #bdbdbd;
  flex-direction: column;
  display: flex;
  margin-bottom: 10px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const EditCommentWriterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const EditCommentWriter = styled.div`
  width: 180px;
  height: 52px;
  font-size: 16px;
  font-weight: 500;
  padding: 15px 20px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;

  @media (max-width: 767px) {
    width: 30%;
  }
`;

export const EditCommentPassword = styled.input`
  width: 180px;
  height: 52px;
  font-size: 16px;
  font-weight: 500;
  margin-left: 24px;
  padding-left: 20px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;

  @media (max-width: 767px) {
    width: 30%;
    margin-left: 12px;
  }
`;

export const EditCommentStar = styled(Rate)`
  margin-left: 24px;
  padding-top: 13px;
  font-size: 26px;

  .ant-rate-star:not(:last-child) {
    margin-right: 3px; /* 별점 간격 조절 */
  }

  @media (max-width: 767px) {
    width: 30%;
    font-size: 3.8vw;
    margin: 2px 0 0 18px;
  }
`;

export const EditCommentContents = styled.textarea`
  min-width: 100%;
  max-width: 100%;
  height: auto;
  border: 1px solid #bdbdbd;
  border-radius: 5px 5px 0 0;
  border-bottom: none;
  padding: 20px 20px 50px 20px;
  font-size: 16px;
  font-weight: 500;
  word-break: break-all;
  word-wrap: break-word;
  overflow-y: hidden;

  @media (max-width: 767px) {
    min-width: 100%;
    max-width: 100%;
  }
`;

export const EditCommentReg = styled.div`
  display: flex;
  flex-direction: row;
`;

export const EditCommentRegInput = styled.div`
  width: 100%;
  border: 1px solid #bdbdbd;
  border-radius: 0 0 5px 5px;
  border-top: 1px solid #f2f2f2;
  border-right: none;
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
  padding-left: 20px;
  padding-top: 20px;
`;

export const EditCommentRegButton = styled.button`
  width: 20%;
  min-width: 100px;
  max-width: 176px;
  height: 52px;
  border: 1px solid #bdbdbd;
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &.reg {
    border-radius: 0 0 5px 0;
  }
`;

export const InfiniteScrollUI = styled(InfiniteScroll)`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
`;
