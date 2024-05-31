import styled from '@emotion/styled';
import { Rate } from 'antd';

export const CommentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #dddddd;
`;

export const CommentTop = styled.div`
  width: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 12px;

  p {
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 4px;
  }
`;

export const CommentWriterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    width: 95%;
  }
`;

export const CommentWriter = styled.input`
  width: 180px;
  height: 52px;
  font-size: 16px;
  font-weight: 500;
  padding-left: 20px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;

  @media (max-width: 767px) {
    width: 30%;
  }
`;

export const CommentPassword = styled.input`
  width: 180px;
  height: 52px;
  font-size: 16px;
  font-weight: 500;
  padding-left: 20px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  margin-left: 24px;

  @media (max-width: 767px) {
    width: 30%;
    margin-left: 12px;
  }
`;

export const Star = styled(Rate)`
  margin-left: 24px;
  padding-top: 13px;
  font-size: 26px;

  .ant-rate-star:not(:last-child) {
    margin-right: 3px; /* 별점 간격 조절 */
  }

  .ant-rate-star-zero .ant-rate-star-first,
  .ant-rate-star-zero .ant-rate-star-second {
    color: #ddd; /* 원하는 색상 코드로 변경 */
  }

  @media (max-width: 767px) {
    width: 40%;
    font-size: 5vw;
    margin: 2px 0 0 18px;
  }
`;

export const CommentDetail = styled.textarea`
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

export const CommentReg = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CommentRegInput = styled.div`
  width: 100%;
  border: 1px solid #bdbdbd;
  border-top: 1px solid #f2f2f2;
  border-radius: 0 0 5px 5px;
  border-right: none;
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
  padding-left: 20px;
  padding-top: 20px;
`;

export const CommentRegButton = styled.button`
  width: 20%;
  min-width: 116px;
  max-width: 176px;
  height: 52px;
  border: 1px solid #bdbdbd;
  border-radius: 0 0 5px 0;
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
