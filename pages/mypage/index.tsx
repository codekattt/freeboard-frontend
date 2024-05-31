import { useAuth } from '../../src/components/commons/hooks/customs/useAuth';
import MyPage from '../../src/components/units/mypage/mypage.index';

function SignUp(): JSX.Element {
  useAuth();
  return <MyPage />;
}

export default SignUp;
