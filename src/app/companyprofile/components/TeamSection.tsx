import SectionLabel from './SectionLabel';

const team = [
  {
    name: 'Emmanuel Adeyemi',
    role: 'Managing Director',
    expertise: 'Commodities Inspection & Strategy',
    image: 'https://readdy.ai/api/search-image?query=professional%20Nigerian%20male%20executive%20business%20portrait%2C%20formal%20suit%2C%20confident%20expression%2C%20clean%20white%20studio%20background%2C%20corporate%20headshot%20photography%2C%20sharp%20lighting&width=400&height=400&seq=cp-team-01&orientation=squarish',
  },
  {
    name: 'Chidinma Okafor',
    role: 'Head of Laboratory Services',
    expertise: 'Analytical Chemistry & Mineralogy',
    image: 'https://readdy.ai/api/search-image?query=professional%20Nigerian%20female%20scientist%20in%20lab%20coat%2C%20confident%20professional%20headshot%2C%20clean%20white%20background%2C%20corporate%20portrait%20photography%2C%20warm%20studio%20lighting&width=400&height=400&seq=cp-team-02&orientation=squarish',
  },
  {
    name: 'Tunde Afolabi',
    role: 'Chief Inspector — Oil & Gas',
    expertise: 'Petroleum Products & Marine Surveys',
    image: 'https://readdy.ai/api/search-image?query=professional%20Nigerian%20male%20engineer%20headshot%20wearing%20safety%20vest%2C%20confident%20professional%20expression%2C%20plain%20light%20grey%20background%2C%20corporate%20portrait%20photography%2C%20natural%20lighting&width=400&height=400&seq=cp-team-03&orientation=squarish',
  },
  {
    name: 'Ngozi Eze',
    role: 'Collateral Management Lead',
    expertise: 'Finance, Logistics & Warehousing',
    image: 'https://readdy.ai/api/search-image?query=professional%20Nigerian%20female%20business%20executive%20portrait%2C%20business%20attire%2C%20warm%20confident%20smile%2C%20clean%20white%20studio%20background%2C%20corporate%20headshot%20photography&width=400&height=400&seq=cp-team-04&orientation=squarish',
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-12">
        {/* Nigeria Network header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <SectionLabel text="Our Network" />
            <h2
              className="text-[#0a1628] font-bold text-[38px] leading-tight mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Nigeria Presence &amp;
              <span className="block text-[#E8621A]">Operations Network</span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
              AFL maintains a robust operational presence across Nigeria — with offices in Abuja
              (Head Office) and Lagos, and field inspectors deployed at all major ports, refineries,
              mining sites, and warehouses nationwide.
            </p>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              Our Lagos operations hub at Apapa GRA serves as the primary gateway for marine inspection
              and port-based commodity work, while our Abuja headquarters coordinates strategy,
              compliance, and collateral management engagements.
            </p>
          </div>

          {/* Office cards */}
          <div className="flex flex-col gap-5">
            {[
              {
                city: 'Abuja',
                label: 'Head Office',
                address: 'No. 3 Euphrates Crescent, Off Amazon Street, Maitama, Abuja',
                phone: '+234 803 992 6902',
                email: 'contact@access-fulcrum.com',
                icon: 'ri-building-4-line',
              },
              {
                city: 'Lagos',
                label: 'Lagos Operations Hub',
                address: '23 Parklane, Apapa GRA, Lagos',
                phone: '+234 803 992 6902',
                email: 'lagos@access-fulcrum.com',
                icon: 'ri-ship-2-line',
              },
            ].map((office, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 bg-[#f8f9fc] p-7 flex gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E8621A]/10 flex items-center justify-center flex-shrink-0">
                  <i className={`${office.icon} text-[#E8621A] text-xl`} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-[#0a1628] font-bold text-[15px]"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {office.label}
                    </span>
                    <span className="text-[10px] text-[#E8621A] font-semibold tracking-widest uppercase border border-[#E8621A]/30 px-2 py-0.5 rounded-full">
                      {office.city}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {[
                      { icon: 'ri-map-pin-line', val: office.address },
                      { icon: 'ri-phone-line', val: office.phone },
                      { icon: 'ri-mail-line', val: office.email },
                    ].map((item, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <span className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <i className={`${item.icon} text-[#E8621A] text-sm`} />
                        </span>
                        <span className="text-gray-500 text-[13px] leading-relaxed">{item.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <SectionLabel text="Our People" />
          <h2
            className="text-[#0a1628] font-bold text-[32px]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Key Leadership Team
          </h2>
          <p className="text-gray-400 text-[14px] mt-3 max-w-[460px] mx-auto">
            Seasoned professionals driving performance, compliance, and client satisfaction across all service lines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-gray-100 group"
            >
              <div className="w-full h-[220px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-white">
                <div className="w-8 h-[2px] bg-[#E8621A] mb-3" />
                <h4
                  className="text-[#0a1628] font-bold text-[15px] leading-tight mb-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {member.name}
                </h4>
                <p className="text-[#E8621A] text-[12px] font-semibold tracking-wide uppercase mb-2">
                  {member.role}
                </p>
                <p className="text-gray-400 text-[12px] leading-relaxed">{member.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
