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
import * as S from './login.styles';

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
  const [loginUser] = useMutation<
    Pick<IMutation, 'loginUser'>,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  };

  const onClickLogin = async (): Promise<void> => {
    try {
      const result = await loginUser({
        variables: { email, password },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);

      if (accessToken === undefined) {
        alert('로그인에 실패했습니다. 다시 시도해주세요.');
        return;
      }
      setAccessToken(accessToken);
      localStorage.setItem('accessToken', accessToken);

      alert('로그인 성공!');
      void router.push('/catplease/');
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      <S.Wrapper>
        이메일: <S.Input type="text" onChange={onChangeEmail} />
        비밀번호: <S.Input type="password" onChange={onChangePassword} />
        <button onClick={onClickLogin}>로그인</button>
      </S.Wrapper>
    </>
  );
}
