import styled from '@emotion/styled';
import { Pagination } from 'antd';

export const PaginationCustom = styled(Pagination)`
  &.ant-pagination .ant-pagination-item-active {
    border-color: ${({ theme }) => theme.colors.hover};

    & a {
      color: ${({ theme }) => theme.colors.hover};
    }
  }
`;
