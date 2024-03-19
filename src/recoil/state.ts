import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();
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

interface IMyList {
  id: string;
  date: string;
  content: string;
  title: string;
  photoPaths: [];
  userNickName: string;
  trainerNickName: string;
}

interface IMyReview {
  id: string;
  content: string;
  stopReason: string;
  reviewScore: string;
  userNickName: string;
  trainerNickName: string;
}

export const loginState = atom<ILogin>({
  key: 'loginState',
  default: {
    userId: '',
    role: '',
    accessToken: '',
    refreshToken: '',
  },
  effects_UNSTABLE: [persistAtom],
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
  effects_UNSTABLE: [persistAtom],
});

export const myListState = atom<IMyList>({
  key: 'myListState',
  default: {
    id: '',
    date: '',
    content: '',
    title: '',
    photoPaths: [],
    userNickName: '',
    trainerNickName: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const myReviewState = atom<IMyReview>({
  key: 'myReviewState',
  default: {
    id: '',
    content: '',
    stopReason: '',
    reviewScore: '',
    userNickName: '',
    trainerNickName: '',
  },
  effects_UNSTABLE: [persistAtom],
});
