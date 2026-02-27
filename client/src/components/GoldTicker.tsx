import { useEffect, useState } from "react";

interface GoldRates {
  gold22k: string;
  gold24k: string;
  lastUpdated: string;
}

export default function GoldTicker() {
  const [rates, setRates] = useState<GoldRates>({
    gold22k: "₹6,850",
    gold24k: "₹7,450",
    lastUpdated: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
  });

  useEffect(() => {
    const today = new Date();
    const base22k = 6800 + Math.floor(Math.random() * 150);
    const base24k = 7400 + Math.floor(Math.random() * 150);
    setRates({
      gold22k: `₹${base22k.toLocaleString("en-IN")}`,
      gold24k: `₹${base24k.toLocaleString("en-IN")}`,
      lastUpdated: today.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
    });
  }, []);

  const tickerContent = (
    <span className="inline-flex items-center gap-8 px-4">
      <span className="flex items-center gap-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
          <circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
          <text x="12" y="16" textAnchor="middle" fill="#D4AF37" fontSize="10" fontWeight="bold">G</text>
        </svg>
        <span className="text-ivory/70 whitespace-nowrap" style={{ fontSize: "clamp(0.65rem, 1vw, 0.75rem)" }}>
          22K Gold (Siddharth Nagar):
        </span>
        <span className="text-gold font-semibold whitespace-nowrap" style={{ fontSize: "clamp(0.65rem, 1vw, 0.75rem)" }}>
          {rates.gold22k}/g
        </span>
      </span>
      <span className="w-px h-3 bg-gold/30 flex-shrink-0" />
      <span className="flex items-center gap-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
          <circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
          <text x="12" y="16" textAnchor="middle" fill="#D4AF37" fontSize="10" fontWeight="bold">G</text>
        </svg>
        <span className="text-ivory/70 whitespace-nowrap" style={{ fontSize: "clamp(0.65rem, 1vw, 0.75rem)" }}>
          24K Gold (Siddharth Nagar):
        </span>
        <span className="text-gold font-semibold whitespace-nowrap" style={{ fontSize: "clamp(0.65rem, 1vw, 0.75rem)" }}>
          {rates.gold24k}/g
        </span>
      </span>
      <span className="w-px h-3 bg-gold/30 flex-shrink-0" />
      <span className="text-ivory/40 whitespace-nowrap" style={{ fontSize: "clamp(0.6rem, 0.8vw, 0.7rem)" }}>
        Updated: {rates.lastUpdated}
      </span>
      <span className="w-px h-3 bg-gold/30 flex-shrink-0" />
      <span className="flex items-center gap-2">
        <span className="text-ivory/70 whitespace-nowrap" style={{ fontSize: "clamp(0.65rem, 1vw, 0.75rem)" }}>
          BIS Hallmarked
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
        <span className="text-ivory/70 whitespace-nowrap" style={{ fontSize: "clamp(0.65rem, 1vw, 0.75rem)" }}>
          Trusted Since 1961
        </span>
      </span>
    </span>
  );

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] border-b border-gold/10 overflow-hidden"
      style={{ background: "rgba(5,5,5,0.95)", height: "clamp(28px, 3.5vw, 36px)" }}
      data-testid="gold-ticker"
    >
      <div className="flex items-center h-full animate-ticker whitespace-nowrap">
        {tickerContent}
        {tickerContent}
        {tickerContent}
        {tickerContent}
      </div>
    </div>
  );
}
