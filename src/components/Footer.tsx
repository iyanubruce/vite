import Link from 'next/link';

const links = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  Services: [
    { label: 'Metals & Minerals', href: '/services' },
    { label: 'Agro & Allied', href: '/services' },
    { label: 'Oil & Gas', href: '/services' },
    { label: 'Collateral Management', href: '/services' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#06101f]">
      <div className="max-w-[1200px] mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <img
            src="https://www.access-fulcrum.com/_next/image?url=%2Fimages%2FLogo.png&w=384&q=75"
            alt="Access Fulcrum Limited"
            className="h-[48px] w-auto object-contain brightness-0 invert mb-5"
          />
          <p className="text-white/50 text-[13px] leading-relaxed mb-6">
            A leading worldwide independent provider of comprehensive commodities inspection,
            collateral management and stock monitoring services.
          </p>
          <div className="flex gap-3">
            {['ri-linkedin-fill', 'ri-twitter-x-fill', 'ri-mail-line'].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-white/50 hover:border-[#E8621A] hover:text-[#E8621A] transition-colors duration-200 cursor-pointer"
              >
                <i className={`${icon} text-[14px]`} />
              </a>
            ))}
          </div>
        </div>

        {/* Nav links */}
        {Object.entries(links).map(([group, items]) => (
          <div key={group}>
            <h4
              className="text-white font-semibold text-[14px] tracking-wide uppercase mb-5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {group}
            </h4>
            <ul className="flex flex-col gap-3">
              {items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/50 text-[13px] hover:text-[#E8621A] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h4
            className="text-white font-semibold text-[14px] tracking-wide uppercase mb-5"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Contact
          </h4>
          <div className="flex flex-col gap-4">
            {[
              { icon: 'ri-mail-line', val: 'contact@access-fulcrum.com' },
              { icon: 'ri-phone-line', val: '+234 803 992 6902' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className={`${item.icon} text-[#E8621A] text-base`} />
                </span>
                <span className="text-white/50 text-[13px] leading-relaxed">{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-[12px]">
            &copy; {new Date().getFullYear()} Access Fulcrum Limited. All rights reserved.
          </p>
          <p className="text-white/20 text-[11px]">Terms &amp; Conditions Apply</p>
        </div>
      </div>
    </footer>
  );
}
