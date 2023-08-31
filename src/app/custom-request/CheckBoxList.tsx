import { useState } from 'react';
import CheckBox from '@/components/CheckBox/CheckBox';
import Button from '@/components/Button/Button';
import { Question } from './page';

interface CheckboxItem {
  id: string;
  label: string;
  checked: boolean;
}

interface LayoutProps {
  id: string;
  dataset: Question[];
}

const CheckBoxList = ({ id, dataset }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [checkboxes, setCheckboxes] = useState<{
    purpose: CheckboxItem[];
    days: CheckboxItem[];
  }>({
    purpose: [
      { id: 'checkbox1', label: '체력 증진', checked: false },
      { id: 'checkbox2', label: '다이어트', checked: false },
      { id: 'checkbox3', label: '근력 강화', checked: false },
      { id: 'checkbox4', label: '체중 증가', checked: false },
      { id: 'checkbox5', label: '바디 프로필', checked: false },
      { id: 'checkbox6', label: '체형 교정', checked: false },
      { id: 'checkbox7', label: '기타', checked: false },
    ],
    days: [
      { id: 'day1', label: '트레이너와 상담 후 결정', checked: false },
      { id: 'mon', label: '월요일', checked: false },
      { id: 'tue', label: '화요일', checked: false },
      { id: 'wed', label: '수요일', checked: false },
      { id: 'thu', label: '목요일', checked: false },
      { id: 'fri', label: '금요일', checked: false },
      { id: 'sat', label: '토요일', checked: false },
      { id: 'sun', label: '일요일', checked: false },
    ],
  });

  const currentCheckboxKey = currentPage === 0 ? 'purpose' : 'days';
  const currentCheckboxes = checkboxes[currentCheckboxKey];

  const handleCheckboxChange = (checkboxId: string) => {
    const updatedCheckboxes = {
      ...checkboxes,
      [currentCheckboxKey]: currentCheckboxes.map((checkbox) => {
        if (checkbox.id === checkboxId) {
          return { ...checkbox, checked: !checkbox.checked };
        }
        return checkbox;
      }),
    };
    setCheckboxes(updatedCheckboxes);
  };

  const handleSubmit = () => {
    const selectedCheckboxes = currentCheckboxes.filter(
      (checkbox) => checkbox.checked
    );
    // 서버로 선택된 체크박스 정보를 전송하는 로직 수행
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < 1) {
      setCurrentPage(currentPage + 1);
    } else {
      handleSubmit();
    }
  };

  return (
    <>
      {dataset &&
        dataset.map((item) => {
          if (item.id === id) {
            return (
              <div key={item.id} id={item.id}>
                <h1 className="text-[17px] font-[600]">{item.desc}</h1>
                {/* <ProgressBar className="h-[9.02px]" percentage="" /> */}
              </div>
            );
          }
          return null;
        })}
      {currentCheckboxes.map((checkbox) => (
        <CheckBox
          key={checkbox.id}
          id={checkbox.id}
          checked={checkbox.checked}
          onChange={() => handleCheckboxChange(checkbox.id)}
          text={checkbox.label}
        />
      ))}
      <div className="flex justify-between">
        <Button
          color="white"
          ring="primary-100"
          background="primary-100"
          className="mt-[13.3px] flex h-[25.2px] w-[72px] items-center justify-center rounded-[6px] text-[11px] font-[600]"
          onClick={handlePrevious}
        >
          이전
        </Button>
        <Button
          color="white"
          ring="primary-400"
          background="primary-400"
          style={{
            boxShadow: '0px 0px 9.620527267456055px rgba(75, 118, 244, 0.7)',
          }}
          className="mt-[13.3px] flex h-[25.2px] w-[72px] items-center justify-center rounded-[6px] text-[11px] font-[600]"
          onClick={handleNext}
        >
          {currentPage === 1 ? '완료!' : '다음'}
        </Button>
      </div>
    </>
  );
};

export default CheckBoxList;
