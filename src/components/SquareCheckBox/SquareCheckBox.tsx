import classNames from 'classnames';
import CheckSquareFill from './icon/CheckSquareFill.svg';
import CheckSquareEmpty from './icon/CheckSquareEmpty.svg';

export interface SquareCheckBoxProps {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text?: string | null;
}

const SquareCheckBox = ({
  id,
  checked,
  text,
  onChange,
  className,
  ...props
}: SquareCheckBoxProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="flex">
      <label htmlFor={id} className="flex">
        <input
          id={id}
          type="checkbox"
          onChange={onChange}
          checked={checked}
          className={classNames('hidden cursor-pointer')}
          {...props}
        />
      </label>
      {text ? (
        <label
          htmlFor={id}
          className={classNames(
            'flex cursor-pointer items-center text-[14px] font-[600] transition duration-200',
            {
              'text-[#4B76F4]': checked,
              'text-[#000]': !checked,
            },
            className
          )}
        >
          {checked ? <CheckSquareFill /> : <CheckSquareEmpty />}

          <span className={classNames('ml-2', className)}>{text}</span>
        </label>
      ) : null}
    </div>
  );
};
export default SquareCheckBox;
