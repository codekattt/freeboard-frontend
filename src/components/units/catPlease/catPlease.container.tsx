import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_USER_LOGGED_IN } from './catPlease.queries';
import CatPleaseUI from './catPlease.presenter';
import type { IQuery } from '../../../commons/types/generated/types';

export default function CatPlease(): JSX.Element {
  const [cats, setCats] = useState<string[]>([]);
  const [spinning, setSpinning] = useState<boolean>(false);
  const apiKey = process.env.CAT_APP_API_KEY;

  const { data } =
    useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN);

  const fetchCats = async () => {
    setSpinning(true); // 스핀 상태를 true로 설정하여 로딩 중임을 표시
    try {
      const promises = [];
      for (let i = 0; i < 3; i++) {
        promises.push(
          axios.get('https://api.thecatapi.com/v1/images/search', {
            headers: { 'x-api-key': apiKey },
          }),
        );
      }

      const results = await Promise.all(promises);
      const newCats = results.map((result) => result.data[0].url);
      setCats((prevCats) => [...newCats, ...prevCats]);
    } catch (error) {
      console.error('Error fetching cats:', error);
    } finally {
      setSpinning(false); // 로딩 완료 후 스핀 상태를 false로 설정하여 로딩 중인 상태를 해제
    }
  };

  useEffect(() => {
    fetchCats(); // 컴포넌트 마운트 시 초기 이미지 불러오기
  }, []);

  return (
    <CatPleaseUI
      fetchCats={fetchCats}
      cats={cats}
      spinning={spinning}
      data={data}
    />
  );
}
