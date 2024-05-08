import { atom, RecoilEnv } from 'recoil';
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const isEditState = atom({
  key: 'isEditState',
  default: true,
});

export const accessTokenState = atom({
  key: 'accessTokenState',
  default: '',
});
