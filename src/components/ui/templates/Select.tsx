import React from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
}

const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  className = "",
  placeholder,
  disabled = false,
  name,
}) => {
  return (
    <select
      name={name}
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      className={`converter-select ${className}`}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
