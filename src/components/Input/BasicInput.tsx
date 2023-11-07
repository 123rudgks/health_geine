import { twMerge } from 'tailwind-merge';

interface BasicInputProps {
  _wrapperProps?: React.ComponentProps<'div'>;
  _inputProps?: React.ComponentProps<'input'>;
  _state?: 'error' | 'default';
  _rightNode?: React.ReactNode;
}

const inputWrapperClasses = {
  common: 'rounded-lg ring-1 ring-primary-400 p-2 flex',
  default: 'ring-[#787878] focus-within:ring-primary-400',
  error: 'ring-[#F44B4B]',
};
const inputClasses = {
  default: 'outline-none flex-1',
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
 */
const BasicInput = ({
  _wrapperProps,
  _inputProps,
  _state,
  _rightNode,
}: BasicInputProps) => {
  return (
    <div
      {..._wrapperProps}
      className={twMerge(
        inputWrapperClasses.common,
        _state ? inputWrapperClasses[_state] : '',
        _wrapperProps?.className
      )}
    >
      <input
        {..._inputProps}
        className={twMerge(
          inputClasses.default,
          inputClasses['default-font'],
          _inputProps?.className
        )}
      />
      {_rightNode}
    </div>
  );
};

export default BasicInput;
