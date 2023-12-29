import React from 'react';
import InputDelete from '@/svgs/InputDelete.svg';

interface InitInputProps {
  onClick: () => void;
}

const InitInput: React.FC<InitInputProps> = ({ onClick }) => {
  return <InputDelete onClick={onClick} />;
};

export default InitInput;
