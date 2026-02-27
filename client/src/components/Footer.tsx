export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-gold/10" data-testid="footer">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h3
            className="font-serif uppercase tracking-[0.15em] text-ivory/60 mb-2"
            style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.1rem)" }}
            data-testid="text-footer-brand"
          >
            Pahlu Ram Nandlal Sarraf And Sons
          </h3>
          <p
            className="font-sans text-ivory/30"
            style={{ fontSize: "clamp(0.65rem, 0.85vw, 0.75rem)" }}
          >
            Siddharth Nagar's Premier Jewelry Destination Since 1961
          </p>
        </div>

        <div className="w-8 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mx-auto mb-8" />

        <p
          className="font-sans gold-gradient-text"
          style={{ fontSize: "clamp(0.65rem, 0.85vw, 0.75rem)" }}
          data-testid="text-developer-credit"
        >
          Digital Architecture by Aman Gupta |{" "}
          <a
            href="https://instagram.com/amangupta.yt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            @amangupta.yt
          </a>
        </p>

        <p
          className="font-sans text-ivory/15 mt-6"
          style={{ fontSize: "clamp(0.55rem, 0.7vw, 0.6rem)" }}
        >
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
      <div className="h-20" />
    </footer>
  );
}
