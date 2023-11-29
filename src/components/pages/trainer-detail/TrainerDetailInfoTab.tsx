import LabelBoldText from '@/components/Text/LabelBoldText';

type Props = {};

const TrainerDetailInfoTab = (props: Props) => {
  return (
    <div>
      <div className="whitespace-pre-line font-noto text-[13px] text-[#434343]">
        {`체계적이고 전문적으로 관리하고 지도해드리겠습니다.
    
    안녕하세요!
    경북대학교 경력 2년차 트레이너 입니다.
    체형관리는 ~~`}
      </div>
      <div className="mt-4 flex flex-col gap-3 border-t border-[#F3F3F3] pt-4">
        <LabelBoldText _label="경력: " _text="2년" />
      </div>
    </div>
  );
};

export default TrainerDetailInfoTab;
