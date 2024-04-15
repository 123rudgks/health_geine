import LabelBoldText from '@/components/Text/LabelBoldText';

type Props = {
  introduction: string;
  month: string;
  cost: string;
  career: string;
};

const TrainerDetailInfoTab = ({ introduction, month, cost, career }: Props) => {
  return (
    <div>
      <div className="whitespace-pre-line font-noto text-[13px] text-[#434343]">
        {introduction}
      </div>
      <div className="mt-4 flex flex-col gap-3 border-t border-[#F3F3F3] pt-4">
        <LabelBoldText _label="경력: " _text={month} />
        <LabelBoldText _label="견적: " _text={cost} />
        <LabelBoldText _label="약력: " _text={career} />
      </div>
    </div>
  );
};

export default TrainerDetailInfoTab;
