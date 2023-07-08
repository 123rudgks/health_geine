'use client';
import FormInput from '@/components/TextField/FormInput/FormInput';
import { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState<string>('');
  return (
    <main>
      <div className="container mx-auto flex h-screen flex-col justify-center">
        <div className="w-15">
          <FormInput
            _value={inputValue}
            _setValue={(value) => setInputValue(value)}
            _onCancel={() => {
              setInputValue('');
            }}
          />
        </div>
      </div>
    </main>
  );
}
