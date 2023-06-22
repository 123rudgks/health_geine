import Box from '@/components/Box/Box';
import classNames from 'classnames';
import XCircle from '../icon/XCircle.svg';

/* ------------------------------------------------------------
_input : input 태그의 value
_setInput : input 태그의 value를 변경하는 함수
_onCancel : input 태그의 value를 초기화하는 함수
_disabled : input 태그의 disabled 여부
------------------------------------------------------------ */
interface FormInputProps {
  _value: string;
  _setValue: (value: string) => void;
  _onCancel?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  _disabled?: boolean;
}

const FormInput = ({
  _value,
  _setValue,
  _onCancel,
  _disabled,
  className,
  ...props
}: FormInputProps & React.ComponentProps<'div'>) => {
  return (
    <Box
      ring={'primary-400'}
      className={classNames(
        'flex rounded-[10px] px-3.5 py-4',
        {
          'bg-[#F3F3F3] ring-0': _disabled,
        },
        className
      )}
      {...props}
    >
      <input
        className="flex-1 bg-transparent text-[13px] text-[#5A5A5A]  outline-none"
        value={_value}
        onChange={(e) => {
          _setValue(e.target.value);
        }}
        disabled={_disabled}
      />
      {_onCancel && (
        <div onClick={_onCancel} className="cursor-pointer">
          <XCircle />
        </div>
      )}
    </Box>
  );
};

export default FormInput;
