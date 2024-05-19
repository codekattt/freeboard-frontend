import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import LayoutHeaderUI from './LayoutHeader.presenter';

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchAccessToken = async () => {
      const accessToken = localStorage.getItem('accessToken');
      setIsLoggedIn(accessToken !== null);
    };
    fetchAccessToken();
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

  const onClickLogOut = (): void => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    router.push('/');
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
