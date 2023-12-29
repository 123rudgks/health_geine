'use client';
import BackSpaceArrow from '@/svgs/BackSpaceArrow.svg';

import BasicInput from '@/components/Input/BasicInput';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import ChatBubble from '@/components/pages/chatting/ChatBubble';
import OtherChatBox from '@/components/pages/chatting/OtherChatBox';
import PtRequestBox from '@/components/pages/chatting/PtRequestBox';
import PtResponseBox from '@/components/pages/chatting/PtResponseBox';
import ChatCamera from '@/svgs/ChatCamera.svg';
import ChatSend from '@/svgs/ChatSend.svg';

type Props = {};

const ChattingRoom = (props: Props) => {
  return (
    <TopBottomBarTemplate
      _topNode={
        <div className="relative flex h-full w-full items-center bg-white">
          <div className="absolute left-[22px] [&>svg>path]:stroke-black">
            <BackSpaceArrow />
          </div>
          <div className="flex flex-1 justify-center font-noto text-[18px] font-semibold  ">
            정수영 트레이너
          </div>
        </div>
      }
      _bottomNode={
        <div className="flex h-full items-center border-t-2 bg-[#F2F2F2] px-7 ">
          <div className="flex flex-1 items-center gap-3">
            <ChatCamera />
            <BasicInput
              _wrapperProps={{
                className:
                  'bg-white ring-[#D4D4D4] px-4 rounded-[18px] h-9 flex-1',
              }}
              _inputProps={{
                className: 'text-[13px] font-noto placeholder:text-[#A6A6A6]',
                placeholder: '메세지를 입력하세요',
              }}
            />
            <ChatSend />
          </div>
        </div>
      }
      _contentDivProps={{ className: 'bg-white' }}
    >
      <div className="relative flex h-full w-full flex-col gap-6 bg-[#F2F2F2] p-5 ">
        <OtherChatBox _name="정수영 트레이너" _profileSrc="">
          <ChatBubble
            _from="other"
            _text="오늘도 좋은 아침입니다!"
            _time={new Date()}
          />
        </OtherChatBox>
        <div className="flex justify-end">
          <ChatBubble
            _from="me"
            _text="네 오늘도 화이팅 해봐요!"
            _time={new Date()}
          />
        </div>
        <OtherChatBox _name="정수영 트레이너" _profileSrc="">
          <PtRequestBox />
        </OtherChatBox>
        <div className="flex justify-end">
          <PtResponseBox _response="accept" />
        </div>
      </div>
    </TopBottomBarTemplate>
  );
};

export default ChattingRoom;
