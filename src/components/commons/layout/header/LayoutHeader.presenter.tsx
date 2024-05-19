import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
  Container,
  Animation,
  First,
  Second,
  Third,
} from './LayoutHeader.styles';
import type { ILayoutHeaderProps } from './LayoutHeader.types';

export default function LayoutHeaderUI(props: ILayoutHeaderProps): JSX.Element {
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <InnerLogo onClick={props.onClickLogo}>😽 CODEKAT</InnerLogo>
          <div>
            {props.isLoggedIn ? (
              <InnerButton onClick={props.onClickLogOut}>로그아웃</InnerButton>
            ) : (
              <InnerButton onClick={props.onClickMoveToLogin}>
                로그인
              </InnerButton>
            )}
            <InnerButton onClick={props.onClickMoveToSignUp}>
              회원가입
            </InnerButton>
          </div>
        </InnerWrapper>
      </Wrapper>

      <Container>
        <p>Hello 👋 I'm</p>
        <Animation>
          <div>
            <First>CODEKAT</First>
            <Second>WEB DEVELOPER</Second>
            <Third>FRONT ENGINEER</Third>
          </div>
        </Animation>
      </Container>
    </>
  );
}
