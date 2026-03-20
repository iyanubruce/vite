import SectionLabel from "./SectionLabel";

const reasons = [
  {
    icon: "ri-medal-line",
    title: "Expertise",
    desc: "Our team brings combined decades of experience in inspection, analytical services, and commodity management across Nigeria's key mining, energy, and agricultural sectors.",
    highlight: "40+ Years Combined",
  },
  {
    icon: "ri-star-line",
    title: "Quality",
    desc: "We are committed to delivering exceptional service quality on every assignment — measured against international benchmarks.",
    highlight: "Zero Compromise",
  },
  {
    icon: "ri-award-line",
    title: "Excellence",
    desc: "All operations conform to ISO and GAFTA standards ensuring results you can stand behind in any trade dispute.",
    highlight: "ISO & GAFTA Compliant",
  },
  {
    icon: "ri-user-star-line",
    title: "Competence",
    desc: "Our versatile workforce brings together a wide range of technical expertise and practical trade skills, allowing us to deliver customized solutions across multiple commodity sectors.",
    highlight: "Versatile Workforce",
  },
  {
    icon: "ri-map-pin-line",
    title: "Network",
    desc: "AFL operates a robust network across Nigeria, with its head office in Lagos and key regional offices in Jos and Onne. This infrastructure allows our inspectors to maintain a constant presence at major mining sites, refineries, and ports nationwide.",
    highlight: "Nationwide Coverage",
  },
  {
    icon: "ri-cpu-line",
    title: "Technology",
    desc: "AFL deploys real-time reporting infrastructure, digital chain-of-custody tools, and modern analytical equipment for accurate, fast turnaround.",
    highlight: "Real-Time Reporting",
  },
];

export default function WhyUsSection() {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/bgImage3.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[#0a1628]/90" />
      <div className="relative z-10 max-w-[1100px] mx-auto px-12">
        <div className="text-center mb-16">
          <SectionLabel text="Why Access Fulcrum" />
          <h2
            className="text-white font-bold text-[38px]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Six Reasons to Choose AFL
          </h2>
          <p className="text-white/50 text-[15px] mt-3 max-w-[540px] mx-auto">
            Trusted by commodity traders, banks, and exporters for our unmatched
            depth of expertise and operational integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="rounded-xl bg-white/5 border border-white/10 p-7 hover:bg-white/10 transition-colors duration-300 group"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-lg bg-[#E8621A]/20 flex items-center justify-center">
                  <i className={`${item.icon} text-[#E8621A] text-lg`} />
                </div>
                <span className="text-[#E8621A]/70 text-[10px] font-semibold tracking-widest uppercase border border-[#E8621A]/30 px-2.5 py-1 rounded-full">
                  {item.highlight}
                </span>
              </div>
              <h4
                className="text-white font-semibold text-[16px] mb-2.5"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {item.title}
              </h4>
              <p className="text-white/50 text-[13px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
