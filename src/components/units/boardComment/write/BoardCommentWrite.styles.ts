import styled from '@emotion/styled';

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 2px dashed lightcoral;
`;

export const CommentTop = styled.div`
  width: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 36px;

  p {
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 4px;
  }
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

export const CommentDetail = styled.textarea`
  min-width: 1200px;
  max-width: 1200px;
  height: auto;
  border: 1px solid #bdbdbd;
  border-bottom: none;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 50px;
  font-size: 16px;
  font-weight: 500;
  word-break: break-all;
  word-wrap: break-word;
  overflow-y: hidden;
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

  :hover {
    background-color: lightseagreen;
  }
`;
