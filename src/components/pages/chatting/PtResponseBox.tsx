'use client';
import PtAccept from '@/svgs/PtAccept.svg';
import PtDeny from '@/svgs/PtDeny.svg';

type Props = {
  _response: 'accept' | 'deny';
};

const PtResponseBox = ({ _response }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className=" w-[222px]  gap-1 rounded-md border-2 border-primary-400 bg-white  font-noto text-[13px]">
        <div className="flex flex-col items-center gap-2 py-4">
          {_response === 'deny' ? <PtDeny /> : <PtAccept />}

          <div className="text-sm font-bold">
            {_response === 'deny' ? 'PT를 거절했어요!' : 'PT를 수락했어요!'}
          </div>
          <div className="text-center text-xs">
            {_response === 'deny' ? (
              <>
                당분간은 어려워요..ㅠ
                <br />
                나중에 다시 맞춰볼래요!
              </>
            ) : (
              <>
                까먹지 않게 캘린더에
                <br />
                일정을 등록해보아요!
              </>
            )}
          </div>
        </div>
      </div>
      {_response === 'accept' && (
        <div className="rounded-md bg-primary-400 py-1 text-center font-noto text-xs font-bold text-white">
          내 일정 관리로 이동하기
        </div>
      )}
    </div>
  );
};

export default PtResponseBox;
