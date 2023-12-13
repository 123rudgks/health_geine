'use client';
import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import Box from '@/components/Box/Box';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import NavArrowRight from '@/svgs/NavArrowRight.svg';
import Back from '@/svgs/BackArrowWhite.svg';
import Alert from '@/svgs/Alert.svg';
import { useRouter } from 'next/navigation';

interface Props {}

const page = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      <TopBottomBarTemplate
        _topNode={
          <div>
            <div className="flex justify-between px-4 pb-10 pt-16">
              <Back onClick={() => router.push('/')} />
              <div className="flex justify-center text-[19px] font-[600] text-white">
                마이페이지
              </div>
              <Alert />
            </div>
            <div className="flex items-center">
              <div className="ml-10 h-[87.16px] w-[87.16px] rounded-full bg-[#f0f0f0]" />
              <div className="flex flex-col justify-start pl-6">
                <h1 className="font-noto text-[18.07px] font-semibold text-white">
                  헬스지니
                </h1>
                <h2 className="font-noto text-[13.82px] font-light text-white">
                  신규회원
                </h2>
                <div className="flex gap-4 pt-2">
                  <Box className="flex h-[20.53px] w-[92.19px] items-center justify-center rounded-full bg-white text-center font-noto text-[13.17px] font-light text-primary-400">
                    프로필 편집
                  </Box>
                  <Box className="flex h-[20.53px] w-[92.19px] items-center justify-center rounded-full bg-primary-100 text-center font-noto text-[13.17px] font-light text-white">
                    로그아웃
                  </Box>
                </div>
              </div>
            </div>
          </div>
        }
        _bottomNode={<BottomNavigationBar />}
        _contentDivProps={{ className: 'bg-primary-400 h-[254px]' }}
      />
      <div className="flex h-[100px] items-center justify-between border-b-2 border-[#eeeeee] bg-white px-10">
        <h1 className="font-noto text-[15px] font-bold text-black">
          나의 작성글 보기
        </h1>
        <NavArrowRight />
      </div>
      <div className="flex h-[100px] items-center justify-between border-b-2 border-[#eeeeee] bg-white px-10">
        <h1 className="font-noto text-[15px] font-bold text-black">
          칼로리 계산기
        </h1>
        <NavArrowRight />
      </div>
      <div className="flex h-[100px] items-center justify-between border-b-2 border-[#eeeeee] bg-white px-10">
        <h1 className="font-noto text-[15px] font-bold text-black">
          회원 탈퇴하기
        </h1>
        <NavArrowRight />
      </div>
    </div>
  );
};

export default page;
