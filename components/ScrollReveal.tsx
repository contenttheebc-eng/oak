"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Collects the blocks to animate: the direct contents of every section after
// the first (the hero/banner), with grids split into their individual items.
function revealTargets() {
  const sections = Array.from(document.querySelectorAll("section")).slice(1);
  return sections.flatMap((section) =>
    Array.from(section.querySelectorAll(":scope > div > *")).flatMap((el) =>
      el.classList.contains("grid") && el.children.length > 1
        ? Array.from(el.children)
        : [el]
    )
  );
}

// Content jumps up into place as it scrolls into view.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const targets = revealTargets();
      gsap.set(targets, { autoAlpha: 0, y: 60 });
      ScrollTrigger.batch(targets, {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.6)",
            stagger: 0.12,
          }),
      });
    });

    return () => ctx.revert();
  }, [pathname]);

  return null;
}
