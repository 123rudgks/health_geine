'use client';
import Box from '@/components/Box/Box';
import { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState<string>('');
  return (
    <main>
      <div className="container mx-auto flex h-screen flex-col justify-center">
        {/* <FormInput
          _value={inputValue}
          _setValue={(value) => setInputValue(value)}
          _onCancel={() => setInputValue('')}
        /> */}
        <Box ring={'primary-100'}>sdfsdf</Box>
      </div>
    </main>
  );
}
