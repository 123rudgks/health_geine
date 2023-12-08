'use client';
import Image from 'next/image';
import BackgroundCircle from './icon/BackgroundCircle.png';
import EmptyCalendar from '../../components/BottomNavigationBar/icon/EmptyCalendar.svg';
import HealthGenie from '@/svgs/HealthGenieTitle.svg';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Box from '@/components/Box/Box';
import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import SquareCheckBox from '@/components/SquareCheckBox/SquareCheckBox';
type Props = {};

const Page = (props: Props) => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <TopBottomBarTemplate
      _topNode={<div>캘린더 컴포넌트</div>}
      _bottomNode={<BottomNavigationBar />}
      _contentDivProps={{ className: 'bg-primary-400' }}
    >
      <div className="flex h-[100vh] w-full flex-col pt-6">
        <Box className="flex items-center justify-between rounded-bl-[0px] rounded-br-[0px] rounded-tr-[15px] rounded-tr-[15px] bg-white pt-[30px] shadow-[0_10px_10px_-10px_rgba(0,0,0,0.07)]">
          <div className="flex items-center">
            <h1 className="font-noto text-[17px] font-medium">7월 18일 할일</h1>
            <Box className="ml-2 flex h-[22px] w-[54px] justify-center rounded-[3.07px] bg-primary-100 p-0">
              <h1 className="text-center text-[13px] font-semibold text-white">
                PT Day
              </h1>
            </Box>
          </div>
          <Box className="ml-2 flex h-[22px] w-[96px] justify-center rounded-[3.07px] bg-primary-400 p-0">
            <h1 className="text-center text-[13px] font-semibold text-white">
              할일 추가하기
            </h1>
          </Box>
        </Box>
        <Box className="flex flex-row justify-between rounded-none">
          <div className="flex flex-col justify-start">
            <SquareCheckBox
              id="checkbox_labeled"
              text="스쿼트"
              className="font-noto text-[15px] font-medium"
              onChange={onChange}
              checked={isChecked}
            />
            <p className="pl-6 font-noto text-[10px] font-medium">계란 2개</p>
          </div>
          <p className="font-noto text-[15px] font-medium text-[#d9d9d9]">
            09:00
          </p>
        </Box>
        <Box className="flex flex-row justify-between rounded-none">
          <div className="flex flex-col justify-start">
            <SquareCheckBox
              id="checkbox_labeled"
              text="스쿼트"
              className="font-noto text-[15px] font-medium"
              onChange={onChange}
              checked={isChecked}
            />
            <p className="pl-6 font-noto text-[10px] font-medium">계란 2개</p>
          </div>
          <p className="font-noto text-[15px] font-medium text-[#d9d9d9]">
            09:00
          </p>
        </Box>
        <Box className="flex flex-row justify-between rounded-none">
          <div className="flex flex-col justify-start">
            <SquareCheckBox
              id="checkbox_labeled"
              text="스쿼트"
              className="font-noto text-[15px] font-medium"
              onChange={onChange}
              checked={isChecked}
            />
            <p className="pl-6 font-noto text-[10px] font-medium">계란 2개</p>
          </div>
          <p className="font-noto text-[15px] font-medium text-[#d9d9d9]">
            09:00
          </p>
        </Box>
      </div>
    </TopBottomBarTemplate>
  );
};

export default Page;
