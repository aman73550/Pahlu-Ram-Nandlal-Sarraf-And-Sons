import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    text: "Absolutely stunning bridal set! The craftsmanship is unmatched. Every detail was perfect for my wedding day.",
    verified: true,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    rating: 5,
    text: "Purchased a diamond ring for our anniversary. The quality and certification gave us complete confidence. Exceptional service!",
    verified: true,
  },
  {
    id: 3,
    name: "Anita Verma",
    rating: 4,
    text: "Beautiful temple jewelry collection. The gold purity is exactly as promised. A trusted name in Siddharth Nagar.",
    verified: true,
  },
  {
    id: 4,
    name: "Vikram Singh",
    rating: 5,
    text: "Three generations of my family have trusted Pahlu Ram Nandlal. The legacy speaks for itself. Premium quality guaranteed.",
    verified: true,
  },
  {
    id: 5,
    name: "Meera Patel",
    rating: 4,
    text: "The Kundan necklace I bought is a masterpiece. So many compliments! Their EMI option made it very convenient.",
    verified: true,
  },
  {
    id: 6,
    name: "Suresh Agarwal",
    rating: 5,
    text: "Invested in 24K gold coins. Transparent pricing and BIS hallmark certification. Will definitely return for more.",
    verified: true,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" data-testid="star-rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? "#D4AF37" : "none"}
          stroke="#D4AF37"
          strokeWidth="1.5"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ item, index }: { item: typeof testimonials[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`testimonial-glass rounded-md p-6 border border-gold/10 transition-all duration-700 hover:border-gold/25 ${visible ? "animate-breathe" : "opacity-0"}`}
      style={{ animationDelay: `${index * 0.12}s` }}
      data-testid={`card-testimonial-${item.id}`}
    >
      <StarRating rating={item.rating} />
      <p
        className="font-sans text-ivory/60 mt-4 mb-5 leading-relaxed"
        style={{ fontSize: "clamp(0.8rem, 1vw, 0.9rem)" }}
        data-testid={`text-review-${item.id}`}
      >
        "{item.text}"
      </p>
      <div className="flex items-center justify-between gap-3">
        <span
          className="font-sans font-medium text-ivory/80"
          style={{ fontSize: "clamp(0.75rem, 0.9vw, 0.85rem)" }}
          data-testid={`text-reviewer-${item.id}`}
        >
          {item.name}
        </span>
        {item.verified && (
          <span className="flex items-center gap-1.5" data-testid={`badge-verified-${item.id}`}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#4285F4">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span
              className="font-sans text-ivory/40"
              style={{ fontSize: "clamp(0.6rem, 0.7vw, 0.65rem)" }}
            >
              Verified
            </span>
          </span>
        )}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="font-accent italic text-gold/60 mb-3"
            style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
            data-testid="text-testimonials-cursive"
          >
            Voices of Trust
          </p>
          <h2
            className="font-serif uppercase tracking-[0.1em] text-ivory"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            data-testid="text-testimonials-heading"
          >
            What Our Patrons Say
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((item, i) => (
            <TestimonialCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
