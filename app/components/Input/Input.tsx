import React from 'react'
interface InputProps {
  type: string,
  name: string,
}
export const Input: React.FC<InputProps> = ({type,name, }) => {
  return (
    <div className='flex flex-col text-left text-white'>
      <label htmlFor={name} className=" capitalize">{name}</label>
      <input id={name} type={type} className={` rounded-lg p-2 border-2 text-mainOlive`}/>
    </div>
  )
}

