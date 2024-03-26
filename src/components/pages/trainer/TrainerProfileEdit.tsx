'use client';
import Fab from '@/components/FAB/Fab';
import ModalPortal from '@/components/Modal/ModalPortal';
import ModalBackground from '@/components/Modal/ModalBackground';
import Box from '@/components/Box/Box';
import { useState } from 'react';
type Props = {};

const TrainerProfileEdit = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFabClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && (
        <ModalPortal>
          <ModalBackground onClick={handleCloseModal}>
            {/* <ModalBackground /> */}
            <TrainerProfileEdit />
          </ModalBackground>
        </ModalPortal>
      )}
      <Box className="w-[100%] rounded-[18px] px-[22px] py-[26px] shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
        <div className="flex justify-between">
          <div className="grid">
            <div className="h-full w-full bg-[#FDFDFF]">
              <div className="grid justify-items-start">
                <div className="flex h-[10px] w-[52px] flex-col justify-end bg-primary-200">
                  <h1 className="text-center text-[16px] font-[700] text-black">
                    내 정보
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 py-2">
              <div className="flex text-[13px] text-[#434343]">
                <p className="font-[700]">
                  경력:
                  <span className="font-[500]"> career</span>
                </p>
              </div>
              <div className="flex text-[13px] text-[#434343]">
                <p className="font-[700]">
                  견적:
                  <span className="font-[500]"> cost</span>
                </p>
              </div>
              <div className="flex text-[13px] text-[#434343]">
                <p className="font-[700]">
                  악력:
                  <span className="font-[500]"> month</span>
                </p>
              </div>
            </div>
          </div>
          <Fab _imageName="edit" _onClick={handleFabClick} />
        </div>
        <div>
          <div className="h-full w-full bg-[#FDFDFF] pt-4">
            <div className="grid justify-items-start">
              <div className="flex h-[10px] w-[52px] flex-col justify-end bg-primary-200">
                <h1 className="text-center text-[16px] font-[700] text-black">
                  소개글
                </h1>
              </div>
            </div>
          </div>
          <div className="py-2">
            <div className="flex text-[13px] text-[#434343]">
              <p className="font-[500]">
                안녕하세요!
                <br />
                경북대학교 경력 2년차 트레이너 입니다.
                <br />
                체형관리는 ~~
              </p>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default TrainerProfileEdit;
