'use client';
import { useRouter } from 'next/navigation';
import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import Box from '@/components/Box/Box';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import EmptyReviewStar from '../health-management/icon/EmptyReviewStar.svg';
import Back from '../../svgs/Back.svg';
import Button from '@/components/Button/Button';
import BasicTextArea from '@/components/Input/BasicTextarea';

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
              background="primary-200"
              ring="primary-200"
              className="flex h-[31px] w-[170px] items-center justify-center rounded-[6px] text-[14px] font-[600]"
            >
              PT 진행을 완료하였나요?
            </Button>
          </div>

          <div className="my-2">
            <BasicTextArea
              className="px-4 text-[13px] font-[500] placeholder:text-[#000] "
              placeholder="내용을 입력해주세요."
            />
          </div>
          <Box className="flex flex-col justify-start bg-gray-100">
            <h1 className="text-[15px] font-[700] text-black">트레이너</h1>
            <h2 className="text-[13px] font-[400] text-gray-300">
              정수영 트레이너
            </h2>
          </Box>
          <Box className="flex flex-col justify-start bg-gray-100">
            <h1 className="text-[15px] font-[700] text-black">평점</h1>
            <div className="flex items-center gap-2">
              <p className="text-[13px] font-[400] text-gray-300">__점/5점</p>
              <div className="flex gap-1 py-2">
                <EmptyReviewStar />
                <EmptyReviewStar />
                <EmptyReviewStar />
                <EmptyReviewStar />
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
