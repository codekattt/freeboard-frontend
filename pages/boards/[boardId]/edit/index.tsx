import { useRouter } from 'next/router';
import BoardWrite from '../../../../src/components/units/board/write/BoardWrite.container';

export default function BoardEditPage(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.boardId !== 'string') return <></>;

  return <BoardWrite isEdit={true} />;
}
