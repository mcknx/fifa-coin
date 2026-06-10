import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LORE } from "../data";

gsap.registerPlugin(ScrollTrigger);

/**
 * LoreScroll — a pinned, scroll-scrubbed "karaoke" word reveal (mumu.ing-style).
 * The section pins; each word lights from dim → bright as you scroll. Emphasis
 * words (prefixed * in the source) light up lime instead of cream.
 */
export default function LoreScroll() {
  const section = useRef<HTMLElement>(null);
  const wrap = useRef<HTMLParagraphElement>(null);

  const words = LORE.split(" ").map((w) => ({
    text: w.replace(/^\*/, ""),
    hot: w.startsWith("*")
  }));

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>(".lore-word");
      // Reduced motion: reveal the lore fully, skip pin/scrub.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        els.forEach((el) => {
          el.style.opacity = "1";
          el.style.color = el.dataset.hot === "1" ? "#C8E03A" : "#F4E8C6";
        });
        return;
      }
      gsap.to(els, {
        opacity: 1,
        color: (i) => (els[i].dataset.hot === "1" ? "#C8E03A" : "#F4E8C6"),
        ease: "none",
        stagger: 0.5,
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: "+=180%",
          scrub: 0.6,
          pin: true
        }
      });
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      className="relative flex min-h-screen items-center justify-center px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center font-mono text-xs uppercase tracking-[0.4em] text-lime/70">
          001 / The Lore
        </div>
        <p
          ref={wrap}
          className="text-center font-display text-[clamp(1.8rem,5vw,3.6rem)] leading-[1.15] tracking-tight"
        >
          {words.map((w, i) => (
            <span
              key={i}
              data-hot={w.hot ? "1" : "0"}
              className="lore-word opacity-15"
              style={{ color: "#6f6a5a" }}
            >
              {w.text}
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
