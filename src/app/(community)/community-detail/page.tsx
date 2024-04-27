'use client';
import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import BackSpaceArrow from '@/svgs/BackSpaceArrow.svg';
import CommunityCalendar from '@/svgs/CommunituCalendar.svg';
import CommunityClock from '@/svgs/CommunityClock.svg';
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
            글 상세보기
          </div>
        </div>
      }
      _bottomNode={<BottomNavigationBar />}
      _contentDivProps={{ className: 'bg-white' }}
    >
      <div className="flex flex-col items-center justify-center p-10">
        {/* <Box className="my-6 flex w-[328px] justify-between rounded-[6px] bg-primary-400 p-3 font-noto">
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
        </Box> */}
        <div className="flex items-center justify-center gap-1">
          <div className="h-[41px] w-[41px] rounded-full bg-black" />
          <h1 className="font-noto text-[20px] font-semibold text-black">
            정수영
          </h1>
        </div>
        <h1 className="font-noto text-[18px] font-semibold text-black">
          다이어트 방법 공유 ㅠㅠ
        </h1>
        <div className="font-regular flex gap-2 font-noto text-[13.51px] text-[#434343]">
          <div className="flex items-center justify-center gap-1">
            <CommunityCalendar />
            <p>2023.09.11(월)</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <CommunityClock />
            <p>20:34</p>
          </div>
        </div>

        <div className="h-[258px] w-[328px] rounded-xl bg-black" />
        <p className="font-regular font-noto text-[13px]">
          제대로 다이어트 좀 시작해보고 싶은데 방법을 몰라서 시작도 못하고
          있다.. 수분 빼는 다이어트든.. 아무렴 상관없으니까 아무나 나 좀
          도와주라! 아직 트레이너 매칭하기는 좀 부담스러워서 자발적으로 홈트나
          해볼까 하는데 추천해 줄 방법이나 유튜브 영상같은 거 있으면 댓글로
          공유해주면 참고해서 볼게 ㅠ
        </p>
        <hr className="h-[0.5px] bg-[#c1c1c1]" />
      </div>
    </TopBottomBarTemplate>
  );
};
export default Page;
