import React from "react";
import { allGuests } from "../utils/api";
type PageProps = {
  searchParams: {
    [key: string]: string | undefined;
  };
};
type Guest = {
  _id: string;
  firstName?: String;
  lastName?: String;
  email?: String;
  hotel?: Boolean;
  isComing?: String;
  companionName?: String;
  companionMenuType?: String;
  menuType?: String;
};
const page = async ({ searchParams }: PageProps) => {
  const secret = searchParams.secret ?? "";
  const guests = await allGuests(secret);
  return (
    <div className="font-Pacifico relative z-10 my-8 py-5 text-4xl  text-center text-mainOlive">
      All guests
      <div className=" mx-auto w-[80%] laptop:w-[50%]">
        {guests.guests &&
          guests.guests.map((guest: Guest) => {
            return (
              <div key={guest._id} className="flex flex-col my-4 items-center">
                <div className="flex ">
                  <div className="flex gap-2">
                    <p className="font-Merriweather text-base font-bold ">
                      {guest.firstName}
                    </p>
                    <p className="font-Merriweather text-base font-bold">
                      {guest.lastName}
                    </p>
                  </div>
                  <p className="font-Merriweather text-base font-bold">
                    {" -"} {guest.isComing ? "Да" : "Не"}
                  </p>
                </div>
                <p className="font-Merriweather text-base text-left font-bold">
                  {"Меню:"} {guest.menuType}
                </p>
                <p className="font-Merriweather text-base text-left font-bold">
                  {"Хотел:"} {guest.hotel ? "Да" : "Не"}
                </p>
                {guest.companionName && (
                  <div>
                    <p className="font-Merriweather text-base text-left font-bold">
                      {`Придружител: ${guest.companionName}`}
                    </p>
                    <p className="font-Merriweather text-base text-left font-bold ">
                      {`Придружител меню: ${guest.companionMenuType}`}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default page;
