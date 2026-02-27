import { useState } from "react";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export default function RoyalTrioNav() {
  const [showMap, setShowMap] = useState(false);

  return (
    <>
      <nav
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[90] glassmorphism rounded-full"
        style={{
          width: "clamp(280px, 70vw, 400px)",
          padding: "clamp(6px, 1vw, 10px)",
        }}
        data-testid="royal-trio-nav"
      >
        <div className="flex items-stretch">
          <button
            onClick={() => setShowMap(!showMap)}
            className="flex-1 flex items-center justify-center gap-2 rounded-full transition-all duration-300 hover:bg-gold/10 active:bg-gold/15 group"
            style={{ cursor: "pointer", minHeight: "44px" }}
            data-testid="button-maps"
          >
            <MapPin
              size={16}
              className="text-gold/70 group-hover:text-gold transition-colors duration-300"
              strokeWidth={1.5}
            />
            <span
              className="font-sans uppercase tracking-[0.15em] text-ivory/70 group-hover:text-ivory transition-colors duration-300"
              style={{ fontSize: "clamp(0.6rem, 0.8vw, 0.7rem)" }}
            >
              Maps
            </span>
          </button>

          <div className="w-px bg-gold/20 my-2" />

          <a
            href="tel:7355048683"
            className="flex-1 flex items-center justify-center gap-2 rounded-full transition-all duration-300 hover:bg-gold/10 active:bg-gold/15 group"
            style={{ minHeight: "44px" }}
            data-testid="link-call"
          >
            <Phone
              size={16}
              className="text-gold/70 group-hover:text-gold transition-colors duration-300"
              strokeWidth={1.5}
            />
            <span
              className="font-sans uppercase tracking-[0.15em] text-ivory/70 group-hover:text-ivory transition-colors duration-300"
              style={{ fontSize: "clamp(0.6rem, 0.8vw, 0.7rem)" }}
            >
              Call
            </span>
          </a>

          <div className="w-px bg-gold/20 my-2" />

          <a
            href="https://wa.me/917355048683"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 rounded-full transition-all duration-300 hover:bg-gold/10 active:bg-gold/15 group"
            style={{ minHeight: "44px" }}
            data-testid="link-whatsapp"
          >
            <MessageCircle
              size={16}
              className="text-gold/70 group-hover:text-gold transition-colors duration-300"
              strokeWidth={1.5}
            />
            <span
              className="font-sans uppercase tracking-[0.15em] text-ivory/70 group-hover:text-ivory transition-colors duration-300"
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
          onClick={(e) => { if (e.target === e.currentTarget) setShowMap(false); }}
          data-testid="map-panel-overlay"
        >
          <div
            className="w-full max-w-lg glassmorphism rounded-lg overflow-hidden animate-float-up"
            data-testid="map-panel"
          >
            <div className="flex items-center justify-between p-4 border-b border-gold/10">
              <div>
                <h3
                  className="font-serif text-ivory tracking-wide"
                  style={{ fontSize: "clamp(0.85rem, 1.2vw, 1rem)" }}
                >
                  Showroom Location
                </h3>
                <p
                  className="font-sans text-ivory/40 mt-1"
                  style={{ fontSize: "clamp(0.65rem, 0.8vw, 0.75rem)" }}
                >
                  Pahlu Ram Nandlal Sarraf And Sons, Siddharth Nagar
                </p>
              </div>
              <button
                onClick={() => setShowMap(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-ivory/5 transition-colors"
                data-testid="button-close-map"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" stroke="#FCFBF7" strokeWidth="1.5" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-gold/60 mt-0.5 flex-shrink-0" />
                <p className="font-sans text-ivory/60" style={{ fontSize: "clamp(0.7rem, 0.9vw, 0.8rem)" }}>
                  Main Market Road, Siddharth Nagar, Uttar Pradesh, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-gold/60 flex-shrink-0" />
                <a href="tel:7355048683" className="font-sans text-gold/70 hover:text-gold transition-colors" style={{ fontSize: "clamp(0.7rem, 0.9vw, 0.8rem)" }}>
                  +91 73550 48683
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg width="14" height="14" viewBox="0 0 24 24" className="text-gold/60 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <p className="font-sans text-ivory/60" style={{ fontSize: "clamp(0.7rem, 0.9vw, 0.8rem)" }}>
                  Open Daily: 10:00 AM - 9:00 PM
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Siddharth+Nagar+Uttar+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-4 text-center py-2.5 border border-gold/30 rounded-md font-sans uppercase tracking-[0.15em] text-gold/80 hover:bg-gold/5 hover:border-gold/50 transition-all duration-300"
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
