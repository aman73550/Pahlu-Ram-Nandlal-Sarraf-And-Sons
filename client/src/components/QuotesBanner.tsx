import { useEffect, useRef, useState } from "react";

const quotes = [
  {
    text: "Jewelry is not just an accessory. It is a memory, a legacy, a promise.",
    attribution: "The Sarraf Philosophy",
  },
  {
    text: "Gold does not lose its beauty — it carries the warmth of every hand that has held it.",
    attribution: "A Heritage of Trust",
  },
  {
    text: "A diamond is forever, but the craftsmanship behind it is what makes it eternal.",
    attribution: "Our Master Artisans",
  },
];

export default function QuotesBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeQuote, setActiveQuote] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      data-testid="quotes-banner"
    >
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #050505 0%, #0a0805 50%, #050505 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="absolute left-6 md:left-16 top-1/2 -translate-y-1/2 opacity-10">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="#D4AF37">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 opacity-10 rotate-180">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="#D4AF37">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <div className={`relative z-10 max-w-3xl mx-auto text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-px bg-gold/30" />
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.5 9H22L16 13.5L18 21L12 17L6 21L8 13.5L2 9H9.5L12 2Z" fill="#D4AF37" opacity="0.5" />
          </svg>
          <div className="w-8 h-px bg-gold/30" />
        </div>

        <div className="relative" style={{ minHeight: "clamp(120px, 15vw, 180px)" }}>
          {quotes.map((quote, i) => (
            <div
              key={i}
              className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000"
              style={{
                opacity: activeQuote === i ? 1 : 0,
                transform: activeQuote === i ? "translateY(0) scale(1)" : "translateY(10px) scale(0.98)",
                pointerEvents: activeQuote === i ? "auto" : "none",
              }}
            >
              <p
                className="font-cursive text-ivory/70 leading-relaxed mb-6 px-4"
                style={{ fontSize: "clamp(1.3rem, 2.8vw, 2.2rem)" }}
                data-testid={`text-quote-${i}`}
              >
                {quote.text}
              </p>
              <p
                className="font-sans uppercase tracking-[0.25em] text-gold/40"
                style={{ fontSize: "clamp(0.55rem, 0.75vw, 0.65rem)" }}
              >
                &mdash; {quote.attribution}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-10">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveQuote(i)}
              className="transition-all duration-500"
              style={{
                width: activeQuote === i ? "20px" : "6px",
                height: "3px",
                borderRadius: "2px",
                background: activeQuote === i ? "#D4AF37" : "rgba(212,175,55,0.2)",
                cursor: "pointer",
              }}
              data-testid={`button-quote-${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
