import { IPaginations01UIProps } from './Paginations01.types';
import { PaginationCustom } from './Paginations01.styles';

export default function Pagination01UI(props: IPaginations01UIProps) {
  return (
    <PaginationCustom
      current={props.activedPage}
      total={props.lastPage * 10}
      onChange={props.onClickPage}
      showSizeChanger={false}
    ></PaginationCustom>
  );
}
