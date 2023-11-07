'use client';

import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import BasicInput from '@/components/Input/BasicInput';
import { setCookie } from 'cookies-next';
import Link from 'next/link';

import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Home() {
  const [inputValue, setInputValue] = useState<string>('');
  const [isTrainerMode, setIsTrainerMode] = useState<boolean>(false);
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
        <BottomNavigationBar />
        <BasicInput
          _inputProps={{ placeholder: '인증 코드를 입력하세요' }}
          _state="error"
          _rightNode={<div>인증코드</div>}
        />
      </div>{' '}
    </main>
  );
}
