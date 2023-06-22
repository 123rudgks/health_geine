'use client';
import { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState<string>('');
  return (
    <main>
      <div className="container mx-auto flex h-screen flex-col justify-center"></div>
    </main>
  );
}
