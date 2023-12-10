import { HTMLAttributes } from 'react';

interface ModalBackgroundProps extends HTMLAttributes<HTMLDivElement> {}

const ModalBackground = ({ children, ...rest }: ModalBackgroundProps) => {
  return (
    <div
      className="fixed bottom-0 left-0  right-0 top-0 bg-black bg-opacity-60"
      {...rest}
    >
      {children}
    </div>
  );
};
export default ModalBackground;
