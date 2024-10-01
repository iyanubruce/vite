// import Image from "next/image";
"use client";
import Navbar from "../components/Navbar/navbar";
import Image from "next/image";
import ImageSlideShow from "../components/imageSlideshow/ImageSlideShow";
import Slideshow from "@/components/newsSlideShow/slideshow";
import Footer from "@/components/footer/Footer";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            entry.target.classList.remove("anim");
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
            entry.target.classList.add("anim");
          }
        });
      },
      {
        threshold: 0.4, // 40% visibility required to trigger
      },
    );

    const animElements = document.querySelectorAll(".anims");
    // observer.observe(element);
    animElements.forEach((el) => observer.observe(el));
    return () => {
      animElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <div className="treb">
      <Navbar />
      <div className="h-[662px] mt-[175px] overflow-hidden flex justify-center items-center bg">
        <ImageSlideShow />
      </div>
      <div className="anims anim transition-opacity duration-200 h-max flex flex-col md:flex-row justify-center items-center pt-[62px] pb-[25px] z-10 overflow-hidden">
        <div className="flex items-center relative w-[90%] md:w-[40%] h-[300px]">
          <Image
            src="/images/Logo.png"
            alt="logo"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-[580px] break-words brword px-5">
          <h1 className="text-[16px] leading-[22.86px] mb-[10.5px] brword whitespace-normal text-[#555555]">
            {" "}
            We provide quality and and Quantity independent inspection services
            on:{" "}
          </h1>
          <ul className="mb-[10.5px] list-disc">
            <li className="ml-[10px] font-bold list-disc">
              <span className="mb-[10px] break-words whitespace-normal">
                Minerals, Mineral-Concentrates and Ores
              </span>
            </li>
            <li className="ml-[10px] font-bold list-disc">
              <span className="mb-[10px] break-words whitespace-normal">
                Crude Oil, Refined Products and Petrochemicals
              </span>
            </li>
            <li className="ml-[10px] font-bold list-disc">
              <span className="mb-[10px]">
                Agric Commodities – Bulk, Bagged or Containers
              </span>
            </li>
            <li className="ml-[10px] font-bold list-disc">
              <span className="mb-[10px]">Collateral Management Services</span>
            </li>
            <li className="ml-[10px] font-bold list-disc">
              <span className="mb-[10px]">Lifting Machinery Inspections</span>
            </li>
            <li className="ml-[10px] font-bold list-disc">
              <span className="mb-[10px]">Damage Surveys</span>
            </li>
          </ul>
          <p className="brword whitespace-normal text-[#555555]">
            Whenever and wherever you require a first class independent
            inspection service we are just a phone call away -Tel: +44 7360
            806991
          </p>
        </div>
      </div>
      <div className="bg-[#ebebeb] w-full h-auto p-2">
        <div className="grid grid-cols-1 md:grid-cols-3 w-[85%] max-w-[1500px] gap-[10px] mx-auto">
          <div className="h-[383px] relative anims anim transition-opacity duration-300">
            <Image src="/images/gridImage1.jpg" fill alt="grid image" />
          </div>
          <div className="h-[383px] relative anims anim transition-opacity duration-300">
            <Image src="/images/gridImage4.jpg" fill alt="grid image" />
          </div>
          <div className="h-[383px] relative anims anim transition-opacity duration-300">
            <Image src="/images/gridImage3.jpg" fill alt="grid image" />
          </div>
          <div className="h-[383px] relative anims anim transition-opacity duration-300">
            <Image src="/images/gridImage4.jpg" fill alt="grid image" />
          </div>
          <div className="h-[383px] relative bg-[#580f8b] flex items-center anims anim transition-opacity duration-300">
            <div className="py-[0.3em] px-[2em]">
              <h1 className="text-[24px] mt-[21px] mb-[10.5px] text-center leading-[34.29px] text-[#ff6f20] font-medium">
                Our Mission statement
              </h1>
              <div className="w-[70px] h-[4px] mx-auto bg-white mt-[10px] mb-[15px]"></div>
              <p className="text-center mb-[42.5px] text-white font-normal leading-[23.8px] [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)]">
                Access Global Limited Global Solutions is committed to Customer
                Service Excellence Worldwide. Anticipating our Customer&apos;s
                expectations, as well as adding value at every opportunity is
                the foundation of everything we do.
              </p>
            </div>
          </div>
          <div className="h-[383px] relative anims anim transition-opacity duration-300">
            <Image src="/images/gridImage8.jpg" fill alt="grid image" />
          </div>
          <div className="h-[383px] relative anims anim transition-opacity duration-300">
            <Image src="/images/gridImage5.jpg" fill alt="grid image" />
          </div>
          <div className="h-[383px] relative anims anim transition-opacity duration-300">
            <Image src="/images/gridImage6.jpg" fill alt="grid image" />
          </div>
          <div className="h-[383px] relative anims anim transition-opacity duration-300">
            <Image src="/images/gridImage7.jpg" fill alt="grid image" />
          </div>
        </div>
      </div>
      <div className="bg-[linear-gradient(90deg,#333333_0%,#707070_100%)]">
        <div className="pt-[21px] pb-[30px]">
          <Slideshow />
        </div>
      </div>
      {/* <div className="bg-[#2a6ebb] pt-5 pb-5 h-[200px]">
        <h1 className="text-center text-[15px] leading-[21.43px] text-white font-bold mb-[10.5px]">
          {" "}
          ©Access Global Limited- 2024
        </h1>
        <p className="text-center text-[12px] leading-[17.14px] text-[#bcd5f0] mb-[10.5px]">
          Terms and Conditions Apply
        </p>
        <div className="flex gap-5 justify-center mt-10">
          <Image
            src="/images/footer1.png"
            width={53}
            height={52}
            alt="footer1"
          />
          <Image
            src="/images/footer2.png"
            width={128}
            height={30}
            alt="footer2"
          />
          <Image
            src="/images/footer3.png"
            width={57}
            height={51}
            alt="footer3"
          />
        </div>
      </div>*/}
      <Footer />
    </div>
  );
}
