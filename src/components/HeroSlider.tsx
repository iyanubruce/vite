"use client";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
const slides = [
  {
    tag: "Metals & Minerals",
    headline: "Precision Inspection\nfor Global Trade",
    sub: "World-class inspection services ensuring every commodity transaction is safe, transparent, and compliant.",
  },
  {
    tag: "Agro & Allied Commodities",
    headline: "Trusted Standards\nAcross Every Market",
    sub: "From farmgate to port — delivering reliable, accurate inspection for agricultural and allied commodities.",
  },
  {
    tag: "Oil & Gas",
    headline: "Integrity at Every\nStage of Supply",
    sub: "Independent verification and stock monitoring that upholds the highest industry standards worldwide.",
  },
];

const stats = [
  { value: "3+", label: "Commodity Sectors" },
  { value: "100%", label: "Independent Verification" },
  { value: "24/7", label: "Operational Support" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 300);
    },
    [animating],
  );

  const goNext = useCallback(() => {
    go((current + 1) % slides.length);
  }, [current, go]);

  useEffect(() => {
    const t = setInterval(goNext, 6000);
    return () => clearInterval(t);
  }, [goNext]);

  const slide = slides[current];

  return (
    <div
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/WELCOME.jpg')" }}
    >
      {/* Layered overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/75 to-[#0a1628]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 w-full pt-28 pb-32">
        <div className="max-w-[640px]">
          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 mb-6 transition-opacity duration-300"
            style={{ opacity: animating ? 0 : 1 }}
          >
            <span className="w-8 h-[2px] bg-[#E8621A]" />
            <span className="text-[#E8621A] text-[13px] font-semibold tracking-[0.15em] uppercase">
              {slide.tag}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white font-bold leading-[1.1] mb-6 transition-opacity duration-300"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
              opacity: animating ? 0 : 1,
              whiteSpace: "pre-line",
            }}
          >
            {slide.headline}
          </h1>

          {/* Subtext */}
          <p
            className="text-white/75 text-[16px] leading-relaxed mb-10 font-light max-w-[520px] transition-opacity duration-300"
            style={{ opacity: animating ? 0 : 1 }}
          >
            {slide.sub}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="/services"
              className="bg-[#E8621A] hover:bg-[#c94e0f] text-white font-semibold text-[14px] px-8 py-3 rounded-full transition-colors duration-300 whitespace-nowrap tracking-wide"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="border border-white/50 hover:border-white text-white font-medium text-[14px] px-8 py-3 rounded-full transition-colors duration-300 whitespace-nowrap tracking-wide"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Slide indicator */}
        <div className="flex items-center gap-3 mt-16">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Slide ${i + 1}`}
              className={`cursor-pointer transition-all duration-300 rounded-full ${
                i === current
                  ? "w-8 h-2 bg-[#E8621A]"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats bar pinned to bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/10 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-3 divide-x divide-white/20">
          {stats.map((s, i) => (
            <div key={i} className="py-5 px-6 flex flex-col items-center">
              <span
                className="text-[#E8621A] font-bold text-2xl"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {s.value}
              </span>
              <span className="text-white/70 text-[12px] tracking-wide uppercase mt-1">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Prev/Next arrows */}
      <button
        onClick={() => go((current - 1 + slides.length) % slides.length)}
        aria-label="Previous"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full border border-white/30 bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
      >
        <Image
          width={100}
          height={100}
          src="/images/chevron-left.svg"
          alt="Previous"
          className="w-5 h-5 brightness-0 invert"
        />
      </button>
      <button
        onClick={() => go((current + 1) % slides.length)}
        aria-label="Next"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full border border-white/30 bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
      >
        <Image
          width={100}
          height={100}
          src="/images/chevron-right.svg"
          alt="Next"
          className="w-5 h-5 brightness-0 invert"
        />
      </button>
    </div>
  );
}
