import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Counts from 0 → `to` once it scrolls into view. */
export default function CountUp({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = ""
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current!;
    const obj = { v: 0 };
    const fmt = (v: number) =>
      decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString("en-US");
    // Reduced motion: show the final value immediately, no count-up.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = `${prefix}${fmt(to)}${suffix}`;
      return;
    }
    const tween = gsap.to(obj, {
      v: to,
      ease: "power2.out",
      duration: 1.8,
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
      onUpdate: () => {
        el.textContent = `${prefix}${fmt(obj.v)}${suffix}`;
      }
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [to, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
