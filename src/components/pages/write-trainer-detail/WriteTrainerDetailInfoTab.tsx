import BasicTextArea from '@/components/Input/BasicTextarea';
import InputMediumText from '@/components/Text/InputMediumText';

type Props = {};

const WriteTrainerDetailInfoTab = (props: Props) => {
  return (
    <div>
      <div className="whitespace-pre-line font-noto text-[13px] text-[#434343]">
        <BasicTextArea
          _wrapperClasses="ring-0"
          placeholder="내용을 입력해주세요."
        />
      </div>
      <div className="mt-4 flex flex-col gap-3 border-t border-[#F3F3F3] pt-4">
        <InputMediumText
          _label="경력: "
          _input=""
          _placeholder="내용을 입력하세요."
        />
        <InputMediumText
          _label="견적: "
          _input=""
          _placeholder="내용을 입력하세요."
        />
        <InputMediumText
          _label="약력: "
          _input=""
          _placeholder="내용을 입력하세요."
        />
      </div>
    </div>
  );
};

export default WriteTrainerDetailInfoTab;
