'use client';
import { getComment, getCommentDelete, getCommentUpdate } from '@/apis/api';
import Box from '@/components/Box/Box';
import Button from '@/components/Button/Button';
import { ICommentList, userState } from '@/recoil/state';
import SettingDot from '@/svgs/SettingDot.svg';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

const CommentsListItem = ({
  postId,
  id,
  createdDate,
  lastModifiedDate,
  content,
  writer,
  writerPhoto,
  onUpdate,
}: ICommentList) => {
  const router = useRouter();
  const [commentsData, setCommentsData] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);
  const [userData, setUserData] = useRecoilState(userState);
  const outsideRef = useRef<HTMLDivElement>(null);

  const handleSettingDot = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleInputEditChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditedContent(event.target.value);
  };

  const handleEditSave = async () => {
    await getCommentUpdate(postId, id, editedContent);
    setIsEditing(false);
    onUpdate();
  };

  const handleDelete = async () => {
    alert('정말 삭제하시겠습니까?');
    await getCommentDelete(postId, id);
    onUpdate();
  };

  return (
    <>
      <div key={id} className="flex w-full items-center justify-between py-1">
        <div className="flex items-start justify-center gap-2">
          <div className="h-[28.99px] w-[28.99px] rounded-full bg-black" />
          <div>
            <h1 className="font-noto text-[14.49px] font-semibold text-black">
              {writer}
            </h1>
            {isEditing ? (
              <input
                className="font-regular font-noto text-[14.52px] text-black"
                type="text"
                value={editedContent}
                onChange={handleInputEditChange}
              />
            ) : (
              <p className="font-regular font-noto text-[14.52px] text-black">
                {content}
              </p>
            )}
            <div className="flex gap-4">
              <p className="font-regular font-noto text-[11.17px] text-[#c1c1c1]">
                {createdDate}
              </p>
              <p className="font-regular font-noto text-[11.17px] text-black">
                답글 쓰기
              </p>
              {isEditing ? (
                <Button
                  ring="none"
                  color="white"
                  background="primary-400"
                  className="font-regular rounded-[6px] px-2 font-noto text-[11.17px]"
                  onClick={handleEditSave}
                >
                  저장
                </Button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        {userData.nickname === writer ? (
          <div className="hover:cursor-pointer">
            <SettingDot onClick={handleSettingDot} />
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
                <p onClick={handleEdit} className="hover:cursor-pointer">
                  수정하기
                </p>
                <div className="h-0 w-full border-b border-[#c1c1c1]" />
                <p onClick={handleDelete} className="hover:cursor-pointer">
                  삭제하기
                </p>
              </Box>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CommentsListItem;
