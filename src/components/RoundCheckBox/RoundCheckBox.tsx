import classNames from 'classnames';
import CheckCircleFill from './icon/CheckCircleFill.svg';
import CheckCircleEmpty from './icon/CheckCircleEmpty.svg';

export interface RoundCheckBoxProps {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text?: string | null;
}

const RoundCheckBox = ({
  id,
  checked,
  text,
  onChange,
  className,
  ...props
}: RoundCheckBoxProps & React.InputHTMLAttributes<HTMLInputElement>) => {
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
          {checked ? <CheckCircleFill /> : <CheckCircleEmpty />}

          <span className={classNames('ml-2', className)}>{text}</span>
        </label>
      ) : null}
    </div>
  );
};
export default RoundCheckBox;
