import { useEffect, useState } from "react";

/**
 * Layered pink-to-orange sunrise along the bottom of the hero: three blurred
 * cloud planes plus a rising sun disc, each moving at a different rate on
 * scroll to fake depth.
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
        className="sun-disc absolute bottom-[-22%] left-[62%] size-[26rem] rounded-full opacity-90"
        style={{ marginBottom: offset * -0.18 }}
      />
      <div
        className="cloud-layer absolute inset-x-[-20%] bottom-[-14%] h-[38%] opacity-90"
        style={{ transform: `translate3d(0, ${offset * -0.06}px, 0)` }}
      />
      <div
        className="cloud-layer absolute inset-x-[-25%] bottom-[-22%] h-[30%] opacity-70"
        style={{
          transform: `translate3d(0, ${offset * -0.12}px, 0) scale(1.15)`,
          animationDelay: "-9s",
        }}
      />
      <div
        className="cloud-layer absolute inset-x-[-10%] bottom-[-6%] h-[20%] opacity-50"
        style={{
          transform: `translate3d(0, ${offset * -0.2}px, 0)`,
          animationDelay: "-16s",
        }}
      />
      {/* fade the sunrise out toward the content above and into the page below */}
      <div className="absolute inset-x-0 top-0 h-[62%] bg-gradient-to-b from-background via-background/85 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[14%] bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
