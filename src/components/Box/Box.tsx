import { twMerge } from 'tailwind-merge';

interface BoxProps extends React.ComponentProps<'div'> {
  // 향후 필요시 추가
}

/**
 * Box 컴포넌트 : 박스 형태의 container 혹은 wrapper의 용도로 사용한다.
 * 박스의 경우 통일된 디자인이 없어서 기본 형태를 참고하여 className을 통해 style 변경하여 사용하도록 한다.
 */
const basicClasses = 'bg-white rounded-md p-3';
const Box = ({ children, className, ...rest }: BoxProps) => {
  return (
    <div className={twMerge(basicClasses, className)} {...rest}>
      {children}
    </div>
  );
};

export default Box;
