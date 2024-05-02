import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface BasicTextAreaProps extends React.ComponentProps<'textarea'> {
  _wrapperClasses?: string;
  _onChange?: (value: string) => void;
}

/**
 * @param textarea : 기본 props 사용 가능
 * @param className : textarea의 className, 주로 styling에 사용됨
 * @param _wrapperClasses : textarea를 감싸는 div의 className, 주로 styling에 사용됨
 * @param _onChange : textarea의 상태 변화 감지
 * @param _value : text의 값
 */
const BasicTextArea = ({
  className,
  _wrapperClasses,
  _onChange,
  ...rest
}: BasicTextAreaProps & { _value: string }) => {
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
      className={twMerge(
        'rounded-md p-3 ring-1 ring-primary-400',
        _wrapperClasses
      )}
      onChange={handleChange}
    >
      <textarea
        className={twMerge(
          'h-full w-full resize-none font-noto text-base outline-none placeholder:text-[#C1C1C1]',
          className
        )}
        {...rest}
      />
    </div>
  );
};

export default BasicTextArea;
