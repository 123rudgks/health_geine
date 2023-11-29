'use client';
import RatingStar from '@/svgs/RatingStar.svg';
type Props = {};

const TrainerReviewTab = (props: Props) => {
  return (
    <div className="flex h-full flex-col gap-7 overflow-auto">
      {Array.from({ length: 4 }, (_, index) => index + 1).map((item) => (
        <div className="flex flex-col gap-[3px]" key={item}>
          <div className="font-sans text-[15px]">김경한 회원</div>
          <div className="flex gap-[2px]">
            {Array.from({ length: 5 }, (_, index) => index + 1).map((item) => (
              <RatingStar key={item} />
            ))}
          </div>
          <div className="font-sans text-[13px]">
            오늘도 너무 친절하게 잘 알려주셔서, 감사했습니다. 하지만 트레이너님
            팔뚝을 볼때 마다 너무 무서워서 헬스에 집중하기가 어려웠네요 ㅠ
            그래서 별점 1개 깎았습니다.
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainerReviewTab;
