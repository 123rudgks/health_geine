import classNames from 'classnames';
import { KeyofColors } from '../../../tailwind.config.types';

export interface ButtonProps {
  font: 'light' | 'normal' | 'bold';
  size: 'small' | 'medium' | 'large';
  impact:
    | 'none'
    | 'shadow-primary-100'
    | 'shadow-primary-200'
    | 'shadow-primary-300'
    | 'shadow-primary-400'
    | 'shadow-primary-500';
  shape: 'square' | 'rounded' | 'full';
  ring: 'none' | 'yellow' | 'gray-100' | KeyofColors;
  color: 'white' | 'gray-200' | 'gray-300' | 'gray-400' | KeyofColors;
  background: 'white' | 'yellow' | 'gray-100' | KeyofColors;
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

const impactClasses: Record<ButtonProps['impact'], string> = {
  none: 'shadow-none',
  'shadow-primary-100': 'shadow-2xl shadow-primary-100',
  'shadow-primary-200': 'shadow-2xl shadow-primary-200',
  'shadow-primary-300': 'shadow-2xl shadow-primary-300',
  'shadow-primary-400': 'shadow-2xl shadow-primary-400',
  'shadow-primary-500': 'shadow-2xl shadow-[#5580FF]',
};

const fontClasses: Record<ButtonProps['font'], string> = {
  bold: 'font-semibold',
  light: 'font-light',
  normal: 'font-normal',
};

const sizeClasses: Record<ButtonProps['size'], string> = {
  large: 'px-7 py-2.5 text-lg',
  medium: 'px-5 py-2 text-base',
  small: 'px-3 py-1 text-sm',
};

const shapeClasses: Record<ButtonProps['shape'], string> = {
  square: 'rounded-none',
  rounded: 'rounded-md',
  full: 'rounded-full',
};

const ringClasses: Record<ButtonProps['ring'], string> = {
  none: 'ring-white',
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
  'gray-100': 'bg-[#e9e9e9]',
  'primary-100': 'bg-primary-100',
  'primary-200': 'bg-primary-200',
  'primary-300': 'bg-primary-300',
  'primary-400': 'bg-primary-400',
};

const Button = ({
  size,
  shape,
  background,
  impact,
  ring,
  font,
  color,
  children,
  ...props
}: ButtonProps & React.ComponentProps<'button'>) => {
  return (
    <button
      className={classNames(
        baseClasses,
        colorClasses[color],
        impactClasses[impact],
        fontClasses[font],
        backgroundClasses[background],
        sizeClasses[size],
        shapeClasses[shape],
        ringClasses[ring]
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
