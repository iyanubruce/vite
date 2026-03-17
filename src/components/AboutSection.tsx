const statsData = [
  { value: '15+', label: 'Years of Experience' },
  { value: '20+', label: 'Countries Served' },
  { value: '500+', label: 'Successful Inspections' },
  { value: '100%', label: 'Client Satisfaction' },
];

export default function AboutSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="w-full h-[480px] rounded-xl overflow-hidden">
              <img
                src="https://www.access-fulcrum.com/images/WELCOME.jpg"
                alt="Access Fulcrum Operations"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 bg-[#E8621A] text-white rounded-xl p-6 w-[180px]">
              <p
                className="text-[40px] font-bold leading-none"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                15+
              </p>
              <p className="text-[13px] text-white/80 mt-1 font-medium">Years of trusted inspection</p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="flex items-center gap-2 text-[#E8621A] text-[13px] font-semibold tracking-[0.15em] uppercase mb-4">
              <span className="w-6 h-[2px] bg-[#E8621A]" />
              Who We Are
            </span>
            <h2
              className="text-[#0a1628] font-bold text-[36px] leading-tight mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              A Global Leader in Independent Commodity Inspection
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-5">
              Access Fulcrum Limited is a leading worldwide independent provider of comprehensive
              commodities inspection, collateral management, and stock monitoring services.
            </p>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
              Founded on the principles of integrity and client-centred excellence, we ensure
              every commodities transaction is safe, transparent, and compliant with the highest
              international standards. We specialise in Metals &amp; Minerals, Agricultural, Agro
              Allied, and Oil &amp; Gas products.
            </p>

            {/* Key credentials */}
            <div className="flex flex-col gap-3">
              {[
                'Fully independent — no commercial interest in trade outcomes',
                'Experienced team of certified inspection professionals',
                'Aligned with global trade compliance frameworks',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-[#E8621A] font-bold text-base" />
                  </span>
                  <p className="text-[14px] text-gray-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((s, i) => (
            <div key={i} className="bg-[#f4f6fa] rounded-xl p-6 text-center">
              <p
                className="text-[#0a1628] font-bold text-[36px] leading-none"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {s.value}
              </p>
              <p className="text-gray-500 text-[13px] mt-2 tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
