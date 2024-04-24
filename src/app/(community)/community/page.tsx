'use client';
import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import BackSpaceArrow from '@/svgs/BackSpaceArrow.svg';
import HotSpring from '@/svgs/HotSpring.svg';
import Like from '@/svgs/FillLike.svg';
import Box from '@/components/Box/Box';
import CommunityListItem from '@/components/pages/community/CommunityListItem';
import { useRouter } from 'next/navigation';

type Props = {};

const Page = (props: Props) => {
  const router = useRouter();

  return (
    <TopBottomBarTemplate
      _topNode={
        <div className="relative flex h-full w-full items-center">
          <div className="absolute left-[22px]">
            <BackSpaceArrow
              onClick={() => {
                router.back();
              }}
            />
          </div>
          <div className="flex flex-1 justify-center font-noto text-[18px] font-bold text-black">
            커뮤니티
          </div>
        </div>
      }
      _bottomNode={<BottomNavigationBar />}
      _contentDivProps={{ className: 'bg-white' }}
    >
      <div className="flex flex-col items-center justify-center">
        <Box className="my-6 flex w-[328px] justify-between rounded-[6px] bg-primary-400 p-3 font-noto">
          <div className="flex items-center gap-4">
            <HotSpring />
            <h1 className="text-[13px] font-bold text-white">
              한 달 만에 10kg 뺀 썰 푼다.
            </h1>
          </div>
          <div className="flex items-end gap-1">
            <Like />
            <span className="font-regular font-noto text-[7px] text-[#F44B4B]">
              37
            </span>
          </div>
        </Box>
        <CommunityListItem />
      </div>
    </TopBottomBarTemplate>
  );
};
export default Page;
