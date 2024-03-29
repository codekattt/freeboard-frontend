import styled from '@emotion/styled';
import type { IPageProps } from './Paginations01.types';

export const Pagination = styled.div`
  margin: 0px 10px;
`;

export const Page = styled.span`
  margin: 0px 10px;
  color: ${(props: IPageProps) => (props.isActive ? 'blue' : 'black')};
  font-weight: ${(props: IPageProps) => (props.isActive ? 'bold' : 'normal')};
  cursor: ${(props: IPageProps) => (props.isActive ? 'none' : 'pointer')};
`;
