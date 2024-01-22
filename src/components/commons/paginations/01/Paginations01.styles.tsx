import styled from '@emotion/styled';
import type { IPageProps } from './Paginations01.types';

export const Pagination = styled.div`
  width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const Page = styled.span`
  color: ${(props: IPageProps) => (props.isActive ? 'blue' : 'black')};
  font-weight: ${(props: IPageProps) => (props.isActive ? 'bold' : 'normal')};
  cursor: ${(props: IPageProps) => (props.isActive ? 'none' : 'pointer')};
`;
