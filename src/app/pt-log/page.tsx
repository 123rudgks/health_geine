'use client';

import { useRouter } from 'next/navigation';
import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import Box from '@/components/Box/Box';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';

type Props = {};

const Page = (props: Props) => {
  const router = useRouter();

  return (
    <TopBottomBarTemplate
      _topNode={
        <div className="h-full w-full bg-[#FDFDFF] pt-16 shadow-[0_6px_6px_-6px_rgba(0,0,0,0.13)]">
          <div className="grid justify-items-center">
            <div className="flex h-[14px] w-[142px] flex-col justify-end bg-primary-200">
              <h1 className="text-center text-[19px] font-[700] text-black">
                PT 일지 전체보기
              </h1>
            </div>
          </div>
        </div>
      }
      _bottomNode={<BottomNavigationBar />}
      _contentDivProps={{ className: 'bg-[#f3f3f3]' }}
    >
      <div className="flex h-[100vh] w-full flex-col px-6 pt-6">
        <h1 className="text-[21px] font-bold text-black">내가 받은 일지</h1>
        <p className="align-end flex justify-end text-[11px] font-medium text-primary-100">
          총 PT 일지 4개
        </p>
        <Box className="my-2 flex rounded-[8px] bg-white">
          <Box className="h-[70px] w-[70px]" />
          <div className="flex w-[100%] flex-col px-4">
            <p className="text-[13px] font-[500] text-gray-300">2023-09-11</p>
            <h2 className="pb-2 pt-1 text-[15px] font-[500] text-black">
              회원님 오늘 PT 피드백입니다!
            </h2>
            <div className="flex justify-between">
              <h3 className="text-[13px] font-[500] text-gray-300">
                정수영 트레이너
              </h3>
              <button onClick={() => router.push('/pt-log-detail')}>
                <h3 className="text-[13px] font-[500] text-primary-400 underline">
                  자세히 보기
                </h3>
              </button>
            </div>
          </div>
        </Box>
      </div>
    </TopBottomBarTemplate>
  );
};

export default Page;
