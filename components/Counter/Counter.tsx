"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Counter = () => {
  const [endTime, setEndTime] = useState(
    new Date("September 13, 2025 18:30:00").getTime()
  );
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeLeft = (endTime - currentTime) / 1000;

      if (timeLeft > 0) {
        setDays(Math.floor(timeLeft / (24 * 60 * 60)));
        setHours(Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60)));
        setMinutes(Math.floor((timeLeft % (60 * 60)) / 60));
        setSeconds(Math.floor(timeLeft % 60));
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [endTime]);

//Image slider
// const [currentImageIndex, setCurrenImageIdex] = useState(0);
// interface ImageItem {
//   image: string;
//   alt: string;
// }
// const images: ImageItem[] = [
//   { image : '/us.png' , alt: 'us'},
//   { image : '/kumove.png' , alt: 'kumove'},
//   { image : '/us.png' , alt: 'us'},
//   { image : '/kumove.png' , alt: 'kumove'},
// ]
// useEffect(() => {
//   const interval = setInterval(() => {
//    console.log('render');
//     setCurrenImageIdex((prev : number) => (
//       prev < images.length - 1 ? prev + 1 : 0 
//     ))
//   }, 2000)
//   return () => clearInterval(interval)
// },[])


  return (
    <div className="flex phone:flex-row flex-col  justify-center">
     
     {/* Image slider */}
      {/* <div className="mx-auto relative rounded-lg overflow-hidden shadow-sm w-[140px] h-[140px]">
      {images.map((image: ImageItem, index: number) => (
        
        <Image
        key={index}
        src={image.image}
        alt={image.alt}
        width={140}
        height={140}
        className={`absolute top-0 ${currentImageIndex === index ? 'z-10 opacity-100 scale-100 translate-x-[0] rotate-0' : ''} left-0 scale-110 translate-x-[-1rem] rotate-[-5deg] transition-all`}
        />
        ))}
        </div> */}

      <div className="mx-auto">
        <p className=" font-Pacifico font-semibold phone:text-3xl text-xl text-center">
          Дни
        </p>
        <div className="p-8 m-3 text-center border-2 border-mainOlive rounded-lg w-[120px] ">
          <p className=" font-Pacifico font-semibold text-3xl ">
            {days?.toFixed(0)}
          </p>
        </div>
      </div>

      <div className="mx-auto">
        <p className=" font-Pacifico font-semibold phone:text-3xl text-xl text-center">
          Часове
        </p>
        <div className="p-8 m-3 border-2  text-center border-mainOlive rounded-lg w-[120px]">
          <p className=" font-Pacifico font-semibold text-3xl">
            {hours?.toFixed(0)}
          </p>
        </div>
      </div>

      <div className="mx-auto">
        <p className=" font-Pacifico font-semibold phone:text-3xl text-xl text-center">
          Минути
        </p>
        <div className="p-8 m-3 border-2  text-center border-mainOlive rounded-lg w-[120px]">
          <p className=" font-Pacifico font-semibold text-3xl">
            {minutes?.toFixed(0)}
          </p>
        </div>
      </div>

      <div  className="mx-auto">
        <p className=" font-Pacifico font-semibold phone:text-3xl text-xl text-center">
          Секунди
        </p>
        <div className="p-8 m-3 border-2  text-center border-mainOlive rounded-lg w-[120px]">
          <p className=" font-Pacifico font-semibold text-3xl reveal">
            {seconds}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
