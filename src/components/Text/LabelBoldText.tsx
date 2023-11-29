/**
 * ex : 소속: 경북대학교 와 같이 라벨부분은 bold, 나머지는 일반 text 인 문자열을 표현하는 컴포넌트
 * @param props
 * @returns
 */
type Props = {
  _label: string;
  _text: string;
};

const LabelBoldText = ({ _label, _text }: Props) => {
  return (
    <div className="h-full font-noto text-[13px] text-[#434343]">
      <label className="font-bold">{_label}</label>
      <span>{_text}</span>
    </div>
  );
};

export default LabelBoldText;
