"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
interface Client {
  name: string;
  shortName: string;
  logo: string | null;
  darkCard: boolean;
  url: string;
  color: string;
}

const clients: Client[] = [
  {
    name: "Malcomines Minor Metals Ltd",
    shortName: "Malcomines",
    logo: "https://static.wixstatic.com/media/3d2a32_8ae7861d3e4641cd80166863a8fe69cd~mv2.png",
    darkCard: true,
    url: "https://www.malcomines.com",
    color: "#0a1628",
  },
  {
    name: "Millenium Metals Nig. Ltd",
    shortName: "Millenium Metals",
    logo: null,
    darkCard: false,
    url: "#",
    color: "#1a3a5c",
  },
  {
    name: "Traxys",
    shortName: "Traxys",
    logo: "https://www.traxys.com/images/traxys_logo-white.svg",
    darkCard: true,
    url: "https://www.traxys.com",
    color: "#141558",
  },
  {
    name: "BlueQuest Resources",
    shortName: "BlueQuest",
    logo: "https://static.wixstatic.com/media/93d271_4377539d1e9043928596255d08fc1e59~mv2.png",
    darkCard: false,
    url: "https://www.bluequest.com",
    color: "#ffffff",
  },
  {
    name: "NMCI Group",
    shortName: "NMCI Group",
    logo: null,
    darkCard: false,
    url: "#",
    color: "#1e4d7b",
  },
  {
    name: "Metal Extraction Co. of Nig.",
    shortName: "MEC Nigeria",
    logo: null,
    darkCard: false,
    url: "https://www.mexconmetals.com",
    color: "#2d6a4f",
  },
  {
    name: "Metcon Ltd",
    shortName: "Metcon",
    logo: null,
    darkCard: false,
    url: "https://metconltd.com",
    color: "#7b3f00",
  },
  {
    name: "Indviz Metals Limited",
    shortName: "Indviz Metals",
    logo: null,
    darkCard: false,
    url: "#",
    color: "#1a3a5c",
  },
  {
    name: "Greenvale Energy Ltd",
    shortName: "Greenvale Energy",
    logo: null,
    darkCard: false,
    url: "https://greenvaleenergy.com.ng",
    color: "#1b5e20",
  },
  {
    name: "De Alice Integrated Services",
    shortName: "De Alice",
    logo: null,
    darkCard: false,
    url: "#",
    color: "#4a1942",
  },
  {
    name: "Continental Lithium",
    shortName: "Continental Lithium",
    logo: "https://continental-lithium.com/wp-content/uploads/2023/06/cl_logo.png",
    darkCard: false,
    url: "https://continental-lithium.com",
    color: "#ffffff",
  },
];

function getInitials(name: string): string {
  const words = name.split(" ");
  if (words.length === 1) return name.slice(0, 2).toUpperCase();
  if (words.length === 2) return (words[0][0] + words[1][0]).toUpperCase();
  return (words[0][0] + words[1][0] + (words[2]?.[0] ?? "")).toUpperCase();
}

function ClientCard({ client }: { client: Client }) {
  if (client.logo) {
    return (
      <div
        className="flex-shrink-0 mx-4 w-[180px] h-[90px] rounded-xl overflow-hidden flex items-center justify-center px-5 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
        style={{
          background: client.darkCard ? client.color : "#ffffff",
          border: client.darkCard ? "none" : "1.5px solid #e8ecf0",
        }}
        onClick={() => client.url !== "#" && window.open(client.url, "_blank")}
        title={client.name}
      >
        <Image
          width={100}
          height={100}
          src={client.logo}
          alt={client.name}
          className="max-w-full max-h-[60px] object-contain"
          style={{
            filter: client.darkCard ? "brightness(1)" : "grayscale(20%)",
          }}
        />
      </div>
    );
  }

  return (
    <div
      className="flex-shrink-0 mx-4 w-[180px] h-[90px] rounded-xl flex flex-col items-center justify-center px-4 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
      style={{ background: client.color, border: "none" }}
      onClick={() => client.url !== "#" && window.open(client.url, "_blank")}
      title={client.name}
    >
      <span
        className="text-white font-bold text-[22px] leading-none tracking-wide"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {getInitials(client.shortName)}
      </span>
      <span className="text-white/70 text-[10px] mt-1.5 font-medium tracking-wider text-center uppercase leading-tight">
        {client.shortName}
      </span>
    </div>
  );
}

export default function ClientsSection() {
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  const row1 = clients.slice(0, 6);
  const row2 = clients.slice(5);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes marqueeLeft {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marqueeRight {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      .marquee-left {
        animation: marqueeLeft 28s linear infinite;
      }
      .marquee-right {
        animation: marqueeRight 28s linear infinite;
      }
      .marquee-left:hover,
      .marquee-right:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      className="py-24 overflow-hidden"
      style={{ background: "#f4f6fa" }}
    >
      <div className="max-w-[1200px] mx-auto px-8 mb-14 text-center">
        <span className="inline-flex items-center gap-2 text-[#E8621A] text-[13px] font-semibold tracking-[0.15em] uppercase mb-4">
          <span className="w-6 h-[2px] bg-[#E8621A]" />
          Our Clients
          <span className="w-6 h-[2px] bg-[#E8621A]" />
        </span>
        <h2
          className="text-[#0a1628] font-bold text-[34px] leading-tight mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Trusted By Industry Leaders
        </h2>
        <p className="text-gray-500 text-[15px] max-w-[560px] mx-auto leading-relaxed">
          We are proud to have partnered with leading metals, minerals, and
          energy companies across Nigeria and beyond.
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-6 overflow-hidden">
        <div
          ref={track1Ref}
          className="flex marquee-left"
          style={{ width: "max-content" }}
        >
          {[...row1, ...row1].map((client, i) => (
            <ClientCard key={`r1-${i}`} client={client} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative overflow-hidden">
        <div
          ref={track2Ref}
          className="flex marquee-right"
          style={{ width: "max-content" }}
        >
          {[...row2, ...row2].map((client, i) => (
            <ClientCard key={`r2-${i}`} client={client} />
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="max-w-[1200px] mx-auto px-8 mt-14 flex items-center justify-center">
        <div className="flex items-center gap-3 text-gray-400 text-[13px] font-medium">
          <span className="w-16 h-[1px] bg-gray-300" />
          <span>
            11+ companies trust Access Fulcrum for independent inspection
          </span>
          <span className="w-16 h-[1px] bg-gray-300" />
        </div>
      </div>
    </section>
  );
}
