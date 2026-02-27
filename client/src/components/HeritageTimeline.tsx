import { useEffect, useRef, useState } from "react";

const timelineEvents = [
  { year: "1961", title: "The First Foundation", description: "Pahlu Ram Nandlal Sarraf establishes the first showroom in Siddharth Nagar." },
  { year: "1975", title: "Gold Standard", description: "Pioneering hallmarked gold jewelry in the region." },
  { year: "1990", title: "Diamond Expansion", description: "Introduction of GIA certified diamond collections." },
  { year: "2005", title: "Modern Craft", description: "Blending traditional artistry with contemporary design." },
  { year: "2015", title: "Digital Presence", description: "Bringing heritage craftsmanship to the modern world." },
  { year: "Present", title: "Siddharth Nagar's Premium Destination", description: "Over 60 years of trust, excellence, and opulence." },
];

function TimelineMarker({ event, index }: { event: typeof timelineEvents[0]; index: number }) {
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
    <div
      ref={ref}
      className={`flex-shrink-0 flex flex-col items-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{
        width: "clamp(200px, 22vw, 280px)",
        transitionDelay: `${index * 0.15}s`,
      }}
      data-testid={`timeline-marker-${index}`}
    >
      <span
        className="font-serif text-gold tracking-wider mb-3"
        style={{ fontSize: "clamp(1rem, 1.8vw, 1.5rem)" }}
      >
        {event.year}
      </span>
      <div className="relative w-full flex items-center justify-center">
        <div className="w-3 h-3 rounded-full border border-gold/60 bg-obsidian relative z-10" style={{ boxShadow: "0 0 12px rgba(212,175,55,0.3)" }} />
        {index < timelineEvents.length - 1 && (
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-gold/30 to-gold/10" style={{ width: "clamp(200px, 22vw, 280px)" }} />
        )}
      </div>
      <h4
        className="font-serif text-ivory mt-4 mb-1 text-center tracking-wide"
        style={{ fontSize: "clamp(0.8rem, 1.1vw, 0.95rem)" }}
      >
        {event.title}
      </h4>
      <p
        className="font-sans text-ivory/40 text-center leading-relaxed px-2"
        style={{ fontSize: "clamp(0.65rem, 0.85vw, 0.75rem)" }}
      >
        {event.description}
      </p>
    </div>
  );
}

export default function HeritageTimeline() {
  return (
    <section className="relative py-20" data-testid="heritage-timeline">
      <div className="text-center mb-16 px-6">
        <p
          className="font-sans uppercase tracking-[0.3em] text-gold/50 mb-4"
          style={{ fontSize: "clamp(0.6rem, 0.8vw, 0.7rem)" }}
        >
          Our Journey
        </p>
        <h2
          className="font-serif uppercase tracking-[0.1em] text-ivory"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          data-testid="text-timeline-heading"
        >
          A Legacy of Trust
        </h2>
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
      </div>

      <div className="overflow-x-auto scrollbar-hide pb-8">
        <div className="flex gap-0 px-12 min-w-max items-start pt-4">
          {timelineEvents.map((event, i) => (
            <TimelineMarker key={i} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
