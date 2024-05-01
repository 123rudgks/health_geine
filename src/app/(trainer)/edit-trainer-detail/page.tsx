'use client';
import axios from 'axios';
import Button from '@/components/Button/Button';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import InputMediumText from '@/components/Text/InputMediumText';
import EditTrainerDetailInfoTab from '@/components/pages/edit-trainer-detail/EditTrainerDetailInfoTab';
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
const EditTrainerDetailPage = ({
  searchParams,
}: {
  searchParams: { id: string; userId: string };
}) => {
  const router = useRouter();
  const trainerProfileId = searchParams.id;
  const trainerId = searchParams.userId;
  const [trainerProfileData, setTrainerProfileData] = useState<any>();
  const [currentTab, setCurrentTab] = useState<TrainerDetailTab>('상세내용');
  const [loading, setLoading] = useState(false);
  const [editedTrainerProfileData, setEditedTrainerProfileData] = useState<any>(
    {}
  );

  const handleInputChange = (key: string, value: string) => {
    setEditedTrainerProfileData({
      ...editedTrainerProfileData,
      [key]: value,
    });
  };

  const trainerProfileList = async () => {
    try {
      const response = await axios.get(
        `https://${BASE_URL}/trainers/profiles/details/${trainerProfileId}`,
        {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${accessToken}`,
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
      setTrainerProfileData(data);
    };

    fetchData();
  }, [trainerId]);

  const handleSubmit = async () => {
    try {
      const editProfileData = {
        ...editedTrainerProfileData,
        name: editedTrainerProfileData.name || trainerProfileData.name,
        university:
          editedTrainerProfileData.university || trainerProfileData.university,
      };

      setLoading(true);
      const response = await axios.patch(
        `https://${BASE_URL}/trainers/profiles/${trainerProfileId}`,
        editProfileData,
        {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = response.data.data;
      if (data && Object.keys(data).length > 0) {
        alert('프로필이 성공적으로 수정되었습니다.');
        setLoading(false);
        router.back();
      } else {
        throw new Error('데이터가 없습니다.');
      }
    } catch (error) {
      setLoading(false);
      console.error('프로필 수정 중 에러가 발생했습니다.', error);
    }
  };

  const handleDelete = async () => {
    try {
      alert('정말 삭제하시겠습니까?');
      const response = await axios.delete(
        `https://${BASE_URL}/trainers/profiles/${trainerProfileId}`,

        {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );

      //  const data = response.data.data;
      router.push('/trainer-list');
    } catch (error) {
      console.error('프로필 수정 중 에러가 발생했습니다.', error);
    }
  };

  return (
    <>
      {trainerProfileData && (
        <div key={trainerProfileData.id}>
          <TopBottomBarTemplate
            _topNode={
              <div className="relative flex h-full w-full items-center">
                <div className="absolute left-[22px]">
                  <BackSpaceArrow onClick={() => router.back()} />
                </div>
                <div className="flex flex-1 justify-center font-noto text-[18px] font-bold text-primary-400">
                  {trainerProfileData.name} 트레이너
                </div>
                <div onClick={handleDelete} className="absolute right-[22px]">
                  삭제
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
                    className="h-full w-full"
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? '저장 중...' : '수정하기'}
                  </Button>
                </div>
              </div>
            }
            _contentDivProps={{ className: 'bg-white' }}
          >
            <div className="w-full">
              <div className="relative w-full pb-[50%]">
                <div
                  className="absolute inset-0 flex"
                  style={{
                    backgroundImage: `url('${trainerProfileData.photoPaths}')`,
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
                  {/* <div className="absolute inset-0 flex items-center justify-center"></div> */}
                </div>
              </div>
              <div className="flex w-full flex-col gap-2 p-[22px]">
                <div className="flex h-[18px] items-center gap-[14px]">
                  <Building />
                  <InputMediumText
                    _label="소속: "
                    _input={
                      editedTrainerProfileData.university ||
                      trainerProfileData.university
                    }
                    _placeholder={trainerProfileData.university}
                    _onChange={(value) =>
                      handleInputChange('university', value)
                    }
                  />
                </div>
                <div className="flex h-[18px] items-center gap-[14px]">
                  <Clock />
                  <InputMediumText
                    _label="연락 가능 시간: "
                    _input={
                      editedTrainerProfileData.startTime ||
                      trainerProfileData.startTime
                    }
                    _placeholder={trainerProfileData.startTime}
                    _onChange={(value) => handleInputChange('startTime', value)}
                  />
                  <InputMediumText
                    _label="~"
                    _input={
                      editedTrainerProfileData.endTime ||
                      trainerProfileData.endTime
                    }
                    _placeholder={trainerProfileData.endTime}
                    _onChange={(value) => handleInputChange('endTime', value)}
                  />
                </div>
                <div className="flex h-[18px] items-center gap-[14px]">
                  <Star />
                  <InputMediumText
                    _label="리뷰 평점: "
                    _input={
                      editedTrainerProfileData.reviewAvg ||
                      trainerProfileData.reviewAvg
                    }
                    _placeholder={trainerProfileData.reviewAvg}
                    _onChange={(value) => handleInputChange('reviewAvg', value)}
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
                    <EditTrainerDetailInfoTab
                      initialFormData={{
                        introduction: trainerProfileData.introduction,
                        month: trainerProfileData.month,
                        cost: trainerProfileData.cost,
                        career: trainerProfileData.career,
                      }}
                      onChange={handleInputChange}
                    />
                  )}
                  {currentTab === '사진/동영상' && <TrainerPhotoVideoTab />}
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

export default EditTrainerDetailPage;
