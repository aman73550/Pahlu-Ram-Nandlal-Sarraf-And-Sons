import { useEffect, useRef, useState } from "react";

const galleryItems = [
  {
    id: 1,
    category: "Bridal Heritage",
    title: "Royal Kundan Necklace",
    description: "Handcrafted 22K gold with uncut diamonds",
    gradient: "from-amber-900/60 via-yellow-900/30 to-transparent",
    accentColor: "rgba(212,175,55,0.12)",
    span: "row-span-2",
  },
  {
    id: 2,
    category: "Timeless Diamonds",
    title: "Solitaire Collection",
    description: "GIA certified brilliant cuts",
    gradient: "from-slate-800/60 via-gray-900/30 to-transparent",
    accentColor: "rgba(200,200,200,0.08)",
    span: "",
  },
  {
    id: 3,
    category: "Fine Gold",
    title: "Temple Jewelry Set",
    description: "Traditional South Indian artistry",
    gradient: "from-amber-800/60 via-orange-900/30 to-transparent",
    accentColor: "rgba(197,150,27,0.1)",
    span: "",
  },
  {
    id: 4,
    category: "Bridal Heritage",
    title: "Polki Diamond Choker",
    description: "Meenakari work with rose-cut diamonds",
    gradient: "from-rose-900/50 via-amber-900/30 to-transparent",
    accentColor: "rgba(212,175,55,0.1)",
    span: "",
  },
  {
    id: 5,
    category: "Fine Gold",
    title: "Antique Gold Bangles",
    description: "916 Hallmarked, traditional motifs",
    gradient: "from-yellow-900/60 via-amber-800/30 to-transparent",
    accentColor: "rgba(184,134,11,0.12)",
    span: "row-span-2",
  },
  {
    id: 6,
    category: "Timeless Diamonds",
    title: "Eternity Band Ring",
    description: "Platinum with VVS1 diamonds",
    gradient: "from-gray-800/60 via-slate-900/30 to-transparent",
    accentColor: "rgba(224,224,224,0.08)",
    span: "",
  },
];

function GalleryCard({ item, index }: { item: typeof galleryItems[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative group overflow-hidden rounded-md ${visible ? "animate-breathe" : "opacity-0"}`}
      style={{ animationDelay: `${index * 0.15}s`, aspectRatio: "4 / 5" }}
      data-testid={`card-gallery-${item.id}`}
    >
      <img
        src={[
          "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=750&fit=crop&q=80",
          "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=750&fit=crop&q=80",
          "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=750&fit=crop&q=80",
          "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop&q=80",
          "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=750&fit=crop&q=80",
          "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=750&fit=crop&q=80",
        ][index]}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-700 scale-105 group-hover:scale-100"
        style={{ aspectRatio: "4 / 5" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.6) 40%, rgba(5,5,5,0.3) 100%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${item.accentColor} 0%, transparent 60%)`,
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-end p-5 z-10">
        <span
          className="font-sans uppercase tracking-[0.2em] text-gold/50 mb-2"
          style={{ fontSize: "clamp(0.55rem, 0.7vw, 0.65rem)" }}
          data-testid={`text-category-${item.id}`}
        >
          {item.category}
        </span>
        <h3
          className="font-serif text-ivory tracking-wide mb-1"
          style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.25rem)" }}
          data-testid={`text-gallery-title-${item.id}`}
        >
          {item.title}
        </h3>
        <p
          className="font-sans text-ivory/40"
          style={{ fontSize: "clamp(0.7rem, 0.9vw, 0.8rem)" }}
        >
          {item.description}
        </p>
      </div>
      <div
        className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 rounded-md transition-all duration-700 z-10"
      />
      <div
        className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        style={{ background: "rgba(212,175,55,0.15)" }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5">
          <path d="M7 17l10-10M7 7h10v10" />
        </svg>
      </div>
    </div>
  );
}

export default function GallerySection() {
  return (
    <section id="gallery" className="relative py-20 px-6 md:px-12 lg:px-20" data-testid="gallery-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="font-sans uppercase tracking-[0.3em] text-gold/50 mb-4"
            style={{ fontSize: "clamp(0.6rem, 0.8vw, 0.7rem)" }}
          >
            Our Collections
          </p>
          <h2
            className="font-serif uppercase tracking-[0.1em] text-ivory"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            data-testid="text-gallery-heading"
          >
            Curated Gallery
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <p
          className="text-center mt-10 font-sans italic text-ivory/30"
          style={{ fontSize: "clamp(0.65rem, 0.8vw, 0.75rem)" }}
          data-testid="text-gallery-disclaimer"
        >
          Note: All exquisite designs are subject to availability. Please visit our showroom for live pricing.
        </p>
      </div>
    </section>
  );
}
