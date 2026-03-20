import SectionLabel from "./SectionLabel";
import Image from "next/image";
export default function OverviewSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionLabel text="Who We Are" />
            <h2
              className="text-[#0a1628] font-bold text-[40px] leading-tight mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Setting the Standard in
              <span className="block text-[#E8621A]">
                Commodities Inspection
              </span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-5">
              Access Fulcrum Limited (AFL) is a leading independent inspection
              and commodities management company headquartered in Abuja, Nigeria
              — operating across the metals &amp; minerals, oil &amp; gas,
              marine, and agricultural sectors.
            </p>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-5">
              We provide critical third-party verification services that ensure
              the integrity, quality, and quantity of commodity transactions —
              from mining sites, warehouses, and terminals to major Nigerian
              ports. Our accredited laboratory services deliver precise
              analytical results that global trading desks and financial
              institutions rely on.
            </p>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
              With a team of seasoned inspectors, chemists, and surveyors, AFL
              serves major corporations, banks, and commodity traders who demand
              accuracy, impartiality, and strict adherence to ISO, GAFTA, and
              international inspection standards.
            </p>

            {/* Certifications strip */}
            <div className="flex flex-wrap gap-3">
              {[
                "ISO Compliant",
                "GAFTA Approved",
                "MMTA Standards",
                "NiNAS Accredited",
              ].map((cert, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 border border-[#E8621A]/30 text-[#E8621A] text-[11px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full"
                >
                  <i className="ri-checkbox-circle-line text-[11px]" />
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Right — image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full h-[260px] rounded-xl overflow-hidden">
              <Image
                width={1400}
                height={1400}
                src="/images/cpf1.jpg"
                alt="Inspection specialist"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="w-full h-[260px] rounded-xl overflow-hidden mt-8">
              <Image
                width={1400}
                height={1400}
                src="/images/cpf5.jpg"
                alt="Oil cargo port"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="w-full h-[260px] rounded-xl overflow-hidden">
              <Image
                width={1400}
                height={1400}
                src="/images/cpf7.jpg"
                alt="Laboratory analysis"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="w-full h-[260px] rounded-xl overflow-hidden mt-[-32px]">
              <Image
                width={1400}
                height={1400}
                src="/images/cpf3.jpg"
                alt="Agricultural storage"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
