import Image from "next/image";
export default function CoverSection({ onPrint }: { onPrint: () => void }) {
  return (
    <>
      {/* Floating top bar */}
      <div className="no-print fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              width={1000}
              height={1000}
              src="/images/Logo.png"
              alt="Access Fulcrum Limited"
              className="h-10 w-auto object-contain"
            />
            <span className="text-white text-[12px] tracking-wide font-medium uppercase">
              Company Profile
            </span>
          </div>
          <button
            onClick={onPrint}
            className="no-print flex items-center gap-2 bg-[#E8621A] hover:bg-[#c94e0f] text-black text-[13px] font-semibold px-5 py-2 rounded-full transition-colors duration-300 cursor-pointer whitespace-nowrap"
          >
            <span className="w-4 h-4 flex items-center justify-center">
              <i className="ri-download-2-line text-sm" />
            </span>
            Download / Print
          </button>
        </div>
      </div>

      {/* Cover */}
      <section className="relative bg-white min-h-screen flex flex-col items-center justify-center bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffff]/95 via-[#ffff]/85 to-[#ffff]/75" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#E8621A]" />

        <div className="relative z-10 w-full max-w-[1000px] mx-auto px-12 flex flex-col items-center text-center">
          <Image
            width={100}
            height={100}
            src="/images/Logo.png"
            alt="Access Fulcrum Limited"
            className="h-20 w-auto object-contain mb-10"
          />

          <div className="flex items-center gap-4 mb-8">
            <span className="w-16 h-[1px] bg-[#E8621A]" />
            <span className="text-[#E8621A] text-[11px] font-semibold tracking-[0.25em] uppercase">
              Company Profile
            </span>
            <span className="w-16 h-[1px] bg-[#E8621A]" />
          </div>

          <h1
            className="text-[#3e3d94] font-bold text-[64px] leading-[1.1] mb-6"
            style={{
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            Access Fulcrum
            <span className="block text-[#E8621A]">Limited</span>
          </h1>

          <p className="text-black/70 text-[19px] leading-relaxed max-w-[680px] mb-12">
            Nigeria&apos;s foremost independent provider of commodities
            inspection, laboratory analysis, marine surveys, collateral
            management, and stock monitoring services.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { icon: "ri-search-eye-line", label: "Independent Inspection" },
              { icon: "ri-ship-2-line", label: "Marine Surveys" },
              { icon: "ri-bank-line", label: "Collateral Management" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-black/60">
                <span className="w-6 h-6 flex items-center justify-center">
                  <i className={`${item.icon} text-[#E8621A] text-base`} />
                </span>
                <span className="text-[13px] font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-4 gap-0 w-full max-w-[800px] rounded-2xl overflow-hidden border border-white/10">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "11+", label: "Trusted Clients" },
              { value: "6", label: "Service Areas" },
              { value: "100%", label: "Independent" },
            ].map((stat, i) => (
              <div
                key={i}
                className="py-7 text-center"
                style={{
                  background: i === 1 ? "#E8621A" : "rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className="text-black font-bold text-[36px] leading-none"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-black/70 text-[11px] mt-1.5 tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-1 text-black/30">
            <span className="text-[11px] tracking-widest uppercase">
              Scroll to explore
            </span>
            <i className="ri-arrow-down-line text-sm" />
          </div>
        </div>
      </section>
    </>
  );
}
