import React, { useEffect, useState } from 'react';
import { firebaseApp } from '../../../commons/libraries/firebase';
import {
  deleteUser,
  getAuth,
  onAuthStateChanged,
  signOut,
  User,
} from 'firebase/auth';
import * as S from './mypage.styles';

export default function MyPage() {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth(firebaseApp);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null); // 사용자가 로그인하지 않은 경우 null로 설정
      }
    });
  }, []);

  if (!user) {
    return <div>로그인해주세요...</div>;
  }

  const onClickDeleteAccount = async () => {
    const user = auth.currentUser;

    if (user) {
      deleteUser(user)
        .then(() => {
          alert('계정이 삭제되었습니다.');
          // 로그인 페이지나 홈으로 리다이렉트
        })
        .catch((error) => {
          console.error('계정 삭제 에러:', error);
          alert('계정 삭제 중 문제가 발생했습니다.');
        });
    }
  };

  const onClickProfile = () => {
    alert('아직 개발중인 기능입니다!');
  };

  const onClickLogout = () => {
    signOut(auth)
      .then(() => {
        alert('로그아웃 되었습니다.');
        // 로그인 페이지나 홈으로 리다이렉트
      })
      .catch((error) => {
        console.error('로그아웃 에러:', error);
        alert('로그아웃 중 문제가 발생했습니다.');
      });
  };

  return (
    <S.Container>
      <S.ProfileSection>
        <S.ProfilePicture src="./img/mypage_profile.jpg" alt="Profile" />
        <S.ProfileInfo>
          <h2>{user.displayName || 'John Doe'}</h2>
          <p>코드캣 회원</p>
          <S.EditProfileButton onClick={onClickProfile}>
            프로필 수정
          </S.EditProfileButton>
          <S.EditProfileButton onClick={onClickDeleteAccount}>
            회원 탈퇴
          </S.EditProfileButton>
        </S.ProfileInfo>
      </S.ProfileSection>
      <S.LogoutButton onClick={onClickLogout}>로그아웃</S.LogoutButton>
    </S.Container>
  );
}
