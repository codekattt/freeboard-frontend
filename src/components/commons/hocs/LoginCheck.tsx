import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const LoginCheck = (Component: any) => (props: any) => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('accessToken') === null) {
      alert('로그인 후 이용 가능합니다.');
      void router.push('/');
    }
  }, []);

  return <Component {...props} />;
};
