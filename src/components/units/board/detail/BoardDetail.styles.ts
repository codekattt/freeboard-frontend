import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import ReactPlayer from 'react-player/youtube';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  border: 1px solid black;
  margin-top: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const WriterWrapper = styled.div`
  width: 996px;
  height: 100px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileImg = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileWrapper = styled.div`
  width: calc(100% - 200px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3px;
`;

export const Writer = styled.div`
  width: auto;
  height: auto;
  font-size: 24px;
  font-weight: 500;
`;

export const Date = styled.div`
  width: auto;
  height: auto;
  font-size: 16px;
  font-weight: 400;
  color: #828282;
  margin-top: 5px;
`;

export const WriterIconWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  width: 996px;
  font-size: 36px;
  font-weight: 700;
  margin: 40px 0px 40px;
`;

export const Contents = styled.div`
  width: 996px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 60px;
  line-height: 24px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 996px;
  height: auto;
  margin-bottom: 14px;
`;

export const Youtube = styled(ReactPlayer)`
  margin-top: 120px;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 160px;
`;

export const Up = styled.div`
  width: 40px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  cursor: pointer;
`;

export const Down = styled.div`
  width: 40px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  width: 1200px;
  height: 188px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  border-bottom: 1px solid #bdbdbd;
`;

export const ContentsBtn = styled.button`
  width: 179px;
  height: 45px;
  border: 1px solid #bdbdbd;
  background-color: white;
  margin-left: 12px;
  margin-right: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  :hover {
    color: white;
    background-color: lightseagreen;
    animation: ${fadeIn} 0.2s ease-in-out;
  }
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

export const CommentTop = styled.div`
  width: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const CommentWriterWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const CommentWriter = styled.input`
  width: 180px;
  height: 52px;
  font-size: 16px;
  font-weight: 500;
  padding-left: 20px;
  border: 1px solid #bdbdbd;
`;

export const CommentPassword = styled.input`
  width: 180px;
  height: 52px;
  font-size: 16px;
  font-weight: 500;
  padding-left: 20px;
  border: 1px solid #bdbdbd;
  margin-left: 24px;
`;

export const CommentStar = styled.div`
  width: 180px;
  height: 52px;
  font-size: 24px;
  font-weight: 500;
  padding: 15px;
`;

export const CommentDetail = styled.textarea`
  width: 1200px;
  height: 100px;
  border: 1px solid #bdbdbd;
  border-bottom: none;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 50px;
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
  word-break: break-all;
  word-wrap: break-word;
`;

export const CommentReg = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CommentRegInput = styled.div`
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

export const CommentRegButton = styled.button`
  width: 91px;
  height: 52px;
  border: 1px solid #bdbdbd;
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

export const Comment = styled.div`
  width: 1200px;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
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
  margin-top: 50px;
`;

export const ContentsWriter = styled.div`
  margin-right: 5px;
`;

export const ContentsRate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
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
  margin-top: 20px;
`;
