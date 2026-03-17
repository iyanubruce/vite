import SectionLabel from './SectionLabel';

export default function OverviewSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionLabel text="Who We Are" />
            <h2
              className="text-[#0a1628] font-bold text-[40px] leading-tight mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Setting the Standard in
              <span className="block text-[#E8621A]">Commodities Inspection</span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-5">
              Access Fulcrum Limited (AFL) is a leading independent inspection and commodities management
              company headquartered in Abuja, Nigeria — operating across the metals &amp; minerals,
              oil &amp; gas, marine, and agricultural sectors.
            </p>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-5">
              We provide critical third-party verification services that ensure the integrity, quality,
              and quantity of commodity transactions — from mining sites, warehouses, and terminals to
              major Nigerian ports. Our accredited laboratory services deliver precise analytical results
              that global trading desks and financial institutions rely on.
            </p>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
              With a team of seasoned inspectors, chemists, and surveyors, AFL serves major corporations,
              banks, and commodity traders who demand accuracy, impartiality, and strict adherence to
              ISO, GAFTA, and international inspection standards.
            </p>

            {/* Certifications strip */}
            <div className="flex flex-wrap gap-3">
              {['ISO Compliant', 'GAFTA Approved', 'MMTA Standards', 'NiNAS Accredited'].map((cert, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 border border-[#E8621A]/30 text-[#E8621A] text-[11px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full"
                >
                  <i className="ri-checkbox-circle-line text-[11px]" />
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Right — image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full h-[260px] rounded-xl overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20commodity%20inspection%20specialist%20in%20high-visibility%20vest%20examining%20mineral%20ore%20samples%20at%20warehouse%20facility%2C%20focused%20professional%20worker%2C%20industrial%20setting%20Nigeria%2C%20bright%20natural%20lighting%2C%20clean%20simple%20background&width=600&height=600&seq=cp-ov-01&orientation=squarish"
                alt="Inspection specialist"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="w-full h-[260px] rounded-xl overflow-hidden mt-8">
              <img
                src="https://readdy.ai/api/search-image?query=oil%20tanker%20cargo%20ship%20at%20Nigerian%20port%20during%20sunset%2C%20industrial%20petroleum%20inspection%20operations%2C%20professional%20maritime%20photography%2C%20warm%20golden%20tones%2C%20simple%20seaport%20background&width=600&height=600&seq=cp-ov-02&orientation=squarish"
                alt="Oil cargo port"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="w-full h-[260px] rounded-xl overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20laboratory%20scientist%20performing%20chemical%20analysis%20on%20mineral%20samples%20with%20XRF%20equipment%2C%20professional%20lab%20setting%2C%20clean%20white%20background%2C%20industrial%20analytical%20testing%20Nigeria&width=600&height=600&seq=cp-ov-03&orientation=squarish"
                alt="Laboratory analysis"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="w-full h-[260px] rounded-xl overflow-hidden mt-[-32px]">
              <img
                src="https://readdy.ai/api/search-image?query=agricultural%20commodity%20bags%20of%20rice%20and%20grains%20in%20large%20organized%20warehouse%20facility%2C%20inspection%20and%20logistics%2C%20clean%20storage%20facility%2C%20warm%20interior%20lighting%2C%20simple%20industrial%20background&width=600&height=600&seq=cp-ov-04&orientation=squarish"
                alt="Agricultural storage"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
