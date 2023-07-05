'use client';
import Button from '@/components/Button/Button';
import classNames from 'classnames';
import { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState<string>('');
  return (
    <main>
      <div className="container mx-auto flex h-screen flex-col justify-center">
        <Button
          size="large"
          font="bold"
          color="white"
          shape="rounded"
          background="primary-400"
          impact="shadow-primary-500"
          ring="primary-400"
        >
          완료
        </Button>
      </div>
    </main>
  );
}
