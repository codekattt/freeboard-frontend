import { gql, useQuery } from '@apollo/client';
import {
  IQuery,
  IQueryFetchBoardArgs,
} from '../../../../commons/types/generated/types';

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      images
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
      likeCount
      dislikeCount
      createdAt
    }
  }
`;

export const useQueryFetchBoard = (variables: IQueryFetchBoardArgs) => {
  const result = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables },
  );
  return result;
};
