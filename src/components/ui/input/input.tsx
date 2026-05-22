import React from 'react';

interface IProps {
  className?: string;
  type?: string;
  name: string;
  placeholder?: string;
  value: string;
  required?: boolean;
  onInput: (value: string) => void;
}

export const Input = ({className, type, name, placeholder, value, required, onInput}:IProps) => {
  const handleInput: React.FormEventHandler<HTMLInputElement> = (event) => {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      onInput(target.value);
    }
  };
  return (
    <input
      className={className} type={type} name={name} placeholder={placeholder} value={value} required={required}
      onInput={handleInput}
    />
  );
};
