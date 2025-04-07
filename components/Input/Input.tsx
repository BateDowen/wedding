"use client";
import React from "react";
type InputProps = {
  name: string;
  label: string;
  onChangeValue: Function;
  type: string;
};
export const Input: React.FC<InputProps> = ({
  name,
  label,
  type,
  onChangeValue,
}) => {
  return (
    <div className="flex flex-col text-left  text-white">
      <label htmlFor={name} className="font-Merriweather text-sm capitalize">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        onChange={(e) => onChangeValue(e.target.value)}
        className={` rounded-lg p-2 border-2 text-mainOlive invalid:text-red-600  focus:invalid:ring-red-600 focus:invalid:border-red-600 ease-in duration-200`}
        minLength={2}
      />
    </div>
  );
};
