/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Pure helper functions for scroll state, back-to-top visibility,
 * and circular progress indicators.
 */

/**
 * Determines whether the floating 'Back to Top' button should be visible.
 * According to requirements: appears only when the user has scrolled past
 * the first viewport (scrollY > viewportHeight * thresholdFactor).
 *
 * @param scrollY Current vertical scroll position in pixels
 * @param viewportHeight Inner height of the viewport in pixels
 * @param thresholdFactor Fraction of the viewport required (default 0.85)
 */
export function shouldShowBackToTop(
  scrollY: number,
  viewportHeight: number,
  thresholdFactor: number = 0.85
): boolean {
  if (typeof scrollY !== 'number' || typeof viewportHeight !== 'number') {
    return false;
  }
  if (viewportHeight <= 0 || !Number.isFinite(scrollY) || !Number.isFinite(viewportHeight)) {
    return false;
  }
  return scrollY > viewportHeight * thresholdFactor;
}

/**
 * Calculates normalized scroll progress from 0 (at apex) to 1 (at footer).
 *
 * @param scrollY Current vertical scroll position
 * @param maxScroll Maximum scrollable distance (scrollHeight - innerHeight)
 */
export function calculateScrollProgress(scrollY: number, maxScroll: number): number {
  if (!Number.isFinite(scrollY) || !Number.isFinite(maxScroll) || maxScroll <= 0) {
    return 0;
  }
  const ratio = scrollY / maxScroll;
  return Math.min(1, Math.max(0, ratio));
}

/**
 * Computes SVG stroke-dashoffset for circular progress rings.
 *
 * @param progress Normalized progress between 0 and 1
 * @param circumference Circumference of the circle (2 * PI * radius)
 */
export function calculateProgressOffset(progress: number, circumference: number): number {
  if (!Number.isFinite(progress) || !Number.isFinite(circumference) || circumference <= 0) {
    return circumference || 0;
  }
  const clampedProgress = Math.min(1, Math.max(0, progress));
  return circumference * (1 - clampedProgress);
}

/**
 * Formats scroll progress as a percentage string (e.g. "42%").
 */
export function formatScrollPercentage(progress: number): string {
  const clamped = Math.min(1, Math.max(0, progress));
  return `${Math.round(clamped * 100)}%`;
}
