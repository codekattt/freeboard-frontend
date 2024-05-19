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

  const [emailError, setEmailError] = useState('');

  const validateEmail = (value: string): boolean => {
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(com|net)$/;
    return regex.test(value);
  };

  const [createUser] = useMutation<
    Pick<IMutation, 'createUser'>,
    IMutationCreateUserArgs
  >(SIGNUP_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setEmail(value);
    const isValidEmail = validateEmail(value);
    setEmailError(isValidEmail ? '' : '올바른 이메일 형식으로 입력해주세요.');
    validateInputs(value, password, name, isValidEmail);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
    validateInputs(
      email,
      event.currentTarget.value,
      name,
      validateEmail(email),
    );
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);
    validateInputs(
      email,
      password,
      event.currentTarget.value,
      validateEmail(email),
    );
  };

  const validateInputs = (
    email: string,
    password: string,
    name: string,
    isValidEmail: boolean,
  ): void => {
    setIsButtonEnabled(
      isValidEmail &&
        email.trim() !== '' &&
        password.trim() !== '' &&
        name.trim() !== '',
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
        <h1>회원가입</h1>
        <h4>테스트 사이트입니다. 실제 개인정보를 적지 마세요.</h4>
        <S.Input
          type="text"
          onChange={onChangeName}
          placeholder="이름을 입력하세요."
        />
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

        <S.Button onClick={onClickSignUp} disabled={!isButtonEnabled}>
          가입하기
        </S.Button>
      </S.Wrapper>
    </>
  );
}
