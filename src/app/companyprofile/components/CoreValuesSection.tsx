import SectionLabel from './SectionLabel';

const coreValues = [
  {
    icon: 'ri-shield-check-line',
    title: 'Integrity',
    desc: 'We uphold the highest standards of honesty and transparency in all operations, ensuring trust in every service we deliver.',
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Reliability',
    desc: "We deliver consistent and dependable services, meeting our clients' needs with precision and professionalism on every assignment.",
  },
  {
    icon: 'ri-lightbulb-flash-line',
    title: 'Innovation',
    desc: 'We embrace the latest analytical and reporting technologies to enhance efficiency, accuracy, and sustainability across our processes.',
  },
  {
    icon: 'ri-focus-3-line',
    title: 'Client Excellence',
    desc: 'We prioritise our clients, offering tailored solutions and dedicated account management that builds long-lasting, trusted partnerships.',
  },
];

export default function CoreValuesSection() {
  return (
    <section className="py-24 bg-[#f4f6fa]">
      <div className="max-w-[1100px] mx-auto px-12">
        <div className="text-center mb-16">
          <SectionLabel text="What Drives Us" />
          <h2
            className="text-[#0a1628] font-bold text-[38px]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Our Core Values
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E8621A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="w-12 h-12 rounded-xl bg-[#E8621A]/10 flex items-center justify-center mb-5">
                <i className={`${v.icon} text-[#E8621A] text-xl`} />
              </div>
              <h4
                className="text-[#0a1628] font-bold text-[16px] mb-3"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {v.title}
              </h4>
              <p className="text-gray-500 text-[13px] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
