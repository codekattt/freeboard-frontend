import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfilePicture = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin-bottom: 24px;
`;

export const ProfileInfo = styled.div`
  margin-bottom: 24px;

  h2 {
    text-align: center;
    margin-bottom: 5px;
  }

  p {
    text-align: center;
    margin-bottom: 24px;
    color: #8e8e8e;
  }
`;

export const EditProfileButton = styled.button`
  margin-top: 10px;
  margin-right: 4px;
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
  width: 300px;
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
