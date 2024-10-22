"use client";
import React, { useState, useEffect } from "react";

export default function Slideshow() {
  const images = [
    "Welcome to the Access Fulcrum Limited Website...",
    "Replace this with AFL - We exceed your expectations...........",
    "AFL - Passionate about Exceptional Customer Service Excellence...",
  ];
  const [imIndex, setImIndex] = useState(0);

  const nextImage = () => {
    setImIndex((index) => (index === images.length - 1 ? 0 : index + 1));
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
        {images.map((value, index) => (
          <div
            key={index}
            className="w-[100%] flex-shrink-0 flex-grow-0 mx-auto"
          >
            <h1 className="leading-[34.29px] w-full uppercase text-center text-[#ff6f20] font-bold text-[24px]">
              News CEnter
            </h1>
            <p className="leading-[25.71428573px] w-full text-center text-[#ffffff] text-[18px] [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)]">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
