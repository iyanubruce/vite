"use client";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const coreValues = [
  {
    icon: 'ri-shield-check-line',
    title: 'Integrity',
    desc: 'We uphold the highest standards of honesty and transparency in all our operations, ensuring trust in every service we provide.',
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Reliability',
    desc: "We deliver consistent and dependable services, meeting our client's needs with precision and professionalism.",
  },
  {
    icon: 'ri-lightbulb-flash-line',
    title: 'Innovation',
    desc: 'We embrace the latest technologies to enhance the efficiency, accuracy, and sustainability of our processes.',
  },
  {
    icon: 'ri-focus-3-line',
    title: 'Client-Centered Excellence',
    desc: 'We prioritize our clients, offering tailored solutions that build long-lasting partnerships.',
  },
];

const capabilities = [
  {
    icon: 'ri-search-eye-line',
    title: 'Inspection Services',
    desc: 'Accurate and timely inspection of commodities, ensuring quality and compliance at every stage of the supply chain.',
  },
  {
    icon: 'ri-bank-line',
    title: 'Collateral Management',
    desc: 'Secure, transparent, and reliable collateral management services that support financing and risk mitigation for commodities trading.',
  },
  {
    icon: 'ri-file-check-line',
    title: 'Verification & Certification',
    desc: 'Independent verification and certification services, giving our clients confidence in the integrity of their transactions.',
  },
  {
    icon: 'ri-pie-chart-2-line',
    title: 'Sector Specialization',
    desc: 'Expertise in metals and minerals, agricultural and allied commodities, and oil and gas — offering industry-specific solutions.',
  },
];

const whyUs = [
  {
    icon: 'ri-team-line',
    title: 'Experienced Team',
    desc: 'Our professionals have extensive expertise in commodities inspection and management.',
  },
  {
    icon: 'ri-global-line',
    title: 'Global Reach',
    desc: 'AFL operates globally, providing services to clients across diverse markets and sectors.',
  },
  {
    icon: 'ri-award-line',
    title: 'Industry Compliance',
    desc: 'We adhere to international standards and best practices, ensuring the highest quality of service.',
  },
  {
    icon: 'ri-database-2-line',
    title: 'Sector Specialization',
    desc: 'Deep expertise across metals & minerals, agricultural commodities, and oil & gas sectors.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-[480px] flex items-center justify-center bg-cover bg-center pt-20"
        style={{ backgroundImage: "url('https://www.access-fulcrum.com/images/WELCOME.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/80 to-[#0a1628]/60" />
        <div className="relative z-10 text-center px-8 max-w-[760px] mx-auto">
          <span className="inline-flex items-center gap-2 text-[#E8621A] text-[13px] font-semibold tracking-[0.15em] uppercase mb-5">
            <span className="w-6 h-[2px] bg-[#E8621A]" />
            Access Fulcrum Limited
            <span className="w-6 h-[2px] bg-[#E8621A]" />
          </span>
          <h1
            className="text-white font-bold text-[54px] leading-tight mb-5"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            About Us
          </h1>
          <p className="text-white/70 text-[17px] leading-relaxed">
            An independent inspection company with global reach, built on integrity and driven by excellence.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[#E8621A] text-[13px] font-semibold tracking-[0.15em] uppercase mb-4">
              <span className="w-6 h-[2px] bg-[#E8621A]" />
              Our Purpose
              <span className="w-6 h-[2px] bg-[#E8621A]" />
            </span>
            <h2
              className="text-[#0a1628] font-bold text-[36px]"
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
                text: 'To be the trusted global leader in commodities inspection, collateral management and stock monitoring. Ensuring transparency, reliability, and excellence across the metals and minerals, agricultural and allied commodities and oil and gas sectors.',
              },
              {
                icon: 'ri-rocket-2-line',
                title: 'Our Mission',
                text: 'At Access Fulcrum Limited, we strive to collaborate with the industry capacity building of our invaluable clients. Through innovation, professionalism, and commitment to industry standards, we aim to foster sustainable growth and trust in the global commodities market.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#f8f9fc] border border-gray-100 p-10 flex flex-col gap-6"
              >
                <div className="w-14 h-14 rounded-xl bg-[#E8621A]/10 flex items-center justify-center">
                  <i className={`${item.icon} text-[#E8621A] text-2xl`} />
                </div>
                <h3
                  className="text-[#0a1628] font-bold text-[22px]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20" style={{ background: '#0a1628' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[#E8621A] text-[13px] font-semibold tracking-[0.15em] uppercase mb-4">
              <span className="w-6 h-[2px] bg-[#E8621A]" />
              Our Capabilities
              <span className="w-6 h-[2px] bg-[#E8621A]" />
            </span>
            <h2
              className="text-white font-bold text-[36px]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              What We Do
            </h2>
            <p className="text-white/50 text-[15px] mt-3 max-w-[540px] mx-auto">
              We offer a wide range of specialized services to meet the needs of our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((s, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#E8621A]/20 flex items-center justify-center mb-5">
                  <i className={`${s.icon} text-[#E8621A] text-xl`} />
                </div>
                <h4
                  className="text-white font-semibold text-[15px] mb-3"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {s.title}
                </h4>
                <p className="text-white/50 text-[13px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[#E8621A] text-[13px] font-semibold tracking-[0.15em] uppercase mb-4">
              <span className="w-6 h-[2px] bg-[#E8621A]" />
              What Drives Us
              <span className="w-6 h-[2px] bg-[#E8621A]" />
            </span>
            <h2
              className="text-[#0a1628] font-bold text-[36px]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => (
              <div
                key={i}
                className="rounded-xl bg-[#f8f9fc] border border-gray-100 p-7 hover:border-[#E8621A]/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#E8621A]/10 flex items-center justify-center mb-5">
                  <i className={`${v.icon} text-[#E8621A] text-xl`} />
                </div>
                <h4
                  className="text-[#0a1628] font-semibold text-[16px] mb-3"
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

      {/* Why Choose Us */}
      <section className="py-20 bg-[#f4f6fa]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-[#E8621A] text-[13px] font-semibold tracking-[0.15em] uppercase mb-4">
                <span className="w-6 h-[2px] bg-[#E8621A]" />
                Why Access Fulcrum
              </span>
              <h2
                className="text-[#0a1628] font-bold text-[36px] leading-tight mb-5"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Why Choose Us?
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                We proudly serve a diverse portfolio of clients, including major corporations, banks, and traders in the commodities industry. Our commitment to excellence has earned us long-standing partnerships based on trust and mutual success.
              </p>
              <div className="flex flex-col gap-5 mb-10">
                {whyUs.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-[#E8621A]/10 flex items-center justify-center">
                      <i className={`${item.icon} text-[#E8621A] text-lg`} />
                    </div>
                    <div>
                      <h5 className="text-[#0a1628] font-semibold text-[15px] mb-1">{item.title}</h5>
                      <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E8621A] hover:bg-[#c94e0f] text-white text-[14px] font-semibold px-8 py-3 rounded-full transition-colors duration-300 whitespace-nowrap"
              >
                Get In Touch
                <i className="ri-arrow-right-line" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full h-[240px] rounded-xl overflow-hidden">
                <img
                  src="https://www.access-fulcrum.com/images/serviceImage9.jpg"
                  alt="Operations"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="w-full h-[240px] rounded-xl overflow-hidden mt-8">
                <img
                  src="https://www.access-fulcrum.com/images/serviceImage19.jpg"
                  alt="Team"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="w-full h-[240px] rounded-xl overflow-hidden">
                <img
                  src="https://www.access-fulcrum.com/images/serviceImage4.jpg"
                  alt="Minerals"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="w-full h-[240px] rounded-xl overflow-hidden mt-[-32px]">
                <img
                  src="https://www.access-fulcrum.com/images/serviceImage1.jpg"
                  alt="Oil Gas"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#E8621A]">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <h2
            className="text-white font-bold text-[32px] mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Ready to work with us?
          </h2>
          <p className="text-white/80 text-[15px] mb-8 max-w-[500px] mx-auto leading-relaxed">
            Contact our team today to discuss how we can support your commodity inspection and management needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#E8621A] font-semibold text-[14px] px-8 py-3 rounded-full hover:bg-[#f4f6fa] transition-colors duration-300 whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
