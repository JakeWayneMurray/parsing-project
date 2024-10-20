import React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label className="checkbox-container mr-4">
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange} 
        className="checkbox-input checkbox-sm mr-2"
      />
      <span className="checkbox-checkmark"></span>
      <small>{label}</small>
    </label>
  );
};

export default Checkbox;
