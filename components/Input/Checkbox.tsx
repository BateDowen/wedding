'use-client'
import React, { useState } from 'react'
interface InputProps {
name: string,
label: string
onChange: (arg: string | boolean) => void,
checked: boolean
}
export const Checkbox: React.FC<InputProps> = ({name,checked,label,onChange}) => {

  return (
    <div className="flex flex-row gap-3  align-baseline text-white">
          <label htmlFor={name} className="font-Merriweather text-sm capitalize ">
            {label}
          </label>
          <input
            id={name}
            name={name}
            checked={checked}
            onChange={() => onChange(name)}
            type="checkbox"
          />
        </div>
  )
}

