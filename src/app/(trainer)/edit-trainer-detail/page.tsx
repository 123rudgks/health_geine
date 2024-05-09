'use client';
import Button from '@/components/Button/Button';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import InputMediumText from '@/components/Text/InputMediumText';
import EditTrainerDetailInfoTab from '@/components/pages/edit-trainer-detail/EditTrainerDetailInfoTab';
import TrainerPhotoVideoTab from '@/components/pages/trainer-detail/TrainerPhotoVideoTab';
import TrainerReviewTab from '@/components/pages/trainer-detail/TrainerReviewTab';
import BackSpaceArrow from '@/svgs/BackSpaceArrow.svg';
import Building from '@/svgs/Building.svg';
import NoProfile from '@/svgs/NoProfile.svg';
import Clock from '@/svgs/Clock.svg';
import Star from '@/svgs/Star.svg';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import {
  getDeleteTrainerPhoto,
  getDeleteTrainerProfileListDetail,
  getEditTrainerProfileListDetail,
  getPhotoResponse,
  getTrainerPostPhotos,
  getTrainerProfileListDetail,
} from '@/apis/api';
import AddTrainerPhotoVideoTab from '@/components/pages/write-trainer-detail/AddTrainerPhotoVideoTab';

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
  const [trainerImageData, setTrainerImageData] = useState<any>();
  const [currentTab, setCurrentTab] = useState<TrainerDetailTab>('상세내용');
  const [profileImages, setProfileImages] = useState<File[]>([]);
  const [editedTrainerProfileData, setEditedTrainerProfileData] = useState<any>(
    {}
  );

  const [additionalImages, setAdditionalImages] = useState<File[]>([]);

  const handlePhotoChange = (newPhoto: File) => {
    const newProfileImages = [newPhoto];
    setProfileImages(newProfileImages);
  };

  const handleInputChange = (key: string, value: string) => {
    setEditedTrainerProfileData({
      ...editedTrainerProfileData,
      [key]: value,
    });
  };

  const fetchData = async () => {
    const data = await getTrainerProfileListDetail(trainerProfileId);
    const imageData = await getPhotoResponse(trainerProfileId);
    setTrainerProfileData(data);
    setTrainerImageData(imageData);
  };

  useEffect(() => {
    fetchData();
  }, [trainerProfileId]);

  const handleDelete = async () => {
    alert('정말 삭제하시겠습니까?');
    await getDeleteTrainerProfileListDetail(trainerProfileId);
    await getDeleteTrainerPhoto(trainerProfileId);
    router.push('/trainer-list');
  };

  const handlePhotoDelete = async () => {
    alert('게시된 전체 사진이 삭제됩니다. 정말 삭제하시겠습니까?');
    await getDeleteTrainerPhoto(trainerProfileId);
    await getPhotoResponse(trainerProfileId);
  };

  const handleAdditionalImagesChange = (images: File[]) => {
    setAdditionalImages(images);
  };

  const uploadProfileImages = async (id: string) => {
    try {
      if (profileImages.length > 0) {
        const formData = new FormData();
        profileImages.forEach((image, index) => {
          formData.append('photos', image);
        });
        formData.append('purpose', 'PROFILE');

        await getTrainerPostPhotos(id, formData);
      }

      if (additionalImages.length > 0) {
        const formData = new FormData();
        additionalImages.forEach((image, index) => {
          formData.append('photos', image);
        });
        formData.append('purpose', 'ETC');

        await getTrainerPostPhotos(id, formData);
      }
    } catch (error) {
      console.error('프로필 이미지 업로드 중 에러:', error);
      throw new Error('프로필 이미지 업로드 중 에러가 발생했습니다.');
    }
  };

  const handleSubmit = async () => {
    const editProfileData = {
      ...editedTrainerProfileData,
      name: editedTrainerProfileData.name || trainerProfileData.name,
      university:
        editedTrainerProfileData.university || trainerProfileData.university,
    };

    try {
      const response = await getEditTrainerProfileListDetail(
        trainerProfileId,
        editProfileData
      );
      const id = response.id;

      if (id) {
        if (additionalImages.length > 0) {
          await uploadProfileImages(id);
        }
        router.push(`/trainer-detail?id=${id}&userId=${trainerId}`);
      } else {
        console.error('id가 없습니다.', response);
      }
    } catch (error) {
      console.error('프로필 수정에 실패하였습니다.', error);
    }
  };

  return (
    <>
      {trainerProfileData && (
        <div key={trainerProfileData.id}>
          <TopBottomBarTemplate
            _topNode={
              <div className="relative flex h-full w-full items-center justify-between">
                <div className="ml-[22px]">
                  <BackSpaceArrow onClick={() => router.back()} />
                </div>
                <div className="flex flex-1 justify-center pl-6 font-noto text-[18px] font-bold text-primary-400">
                  {trainerProfileData.name} 트레이너
                </div>
                <Button
                  ring="none"
                  color="white"
                  background="none"
                  className="font-regular mr-[22px] rounded-full bg-[#FF8181] px-4 py-1 font-noto text-[14px]"
                  onClick={handleDelete}
                >
                  삭제
                </Button>
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
                    // disabled={loading}
                  >
                    수정하기
                  </Button>
                </div>
              </div>
            }
            _contentDivProps={{ className: 'bg-white' }}
          >
            <div className="w-full">
              <div className="relative w-full pb-[50%]">
                <div className="absolute inset-0 flex bg-[#dbdbdb]">
                  {/* {profileImages.length > 0 && ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={URL.createObjectURL(profileImages[0])}
                        alt="트레이너 프로필 사진"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <NoProfile />
                    </div>
                  )} */}
                  {trainerImageData &&
                    trainerImageData.map((item: any) =>
                      item.purpose === 'PROFILE' ? (
                        <div
                          key={item.id}
                          style={{
                            backgroundImage: `url('${
                              profileImages.length > 0
                                ? URL.createObjectURL(profileImages[0])
                                : item.path
                            }')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        >
                          <div>
                            {profileImages.length === 0 && (
                              <div>
                                <NoProfile />
                              </div>
                            )}
                            <div>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                  handlePhotoChange(e.target.files![0])
                                }
                              />
                            </div>
                          </div>
                        </div>
                      ) : null
                    )}

                  {/* {trainerImageData &&
                    trainerImageData.every(
                      (item: any) => item.purpose !== 'PROFILE'
                    ) && (
                      <div
                        className="absolute inset-0 flex bg-[#b1b1b1]"
                        style={{
                          backgroundImage:
                            profileImages.length > 0
                              ? `url('${URL.createObjectURL(
                                  profileImages[0]
                                )}')`
                              : `url('')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <NoProfile />
                        </div>
                      </div>
                    )} */}
                  <div className="flex flex-col items-start justify-end pb-4 pl-6">
                    <p className="font-noto text-[15px] font-medium text-white">
                      트레이너
                    </p>
                    <h1 className="font-noto text-[25px] font-bold text-white">
                      {trainerProfileData.name}
                    </h1>
                  </div>
                  <div className="absolute inset-0 flex items-end justify-end pb-4 pr-6">
                    <Button
                      ring={'primary-400'}
                      color={'white'}
                      background={'primary-400'}
                      className="h-[20px] w-[75px] rounded-[4px] bg-opacity-50 text-[10px] font-light ring-opacity-50"
                      onClick={() =>
                        document.getElementById('photoInput')?.click()
                      }
                    >
                      사진 바꾸기
                    </Button>
                    <input
                      id="photoInput"
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={(e) => {
                        handlePhotoChange(e.target.files![0]);
                        setProfileImages([e.target.files![0]]);
                      }}
                    />
                  </div>
                </div>

                {/* {trainerImageData &&
                  trainerImageData.map((item: any) =>
                    item.purpose === 'PROFILE' ? (
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
                        <div className="absolute inset-0 flex items-end justify-end pb-4 pr-6">
                          <Button
                            ring={'primary-400'}
                            color={'white'}
                            background={'primary-400'}
                            className="h-[20px] w-[75px] rounded-[4px] bg-opacity-50 text-[10px] font-light ring-opacity-50"
                            onClick={() =>
                              document.getElementById('photoInput')?.click()
                            }
                          >
                            사진 바꾸기
                          </Button>
                          <input
                            id="photoInput"
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={(e) =>
                              handlePhotoChange(e.target.files![0])
                            }
                          />
                        </div>
                      </div>
                    ) : null
                  )}

               */}
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
                  {currentTab === '사진/동영상' && (
                    <>
                      {trainerImageData && (
                        <TrainerPhotoVideoTab
                          handlePhotoDelete={handlePhotoDelete}
                          editing="on"
                          trainerImageData={trainerImageData}
                        />
                      )}
                      <AddTrainerPhotoVideoTab
                        imageGrid={2}
                        profileImages={additionalImages}
                        onImagesChange={handleAdditionalImagesChange}
                      />
                    </>
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

export default EditTrainerDetailPage;
