'use client';

import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import Button from '@/components/Button/Button';
import BasicInput from '@/components/Input/BasicInput';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import FillHealth from '@/svgs/FillHealth.svg';

interface Props {}
const page = (props: Props) => {
  return (
    <div className="flex h-[100vh] flex-col justify-center px-6">
      <p className="font-regular justify-start font-noto text-[14px] text-primary-400 underline">
        다음에 다시 인증할래요!
      </p>
      <div className="py-[50px]">
        <div className="mb-4 flex">
          <h1 className="justify-start font-noto text-[25px] font-bold text-primary-400">
            이메일을 인증해주세요!
          </h1>
          <div className="-mt-4">
            <FillHealth />
          </div>
        </div>
        <p className="mb-1 flex justify-end font-noto text-[10px] font-light text-[#c1c1c1]">
          학교 이메일을 정확히 기재해주세요.
        </p>
        <BasicInput _state="default" />
        <div className="flex justify-end">
          <Button
            ring="none"
            background="primary-100"
            color="white"
            className="my-4 h-[24px] w-[111px] rounded-[4px] font-noto text-[13px] font-semibold"
          >
            인증 코드 전송
          </Button>
        </div>
        <BasicInput _state="default" />
        <div className="flex justify-end">
          <Button
            ring="none"
            background="primary-100"
            color="white"
            className="my-4 h-[24px] w-[111px] rounded-[4px] font-noto text-[13px] font-semibold"
          >
            인증 확인 하기
          </Button>
        </div>
      </div>
      <hr color="#f3f3f3" />
      <div>
        <h1 className="my-4 font-noto text-[21px] font-bold text-black">
          이메일이 오지 않아요!
        </h1>
        <p className="font-regular font-noto text-[13px] text-black">
          이메일 수신까지 일정 시간이 소요될 수 있습니다. 오랜시간이 지난 후에도
          도착하지 않는다면, 아래 사항을 확인해주세요.
          <br />
          <br />
          <b>·</b> 이메일 주소가 맞는지 확인 (예: example@knu.ac.kr)
          <br />
          <b>·</b> 스팸 메일함, 스팸 설정, 남은 용량 등 확인
          <br />
          <b>·</b> 다른 개인 이메일로 학교 이메일에 메일을 발송하여, 정상적으로
          수신 되는지 확인
        </p>
      </div>
    </div>
  );
};
export default page;
