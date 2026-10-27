import React, { useEffect, useRef } from 'react';

interface LivingGrainProps {
  isDark: boolean;
  enabled: boolean;
  reducedMotion: boolean;
}

export const LivingGrain: React.FC<LivingGrainProps> = ({
  isDark,
  enabled,
  reducedMotion,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!enabled || reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    // Half-res canvas for silky 60fps performance and low memory
    const w = 240;
    const h = 240;
    canvas.width = w;
    canvas.height = h;

    // Pre-generate 6 stochastic grain frames for ultra-fast frame buffer swapping
    const frames: ImageData[] = [];
    const numFrames = 6;

    for (let f = 0; f < numFrames; f++) {
      const imgData = ctx.createImageData(w, h);
      const data = imgData.data;
      const grainColor = isDark ? 255 : 30; // White particles in dark mode, charcoal in light mode

      for (let i = 0; i < data.length; i += 4) {
        if (Math.random() > 0.6) {
          const intensity = Math.random() * 255;
          data[i] = grainColor;
          data[i + 1] = grainColor;
          data[i + 2] = grainColor;
          data[i + 3] = isDark ? Math.floor(intensity * 0.16) : Math.floor(intensity * 0.12);
        } else {
          data[i + 3] = 0;
        }
      }
      frames.push(imgData);
    }

    let frameIdx = 0;
    let animId: number;
    let lastTime = 0;
    const fps = 24; // Cinematic 24fps jitter
    const interval = 1000 / fps;

    const render = (time: number) => {
      animId = requestAnimationFrame(render);
      if (time - lastTime < interval) return;
      lastTime = time;

      ctx.putImageData(frames[frameIdx], 0, 0);
      frameIdx = (frameIdx + 1) % numFrames;

      // Jitter 1px gate weave
      const jitterX = (Math.random() - 0.5) * 1.5;
      const jitterY = (Math.random() - 0.5) * 1.5;
      canvas.style.transform = `translate3d(${jitterX.toFixed(1)}px, ${jitterY.toFixed(1)}px, 0)`;
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [enabled, reducedMotion, isDark]);

  if (!enabled || reducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden mix-blend-overlay"
      style={{
        opacity: isDark ? 0.05 : 0.035,
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover scale-110"
      />
    </div>
  );
};
