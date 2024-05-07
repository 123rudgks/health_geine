import Box from '@/components/Box/Box';
import { ICommunityListContent, userState } from '@/recoil/state';
import SettingDot from '@/svgs/SettingDot.svg';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

const CommentsListItem = ({
  id,
  createdDate,
  lastModifiedDate,
  content,
  writer,
  writerPhoto,
}: Pick<
  ICommunityListContent,
  | 'id'
  | 'createdDate'
  | 'lastModifiedDate'
  | 'content'
  | 'writer'
  | 'writerPhoto'
>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const outsideRef = useRef<HTMLDivElement>(null);
  const [userData, setUserData] = useRecoilState(userState);

  const handleSettingDotClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // 모달 외부 클릭 시 모달 닫기
  const handleClickOutside = (event: any) => {
    if (outsideRef.current && !outsideRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div key={id} className="flex w-full items-center justify-between py-1">
        <div className="flex items-start justify-center gap-2">
          <div className="h-[28.99px] w-[28.99px] rounded-full bg-black" />
          <div>
            <h1 className="font-noto text-[14.49px] font-semibold text-black">
              {writer}
            </h1>
            <p className="font-regular font-noto text-[14.52px] text-black">
              {content}
            </p>
            <div className="flex gap-4">
              <p className="font-regular font-noto text-[11.17px] text-[#c1c1c1]">
                {createdDate}
              </p>
              <p className="font-regular font-noto text-[11.17px] text-black">
                답글 쓰기
              </p>
            </div>
          </div>
        </div>
        {userData.nickname === writer ? (
          <div className="hover:cursor-pointer">
            <SettingDot onClick={handleSettingDotClick} />
          </div>
        ) : (
          <></>
        )}
      </div>
      {isModalOpen && (
        <div className="relative">
          <div className="absolute right-0 top-0 w-[100px]">
            <div ref={outsideRef}>
              <Box className="font-regular flex flex-col items-center justify-center bg-white py-2 font-noto text-[14px] text-black shadow-lg">
                <p className="hover:cursor-pointer">수정하기</p>
                <div className="h-0 w-full border-b border-[#c1c1c1]" />
                <p className="hover:cursor-pointer">삭제하기</p>
              </Box>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CommentsListItem;
