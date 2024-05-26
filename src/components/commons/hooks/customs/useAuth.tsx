import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// 로그인 상태 검증 커스텀 훅
export function useAuth(redirectUrl = '/login') {
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // 사용자가 로그인하지 않은 경우
        alert('로그인이 필요한 페이지입니다.');
        router.push(redirectUrl);
      }
    });

    return () => unsubscribe();
  }, [router, redirectUrl]);
}
