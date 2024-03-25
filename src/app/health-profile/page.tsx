'use client';

import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import { useRouter } from 'next/navigation';
import Back from '@/svgs/Back.svg';
import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import Box from '@/components/Box/Box';
import Button from '@/components/Button/Button';
import { useRecoilState } from 'recoil';
import IUser, { userState } from '@/recoil/state';

interface Props {}
interface UserField {
  label: string;
  value: keyof IUser;
}

const userFields: UserField[] = [
  { label: '이름', value: 'name' },
  { label: '성별', value: 'gender' },
  { label: '생년월일', value: 'birth' },
  { label: '키', value: 'height' },
  { label: '몸무게', value: 'weight' },
  { label: '골격근량', value: 'muscleWeight' },
];

const Page = (props: Props) => {
  const router = useRouter();
  const [userData, setUserData] = useRecoilState(userState);

  const renderUserField = (field: UserField) => (
    <div className="grid grid-cols-4 gap-3" key={field.label}>
      <div />
      <div className="py-3 text-left">
        <h1 className="font-noto text-[16px] font-semibold text-primary-400">
          {field.label}
        </h1>
      </div>
      <div className="text-left">
        <p className="py-3 font-noto text-[16px] font-medium text-[#434343]">
          {userData[field.value]}
        </p>
      </div>
      <div />
    </div>
  );

  return (
    <div>
      <TopBottomBarTemplate
        _topNode={
          <div className="flex justify-between px-4 pt-16">
            <Back onClick={() => router.push('/my-page')} />
            <div className="flex justify-center text-[19px] font-[600] text-black">
              나의 건강상태
            </div>
            <div />
          </div>
        }
        _bottomNode={<BottomNavigationBar />}
        _contentDivProps={{
          className:
            'bg-[#fdfdff] -pb-[18px] shadow-[0_10px_20px_-5px_rgba(0,0,0,0.05)]',
        }}
      />
      <div className="flex flex-col items-center justify-center gap-6 pt-6">
        {/* <p className="font-noto text-[10px] font-medium text-primary-400">
          • 이메일 인증 회원입니다
        </p> */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-noto text-[10px] font-medium text-[#F44B4B]">
            • 이메일 인증 회원입니다
          </p>
          <button
            onClick={() => router.push('/email-auth')}
            className="font-noto text-[8px] font-medium text-[#B3B3B3]"
          >
            인증 페이지로 이동
          </button>
        </div>
        <div className="h-[144px] w-[144px] rounded-full bg-[#f0f0f0]" />
        <Box className="flex h-[29px] w-[101px] items-center justify-center rounded-[23px] bg-[#e9e9e9] font-noto text-[17px] font-medium text-[#959595]">
          사진 선택
        </Box>
        <h1 className="font-noto text-[23px] font-bold text-primary-400">
          {userData.name}님의 프로필
        </h1>
        <Box className="h-[310px] w-[298px] rounded-[27px] bg-[#EAEFFF] shadow-[0_3px_10px_rgb(90,130,246,0.5)]">
          {userFields.map(renderUserField)}
        </Box>
        <div className="flex h-[29px] w-[97px] items-center justify-center rounded-[23px] bg-[#e9e9e9] font-noto text-[17px] font-medium text-[#959595]">
          수정하기
        </div>
      </div>
    </div>
  );
};

export default Page;
