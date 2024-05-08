'use client';
import { useRouter } from 'next/navigation';
import Box from '@/components/Box/Box';
import Like from '@/svgs/FillLike.svg';
import FillChat from '@/svgs/FillChatting.svg';
import { ICommunityListContent } from '@/recoil/state';
import { useEffect, useState } from 'react';
import { getCommentCount, getLikesCount } from '@/apis/api';

const CommunityListItem = ({
  id,
  createdDate,
  title,
  content,
  writer,
}: Pick<
  ICommunityListContent,
  'id' | 'createdDate' | 'title' | 'content' | 'writer'
>) => {
  const [commentsCountData, setCommentsCountData] = useState<any>();
  const [likesCountData, setLikesCountData] = useState<any>();

  const fetchData = async () => {
    const commentCountData = await getCommentCount(String(id));
    const likeCountData = await getLikesCount(String(id));

    setCommentsCountData(commentCountData);
    setLikesCountData(likeCountData);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Box className="mb-4 flex w-[328px] flex-col justify-center gap-2 rounded-[6px] bg-[#f3f3f3] p-2 font-noto">
          <h1 className="text-[13px] font-semibold text-black">{title}</h1>
          <p className="font-regular text-[11px] text-black">{content}</p>
          <div className="font-regular flex items-center justify-between font-noto text-[11px] text-[#c1c1c1]">
            <p>
              {createdDate.substring(2, 10).replaceAll('-', '.')} | {writer}
            </p>
            <div className="flex gap-2">
              <div className="flex gap-1">
                <FillChat width={11} height={11} />
                <p className="font-regular font-noto text-[7px] text-primary-400">
                  {commentsCountData}
                </p>
              </div>
              <div className="flex gap-1">
                <Like />
                <p className="font-regular font-noto text-[7px] text-[#F44B4B]">
                  {likesCountData}
                </p>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};
export default CommunityListItem;
