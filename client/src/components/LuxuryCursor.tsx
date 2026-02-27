import { useEffect, useState, useRef, useCallback } from "react";

export default function LuxuryCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [magnetTarget, setMagnetTarget] = useState<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef({ x: -100, y: -100 });
  const smoothPos = useRef({ x: -100, y: -100 });

  const getMagnetTarget = useCallback((mx: number, my: number) => {
    const magnetElements = document.querySelectorAll("a, button, [data-magnetic]");
    let closest: { el: Element; dist: number } | null = null;

    magnetElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(mx - cx, my - cy);
      const threshold = Math.max(rect.width, rect.height) * 0.8;
      if (dist < threshold && (!closest || dist < closest.dist)) {
        closest = { el, dist };
      }
    });

    if (closest) {
      const rect = (closest as { el: Element; dist: number }).el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const pull = 0.3;
      return {
        x: mx + (cx - mx) * pull,
        y: my + (cy - my) * pull,
      };
    }
    return null;
  }, []);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const animate = () => {
      const target = magnetTarget || posRef.current;
      smoothPos.current.x += (target.x - smoothPos.current.x) * 0.15;
      smoothPos.current.y += (target.y - smoothPos.current.y) * 0.15;
      setPos({ x: smoothPos.current.x, y: smoothPos.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [magnetTarget]);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      const magnet = getMagnetTarget(e.clientX, e.clientY);
      setMagnetTarget(magnet);
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [visible, getMagnetTarget]);

  const isFinePointer = typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;
  if (!isFinePointer) return null;

  const isAttracted = !!magnetTarget;

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: pos.x - (isAttracted ? 16 : 12),
        top: pos.y - (isAttracted ? 16 : 12),
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
      data-testid="luxury-cursor"
    >
      <div
        style={{
          width: isAttracted ? 32 : 24,
          height: isAttracted ? 32 : 24,
          borderRadius: "50%",
          background: isAttracted
            ? "radial-gradient(circle, rgba(212,175,55,0.5) 20%, rgba(212,175,55,0.15) 50%, transparent 75%)"
            : "radial-gradient(circle, #D4AF37 30%, rgba(212,175,55,0.3) 60%, transparent 80%)",
          boxShadow: isAttracted
            ? "0 0 25px rgba(212,175,55,0.5), 0 0 50px rgba(212,175,55,0.2)"
            : "0 0 15px rgba(212,175,55,0.4), 0 0 30px rgba(212,175,55,0.15)",
          transition: "width 0.3s ease, height 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
        }}
      />
    </div>
  );
}
