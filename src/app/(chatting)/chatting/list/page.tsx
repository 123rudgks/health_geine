'use client';
import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import ChatListItem from '@/components/pages/chatting/ChatListItem';
import BackSpaceArrow from '@/svgs/BackSpaceArrow.svg';

type Props = {};

const ChattingList = (props: Props) => {
  return (
    <TopBottomBarTemplate
      _topNode={
        <div className="relative flex h-full w-full items-center bg-white">
          <div className="absolute left-[22px]">
            <BackSpaceArrow />
          </div>
          <div className="flex flex-1 justify-center font-noto text-[18px] font-semibold  ">
            채팅 목록
          </div>
        </div>
      }
      _bottomNode={<BottomNavigationBar />}
      _contentDivProps={{ className: 'bg-white' }}
    >
      <div className="relative flex h-full w-full flex-col px-5 [&>div]:border-b">
        <ChatListItem />

        {/* <div className="absolute left-1/2 top-1/2 flex w-[184px] -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <ChatListEmpty />
          <div className="text-center font-noto text-xl font-bold text-[#D9D9D9]">
            진행 중인
            <br />
            채팅 내역이 없습니다.
          </div>
        </div> */}
      </div>
    </TopBottomBarTemplate>
  );
};

export default ChattingList;
