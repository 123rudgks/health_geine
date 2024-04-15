// // import { useEffect, useRef, useState } from 'react';
// // import SockJS from 'sockjs-client';
// // import { CompatClient, Stomp } from '@stomp/stompjs';
// // import BackSpaceArrow from '@/svgs/BackSpaceArrow.svg';
// // import BasicInput from '@/components/Input/BasicInput';
// // import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
// // import ChatBubble from '@/components/pages/chatting/ChatBubble';
// // import OtherChatBox from '@/components/pages/chatting/OtherChatBox';
// // import PtRequestBox from '@/components/pages/chatting/PtRequestBox';
// // import PtResponseBox from '@/components/pages/chatting/PtResponseBox';
// // import ChatCamera from '@/svgs/ChatCamera.svg';
// // import ChatSend from '@/svgs/ChatSend.svg';
// // import axios from 'axios';
// // import { useQuery } from '@tanstack/react-query';
// // import { useRecoilState } from 'recoil';
// // import { trainerProfileState } from '@/recoil/state';
// // import { KEY_CHAT } from '@/utils/queryKey';
// // import { useRouter } from 'next/router';

// // type Props = {};

// // const Page = (props: any) => {
// //   const router = useRouter();
// //   const { anotherName, anotherId } = router.query;
// //   const [userData, setUserData] = useRecoilState(trainerProfileState);
// //   const accessToken = localStorage.getItem('accessToken');
// //   const [message, setMessage] = useState('');
// //   const [messageHistory, setMessageHistory] = useState<
// //     { sender: any; message: any; chatAt: any }[]
// //   >([]);

// //   // const [stompClient, setStompClient] = useState(
// //   //   Stomp.over(new SockJS('https://서비스.한국/ws'))
// //   // );

// //   console.log(props.params.id);
// //   const client = useRef<CompatClient | null>(null);
// //   const stompClient = new SockJS('https://서비스.한국/ws');
// //   const fetchMyListData = async () => {
// //     const response = await axios.post(
// //       `https://서비스.한국/chat/rooms`,
// //       { anotherUserId: anotherId },
// //       {
// //         headers: {
// //           'Content-Type': 'application/json;charset=utf-8',
// //           'Access-Control-Allow-Origin': '*',
// //           Authorization: `Bearer ${accessToken}`,
// //         },
// //       }
// //     );
// //     return response.data.data;
// //   };

// //   const { data: trainerProfileDataQuery } = useQuery(
// //     KEY_CHAT,
// //     fetchMyListData,
// //     {
// //       onSuccess: (data) => setUserData(data),
// //     }
// //   );

// //   // useEffect(() => {
// //   //   stompClient.connect(
// //   //     {},
// //   //     () => {},
// //   //     (error: any) => console.error('STOMP connection error', error)
// //   //   );
// //   // }, []);

// //   // const onClickTestChatRoom = (sellerName: any) => () => {
// //   //   stompClient.subscribe(`/sub/chat/${roomId}`, (msg) => {
// //   //     const jsonFrame = JSON.parse(msg.body);
// //   //     console.log(jsonFrame);
// //   //     setMessageHistory((prev) => [
// //   //       ...prev,
// //   //       {
// //   //         sender: jsonFrame.sender,
// //   //         message: jsonFrame.message,
// //   //         chatAt: jsonFrame.chatAt,
// //   //       },
// //   //     ]);
// //   //   });
// //   // };

// //   const onChangeMessage = (value: any) => {
// //     setMessage(value); // 메시지 변경
// //   };

// //   const onClickTestChatRoom = () => {
// //     client.current = Stomp.over(stompClient);
// //     client.current.connect(
// //       {
// //         Authorization: `Bearer ${accessToken}`,
// //         'Content-Type': 'application/json',
// //       },
// //       () => {
// //         client.current?.subscribe(
// //           `/sub/chat/4`,
// //           (message) => {
// //             setMessageHistory((prevMessageHistory) => {
// //               return [...prevMessageHistory, JSON.parse(message.body)];
// //             });
// //           },
// //           {
// //             Authorization: `Bearer ${accessToken}`,
// //             'Content-Type': 'application/json',
// //           }
// //         );
// //       }
// //     );
// //   };

// //   useEffect(() => {
// //     onClickTestChatRoom();
// //   }, []);

// //   const onClickSendMessage = () => {
// //     if (client.current && client.current.connected) {
// //       client.current.send(
// //         '/pub/chat/4',
// //         {
// //           'Content-Type': 'application/json',
// //         },
// //         JSON.stringify({
// //           senderId: userData.id,
// //           content: message,
// //         })
// //       );
// //       setMessage(''); // 메시지 전송 후 초기화
// //     }
// //   };

// //   // if (!stompClient) return;

// //   // const accessToken = localStorage.getItem('accessToken');
// //   // stompClient.send(
// //   //   `/pub/chat/4`,
// //   //   {
// //   //     Authorization: `Bearer ${accessToken}`,
// //   //   },
// //   //   JSON.stringify({
// //   //     roomId: 4,
// //   //     sender: userData.id,
// //   //     message: message,
// //   //     chatAt: new Date().toISOString(),
// //   //   })
// //   // );
// //   // setMessage('');

// //   useEffect(() => {
// //     onClickSendMessage();
// //   }, []);

// //   // useEffect(() => {
// //   //   if (!stompClient) return;
// //   //   const headers = {
// //   //     Authorization: `Bearer ${accessToken}`, // 여기에 사용자의 인증 토큰을 삽입하세요
// //   //   };

// //   //   stompClient.connect(
// //   //     { headers },
// //   //     () => {
// //   //       const subscription = stompClient.subscribe(`/sub/chat/4`, (msg) => {
// //   //         const jsonFrame = JSON.parse(msg.body);
// //   //         console.log('제이슨', jsonFrame);
// //   //         setMessageHistory((prev) => [
// //   //           ...prev,
// //   //           {
// //   //             sender: jsonFrame.sender,
// //   //             message: jsonFrame.message,
// //   //             chatAt: jsonFrame.chatAt,
// //   //           },
// //   //         ]);
// //   //       });

// //   //       subscription();
// //   //       // return () => subscription.unsubscribe();
// //   //     },
// //   //     (error: any) => console.error('STOMP connection error', error)
// //   //   );
// //   // }, [stompClient]);

// //   return (
// //     <TopBottomBarTemplate
// //       _topNode={
// //         <div className="relative flex h-full w-full items-center bg-white">
// //           <div className="absolute left-[22px] [&>svg>path]:stroke-black">
// //             <BackSpaceArrow />
// //           </div>
// //           <div className="flex flex-1 justify-center font-noto text-[18px] font-semibold">
// //             {anotherName}
// //           </div>
// //         </div>
// //       }
// //       _bottomNode={
// //         <div className="flex h-full items-center border-t-2 bg-[#F2F2F2] px-7 ">
// //           <div className="flex flex-1 items-center gap-3">
// //             <ChatCamera />
// //             <BasicInput
// //               _wrapperProps={{
// //                 className:
// //                   'bg-white ring-[#D4D4D4] px-4 rounded-[18px] h-9 flex-1',
// //               }}
// //               _inputProps={{
// //                 className: 'text-[13px] font-noto placeholder:text-[#A6A6A6]',
// //                 placeholder: '메세지를 입력하세요.',
// //               }}
// //               _value={message}
// //               _onChange={onChangeMessage}
// //             />
// //             <ChatSend
// //               onClick={() => {
// //                 onClickSendMessage();
// //               }}
// //             />

// //             {/* <p onClick={onClickTestChatRoom}>..</p> */}
// //           </div>
// //         </div>
// //       }
// //       _contentDivProps={{ className: 'bg-white' }}
// //     >
// //       <div className="relative flex h-full w-full flex-col gap-6 bg-[#F2F2F2] p-5 ">
// //         {/* <OtherChatBox _name="정수영 트레이너" _profileSrc="">
// //           <ChatBubble
// //             _from="other"
// //             _text="오늘도 좋은 아침입니다!"
// //             _time={new Date()}
// //           />
// //         </OtherChatBox> */}
// //         <div className="flex justify-end">
// //           <ChatBubble _from="me" _text={message} _time={new Date()} />
// //         </div>
// //         {/* <OtherChatBox _name="정수영 트레이너" _profileSrc="">
// //           <PtRequestBox />
// //         </OtherChatBox>
// //         <div className="flex justify-end">
// //           <PtResponseBox _response="accept" />
// //         </div> */}
// //       </div>
// //     </TopBottomBarTemplate>
// //   );
// // };

// // export default Page;

// // src/pages/chatting/room/server.tsx

// import { useEffect, useRef, useState } from 'react';
// import SockJS from 'sockjs-client';
// import { CompatClient, Stomp } from '@stomp/stompjs';
// import axios from 'axios';
// import { useRouter } from 'next/router';
// import { GetServerSideProps } from 'next';
// import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
// import ChatBubble from '@/components/pages/chatting/ChatBubble';
// import ChatCamera from '@/svgs/ChatCamera.svg';
// import ChatSend from '@/svgs/ChatSend.svg';
// import BasicInput from '@/components/Input/BasicInput';
// import BackSpaceArrow from '@/svgs/BackSpaceArrow.svg';

// type Props = {
//   userData: any;
// };

// const ServerPage = ({ userData }: Props) => {
//   const router = useRouter();
//   const { anotherName, anotherId } = router.query;
//   const accessToken = localStorage.getItem('accessToken');
//   const [message, setMessage] = useState('');
//   const [messageHistory, setMessageHistory] = useState<
//     { sender: any; message: any; chatAt: any }[]
//   >([]);

//   const client = useRef<CompatClient | null>(null);
//   const stompClient = new SockJS('https://서비스.한국/ws');

//   useEffect(() => {
//     const onClickTestChatRoom = () => {
//       client.current = Stomp.over(stompClient);
//       client.current.connect(
//         {
//           Authorization: `Bearer ${accessToken}`,
//           'Content-Type': 'application/json',
//         },
//         () => {
//           client.current?.subscribe(
//             `/sub/chat/4`,
//             (message) => {
//               setMessageHistory((prevMessageHistory) => {
//                 return [...prevMessageHistory, JSON.parse(message.body)];
//               });
//             },
//             {
//               Authorization: `Bearer ${accessToken}`,
//               'Content-Type': 'application/json',
//             }
//           );
//         }
//       );
//     };

//     onClickTestChatRoom();

//     return () => {
//       if (client.current && client.current.connected) {
//         client.current.disconnect();
//       }
//     };
//   }, []);

//   const onChangeMessage = (value: string) => {
//     setMessage(value);
//   };

//   const onClickSendMessage = () => {
//     if (client.current && client.current.connected) {
//       client.current.send(
//         '/pub/chat/4',
//         {
//           'Content-Type': 'application/json',
//         },
//         JSON.stringify({
//           senderId: userData.id,
//           content: message,
//         })
//       );
//       setMessage(''); // 메시지 전송 후 초기화
//     }
//   };

//   return (
//     <TopBottomBarTemplate
//       _topNode={
//         <div className="relative flex h-full w-full items-center bg-white">
//           <div className="absolute left-[22px] [&>svg>path]:stroke-black">
//             <BackSpaceArrow />
//           </div>
//           <div className="flex flex-1 justify-center font-noto text-[18px] font-semibold">
//             {anotherName}
//           </div>
//         </div>
//       }
//       _bottomNode={
//         <div className="flex h-full items-center border-t-2 bg-[#F2F2F2] px-7 ">
//           <div className="flex flex-1 items-center gap-3">
//             <ChatCamera />
//             <BasicInput
//               _wrapperProps={{
//                 className:
//                   'bg-white ring-[#D4D4D4] px-4 rounded-[18px] h-9 flex-1',
//               }}
//               _inputProps={{
//                 className: 'text-[13px] font-noto placeholder:text-[#A6A6A6]',
//                 placeholder: '메세지를 입력하세요.',
//               }}
//               _value={message}
//               _onChange={onChangeMessage}
//             />
//             <ChatSend
//               onClick={() => {
//                 onClickSendMessage();
//               }}
//             />
//           </div>
//         </div>
//       }
//       _contentDivProps={{ className: 'bg-white' }}
//     >
//       <div className="relative flex h-full w-full flex-col gap-6 bg-[#F2F2F2] p-5 ">
//         {messageHistory.map((msg, index) => (
//           <ChatBubble
//             key={index}
//             _from="me"
//             _text={msg.message}
//             _time={msg.chatAt}
//           />
//         ))}
//       </div>
//     </TopBottomBarTemplate>
//   );
// };

// export default ServerPage;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { anotherId } = context.query;

//   // Fetch user data from API based on anotherId
//   const response = await axios.post(`https://서비스.한국/chat/rooms`, {
//     anotherUserId: anotherId,
//   });

//   return {
//     props: {
//       userData: response.data.data,
//     },
//   };
// };
