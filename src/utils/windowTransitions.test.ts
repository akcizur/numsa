import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateWindowTransfer, getWindowScrollTarget } from './windowTransitions';

test('calculateWindowTransfer holds steady in center position without blopnutí', () => {
  const vh = 900;
  const centerY = 1450;
  const scrollY = 1000; // scrollY + vh/2 = 1000 + 450 = 1450 (exact center!)

  const state = calculateWindowTransfer(centerY, scrollY, vh);

  assert.equal(state.inCenterPosition, true);
  assert.equal(state.scale, 1.0, 'Scale must be 1.0 at center');
  assert.equal(state.translateY, 0, 'TranslateY must be 0 at center');
  assert.equal(state.opacity, 1.0, 'Opacity must be 1.0 at center');
  assert.equal(state.blurPx, 0, 'Blur must be 0 at center');
  assert.equal(state.sceneProgress, 0.5);
});

test('calculateWindowTransfer handles slight offset smoothly without jump', () => {
  const vh = 900;
  const centerY = 1450;

  // 40px off center (well within the deadband): must stay locked without twitch
  const slightState = calculateWindowTransfer(centerY, 1040, vh);
  assert.equal(slightState.inCenterPosition, true);
  assert.equal(slightState.scale, 1.0);
  assert.equal(slightState.translateY, 0);

  // 250px off center (outside deadband): must gently ease without abrupt step
  const outsideState = calculateWindowTransfer(centerY, 1250, vh);
  assert.equal(outsideState.inCenterPosition, false);
  assert.ok(outsideState.scale < 1.0 && outsideState.scale > 0.95);
  assert.ok(outsideState.opacity < 1.0 && outsideState.opacity >= 0.65);
});

test('getWindowScrollTarget computes clamped centered scroll target', () => {
  const target = getWindowScrollTarget(1500, 600, 900, 5000);
  // (900 - 600) / 2 = 150 offset. 1500 - 150 = 1350
  assert.equal(target, 1350);

  // Test clamp on bottom boundary
  const clampedTarget = getWindowScrollTarget(4900, 800, 900, 4500);
  assert.equal(clampedTarget, 4500);
});
