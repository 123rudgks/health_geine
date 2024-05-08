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
import SettingDot from '@/svgs/SettingDot.svg';
import { useEffect, useRef, useState } from 'react';
import {
  getComment,
  getCommentCount,
  getCommentPost,
  getCommunityDelete,
  getCommunityDetail,
  getCommunityUpdate,
  getLikes,
  getLikesCount,
} from '@/apis/api';
import CommentsListItem from '@/components/pages/community/CommentsListItem';
import { ICommentList, userState } from '@/recoil/state';
import Box from '@/components/Box/Box';
import Button from '@/components/Button/Button';
import { useRecoilState } from 'recoil';

type Props = {};

const Page = ({ searchParams }: { searchParams: { id: string } }) => {
  const router = useRouter();
  const postId = searchParams.id;

  const outsideRef = useRef<HTMLDivElement>(null);

  const [userData, setUserData] = useRecoilState(userState);
  const [isEditing, setIsEditing] = useState(false);
  const [communityDetailData, setCommunityDetailData] = useState<any>();
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const [commentsData, setCommentsData] = useState<any>();
  const [commentsCountData, setCommentsCountData] = useState<any>();
  const [likesCountData, setLikesCountData] = useState<any>();
  const [content, setContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (communityDetailData) {
      setEditedContent(communityDetailData.content || '');
      setEditedTitle(communityDetailData.title || '');
    }
  }, [communityDetailData]);

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

  useEffect(() => {
    fetchData();
  }, [postId]);

  // 좋아요 달기
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
    handleUpdate();
  };

  // 댓글 수정 및 삭제 시
  const handleUpdate = async () => {
    const updatedCommentCountData = await getCommentCount(postId);
    const updatedCommentData = await getComment(postId);
    setCommentsCountData(updatedCommentCountData);
    setCommentsData(updatedCommentData);
  };

  // 수정하기
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleTitleEditChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value.length > 20) {
      event.target.value = event.target.value.slice(0, 20);
    }
    setEditedTitle(event.target.value);
  };

  const handleContentEditChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value.length > 20) {
      event.target.value = event.target.value.slice(0, 20);
    }
    setEditedContent(event.target.value);
  };

  // 삭제하기
  const handleDelete = async () => {
    alert('정말 삭제하시겠습니까?');
    await getCommunityDelete(postId);
    router.back();
  };

  // 작성자에게만 수정, 삭제 뜸
  const handleSettingDot = () => {
    setIsModalOpen(true);
  };

  const handleClickOutside = (event: any) => {
    if (outsideRef.current && !outsideRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  const handleEditSave = async () => {
    await getCommunityUpdate(postId, editedTitle, editedContent);
    setIsEditing(false);
    fetchData();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {communityDetailData && (
        <div key={communityDetailData.id}>
          <TopBottomBarTemplate
            _topNode={
              <div className="flex h-full w-full items-center justify-between bg-white">
                <div className="ml-[22px] hover:cursor-pointer">
                  <BackSpaceArrow
                    onClick={() => {
                      router.back();
                    }}
                  />
                </div>
                <div className="flex flex-1 justify-center font-noto text-[18px] font-bold text-black">
                  글 상세보기
                </div>

                {userData.nickname === communityDetailData.writer ? (
                  isEditing ? (
                    <Button
                      ring="none"
                      color="white"
                      background="primary-400"
                      className="font-regular mr-[22px] rounded-full px-4 py-1 font-noto text-[14px]"
                      onClick={handleEditSave}
                    >
                      저장
                    </Button>
                  ) : (
                    <div className="mr-[22px] hover:cursor-pointer">
                      <SettingDot onClick={handleSettingDot} />
                    </div>
                  )
                ) : (
                  <></>
                )}

                {isModalOpen && (
                  <div className="relative">
                    <div className="absolute right-0 top-0 w-[100px]">
                      <div ref={outsideRef}>
                        <Box className="font-regular flex flex-col items-center justify-center bg-white py-2 font-noto text-[14px] text-black shadow-lg">
                          <p
                            onClick={handleEdit}
                            className="hover:cursor-pointer"
                          >
                            수정하기
                          </p>
                          <div className="h-0 w-full border-b border-[#c1c1c1]" />
                          <p
                            onClick={handleDelete}
                            className="hover:cursor-pointer"
                          >
                            삭제하기
                          </p>
                        </Box>
                      </div>
                    </div>
                  </div>
                )}
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
                {isEditing ? (
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={handleTitleEditChange}
                    className="font-noto text-[18px] font-semibold text-black outline-none"
                  />
                ) : (
                  <h1 className="font-noto text-[18px] font-semibold text-black">
                    {communityDetailData.title}
                  </h1>
                )}
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
              {isEditing ? (
                <input
                  type="text"
                  value={editedContent}
                  onChange={handleContentEditChange}
                  className="font-regular w-full font-noto text-[13px] outline-none"
                />
              ) : (
                <p className="font-regular font-noto text-[13px]">
                  {communityDetailData.content}
                </p>
              )}
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
                  .map((item: ICommentList, index: number) => (
                    <div className="w-full" key={item.id}>
                      <CommentsListItem
                        postId={postId}
                        id={item.id}
                        createdDate={item.createdDate}
                        lastModifiedDate={item.lastModifiedDate}
                        writer={item.writer}
                        content={item.content}
                        writerPhoto={item.writerPhoto}
                        onUpdate={handleUpdate}
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
