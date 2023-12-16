'use client';

import MainLogo from '@/svgs/MainLogo.svg';

interface Props {}
const page = (props: Props) => {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center gap-6">
      <MainLogo />
      <h1 className="font-hiragino text-[28.88px] font-[800] text-primary-400">
        Health Genie
      </h1>
    </div>
  );
};
export default page;
