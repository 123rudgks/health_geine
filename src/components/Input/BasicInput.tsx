import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface BasicInputProps {
  _wrapperProps?: React.ComponentProps<'div'>;
  _inputProps?: React.ComponentProps<'input'>;
  _state?: 'error' | 'default';
  _rightNode?: React.ReactNode;
  _onChange?: (value: string) => void;
  _value?: string;
}

const inputWrapperClasses = {
  common:
    'rounded-lg ring-1 ring-primary-400 p-2 flex focus-within:bg-[#f3f3f3]',
  default: 'ring-[#f3f3f3] focus-within:bg-[#f3f3f3]',
  error: 'ring-[#F44B4B] focus-within:bg-[#f3f3f3]',
};
const inputClasses = {
  default: 'outline-none flex-1 focus-within:bg-[#f3f3f3]',
  'default-font':
    'font-noto placeholder:text-[#787878] text-[15px] font-normal leading-normal',
  'default-ring': '',
};

/**
 * BasicInput 컴포넌트 : 기본적인 input 컴포넌트
 * @param _wrapperProps : input을 감싸는 div의 props
 * @param _inputProps : input의 props
 * @param _state : input의 상태 (default, error), undefined일 자유롭게 스타일링 가능
 * @param _rightNode : input 오른쪽에 위치할 노드, x 아이콘 등 필요한 부분 추가 가능
 * @param _onChange : input의 상태 변화 감지
 * @param _value : input의 값
 */
const BasicInput = ({
  _wrapperProps,
  _inputProps,
  _state,
  _rightNode,
  _onChange,
  _value,
}: BasicInputProps & { _value: string }) => {
  const [isValidFormat, setIsValidFormat] = useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIsValidFormat(true); // 입력 값이 변경되면 항상 유효한 포맷으로 설정
    if (_onChange) {
      _onChange(value); // 부모 컴포넌트에 입력 값 변경 알림
    }
  };

  return (
    <div
      {..._wrapperProps}
      className={twMerge(
        inputWrapperClasses.common,
        _state ? inputWrapperClasses[_state] : '',
        _wrapperProps?.className,
        isValidFormat ? '' : inputWrapperClasses.default
      )}
    >
      <input
        {..._inputProps}
        value={_value}
        onChange={handleChange}
        className={twMerge(
          inputClasses.default,
          inputClasses['default-font'],
          _inputProps?.className
        )}
      />
      {_rightNode && <div className="flex items-center">{_rightNode}</div>}
    </div>
  );
};

export default BasicInput;
