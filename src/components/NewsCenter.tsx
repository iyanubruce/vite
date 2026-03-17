"use client";
import { useState, useEffect } from 'react';

const updates = [
  {
    date: 'Mar 2026',
    category: 'Announcement',
    title: 'Welcome to Access Fulcrum Limited',
    body: 'We are proud to launch our new digital presence, reflecting our commitment to world-class inspection services for global clients.',
  },
  {
    date: 'Feb 2026',
    category: 'Company News',
    title: 'AFL Exceeds Your Expectations',
    body: 'Our dedicated team continues to deliver beyond expectations — combining technical expertise with a passion for exceptional customer service.',
  },
  {
    date: 'Jan 2026',
    category: 'Industry',
    title: 'Expanding Our Global Network',
    body: 'Access Fulcrum Limited expands its reach to new markets, reinforcing our position as a trusted partner for commodity inspection worldwide.',
  },
];

export default function NewsCenter() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % updates.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-[#0a1628] py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left label */}
          <div className="lg:col-span-2">
            <span className="flex items-center gap-2 text-[#E8621A] text-[13px] font-semibold tracking-[0.15em] uppercase mb-4">
              <span className="w-6 h-[2px] bg-[#E8621A]" />
              Latest Updates
            </span>
            <h2
              className="text-white font-bold text-[36px] leading-tight mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              News &amp; Insights
            </h2>
            <p className="text-white/50 text-[14px] leading-relaxed">
              Stay up to date with developments from Access Fulcrum Limited, including service
              expansions, industry insights, and company announcements.
            </p>

            {/* Navigation dots */}
            <div className="flex gap-2 mt-8">
              {updates.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`News ${i + 1}`}
                  className={`cursor-pointer transition-all duration-300 rounded-full ${
                    i === active ? 'w-8 h-2 bg-[#E8621A]' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: news cards */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {updates.map((item, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-xl p-6 border cursor-pointer transition-all duration-300 ${
                  i === active
                    ? 'bg-white/10 border-[#E8621A]/40'
                    : 'bg-white/5 border-white/10 hover:bg-white/8'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`text-[11px] font-semibold tracking-widest uppercase px-2.5 py-0.5 rounded-full ${
                      i === active
                        ? 'bg-[#E8621A] text-white'
                        : 'bg-white/10 text-white/50'
                    }`}
                  >
                    {item.category}
                  </span>
                  <span className="text-white/30 text-[12px]">{item.date}</span>
                </div>
                <h3
                  className={`font-semibold text-[16px] mb-2 transition-colors ${
                    i === active ? 'text-white' : 'text-white/60'
                  }`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.title}
                </h3>
                {i === active && (
                  <p className="text-white/60 text-[13px] leading-relaxed">{item.body}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
