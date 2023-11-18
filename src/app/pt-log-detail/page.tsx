'use client';

import { useRouter } from 'next/navigation';
import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import Box from '@/components/Box/Box';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import Mask from '@/svgs/Mask.svg';
import Button from '@/components/Button/Button';

type Props = {};

const Page = (props: Props) => {
  const router = useRouter();
  return (
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
      _contentDivProps={{ className: 'bg-white' }}
    >
      <div className="flex h-[100vh] w-full flex-col px-8 pt-6">
        <h1 className="text-[21px] font-bold text-black">
          회원님 오늘 PT 피드백입니다!
        </h1>
        <div className="py-2">
          <div className="flex gap-6">
            <h1 className="align-center flex justify-start text-[15px] font-medium text-primary-100">
              작성일
            </h1>
            <h1 className="align-center flex justify-start text-[15px] font-medium text-primary-400">
              2023.09.11
            </h1>
          </div>
          <div className="flex gap-6">
            <h1 className="align-center flex justify-start text-[15px] font-medium text-primary-100">
              작성자
            </h1>
            <h1 className="align-center flex justify-start text-[15px] font-medium text-primary-400">
              정수영 트레이너
            </h1>
          </div>
        </div>
        <div className="flex justify-center py-2">
          <Mask />
        </div>
        <Box className="my-2 flex rounded-[8px] bg-[#f3f3f3]">
          <div className="flex w-[100%] flex-col px-4">
            <h2 className="py-2 font-noto text-[15px] font-medium tracking-widest text-black">
              회원님! 정수영 트레이너 입니다! 오늘 PT는 어떠셨나요? 첫 PT라
              걱정도 많으셨을텐데 잘 따라와 주셔서 감사합니다 ㅎㅎ 개인 운동
              방식이나 식단 등 궁금한 점들이 생기면 저에게 채팅으로 편하게
              물어보셔도 됩니다! 저도 일정있는 시간 제외하고 최대한 빠르게 답장
              드릴게요~ 저희 이제 6개월 동안 같이 운동을 하게 될텐데 사진 속
              몸을 가질 수 있도록 열심히 해봅시다!! 그럼 다음주에 뵙겠습니다 ~
              :)
            </h2>
          </div>
        </Box>
        <div className="flex justify-end pt-2">
          <Button
            ring="primary-400"
            color="white"
            background="primary-400"
            className="rounded-[4px] px-6 font-noto text-[16px] font-black font-semibold"
            onClick={() => router.push('/pt-log')}
          >
            목록으로 이동
          </Button>
        </div>
      </div>
    </TopBottomBarTemplate>
  );
};

export default Page;
