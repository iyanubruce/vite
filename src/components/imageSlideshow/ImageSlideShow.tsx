"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
export default function ImageSlideShow() {
  const images = [
    {
      image: "HeroSlider.jpg",
      text: "Metals and Minerals Inspection",
    },
    {
      image: "HeroSlider2.jpg",
      text: "Agro and Allied Commodities Inspection",
    },
    { image: "HeroSlider3.jpg", text: "Oil and Gas Inspection" },
  ];
  const [imIndex, setImIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // Next Image Handler
  const nextImage = () => {
    setImIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  // Previous Image Handler
  const prevImage = () => {
    setImIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (!isPaused) {
      interval = setInterval(() => {
        nextImage();
      }, 3000); // 3 seconds interval
    }

    return () => {
      if (interval) clearInterval(interval); // Cleanup interval on unmount or pause
    };
  }, [isPaused]); // Make sure to re-run when `isPaused` changes

  const handleMouseEnter = () => {
    setIsPaused(true); // Pause the slideshow
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Resume the slideshow
  };

  return (
    <div className="relative overflow-hidden h-full w-full">
      {/* Wrapper div for all images */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full w-full"
        style={{ transform: `translateX(-${imIndex * 100}%)` }}
      >
        {images.map(({ image, text }, index) => (
          <div
            key={index}
            className="bg-cover relative bg-center h-[100%] w-[100%] flex-shrink-0 flex-grow-0 flex justify-center items-center"
            style={{
              backgroundImage: `url(/images/${image})`,
            }}
          >
            <div
              onMouseEnter={handleMouseEnter} // Pause on hover
              onMouseLeave={handleMouseLeave}
              className="bg-black/50 xl:max-w-full lg:max-w-[975px] md:max-w-[750px] pt-[10px] pb-[15px] md:w-[85%] w-full flex flex-col"
            >
              <h1 className="text-white md:text-[64px] text-[39px] font-medium md:leading-[91.43px] leading-[59px] text-center tracking-[-1px] [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)] mb-[1.5px]">
                ACCESS FULCRUM LIMITED
              </h1>
              <h1 className="mt-[12px] mb-[10.5px] text-white text-[16px] md:text-[21px] md:leading-[30px] leading-[23px] text-center font-normal tracking-[0] [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)]">
                ....exceeding your expectations
              </h1>
              <h2 className="text-white font-light md:leading-[55.71px] leading-[34px] text-center md:text-[39px] text-[26px] tracking-[0] [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)] mb-[10.5px]">
                {text}
              </h2>
              <Link
                href="/contact"
                onClick={handleMouseEnter}
                className="mx-auto mt-[30px] text-white block self-end align-middle text-center text-[14px] font-semibold hover:bg-[#ffa370] focus:bg-[#ffa370] bg-[#FF6F18] uppercase transition-all duration-300 px-8 py-2 rounded-[20px] leading-[20px]"
              >
                contact us
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white z-[999999999]"
        onClick={nextImage}
      >
        <Image
          src="/images/chevron-right.svg"
          width={50}
          height={50}
          alt="arrow"
        />
      </button>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white z-[999999999]"
        onClick={prevImage}
      >
        <Image
          src="/images/chevron-left.svg"
          width={50}
          height={50}
          alt="arrow"
        />
      </button>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-[50%] flex gap-3">
        <div
          className={`w-[12px] h-[12px] mr-[2px] ml-[2px] border border-[#ff6f20] hover:bg-[#ff6f20] rounded-full block whitespace-nowrap ${imIndex === 0 ? "bg-[#ff6f20]" : ""}`}
          onClick={() => {
            setImIndex(0);
          }}
        ></div>
        <div
          className={`w-[12px] h-[12px] mr-[2px] ml-[2px] border border-[#ff6f20] hover:bg-[#ff6f20] rounded-full block whitespace-nowrap ${imIndex === 1 ? "bg-[#ff6f20]" : ""}`}
          onClick={() => {
            setImIndex(1);
          }}
        ></div>
        <div
          className={`w-[12px] h-[12px] mr-[2px] ml-[2px] border border-[#ff6f20] hover:bg-[#ff6f20] rounded-full block whitespace-nowrap ${imIndex === 2 ? "bg-[#ff6f20]" : ""}`}
          onClick={() => {
            setImIndex(2);
          }}
        ></div>
      </div>
    </div>
  );
}
