import ModalBackground from '@/components/Modal/ModalBackground';
import ModalPortal from '@/components/Modal/ModalPortal';
import Cancel from '@/svgs/ImagePreviewCancel.svg';
import Union from '@/svgs/Union.svg';
import Image from 'next/image';
import { useRef, useState } from 'react';

type Props = {
  profileImages: File[];
  onImagesChange: (images: File[]) => void;
};

const AddTrainerPhotoVideoTab = ({ profileImages, onImagesChange }: Props) => {
  const [modal, setModal] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [clickedImage, setClickedImage] = useState<string | null>(null);
  const fileInput = useRef<HTMLInputElement | null>(null);

  const handleImage = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      if (reader.readyState === 2) {
        const newImage = e.target.result;
        setImages((prevImages) => [...prevImages, newImage]);
      }
    };
    const formData = new FormData();
    formData.append('image', file);

    onImagesChange([...profileImages, file]);
  };

  const handleClick = () => {
    fileInput?.current?.click();
  };

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
        <div
          onClick={handleClick}
          className="flex aspect-square items-center justify-center rounded-2xl border-2 border-dashed border-[#c1c1c1]"
        >
          <Union fill="#c1c1c1" />
        </div>
        {profileImages &&
          profileImages.map((_image, _index) => (
            <div
              key={_index}
              className="aspect-square overflow-hidden rounded-2xl bg-black"
              style={{ position: 'relative' }}
              onClick={() =>
                handleClickModal(window.URL.createObjectURL(_image))
              }
            >
              <Image
                onClick={() => {
                  setModal(true);
                }}
                src={URL.createObjectURL(_image)}
                alt={`Image ${_index}`}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          ))}
      </div>
      <input
        type="file"
        name="image_URL"
        id="input-file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={fileInput}
        onChange={handleImage}
      />
    </>
  );
};

export default AddTrainerPhotoVideoTab;
