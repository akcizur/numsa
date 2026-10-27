/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Pure helper functions for Fluent lazy loading, dynamic blob generation,
 * and media transition states.
 */

export type MediaLoadState = 'idle' | 'loading' | 'loaded' | 'error';

/**
 * Determines media loading status based on intersection and load event flags.
 */
export function determineMediaLoadingState(
  inView: boolean,
  isLoaded: boolean,
  hasError: boolean
): MediaLoadState {
  if (hasError) return 'error';
  if (isLoaded) return 'loaded';
  if (inView) return 'loading';
  return 'idle';
}

/**
 * Returns dynamic CSS gradient values for fluent morphing acrylic blobs
 * tuned for dark and light fluentismus aesthetics.
 */
export function getFluentBlobGradient(
  category: 'projekty' | 'kits' | 'assets' | 'social' | 'default',
  isDark: boolean
): string {
  const darkBlobs: Record<string, string> = {
    projekty: 'radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.45), rgba(6, 182, 212, 0.25) 50%, rgba(99, 102, 241, 0.1) 85%, transparent)',
    kits: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.45), rgba(59, 130, 246, 0.25) 50%, rgba(168, 85, 247, 0.1) 85%, transparent)',
    assets: 'radial-gradient(circle at 60% 40%, rgba(245, 158, 11, 0.45), rgba(236, 72, 153, 0.25) 50%, rgba(139, 92, 246, 0.1) 85%, transparent)',
    social: 'radial-gradient(circle at 45% 55%, rgba(236, 72, 153, 0.45), rgba(168, 85, 247, 0.25) 50%, rgba(59, 130, 246, 0.1) 85%, transparent)',
    default: 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.4), rgba(129, 140, 248, 0.2) 50%, rgba(244, 114, 182, 0.1) 85%, transparent)',
  };

  const lightBlobs: Record<string, string> = {
    projekty: 'radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.28), rgba(6, 182, 212, 0.18) 50%, rgba(99, 102, 241, 0.08) 85%, transparent)',
    kits: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.28), rgba(59, 130, 246, 0.18) 50%, rgba(168, 85, 247, 0.08) 85%, transparent)',
    assets: 'radial-gradient(circle at 60% 40%, rgba(245, 158, 11, 0.28), rgba(236, 72, 153, 0.18) 50%, rgba(139, 92, 246, 0.08) 85%, transparent)',
    social: 'radial-gradient(circle at 45% 55%, rgba(236, 72, 153, 0.28), rgba(168, 85, 247, 0.18) 50%, rgba(59, 130, 246, 0.08) 85%, transparent)',
    default: 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.25), rgba(129, 140, 248, 0.15) 50%, rgba(244, 114, 182, 0.06) 85%, transparent)',
  };

  return isDark
    ? darkBlobs[category] || darkBlobs.default
    : lightBlobs[category] || lightBlobs.default;
}

/**
 * Calculates responsive aspect-ratio placeholder dimensions to prevent
 * Cumulative Layout Shift (CLS) during lazy image loading.
 */
export function calculateAspectRatioPadding(width: number, height: number): string {
  if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) {
    return '56.25%'; // standard 16:9 fallback
  }
  return `${((height / width) * 100).toFixed(3)}%`;
}

/**
 * IntersectionObserver configuration for ahead-of-time viewport lazy loading.
 */
export function createLazyObserverOptions(rootMargin = '150px 0px'): IntersectionObserverInit {
  return {
    root: null,
    rootMargin,
    threshold: 0.01,
  };
}
