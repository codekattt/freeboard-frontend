import { useAuth } from '../../src/components/commons/hooks/useAuth';
import CatPlease from '../../src/components/units/catPlease/catPlease.container';

function CatPleasePage(): JSX.Element {
  useAuth();
  return <CatPlease />;
}

export default CatPleasePage;
