import { useState } from "react";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export default function RoyalTrioNav() {
  const [showMap, setShowMap] = useState(false);

  return (
    <>
      <nav
        className="fixed bottom-0 left-0 right-0 z-[90]"
        style={{
          background: "linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(10,10,10,0.9) 60%, rgba(15,15,15,0.8) 100%)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderTop: "0.5px solid rgba(212,175,55,0.15)",
          boxShadow: "0 -4px 30px rgba(0,0,0,0.5), 0 -1px 10px rgba(212,175,55,0.05)",
          padding: "clamp(4px, 1vw, 8px) 0",
        }}
        data-testid="royal-trio-nav"
      >
        <div className="flex items-stretch max-w-lg mx-auto px-2">
          <button
            onClick={() => setShowMap(!showMap)}
            className="flex-1 flex items-center justify-center gap-2 rounded-md transition-all duration-300 hover:bg-gold/8 active:bg-gold/12 group"
            style={{ cursor: "pointer", minHeight: "48px" }}
            data-testid="button-maps"
          >
            <MapPin
              size={17}
              className="text-gold/50 group-hover:text-gold/80 transition-colors duration-300"
              strokeWidth={1.5}
            />
            <span
              className="font-sans uppercase tracking-[0.15em] text-ivory/45 group-hover:text-ivory/70 transition-colors duration-300"
              style={{ fontSize: "clamp(0.6rem, 0.8vw, 0.7rem)" }}
            >
              Maps
            </span>
          </button>

          <div className="w-px bg-gold/10 my-3" />

          <a
            href="tel:7355048683"
            className="flex-1 flex items-center justify-center gap-2 rounded-md transition-all duration-300 hover:bg-gold/8 active:bg-gold/12 group"
            style={{ minHeight: "48px" }}
            data-testid="link-call"
          >
            <Phone
              size={17}
              className="text-gold/50 group-hover:text-gold/80 transition-colors duration-300"
              strokeWidth={1.5}
            />
            <span
              className="font-sans uppercase tracking-[0.15em] text-ivory/45 group-hover:text-ivory/70 transition-colors duration-300"
              style={{ fontSize: "clamp(0.6rem, 0.8vw, 0.7rem)" }}
            >
              Call
            </span>
          </a>

          <div className="w-px bg-gold/10 my-3" />

          <a
            href="https://wa.me/917355048683"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 rounded-md transition-all duration-300 hover:bg-gold/8 active:bg-gold/12 group"
            style={{ minHeight: "48px" }}
            data-testid="link-whatsapp"
          >
            <MessageCircle
              size={17}
              className="text-gold/50 group-hover:text-gold/80 transition-colors duration-300"
              strokeWidth={1.5}
            />
            <span
              className="font-sans uppercase tracking-[0.15em] text-ivory/45 group-hover:text-ivory/70 transition-colors duration-300"
              style={{ fontSize: "clamp(0.6rem, 0.8vw, 0.7rem)" }}
            >
              Chat
            </span>
          </a>
        </div>
      </nav>

      {showMap && (
        <div
          className="fixed inset-0 z-[85] flex items-end justify-center pb-24 px-4"
          style={{ background: "rgba(0,0,0,0.4)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowMap(false); }}
          data-testid="map-panel-overlay"
        >
          <div
            className="w-full max-w-lg glassmorphism rounded-lg overflow-hidden animate-float-up"
            data-testid="map-panel"
          >
            <div className="flex items-center justify-between gap-3 p-4 border-b border-gold/10">
              <div>
                <h3
                  className="font-serif text-ivory/70 tracking-wide"
                  style={{ fontSize: "clamp(0.85rem, 1.2vw, 1rem)" }}
                >
                  Showroom Location
                </h3>
                <p
                  className="font-sans text-ivory/30 mt-1"
                  style={{ fontSize: "clamp(0.65rem, 0.8vw, 0.75rem)" }}
                >
                  Pahlu Ram Nandlal Sarraf And Sons, Siddharth Nagar
                </p>
              </div>
              <button
                onClick={() => setShowMap(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-ivory/5 transition-colors flex-shrink-0"
                data-testid="button-close-map"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" stroke="#FCFBF7" strokeWidth="1.5" fill="none" opacity="0.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-gold/40 mt-0.5 flex-shrink-0" />
                <p className="font-sans text-ivory/45" style={{ fontSize: "clamp(0.7rem, 0.9vw, 0.8rem)" }}>
                  Main Market Road, Siddharth Nagar, Uttar Pradesh, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-gold/40 flex-shrink-0" />
                <a href="tel:7355048683" className="font-sans text-gold/50 hover:text-gold/70 transition-colors" style={{ fontSize: "clamp(0.7rem, 0.9vw, 0.8rem)" }}>
                  +91 73550 48683
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg width="14" height="14" viewBox="0 0 24 24" className="text-gold/40 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <p className="font-sans text-ivory/45" style={{ fontSize: "clamp(0.7rem, 0.9vw, 0.8rem)" }}>
                  Open Daily: 10:00 AM - 9:00 PM
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Siddharth+Nagar+Uttar+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-4 text-center py-2.5 border border-gold/20 rounded-md font-sans uppercase tracking-[0.15em] text-gold/50 hover:bg-gold/5 hover:border-gold/35 hover:text-gold/70 transition-all duration-300"
                style={{ fontSize: "clamp(0.6rem, 0.8vw, 0.7rem)" }}
                data-testid="link-open-google-maps"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
