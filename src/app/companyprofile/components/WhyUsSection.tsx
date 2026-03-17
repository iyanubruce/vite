import SectionLabel from './SectionLabel';

const reasons = [
  {
    icon: 'ri-medal-line',
    title: 'Expertise',
    desc: 'Our team brings combined decades of experience in inspection, analytical services, and commodity management across Nigeria\'s key mining, energy, and agricultural sectors.',
    highlight: '40+ Years Combined',
  },
  {
    icon: 'ri-star-line',
    title: 'Quality',
    desc: 'We are committed to delivering exceptional service quality on every assignment — from field inspections to laboratory analysis — measured against international benchmarks.',
    highlight: 'Zero Compromise',
  },
  {
    icon: 'ri-award-line',
    title: 'Excellence',
    desc: 'All operations conform to ISO, GAFTA, and MMTA standards, with analytical methods accredited under NiNAS ISO/IEC 17020 — ensuring results you can stand behind in any trade dispute.',
    highlight: 'ISO & GAFTA Compliant',
  },
  {
    icon: 'ri-user-star-line',
    title: 'Competence',
    desc: 'Our multidisciplinary workforce includes skilled chemists, geologists, surveyors, and trade specialists — each licensed and trained for their respective commodity domain.',
    highlight: 'Multidisciplinary Team',
  },
  {
    icon: 'ri-map-pin-line',
    title: 'Network',
    desc: 'With offices in Abuja and Lagos and active inspectors at all major Nigerian ports, refineries, and mining sites, AFL maintains a nationwide operational footprint.',
    highlight: 'Nationwide Coverage',
  },
  {
    icon: 'ri-cpu-line',
    title: 'Technology',
    desc: 'AFL deploys real-time reporting infrastructure, digital chain-of-custody tools, and modern analytical equipment — including XRF, AAS, and UV/VIS systems — for accurate, fast turnaround.',
    highlight: 'Real-Time Reporting',
  },
];

export default function WhyUsSection() {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://readdy.ai/api/search-image?query=modern%20professional%20office%20building%20exterior%20glass%20facade%20with%20warm%20interior%20lighting%20at%20dusk%2C%20premium%20corporate%20headquarters%20architecture%2C%20dark%20evening%20tones%2C%20Nigeria%20business%20district%20cityscape%2C%20minimal%20simple%20background&width=1600&height=800&seq=cp-why-bg-01&orientation=landscape')",
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
            Trusted by commodity traders, banks, and exporters for our unmatched depth of expertise and operational integrity.
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
              <p className="text-white/50 text-[13px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
