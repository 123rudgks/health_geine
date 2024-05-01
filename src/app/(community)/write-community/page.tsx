'use client';
import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import BackSpaceArrow from '@/svgs/BackSpaceArrow.svg';
import CommunityCalendar from '@/svgs/CommunituCalendar.svg';
import { useRouter } from 'next/navigation';
import BasicInput from '@/components/Input/BasicInput';
import Mask from '@/svgs/InputDelete.svg';
import Button from '@/components/Button/Button';
import Box from '@/components/Box/Box';
import Camera from '@/svgs/ChatCamera.svg';

type Props = {};

const Page = (props: Props) => {
  const router = useRouter();

  return (
    <TopBottomBarTemplate
      _topNode={
        <div className="relative flex h-full w-full items-center">
          <div className="absolute left-[22px]">
            <BackSpaceArrow
              onClick={() => {
                router.back();
              }}
            />
          </div>
          <div className="flex flex-1 justify-center font-noto text-[18px] font-bold text-black">
            글 작성하기
          </div>
        </div>
      }
      _bottomNode={
        <div className="flex justify-center px-14">
          <Button
            ring="none"
            background="primary-400"
            color="white"
            className="h-[50px] w-full rounded-[6px] text-[16px] font-semibold"
          >
            완료
          </Button>
        </div>
      }
      _contentDivProps={{ className: 'bg-white' }}
    >
      <div className="flex flex-col items-start gap-2 px-14">
        <div className="gap-1">
          <div className="font-regular flex gap-2 font-noto text-[18.36px] text-[#434343]">
            <div className="flex items-center justify-center gap-1">
              <CommunityCalendar />
              <p>2023.09.11(월)</p>
            </div>
          </div>
        </div>
        <BasicInput
          _wrapperProps={{
            className:
              'bg-white ring-[#c1c1c1] px-4 rounded-[6px] h-[41px] flex-1 w-full',
          }}
          _inputProps={{
            className:
              'text-[16px] font-noto placeholder:text-black text-black',
            placeholder: '제목을 입력해주세요. (20자 이내)',
          }}
          _value={''}
          _onChange={() => {}}
        />
        <Box className="flex w-full flex-col items-center justify-center rounded-[6px] border border-[#c1c1c1] p-0">
          <textarea
            className="m-2 h-[200px] w-full resize-none p-2 font-noto text-[16px] text-black placeholder:text-black"
            placeholder="내용을 입력해주세요."
          />
          <div className="h-0 w-full border-b border-[#c1c1c1]" />
          <div className="flex items-center justify-center p-4 font-noto text-[14px] font-semibold">
            <Camera />
            <p className="pl-2 ">사진 선택하기</p>
            <p>3/5</p>
          </div>
        </Box>
        <div className="grid w-full grid-cols-3 gap-4 pt-2">
          <div
            className="flex aspect-square justify-end overflow-hidden rounded-2xl bg-black p-2"
            style={{ position: 'relative' }}
          >
            <Mask />
          </div>
        </div>
      </div>
    </TopBottomBarTemplate>
  );
};
export default Page;
