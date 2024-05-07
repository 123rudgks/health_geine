'use client';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import BackSpaceArrow from '@/svgs/BackSpaceArrow.svg';
import CommunityCalendar from '@/svgs/CommunituCalendar.svg';
import CommunityClock from '@/svgs/CommunityClock.svg';
import Chatting from '@/svgs/FillChatting.svg';
import EmptyLike from '@/svgs/EmptyLike.svg';
import BlackDot from '@/svgs/BlackDot.svg';
import { useRouter } from 'next/navigation';
import BasicInput from '@/components/Input/BasicInput';
import ChatSend from '@/svgs/ChatSend.svg';
import { useEffect, useState } from 'react';
import {
  getComment,
  getCommentCount,
  getCommentPost,
  getCommunityDetail,
  getLikes,
  getLikesCount,
} from '@/apis/api';
import CommentsListItem from '@/components/pages/community/CommentsListItem';

type Props = {};

const Page = ({ searchParams }: { searchParams: { id: string } }) => {
  const router = useRouter();
  const postId = searchParams.id;
  const [communityDetailData, setCommunityDetailData] = useState<any>();
  const [commentsData, setCommentsData] = useState<any>();
  const [commentsCountData, setCommentsCountData] = useState<any>();
  const [likesCountData, setLikesCountData] = useState<any>();
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const communityData = await getCommunityDetail(postId);
      const commentData = await getComment(postId);
      const commentCountData = await getCommentCount(postId);
      const likeCountData = await getLikesCount(postId);

      setCommunityDetailData(communityData);
      setCommentsData(commentData);
      setCommentsCountData(commentCountData);
      setLikesCountData(likeCountData);
    };

    fetchData();
  }, [postId]);

  const handleLikes = async () => {
    await getLikes(postId);
    const updatedLikesCount = await getLikesCount(postId);
    setLikesCountData(updatedLikesCount);
  };

  // 댓글 입력값 변경 시 상태 업데이트
  const handleCommentChange = (value: string) => {
    setContent(value);
  };

  // 댓글 작성 버튼 클릭 시
  const handleCommentPost = async () => {
    await getCommentPost(postId, content);
    setContent('');
    const updatedCommentCountData = await getCommentCount(postId);
    const updatedCommentData = await getComment(postId);
    setCommentsCountData(updatedCommentCountData);
    setCommentsData(updatedCommentData);
  };

  return (
    <>
      {communityDetailData && (
        <div key={communityDetailData.id}>
          <TopBottomBarTemplate
            _topNode={
              <div className="relative flex h-full w-full items-center bg-white">
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
              <div className="flex h-full items-center border-t-2 bg-white px-7 ">
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
                    _value={content}
                    _onChange={handleCommentChange}
                  />
                  <ChatSend onClick={handleCommentPost} />
                </div>
              </div>
            }
            _contentDivProps={{ className: 'bg-white' }}
          >
            <div className="flex flex-col items-start gap-2 px-14 pb-4">
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
                    {commentsCountData}
                  </p>
                </div>
                <div onClick={handleLikes} className="flex gap-1">
                  <EmptyLike />
                  <p className="font-regular font-noto text-[13.36px] text-[#F44B4B]">
                    {likesCountData}
                  </p>
                </div>
              </div>
              {commentsData &&
                commentsData
                  .slice()
                  .reverse()
                  .map((item: any, index: number) => (
                    <div className="w-full" key={item.id}>
                      <CommentsListItem
                        id={item.id}
                        createdDate={item.createdDate}
                        lastModifiedDate={item.lastModifiedDate}
                        writer={item.writer}
                        content={item.content}
                        writerPhoto={item.profilePhoto}
                      />
                    </div>
                  ))}
            </div>
          </TopBottomBarTemplate>
        </div>
      )}
    </>
  );
};
export default Page;
