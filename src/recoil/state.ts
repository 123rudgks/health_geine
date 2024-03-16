import { atom } from 'recoil';

interface ILogin {
  userId: string;
  role: string;
  accessToken: string;
  refreshToken: string;
}

interface IUser {
  authProvider: string;
  birth: string;
  email: string;
  emailVerify: string;
  gender: string;
  height: string;
  id: string;
  level: string;
  muscleWeight: string;
  name: string;
  nickname: string;
  profilePhoto: string;
  role: string;
  uniName: string;
  weight: string;
}

export const loginState = atom<ILogin>({
  key: 'loginState',
  default: {
    userId: '',
    role: '',
    accessToken: '',
    refreshToken: '',
  },
});

export const userState = atom<IUser>({
  key: 'userState',
  default: {
    authProvider: '',
    birth: '',
    email: '',
    emailVerify: '',
    gender: '',
    height: '',
    id: '',
    level: '',
    muscleWeight: '',
    name: '',
    nickname: '',
    profilePhoto: '',
    role: '',
    uniName: '',
    weight: '',
  },
});

// authProvider: 'GOOGLE';
// birth: '';
// email: 'testhealthgenie@gmail.com';
// emailVerify: false;
// gender: null;
// height: null;
// id: 8;
// level: 'EMPTY';
// muscleWeight: null;
// name: '테스트';
// nickname: '18460909';
// profilePhoto: null;
// role: 'TRAINER';
// uniName: '';
// weight: null;
