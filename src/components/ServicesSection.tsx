const services = [
  {
    icon: 'ri-copper-coin-line',
    title: 'Metals & Minerals Inspection',
    desc: 'Comprehensive inspection of ferrous, non-ferrous metals and a wide range of mineral commodities, ensuring quality, quantity, and compliance at every point of trade.',
    highlights: ['Pre-shipment surveys', 'Sampling & Analysis', 'Cargo monitoring'],
  },
  {
    icon: 'ri-seedling-line',
    title: 'Agro & Allied Commodities',
    desc: 'End-to-end inspection services for agricultural products — from grains and oilseeds to processed agro-allied goods — supporting transparent and efficient trade globally.',
    highlights: ['Quality certification', 'Phytosanitary checks', 'Weight verification'],
  },
  {
    icon: 'ri-gas-station-line',
    title: 'Oil & Gas Inspection',
    desc: 'Independent inspection and collateral management for petroleum products and natural gas, maintaining integrity across every stage of the upstream and downstream supply chain.',
    highlights: ['Product quality testing', 'Tank calibration', 'Loss control'],
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#f4f6fa] py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="flex items-center gap-2 text-[#E8621A] text-[13px] font-semibold tracking-[0.15em] uppercase mb-3">
            <span className="w-6 h-[2px] bg-[#E8621A]" />
            What We Do
            <span className="w-6 h-[2px] bg-[#E8621A]" />
          </span>
          <h2
            className="text-[#0a1628] font-bold text-[38px] leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Our Core Services
          </h2>
          <p className="text-gray-500 text-[15px] mt-4 max-w-[520px] leading-relaxed">
            Delivering world-class, independent commodity inspection across three critical sectors
            for clients in over 20 countries.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 border border-gray-100 hover:border-[#E8621A]/30 transition-all duration-300 group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#E8621A]/10 mb-6 group-hover:bg-[#E8621A] transition-colors duration-300">
                <i className={`${svc.icon} text-xl text-[#E8621A] group-hover:text-white transition-colors duration-300`} />
              </div>

              <h3
                className="text-[#0a1628] font-semibold text-[18px] mb-3 leading-snug"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {svc.title}
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-6">{svc.desc}</p>

              {/* Highlights */}
              <ul className="flex flex-col gap-2">
                {svc.highlights.map((h, j) => (
                  <li key={j} className="flex items-center gap-2 text-[13px] text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8621A] flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
