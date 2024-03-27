'use client';
import Button from '@/components/Button/Button';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import InputMediumText from '@/components/Text/InputMediumText';
import AddTrainerPhotoVideoTab from '@/components/pages/write-trainer-detail/AddTrainerPhotoVideoTab';
import WriteTrainerDetailInfoTab from '@/components/pages/write-trainer-detail/WriteTrainerDetailInfoTab';
import { userState } from '@/recoil/state';
import BackSpaceArrow from '@/svgs/BackSpaceArrow.svg';
import Building from '@/svgs/Building.svg';
import Clock from '@/svgs/Clock.svg';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {};
type WriteTrainerDetailTab = '상세내용' | '사진/동영상';
const WRITE_TRAINER_DETAIL_TABS: WriteTrainerDetailTab[] = [
  '상세내용',
  '사진/동영상',
];
const WriteTrainerDetailPage = (props: Props) => {
  const router = useRouter();
  const [currentTab, setCurrentTab] =
    useState<WriteTrainerDetailTab>('상세내용');

  return (
    <TopBottomBarTemplate
      _topNode={
        <div className="relative flex h-full w-full items-center">
          <div className="absolute left-[22px]">
            <BackSpaceArrow onClick={() => router.back()} />
          </div>
          <div className="flex flex-1 justify-center font-noto text-[18px] font-bold  text-primary-400">
            트레이너
          </div>
        </div>
      }
      _bottomNode={
        <div className="px-[21px] pb-[46px] pt-[10px]">
          <div className="relative h-[43px] w-full overflow-hidden rounded-[6px]">
            <Button
              ring={'primary-400'}
              color={'white'}
              background={'primary-400'}
              className="h-full w-full "
            >
              완료
            </Button>
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
            <InputMediumText
              _label="소속: "
              _input=""
              _placeholder="내용을 입력하세요."
            />
          </div>
          <div className="flex h-[18px] items-center gap-[14px]">
            <Clock />
            <div className="flex">
              <InputMediumText
                _label="연락 가능 시간: "
                _input=""
                _placeholder="09:00 ~ 18:00"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-[18px] border-b border-[#F3F3F3] px-[22px]">
            {WRITE_TRAINER_DETAIL_TABS.map((tab) => (
              <div
                key={tab}
                onClick={() => setCurrentTab(tab)}
                className={twMerge(
                  'h-full translate-y-[1px] font-noto  font-bold text-[#C1C1C1]',
                  currentTab === tab &&
                    'border-b-2 border-[#434343] text-[#434343]'
                )}
              >
                {tab === '사진/동영상' ? tab : tab}
              </div>
            ))}
          </div>
          <div className="px-[22px] pb-[90px] pt-5">
            {currentTab === '상세내용' && <WriteTrainerDetailInfoTab />}
            {currentTab === '사진/동영상' && <AddTrainerPhotoVideoTab />}
          </div>
        </div>
      </div>
    </TopBottomBarTemplate>
  );
};

export default WriteTrainerDetailPage;
