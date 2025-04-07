"use client";
import React, { FormEvent,  useState } from "react";
import { Input } from "../Input/Input";
import { Checkbox } from "../Input/Checkbox";
import { saveGuest } from "@/app/utils/api";
type FormProps = {
  setHideImage: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Form: React.FC<FormProps> = ({ setHideImage }) => {
  const [isComing, setIsComing] = useState<string>("Да");
  const [menuType, setMenuType] = useState<string>("Месно");
  const [companionMenuType, setCompanionMenuType] = useState<string>("Месно");
  const [isExpand, setIsExpand] = useState<true | false>(false);
  const [hotel, setHotel] = useState<true | false>(false);
  const [loading, setLoading] = useState<true | false>(false);
  const [completed, setCompleted] = useState<true | false>(false);

  const handleCheckboxChange = (name: string, handleFn: React.Dispatch<React.SetStateAction<string>>) => {
    handleFn((prev: string) => (prev === name ? "" : name));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const firstName = formData.get("Име") as string;
    const lastName = formData.get("Фамилия") as string;
    const email = formData.get("Email") as string;
    const companionName = formData.get("Име на придружителя") as string;
    setLoading(true);
    await saveGuest({
      firstName,
      lastName,
      email,
      hotel,
      isComing,
      companionName,
      companionMenuType,
      menuType,
    });

    console.log({
      firstName,
      lastName,
      email,
      hotel,
      isComing,
      companionName,
      menuType,
      companionMenuType,
    });
    setLoading(false);
    setCompleted(true);
    setHideImage(true);
  };
  return (
    <>
      {completed ? (
        <p className="font-Pacifico my-8 py-5 text-4xl  text-center text-mainOlive">
          Благодарим Ви!
        </p>
      ) : loading ? (
        <p className="font-Merriweather mx-auto my-8 py-5 text-4xl  text-center w-[15ch] overflow-hidden  typing-animation">
          Зареждане...
        </p>
      ) : (
        <div>
          <h2 className="font-Merriweather my-8 py-5 text-4xl  text-center text-mainOlive">
            Ще присъствате ли на сватбата?
          </h2>
          <form
            onSubmit={handleSubmit}
            // action={}
            className=" shadow-[1px_2px_40px_-15px_rgba(0,0,0,0.3)] w-[70%] mx-auto p-5 bg-ligthOlive text-center rounded-xl"
          >
            <div className="flex laptop:flex-row flex-col  justify-between mx-auto">
              <Input
                type="text"
                label="Име"
                name="Име"
                // onChangeValue={() => {}}
              />
              <Input
                type="text"
                label="Фамилия"
                name="Фамилия"
                // onChangeValue={() => {}}
              />
            </div>
            <Input
              type="email"
              label="Email"
              name="Email"
              // onChangeValue={() => {}}
            />
            <div className=" border-b-[1px] border-b-white py-2">
              <p className="text-white text-left mt-3 font-Merriweather ">
                Ще присъствате ли?
              </p>
              <Checkbox
                name="Да"
                label="Да, естествено!"
                checked={isComing === "Да"}
                onChange={() => handleCheckboxChange("Да", setIsComing)}
              />
              <Checkbox
                name="Не"
                label="Не, нямам възможност."
                checked={isComing === "Не"}
                onChange={() => handleCheckboxChange("Не", setIsComing)}
              />
            </div>
            <div className=" border-b-[1px] border-b-white py-2">
              <p className="text-white text-left mt-3  font-Merriweather">
                Ще имате ли придружител?
              </p>
              <Checkbox
                name="companion"
                label="Да"
                checked={isExpand}
                onChange={() => {
                  setIsExpand(!isExpand);
                }}
              />
              {isExpand && (
                <div
                  className={`${
                    isExpand ? "block opacity-100" : "hidden opacity-0 "
                  } transition-all duration-200 ease-linear  `}
                >
                  <Input
                    type="text"
                    label="Име на придружителя:"
                    name="Име на придружителя"
                    // onChangeValue={() => {}}
                  />
                  <div className=" border-b-[1px] border-b-white py-2">
                    <p className="text-white text-left mt-3 font-Merriweather ">
                      Изберете вариант на меню на вашият придружител?
                    </p>
                    <Checkbox
                      name="Вегетарианско"
                      label="Вегетарианско"
                      checked={companionMenuType === "Вегетарианско"}
                      onChange={() =>
                        handleCheckboxChange(
                          "Вегетарианско",
                          setCompanionMenuType
                        )
                      }
                    />
                    <Checkbox
                      name="Веган"
                      label="Веган"
                      checked={companionMenuType === "Веган"}
                      onChange={() =>
                        handleCheckboxChange("Веган", setCompanionMenuType)
                      }
                    />
                    <Checkbox
                      name="Месно"
                      label="Месно"
                      checked={companionMenuType === "Месно"}
                      onChange={() =>
                        handleCheckboxChange("Месно", setCompanionMenuType)
                      }
                    />
                  </div>
                </div>
              )}
            </div>
            <div className=" border-b-[1px] border-b-white py-2">
              <p className="text-white text-left mt-3  font-Merriweather">
                Изберете кой вариант на меню Ви допада?
              </p>
              <Checkbox
                name="Вегетарианско"
                label="Вегетарианско"
                checked={menuType === "Вегетарианско"}
                onChange={() =>
                  handleCheckboxChange("Вегетарианско", setMenuType)
                }
              />
              <Checkbox
                name="Веган"
                label="Веган"
                checked={menuType === "Веган"}
                onChange={() => handleCheckboxChange("Веган", setMenuType)}
              />
              <Checkbox
                name="Месно"
                label="Месно"
                checked={menuType === "Месно"}
                onChange={() => handleCheckboxChange("Месно", setMenuType)}
              />
            </div>
            <div className=" border-b-[1px] border-b-white py-2">
              <p className="text-white text-left mt-3 font-Merriweather ">
                За гостите, които не са от Пловдив, може да осигурим нощувка.
                Желаете ли?
              </p>
              <Checkbox
                name="hotel"
                label="Да"
                checked={hotel}
                onChange={() => setHotel(!hotel)}
              />
            </div>
            <button className=" m-2 rounded-lg p-2 border-2 font-Merriweather bg-white text-mainOlive">
              Изпрати
            </button>
            <p className="text-white text-center m-3 font-Merriweather ">
              Молим да потвърдите вашето присъствие до 30-ти юни!
            </p>
          </form>
        </div>
      )}
    </>
  );
};
