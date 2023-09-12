'use client';
import { useState, ReactNode } from 'react';
import Box from '../Box/Box';

import FillHome from './icon/FillHome.svg';
import FillStar from './icon/FillStar.svg';
import FillHealth from './icon/FillHealth.svg';
import FillChatting from './icon/FillChatting.svg';
import FillMypage from './icon/FillMypage.svg';
import EmptyHome from './icon/EmptyHome.svg';
import EmptyStar from './icon/EmptyStar.svg';
import EmptyHealth from './icon/EmptyHealth.svg';
import EmptyChatting from './icon/EmptyChatting.svg';
import EmptyMypage from './icon/EmptyMypage.svg';

type IconToggleProps = {
  filledIcon: ReactNode;
  emptyIcon: ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
};

const IconToggle: React.FC<IconToggleProps> = ({
  filledIcon,
  emptyIcon,
  label,
  active,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="flex flex-col items-center">
      {active ? filledIcon : emptyIcon}
      <p className="text-[11.58px] font-black">{label}</p>
    </div>
  );
};

const BottomNaviationbar = () => {
  const [activeToggle, setActiveToggle] = useState<number | null>(null);

  const handleToggleClick = (index: number) => {
    if (index === activeToggle) {
      setActiveToggle(null);
    } else {
      setActiveToggle(index);
    }
  };

  return (
    <>
      <Box
        ring="none"
        className="align-center flex h-[80px] w-[100%] items-center justify-center gap-[20px] bg-white"
      >
        <IconToggle
          filledIcon={<FillHome />}
          emptyIcon={<EmptyHome />}
          label="홈"
          active={activeToggle === 0}
          onClick={() => handleToggleClick(0)}
        />
        <IconToggle
          filledIcon={<FillStar />}
          emptyIcon={<EmptyStar />}
          label="트레이너"
          active={activeToggle === 1}
          onClick={() => handleToggleClick(1)}
        />
        <IconToggle
          filledIcon={<FillHealth />}
          emptyIcon={<EmptyHealth />}
          label="헬스관리"
          active={activeToggle === 2}
          onClick={() => handleToggleClick(2)}
        />
        <IconToggle
          filledIcon={<FillChatting />}
          emptyIcon={<EmptyChatting />}
          label="커뮤니티"
          active={activeToggle === 3}
          onClick={() => handleToggleClick(3)}
        />
        <IconToggle
          filledIcon={<FillMypage />}
          emptyIcon={<EmptyMypage />}
          label="마이페이지"
          active={activeToggle === 4}
          onClick={() => handleToggleClick(4)}
        />
      </Box>
    </>
  );
};

export default BottomNaviationbar;
