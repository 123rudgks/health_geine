'use client';
import { useState } from 'react';
import Layout from './layout';

export interface Question {
  id: string;
  desc: string;
  // percentage?: number;
}
const questions: Question[] = [
  {
    id: 'purpose',
    desc: 'PT의 목적은 무엇인가요?',
    // percentage: 33,
  },
  {
    id: 'day',
    desc: 'PT 가능 요일을 선택해주세요',
    // percentage: 70,
  },
  {
    id: 'considerations',
    desc: '추가적인 고려사항을 적어주세요!',
    // percentage: 100,
  },
];
const Page: React.FC = () => {
  const [page, setPage] = useState('purpose'); // 현재 보여질 페이지

  return (
    <>
      <Layout
        id="purpose"
        dataset={questions.filter((item) => item.id === page)}
        // percentage={currentQuestion.percentage}
      />
      {/* )} */}
    </>
  );
};
export default Page;
