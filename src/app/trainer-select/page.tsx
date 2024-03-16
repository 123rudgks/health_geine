'use client';
import { userState } from '@/recoil/state';
import SearchTrainer from '@/svgs/SelectTrainer.svg';
import SearchUser from '@/svgs/SelectUser.svg';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { KEY_ROLE } from '@/utils/queryKey';

type Props = {};

const TrainerSelectPage = () => {
  const accessToken = localStorage.getItem('accessToken');
  const router = useRouter();
  const [user, setUser] = useRecoilState(userState);

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
      // router.push('/trainer-list');
      router.push('/health-management');
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
              일반회원
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
