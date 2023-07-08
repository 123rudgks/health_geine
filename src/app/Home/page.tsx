'use client';

import Box from '@/components/Box/Box';
import { useState } from 'react';

export default function HomePage() {
  const [value, setValue] = useState<string>('');
  return (
    <div>
      <Box ring={'primary-400'} className="h-[100px]">
        다혜 정처기 합격기원
      </Box>
    </div>
  );
}
