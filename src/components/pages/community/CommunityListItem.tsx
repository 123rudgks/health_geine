'use client';
import { useRouter } from 'next/navigation';
import Box from '@/components/Box/Box';
import Like from '@/svgs/FillLike.svg';
import FillChat from '@/svgs/FillChatting.svg';
import { ICommunityListContent } from '@/recoil/state';

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
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Box className="mb-4 flex w-[328px] flex-col justify-center gap-2 rounded-[6px] bg-[#f3f3f3] p-2 font-noto">
          <h1 className="text-[13px] font-semibold text-black">{title}</h1>
          <p className="font-regular text-[11px] text-black">{content}</p>
          <div className="font-regular flex items-center justify-between font-noto text-[11px] text-[#c1c1c1]">
            <p>
              {createdDate} | {writer}
            </p>
            <div className="flex gap-2">
              <div className="flex gap-1">
                <FillChat width={11} height={11} />
                <p className="font-regular font-noto text-[7px] text-primary-400">
                  12
                </p>
              </div>
              <div className="flex gap-1">
                <Like />
                <p className="font-regular font-noto text-[7px] text-[#F44B4B]">
                  15
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
