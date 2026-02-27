import { useEffect, useRef, useState } from "react";

const badges = [
  {
    id: "bis",
    title: "BIS Hallmarked",
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" stroke="#D4AF37" strokeWidth="1" />
        <path d="M16 24l4 4 8-8" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="24" y="38" textAnchor="middle" fill="#D4AF37" fontSize="6" fontFamily="Montserrat">BIS</text>
      </svg>
    ),
  },
  {
    id: "gia",
    title: "GIA Certified",
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
        <path d="M24 4l6 10h12l-10 8 4 12-12-8-12 8 4-12L6 14h12z" stroke="#D4AF37" strokeWidth="1" fill="none" />
        <text x="24" y="42" textAnchor="middle" fill="#D4AF37" fontSize="6" fontFamily="Montserrat">GIA</text>
      </svg>
    ),
  },
  {
    id: "emi",
    title: "Secure EMI",
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="14" width="32" height="20" rx="3" stroke="#D4AF37" strokeWidth="1" />
        <line x1="8" y1="22" x2="40" y2="22" stroke="#D4AF37" strokeWidth="1" />
        <circle cx="34" cy="28" r="2" stroke="#D4AF37" strokeWidth="0.8" />
        <circle cx="30" cy="28" r="2" stroke="#D4AF37" strokeWidth="0.8" />
        <text x="24" y="42" textAnchor="middle" fill="#D4AF37" fontSize="6" fontFamily="Montserrat">EMI</text>
      </svg>
    ),
  },
];

export default function CertificationBadges() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-16 px-6" data-testid="certification-badges">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-12 md:gap-20 flex-wrap">
          {badges.map((badge, i) => (
            <div
              key={badge.id}
              className={`flex flex-col items-center gap-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 0.2}s` }}
              data-testid={`badge-${badge.id}`}
            >
              <div className="opacity-70 hover:opacity-100 transition-opacity duration-500">
                {badge.icon}
              </div>
              <span
                className="font-sans uppercase tracking-[0.15em] text-ivory/40"
                style={{ fontSize: "clamp(0.55rem, 0.7vw, 0.65rem)" }}
              >
                {badge.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
