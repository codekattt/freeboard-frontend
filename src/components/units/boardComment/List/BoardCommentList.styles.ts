import styled from '@emotion/styled';
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
  width: 1200px;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;

  /* animation: ${fadeIn} 0.5s ease-in-out; */
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
  color: #fcc419;

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
  width: 1200px;
  height: 270px;
  border-bottom: 1px solid #bdbdbd;
  flex-direction: column;
  display: flex;
  margin-bottom: 10px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const EditCommentWriterWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const EditCommentWriter = styled.div`
  width: 180px;
  height: 52px;
  font-size: 16px;
  font-weight: 500;
  padding: 15px 15px;
  border: 1px solid #bdbdbd;
`;

export const EditCommentPassword = styled.input`
  width: 180px;
  height: 52px;
  font-size: 16px;
  font-weight: 500;
  padding-left: 20px;
  border: 1px solid #bdbdbd;
  margin-left: 24px;
`;

export const EditCommentStar = styled.div`
  width: 180px;
  height: 5px;
  margin-left: 24px;
  padding-top: 13px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;

export const EditCommentContents = styled.textarea`
  min-width: 1200px;
  max-width: 1200px;
  height: 120px;
  border: 1px solid #bdbdbd;
  border-bottom: none;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  font-size: 16px;
  font-weight: 500;
  word-break: break-all;
  word-wrap: break-word;
`;

export const EditCommentReg = styled.div`
  display: flex;
  flex-direction: row;
`;

export const EditCommentRegInput = styled.div`
  width: 1109px;
  border: 1px solid #bdbdbd;
  border-top: 1px solid #f2f2f2;
  border-right: none;
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
  padding-left: 20px;
  padding-top: 20px;
`;

export const EditCommentRegButton = styled.button`
  width: 91px;
  height: 52px;
  border: 1px solid #bdbdbd;
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: lightseagreen;
  }
`;
