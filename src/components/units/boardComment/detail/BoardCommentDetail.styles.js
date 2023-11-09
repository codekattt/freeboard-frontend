import styled from '@emotion/styled';
import { Rate } from 'antd';

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
  margin-bottom: 10px;
`;

export const ContentsWriter = styled.div`
  margin-right: 5px;
`;

export const ContentsRate = styled(Rate)`
  margin-left: 20px;
  color: #fcc419;
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

export const WriterIconWrapper = styled.div`
  width: 40px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
