'use client';
import { useRouter } from 'next/navigation';
import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import Box from '@/components/Box/Box';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import FillReviewStar from '../health-management/icon/FillReviewStar.svg';
import EmptyReviewStar from '../health-management/icon/EmptyReviewStar.svg';
import Back from '../../svgs/Back.svg';
import Button from '@/components/Button/Button';

const Page = () => {
  const router = useRouter();
  return (
    <>
      <TopBottomBarTemplate
        _topNode={
          <div className="h-full w-full bg-[#FDFDFF] pt-16 shadow-[0_6px_6px_-6px_rgba(0,0,0,0.13)]">
            <div className="flex justify-between pl-4">
              <button onClick={() => router.back()}>
                <Back />
              </button>
              <h1 className="text-center text-[19px] font-[700] text-black">
                수업 리뷰 작성하기
              </h1>
              <div />
            </div>
          </div>
        }
        _bottomNode={<BottomNavigationBar />}
        _contentDivProps={{ className: 'bg-white' }}
      >
        <div className="flex h-[100vh] w-full flex-col gap-2 px-16 pt-6">
          <p className="flex justify-start text-[11px] font-[500] text-gray-300">
            먼저 입력해주세요!
          </p>
          <div className="flex justify-between">
            <Button
              color="white"
              background="primary-200"
              ring="primary-200"
              className="flex h-[31px] w-[170px] items-center justify-center rounded-[6px] text-[14px] font-[600]"
            >
              중간에 그만두시나요?
            </Button>
            <Button
              color="white"
              background="primary-400"
              ring="primary-400"
              className="flex h-[31px] w-[170px] items-center justify-center rounded-[6px] text-[14px] font-[600]"
            >
              PT 진행을 완료하였나요?
            </Button>
          </div>

          <Box className="my-2 flex rounded-[8px] border-2 border-primary-400 bg-white">
            <div className="flex w-[100%] flex-col px-4">
              <h3 className="text-[13px] font-[500] text-black">
                오늘도 너무 친절하게 잘 알려주셔서, 감사했습니다. 하지만
                트레이너님 팔뚝을 볼때 마다 너무 무서워서 헬스에 집중하기가
                어려웠네요 ㅠ 그래서 별점 1개 깎았습니다.
              </h3>
            </div>
          </Box>
          <Box className="flex flex-col justify-start bg-gray-100">
            <h1 className="text-[15px] font-[700] text-black">트레이너</h1>
            <h2 className="text-[13px] font-[400] text-gray-300">
              정수영 트레이너
            </h2>
          </Box>
          <Box className="flex flex-col justify-start bg-gray-100">
            <h1 className="text-[15px] font-[700] text-black">평점</h1>
            <div className="flex items-center gap-2">
              <p className="text-[13px] font-[400] text-gray-300">4점/5점</p>
              <div className="flex gap-1 py-2">
                <FillReviewStar />
                <FillReviewStar />
                <FillReviewStar />
                <FillReviewStar />
                <EmptyReviewStar />
              </div>
            </div>
          </Box>
          <Button
            color="white"
            background="primary-400"
            ring="primary-400"
            className="flex h-[50px] w-full items-center justify-center rounded-[6px] text-[14px] font-[600]"
          >
            완료
          </Button>
        </div>
      </TopBottomBarTemplate>
    </>
  );
};

export default Page;
