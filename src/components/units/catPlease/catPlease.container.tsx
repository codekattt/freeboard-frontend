import axios from 'axios';
import { useEffect, useState } from 'react';
import CatPleaseUI from './catPlease.presenter';

export default function CatPlease(): JSX.Element {
  // const apiKey = process.env.CAT_APP_API_KEY;

  const [cats, setCats] = useState<string[]>([]);
  const [spinning, setSpinning] = useState<boolean>(false);

  const fetchCats = async () => {
    setSpinning(true);
    try {
      const promises = [];
      for (let i = 0; i < 3; i++) {
        promises.push(
          axios.get('https://api.thecatapi.com/v1/images/search', {
            // headers: { 'x-api-key': apiKey },
          }),
        );
      }

      const results = await Promise.all(promises);
      const newCats = results.map((result) => result.data[0].url);
      setCats((prevCats) => [...newCats, ...prevCats]);
    } catch (error) {
      console.error('Error fetching cats:', error);
    } finally {
      setSpinning(false);
    }
  };

  useEffect(() => {
    if (window) {
      fetchCats();
    }
  }, []);

  return <CatPleaseUI fetchCats={fetchCats} cats={cats} spinning={spinning} />;
}
