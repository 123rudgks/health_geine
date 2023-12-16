import ChatProfile from '@/components/pages/chatting/ChatProfile';
import React from 'react';

type Props = {
  _profileSrc: string;
  _name: string;
  children?: React.ReactNode;
};

const OtherChatBox = ({ children, _profileSrc, _name }: Props) => {
  return (
    <div className="flex  gap-3 ">
      <ChatProfile _src={_profileSrc} _size="small" className="mt-1" />
      <div className="flex flex-col gap-2">
        <div className="font-noto text-xs">{_name}</div>
        {children}
      </div>
    </div>
  );
};

export default OtherChatBox;
