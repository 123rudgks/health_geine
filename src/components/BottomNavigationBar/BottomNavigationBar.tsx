'use client';
import { ReactNode, useState } from 'react';
import { useRouter } from 'next/navigation';
import EmptyChatting from './icon/EmptyChatting.svg';
import EmptyHealth from './icon/EmptyHealth.svg';
import EmptyHome from './icon/EmptyHome.svg';
import EmptyMypage from './icon/EmptyMypage.svg';
import EmptyStar from './icon/EmptyStar.svg';
import FillChatting from './icon/FillChatting.svg';
import FillHealth from './icon/FillHealth.svg';
import FillHome from './icon/FillHome.svg';
import FillMypage from './icon/FillMypage.svg';
import FillStar from './icon/FillStar.svg';

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

const BottomNavigationBar = () => {
  const router = useRouter();
  const [activeToggle, setActiveToggle] = useState<number | null>(null);

  const handleToggleClick = (index: number) => {
    if (index === activeToggle) {
      setActiveToggle(null);
    } else {
      setActiveToggle(index);
    }
  };

  return (
    <div className="fixed bottom-0 h-[90px] w-[500px] bg-white shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.1)]">
      <nav className="flex h-full w-full  items-center justify-around ">
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
      </nav>
    </div>
  );
};

export default BottomNavigationBar;
