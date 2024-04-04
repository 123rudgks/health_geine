'use client';
import ProfileBuilding from '@/svgs/ProfileBuilding.svg';
import UserCircle from '@/svgs/UserCircle.svg';
import Image from 'next/image';

import ProfileStar from '@/svgs/ProfileStar.svg';
import { ITrainerProfile } from '@/recoil/state';
type Props = ITrainerProfile;
const TrainerListItem = ({
  introduction,
  name,
  university,
  reviewAvg,
  photoPaths,
}: Props) => {
  return (
    <div className="flex gap-[14px] border-b border-[#D9D9D9] pb-5 last:border-none">
      <div className="relative h-[110px] w-[110px] basis-[110px] overflow-hidden rounded-xl">
        <Image src={photoPaths} alt="trainer image" fill />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-noto text-[17px] font-bold">{name}</span>
          <span className="flex items-center gap-1 font-noto text-xs font-bold">
            <UserCircle />
            조회수
          </span>
        </div>
        <div className="f font-noto text-[13px]">{introduction}</div>
        <div className="flex items-center gap-1">
          <div>
            <ProfileBuilding />
          </div>
          <div className="font-noto text-[12px]">
            <span className="mr-1 font-bold">소속:</span>
            <span>{university}</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <ProfileStar />
          </div>
          <div className="font-noto text-[12px]">
            <span className="mr-1 font-bold">리뷰 평점:</span>
            <span>{reviewAvg}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerListItem;
