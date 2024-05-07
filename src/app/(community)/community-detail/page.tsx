'use client';
import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import BackSpaceArrow from '@/svgs/BackSpaceArrow.svg';
import CommunityCalendar from '@/svgs/CommunituCalendar.svg';
import CommunityClock from '@/svgs/CommunityClock.svg';
import Chatting from '@/svgs/FillChatting.svg';
import EmptyLike from '@/svgs/EmptyLike.svg';
import SettingDot from '@/svgs/SettingDot.svg';
import BlackDot from '@/svgs/BlackDot.svg';
import { useRouter } from 'next/navigation';
import BasicInput from '@/components/Input/BasicInput';
import ChatSend from '@/svgs/ChatSend.svg';
import { useEffect, useState } from 'react';
import { getCommunityDetail } from '@/apis/api';

type Props = {};

const Page = ({ searchParams }: { searchParams: { id: string } }) => {
  const router = useRouter();
  const postId = searchParams.id;
  const [communityDetailData, setCommunityDetailData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCommunityDetail(postId);
      setCommunityDetailData(data);
    };

    fetchData();
  }, [postId]);

  return (
    <>
      {communityDetailData && (
        <div key={communityDetailData.id}>
          <TopBottomBarTemplate
            _topNode={
              <div className="relative flex h-full w-full items-center">
                <div className="absolute left-[22px]">
                  <BackSpaceArrow
                    onClick={() => {
                      router.back();
                    }}
                  />
                </div>
                <div className="flex flex-1 justify-center font-noto text-[18px] font-bold text-black">
                  글 상세보기
                </div>
              </div>
            }
            _bottomNode={
              <div className="flex h-full items-center border-t-2 bg-transparent px-7 ">
                <div className="flex flex-1 items-center gap-3">
                  <div className="h-[27px] w-[27px] rounded-full bg-black" />
                  <BasicInput
                    _wrapperProps={{
                      className:
                        'bg-white ring-[#D4D4D4] px-4 rounded-[18px] h-9 flex-1',
                    }}
                    _inputProps={{
                      className:
                        'text-[13px] font-noto placeholder:text-[#A6A6A6]',
                      placeholder: '댓글을 입력해주세요.',
                    }}
                    _value={''}
                    _onChange={() => {}}
                  />
                  <ChatSend />
                </div>
              </div>
            }
            _contentDivProps={{ className: 'bg-white' }}
          >
            <div className="flex flex-col items-start gap-2 px-14">
              <div className="flex items-center gap-1">
                <div className="h-[41px] w-[41px] rounded-full bg-black" />
                <h1 className="font-noto text-[20px] font-semibold text-black">
                  {communityDetailData.writer}
                </h1>
              </div>
              <div className="gap-1">
                <h1 className="font-noto text-[18px] font-semibold text-black">
                  {communityDetailData.title}
                </h1>
                <div className="font-regular flex gap-2 font-noto text-[13.51px] text-[#434343]">
                  <div className="flex items-center justify-center gap-1">
                    <CommunityCalendar />
                    <p>
                      {communityDetailData.createdDate
                        .substring(0, 10)
                        .replaceAll('-', '.')}
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <CommunityClock />
                    <p>{communityDetailData.createdDate.substring(11, 16)}</p>
                  </div>
                </div>
              </div>
              <div
                className="h-[258px] w-full rounded-xl bg-black"
                style={{
                  backgroundImage: `url('${communityDetailData.writerPhoto}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="flex w-full justify-center pb-2 pt-1">
                <BlackDot />
              </div>
              <p className="font-regular font-noto text-[13px]">
                {communityDetailData.content}
              </p>
              <div className="h-2 w-full border-b border-[#c1c1c1]" />
              <div className="flex gap-2">
                <div className="flex gap-1">
                  <Chatting width={21} />
                  <p className="font-regular font-noto text-[13.36px] text-primary-400">
                    12
                  </p>
                </div>
                <div className="flex gap-1">
                  <EmptyLike />
                  <p className="font-regular font-noto text-[13.36px] text-[#F44B4B]">
                    13
                  </p>
                </div>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-start justify-center gap-2">
                  <div className="h-[28.99px] w-[28.99px] rounded-full bg-black" />
                  <div>
                    <h1 className="font-noto text-[14.49px] font-semibold text-black">
                      이다혜
                    </h1>
                    <p className="font-regular font-noto text-[14.52px] text-black">
                      저도 딱 그 상황이라 공감가네요...ㅠㅠ
                    </p>
                    <div className="flex gap-4">
                      <p className="font-regular font-noto text-[11.17px] text-[#c1c1c1]">
                        방금 전
                      </p>
                      <p className="font-regular font-noto text-[11.17px] text-black">
                        답글쓰기
                      </p>
                    </div>
                  </div>
                </div>
                <SettingDot />
              </div>
            </div>
          </TopBottomBarTemplate>
        </div>
      )}
    </>
  );
};
export default Page;
