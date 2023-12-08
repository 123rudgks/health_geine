import { twMerge } from 'tailwind-merge';

interface BasicTextAreaProps extends React.ComponentProps<'textarea'> {
  _wrapperClasses?: string;
}

/**
 * @param textarea 기본 props 사용 가능
 * @className : textarea의 className, 주로 styling에 사용됨
 * @_wrapperClasses : textarea를 감싸는 div의 className, 주로 styling에 사용됨
 */
const BasicTextArea = ({
  className,
  _wrapperClasses,
  ...rest
}: BasicTextAreaProps) => {
  return (
    <div
      className={twMerge(
        'rounded-md p-3 ring-1 ring-primary-400',
        _wrapperClasses
      )}
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
