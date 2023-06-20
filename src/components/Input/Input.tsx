'use client';
import classNames from 'classnames';
import { FocusEvent, useState } from 'react';
import './Input.css';

interface Props {
  _fontSize?: number;
  _inputClassName?: string;
}
const Input = ({ _inputClassName, _fontSize, ...props }: Props) => {
  const [value, setValue] = useState<string>('');
  const onFocus = (e: FocusEvent<HTMLInputElement, Element>) => {};
  const onBlur = (e: FocusEvent<HTMLInputElement, Element>) => {};

  return (
    <div className="input-container">
      <label
        className={classNames('input-label', {
          'input-label--focused': !!value,
          [`text-[${_fontSize}px]`]: !!_fontSize,
        })}
        htmlFor="textField"
      >
        휴대폰 번호
      </label>
      <input
        id="textField"
        className={classNames({
          [`${_inputClassName}`]: !!_inputClassName,
          [`text-[${_fontSize}px]`]: !!_fontSize,
        })}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
