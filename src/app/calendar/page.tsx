'use client';
import Image from 'next/image';
import HealthGenie from '@/svgs/HealthGenieTitle.svg';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
type Props = {};

const Page = (props: Props) => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="h-[100vh] bg-primary-400 ">
      <div className="relative z-10">
        <div className="py-16 pl-10 text-white">
          <p className="font-[11px] font-[500]">캘린더 페이지</p>
          <HealthGenie />
          <p className="text-[19px] font-[700]">
            지니님 좋은 아침입니다!
            <br /> 오늘도 건강한 하루 보내봐요 :)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
