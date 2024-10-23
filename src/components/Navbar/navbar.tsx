"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const router = usePathname();
  const pathname = router;
  const [menuOpen, setMenuOpen] = useState(false);
  const details = [
    "contact@access-fulcrum.com",
    "Coordination: +234 803 992 6902",
  ];

  const [detail, setDetail] = useState(0);
  const nextDetail = () => {
    setDetail((index) => (index === details.length - 1 ? 0 : index + 1));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextDetail();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[999] bg-white/90">
        <div className="bg-[#2c3093] flex items-center justify-center treb text-[#bcd5f0] h-[40px]">
          <div
            className={`absolute transition-opacity duration-1000 ease-in-out ${detail === 1 ? "opacity-100" : "opacity-0"}`}
          >
            {details[0]}
          </div>
          <div
            className={`absolute transition-opacity duration-1000 ease-in-out ${detail === 0 ? "opacity-100" : "opacity-0"}`}
          >
            {details[1]}
          </div>
        </div>
        <div className="w-full max-w-[1170px] h-[135px] mx-auto flex flex-col justify-between items-center px-10 relative">
          <Image
            src="/images/Logo.png"
            alt="logo"
            width={180}
            height={100}
            className="object-cover mx-auto"
          />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col  h-16 w-16 lg:hidden z-[999] justify-between"
          >
            <div className="w-full h-[4px] bg-black" />
            <div className="w-full h-[4px] bg-black" />
            <div className="w-full h-[4px] bg-black" />
          </button>
          <div className="lg:flex gap-5 items-center h-full hidden">
            <Link
              href="/"
              className={`hover:text-[#2a6ebb] focus:text-[#2a6ebb] ${pathname.toString() === "/" ? "text-[#ff6f20]" : ""}`}
            >
              Welcome
            </Link>
            <Link
              href="/about"
              className={`hover:text-[#2a6ebb] focus:text-[#2a6ebb] ${pathname.toString() === "/about" ? "text-[#ff6f20]" : ""}`}
            >
              About us{" "}
            </Link>
            <Link
              href="/services"
              className={`hover:text-[#2a6ebb] focus:text-[#2a6ebb] ${pathname.toString() === "/services" ? "text-[#ff6f20]" : ""}`}
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className={`hover:text-[#2a6ebb] focus:text-[#2a6ebb] ${pathname.toString() === "/contact" ? "text-[#ff6f20]" : ""}`}
            >
              Contact Us
            </Link>
          </div>
          <div
            className={`lg:hidden w-full h-max absolute gap-5 items-center left-0 bottom-0 transform bg-white translate-y-full flex-col ${menuOpen ? "flex" : "hidden"}`}
          >
            <Link
              href="/"
              className={`hover:text-[#2a6ebb] focus:text-[#2a6ebb] ${pathname.toString() === "/" ? "text-[#ff6f20]" : ""}`}
            >
              Welcome
            </Link>
            <Link
              href="/about"
              className={`hover:text-[#2a6ebb] focus:text-[#2a6ebb] ${pathname.toString() === "/about" ? "text-[#ff6f20]" : ""}`}
            >
              About us{" "}
            </Link>
            <Link
              href="/services"
              className={`hover:text-[#2a6ebb] focus:text-[#2a6ebb] ${pathname.toString() === "/services" ? "text-[#ff6f20]" : ""}`}
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className={`hover:text-[#2a6ebb] focus:text-[#2a6ebb] ${pathname.toString() === "/contact" ? "text-[#ff6f20]" : ""}`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
