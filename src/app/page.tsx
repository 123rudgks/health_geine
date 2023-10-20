'use client';

import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import Link from 'next/link';

import { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState<string>('');
  return (
    <main>
      <div className="flex flex-col">
        <Link href={'/my-page'}>마이페이지</Link>
        <Link href={'/pop-up'}>팝업</Link>
        <Link href={'/write-health-state'}>건강상태작성</Link>
        <Link href={'/community'}>커뮤니티</Link>
        <Link href={'/writing-post'}>글쓰기</Link>
        <Link href={'/custom-request'}>나만의 요청서 작성</Link>
        <Link href={'/health-profile'}>건강상태 보기</Link>
        <Link href={'/login'}>로그인</Link>
        <BottomNavigationBar />
      </div>{' '}
    </main>
  );
}
