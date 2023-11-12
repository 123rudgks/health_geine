'use client';
import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import CheckBox from '@/components/CheckBox/CheckBox';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import TrainerListItem from '@/components/pages/trainer/TrainerListItem';
import HealthGenie from '@/svgs/HealthGenieTitle.svg';

type Props = {};

const TrainerListPage = (props: Props) => {
  return (
    <TopBottomBarTemplate
      _topNode={
        <div className=" h-full w-full bg-[#FDFDFF]  pt-14 shadow-[0_6px_6px_-6px_rgba(0,0,0,0.07)]">
          <div className="relative my-auto flex  h-[23px] w-full items-center justify-center ">
            <HealthGenie />
            <div className="absolute right-[22px] top-0 flex h-full items-center font-noto text-xs text-primary-400">
              로그인
            </div>
          </div>
        </div>
      }
      _bottomNode={<BottomNavigationBar />}
      _contentDivProps={{ className: 'bg-white' }}
    >
      <div className=" h-full w-full  px-5 pt-10">
        <div>검색바</div>
        <div className="mt-7">
          <div className="flex items-center justify-between">
            <CheckBox
              id={''}
              checked={true}
              onChange={() => {}}
              text="우리학교 트레이너"
              className="font-noto text-[17px] font-bold "
            />
            <div>인기순</div>
          </div>
          <div className="mt-8 flex flex-col gap-5  ">
            {Array.from({ length: 10 }).map((_, index) => (
              <TrainerListItem key={index} />
            ))}
          </div>
        </div>
      </div>
    </TopBottomBarTemplate>
  );
};

export default TrainerListPage;
