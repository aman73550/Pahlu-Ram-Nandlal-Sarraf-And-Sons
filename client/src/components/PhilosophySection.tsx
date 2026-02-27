import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    cursiveTitle: "Purity",
    description: "Every gram of gold is BIS Hallmarked, guaranteeing the purity you deserve for life's most precious moments.",
  },
  {
    cursiveTitle: "Craftsmanship",
    description: "Master artisans carry forward traditions perfected over six decades, blending ancestral techniques with modern precision.",
  },
  {
    cursiveTitle: "Trust",
    description: "Three generations of families have chosen us. Our name is not just a brand — it is a bond passed down through time.",
  },
];

export default function PhilosophySection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-20 px-6 md:px-12 lg:px-20" data-testid="philosophy-section">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(212,175,55,0.03) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p
            className="font-accent italic text-gold/60 mb-3"
            style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            data-testid="text-philosophy-cursive"
          >
            Our Promise to You
          </p>
          <h2
            className="font-serif uppercase tracking-[0.1em] text-ivory"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            data-testid="text-philosophy-heading"
          >
            The Sarraf Philosophy
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${0.3 + i * 0.2}s` }}
              data-testid={`card-philosophy-${i}`}
            >
              <p
                className="font-accent italic text-gold mb-3"
                style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
              >
                {pillar.cursiveTitle}
              </p>
              <div className="w-6 h-px bg-gold/30 mx-auto mb-4" />
              <p
                className="font-sans text-ivory/50 leading-relaxed"
                style={{ fontSize: "clamp(0.8rem, 1vw, 0.9rem)" }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
