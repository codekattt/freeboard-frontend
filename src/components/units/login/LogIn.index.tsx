import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import type { ChangeEvent } from 'react';
import type {
  IMutation,
  IMutationLoginUserArgs,
} from '../../../commons/types/generated/types';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../../commons/stores';
import * as S from './LogIn.styles';

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage(): JSX.Element {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');

  const validateEmail = (value: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };
  const [loginUser] = useMutation<
    Pick<IMutation, 'loginUser'>,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setEmail(value);
    setEmailError(
      validateEmail(value) ? '' : '올바른 이메일 형식으로 입력해주세요.',
    );
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
    updateButtonState(email, event.currentTarget.value);
  };

  const updateButtonState = (email: string, password: string): void => {
    setIsButtonDisabled(email.trim() === '' || password.trim() === '');
  };

  const onClickLogin = async (): Promise<void> => {
    try {
      const result = await loginUser({
        variables: { email, password },
      });
      const accessToken = result.data?.loginUser.accessToken;

      if (accessToken === undefined) {
        alert('로그인에 실패했습니다. 다시 시도해주세요.');
        return;
      }

      localStorage.setItem('accessToken', accessToken);
      setAccessToken(accessToken);

      alert('로그인 성공!');
      window.location.href = '/';
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      <S.Wrapper>
        <h1>로그인</h1>
        <S.Input
          type="text"
          onChange={onChangeEmail}
          placeholder="이메일을 입력하세요. (example@example.com)"
          value={email}
        />
        {emailError && <S.Message>{emailError}</S.Message>}
        <S.Input
          type="password"
          onChange={onChangePassword}
          placeholder="비밀번호를 입력하세요."
        />
        <S.Button onClick={onClickLogin} disabled={isButtonDisabled}>
          로그인
        </S.Button>
      </S.Wrapper>
    </>
  );
}
