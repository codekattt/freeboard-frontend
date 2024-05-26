import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfilePicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const ProfileInfo = styled.div`
  flex: 1;

  h2 {
    margin: 0;
    margin-bottom: 5px;
  }

  p {
    margin: 0;
    color: #8e8e8e;
  }
`;

export const EditProfileButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  color: #262626;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const LogoutButton = styled.button`
  width: 100%;
  padding: 10px 0;
  background-color: #ed4956;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #cc1f2f;
  }
`;
