"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface Props{
  image: string,
  title: string,
  names: string

}
const ShowAnimated = (props: Props) => {
  const imgRef = useRef(null);
  const divRef = useRef(null);
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [isImgVisible, setIsImgVisible] = useState(false);
  useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (entry.target === divRef.current) {
                setIsDivVisible(true);
              }
              if (entry.target === imgRef.current) {
                setIsImgVisible(true);
              }
            }
          });
        },
        { threshold: 0.3 } // Triggers when 30% of the element is visible
      );
  
      if (divRef.current) observer.observe(divRef.current);
      if (imgRef.current) observer.observe(imgRef.current);
  
      return () => observer.disconnect();
  }, []);
  return (
    <div>
      <h2 className="fade-in font-Pacifico text-6xl text-mainOlive text-center my-7">
        {props.title}
      </h2>
      <div className="flex laptop:flex-row flex-col-reverse justify-center gap-8 ">
        <div ref={divRef} className={`flex flex-col max-w-[400px] jump-from-left ${isDivVisible ? "visible" : ""} gap-2 text-center m-auto`}>
          <h2 className="font-Pacifico text-6xl text-mainOlive">{props.names}</h2>
          {/* <h2 className="font-Pacifico text-6xl text-mainOlive">и</h2>
          <h2 className="font-Pacifico text-6xl text-mainOlive">Валентин</h2> */}
        </div>
        <div className={`jump-from-right ${isImgVisible ? "visible" : ""}`} ref={imgRef}>
          <Image
            src={props.image}
            alt="us"
            loading="lazy"
            className="mx-auto"
            objectFit="cover"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default ShowAnimated;
