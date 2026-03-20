import SectionLabel from "./SectionLabel";
import Image from "next/image";
const clients = [
  {
    name: "Malcomines Minor Metals Ltd",
    shortName: "Malcomines",
    logo: "/images/malcomMines.png",
    dark: true,
    color: "#0a1628",
  },
  {
    name: "Millenium Metals Nig. Ltd",
    shortName: "Millenium Metals",
    logo: null,
    dark: false,
    color: "#1a3a5c",
  },
  {
    name: "Traxys",
    shortName: "Traxys",
    logo: "/images/traxys_logo-white.svg",
    dark: true,
    color: "#141558",
  },
  {
    name: "BlueQuest Resources",
    shortName: "BlueQuest",
    logo: "/images/bluequest.png",
    dark: false,
    color: "#f8f9fc",
  },
  {
    name: "NMCI Group",
    shortName: "NMCI Group",
    logo: null,
    dark: false,
    color: "#1e4d7b",
  },
  {
    name: "Metal Extraction Co. of Nigeria",
    shortName: "MEXCON",
    logo: null,
    dark: false,
    color: "#2d6a4f",
  },
  {
    name: "Metcon Ltd",
    shortName: "Metcon",
    logo: null,
    dark: false,
    color: "#7b3f00",
  },
  {
    name: "Indviz Metals Limited",
    shortName: "Indviz Metals",
    logo: null,
    dark: false,
    color: "#1a3a5c",
  },
  {
    name: "Greenvale Energy Ltd",
    shortName: "Greenvale Energy",
    logo: null,
    dark: false,
    color: "#1b5e20",
  },
  {
    name: "De Alice Integrated Services",
    shortName: "De Alice",
    logo: null,
    dark: false,
    color: "#4a1942",
  },
  {
    name: "Continental Lithium",
    shortName: "Continental Lithium",
    logo: "/images/continental-lithium.png",
    dark: false,
    color: "#f8f9fc",
  },
];

function getInitials(name: string): string {
  const words = name.split(" ");
  if (words.length === 1) return name.slice(0, 2).toUpperCase();
  if (words.length === 2) return (words[0][0] + words[1][0]).toUpperCase();
  return (words[0][0] + words[1][0] + (words[2]?.[0] ?? "")).toUpperCase();
}

export default function ClientsSection() {
  return (
    <section className="py-24 bg-[#f4f6fa]">
      <div className="max-w-[1100px] mx-auto px-12">
        <div className="text-center mb-16">
          <SectionLabel text="Our Clients" />
          <h2
            className="text-[#0a1628] font-bold text-[38px]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Trusted By Industry Leaders
          </h2>
          <p className="text-gray-400 text-[15px] mt-3 max-w-[520px] mx-auto">
            Leading metals, minerals, energy, and trading companies across
            Nigeria and beyond trust AFL for independent oversight.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {clients.map((client, i) => (
            <div
              key={i}
              className="h-[110px] rounded-xl flex flex-col items-center justify-center px-5 overflow-hidden border"
              style={{
                background: client.color,
                borderColor:
                  !client.dark && client.color === "#f8f9fc"
                    ? "#e8ecf0"
                    : "transparent",
              }}
            >
              {client.logo ? (
                <Image
                  width={100}
                  height={100}
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-[55px] object-contain"
                />
              ) : (
                <>
                  <span
                    className="text-white font-bold text-[24px] leading-none"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {getInitials(client.shortName)}
                  </span>
                  <span className="text-white/70 text-[10px] mt-1.5 tracking-wider text-center uppercase leading-tight font-medium">
                    {client.shortName}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-gray-400 text-[13px] font-medium">
          <span className="w-16 h-[1px] bg-gray-300" />
          <span>
            11+ companies trust Access Fulcrum for independent inspection &amp;
            management services
          </span>
          <span className="w-16 h-[1px] bg-gray-300" />
        </div>
      </div>
    </section>
  );
}
