'use client';
import { useRouter } from 'next/navigation';
import Box from '@/components/Box/Box';
import Like from '@/svgs/FillLike.svg';
import FillChat from '@/svgs/FillChatting.svg';
import Fab from '@/components/FAB/Fab';

const CommunityListItem = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Box className="mb-4 flex w-[328px] flex-col justify-center gap-2 rounded-[6px] bg-[#f3f3f3] p-2 font-noto">
          <h1 className="text-[13px] font-semibold text-black">
            다이어트 방법 공유 ㅠㅠ
          </h1>
          <p className="font-regular text-[11px] text-black">
            제대로 다이어트 좀 시작해보고 싶은데 방법을 몰라서 시작도 못하고
            있다.. 수분 빼는 다이어트든.. 아무렴 상관없으니까 아무나 나 좀...
          </p>
          <div className="font-regular flex items-center justify-between font-noto text-[11px] text-[#c1c1c1]">
            <p>23.09.11 | 정수영</p>
            <div className="flex gap-2">
              <div className="flex gap-1">
                <FillChat width={11} height={11} />
                <p className="font-regular font-noto text-[7px] text-primary-400">
                  12
                </p>
              </div>
              <div className="flex gap-1">
                <Like />
                <p className="font-regular font-noto text-[7px] text-[#F44B4B]">
                  15
                </p>
              </div>
            </div>
          </div>
        </Box>
        <Fab
          _imageName="edit"
          _onClick={() => {
            router.push('/write-community');
          }}
        />
      </div>
    </>
  );
};
export default CommunityListItem;
