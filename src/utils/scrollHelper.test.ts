/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  shouldShowBackToTop,
  calculateScrollProgress,
  calculateProgressOffset,
  formatScrollPercentage,
} from './scrollHelper';

test('shouldShowBackToTop returns false when on or before the first viewport', () => {
  const vh = 900;
  assert.equal(shouldShowBackToTop(0, vh), false);
  assert.equal(shouldShowBackToTop(400, vh), false);
  assert.equal(shouldShowBackToTop(765, vh), false); // 765 is exactly 900 * 0.85
});

test('shouldShowBackToTop returns true once scrolled past the first viewport threshold', () => {
  const vh = 900;
  assert.equal(shouldShowBackToTop(766, vh), true);
  assert.equal(shouldShowBackToTop(950, vh), true);
  assert.equal(shouldShowBackToTop(2400, vh), true);
});

test('shouldShowBackToTop handles edge cases gracefully without crashing', () => {
  assert.equal(shouldShowBackToTop(-100, 900), false);
  assert.equal(shouldShowBackToTop(500, 0), false);
  assert.equal(shouldShowBackToTop(NaN as any, 900), false);
  assert.equal(shouldShowBackToTop(500, Infinity), false);
});

test('calculateScrollProgress clamps between 0 and 1 correctly', () => {
  assert.equal(calculateScrollProgress(0, 2000), 0);
  assert.equal(calculateScrollProgress(1000, 2000), 0.5);
  assert.equal(calculateScrollProgress(2000, 2000), 1);
  assert.equal(calculateScrollProgress(3000, 2000), 1);
  assert.equal(calculateScrollProgress(-200, 2000), 0);
  assert.equal(calculateScrollProgress(500, 0), 0);
});

test('calculateProgressOffset computes correct dashoffset for SVG circular ring', () => {
  const radius = 18;
  const circumference = 2 * Math.PI * radius; // ~113.097
  assert.ok(Math.abs(calculateProgressOffset(0, circumference) - circumference) < 0.001);
  assert.ok(Math.abs(calculateProgressOffset(1, circumference) - 0) < 0.001);
  assert.ok(Math.abs(calculateProgressOffset(0.5, circumference) - circumference * 0.5) < 0.001);
});

test('formatScrollPercentage formats clean strings', () => {
  assert.equal(formatScrollPercentage(0), '0%');
  assert.equal(formatScrollPercentage(0.424), '42%');
  assert.equal(formatScrollPercentage(0.999), '100%');
  assert.equal(formatScrollPercentage(1.5), '100%');
});
