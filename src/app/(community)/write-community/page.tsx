'use client';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import BackSpaceArrow from '@/svgs/BackSpaceArrow.svg';
import CommunityCalendar from '@/svgs/CommunituCalendar.svg';
import { useRouter } from 'next/navigation';
import BasicInput from '@/components/Input/BasicInput';
import Button from '@/components/Button/Button';
import Box from '@/components/Box/Box';
import Camera from '@/svgs/ChatCamera.svg';
import { useEffect, useState } from 'react';
import BasicTextArea from '@/components/Input/BasicTextarea';
import { getPostPhotos, post } from '@/apis/api';
import AddTrainerPhotoVideoTab from '@/components/pages/write-trainer-detail/AddTrainerPhotoVideoTab';

type Props = {};

const Page = (props: Props) => {
  const router = useRouter();
  const [titleValue, setTitleValue] = useState<string>('');
  const [contentValue, setContentValue] = useState<string>('');
  const [additionalImages, setAdditionalImages] = useState<File[]>([]);

  const date = `${new Date().getFullYear()}.${
    new Date().getMonth() + 1
  }.${new Date().getDate()}`;

  const getDay = (dayIndex: number) => {
    const koreanDays = ['일', '월', '화', '수', '목', '금', '토'];
    return koreanDays[dayIndex];
  };

  const [koreanDay, setKoreanDay] = useState('');

  useEffect(() => {
    const date = new Date();
    const dayIndex = date.getDay();
    const koreanDay = getDay(dayIndex);
    setKoreanDay(koreanDay);
  }, []);

  const handleTitle = (value: string) => {
    if (value.length > 20) {
      value = value.slice(0, 20);
    }
    setTitleValue(value);
  };

  const handleContent = (value: string) => {
    if (value.length > 20) {
      value = value.slice(0, 20);
    }
    setContentValue(value);
  };

  const handleAdditionalImagesChange = (images: File[]) => {
    setAdditionalImages(images);
  };

  const uploadProfileImages = async (id: string) => {
    try {
      if (additionalImages.length > 0) {
        const formData = new FormData();
        additionalImages.forEach((image) => {
          formData.append('photos', image);
        });
        await getPostPhotos(id, formData);
      }
    } catch (error) {
      console.error('Error uploading profile images:', error);
    }
  };

  const handleWrite = async () => {
    try {
      const profileResponse = await post(titleValue, contentValue);
      const id = profileResponse.id;

      if (id) {
        if (additionalImages.length > 0) {
          await uploadProfileImages(id);
        }
        router.push('/community');
      } else {
        console.error('Post response does not contain ID:', profileResponse);
      }
    } catch (error) {
      console.error('Error in handleWrite:', error);
    }
  };

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
            글 작성하기
          </div>
        </div>
      }
      _bottomNode={
        <div className="flex justify-center px-14">
          <Button
            onClick={handleWrite}
            ring="none"
            background="primary-400"
            color="white"
            className="h-[50px] w-full rounded-[6px] text-[16px] font-semibold"
          >
            완료
          </Button>
        </div>
      }
      _contentDivProps={{ className: 'bg-white' }}
    >
      <div className="flex flex-col items-start gap-2 px-14">
        <div className="gap-1">
          <div className="font-regular flex gap-2 font-noto text-[18.36px] text-[#434343]">
            <div className="flex items-center justify-center gap-1">
              <CommunityCalendar />
              <p>
                {date} ({koreanDay})
              </p>
            </div>
          </div>
        </div>
        <BasicInput
          _wrapperProps={{
            className:
              'bg-white ring-[#c1c1c1] px-4 rounded-[6px] h-[41px] flex-1 w-full',
          }}
          _inputProps={{
            className:
              'text-[16px] font-noto placeholder:text-black text-black',
            placeholder: '제목을 입력해주세요. (20자 이내)',
          }}
          _value={titleValue}
          _onChange={handleTitle}
        />
        <Box className="flex w-full flex-col rounded-[6px] border border-[#c1c1c1] p-0">
          <BasicTextArea
            _wrapperClasses="px-4 ring-0"
            _value={contentValue}
            _onChange={handleContent}
            className="h-[200px] w-full font-noto text-[16px] text-black placeholder:text-black"
            placeholder="내용을 입력해주세요."
          />
          {/* <div className="h-0 w-full border-b border-[#c1c1c1]" />
          <div
            className="flex items-center justify-center p-4 font-noto text-[14px] font-semibold"
          >
            <Camera />
            <p className="pl-2">사진 선택하기</p>
            <p>1/3</p>
          </div> */}
        </Box>
        <AddTrainerPhotoVideoTab
          profileImages={additionalImages}
          onImagesChange={handleAdditionalImagesChange}
        />
      </div>
    </TopBottomBarTemplate>
  );
};
export default Page;
