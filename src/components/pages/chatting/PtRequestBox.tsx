import Button from '@/components/Button/Button';

type Props = {};

const PtRequestBox = (props: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className=" w-[222px]  gap-1 rounded-md border-2 border-primary-400 bg-white  font-noto text-[13px]">
        <div className="p-3">
          <div className="font-semibold">상세내용</div>
          <li>날짜: 10월 17일(화)</li>
          <li>시간: 17:00</li>
          <li>장소: 경북대 체육관</li>
          <li>내용: 다음 PT 17일 괜찮으세요?</li>
        </div>

        <div className=" border-t-2 border-primary-400 py-1 text-center font-noto text-base font-bold text-primary-400">
          PT 일정을 잡았어요!
        </div>
      </div>
      <div className="flex justify-between gap-2">
        <Button
          className=" flex-1 rounded-md text-sm font-semibold drop-shadow-sm"
          ring={'none'}
          color={'primary-400'}
          background={'white'}
        >
          거절하기
        </Button>
        <Button
          className=" flex-1 rounded-md text-sm font-semibold drop-shadow-sm"
          ring={'none'}
          color={'white'}
          background={'primary-400'}
        >
          수락하기
        </Button>
      </div>
    </div>
  );
};

export default PtRequestBox;
