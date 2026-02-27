# Pahlu Ram Nandlal Sarraf And Sons - Digital Flagship

## Overview
Ultra-luxury single-page landing page for a premium jewelry showroom in Siddharth Nagar, India. Built with React, Tailwind CSS, and Express. The aesthetic is "Modern Opulence" — obsidian black with champagne gold accents.

## Architecture
- **Frontend**: React SPA with Tailwind CSS, no routing needed (single page)
- **Backend**: Express server (minimal — serves static frontend)
- **No database** — this is a static landing page

## Key Design Decisions
- **Color Palette**: Obsidian Black (#050505), Champagne Gold (#D4AF37), Ivory (#FCFBF7)
- **Typography**: Cinzel (serif, headers), Montserrat (sans, body/nav)
- **Font Scaling**: All fonts use clamp() for responsive sizing, no overlapping text on mobile
- **Dark-only theme**: The site is always dark (luxury aesthetic)

## Fonts
- Cinzel (serif, headers) — `font-serif`
- Montserrat (sans, body/nav) — `font-sans`
- Playfair Display (accent, elegant italic) — `font-accent`

## Components
- `Header` — Fixed sticky header below ticker with logo, phone, location; glassmorphism on scroll
- `GoldTicker` — Scrolling top bar with 22K/24K gold rates (z-[100], topmost)
- `HeroSection` — Full-height hero with shop name, tagline, "Explore Collection" + "Get Directions" buttons
- `CertificationBadges` — BIS Hallmarked, GIA Certified, Secure EMI
- `PhilosophySection` — Purity, Craftsmanship, Trust pillars
- `GallerySection` — Masonry grid of jewelry collections (3 categories)
- `QuotesBanner` — Rotating elegant quotes with auto-play
- `TestimonialsSection` — Bento grid of 4-5 star verified reviews
- `HeritageTimeline` — Horizontal scroll timeline from 1961 to present
- `RoyalTrioNav` — Full-width bottom nav bar (Maps, Call, WhatsApp)
- `Footer` — Developer credit with gold-to-silver gradient
- `LuxuryCursor` — Custom gold dot cursor on desktop

## Contact Info
- Phone: 09236058261
- WhatsApp: https://wa.me/919236058261
- Location: Siddharth Nagar, Uttar Pradesh

## Developer Credit
Digital Architecture by Aman Gupta | @amangupta.yt
