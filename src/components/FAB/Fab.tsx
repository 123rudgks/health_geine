import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import FABChat from './icon/FABChat.png';
import FABEdit from './icon/FABEdit.png';

interface BasicFabProps {
  _imageName?: 'edit' | 'chat';
  _bottomNode?: React.ReactNode;
  _onClick(): void;
  className?: string;
}

const Fab = ({
  _imageName,
  _bottomNode,
  _onClick,
  className,
}: BasicFabProps) => {
  const fabClasses = twMerge(
    'align-center flex flex-col items-center',
    className
  );

  return (
    <>
      <div className="fixed bottom-[120px] right-[20px]">
        <button onClick={_onClick} className={fabClasses}>
          <div
            className="flex h-[57px] w-[57px] items-center justify-center rounded-full bg-primary-400
        shadow-[rgba(0,_0,_0,_0.3)_0px_2px_20px_1px]"
          >
            <Image
              src={_imageName === 'chat' ? FABChat : FABEdit}
              alt="image"
              width={27}
              height={27}
            />
          </div>
          {_bottomNode && (
            <div className="flex flex-col items-center pt-1">
              <div className="h-0 w-0 border-b-[10px] border-l-[10px] border-r-[10px] border-b-primary-200 border-l-transparent border-r-transparent" />
              <div className="align-center flex rounded-[27px] bg-primary-200 px-4 py-2 font-noto text-[10.12px] font-medium text-white">
                {_bottomNode}
              </div>
            </div>
          )}
        </button>
      </div>
    </>
  );
};
export default Fab;
