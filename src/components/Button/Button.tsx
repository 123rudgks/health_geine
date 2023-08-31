import classNames from 'classnames';
import { KeyofColors } from '../../../tailwind.config.types';

export interface ButtonProps {
  ring: 'none' | 'yellow' | 'gray-100' | KeyofColors;
  color: 'white' | 'gray-200' | 'gray-300' | 'gray-400' | KeyofColors;
  background: 'none' | 'white' | 'yellow' | 'gray-100' | KeyofColors;
}
const baseClasses = 'ring-2';

const colorClasses: Record<ButtonProps['color'], string> = {
  white: 'text-[#fff]',
  'gray-200': 'text-[#959595]',
  'gray-300': 'text-[#5a5a5a]',
  'gray-400': 'text-[#353535]',
  'primary-100': 'text-primary-100',
  'primary-200': 'text-primary-200',
  'primary-300': 'text-primary-300',
  'primary-400': 'text-primary-400',
};

const ringClasses: Record<ButtonProps['ring'], string> = {
  none: 'ring-transparent',
  yellow: 'ring-[#FAE54C]',
  'gray-100': 'ring-[#e9e9e9]',
  'primary-100': 'ring-primary-100',
  'primary-200': 'ring-primary-200',
  'primary-300': 'ring-primary-300',
  'primary-400': 'ring-primary-400',
};

const backgroundClasses: Record<ButtonProps['background'], string> = {
  white: 'bg-white',
  yellow: 'bg-[#FAE54C]',
  none: 'bg-transparent',
  'gray-100': 'bg-[#e9e9e9]',
  'primary-100': 'bg-primary-100',
  'primary-200': 'bg-primary-200',
  'primary-300': 'bg-primary-300',
  'primary-400': 'bg-primary-400',
};

const Button = ({
  background,
  ring,
  color,
  children,
  className,
  ...props
}: ButtonProps & React.ComponentProps<'button'>) => {
  return (
    <button
      className={classNames(
        baseClasses,
        colorClasses[color],
        backgroundClasses[background],
        ringClasses[ring],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
