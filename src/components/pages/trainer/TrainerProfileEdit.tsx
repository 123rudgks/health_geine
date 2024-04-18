'use client';
import Fab from '@/components/FAB/Fab';
import ModalPortal from '@/components/Modal/ModalPortal';
import ModalBackground from '@/components/Modal/ModalBackground';
import Box from '@/components/Box/Box';
import { useState } from 'react';
type Props = {};
interface TrainerProfileEditProps {
  id: string;
  month: string;
  cost: string;
  career: string;
  introduction: string;
}
const TrainerProfileEdit = ({
  id,
  month,
  cost,
  career,
  introduction,
}: TrainerProfileEditProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFabClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div key={id}>
      {isModalOpen && (
        <ModalPortal>
          <ModalBackground onClick={handleCloseModal}>
            {/* <ModalBackground /> */}
            <TrainerProfileEdit
              id={id}
              month={month}
              career={career}
              cost={cost}
              introduction={introduction}
            />
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
                  <span className="font-[500]"> {month}</span>
                </p>
              </div>
              <div className="flex text-[13px] text-[#434343]">
                <p className="font-[700]">
                  견적:
                  <span className="font-[500]"> {cost}</span>
                </p>
              </div>
              <div className="flex text-[13px] text-[#434343]">
                <p className="font-[700]">
                  약력:
                  <span className="font-[500]"> {career}</span>
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
              <p className="font-[500]">{introduction}</p>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default TrainerProfileEdit;
