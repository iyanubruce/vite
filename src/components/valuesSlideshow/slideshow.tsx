"use client";
import React, { useState, useEffect } from "react";

function Slideshow() {
  const values = [
    {desc: "SAFETY - Good Health, Safety and Environmental performance...", color: " text-[#ff6f20]"},
    {desc: "INTEGRITY - Fully independent, impartial and unbiased results...", color:"text-[#2a6ebb]"},
    {desc: "QUALITY - Managed quality systems to recognised standards...", color: "text-[#580f8b]"},
  ];
  const [imIndex, setImIndex] = useState(0);

  const nextImage = () => {
    setImIndex((index) => (index === values.length - 1 ? 0 : index + 1));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <div className="relative overflow-hidden h-full w-full">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full w-full"
        style={{ transform: `translateX(-${imIndex * 100}%)` }}
      >
        {values.map((value, index) => (
          <div
            key={index}
            className="w-[100%] flex-shrink-0 flex-grow-0 max-w-[1170px] mx-auto"
          >
            <p className={`text-[20px] text-center leading-[28.57px] ${value.color} italic mb-[10.5px]`}>
              {value.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
