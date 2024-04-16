'use client';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';
import BackSpaceArrow from '@/svgs/BackSpaceArrow.svg';
import BasicInput from '@/components/Input/BasicInput';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import ChatBubble from '@/components/pages/chatting/ChatBubble';
import OtherChatBox from '@/components/pages/chatting/OtherChatBox';
import PtRequestBox from '@/components/pages/chatting/PtRequestBox';
import PtResponseBox from '@/components/pages/chatting/PtResponseBox';
import ChatCamera from '@/svgs/ChatCamera.svg';
import ChatSend from '@/svgs/ChatSend.svg';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { trainerProfileState, userState } from '@/recoil/state';
import { KEY_CHAT } from '@/utils/queryKey';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { BASE_URL } from '@/utils/routePath';

type Props = {};
interface ChatHistoryProps {
  senderId: string;
  content: string;
}

interface PrevHistoryProps {
  createdDate: Date;
  senderId: string;
  nickname: string;
  role: string;
  profilePhoto: string;
  content: string;
}

const ChattingRoom = (props: any) => {
  let roomId: string = '';

  const params = new URLSearchParams(document.location.search);

  // const anotherId = '5';
  // const anotherName = '이다혜';
  const anotherId = params.get('id');
  const anotherName = params.get('name');
  const accessToken = localStorage.getItem('accessToken');

  const [trainerData, setTrainerData] = useRecoilState(trainerProfileState);
  const [senderData, setSenderData] = useRecoilState(userState);
  const [message, setMessage] = useState('');
  const [sentMessages, setSentMessages] = useState<string[]>([]);
  const [isChatHistory, setIsChatHistory] = useState<ChatHistoryProps[] | null>(
    null
  );
  const [receivedMessages, setReceivedMessages] = useState<ChatHistoryProps[]>(
    []
  );
  const [prevMessages, setPrevMessages] = useState<PrevHistoryProps[]>([]);

  const room = async () => {
    try {
      const response = await axios.post(
        `https://${BASE_URL}/chat/rooms`,
        { anotherUserId: anotherId },
        {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      roomId = String(response.data.data.roomId);

      return roomId;
      return response.data.data;
    } catch (error) {
      console.error('Error while fetching room data:', error);
      throw error;
    }
  };

  const { data: trainerProfileDataQuery } = useQuery(KEY_CHAT, room, {
    onSuccess: (data) => setTrainerData(data),
  });

  const history = async (roomId: any) => {
    try {
      const response = await axios.get(
        `https://${BASE_URL}/chat/${roomId}/messages`,
        {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data.data;
    } catch (error) {
      console.error('Error while fetching chat history:', error);
      throw error;
    }
  };

  useEffect(() => {
    room()
      .then((roomId) => {
        history(roomId).then((data) => {
          setPrevMessages(data);
        });
      })
      .catch((error) => {
        console.error('Error while fetching room data:', error);
      });
  }, [accessToken, anotherId, senderData.id, roomId]);

  // socket 구현
  const client = useRef<CompatClient | null>(null);
  const connectHandler = () => {
    const socket = new SockJS(`https://${BASE_URL}/ws`);
    client.current = Stomp.over(socket);
    client.current.connect(
      {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      () => {
        client.current?.subscribe(
          `/sub/chat/${roomId}`,
          (message) => {
            setIsChatHistory((prevHistory) => {
              return prevHistory
                ? [...prevHistory, JSON.parse(message.body)]
                : null;
            });
          },
          {
            Authorization: 'Bearer ' + accessToken,
            'Content-Type': 'application/json',
          }
        );
      }
    );
  };

  useEffect(() => {
    connectHandler();
  }, [accessToken, roomId]);

  const sendHandler = (message: string) => {
    if (client.current && client.current.connected) {
      setSentMessages([...sentMessages, message]);
      client.current.send(
        `/pub/chat/${roomId}`,
        {},
        JSON.stringify({
          senderId: senderData.id,
          content: message,
        })
      );
    }
    setMessage('');
  };

  useEffect(() => {
    if (isChatHistory) {
      const newReceivedMessages = isChatHistory.filter(
        (msg) => msg.senderId !== anotherId
      );
      setReceivedMessages([...receivedMessages, ...newReceivedMessages]);
    }
  }, [isChatHistory]);

  const onChangeMessage = (message: string) => {
    setMessage(message);
  };

  return (
    <TopBottomBarTemplate
      _topNode={
        <div className="relative flex h-full w-full items-center bg-transparent">
          <div className="absolute left-[22px] [&>svg>path]:stroke-black">
            <BackSpaceArrow />
          </div>
          <div className="flex flex-1 justify-center font-noto text-[18px] font-semibold text-black">
            {anotherName}
          </div>
        </div>
      }
      _bottomNode={
        <div className="flex h-full items-center border-t-2 bg-transparent px-7 ">
          <div className="flex flex-1 items-center gap-3">
            <ChatCamera />
            <BasicInput
              _wrapperProps={{
                className:
                  'bg-white ring-[#D4D4D4] px-4 rounded-[18px] h-9 flex-1',
              }}
              _inputProps={{
                className: 'text-[13px] font-noto placeholder:text-[#A6A6A6]',
                placeholder: '메세지를 입력하세요.',
              }}
              _value={message}
              _onChange={onChangeMessage}
            />
            <ChatSend
              onClick={() => {
                sendHandler(message);
              }}
            />
          </div>
        </div>
      }
      _contentDivProps={{ className: 'bg-white overflow-auto' }}
    >
      <div className="relative flex h-full w-full flex-col gap-6 bg-[#F2F2F2] p-5 ">
        {/* 이전에 있었던 메시지 출력 */}
        {prevMessages
          .map((msg: PrevHistoryProps, index: number) =>
            msg.senderId === senderData.id ? (
              <div key={`prev-${index}`} className="flex justify-end">
                <ChatBubble
                  _from="me"
                  _text={msg.content}
                  _time={new Date(msg.createdDate)}
                />
              </div>
            ) : (
              <OtherChatBox
                key={`prev-${index}`}
                _name={anotherName || ''}
                _profileSrc={msg.profilePhoto || ''}
              >
                <ChatBubble
                  _from="other"
                  _text={msg.content}
                  _time={new Date(msg.createdDate)}
                />
              </OtherChatBox>
            )
          )
          .reverse()}

        {/* 사용자가 보낸 메시지 출력 */}
        {sentMessages.map((msg, index) => (
          <div key={`sent-${index}`} className="flex justify-end">
            <ChatBubble _from="me" _text={msg} _time={new Date()} />
          </div>
        ))}

        {/* 받은 메시지 출력 */}
        {receivedMessages.map((msg, index) => (
          <OtherChatBox
            key={`received-${index}`}
            _name={anotherName || ''}
            _profileSrc=""
          >
            <ChatBubble _from="other" _text={msg.content} _time={new Date()} />
          </OtherChatBox>
        ))}
        {/* <OtherChatBox _name="정수영 트레이너" _profileSrc="">
          <PtRequestBox />
        </OtherChatBox>
        <div className="flex justify-end">
          <PtResponseBox _response="accept" />
        </div> */}
      </div>
    </TopBottomBarTemplate>
  );
};

export default ChattingRoom;
