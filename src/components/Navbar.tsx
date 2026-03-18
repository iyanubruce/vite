"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
        scrolled ? "bg-white border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-8 h-[80px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            width={100}
            height={52}
            src="/images/Logo.png"
            alt="Access Fulcrum Limited"
            className={`h-[52px] w-auto object-contain transition-all duration-300 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[14px] font-medium tracking-wide transition-colors duration-200 whitespace-nowrap ${
                pathname === link.href
                  ? "text-[#E8621A]"
                  : scrolled
                    ? "text-[#1a2234] hover:text-[#E8621A]"
                    : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 bg-[#E8621A] hover:bg-[#c94e0f] text-white text-[13px] font-semibold px-6 py-2 rounded-full transition-colors duration-300 whitespace-nowrap tracking-wide"
          >
            Get In Touch
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className={`lg:hidden cursor-pointer p-1 ${scrolled ? "text-[#1a2234]" : "text-white"}`}
          aria-label="Toggle menu"
        >
          <i
            className={`ri-${mobileOpen ? "close" : "menu-3"}-line text-2xl`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-8 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-[15px] font-medium transition-colors ${
                pathname === link.href ? "text-[#E8621A]" : "text-[#1a2234]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
