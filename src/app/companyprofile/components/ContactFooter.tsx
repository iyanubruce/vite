export default function ContactFooter() {
  return (
    <section className="bg-[#0a1628] py-20">
      <div className="max-w-[1100px] mx-auto px-12">
        <div className="h-[3px] w-16 bg-[#E8621A] mb-14" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="https://www.access-fulcrum.com/_next/image?url=%2Fimages%2FLogo.png&w=384&q=75"
              alt="Access Fulcrum Limited"
              className="h-12 w-auto object-contain brightness-0 invert mb-5"
            />
            <p className="text-white/45 text-[13px] leading-relaxed mb-6">
              Nigeria&apos;s foremost independent provider of commodities inspection, laboratory analysis, marine surveys, and collateral management services.
            </p>
            <div className="flex gap-3">
              {['ri-linkedin-fill', 'ri-twitter-x-fill', 'ri-mail-line'].map((icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-white/50 hover:border-[#E8621A] hover:text-[#E8621A] transition-colors duration-200 cursor-pointer"
                >
                  <i className={`${icon} text-[13px]`} />
                </div>
              ))}
            </div>
          </div>

          {/* Offices */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                city: 'Abuja',
                label: 'Head Office',
                address: 'No. 3 Euphrates Crescent, Off Amazon Street, Maitama, Abuja',
                phone: '+234 803 992 6902',
                email: 'contact@access-fulcrum.com',
              },
              {
                city: 'Lagos',
                label: 'Lagos Operations Hub',
                address: '23 Parklane, Apapa GRA, Lagos',
                phone: '+234 803 992 6902',
                email: 'lagos@access-fulcrum.com',
              },
            ].map((office, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#E8621A] font-bold text-[11px] tracking-[0.18em] uppercase">
                    {office.label}
                  </span>
                  <span className="w-6 h-[1px] bg-[#E8621A]" />
                  <span className="text-white/30 text-[11px] tracking-wide uppercase">{office.city}</span>
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: 'ri-map-pin-line', val: office.address },
                    { icon: 'ri-phone-line', val: office.phone },
                    { icon: 'ri-mail-line', val: office.email },
                  ].map((item, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className={`${item.icon} text-[#E8621A] text-sm`} />
                      </span>
                      <span className="text-white/45 text-[13px] leading-relaxed">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-[12px]">
            &copy; {new Date().getFullYear()} Access Fulcrum Limited. All rights reserved.
          </p>
          <p className="text-white/20 text-[11px] tracking-wide">
            www.access-fulcrum.com
          </p>
        </div>
      </div>
    </section>
  );
}
