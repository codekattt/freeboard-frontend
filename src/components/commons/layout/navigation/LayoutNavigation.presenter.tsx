import { Fragment } from 'react';
import { MenuItem, Wrapper } from './LayoutNavigation.styles';
import type { ILayoutNavigationUIProps } from './LayoutNavigation.types';

const NAVIGATION_MENUS = [
  { name: '라이브게시판', page: '/boards' },
  { name: '푸드마켓', page: '/market' },
  { name: '🐱냥그타그램', page: '/catplease' },
  { name: '결제페이지', page: '/payments', className: 'payment-menu' },
  { name: '마이페이지', page: '/mypage' },
];

export default function LayoutNavigationUI(
  props: ILayoutNavigationUIProps,
): JSX.Element {
  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <MenuItem
            id={el.page}
            className={el.className}
            onClick={props.onClickMenu}
          >
            {el.name}
          </MenuItem>
        </Fragment>
      ))}
    </Wrapper>
  );
}
