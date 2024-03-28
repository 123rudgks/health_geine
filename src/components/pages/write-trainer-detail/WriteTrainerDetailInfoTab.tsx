import BasicTextArea from '@/components/Input/BasicTextarea';
import InputMediumText from '@/components/Text/InputMediumText';

type Props = {};

interface WriteTrainerDetailInfoTabProps {
  formData: {
    [key: string]: string;
  };
  onChange: (key: string, value: string) => void;
}

const WriteTrainerDetailInfoTab: React.FC<WriteTrainerDetailInfoTabProps> = ({
  formData,
  onChange,
}) => {
  return (
    <div>
      <div className="whitespace-pre-line font-noto text-[13px] text-[#434343]">
        <BasicTextArea
          _wrapperClasses="ring-0"
          placeholder="내용을 입력해주세요."
          value={formData.introduction}
          onChange={(e) => onChange('introduction', e.target.value)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-3 border-t border-[#F3F3F3] pt-4">
        <InputMediumText
          _label="경력: "
          _input={formData.month}
          _placeholder="내용을 입력하세요."
          _onChange={(value) => onChange('month', value)}
        />
        <InputMediumText
          _label="견적: "
          _input={formData.cost}
          _placeholder="내용을 입력하세요."
          _onChange={(value) => onChange('cost', value)}
        />
        <InputMediumText
          _label="약력: "
          _input={formData.career}
          _placeholder="내용을 입력하세요."
          _onChange={(value) => onChange('career', value)}
        />
      </div>
    </div>
  );
};

export default WriteTrainerDetailInfoTab;
