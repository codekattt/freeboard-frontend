import { Pagination } from 'antd';
import { IPaginations01UIProps } from './Paginations01.types';

export default function Pagination01UI(props: IPaginations01UIProps) {
  return (
    <Pagination
      current={props.activedPage}
      total={props.lastPage * 10}
      onChange={props.onClickPage}
      showSizeChanger={false}
    ></Pagination>
  );
}
