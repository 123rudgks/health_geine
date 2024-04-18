'use client';
import Image from 'next/image';
import { BASE_URL } from '@/utils/routePath';
import FillReviewStar from './icon/FillReviewStar.svg';
import EmptyReviewStar from './icon/EmptyReviewStar.svg';
import BackgroundCircle from './icon/BackgroundCircle.png';
import EmptyCalendar from '@/svgs/EmptyCalendar.svg';
import HealthGenie from '@/svgs/HealthGenieTitleWhite.svg';
import Box from '@/components/Box/Box';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SquareCheckBox from '@/components/SquareCheckBox/SquareCheckBox';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  loginState,
  myListState,
  myReviewState,
  userState,
} from '@/recoil/state';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { KEY_MYLIST, KEY_MYREVIEW, KEY_USERS } from '@/utils/queryKey';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import TrainerProfileEdit from '@/components/pages/trainer/TrainerProfileEdit';
import { getCookie } from 'cookies-next';

type Props = {};

const getDay = (dayIndex: number) => {
  const koreanDays = ['일', '월', '화', '수', '목', '금', '토'];
  return koreanDays[dayIndex];
};

const Page = () => {
  const router = useRouter();
  const accessToken = localStorage.getItem('accessToken');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const loginData = useRecoilValue(loginState);
  const [userData, setUserData] = useRecoilState(userState);
  const [myListData, setMyListUserData] = useRecoilState(myListState);
  const [myReviewData, setMyReviewData] = useRecoilState(myReviewState);
  const [koreanDay, setKoreanDay] = useState('');

  useEffect(() => {
    const date = new Date();
    const dayIndex = date.getDay();
    const koreanDay = getDay(dayIndex);
    setKoreanDay(koreanDay);
  }, []);

  // const fetchTrainerProfileData = async () => {
  //   const response = await axios.get(
  //     `https://서비스.한국/trainers/profiles/details/${userData.id}`,
  //     {
  //       headers: {
  //         'Content-Type': 'application/json;charset=utf-8',
  //         'Access-Control-Allow-Origin': '*',
  //         Authorization: `Bearer ` + accessToken,
  //       },
  //     }
  //   );
  //   return response.data.data;
  // };

  const fetchUserData = async () => {
    const response = await axios.get(`https://${BASE_URL}/users`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ` + accessToken,
      },
    });
    return response.data.data;
  };

  const listUrl =
    userData.role === 'ROLE_TRAINER'
      ? `https://${BASE_URL}/process/trainers/list`
      : `https://${BASE_URL}/process/my/list`;

  const fetchMyListData = async () => {
    const response = await axios.get(listUrl, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ` + accessToken,
      },
    });
    return response.data.data;
  };

  const reviewUrl =
    userData.role === 'ROLE_TRAINER'
      ? `https://${BASE_URL}/reviews/trainers/list/${userData.id}`
      : `https://${BASE_URL}/reviews/my/list`;

  const fetchMyReviewData = async () => {
    const response = await axios.get(reviewUrl, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ` + accessToken,
      },
    });
    return response.data.data;
  };

  const { data: userDataQuery } = useQuery(KEY_USERS, fetchUserData, {
    onSuccess: (data) => setUserData(data),
  });

  const { data: listDataQuery } = useQuery(KEY_MYLIST, fetchMyListData, {
    onSuccess: (data) => setMyListUserData(data),
  });

  const { data: reviewDataQuery } = useQuery(KEY_MYREVIEW, fetchMyReviewData, {
    onSuccess: (data) => setMyReviewData(data),
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  let titleRole = loginData.role;

  if (titleRole === 'ROLE_USER') {
    titleRole = '회원';
  } else if (titleRole === 'ROLE_TRAINER') {
    titleRole = '트레이너';
  } else {
    titleRole = 'No role';
  }

  return (
    <TopBottomBarTemplate _bottomNode={<BottomNavigationBar />}>
      <div className="h-[100vh] bg-primary-400">
        <Image
          src={BackgroundCircle}
          alt="BackgroundCircle"
          className="z-5 absolute w-[50%] pt-40"
        />
        <div className="relative z-10">
          <div className="py-16 pl-10 text-white">
            <p className="pb-2 font-[11px] font-[500]">{titleRole}전용</p>
            <HealthGenie />
            {userData.name && (
              <p className="pt-4 text-[19px] font-[700]">
                {userData.name}님 좋은 아침입니다! <br /> 오늘도 건강한 하루
                보내봐요 :)
              </p>
            )}
          </div>

          <Box className="flex h-[100%] flex-col justify-start gap-[13px] rounded-[21px] bg-[#f4f4f4] px-[22px] py-[26px]">
            {/* <TrainerProfileEdit career={} /> */}
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
                  {koreanDay}요일 운동 루틴
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
              {listDataQuery && listDataQuery.length > 0 ? (
                <Box className="my-2 flex rounded-[8px] bg-gray-100">
                  <Box className="h-[70px] w-[70px]" />
                  <div className="flex w-[100%] flex-col px-4">
                    <p className="text-[13px] font-[500] text-gray-300">
                      {myListData.date && (
                        <>
                          <p className="text-[13px] font-[500] text-gray-300">
                            {myListData.date}
                          </p>
                        </>
                      )}
                    </p>
                    <h2 className="pb-2 pt-1 text-[15px] font-[500] text-black">
                      {myListData.content}
                    </h2>
                    <div className="flex justify-between">
                      <h3 className="text-[13px] font-[500] text-gray-300">
                        {myListData.trainerNickName}
                      </h3>
                      <h3 className="text-[13px] font-[500] text-primary-400 underline">
                        자세히 보기
                      </h3>
                    </div>
                  </div>
                </Box>
              ) : (
                <p className="flex items-center justify-center font-noto text-[17px] font-semibold text-[#979797]">
                  해당 데이터가 없습니다.
                </p>
              )}
            </Box>
            <Box className="mb-[90px] w-[100%] rounded-[18px] px-[22px] py-[26px] shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
              <div className="flex justify-between py-4">
                <div className="flex h-[14px] flex-col justify-end bg-primary-200">
                  <h1 className="text-[19px] font-[700] text-black">
                    수업 리뷰
                  </h1>
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
              {reviewDataQuery && reviewDataQuery.length > 0 ? (
                <Box className="flex flex-col rounded-[21px] font-[500] shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
                  <h1 className="text-[15px]">{myReviewData.trainerName}</h1>
                  <div className="flex py-2">
                    {myReviewData.reviewScore}
                    <FillReviewStar />
                    <FillReviewStar />
                    <FillReviewStar />
                    <EmptyReviewStar />
                    <EmptyReviewStar />
                  </div>
                  <p className="text-[13px]">{myReviewData.content}</p>
                  <p className="text-end text-[11px] text-[#c1c1c1]">
                    {myReviewData.createdAt}
                  </p>
                </Box>
              ) : (
                <p className="flex items-center justify-center font-noto text-[17px] font-semibold text-[#979797]">
                  해당 데이터가 없습니다.
                </p>
              )}
            </Box>
          </Box>
        </div>
      </div>
    </TopBottomBarTemplate>
  );
};

export default Page;
