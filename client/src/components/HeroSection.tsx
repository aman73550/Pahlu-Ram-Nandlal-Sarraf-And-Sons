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
        minHeight: "700px",
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
              radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 70%),
              radial-gradient(ellipse 40% 30% at 25% 35%, rgba(212,175,55,0.04) 0%, transparent 60%),
              radial-gradient(ellipse 40% 30% at 75% 65%, rgba(212,175,55,0.04) 0%, transparent 60%)
            `,
          }}
        />
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 65%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: "linear-gradient(to top, #050505, transparent)" }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 mb-6 ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mx-auto" data-testid="logo-icon">
            <polygon points="40,4 76,40 40,76 4,40" stroke="#D4AF37" strokeWidth="0.6" fill="none" opacity="0.5" />
            <polygon points="40,13 67,40 40,67 13,40" stroke="#D4AF37" strokeWidth="0.4" fill="none" opacity="0.3" />
            <line x1="40" y1="24" x2="40" y2="27" stroke="#D4AF37" strokeWidth="0.4" opacity="0.25" />
            <line x1="40" y1="53" x2="40" y2="56" stroke="#D4AF37" strokeWidth="0.4" opacity="0.25" />
            <line x1="24" y1="40" x2="27" y2="40" stroke="#D4AF37" strokeWidth="0.4" opacity="0.25" />
            <line x1="53" y1="40" x2="56" y2="40" stroke="#D4AF37" strokeWidth="0.4" opacity="0.25" />
            <text x="40" y="38" textAnchor="middle" fill="#D4AF37" fontSize="10" fontFamily="Cinzel" fontWeight="700" letterSpacing="2" opacity="0.75">
              PAHLU RAM
            </text>
            <text x="40" y="48" textAnchor="middle" fill="#D4AF37" fontSize="7" fontFamily="Montserrat" fontWeight="300" letterSpacing="3" opacity="0.45">
              SARRAF &amp; SONS
            </text>
          </svg>
        </div>

        <div
          className={`transition-all duration-1000 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          style={{ transitionDelay: "0.5s" }}
        >
          <p
            className="font-cursive text-gold/70 mb-4"
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)" }}
            data-testid="text-cursive-tagline"
          >
            Where every piece tells a story
          </p>
        </div>

        <div
          className={`transition-all duration-1000 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          style={{ transitionDelay: "0.6s" }}
        >
          <p
            className="font-sans uppercase tracking-[0.3em] text-gold/50 mb-6"
            style={{ fontSize: "clamp(0.55rem, 0.9vw, 0.7rem)" }}
            data-testid="text-heritage-label"
          >
            Est. 1961 &mdash; Siddharth Nagar
          </p>
        </div>

        <div
          className={`transition-all duration-1000 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          style={{ transitionDelay: "0.9s" }}
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
          style={{ transitionDelay: "1.2s" }}
        >
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/40" />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L14.5 9H22L16 13.5L18 21L12 17L6 21L8 13.5L2 9H9.5L12 2Z" fill="#D4AF37" opacity="0.4" />
            </svg>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/40" />
          </div>
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
          className={`transition-all duration-1000 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          style={{ transitionDelay: "1.5s" }}
        >
          <p
            className="font-cursive text-ivory/30 mt-6"
            style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)" }}
            data-testid="text-cursive-quote"
          >
            "Adorning generations with timeless elegance"
          </p>
        </div>

        <div
          className={`transition-all duration-1000 flex justify-center w-full ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          style={{ transitionDelay: "1.8s" }}
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
        style={{ transitionDelay: "2.2s" }}
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
