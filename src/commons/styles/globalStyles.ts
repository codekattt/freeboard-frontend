import { css } from '@emotion/react';

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Pretendard-Regular';
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 400;
    font-style: normal;
  }
`;
