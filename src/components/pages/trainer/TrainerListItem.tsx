import Image from 'next/image';

type Props = {};

const TrainerListItem = (props: Props) => {
  return (
    <div className="flex gap-[14px] border-b border-[#D9D9D9] pb-5 last:border-none">
      <div className="relative h-[110px] w-[110px] basis-[110px] overflow-hidden rounded-xl">
        <Image src={'https://picsum.photos/200'} alt="trainer image" fill />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-noto text-[17px] font-bold">박예빈</span>
          <span>21</span>
        </div>
        <div className="font-noto text-[13px]">
          체계적이고 전문적으로 관리하고 지도해드리겠습니다.
        </div>
        <div className="flex items-center gap-1">
          <div></div>
          <div className="font-noto text-[12px]">
            <span className="mr-1 font-bold">소속:</span>
            <span>경북 대학교</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div></div>
          <div className="font-noto text-[12px]">
            <span className="mr-1 font-bold">리뷰 평점:</span>
            <span>4.5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerListItem;
