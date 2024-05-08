import { useEffect, useState } from 'react';
import Paginations01UI from './Paginations01.presenter';
import type { IPaginations01Props } from './Paginations01.types';

export default function Paginations01(props: IPaginations01Props): JSX.Element {
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = Math.ceil((props.count ?? 10) / 10);

  useEffect(() => {
    setActivedPage(1);
    props.refetch({ page: 1 });
  }, [props.count]);

  const onClickPage = (page: number): void => {
    setActivedPage(page);
    props.refetch({ page });
  };

  return (
    <Paginations01UI
      activedPage={activedPage}
      lastPage={lastPage}
      onClickPage={onClickPage}
    />
  );
}
