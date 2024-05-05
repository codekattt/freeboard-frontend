import { LoginCheck } from '../../src/components/commons/hocs/LoginCheck';
import CatPlease from '../../src/components/units/catPlease/catPlease.container';

function CatPleasePage(): JSX.Element {
  return <CatPlease />;
}

export default LoginCheck(CatPleasePage);
