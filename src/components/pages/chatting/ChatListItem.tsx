import ChatProfile from '@/components/pages/chatting/ChatProfile';

type Props = {};

const ChatListItem = (props: Props) => {
  return (
    <div className=" flex gap-[15px] py-[13px]">
      <ChatProfile _src="" _size="large" />
      <div className="relative flex flex-1 flex-col justify-center">
        <div className="flex items-baseline gap-2">
          <div className="font-noto text-[15px] font-bold">정수영 트레이너</div>
          <div className="font-noto text-[8px] text-[#8E8E8E]">1시간 전</div>
        </div>
        <div className="font-noto text-[13px]">오늘도 좋은 아침 입니다!</div>
        <span className="absolute right-0 top-0 flex h-[25px] w-[25px] translate-y-full items-center justify-center rounded-full bg-primary-400 text-xs font-bold text-white">
          1
        </span>
      </div>
    </div>
  );
};

export default ChatListItem;
