import axios from 'axios';
import { useEffect, useState } from 'react';
import CatPleaseUI from './catPlease.presenter';
import React from 'react';

export default function CatPlease(): JSX.Element {
  const [cats, setCats] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [spinning, setSpinning] = React.useState<boolean>(false);
  const apiKey =
    'live_VVyI8RZ5FZnMaL6od166vQaohx8W7Jpq2udLQP7B85kHAAJjrt7cSypYtewsanh2';

  const showLoader = () => {
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
    }, 2000);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const fetchCats = async () => {
    showLoader();
    setIsLoading(true);
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
    setIsLoading(false);
  };

  useEffect(() => {
    void fetchCats(); // 컴포넌트 마운트 시 초기 이미지 불러오기
  }, []);

  return (
    <CatPleaseUI
      fetchCats={fetchCats}
      cats={cats}
      isLoading={isLoading}
      showLoader={showLoader}
      spinning={spinning}
    />
  );
}
