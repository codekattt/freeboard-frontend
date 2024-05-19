import React from 'react';
import styled from '@emotion/styled';
import { FETCH_USER_LOGGED_IN } from './mypage.queries';
import { useQuery } from '@apollo/client';
import { IQuery } from '../../../commons/types/generated/types';

const MyPage = () => {
  const { data, error } =
    useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN);

  return (
    <Container>
      {data?.fetchUserLoggedIn ? (
        <ProfileSection>
          <ProfilePicture src="https://via.placeholder.com/150" alt="Profile" />
          <ProfileInfo>
            <h2>{data.fetchUserLoggedIn.name}</h2>
            <p>{data.fetchUserLoggedIn.email}</p>
            <EditProfileButton>프로필 수정</EditProfileButton>
          </ProfileInfo>
        </ProfileSection>
      ) : (
        <div>
          <p>로그인하주세요</p>
        </div>
      )}
      <LogoutButton>로그아웃</LogoutButton>
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfilePicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

const ProfileInfo = styled.div`
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

const EditProfileButton = styled.button`
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

const LogoutButton = styled.button`
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
