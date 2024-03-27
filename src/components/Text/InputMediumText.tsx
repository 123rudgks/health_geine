import { useState } from 'react';

/**
 * ex : 소속: 경북대학교 와 같이 라벨부분은 bold, 나머지는 일반 text input인 문자열을 표현하는 컴포넌트
 * @param props
 * @returns
 */
type Props = {
  _label: string;
  _input: string;
  _placeholder: string;
};

const InputMediumText = ({ _label, _input, _placeholder }: Props) => {
  const [inputValue, setInputValue] = useState(_input);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex h-full gap-2 font-noto text-[13px] text-[#434343]">
      <label className="font-bold">{_label}</label>
      <input
        type="text"
        placeholder={_placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputMediumText;
