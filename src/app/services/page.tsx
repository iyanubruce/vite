import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

interface ServiceData {
  id: string;
  label: string;
  title: string;
  description: string;
  bulletPoints: string[];
  images: string[];
  reversed: boolean;
  icon: string;
}

const servicesData: ServiceData[] = [
  {
    id: "metals",
    label: "01",
    title: "Metal & Minerals Inspection Services",
    description:
      "Access Fulcrum Limited provides Inspection and Sampling of Minerals, Mineral-concentrates and Ores in Nigeria. Our Inspectors are located at key points in the supply chain from Mining Sites, Intermediary Storage, Warehouses and Ports. We inspect and sample ferrous & non-ferrous metals including rare-earth materials.",
    bulletPoints: [
      "WSMD – Weighing, Sampling & Moisture Determination",
      "Loading supervision of bulk, bagged and containerised cargo",
      "Warehousing & Stock Management",
      "Scrap & Recycled Metals Inspection",
      "Stockpile Sampling & Sample Preparation",
      "Assaying Services",
    ],
    images: [
      "https://www.access-fulcrum.com/images/serviceImage4.jpg",
      "https://www.access-fulcrum.com/images/serviceImage5.jpg",
      "https://www.access-fulcrum.com/images/serviceImage6.jpg",
      "https://www.access-fulcrum.com/images/serviceImage7.jpg",
    ],
    reversed: false,
    icon: "ri-hammer-line",
  },
  {
    id: "oil-gas",
    label: "02",
    title: "Oil and Gas Cargo Inspection & Testing",
    description:
      "Access Fulcrum Limited provides a wide range of inspection services on Crude Oil and Petroleum Products, Oil and Gas Cargoes wherever custody transfer takes place.",
    bulletPoints: [
      "Ship & Shore based Quality & Quantity Verification",
      "Bunker Surveys",
      "Ship to Ship Operations",
      "Oil and Gas Terminal Audits",
      "Cargo Superintendence and Laboratory Analysis",
    ],
    images: [
      "https://www.access-fulcrum.com/images/serviceImage1.jpg",
      "https://www.access-fulcrum.com/images/about2.jpg",
      "https://www.access-fulcrum.com/images/serviceImage2.jpg",
      "https://www.access-fulcrum.com/images/serviceImage3.jpg",
    ],
    reversed: true,
    icon: "ri-ship-line",
  },
  {
    id: "collateral",
    label: "03",
    title: "Collateral Management & Warehousing",
    description:
      "Access Fulcrum Limited provides Collateral Management and Stock Control Services to Banks and Commodity Traders at key points in the supply chain. We take great care in selecting our staff to maintain the highest level of integrity, backed up by commodity release controls, strict monitoring and proactive reporting at all stages in the movement of the commodity.",
    bulletPoints: [
      "Petroleum and Agricultural Products handling",
      "Strict commodity release controls",
      "Proactive reporting at all movement stages",
      "Stock control and monitoring for Banks & Traders",
    ],
    images: [
      "https://www.access-fulcrum.com/images/serviceImage8.jpg",
      "https://www.access-fulcrum.com/images/serviceImage9.jpg",
      "https://www.access-fulcrum.com/images/serviceImage10.jpg",
      "https://www.access-fulcrum.com/images/serviceImage15.jpg",
    ],
    reversed: false,
    icon: "ri-building-2-line",
  },
  {
    id: "agri",
    label: "04",
    title: "AGRI Commodities",
    description:
      "Access Fulcrum Limited provides Inspection, Supervision, Warehousing, Container Stuffing and Collateral Management Services on a wide range of Agricultural Commodities at Ports and Warehouses.",
    bulletPoints: [
      "Cocoa & Ethanol",
      "Fish & Seafood",
      "Nuts and Grains",
      "Palm Oils & Rice",
      "Sugar & Timber",
    ],
    images: [
      "https://www.access-fulcrum.com/images/serviceImage12.jpg",
      "https://www.access-fulcrum.com/images/serviceImage13.jpg",
      "https://www.access-fulcrum.com/images/serviceImage16.jpg",
    ],
    reversed: true,
    icon: "ri-seedling-line",
  },
];

function ImageGrid({ images }: { images: string[] }) {
  if (images.length >= 4) {
    return (
      <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[460px]">
        {images.slice(0, 4).map((src, i) => (
          <div key={i} className="overflow-hidden rounded-xl w-full h-full">
            <Image
              width={400}
              height={400}
              src={src}
              alt=""
              className="w-full h-full object-cover object-top"
            />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-3 h-[460px]">
      <div className="overflow-hidden rounded-xl w-full h-full">
        <Image
          width={400}
          height={400}
          src={images[0]}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="flex flex-col gap-3 h-full">
        {images.slice(1).map((src, i) => (
          <div key={i} className="overflow-hidden rounded-xl flex-1 w-full">
            <Image
              width={400}
              height={400}
              src={src}
              alt=""
              className="w-full h-full object-cover object-top"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceBlock({
  service,
  index,
}: {
  service: ServiceData;
  index: number;
}) {
  const bg = index % 2 === 0 ? "bg-white" : "bg-[#f4f6fa]";

  const TextContent = () => (
    <div className="flex flex-col justify-center">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[#E8621A] font-bold text-[12px] tracking-[0.2em] uppercase">
          {service.label}
        </span>
        <span className="w-10 h-[1px] bg-[#E8621A]" />
      </div>
      <div className="flex items-start gap-4 mb-5">
        <div className="w-11 h-11 rounded-xl bg-[#E8621A]/10 flex items-center justify-center flex-shrink-0 mt-1">
          <i className={`${service.icon} text-[#E8621A] text-xl`} />
        </div>
        <h2
          className="text-[#0a1628] font-bold text-[28px] leading-tight"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {service.title}
        </h2>
      </div>
      <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
        {service.description}
      </p>
      <ul className="flex flex-col gap-2.5 mb-8">
        {service.bulletPoints.map((point, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
              <i className="ri-checkbox-circle-fill text-[#E8621A] text-base" />
            </span>
            <span className="text-gray-600 text-[14px] leading-relaxed">
              {point}
            </span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 bg-[#0a1628] hover:bg-[#E8621A] text-white text-[13px] font-semibold px-7 py-3 rounded-full transition-colors duration-300 w-fit whitespace-nowrap"
      >
        Enquire Now
        <i className="ri-arrow-right-line" />
      </Link>
    </div>
  );

  return (
    <section className={`py-20 ${bg}`}>
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {service.reversed ? (
            <>
              <ImageGrid images={service.images} />
              <TextContent />
            </>
          ) : (
            <>
              <TextContent />
              <ImageGrid images={service.images} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-[480px] flex items-center justify-center bg-cover bg-center pt-20"
        style={{
          backgroundImage:
            "url('https://www.access-fulcrum.com/images/serviceImage1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/80 to-[#0a1628]/60" />
        <div className="relative z-10 text-center px-8 max-w-[760px] mx-auto">
          <span className="inline-flex items-center gap-2 text-[#E8621A] text-[13px] font-semibold tracking-[0.15em] uppercase mb-5">
            <span className="w-6 h-[2px] bg-[#E8621A]" />
            What We Offer
            <span className="w-6 h-[2px] bg-[#E8621A]" />
          </span>
          <h1
            className="text-white font-bold text-[54px] leading-tight mb-5"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Our Services
          </h1>
          <p className="text-white/70 text-[17px] leading-relaxed">
            Independent Quantity &amp; Quality verification on a wide range of
            commodities wherever custody transfer takes place.
          </p>
        </div>
      </section>

      {/* Service sections */}
      {servicesData.map((service, index) => (
        <ServiceBlock key={service.id} service={service} index={index} />
      ))}

      {/* CTA */}
      <section className="py-16 bg-[#0a1628]">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-white font-bold text-[30px] mb-2"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Need a specific inspection service?
            </h2>
            <p className="text-white/50 text-[15px] leading-relaxed">
              Our team is ready to discuss your requirements and provide
              tailored inspection solutions.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#E8621A] hover:bg-[#c94e0f] text-white font-semibold text-[14px] px-8 py-3.5 rounded-full transition-all duration-300 w-full sm:w-auto mt-2"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
