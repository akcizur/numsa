/**
 * Dynamic Transfer Function for the Four Windows / Scenes:
 * Window 0: INTRO (.hero)
 * Window 1: 01 BLUR (#blur)
 * Window 2: 02 GRADIENT (#gradient)
 * Window 3: 03 FADE (#fade)
 *
 * Guarantees continuous, silky-smooth mathematical easing without sudden
 * jumps, scale bumps, or popping ("blopnutí") in the center position.
 */

export interface WindowState {
  normalizedDistance: number;
  inCenterPosition: boolean;
  opacity: number;
  scale: number;
  translateY: number;
  blurPx: number;
  sceneProgress: number; // 0 to 1 inside the active window
}

export function clamp(val: number, min: number, max: number): number {
  return Math.min(Math.max(val, min), max);
}

/**
 * Calculates the dynamic transition transfer function for a window/scene.
 *
 * @param windowCenterY document Y coordinate of the window's vertical center
 * @param scrollY current document scroll Y position
 * @param viewportHeight viewport height in px
 */
export function calculateWindowTransfer(
  windowCenterY: number,
  scrollY: number,
  viewportHeight: number
): WindowState {
  if (viewportHeight <= 0) {
    return {
      normalizedDistance: 0,
      inCenterPosition: true,
      opacity: 1,
      scale: 1,
      translateY: 0,
      blurPx: 0,
      sceneProgress: 0.5,
    };
  }

  const viewportCenterY = scrollY + viewportHeight * 0.5;
  const pixelDiff = windowCenterY - viewportCenterY;
  const normalizedDistance = clamp(pixelDiff / (viewportHeight * 0.9), -1.5, 1.5);
  const absDist = Math.abs(normalizedDistance);

  // Exact center deadband: within 15% of viewport center, values are strictly locked
  // to avoid any popping, twitching, scale bumping or blopnutí.
  const centerDeadband = 0.16;
  const inCenterPosition = absDist <= centerDeadband;

  let opacity = 1.0;
  let scale = 1.0;
  let translateY = 0;
  let blurPx = 0;

  if (inCenterPosition) {
    // Content in center position: perfectly anchored, rock solid, 0 blopnutí
    opacity = 1.0;
    scale = 1.0;
    translateY = 0;
    blurPx = 0;
  } else {
    // Smooth cosine ease outside deadband
    const t = clamp((absDist - centerDeadband) / (1.0 - centerDeadband), 0, 1);
    const smoothT = 0.5 - 0.5 * Math.cos(t * Math.PI); // 0 at center, 1 at boundary

    const sign = normalizedDistance > 0 ? 1 : -1;
    translateY = sign * smoothT * 36; // max 36px subtle depth drift
    scale = 1.0 - smoothT * 0.045;    // max 4.5% scale reduction
    opacity = 1.0 - smoothT * 0.35;   // min 0.65 opacity so readable
    blurPx = smoothT * 5.5;           // gentle optical softness
  }

  // Scene progress within active window (0 entering from bottom, 0.5 center, 1 exiting top)
  const sceneProgress = clamp(0.5 - normalizedDistance * 0.5, 0, 1);

  return {
    normalizedDistance,
    inCenterPosition,
    opacity,
    scale,
    translateY,
    blurPx,
    sceneProgress,
  };
}

/**
 * Computes the target scroll Y to center a specific window/scene cleanly.
 */
export function getWindowScrollTarget(
  elementTop: number,
  elementHeight: number,
  viewportHeight: number,
  maxScroll: number
): number {
  const target = elementTop - Math.max(0, (viewportHeight - elementHeight) * 0.5);
  return clamp(target, 0, maxScroll);
}
