import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from './LayoutHeader.styles';
import type { ILayoutHeaderProps } from './LayoutHeader.types';

export default function LayoutHeaderUI(props: ILayoutHeaderProps): JSX.Element {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>😽 CODEKAT</InnerLogo>
        <div>
          <InnerButton onClick={props.onClickMoveToLogin}>로그인</InnerButton>
          <InnerButton onClick={props.onClickMoveToSignUp}>
            회원가입
          </InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
