import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import type { ChangeEvent } from 'react';
import type {
  IMutation,
  IMutationCreateUserArgs,
} from '../../../commons/types/generated/types';
import * as S from './signUp.styles';

const SIGNUP_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
    }
  }
`;

export default function SignUpPage(): JSX.Element {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const [createUser] = useMutation<
    Pick<IMutation, 'createUser'>,
    IMutationCreateUserArgs
  >(SIGNUP_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
    validateInputs(event.currentTarget.value, password, name);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
    validateInputs(email, event.currentTarget.value, name);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);
    validateInputs(email, password, event.currentTarget.value);
  };

  const validateInputs = (
    email: string,
    password: string,
    name: string,
  ): void => {
    setIsButtonEnabled(
      email.trim() !== '' && password.trim() !== '' && name.trim() !== '',
    );
  };

  const onClickSignUp = async () => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email,
            password,
            name,
          },
        },
      });

      alert('가입을 축하합니다!');
      router.push('/');
    } catch (error) {
      alert('가입오류! 다시시도하세요.');
      console.error('가입 오류:', error);
    }
  };

  return (
    <>
      <S.Wrapper>
        이메일: <S.Input type="text" onChange={onChangeEmail} />
        비밀번호: <S.Input type="password" onChange={onChangePassword} />
        이름: <S.Input type="text" onChange={onChangeName} />
        <button onClick={onClickSignUp} disabled={!isButtonEnabled}>
          가입하기
        </button>
      </S.Wrapper>
    </>
  );
}
