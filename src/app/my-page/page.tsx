'use client';
import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import Box from '@/components/Box/Box';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import NavArrowRight from '@/svgs/NavArrowRight.svg';
import Back from '@/svgs/BackArrowWhite.svg';
import Alert from '@/svgs/Alert.svg';
import { useRouter } from 'next/navigation';
import { userState } from '@/recoil/state';
import { useRecoilState, useRecoilValue } from 'recoil';
import Link from 'next/link';
import { BASE_URL } from '@/utils/routePath';
import axios from 'axios';

interface Props {}

const Page = (props: Props) => {
  const router = useRouter();
  const accessToken = localStorage.getItem('accessToken');
  const oauthAccessToken = localStorage.getItem('oauthAccessToken');
  const [userData, setUserData] = useRecoilState(userState);

  const withdraw = async () => {
    alert('정말 탈퇴하시겠습니까?');

    try {
      const response = await axios.delete(`https://${BASE_URL}/withdraw`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          OAuthAccessToken: `${oauthAccessToken}`,
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
      localStorage.clear();
      router.push('/');
      return response.data.data;
    } catch (error) {
      console.error('회원 탈퇴 실패:', error);
    }
  };

  const logout = () => {
    alert('로그아웃 하시겠습니까?');
    localStorage.clear();
    router.push('/');
  };

  return (
    <div>
      <TopBottomBarTemplate
        _topNode={
          <div>
            <div className="flex justify-between px-4 pb-10 pt-16">
              <Back onClick={() => router.push('/health-management')} />
              <div className="flex justify-center text-[19px] font-[600] text-white">
                마이페이지
              </div>
              <Alert />
            </div>
            <div className="flex items-center">
              <div className="ml-10 h-[87.16px] w-[87.16px] rounded-full bg-[#f0f0f0]" />
              <div className="flex flex-col justify-start pl-6">
                <h1 className="font-noto text-[18.07px] font-semibold text-white">
                  {userData.name}
                </h1>
                <h2 className="font-noto text-[13.82px] font-light text-white">
                  신규회원
                </h2>
                <div className="flex gap-4 pt-2">
                  <Box
                    onClick={() => router.push('/health-profile')}
                    className="flex h-[20.53px] w-[92.19px] items-center justify-center rounded-full bg-white text-center font-noto text-[13.17px] font-light text-primary-400 hover:cursor-pointer"
                  >
                    프로필 편집
                  </Box>
                  <Box
                    onClick={logout}
                    className="flex h-[20.53px] w-[92.19px] items-center justify-center rounded-full bg-primary-100 text-center font-noto text-[13.17px] font-light text-white hover:cursor-pointer"
                  >
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
      <div
        onClick={withdraw}
        className="flex h-[100px] items-center justify-between border-b-2 border-[#eeeeee] bg-white px-10"
      >
        <h1 className="font-noto text-[15px] font-bold text-black">
          회원 탈퇴하기
        </h1>
        <NavArrowRight />
      </div>
    </div>
  );
};

export default Page;
