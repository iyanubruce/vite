import SectionLabel from "./SectionLabel";
import Image from "next/image";
const services = [
  {
    number: "01",
    icon: "ri-hammer-line",
    title: "Metals, Base Metals & Ores",
    description:
      "Comprehensive inspection and analytical services covering all major Nigerian ports, refineries, and mining sites. AFL manages the full verification cycle for ferrous and non-ferrous metals, including rare-earth minerals.",
    points: [
      "WSMD – Weighing, Sampling & Moisture Determination",
      "Loading supervision: bulk, bagged & containerised",
      "XRF analysis of tin, columbite, tantalite, zinc, lead",
      "Stockpile sampling & sample preparation",
      "Physical stock verification & inventory control",
      "Scrap & recycled metals inspection",
    ],
    image: "/images/serviceImage20.jpeg",
  },
  {
    number: "02",
    icon: "ri-flask-line",
    title: "Laboratory & Analytical Services",
    description:
      "World-class laboratory facilities in Nigeria — including our Jos, Plateau State lab — delivering precise analytical results for mineral ores, petroleum products, and agricultural commodities, using internationally accredited methods.",
    points: ["Moisture content determination"],
    image: "/images/placeholderImage3.jpg",
  },
  {
    number: "03",
    icon: "ri-ship-2-line",
    title: "Marine Survey Solutions",
    description:
      "A complete range of marine inspection and survey services for shipowners, charterers, and cargo underwriters. AFL's marine division provides independent oversight at every stage of the voyage.",
    points: [
      "Draught surveys & outturn calculations",
      "Cargo loading & discharge supervision",
      "Hatch & container condition inspection",
      "Hull & machinery condition surveys",
      "On-hire / off-hire surveys",
      "Shore tank gauging & ullaging",
    ],
    image: "/images/serviceImage3.jpg",
  },
  {
    number: "04",
    icon: "ri-oil-line",
    title: "Crude Oil, Petroleum Products & Chemicals",
    description:
      "Quality and quantity verification for crude oils, refined petroleum products, LPG/LNG, petrochemicals, lubricants, and bulk liquid chemicals. AFL ensures accuracy at every custody transfer point.",
    points: [
      "Quality & quantity verification at custody transfer",
      "Tank gauging, ullaging & outturn calculations",
      "Loading & discharge supervision",
      "Pipeline & tank calibration engineering",
      "Bunker quantity surveys",
      "Ship-to-ship cargo transfer oversight",
    ],
    image: "/images/oil.jpg",
  },
  {
    number: "05",
    icon: "ri-building-2-line",
    title: "Collateral Management Agreements (CMAs)",
    description:
      "End-to-end oversight for commodities pledged as loan collateral. AFL manages the full lifecycle of the agreement — from stock intake and secure storage to controlled release and real-time reporting — for banks, traders, and lending institutions.",
    points: [
      "Crop & stock monitoring for financial institutions",
      "Secure warehousing with controlled access",
      "Proactive reporting at every movement stage",
      "Petroleum and agricultural products handling",
      "Team of accountants, lawyers & field inspectors",
    ],
    image: "/images/serviceImage9.jpg",
  },
  {
    number: "06",
    icon: "ri-seedling-line",
    title: "AGRI & Allied Commodities",
    description:
      "Pre-shipment inspection, warehouse management, draught surveys, and cargo supervision for a wide range of agricultural and allied commodities across Nigerian ports and inland warehouses.",
    points: [
      "Pre-shipment inspection & quality grading",
      "Draught surveys for bulk agri cargoes",
      "Vegetable oils, rice, sugar & fertilisers",
      "Cocoa, palm oil, soya bean meal & animal feed",
      "Container stuffing supervision",
      "Warehouse stock control & management",
    ],
    image: "/images/serviceImage12.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-12">
        <div className="text-center mb-16">
          <SectionLabel text="What We Offer" />
          <h2
            className="text-[#0a1628] font-bold text-[38px]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Our Service Portfolio
          </h2>
          <p className="text-gray-400 text-[15px] mt-3 max-w-[540px] mx-auto">
            Independent inspection, laboratory analysis, and management services
            across six key commodity domains.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div
                className={`lg:col-span-2 h-[280px] lg:h-auto ${i % 2 !== 0 ? "lg:order-last" : ""}`}
              >
                <Image
                  width={1400}
                  height={1400}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="lg:col-span-3 bg-[#f8f9fc] p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#E8621A] font-bold text-[11px] tracking-[0.2em] uppercase">
                    {service.number}
                  </span>
                  <span className="w-8 h-[1px] bg-[#E8621A]" />
                  <div className="w-8 h-8 rounded-lg bg-[#E8621A]/10 flex items-center justify-center">
                    <i className={`${service.icon} text-[#E8621A] text-sm`} />
                  </div>
                </div>
                <h3
                  className="text-[#0a1628] font-bold text-[22px] leading-tight mb-3"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.points.map((point, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <i className="ri-checkbox-circle-fill text-[#E8621A] text-[13px] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-[13px] leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
