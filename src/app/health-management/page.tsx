'use client';
import Image from 'next/image';
import FillReviewStar from './icon/FillReviewStar.svg';
import EmptyReviewStar from './icon/EmptyReviewStar.svg';
import BackgroundCircle from './icon/BackgroundCircle.png';
import EmptyCalendar from '@/svgs/EmptyCalendar.svg';
import HealthGenie from '@/svgs/HealthGenieTitle.svg';
import Box from '@/components/Box/Box';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SquareCheckBox from '@/components/SquareCheckBox/SquareCheckBox';
type Props = {};

const Page = (props: Props) => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="h-[100vh] bg-primary-400 ">
      <Image
        src={BackgroundCircle}
        alt="BackgroundCircle"
        className="z-5 absolute w-[50%] pt-40"
      />
      <div className="relative z-10">
        <div className="py-16 pl-10 text-white">
          <p className="font-[11px] font-[500]">회원전용</p>
          <HealthGenie />
          <p className="text-[19px] font-[700]">
            지니님 좋은 아침입니다!
            <br /> 오늘도 건강한 하루 보내봐요 :)
          </p>
        </div>

        <Box className="flex h-[100%] flex-col justify-start gap-[13px] rounded-[21px] bg-[#f4f4f4] px-[22px] py-[26px]">
          <Box className="w-[100%] rounded-[18px] px-[22px] py-[26px] shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
            <div className="flex justify-between">
              <h1 className="text-[16px] font-[700]">
                오늘, 정수영 트레이너와 PT가 있습니다.
              </h1>
              <EmptyCalendar />
            </div>
            <div className="py-2">
              <div className="text-gray-4 flex text-[16px]">
                <p className="font-[700]">
                  장소:
                  <span className="font-[500]"> place</span>
                </p>
              </div>
              <div className="text-gray-4 flex text-[16px]">
                <p className="font-[700]">
                  시간:
                  <span className="font-[500]"> time</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-4 text-center">
              <Box className="w-[100%] rounded-[4px] bg-[#d9d9d9] px-[34px] py-[3px] text-[16px] font-[600] text-white">
                PT 취소하기
              </Box>
              <Box className="w-[100%] rounded-[4px] bg-primary-400 px-[34px] py-[3px] text-[16px] font-[600] text-white">
                PT 출석하기
              </Box>
            </div>
          </Box>
          <Box className="w-[100%] rounded-[18px] px-[22px] py-[26px] shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
            <div className="flex justify-between">
              <h1 className="text-[19px] font-[700] text-primary-400">
                목요일 운동 루틴
              </h1>
              <div className="flex gap-1 text-center text-[13px] font-[600] text-white">
                <Box className="rounded-[4px] bg-primary-400 px-[18px] py-[3px]">
                  지니 루틴
                </Box>
                <Box className="rounded-[4px] bg-primary-100 px-[18px] py-[3px]">
                  나의 루틴
                </Box>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[19px] font-[700]">하체</h1>
              <SquareCheckBox
                id="checkbox_labeled"
                text="스쿼트"
                className="text-[15px]"
                onChange={onChange}
                checked={isChecked}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[19px] font-[700]">어깨</h1>
              <SquareCheckBox
                id="checkbox"
                text="백덱플라이"
                className="text-[15px]"
                onChange={onChange}
                checked={isChecked}
              />
            </div>
          </Box>
          <Box className="w-[100%] gap-[13px] rounded-[18px] px-[22px] py-[26px] shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
            <div className="flex justify-between py-4">
              <div className="flex h-[14px] flex-col justify-end bg-primary-200">
                <h1 className="text-[19px] font-[700] text-black">PT 일지</h1>
              </div>
              <button
                className="-mt-2 flex gap-1"
                onClick={() => router.push('/pt-log')}
              >
                <h1 className="text-[15px] font-[500] text-[#979797] underline">
                  전체보기
                </h1>
              </button>
            </div>
            <Box className="my-2 flex rounded-[8px] bg-gray-100">
              <Box className="h-[70px] w-[70px]" />
              <div className="flex w-[100%] flex-col px-4">
                <p className="text-[13px] font-[500] text-gray-300">
                  2023-09-11
                </p>
                <h2 className="pb-2 pt-1 text-[15px] font-[500] text-black">
                  회원님 오늘 PT 피드백입니다!
                </h2>
                <div className="flex justify-between">
                  <h3 className="text-[13px] font-[500] text-gray-300">
                    정수영 트레이너
                  </h3>
                  <h3 className="text-[13px] font-[500] text-primary-400 underline">
                    자세히 보기
                  </h3>
                </div>
              </div>
            </Box>
            <Box className="flex rounded-[8px] bg-gray-100">
              <Box className="h-[70px] w-[70px]" />
              <div className="flex w-[100%] flex-col px-4">
                <p className="text-[13px] font-[500] text-gray-300">
                  2023-09-11
                </p>
                <h2 className="pb-2 pt-1 text-[15px] font-[500] text-black">
                  회원님 오늘 PT 피드백입니다!
                </h2>
                <div className="flex justify-between">
                  <h3 className="text-[13px] font-[500] text-gray-300">
                    정수영 트레이너
                  </h3>
                  <h3 className="text-[13px] font-[500] text-primary-400 underline">
                    자세히 보기
                  </h3>
                </div>
              </div>
            </Box>
            <Box className="flex rounded-[8px] bg-gray-100">
              <Box className="h-[70px] w-[70px]" />
              <div className="flex w-[100%] flex-col px-4">
                <p className="text-[13px] font-[500] text-gray-300">
                  2023-09-11
                </p>
                <h2 className="pb-2 pt-1 text-[15px] font-[500] text-black">
                  회원님 오늘 PT 피드백입니다!
                </h2>
                <div className="flex justify-between">
                  <h3 className="text-[13px] font-[500] text-gray-300">
                    정수영 트레이너
                  </h3>
                  <h3 className="text-[13px] font-[500] text-primary-400 underline">
                    자세히 보기
                  </h3>
                </div>
              </div>
            </Box>
          </Box>
          <Box className="w-[100%] rounded-[18px] px-[22px] py-[26px] shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
            <div className="flex justify-between py-4">
              <div className="flex h-[14px] flex-col justify-end bg-primary-200">
                <h1 className="text-[19px] font-[700] text-black">수업 리뷰</h1>
              </div>
              <button
                className="-mt-2 flex gap-1"
                onClick={() => router.push('/trainer-review')}
              >
                <h1 className="text-[15px] font-[500] text-[#979797] underline">
                  전체보기
                </h1>
              </button>
            </div>
            <Box className="flex flex-col rounded-[21px] font-[500] shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
              <h1 className="text-[15px]">정수영 트레이너</h1>
              <div className="flex py-2">
                <FillReviewStar />
                <FillReviewStar />
                <FillReviewStar />
                <EmptyReviewStar />
                <EmptyReviewStar />
              </div>
              <p className="text-[13px]">
                오늘도 너무 친절하게 잘 알려주셔서, 감사했습니다. 하지만
                트레이너님 팔뚝을 볼때 마다 너무 무서워서 헬스에 집중하기가
                어려웠네요 ㅠ 그래서 별점 1개 깎았습니다.
              </p>
              <p className="text-end text-[11px] text-[#c1c1c1]">2023-11-12</p>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Page;
