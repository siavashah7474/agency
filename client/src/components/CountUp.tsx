import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { isPrerendering } from "@/lib/prerender";

interface CountUpProps {
  /** Display value such as "50+", "+40%", "-62%" or "<30s". Non-numeric values render as-is. */
  value: string;
  className?: string;
  durationMs?: number;
}

const NUMERIC = /^([^\d]*?)(\d+(?:[.,]\d+)?)(.*)$/;

/**
 * Counts a stat from 0 to its value the first time it scrolls into view.
 * The final string is rendered immediately during pre-rendering and for
 * reduced-motion users, so the static HTML and the accessible text never change.
 */
export default function CountUp({ value, className, durationMs = 1200 }: CountUpProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const match = NUMERIC.exec(value.trim());
  const animatable = Boolean(match) && !reduceMotion && !isPrerendering;
  const [display, setDisplay] = useState(() =>
    animatable && match ? `${match[1]}0${match[3]}` : value,
  );

  useEffect(() => {
    if (!animatable || !match || !ref.current) return;
    const [, prefix, raw, suffix] = match;
    const decimals = raw.includes(".") || raw.includes(",") ? raw.split(/[.,]/)[1].length : 0;
    const separator = raw.includes(",") ? "," : ".";
    const target = parseFloat(raw.replace(",", "."));
    let frame = 0;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / durationMs, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = (target * eased).toFixed(decimals).replace(".", separator);
        setDisplay(`${prefix}${current}${suffix}`);
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          run();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animatable, value, durationMs]);

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">{animatable ? display : value}</span>
    </span>
  );
}
