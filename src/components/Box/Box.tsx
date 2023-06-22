import classNames from 'classnames';
import { KeyofColors } from '../../../tailwind.config.types';

/* ------------------------------------------------------------ 
ring : Box 컴포넌트의 외각선 색상
 ------------------------------------------------------------ */
interface BoxProps {
  ring: 'none' | KeyofColors;
}

const ringClasses: Record<BoxProps['ring'], string> = {
  none: 'ring-0',
  'primary-100': 'ring-primary-100',
  'primary-200': 'ring-primary-200',
  'primary-300': 'ring-primary-300',
  'primary-400': 'ring-primary-400',
};
const baseClasses = 'ring-2';
const Box = ({
  ring,
  className,
  ...props
}: BoxProps & React.ComponentProps<'div'>) => {
  return (
    <div
      className={classNames(className, baseClasses, ringClasses[ring])}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default Box;
