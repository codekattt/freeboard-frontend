import { useRouter } from 'next/router';
import { useState } from 'react';
import type { ChangeEvent } from 'react';
import * as S from './signUp.styles';

import { firebaseApp } from '../../../commons/libraries/firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

export default function SignUpPage(): JSX.Element {
  const router = useRouter();
  const auth = getAuth(firebaseApp);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (value: string): boolean => {
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(com|net)$/;
    return regex.test(value);
  };

  const validatePassword = (value: string): boolean => {
    return value.length >= 6;
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setEmail(value);
    const isValidEmail = validateEmail(value);
    setEmailError(isValidEmail ? '' : '올바른 이메일 형식으로 입력해주세요.');
    validateInputs(value, password, name);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.currentTarget.value;
    setPassword(newValue);
    const isValidPassword = validatePassword(newValue);
    setPasswordError(
      isValidPassword ? '' : '비밀번호는 6자리 이상이어야 합니다.',
    );
    validateInputs(email, newValue, name);
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
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);
    setIsButtonEnabled(
      isValidEmail &&
        isValidPassword &&
        email.trim() !== '' &&
        password.trim() !== '' &&
        name.trim() !== '',
    );
  };

  const onClickSignUp = async () => {
    if (!isButtonEnabled) return;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      // 사용자 이름 업데이트
      await updateProfile(user, {
        displayName: name,
      });

      console.log(user);

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
        {passwordError && <S.Message>{passwordError}</S.Message>}

        <S.Button onClick={onClickSignUp} disabled={!isButtonEnabled}>
          가입하기
        </S.Button>
      </S.Wrapper>
    </>
  );
}
