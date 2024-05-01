import ModalBackground from '@/components/Modal/ModalBackground';
import ModalPortal from '@/components/Modal/ModalPortal';
import Cancel from '@/svgs/ImagePreviewCancel.svg';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  trainerImageData: any;
};

const TrainerPhotoVideoTab = ({ trainerImageData }: Props) => {
  const [modal, setModal] = useState(false);
  const [clickedImage, setClickedImage] = useState<string | null>(null);

  const handleClickModal = (image: string) => {
    setClickedImage(image);
    setModal(true);
  };

  return (
    <>
      {modal && (
        <ModalPortal>
          <ModalBackground
            onClick={() => {
              setModal(false);
              setClickedImage(null);
            }}
          >
            <div className="relative h-[217px] w-[325px] bg-transparent">
              <span
                className="absolute -bottom-4 left-1/2 flex h-7 w-7 -translate-x-1/2 translate-y-full items-center justify-center rounded-full bg-white"
                onClick={() => {
                  setModal(false);
                  setClickedImage(null);
                }}
              >
                <Cancel />
              </span>
              {clickedImage && (
                <Image
                  src={clickedImage}
                  alt="Clicked Image"
                  layout="fill"
                  objectFit="contain"
                />
              )}
            </div>
          </ModalBackground>
        </ModalPortal>
      )}
      <div className="grid w-full grid-cols-2 gap-4">
        {trainerImageData && trainerImageData.length > 0 ? (
          trainerImageData.map(
            (item: any) =>
              item.purpose !== 'PROFILE' && (
                <div
                  className="aspect-square rounded-2xl bg-black"
                  key={item.id}
                  style={{ position: 'relative' }}
                  onClick={() => {
                    handleClickModal(item.path);
                  }}
                >
                  <Image
                    onClick={() => {
                      setModal(true);
                    }}
                    src={item.path}
                    alt={`Image ${item.originName}`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              )
          )
        ) : (
          <div className="text-center text-gray-500">
            사진/동영상이 없습니다.
          </div>
        )}
      </div>
    </>
  );
};

export default TrainerPhotoVideoTab;
