'use client';
import { useRouter } from 'next/navigation';
import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import Box from '@/components/Box/Box';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import FillReviewStar from '../health-management/icon/FillReviewStar.svg';
import EmptyReviewStar from '../health-management/icon/EmptyReviewStar.svg';

const Page = () => {
  const router = useRouter();
  return (
    <>
      <TopBottomBarTemplate
        _topNode={
          <div className="h-full w-full bg-[#FDFDFF] pt-16 shadow-[0_6px_6px_-6px_rgba(0,0,0,0.13)]">
            <div className="grid justify-items-center">
              <div className="flex h-[14px] w-[142px] flex-col justify-end bg-primary-200">
                <h1 className="text-center text-[19px] font-[700] text-black">
                  PT 일지 전체보기
                </h1>
              </div>
            </div>
          </div>
        }
        _bottomNode={<BottomNavigationBar />}
        _contentDivProps={{ className: 'bg-[#f3f3f3]' }}
      >
        <div className="flex h-[100vh] w-full flex-col px-24 pt-6">
          <div className="flex">
            <h1 className="text-[21px] font-bold text-black">김경한 회원님</h1>
            <p className="align-center flex items-center pl-[10px] text-[11px] font-medium text-primary-100">
              작성한 후기 3개
            </p>
          </div>
          <Box className="my-2 flex rounded-[8px] bg-white shadow-[0_10px_10px_-10px_rgba(0,0,0,0.07)]">
            <div className="flex w-[100%] flex-col px-4">
              <div className="flex justify-between">
                <h2 className=" pt-1 text-[15px] font-[500] text-black">
                  정수영 트레이너
                </h2>
                <button onClick={() => router.push('/trainer-review-edit')}>
                  <h3 className="text-[13px] font-[500] text-primary-100">
                    수정하기
                  </h3>
                </button>
              </div>
              <div className="flex gap-1 py-2">
                <FillReviewStar />
                <FillReviewStar />
                <FillReviewStar />
                <FillReviewStar />
                <EmptyReviewStar />
              </div>
              <h3 className="text-[13px] font-[500] text-black">
                오늘도 너무 친절하게 잘 알려주셔서, 감사했습니다. 하지만
                트레이너님 팔뚝을 볼때 마다 너무 무서워서 헬스에 집중하기가
                어려웠네요 ㅠ 그래서 별점 1개 깎았습니다.
              </h3>
              <p className="flex justify-end text-[11px] font-[500] text-gray-300">
                2023-09-11
              </p>
            </div>
          </Box>
        </div>
      </TopBottomBarTemplate>
    </>
  );
};

export default Page;
