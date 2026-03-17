import SectionLabel from './SectionLabel';

export default function VisionMissionSection() {
  return (
    <section className="py-24" style={{ background: '#0a1628' }}>
      <div className="max-w-[1100px] mx-auto px-12">
        <div className="text-center mb-16">
          <SectionLabel text="Our Purpose" />
          <h2
            className="text-white font-bold text-[38px]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Vision &amp; Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              icon: 'ri-eye-line',
              title: 'Our Vision',
              text: 'To be the trusted leader in commodities inspection, laboratory analysis, and collateral management in Nigeria and across Africa — ensuring transparency, reliability, and excellence across the metals &amp; minerals, oil &amp; gas, marine, and agricultural sectors.',
            },
            {
              icon: 'ri-rocket-2-line',
              title: 'Our Mission',
              text: 'At Access Fulcrum Limited, we strive to collaborate with the industry in building the capacity of our clients. Through innovation, professionalism, and commitment to international standards, we aim to foster sustainable growth and enduring trust in commodity markets across Nigeria.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl bg-[#E8621A]" />
              <div className="w-14 h-14 rounded-xl bg-[#E8621A]/20 flex items-center justify-center mb-6">
                <i className={`${item.icon} text-[#E8621A] text-2xl`} />
              </div>
              <h3
                className="text-white font-bold text-[22px] mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-white/55 text-[15px] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
