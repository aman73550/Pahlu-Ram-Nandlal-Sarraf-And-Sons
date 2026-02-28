export default function DeveloperCredit() {
  return (
    <section
      className="relative py-10 px-6"
      style={{ background: "#050505" }}
      data-testid="developer-credit"
    >
      <div className="max-w-md mx-auto text-center">
        <div className="w-6 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent mx-auto mb-6" />

        <p
          className="font-sans uppercase tracking-[0.1em] mb-3"
          style={{
            fontSize: "clamp(0.6rem, 0.75vw, 0.7rem)",
            background: "linear-gradient(90deg, #D4AF37 0%, #FCFBF7 50%, #C0C0C0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          data-testid="text-credit-role"
        >
          Digital Architect
        </p>

        <a
          href="https://instagram.com/amangupta.yt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block group"
          data-testid="link-credit-architect"
        >
          <p
            className="font-sans uppercase tracking-[0.15em] transition-opacity duration-300 group-hover:opacity-80"
            style={{
              fontSize: "clamp(0.75rem, 0.9vw, 0.85rem)",
              background: "linear-gradient(90deg, #D4AF37 0%, #FCFBF7 50%, #C0C0C0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            data-testid="text-credit-name"
          >
            Aman Gupta
          </p>
          <p
            className="font-sans tracking-[0.1em] mt-1 transition-opacity duration-300 group-hover:opacity-80"
            style={{
              fontSize: "clamp(0.55rem, 0.7vw, 0.65rem)",
              background: "linear-gradient(90deg, #D4AF37 0%, #FCFBF7 50%, #C0C0C0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            data-testid="text-credit-handle"
          >
            @amangupta.yt
          </p>
        </a>

        <div className="w-6 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent mx-auto mt-6" />
      </div>
    </section>
  );
}
