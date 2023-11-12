import React from 'react';
import { twMerge } from 'tailwind-merge';

interface TopBottomBarTemplateProps extends React.ComponentProps<'div'> {
  _topNode?: React.ReactNode;
  _bottomNode?: React.ReactNode;
}

/**
 * 상단바와 하단바가 존재하는 페이지의 템플릿. 상단바와 하단바 Node를 props로 받는다. 컨텐츠 부분은 children으로 받는다.
 */
const TopBottomBarTemplate = ({
  _topNode,
  _bottomNode,
  children,
  ...divProps
}: TopBottomBarTemplateProps) => {
  return (
    <div
      {...divProps}
      className={twMerge('h-full w-full ', divProps.className)}
    >
      {_topNode && (
        <div className="fixed left-0 right-0 top-0 z-20 mx-auto h-[108px] w-full  max-w-[500px] ">
          {_topNode}
        </div>
      )}
      <div
        className={twMerge(
          'h-full w-full',
          _topNode ? 'pt-[108px]' : '',
          _bottomNode ? 'pb-[90px]' : ''
        )}
      >
        {children}
      </div>
      {_bottomNode && (
        <div className="fixed  bottom-0 left-0 right-0 z-20 mx-auto h-[90px]  w-full max-w-[500px]">
          {_bottomNode}
        </div>
      )}
    </div>
  );
};

export default TopBottomBarTemplate;
