'use client';

import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import Calendar from '@/components/Calendar/Calendar';
import BasicTextarea from '@/components/Input/BasicTextarea';
import { parseDate } from '@internationalized/date';
import { setCookie } from 'cookies-next';
import Link from 'next/link';

import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Home() {
  const [inputValue, setInputValue] = useState<string>('');
  const [isTrainerMode, setIsTrainerMode] = useState<boolean>(false);
  const [calendarValue, setCalendarValue] = useState(parseDate('2020-02-03'));
  useEffect(() => {
    isTrainerMode
      ? setCookie('isTrainerMode', 'true')
      : setCookie('isTrainerMode', 'false');
  }, [isTrainerMode]);

  return (
    <main>
      <div className="flex flex-col">
        <div
          className={twMerge(
            'relative flex h-4 w-8 items-center rounded-full  ring-1 ring-gray-500',
            isTrainerMode ? 'flex-row-reverse bg-black' : ' bg-gray-500'
          )}
          onClick={() => setIsTrainerMode((prev) => !prev)}
        >
          <div className="top-0 h-3 w-3  rounded-full  bg-white " />
        </div>
        <div>{isTrainerMode ? '트레이너' : '유저'}</div>
        <Link href={'/my-page'}>마이페이지</Link>
        <Link href={'/pop-up'}>팝업</Link>
        <Link href={'/write-health-state'}>건강상태작성</Link>
        <Link href={'/community'}>커뮤니티</Link>
        <Link href={'/writing-post'}>글쓰기</Link>
        <Link href={'/custom-request'}>나만의 요청서 작성</Link>
        <Link href={'/health-profile'}>건강상태 보기</Link>
        <Link href={'/login'}>로그인</Link>
        <Link href={'/trainer-list'}>트레이너 페이지</Link>
        <Link href={'/trainer-detail'}>트레이너 상세 페이지</Link>
        <BottomNavigationBar />
        <div className="bg-primary-400 p-8">
          <Calendar />
        </div>

        <BasicTextarea placeholder="sdf" />
      </div>
    </main>
  );
}
