"use client";
import React, { useState } from "react";
import { Input } from "../Input/Input";
import { Checkbox } from "../Input/Checkbox";

export const Form = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [menuType, setMenuType] = useState<string | null>(null);
  const [isExpand, setIsExpand] = useState<true | false>(false);

  const handleCheckboxChange = (name: string, handleFn: Function) => {
    handleFn((prev: string) => (prev === name ? null : name));
  };
  return (
    <form className=" shadow-[1px_2px_40px_-15px_rgba(0,0,0,0.3)] w-[70%] mx-auto p-5 bg-ligthOlive text-center rounded-xl">
      <div className="flex laptop:flex-row flex-col  justify-between mx-auto">
        <Input type="text" name="Име" />
        <Input type="text" name="Фамилия" />
      </div>
      <Input type="email" name="Email" />
      <div className=" border-b-[1px] border-b-white">
        <p className="text-white text-left mt-3  ">Ще присъствате ли?</p>
        <Checkbox
          name="Да"
          label="Да"
          checked={selected === "yes"}
          onChange={() => handleCheckboxChange("yes", setSelected)}
        />
        <Checkbox
          name="Не"
          label="Не"
          checked={selected === "no"}
          onChange={() => handleCheckboxChange("no", setSelected)}
        />
      </div>
      <div>
        <p className="text-white text-left mt-3  ">Ще имате ли придружител?</p>
        <Checkbox
          name="companion"
          label="Да"
          checked={isExpand}
          onChange={() => setIsExpand(!isExpand)}
        />
        <div
          className={`${
            isExpand ? "h-full opacity-100" : "opacity-0 h-0"
          } transition-all duration-200 ease-linear  `}
        >
          <Input type="text" name="Име на придружителя" />
        </div>
      </div>
      <div>
        <p className="text-white text-left mt-3  ">
          Изберете кой вариант на меню ви допада
        </p>
        <Checkbox
          name="Вариант-1"
          label="Вариант-1"
          checked={menuType === "Вариант-1"}
          onChange={() => handleCheckboxChange("Вариант-1", setMenuType)}
        />
        <Checkbox
          name="Вариант-2"
          label="Вариант-2"
          checked={menuType === "Вариант-2"}
          onChange={() => handleCheckboxChange("Вариант-2", setMenuType)}
        />
      </div>
      <button className=" m-2 rounded-lg p-2 border-2  bg-white text-mainOlive">Изпрати</button>
    </form>
  );
};
