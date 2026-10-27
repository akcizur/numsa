/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  determineMediaLoadingState,
  getFluentBlobGradient,
  calculateAspectRatioPadding,
  createLazyObserverOptions,
} from './lazyMediaHelper';

test('determineMediaLoadingState handles full lifecycle accurately', () => {
  assert.equal(determineMediaLoadingState(false, false, false), 'idle');
  assert.equal(determineMediaLoadingState(true, false, false), 'loading');
  assert.equal(determineMediaLoadingState(true, true, false), 'loaded');
  assert.equal(determineMediaLoadingState(false, true, false), 'loaded');
  assert.equal(determineMediaLoadingState(true, false, true), 'error');
  assert.equal(determineMediaLoadingState(true, true, true), 'error');
});

test('getFluentBlobGradient produces distinct valid radial-gradients per category and theme', () => {
  const darkProj = getFluentBlobGradient('projekty', true);
  const lightProj = getFluentBlobGradient('projekty', false);
  assert.ok(darkProj.includes('radial-gradient'));
  assert.ok(lightProj.includes('radial-gradient'));
  assert.notEqual(darkProj, lightProj);

  const darkKits = getFluentBlobGradient('kits', true);
  assert.ok(darkKits.includes('rgba(6, 182, 212'));
});

test('calculateAspectRatioPadding calculates correct padding percentages for CLS prevention', () => {
  assert.equal(calculateAspectRatioPadding(16, 9), '56.250%');
  assert.equal(calculateAspectRatioPadding(1, 1), '100.000%');
  assert.equal(calculateAspectRatioPadding(4, 3), '75.000%');
  assert.equal(calculateAspectRatioPadding(0, 100), '56.25%'); // fallback
});

test('createLazyObserverOptions configures sensible rootMargin and threshold', () => {
  const opts = createLazyObserverOptions();
  assert.equal(opts.root, null);
  assert.equal(opts.rootMargin, '150px 0px');
  assert.equal(opts.threshold, 0.01);
});
