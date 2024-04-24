'use client';
import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import BackSpaceArrow from '@/svgs/BackSpaceArrow.svg';
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
            내 작성글 보기
          </div>
        </div>
      }
      _bottomNode={<BottomNavigationBar />}
      _contentDivProps={{ className: 'bg-white' }}
    >
      <>
        <CommunityListItem />
      </>
    </TopBottomBarTemplate>
  );
};
export default Page;
