import { HTMLAttributes } from 'react';

interface ModalBackgroundProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Modal 띄울 때 뒤의 배경화면, Modal창을 children으로 받는다.
 */
const ModalBackground = ({ children, ...rest }: ModalBackgroundProps) => {
  return (
    <div
      className="fixed bottom-0 left-0  right-0 top-0 flex items-center justify-center bg-black bg-opacity-60"
      {...rest}
    >
      {children}
    </div>
  );
};
export default ModalBackground;
