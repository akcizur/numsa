import test from 'node:test';
import assert from 'node:assert/strict';
import {
  clamp,
  lerp,
  calculateVelocity,
  computeSmoothCenterState,
  getContrastRatio,
} from './physics';

test('clamp restricts values to min and max boundaries', () => {
  assert.equal(clamp(5, 0, 10), 5);
  assert.equal(clamp(-10, 0, 10), 0);
  assert.equal(clamp(15, 0, 10), 10);
});

test('lerp accurately interpolates between points', () => {
  assert.equal(lerp(0, 100, 0.5), 50);
  assert.equal(lerp(10, 20, 0.1), 11);
  assert.equal(lerp(100, 200, 0), 100);
  assert.equal(lerp(100, 200, 1), 200);
});

test('calculateVelocity produces bounded velocity without NaN on zero delta', () => {
  assert.equal(calculateVelocity(100, 0), 0);
  assert.equal(calculateVelocity(50, 50), 1000);
  // clamped at 3000
  assert.equal(calculateVelocity(50000, 10), 3000);
});

test('computeSmoothCenterState prevents sudden jumps or blopnutí near center', () => {
  const vHeight = 800;
  const centerY = 400; // Exact center

  const centerState = computeSmoothCenterState(centerY, vHeight);
  assert.equal(centerState.normalizedDistance, 0);
  assert.equal(centerState.isInCenterWindow, true);
  assert.equal(centerState.gentleScale, 1.0);
  assert.equal(centerState.opacity, 1.0);

  // Slightly off center (10px difference): must be smooth and not jump
  const slightlyOff = computeSmoothCenterState(centerY + 10, vHeight);
  assert.ok(slightlyOff.isInCenterWindow);
  assert.ok(slightlyOff.gentleScale > 0.999 && slightlyOff.gentleScale <= 1.0);
  assert.ok(Math.abs(slightlyOff.gentleScale - centerState.gentleScale) < 0.001, 'No sudden scale bump');
});

test('WCAG contrast ratio validates accessible dark and light themes', () => {
  // Pure black vs white
  const blackAndWhite = getContrastRatio([0, 0, 0], [255, 255, 255]);
  assert.ok(blackAndWhite > 20, 'Black vs white has > 20:1 contrast');

  // Dark mode: #050505 vs #FFFFFF
  const darkThemeContrast = getContrastRatio([5, 5, 5], [255, 255, 255]);
  assert.ok(darkThemeContrast >= 15, 'Dark mode has AAA contrast');

  // Light mode: #F8FAFC vs #09090B
  const lightThemeContrast = getContrastRatio([248, 250, 252], [9, 9, 11]);
  assert.ok(lightThemeContrast >= 15, 'Light mode text has AAA contrast');
});
