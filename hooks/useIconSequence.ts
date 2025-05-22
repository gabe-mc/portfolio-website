import { useEffect, useState } from "react";

export type Variant = "idle" | "walk-forward" | "walk-right";

export interface Step {
  variant: Variant;
  duration: number;       // ms to play this step
  transform?: string;     // inline CSS transform (e.g. "translateY(80px)")
  transition?: string;    // inline CSS transition (e.g. "transform 8s linear")
}

export function useIconSequence(steps: Step[]) {
  const [idx, setIdx] = useState(0);
  const [variant, setVariant] = useState<Variant>(steps[0].variant);
  const [style, setStyle] = useState<React.CSSProperties>(() => ({
    transform: steps[0].transform,
    transition: steps[0].transition,
  }));

  useEffect(() => {
    if (idx >= steps.length) return;

    const { variant, duration, transform, transition } = steps[idx];
    
    setVariant(variant);
        setStyle(prev => ({
      transform:  transform   !== undefined ? transform   : prev.transform,
      transition: transition !== undefined ? transition : prev.transition,
    }));

    const t = setTimeout(() => {
      setIdx(i => i + 1);
    }, duration);

    return () => clearTimeout(t);
  }, [idx, steps]);

  return { variant, style };
}
