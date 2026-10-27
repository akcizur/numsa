/**
 * Physics and motion utilities for smooth inertial scrolling and centering.
 * Guarantees continuous, jerk-free motion without sudden scale or position jumps ("blopnutí").
 */

export function clamp(val: number, min: number, max: number): number {
  return Math.min(Math.max(val, min), max);
}

export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

/**
 * Calculates smoothed velocity avoiding Infinity or NaN on tiny dt.
 */
export function calculateVelocity(deltaY: number, dtMs: number): number {
  if (dtMs <= 0) return 0;
  const v = deltaY / (dtMs / 1000);
  return clamp(v, -3000, 3000);
}

/**
 * Continuous center positioning without sudden pop, jump or scale bumping.
 * Returns a normalized offset and scale that smoothly dampens as the element reaches center.
 * Specifically avoids the jarring pop/bump previously caused by centerSnap.
 */
export function computeSmoothCenterState(
  elementCenterY: number,
  viewportHeight: number
): {
  normalizedDistance: number;
  isInCenterWindow: boolean;
  gentleScale: number;
  opacity: number;
} {
  const viewportCenter = viewportHeight / 2;
  const diff = elementCenterY - viewportCenter;
  const maxRange = viewportHeight * 0.8;
  const normalizedDistance = clamp(diff / maxRange, -1, 1);
  const absDist = Math.abs(normalizedDistance);

  // In the center window (|diff| < 120px) the transition is completely smooth (cosine ease),
  // NEVER jumping or snapping abruptly.
  const isInCenterWindow = Math.abs(diff) < 120;
  
  // Smooth subtle scale: 1.00 at center, down to 0.985 at extremes, strictly continuous (no delta jump)
  const gentleScale = 1.0 - Math.pow(absDist, 2) * 0.02;
  
  // Soft, readable opacity: at least 0.85 near edges, 1.0 at center
  const opacity = 1.0 - Math.pow(absDist, 1.8) * 0.25;

  return {
    normalizedDistance,
    isInCenterWindow,
    gentleScale,
    opacity,
  };
}

/**
 * Relative luminance calculation according to WCAG 2.1 specs.
 */
export function getRelativeLuminance(r: number, g: number, b: number): number {
  const [sR, sG, sB] = [r, g, b].map((val) => {
    const s = val / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * sR + 0.7152 * sG + 0.0722 * sB;
}

/**
 * WCAG 2.1 Contrast Ratio calculation.
 * Returns ratio like 4.5, 7.0, 21.0.
 */
export function getContrastRatio(
  rgb1: [number, number, number],
  rgb2: [number, number, number]
): number {
  const l1 = getRelativeLuminance(...rgb1);
  const l2 = getRelativeLuminance(...rgb2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}
