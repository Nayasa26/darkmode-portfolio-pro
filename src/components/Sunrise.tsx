import { useEffect, useState } from "react";

/**
 * Layered pink-to-orange sunrise: three blurred cloud planes plus a rising sun
 * disc, each moving at a different rate on scroll to fake depth.
 */
export function Sunrise() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sunrise-stage pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="sun-disc absolute bottom-[-16%] left-1/2 size-[34rem] rounded-full opacity-45"
        style={{ marginBottom: offset * -0.18 }}
      />
      <div
        className="cloud-layer absolute inset-x-[-20%] bottom-[-18%] h-[46%] opacity-35"
        style={{ transform: `translate3d(0, ${offset * -0.06}px, 0)` }}
      />
      <div
        className="cloud-layer absolute inset-x-[-25%] bottom-[-26%] h-[38%] opacity-25"
        style={{
          transform: `translate3d(0, ${offset * -0.12}px, 0) scale(1.15)`,
          animationDelay: "-9s",
        }}
      />
      <div
        className="cloud-layer absolute inset-x-[-10%] bottom-[-8%] h-[26%] opacity-20"
        style={{
          transform: `translate3d(0, ${offset * -0.2}px, 0)`,
          animationDelay: "-16s",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/85" />
    </div>
  );
}
