import React from 'react';
import * as S from './mypage.styles';

export default function MyPage() {
  return (
    <S.Container>
      <S.ProfileSection>
        <S.ProfilePicture src="https://via.placeholder.com/150" alt="Profile" />
        <S.ProfileInfo>
          <h2>마이페이지</h2>
          <p>이름</p>
          <S.EditProfileButton>프로필 수정</S.EditProfileButton>
        </S.ProfileInfo>
      </S.ProfileSection>
      <S.LogoutButton>로그아웃</S.LogoutButton>
    </S.Container>
  );
}
