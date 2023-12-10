import ModalBackground from '@/components/Modal/ModalBackground';
import ModalPortal from '@/components/Modal/ModalPortal';
import Cancel from '@/svgs/ImagePreviewCancel.svg';
import { useState } from 'react';
type Props = {};

const TrainerPhotoVideoTab = (props: Props) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal && (
        <ModalPortal>
          <ModalBackground
            onClick={() => {
              setModal(false);
            }}
          >
            <div className="relative h-[217px] w-[325px] bg-blue-300">
              <span
                className="absolute -bottom-4 left-1/2 flex h-7 w-7 -translate-x-1/2 translate-y-full items-center justify-center rounded-full bg-white"
                onClick={() => {
                  setModal(false);
                }}
              >
                <Cancel />
              </span>
            </div>
          </ModalBackground>
        </ModalPortal>
      )}
      <div className="grid w-full grid-cols-2 gap-4">
        {Array.from({ length: 4 }, (_, i) => i).map((item) => (
          <div
            className="aspect-square rounded-2xl bg-black"
            key={item}
            onClick={() => {
              setModal(true);
            }}
          >
            사진
          </div>
        ))}
      </div>
    </>
  );
};

export default TrainerPhotoVideoTab;
