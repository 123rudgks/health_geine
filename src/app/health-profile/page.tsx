'use client';

import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import { useRouter } from 'next/navigation';
import Back from '@/svgs/Back.svg';
import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import Box from '@/components/Box/Box';
import Button from '@/components/Button/Button';

interface Props {}

const page = (props: Props) => {
  const router = useRouter();
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
        <p className="font-noto text-[10px] font-medium text-primary-400">
          • 이메일 인증 회원입니다
        </p>
        <div className="h-[144px] w-[144px] rounded-full bg-[#f0f0f0]" />
        <Box className="flex h-[29px] w-[101px] items-center justify-center rounded-[23px] bg-[#e9e9e9] font-noto text-[17px] font-medium text-[#959595]">
          사진 선택
        </Box>
        <h1 className="font-noto text-[23px] font-bold text-primary-400">
          지니님의 프로필
        </h1>
        <Box className="h-[310px] w-[298px] rounded-[27px] bg-primary-100 shadow-[0_3px_10px_rgb(90,130,246,0.5)]">
          <div className="flex flex-row items-center justify-center gap-14 py-4">
            <h1 className="font-noto text-[16px] font-semibold text-primary-400">
              이름
            </h1>
            <p className="font-noto text-[16px] font-medium text-[#434343]">
              헬스지니
            </p>
          </div>
        </Box>
        <div className="flex h-[29px] w-[97px] items-center justify-center rounded-[23px] bg-[#e9e9e9] font-noto text-[17px] font-medium text-[#959595]">
          수정하기
        </div>
      </div>
    </div>
  );
};

export default page;
