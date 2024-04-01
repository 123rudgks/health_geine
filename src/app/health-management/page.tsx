// 'use client';
// import Image from 'next/image';
// import { BASE_URL } from '@/utils/routePath';
// import FillReviewStar from './icon/FillReviewStar.svg';
// import EmptyReviewStar from './icon/EmptyReviewStar.svg';
// import BackgroundCircle from './icon/BackgroundCircle.png';
// import EmptyCalendar from '@/svgs/EmptyCalendar.svg';
// import HealthGenie from '@/svgs/HealthGenieTitleWhite.svg';
// import Box from '@/components/Box/Box';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import SquareCheckBox from '@/components/SquareCheckBox/SquareCheckBox';
// import { useRecoilState, useRecoilValue } from 'recoil';
// import {
//   loginState,
//   myListState,
//   myReviewState,
//   userState,
// } from '@/recoil/state';
// import axios from 'axios';
// import { useQuery } from '@tanstack/react-query';
// import { KEY_MYLIST, KEY_MYREVIEW, KEY_USERS } from '@/utils/queryKey';
// import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
// import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
// import TrainerProfileEdit from '@/components/pages/trainer/TrainerProfileEdit';
// import { getCookie } from 'cookies-next';

// type Props = {};

// const getDay = (dayIndex: number) => {
//   const koreanDays = ['일', '월', '화', '수', '목', '금', '토'];
//   return koreanDays[dayIndex];
// };

// const Page = () => {
//   const router = useRouter();
//   const [isChecked, setIsChecked] = useState<boolean>(false);
//   const accessToken = localStorage.getItem('accessToken');
//   const loginData = useRecoilValue(loginState);
//   const [userData, setUserData] = useRecoilState(userState);
//   const [myListData, setMyListUserData] = useRecoilState(myListState);
//   const [myReviewData, setMyReviewData] = useRecoilState(myReviewState);
//   const [koreanDay, setKoreanDay] = useState('');

//   useEffect(() => {
//     const date = new Date();
//     const dayIndex = date.getDay();
//     const koreanDay = getDay(dayIndex);
//     setKoreanDay(koreanDay);
//   }, []);

//   const refreshToken = async () => {
//     try {
//       const refreshCookie = getCookie('refresh'); // 쿠키 가져오기
//       if (!refreshCookie) {
//         throw new Error('Refresh cookie not found');
//       }
//       const refreshToken = refreshCookie; // 가져온 쿠키를 사용
//       const response = await axios.post(
//         `https://${BASE_URL}/refresh`,
//         { refreshToken },
//         {
//           headers: {
//             'Content-Type': 'application/json;charset=utf-8',
//             'Access-Control-Allow-Origin': '*',
//           },
//         }
//       );
//       const newAccessToken = response.headers['Authorization'].replace(
//         'Bearer ',
//         ''
//       );
//       localStorage.setItem('accessToken', newAccessToken);
//     } catch (error) {
//       console.error('Error refreshing access token:', error);
//     }
//   };

//   const fetchUserData = async () => {
//     const response = await axios.get(`https://${BASE_URL}/users`, {
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8',
//         'Access-Control-Allow-Origin': '*',
//         Authorization: accessToken,
//       },
//     });
//     return response.data.data;
//   };
//   const listUrl =
//     userData.role === 'TRAINER'
//       ? `https://${BASE_URL}/process/trainers/list`
//       : `https://${BASE_URL}/process/my/list`;

//   const fetchMyListData = async () => {
//     const response = await axios.get(listUrl, {
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8',
//         'Access-Control-Allow-Origin': '*',
//         Authorization: accessToken,
//       },
//     });
//     return response.data.data;
//   };

//   const reviewUrl =
//     userData.role === 'TRAINER'
//       ? `https://${BASE_URL}/reviews/trainers/list/2`
//       : `https://${BASE_URL}/reviews/my/list`;

//   const fetchMyReviewData = async () => {
//     const response = await axios.get(reviewUrl, {
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8',
//         'Access-Control-Allow-Origin': '*',
//         Authorization: accessToken,
//       },
//     });
//     return response.data.data;
//   };

//   const { data: userDataQuery } = useQuery(KEY_USERS, fetchUserData, {
//     onSuccess: (data) => setUserData(data),
//   });

//   const { data: listDataQuery } = useQuery(KEY_MYLIST, fetchMyListData, {
//     onSuccess: (data) => setMyListUserData(data),
//   });

//   const { data: reviewDataQuery } = useQuery(KEY_MYREVIEW, fetchMyReviewData, {
//     onSuccess: (data) => setMyReviewData(data),
//   });

//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setIsChecked(e.target.checked);
//   };

//   let titleRole = loginData.role;

//   if (titleRole === 'USER') {
//     titleRole = '회원';
//   } else if (titleRole === 'TRAINER') {
//     titleRole = '트레이너';
//   } else {
//     titleRole = 'No role';
//   }

//   return (
//     <TopBottomBarTemplate _bottomNode={<BottomNavigationBar />}>
//       <div className="h-[100vh] bg-primary-400">
//         <Image
//           src={BackgroundCircle}
//           alt="BackgroundCircle"
//           className="z-5 absolute w-[50%] pt-40"
//         />
//         <div className="relative z-10">
//           <div className="py-16 pl-10 text-white">
//             <p className="pb-2 font-[11px] font-[500]">{titleRole}전용</p>
//             <HealthGenie />
//             {userData.name && (
//               <p className="pt-4 text-[19px] font-[700]">
//                 {userData.name}님 좋은 아침입니다! <br /> 오늘도 건강한 하루
//                 보내봐요 :)
//               </p>
//             )}
//           </div>

//           <Box className="flex h-[100%] flex-col justify-start gap-[13px] rounded-[21px] bg-[#f4f4f4] px-[22px] py-[26px]">
//             <TrainerProfileEdit />
//             <Box className="w-[100%] rounded-[18px] px-[22px] py-[26px] shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
//               <div className="flex justify-between">
//                 <h1 className="text-[16px] font-[700]">
//                   오늘, 정수영 트레이너와 PT가 있습니다.
//                 </h1>
//                 <EmptyCalendar />
//               </div>
//               <p onClick={refreshToken}>갱신</p>
//               <div className="py-2">
//                 <div className="text-gray-4 flex text-[16px]">
//                   <p className="font-[700]">
//                     장소:
//                     <span className="font-[500]"> place</span>
//                   </p>
//                 </div>
//                 <div className="text-gray-4 flex text-[16px]">
//                   <p className="font-[700]">
//                     시간:
//                     <span className="font-[500]"> time</span>
//                   </p>
//                 </div>
//               </div>
//               <div className="flex justify-center gap-4 text-center">
//                 <Box className="w-[100%] rounded-[4px] bg-[#d9d9d9] px-[34px] py-[3px] text-[16px] font-[600] text-white">
//                   PT 취소하기
//                 </Box>
//                 <Box className="w-[100%] rounded-[4px] bg-primary-400 px-[34px] py-[3px] text-[16px] font-[600] text-white">
//                   PT 출석하기
//                 </Box>
//               </div>
//             </Box>
//             <Box className="w-[100%] rounded-[18px] px-[22px] py-[26px] shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
//               <div className="flex justify-between">
//                 <h1 className="text-[19px] font-[700] text-primary-400">
//                   {koreanDay}요일 운동 루틴
//                 </h1>
//                 <div className="flex gap-1 text-center text-[13px] font-[600] text-white">
//                   <Box className="rounded-[4px] bg-primary-400 px-[18px] py-[3px]">
//                     지니 루틴
//                   </Box>
//                   <Box className="rounded-[4px] bg-primary-100 px-[18px] py-[3px]">
//                     나의 루틴
//                   </Box>
//                 </div>
//               </div>
//               <div className="flex flex-col">
//                 <h1 className="text-[19px] font-[700]">하체</h1>
//                 <SquareCheckBox
//                   id="checkbox_labeled"
//                   text="스쿼트"
//                   className="text-[15px]"
//                   onChange={onChange}
//                   checked={isChecked}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <h1 className="text-[19px] font-[700]">어깨</h1>
//                 <SquareCheckBox
//                   id="checkbox"
//                   text="백덱플라이"
//                   className="text-[15px]"
//                   onChange={onChange}
//                   checked={isChecked}
//                 />
//               </div>
//             </Box>
//             <Box className="w-[100%] gap-[13px] rounded-[18px] px-[22px] py-[26px] shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
//               <div className="flex justify-between py-4">
//                 <div className="flex h-[14px] flex-col justify-end bg-primary-200">
//                   <h1 className="text-[19px] font-[700] text-black">PT 일지</h1>
//                 </div>
//                 <button
//                   className="-mt-2 flex gap-1"
//                   onClick={() => router.push('/pt-log')}
//                 >
//                   <h1 className="text-[15px] font-[500] text-[#979797] underline">
//                     전체보기
//                   </h1>
//                 </button>
//               </div>
//               {listDataQuery && listDataQuery.length > 0 ? (
//                 <Box className="my-2 flex rounded-[8px] bg-gray-100">
//                   <Box className="h-[70px] w-[70px]" />
//                   <div className="flex w-[100%] flex-col px-4">
//                     <p className="text-[13px] font-[500] text-gray-300">
//                       {myListData.date && (
//                         <>
//                           <p className="text-[13px] font-[500] text-gray-300">
//                             {myListData.date}
//                           </p>
//                         </>
//                       )}
//                     </p>
//                     <h2 className="pb-2 pt-1 text-[15px] font-[500] text-black">
//                       {myListData.content}
//                     </h2>
//                     <div className="flex justify-between">
//                       <h3 className="text-[13px] font-[500] text-gray-300">
//                         {myListData.trainerNickName}
//                       </h3>
//                       <h3 className="text-[13px] font-[500] text-primary-400 underline">
//                         자세히 보기
//                       </h3>
//                     </div>
//                   </div>
//                 </Box>
//               ) : (
//                 <p className="flex items-center justify-center font-noto text-[17px] font-semibold text-[#979797]">
//                   해당 데이터가 없습니다.
//                 </p>
//               )}
//             </Box>
//             <Box className="mb-[90px] w-[100%] rounded-[18px] px-[22px] py-[26px] shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
//               <div className="flex justify-between py-4">
//                 <div className="flex h-[14px] flex-col justify-end bg-primary-200">
//                   <h1 className="text-[19px] font-[700] text-black">
//                     수업 리뷰
//                   </h1>
//                 </div>
//                 <button
//                   className="-mt-2 flex gap-1"
//                   onClick={() => router.push('/trainer-review')}
//                 >
//                   <h1 className="text-[15px] font-[500] text-[#979797] underline">
//                     전체보기
//                   </h1>
//                 </button>
//               </div>
//               {reviewDataQuery && reviewDataQuery.length > 0 ? (
//                 <Box className="flex flex-col rounded-[21px] font-[500] shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
//                   <h1 className="text-[15px]">{myReviewData.trainerName}</h1>
//                   <div className="flex py-2">
//                     {myReviewData.reviewScore}
//                     <FillReviewStar />
//                     <FillReviewStar />
//                     <FillReviewStar />
//                     <EmptyReviewStar />
//                     <EmptyReviewStar />
//                   </div>
//                   <p className="text-[13px]">{myReviewData.content}</p>
//                   <p className="text-end text-[11px] text-[#c1c1c1]">
//                     {myReviewData.createdAt}
//                   </p>
//                 </Box>
//               ) : (
//                 <p className="flex items-center justify-center font-noto text-[17px] font-semibold text-[#979797]">
//                   해당 데이터가 없습니다.
//                 </p>
//               )}
//             </Box>
//           </Box>
//         </div>
//       </div>
//     </TopBottomBarTemplate>
//   );
// };

// export default Page;

'use client';
import { userState } from '@/recoil/state';
import SearchTrainer from '@/svgs/SelectTrainer.svg';
import SearchUser from '@/svgs/SelectUser.svg';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { KEY_ROLE } from '@/utils/queryKey';
import { getCookie } from 'cookies-next';

type Props = {};

const TrainerSelectPage = () => {
  const accessToken = localStorage.getItem('accessToken');
  const router = useRouter();
  const [user, setUser] = useRecoilState(userState);
  const refreshToken = getCookie('refresh');
  console.log('Refresh token:', refreshToken);

  const handleUser = async (role: string) => {
    const res = await axios.patch(
      `https://서비스.한국/users/role`,
      { role: role },
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          Authorization: accessToken,
        },
      }
    );

    return res.data.data;
  };

  const fetchData = async (role: string) => {
    try {
      const data = await handleUser(role);
      setUser(data);
      router.push('/trainer-select');
      // router.push('/health-management');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const { data } = useQuery(KEY_ROLE, () => fetchData(user.role), {
    onSuccess: (data) => console.log(data),
  });

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-[332px] flex-col items-center gap-5">
        <span className="font-noto text-xl font-bold text-[#4B76F4]">
          해당 부분을 선택해주세요!
        </span>
        <div className="flex w-full gap-7">
          <div
            onClick={() => {
              fetchData('USER');
            }}
            className="flex h-[204px] flex-1 flex-col items-center justify-center rounded-[20px] bg-primary-400"
          >
            <SearchUser />
            <span className="font-noto text-xl font-thin text-white">
              {refreshToken}일반회원
            </span>
          </div>
          <div
            onClick={() => {
              fetchData('TRAINER');
            }}
            className="flex h-[204px] flex-1 flex-col items-center justify-center rounded-[20px] bg-primary-400"
          >
            <SearchTrainer />
            <span className="font-noto text-xl font-thin text-white">
              트레이너
            </span>
          </div>
        </div>
        <div className="font-noto text-sm text-primary-400">
          선택 후 로그인이 진행됩니다.
        </div>
      </div>
    </div>
  );
};

export default TrainerSelectPage;
