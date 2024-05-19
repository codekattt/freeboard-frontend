import LayoutHeader from './header/LayoutHeader.container';
import LayoutBanner from './banner/LayoutBanner.container';
import LayoutNavigation from './navigation/LayoutNavigation.container';
import LayoutFooter from './footer';
import styled from '@emotion/styled';

const Body = styled.div`
  min-height: 498px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 5%;

  @media screen and (max-width: 767px) {
    padding: 40px 5%;
  }
`;

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Body>{props.children}</Body>
      <LayoutFooter />
    </>
  );
}
