'use client';
import SearchTrainer from '@/svgs/SelectTrainer.svg';
import SearchUser from '@/svgs/SelectUser.svg';
type Props = {};

const TrainerSelectPage = (props: Props) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-[332px] flex-col items-center gap-5">
        <span className="font-noto text-xl font-bold text-[#4B76F4]">
          해당 부분을 선택해주세요!
        </span>
        <div className="flex w-full gap-7">
          <div className="flex h-[204px] flex-1 flex-col items-center justify-center rounded-[20px] bg-primary-400">
            <SearchUser />
            <span className="font-noto text-xl font-thin text-white">
              일반회원
            </span>
          </div>
          <div className="flex h-[204px] flex-1 flex-col items-center justify-center rounded-[20px] bg-primary-400">
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
