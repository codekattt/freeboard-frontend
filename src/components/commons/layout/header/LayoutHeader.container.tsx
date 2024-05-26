import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import LayoutHeaderUI from './LayoutHeader.presenter';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { firebaseApp } from '../../../../commons/libraries/firebase';

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const auth = getAuth(firebaseApp);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const onClickLogo = (): void => {
    void router.push('/');
  };

  const onClickMoveToLogin = (): void => {
    void router.push('/login');
  };

  const onClickMoveToSignUp = (): void => {
    void router.push('/signup');
  };

  const onClickLogOut = async () => {
    try {
      await signOut(auth);
      alert('로그아웃 되었습니다.');
      router.push('/login');
    } catch (error) {
      console.error('로그아웃 에러:', error);
      alert('로그아웃 중 문제가 발생했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToSignUp={onClickMoveToSignUp}
      onClickLogOut={onClickLogOut}
      isLoggedIn={isLoggedIn}
    />
  );
}
