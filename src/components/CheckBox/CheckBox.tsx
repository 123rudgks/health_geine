import classNames from 'classnames';
import { KeyofColors } from '../../../tailwind.config.types';
import CheckCircleFill from './icon/CheckCircleFill.svg';
import CheckCircleEmpty from './icon/CheckCircleEmpty.svg';

export interface CheckBoxProps {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text?: string | null;
}

const CheckBox = ({
  id,
  checked,
  text,
  onChange,
  className,
  ...props
}: CheckBoxProps & React.InputHTMLAttributes<HTMLInputElement>) => {
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
            'flex cursor-pointer items-center font-bold transition duration-200',
            {
              'text-[#4B76F4]': checked,
              'text-[#000]': !checked,
            },
            className
          )}
        >
          {checked ? <CheckCircleFill /> : <CheckCircleEmpty />}
          <span className="ml-2">{text}</span>
        </label>
      ) : null}
    </div>
  );
};
export default CheckBox;
