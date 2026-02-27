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

## Components
- `GoldTicker` — Scrolling top bar with 22K/24K gold rates
- `HeroSection` — Full-height hero with animated gold text
- `GallerySection` — Masonry grid of jewelry collections (3 categories)
- `TestimonialsSection` — Bento grid of 4-5 star verified reviews
- `HeritageTimeline` — Horizontal scroll timeline from 1961 to present
- `CertificationBadges` — BIS Hallmarked, GIA Certified, Secure EMI
- `RoyalTrioNav` — Floating bottom pill nav (Maps, Call, WhatsApp)
- `Footer` — Developer credit with gold-to-silver gradient
- `LuxuryCursor` — Custom gold dot cursor on desktop

## Contact Info
- Phone: 7355048683
- WhatsApp: https://wa.me/917355048683
- Location: Siddharth Nagar, Uttar Pradesh

## Developer Credit
Digital Architecture by Aman Gupta | @amangupta.yt
