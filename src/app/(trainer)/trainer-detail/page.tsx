'use client';
import axios from 'axios';
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
import { BASE_URL, ACCESS_TOKEN } from '@/utils/routePath';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {};
type TrainerDetailTab = '상세내용' | '사진/동영상' | '후기';
const TRAINER_DETAIL_TABS: TrainerDetailTab[] = [
  '상세내용',
  '사진/동영상',
  '후기',
];
const TrainerDetailPage = ({
  searchParams,
}: {
  searchParams: { id: string };
}) => {
  const router = useRouter();
  const trainerProfileId = searchParams.id;
  const [trainerProfileData, setTrainerProfileData] = useState<any>();
  const [trainerImageData, setTrainerImageData] = useState<any>();
  const [currentTab, setCurrentTab] = useState<TrainerDetailTab>('상세내용');

  const photoResponse = async () => {
    try {
      const response = await axios.get(
        `https://${BASE_URL}/trainers/profiles/${trainerProfileId}/photos`,
        {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      const data = response.data.data;

      if (data && Object.keys(data).length > 0) {
        return data;
      } else {
        throw new Error('데이터가 없습니다.');
      }
    } catch (error) {
      console.error('데이터를 불러오는 중 에러가 발생했습니다.', error);
      throw error;
    }
  };

  const trainerProfileList = async () => {
    try {
      const response = await axios.get(
        `https://${BASE_URL}/trainers/profiles/details/${trainerProfileId}`,
        {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );

      const data = response.data.data;

      if (data && Object.keys(data).length > 0) {
        return data;
      } else {
        throw new Error('데이터가 없습니다.');
      }
    } catch (error) {
      console.error('데이터를 불러오는 중 에러가 발생했습니다.', error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await trainerProfileList();
      const imageData = await photoResponse();
      setTrainerProfileData(data);
      setTrainerImageData(imageData);
    };

    fetchData();
  }, [trainerProfileId]);

  return (
    <>
      {trainerProfileData && trainerImageData && (
        <div key={trainerProfileData.id}>
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
                <div className="flex flex-1 justify-center font-noto text-[18px] font-bold text-primary-400">
                  {trainerProfileData.name} 트레이너
                </div>
              </div>
            }
            _bottomNode={
              <div className="px-[21px] pb-[46px] pt-[10px]">
                <div className="relative h-[43px] w-full overflow-hidden rounded-[18px] rounded-bl-none">
                  <Button
                    onClick={() =>
                      router.push(
                        `/chatting/room?userId=${trainerProfileData.userId}&name=${trainerProfileData.name}`
                      )
                    }
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
                {trainerImageData.map((item: any) =>
                  item.purpose !== 'ETC' ? (
                    <div
                      key={item.id}
                      className="absolute inset-0 flex"
                      style={{
                        backgroundImage: `url('${item.path}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="flex flex-col items-start justify-end pb-4 pl-6">
                        <p className="font-noto text-[15px] font-medium text-white">
                          트레이너
                        </p>
                        <span className="font-noto text-[25px] font-bold text-white">
                          {trainerProfileData.name}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div
                      key={item.id}
                      className="absolute inset-0 flex"
                      style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="flex flex-col items-start justify-end pb-4 pl-6">
                        <p className="font-noto text-[15px] font-medium text-white">
                          트레이너
                        </p>
                        <span className="font-noto text-[25px] font-bold text-white">
                          {trainerProfileData.name}
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="flex w-full flex-col gap-2 p-[22px]">
                <div className="flex h-[18px] items-center gap-[14px]">
                  <Building />
                  <LabelBoldText
                    _label="소속: "
                    _text={trainerProfileData.university}
                  />
                </div>
                <div className="flex h-[18px] items-center gap-[14px]">
                  <Clock />
                  <LabelBoldText
                    _label="연락 가능 시간: "
                    _text={trainerProfileData.startTime}
                  />
                  <LabelBoldText
                    _label="~"
                    _text={trainerProfileData.endTime}
                  />
                </div>
                <div className="flex h-[18px] items-center gap-[14px]">
                  <Star />
                  <LabelBoldText
                    _label="리뷰 평점: "
                    _text={trainerProfileData.reviewAvg}
                  />
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
                  {currentTab === '상세내용' && (
                    <TrainerDetailInfoTab
                      introduction={trainerProfileData.introduction}
                      month={trainerProfileData.month}
                      cost={trainerProfileData.cost}
                      career={trainerProfileData.career}
                    />
                  )}
                  {currentTab === '사진/동영상' && trainerImageData && (
                    <TrainerPhotoVideoTab trainerImageData={trainerImageData} />
                  )}
                  {currentTab === '후기' && <TrainerReviewTab />}
                </div>
              </div>
            </div>
          </TopBottomBarTemplate>
        </div>
      )}
    </>
  );
};

export default TrainerDetailPage;
