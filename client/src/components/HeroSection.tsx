import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      style={{
        height: "100vh",
        minHeight: "600px",
        paddingTop: "clamp(28px, 3.5vw, 36px)",
        background: "linear-gradient(180deg, #050505 0%, #0a0a0a 40%, #080808 100%)",
      }}
      data-testid="hero-section"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%),
              radial-gradient(ellipse 40% 30% at 30% 40%, rgba(212,175,55,0.03) 0%, transparent 60%),
              radial-gradient(ellipse 40% 30% at 70% 60%, rgba(212,175,55,0.03) 0%, transparent 60%)
            `,
          }}
        />
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 mb-8 ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "0.3s" }}
        >
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" className="mx-auto" data-testid="logo-icon">
            <polygon points="36,4 68,36 36,68 4,36" stroke="#D4AF37" strokeWidth="0.6" fill="none" opacity="0.5" />
            <polygon points="36,12 60,36 36,60 12,36" stroke="#D4AF37" strokeWidth="0.4" fill="none" opacity="0.3" />
            <line x1="36" y1="22" x2="36" y2="24" stroke="#D4AF37" strokeWidth="0.4" opacity="0.3" />
            <line x1="36" y1="48" x2="36" y2="50" stroke="#D4AF37" strokeWidth="0.4" opacity="0.3" />
            <line x1="22" y1="36" x2="24" y2="36" stroke="#D4AF37" strokeWidth="0.4" opacity="0.3" />
            <line x1="48" y1="36" x2="50" y2="36" stroke="#D4AF37" strokeWidth="0.4" opacity="0.3" />
            <text x="36" y="34" textAnchor="middle" fill="#D4AF37" fontSize="9" fontFamily="Cinzel" fontWeight="700" letterSpacing="2" opacity="0.7">
              PAHLU RAM
            </text>
            <text x="36" y="43" textAnchor="middle" fill="#D4AF37" fontSize="6.5" fontFamily="Montserrat" fontWeight="300" letterSpacing="3" opacity="0.45">
              SARRAF &amp; SONS
            </text>
          </svg>
        </div>

        <div
          className={`transition-all duration-1000 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          style={{ transitionDelay: "0.5s" }}
        >
          <p
            className="font-sans uppercase tracking-[0.3em] text-gold/60 mb-6"
            style={{ fontSize: "clamp(0.6rem, 1vw, 0.8rem)" }}
            data-testid="text-heritage-label"
          >
            Est. 1961 &mdash; Siddharth Nagar
          </p>
        </div>

        <div
          className={`transition-all duration-1000 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          style={{ transitionDelay: "0.8s" }}
        >
          <h1
            className="font-serif uppercase tracking-[0.08em] leading-tight text-ivory"
            style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)" }}
            data-testid="text-hero-title"
          >
            Crafting Legacies in
            <br />
            <span className="animate-shimmer">Gold & Diamonds</span>
            <br />
            Since 1961
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          style={{ transitionDelay: "1.1s" }}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-8" />
          <p
            className="font-sans text-ivory/50 max-w-lg mx-auto leading-relaxed"
            style={{ fontSize: "clamp(0.8rem, 1.2vw, 1rem)" }}
            data-testid="text-hero-subtitle"
          >
            Pahlu Ram Nandlal Sarraf And Sons — Where heritage meets modern opulence.
            Your premier destination for BIS Hallmarked gold and GIA certified diamonds.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 flex justify-center w-full ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          style={{ transitionDelay: "1.4s" }}
        >
          <a
            href="#gallery"
            className="mt-10 px-10 py-3.5 border border-gold/40 text-gold font-sans uppercase tracking-[0.2em] transition-all duration-500 hover:border-gold hover:bg-gold/5 text-center"
            style={{ fontSize: "clamp(0.65rem, 0.9vw, 0.8rem)" }}
            data-testid="link-explore-collection"
          >
            Explore Collection
          </a>
        </div>
      </div>

      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 ${visible ? "opacity-60" : "opacity-0"}`}
        style={{ transitionDelay: "1.8s" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-ivory/30 font-sans uppercase tracking-[0.2em]" style={{ fontSize: "clamp(0.55rem, 0.7vw, 0.65rem)" }}>
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
