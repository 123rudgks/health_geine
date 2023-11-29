'use client';
import Button from '@/components/Button/Button';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import LabelBoldText from '@/components/Text/LabelBoldText';
import TrainerDetailInfoTab from '@/components/pages/trainer-detail/TrainerDetailInfoTab';
import TrainerPhotoVideoTab from '@/components/pages/trainer-detail/TrainerPhotoVideoTab';
import TrainerReviewTab from '@/components/pages/trainer-detail/TrainerReviewTab';
import BackSpaceArrow from '@/svgs/BackSpaceArrow.svg';
import Building from '@/svgs/Building.svg';
import Clock from '@/svgs/Clock.svg';
import Star from '@/svgs/Star.svg';
import Users from '@/svgs/Users.svg';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {};
type TrainerDetailTab = '상세내용' | '사진/동영상' | '후기';
const TRAINER_DETAIL_TABS: TrainerDetailTab[] = [
  '상세내용',
  '사진/동영상',
  '후기',
];
const TrainerDetailPage = (props: Props) => {
  const [currentTab, setCurrentTab] = useState<TrainerDetailTab>('상세내용');
  return (
    <TopBottomBarTemplate
      _topNode={
        <div className="relative flex h-full w-full items-center">
          <div className="absolute left-[22px]">
            <BackSpaceArrow />
          </div>
          <div className="flex flex-1 justify-center font-noto text-[18px] font-bold  text-primary-400">
            트레이너
          </div>
        </div>
      }
      _bottomNode={
        <div className="px-[21px] pb-[46px] pt-[10px]">
          <div className="relative h-[43px] w-full overflow-hidden rounded-[18px] rounded-bl-none">
            <Button
              ring={'primary-400'}
              color={'white'}
              background={'primary-400'}
              className="h-full w-full "
            >
              트레이너에게 채팅 보내기
            </Button>
            <div className="absolute bottom-0 left-0 h-0 w-0 border-8 border-b-[#7596FA] border-l-[#7596FA] border-r-transparent border-t-transparent"></div>
            <div className="absolute bottom-0 left-0 h-0 w-0 border-4 border-b-[#D1DDFF] border-l-[#D1DDFF] border-r-transparent border-t-transparent"></div>
          </div>
        </div>
      }
      _contentDivProps={{ className: 'bg-white' }}
    >
      <div className="w-full">
        <div className="relative w-full pb-[50%]">
          <div className="absolute h-full w-full bg-black">프로필 이미지</div>
        </div>
        <div className="flex w-full flex-col gap-2 p-[22px]">
          <div className="flex h-[18px] items-center gap-[14px]">
            <Building />
            <LabelBoldText _label="소속: " _text="경북대학교" />
          </div>
          <div className="flex h-[18px] items-center gap-[14px]">
            <Clock />
            <LabelBoldText
              _label="연락 가능 시간: "
              _text="오전 6시 ~
              오후 11시"
            />
          </div>
          <div className="flex h-[18px] items-center gap-[14px]">
            <Star />
            <LabelBoldText _label="리뷰 평점: " _text="4/5" />
          </div>
          <div className="flex h-[18px] items-center gap-[14px]">
            <Users />
            <LabelBoldText _label="담당했던 회원 수: " _text="21명" />
          </div>
        </div>
        <div>
          <div className=" flex gap-[18px] border-b border-[#F3F3F3] px-[22px]">
            {TRAINER_DETAIL_TABS.map((tab) => (
              <div
                key={tab}
                onClick={() => setCurrentTab(tab)}
                className={twMerge(
                  'h-full translate-y-[1px] font-noto  font-bold text-[#C1C1C1]',
                  currentTab === tab &&
                    'border-b-2 border-[#434343]  text-[#434343]'
                )}
              >
                {tab === '후기' ? tab + '18' : tab}
              </div>
            ))}
          </div>
          <div className="px-[22px] pt-5">
            {currentTab === '상세내용' && <TrainerDetailInfoTab />}
            {currentTab === '사진/동영상' && <TrainerPhotoVideoTab />}
            {currentTab === '후기' && <TrainerReviewTab />}
          </div>
        </div>
      </div>
    </TopBottomBarTemplate>
  );
};

export default TrainerDetailPage;
