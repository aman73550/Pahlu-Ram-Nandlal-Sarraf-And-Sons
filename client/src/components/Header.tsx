import { useEffect, useState } from "react";
import { MapPin, Phone } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed left-0 right-0 z-[80] transition-all duration-500"
      style={{
        top: "clamp(28px, 3.5vw, 36px)",
        background: scrolled
          ? "linear-gradient(180deg, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.85) 100%)"
          : "linear-gradient(180deg, rgba(5,5,5,0.6) 0%, transparent 100%)",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "0.5px solid rgba(212,175,55,0.15)" : "none",
      }}
      data-testid="header"
    >
      <div
        className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8"
        style={{ height: "clamp(48px, 6vw, 64px)" }}
      >
        <a href="#" className="flex items-center gap-3 group" data-testid="link-header-logo">
          <svg width="32" height="32" viewBox="0 0 80 80" fill="none">
            <polygon points="40,4 76,40 40,76 4,40" stroke="#D4AF37" strokeWidth="0.8" fill="none" opacity="0.6" />
            <polygon points="40,13 67,40 40,67 13,40" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.35" />
            <text x="40" y="38" textAnchor="middle" fill="#D4AF37" fontSize="10" fontFamily="Cinzel" fontWeight="700" letterSpacing="2" opacity="0.8">
              PAHLU RAM
            </text>
            <text x="40" y="48" textAnchor="middle" fill="#D4AF37" fontSize="7" fontFamily="Montserrat" fontWeight="300" letterSpacing="3" opacity="0.5">
              SARRAF &amp; SONS
            </text>
          </svg>
          <div className="hidden sm:block">
            <p
              className="font-serif uppercase tracking-[0.15em] text-ivory leading-none"
              style={{ fontSize: "clamp(0.65rem, 1vw, 0.85rem)" }}
              data-testid="text-header-name"
            >
              Pahlu Ram Nandlal
            </p>
            <p
              className="font-sans uppercase tracking-[0.25em] text-gold/50 mt-0.5"
              style={{ fontSize: "clamp(0.45rem, 0.6vw, 0.55rem)" }}
            >
              Sarraf &amp; Sons
            </p>
          </div>
        </a>

        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="tel:09236058261"
            className="flex items-center gap-1.5 text-ivory/40 hover:text-gold transition-colors duration-300"
            data-testid="link-header-call"
          >
            <Phone size={14} strokeWidth={1.5} />
            <span
              className="hidden md:inline font-sans tracking-wider"
              style={{ fontSize: "clamp(0.6rem, 0.75vw, 0.7rem)" }}
            >
              +91 92360 58261
            </span>
          </a>

          <div className="w-px h-4 bg-ivory/10 hidden sm:block" />

          <a
            href="https://maps.google.com/?q=Pahlu+Ram+Nandlal+Sarraf+And+Sons+Siddharth+Nagar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-ivory/40 hover:text-gold transition-colors duration-300"
            data-testid="link-header-location"
          >
            <MapPin size={14} strokeWidth={1.5} />
            <span
              className="hidden md:inline font-sans tracking-wider"
              style={{ fontSize: "clamp(0.6rem, 0.75vw, 0.7rem)" }}
            >
              Siddharth Nagar
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
