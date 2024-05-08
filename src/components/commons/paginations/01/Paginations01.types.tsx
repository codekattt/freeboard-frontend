import { ApolloQueryResult } from '@apollo/client';
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from '../../../../commons/types/generated/types';

export interface IPaginations01Props {
  count?: number;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>,
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>;
}

export interface IPaginations01UIProps {
  lastPage: number;
  activedPage: number;
  onClickPage: (event: number) => void;
}

export interface IPageProps {
  isActive?: boolean;
}
