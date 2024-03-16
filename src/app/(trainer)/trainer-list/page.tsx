'use client';
import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import BasicInput from '@/components/Input/BasicInput';
import RoundCheckBox from '@/components/RoundCheckBox/RoundCheckBox';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import TrainerListItem from '@/components/pages/trainer/TrainerListItem';
import HealthGenie from '@/svgs/HealthGenieTitle.svg';
import MagnifyingGlasses from '@/svgs/MagnifyingGlasses.svg';
import NavArrowLeft from '@/svgs/NavArrowLeft.svg';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const TrainerListPage = () => {
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
        <div className="flex h-10 rounded-[10px] bg-[#E2E2E2] px-3">
          <div className="flex w-10 items-center justify-center">
            <MagnifyingGlasses />
          </div>
          <BasicInput
            _wrapperProps={{ className: 'ring-0 flex-1' }}
            _inputProps={{
              className: 'bg-transparent',
              placeholder: '트레이너 검색',
            }}
            _value=""
          />
        </div>
        <div className="mt-7">
          <div className="flex items-center justify-between">
            <RoundCheckBox
              id={''}
              checked={true}
              onChange={() => {}}
              text="우리학교 트레이너"
              className="font-noto text-[17px] font-bold "
            />
            <div className="relative w-[60px] font-noto text-xs font-bold">
              <div className="flex w-full items-center justify-center gap-1 rounded-[4px] bg-[#7596FA] p-1  text-white">
                <div className="pt-1">
                  <NavArrowLeft />
                </div>
                인기순
              </div>
              <div className="absolute left-0 top-full w-full translate-y-[1px] overflow-hidden rounded bg-[#F3F3F3] py-1 ">
                <div className=" p-1 pl-[22px] text-[#7596FA]">인기순</div>
                <div className=" p-1 pl-[22px] text-[#7596FA]">최신순</div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-5">
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
