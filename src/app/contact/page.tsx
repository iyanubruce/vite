"use client";
import { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const FORM_URL = "https://readdy.ai/api/form/d6sli7id1d31f3q961u0";

const offices = [
  {
    city: "Abuja",
    address:
      "Plot 242 Muhammadu Buhari Way (2nd Floor), Central Business District, Abuja, Nigeria.",
    tel: "+234 803 992 6902",
    email: "contact@access-fulcrum.com",
    image: "https://www.access-fulcrum.com/images/contactImage1.jpg",
  },
  {
    city: "Lagos",
    address:
      "We are currently in the process of changing address. Our new details will be published shortly.",
    tel: "+234 803 992 6902",
    email: "contact@access-fulcrum.com",
    image: "https://www.access-fulcrum.com/images/contactImage2.jpg",
  },
];

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;
    if (message.length > 500) return;

    setStatus("sending");
    try {
      const formData = new FormData(form);
      const params = new URLSearchParams();
      formData.forEach((value, key) => params.append(key, value.toString()));

      const res = await fetch(FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setCharCount(0);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-[480px] flex items-center justify-center bg-cover bg-center pt-20"
        style={{
          backgroundImage:
            "url('https://www.access-fulcrum.com/images/contactImage1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/80 to-[#0a1628]/60" />
        <div className="relative z-10 text-center px-8 max-w-[760px] mx-auto">
          <span className="inline-flex items-center gap-2 text-[#E8621A] text-[13px] font-semibold tracking-[0.15em] uppercase mb-5">
            <span className="w-6 h-[2px] bg-[#E8621A]" />
            Coordination Centres
            <span className="w-6 h-[2px] bg-[#E8621A]" />
          </span>
          <h1
            className="text-white font-bold text-[54px] leading-tight mb-5"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Contact Us
          </h1>
          <p className="text-white/70 text-[17px] leading-relaxed">
            Get in touch with our team for commodity inspection and management
            services worldwide.
          </p>
        </div>
      </section>

      {/* Info strip */}
      <div className="bg-[#E8621A] py-7">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: "ri-phone-line",
                label: "Phone",
                value: "+234 803 992 6902",
              },
              {
                icon: "ri-mail-line",
                label: "Email",
                value: "contact@access-fulcrum.com",
              },
              {
                icon: "ri-map-pin-2-line",
                label: "Head Office",
                value: "Abuja, Nigeria",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 flex-shrink-0">
                  <i className={`${item.icon} text-white text-lg`} />
                </div>
                <div>
                  <p className="text-white/70 text-[11px] font-medium tracking-wider uppercase">
                    {item.label}
                  </p>
                  <p className="text-white font-semibold text-[14px]">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main: Form + Offices */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
            {/* Form */}
            <div className="lg:col-span-3">
              <span className="inline-flex items-center gap-2 text-[#E8621A] text-[13px] font-semibold tracking-[0.15em] uppercase mb-4">
                <span className="w-6 h-[2px] bg-[#E8621A]" />
                Send a Message
              </span>
              <h2
                className="text-[#0a1628] font-bold text-[32px] mb-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Get In Touch
              </h2>
              <p className="text-gray-500 text-[14px] mb-8 leading-relaxed">
                Fill out the form below and our team will respond within 24
                hours.
              </p>

              {status === "success" ? (
                <div className="rounded-2xl bg-green-50 border border-green-200 p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                    <i className="ri-check-double-line text-green-600 text-3xl" />
                  </div>
                  <h3
                    className="text-[#0a1628] font-bold text-[22px] mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                    Thank you for contacting us. Our team will be in touch
                    shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-[#E8621A] font-semibold text-[14px] hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  data-readdy-form
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#0a1628] text-[13px] font-medium">
                        Full Name <span className="text-[#E8621A]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#E8621A] transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#0a1628] text-[13px] font-medium">
                        Email Address <span className="text-[#E8621A]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@company.com"
                        className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#E8621A] transition-colors"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#0a1628] text-[13px] font-medium">
                      Company / Organisation
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your company name"
                      className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#E8621A] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#0a1628] text-[13px] font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="How can we help you?"
                      className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#E8621A] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-[#0a1628] text-[13px] font-medium">
                        Message <span className="text-[#E8621A]">*</span>
                      </label>
                      <span
                        className={`text-[12px] ${
                          charCount > 480 ? "text-red-500" : "text-gray-400"
                        }`}
                      >
                        {charCount}/500
                      </span>
                    </div>
                    <textarea
                      name="message"
                      required
                      maxLength={500}
                      rows={5}
                      placeholder="Tell us about your inspection requirements..."
                      onChange={(e) => setCharCount(e.target.value.length)}
                      className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#E8621A] transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-[13px] flex items-center gap-2">
                      <i className="ri-error-warning-line" />
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-[#E8621A] hover:bg-[#c94e0f] disabled:opacity-60 text-white font-semibold text-[14px] px-8 py-3.5 rounded-full transition-colors duration-300 w-fit whitespace-nowrap cursor-pointer flex items-center gap-2"
                  >
                    {status === "sending" ? (
                      <>
                        <i className="ri-loader-4-line animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <i className="ri-send-plane-line" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Offices */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <span className="inline-flex items-center gap-2 text-[#E8621A] text-[13px] font-semibold tracking-[0.15em] uppercase mb-4">
                  <span className="w-6 h-[2px] bg-[#E8621A]" />
                  Our Offices
                </span>
                <h2
                  className="text-[#0a1628] font-bold text-[32px] mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Coordination Centres
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                  Our offices are strategically positioned to serve clients
                  across Nigeria and the global commodities market.
                </p>
              </div>
              {offices.map((office, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden border border-gray-100"
                >
                  <div className="w-full h-[180px] overflow-hidden">
                    <Image
                      width={400}
                      height={400}
                      src={office.image}
                      alt={`${office.city} office`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-[#E8621A] flex-shrink-0" />
                      <h3
                        className="text-[#0a1628] font-bold text-[17px]"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {office.city} Office
                      </h3>
                    </div>
                    <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                      {office.address}
                    </p>
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center gap-2.5 text-[13px] text-gray-600">
                        <i className="ri-phone-line text-[#E8621A] flex-shrink-0" />
                        <span>{office.tel}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-[13px] text-gray-600">
                        <i className="ri-mail-line text-[#E8621A] flex-shrink-0" />
                        <a
                          href={`mailto:${office.email}`}
                          className="hover:text-[#E8621A] transition-colors"
                        >
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
