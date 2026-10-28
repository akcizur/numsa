/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { calculateWindowTransfer, getWindowScrollTarget } from './utils/windowTransitions';
import { splitTextIntoChars } from './utils/splitText';
import { BackToTop } from './components/BackToTop';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [activeHud, setActiveHud] = useState({
    idx: 0,
    n: '00',
    name: 'INTRO',
    progress: 0,
  });
  const currentHudIndexRef = useRef(0);

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('app_theme');
      if (saved) return saved === 'dark';
      return true;
    }
    return true;
  });

  // Toggle dark/light theme
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('app_theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Global 'T' shortcut to toggle theme
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      if (activeEl && /INPUT|TEXTAREA|SELECT/i.test(activeEl.tagName)) return;
      if (e.key === 't' || e.key === 'T') {
        toggleTheme();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Programmatic smooth scroll to window
  const scrollToWindowRef = useRef<(targetIndex: number) => void>(() => {});

  // GSAP Cinematic Intro & Reveal Animations
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      // 0) Top Navigation & Story HUD Entrance
      const navInner = document.querySelector('.nav-inner');
      const storyHud = document.querySelector('.story-hud');
      const edgeTopEl = document.querySelector('.edge--top');
      const edgeBottomEl = document.querySelector('.edge--bottom');

      const introTl = gsap.timeline({
        delay: 0.12,
        defaults: { ease: 'power3.out' },
      });

      if (navInner) {
        introTl.fromTo(
          navInner,
          { opacity: 0, y: -18 },
          { opacity: 1, y: 0, duration: 0.8 },
          0
        );
      }

      if (storyHud) {
        introTl.fromTo(
          storyHud,
          { opacity: 0, x: -24 },
          { opacity: 1, x: 0, duration: 0.8 },
          0.1
        );
      }

      if (edgeTopEl && edgeBottomEl) {
        introTl.fromTo(
          [edgeTopEl, edgeBottomEl],
          { opacity: 0 },
          { opacity: 1, duration: 1.1, ease: 'sine.out' },
          0
        );
      }

      // 1) Cinematic Intro Animation (Hero)
      const hero = document.querySelector('.hero');
      if (hero) {
        const eyebrow = hero.querySelector('.eyebrow');
        const heroH1 = hero.querySelector('h1') as HTMLElement | null;
        const heroP = hero.querySelector('.hero-inner > p');
        const parallaxLayers = hero.querySelectorAll('.parallax-layer');
        const heroChars = splitTextIntoChars(heroH1);

        if (eyebrow) {
          introTl.fromTo(
            eyebrow,
            { opacity: 0, y: 20, filter: 'blur(8px)' },
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 0.85,
              onComplete: () => {
                gsap.set(eyebrow, { clearProps: 'filter' });
              },
            },
            0.15
          );
        }

        if (heroChars.length) {
          introTl.fromTo(
            heroChars,
            {
              opacity: 0,
              yPercent: 125,
              rotateX: 40,
              rotateZ: 4,
              filter: 'blur(8px)',
              transformOrigin: '50% 100% -20px',
            },
            {
              opacity: 1,
              yPercent: 0,
              rotateX: 0,
              rotateZ: 0,
              filter: 'blur(0px)',
              duration: 1.15,
              stagger: {
                each: 0.026,
                from: 'start',
              },
              ease: 'power3.out',
              onComplete: () => {
                gsap.set(heroChars, { clearProps: 'filter' });
              },
            },
            0.28
          );
        }

        if (heroP) {
          introTl.fromTo(
            heroP,
            { opacity: 0, y: 26, filter: 'blur(10px)' },
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 1.0,
              onComplete: () => {
                gsap.set(heroP, { clearProps: 'filter' });
              },
            },
            0.62
          );
        }

        if (parallaxLayers.length) {
          introTl.fromTo(
            parallaxLayers,
            { opacity: 0, scale: 0.72 },
            { opacity: 0.92, scale: 1, duration: 1.3, stagger: 0.12, ease: 'power2.out' },
            0.35
          );
        }
      }

      // 2) Scroll Reveals for Sections 01 BLUR, 02 GRADIENT, 03 FADE
      const sections = ['#blur', '#gradient', '#fade', '#synthesis'];
      sections.forEach((secId) => {
        const sec = document.querySelector(secId);
        if (!sec) return;

        const h2 = sec.querySelector('h2') as HTMLElement | null;
        const chars = splitTextIntoChars(h2);
        const p = sec.querySelector('p');
        const columns = sec.querySelectorAll<HTMLElement>('.section-grid > div');

        const secTl = gsap.timeline({
          scrollTrigger: {
            trigger: sec,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });

        if (chars.length) {
          secTl.fromTo(
            chars,
            {
              opacity: 0,
              yPercent: 115,
              rotateX: 35,
              rotateZ: 3,
              filter: 'blur(6px)',
              transformOrigin: '50% 100% -15px',
            },
            {
              opacity: 1,
              yPercent: 0,
              rotateX: 0,
              rotateZ: 0,
              filter: 'blur(0px)',
              ease: 'power3.out',
              duration: 0.85,
              stagger: 0.02,
              onComplete: () => {
                gsap.set(chars, { clearProps: 'filter' });
              },
            }
          );
        }

        if (columns.length) {
          columns.forEach((column, index) => {
            secTl.fromTo(
              column,
              {
                autoAlpha: 0,
                x: index === 0 ? -76 : 76,
                y: 34,
                rotateY: index === 0 ? -7 : 7,
                filter: 'blur(9px)',
                transformPerspective: 1000,
              },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                rotateY: 0,
                filter: 'blur(0px)',
                duration: 1.15,
                ease: 'power4.out',
                onComplete: () => gsap.set(column, { clearProps: 'filter' }),
              },
              index * 0.12
            );
          });
        }

        if (p) {
          secTl.fromTo(
            p,
            { y: 30, opacity: 0, filter: 'blur(8px)' },
            {
              y: 0,
              opacity: 1,
              filter: 'blur(0px)',
              ease: 'power2.out',
              duration: 0.75,
              onComplete: () => {
                gsap.set(p, { clearProps: 'filter' });
              },
            },
            '-=0.55'
          );
        }
      });

      // Full-window horizontal gallery driven by vertical scroll, with each caption rising through a blurred edge.
      const projectGallery = document.querySelector<HTMLElement>('#synthesis .project-gallery');
      const projectTrack = document.querySelector<HTMLElement>('#synthesis .project-gallery__track');
      const projectPanels = gsap.utils.toArray<HTMLElement>('#synthesis .project-panel');
      if (projectGallery && projectTrack && projectPanels.length) {
        const horizontalTween = gsap.to(projectTrack, {
          x: () => -(projectTrack.scrollWidth - projectGallery.clientWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: projectGallery,
            start: 'top top',
            end: () => `+=${Math.max(1, projectTrack.scrollWidth - projectGallery.clientWidth)}`,
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
        projectPanels.forEach((panel, index) => {
          const images = panel.querySelectorAll<HTMLElement>('.project-panel__collage img');
          const info = panel.querySelector<HTMLElement>('.project-panel__info');
          if (info && index > 0) {
            gsap.fromTo(info.children, { yPercent: 120, filter: 'blur(16px)', autoAlpha: 0 }, {
              yPercent: 0, filter: 'blur(0px)', autoAlpha: 1, stagger: 0.07, ease: 'power3.out',
              scrollTrigger: { trigger: panel, containerAnimation: horizontalTween, start: 'left 82%', end: 'left 48%', scrub: 0.65 },
            });
          }
          if (images.length) {
            const imageMoves = [
              { from: { xPercent: 0, yPercent: 7, scale: 1.03, rotation: 0 }, to: { xPercent: -4, yPercent: -5, scale: 1.17, rotation: 0 } },
              { from: { xPercent: 8, yPercent: -9, scale: 1.2, rotation: 1.1 }, to: { xPercent: -5, yPercent: 4, scale: 1.04, rotation: -0.35 } },
              { from: { xPercent: -9, yPercent: 8, scale: 1.04, rotation: -1.2 }, to: { xPercent: 6, yPercent: -4, scale: 1.21, rotation: 0.45 } },
            ];
            images.forEach((image, imageIndex) => {
              const move = imageMoves[imageIndex % imageMoves.length];
              gsap.fromTo(image, { ...move.from, transformOrigin: '50% 50%' }, {
                ...move.to, ease: 'none',
                scrollTrigger: { trigger: panel, containerAnimation: horizontalTween, start: 'left right', end: 'right left', scrub: 1 + imageIndex * 0.18 },
              });
            });
          }
        });
      }

      const simpleFooter = document.querySelector('[data-simple-footer]');
      if (simpleFooter) {
        gsap.fromTo(
          simpleFooter.children,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: simpleFooter,
              start: 'top 92%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 3) Visual Card Cinematic Mask Reveal
      const visual = document.querySelector('.visual');
      if (visual) {
        gsap.fromTo(
          visual,
          { clipPath: 'inset(100% 0% 0% 0% round 28px)', opacity: 0.3 },
          {
            clipPath: 'inset(0% 0% 0% 0% round 28px)',
            opacity: 1,
            ease: 'power3.inOut',
            duration: 0.95,
            scrollTrigger: {
              trigger: visual,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        const card = visual.querySelector('.card');
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 30, filter: 'blur(10px)' },
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              ease: 'power2.out',
              duration: 0.7,
              scrollTrigger: {
                trigger: visual,
                start: 'top 78%',
                toggleActions: 'play none none reverse',
              },
              onComplete: () => {
                gsap.set(card, { clearProps: 'filter' });
              },
            }
          );
        }
      }
    });

    return () => ctx.revert();
  }, []);

  // Inertial scroll, velocity response, parallax, 4-window dynamic transfer, and living grain engine
  useEffect(() => {
    document.title = 'Jakub Růžička - Cinematic Edge Motion · Living Grain';

    const rootEl = document.documentElement;
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointerQuery = window.matchMedia('(pointer: fine)');

    const q = (sel: string) => document.querySelector(sel) as HTMLElement | null;
    const qAll = (sel: string) => Array.from(document.querySelectorAll(sel)) as HTMLElement[];
    const clamp = (val: number, min: number, max: number) => Math.min(max, Math.max(min, val));
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;
    const quinticEaseOut = (t: number) => 1 - Math.pow(1 - t, 5);

    const edgeTop = q('.edge--top');
    const edgeBottom = q('.edge--bottom');
    const topGlow = q('.edge--top .edge__glow');
    const bottomGlow = q('.edge--bottom .edge__glow');
    const topHaze = q('.edge--top .edge__haze');
    const bottomHaze = q('.edge--bottom .edge__haze');
    const topMist = q('.edge--top .edge__mist');
    const bottomMist = q('.edge--bottom .edge__mist');
    const progressSpan = q('.scroll-progress span');

    // 5 Windows / Dynamic Scenes Pipeline definition
    const dynamicScenes = [
      { id: 'top', n: '00', name: 'INTRO' },
      { id: 'blur', n: '01', name: 'WEB & FRONTEND' },
      { id: 'gradient', n: '02', name: 'UI / UX' },
      { id: 'fade', n: '03', name: 'O MNĚ' },
      { id: 'synthesis', n: '04', name: 'PROJEKTY' },
    ];

    const parallaxItems = qAll('[data-parallax]').map((el, idx) => ({
      el,
      speed: Number.parseFloat(el.dataset.parallax || '0') || 0,
      depth: Number.parseFloat(el.dataset.depth || '1') || (idx % 3) + 1,
      docTop: 0,
      height: 0,
      y: 0,
      lastTransform: '',
    }));

    let maxScroll = 0;
    let currentY = window.scrollY;
    let targetY = currentY;
    let velocity = 0;
    let wheelDeltaRate = 0;
    let lastWheelTime = performance.now();
    let lastFrameTime = performance.now();
    let animFrameId = 0;
    let resizeTimer: number | null = null;
    let grainTimer: number | null = null;
    let isIntertiaActive = false;
    let autoScrollAnimation: { start: number; end: number; startTime: number; duration: number } | null = null;
    let needsMeasure = true;

    // Film Grain Canvas
    const grainCanvas = document.getElementById('filmGrain') as HTMLCanvasElement | null;
    let grainCtx: CanvasRenderingContext2D | null = null;
    let grainFrames: ImageData[] = [];
    let frameTick = 0;
    let edgeEnergy = 0;
    let edgeEnergyTop = 0;
    let edgeEnergyBottom = 0;

    function generateNoiseFrame(width: number, height: number, ctx: CanvasRenderingContext2D) {
      const img = ctx.createImageData(width, height);
      const data = img.data;
      const grainBrightness = isDark ? 255 : 40;

      for (let i = 0; i < data.length; i += 4) {
        const rand = Math.random();
        if (rand > 0.72) {
          const intensity = Math.random() * 255;
          data[i] = grainBrightness;
          data[i + 1] = grainBrightness;
          data[i + 2] = grainBrightness;
          data[i + 3] = isDark ? intensity * 0.18 : intensity * 0.12;
        } else if (rand > 0.69) {
          const intensity = 180 + Math.random() * 75;
          data[i] = grainBrightness;
          data[i + 1] = grainBrightness;
          data[i + 2] = grainBrightness;
          data[i + 3] = isDark ? intensity * 0.09 : intensity * 0.06;
        } else {
          data[i] = 0;
          data[i + 1] = 0;
          data[i + 2] = 0;
          data[i + 3] = 0;
        }
      }
      return img;
    }

    function initGrainBuffers() {
      if (!grainCanvas || !grainCtx || reducedMotionQuery.matches) return;
      // Quarter-resolution buffers retain the film texture with a fraction of the pixel work.
      const w = Math.ceil((window.innerWidth + 100) * 0.25);
      const h = Math.ceil((window.innerHeight + 100) * 0.25);
      if (grainCanvas.width !== w || grainCanvas.height !== h) {
        grainCanvas.width = w;
        grainCanvas.height = h;
        grainFrames = [];
        for (let i = 0; i < 6; i++) {
          grainFrames.push(generateNoiseFrame(w, h, grainCtx));
        }
        if (grainFrames[0]) grainCtx.putImageData(grainFrames[0], 0, 0);
      }
    }

    if (grainCanvas && !reducedMotionQuery.matches) {
      grainCtx = grainCanvas.getContext('2d', { alpha: true });
      if (grainCtx) initGrainBuffers();
    }

    if (grainCanvas && grainCtx && !reducedMotionQuery.matches) {
      grainTimer = window.setInterval(() => {
        if (document.visibilityState === 'hidden' || !grainCtx || !grainFrames.length) return;
        frameTick += 1;
        const jitterX = ([0, 1, -1, 0.7][frameTick % 4] || 0) + (Math.random() * 0.8 - 0.4);
        const jitterY = Math.random() * 1.2 - 0.6;
        const frameIndex = frameTick % grainFrames.length;
        grainCtx.putImageData(grainFrames[frameIndex], 0, 0);
        grainCanvas.style.transform = `translate3d(${jitterX.toFixed(2)}px, ${jitterY.toFixed(2)}px, 0)`;
        grainCanvas.style.opacity = ((isDark ? 0.045 : 0.03) * (1 - edgeEnergy * 0.6)).toFixed(4);
      }, 1000 / 24);
    }

    function measureLayout() {
      maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      targetY = clamp(targetY, 0, maxScroll);
      currentY = clamp(currentY, 0, maxScroll);

      for (const item of parallaxItems) {
        const rect = item.el.getBoundingClientRect();
        item.docTop = rect.top + window.scrollY;
        item.height = rect.height;
      }
      needsMeasure = false;
    }

    function scheduleFrame() {
      if (!animFrameId) {
        animFrameId = requestAnimationFrame(renderLoop);
      }
    }

    function stopInertia() {
      isIntertiaActive = false;
      autoScrollAnimation = null;
      targetY = window.scrollY;
      currentY = window.scrollY;
      velocity = 0;
      wheelDeltaRate = 0;
    }

    function onScrollPassive() {
      if (needsMeasure) measureLayout();
      if (!isIntertiaActive && !autoScrollAnimation) {
        currentY = window.scrollY;
        targetY = currentY;
      }
      scheduleFrame();
    }

    function onPointerDown() {
      if (isIntertiaActive || autoScrollAnimation) stopInertia();
    }

    function onWheel(e: WheelEvent) {
      if (reducedMotionQuery.matches || !finePointerQuery.matches || e.ctrlKey) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      const factor = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1;
      const deltaY = e.deltaY * factor;
      if (!Number.isFinite(deltaY) || deltaY === 0) return;

      e.preventDefault();
      if (needsMeasure) measureLayout();

      const now = performance.now();
      const dt = Math.max(8, now - lastWheelTime);
      const instantVelocity = deltaY / dt;
      wheelDeltaRate = lerp(wheelDeltaRate, instantVelocity, 0.28);
      lastWheelTime = now;

      const boost = clamp(1 + Math.abs(wheelDeltaRate) * 0.06, 1, 1.32);
      targetY = clamp(targetY + deltaY * boost, 0, maxScroll);
      isIntertiaActive = true;
      scheduleFrame();
    }

    function smoothScrollTo(target: number) {
      if (needsMeasure) measureLayout();
      const clampedTarget = clamp(target, 0, maxScroll);
      autoScrollAnimation = {
        start: currentY,
        end: clampedTarget,
        startTime: performance.now(),
        duration: clamp(380 + Math.abs(clampedTarget - currentY) * 0.12, 380, 820),
      };
      targetY = clampedTarget;
      isIntertiaActive = true;
      scheduleFrame();
    }

    // Scroll to one of the dynamic scenes
    scrollToWindowRef.current = (idx: number) => {
      const win = dynamicScenes[idx];
      if (!win) return;
      const el = win.id === 'top' ? document.body : q(`#${win.id}`);
      if (!el) return;
      if (needsMeasure) measureLayout();

      let targetPos = 0;
      if (el !== document.body) {
        const rect = el.getBoundingClientRect();
        targetPos = getWindowScrollTarget(
          window.scrollY + rect.top,
          rect.height,
          window.innerHeight,
          maxScroll
        );
      }
      if (reducedMotionQuery.matches || !finePointerQuery.matches) {
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      } else {
        smoothScrollTo(targetPos);
      }
      history.pushState(null, '', win.id === 'top' ? '#top' : `#${win.id}`);
    };

    function onAnchorClick(e: MouseEvent) {
      const link = (e.currentTarget as HTMLElement).getAttribute('href');
      if (!link || !link.startsWith('#')) return;
      const targetElement = link === '#top' || link === '#' ? document.body : document.querySelector(link);
      if (!targetElement) return;

      e.preventDefault();
      if (needsMeasure) measureLayout();

      let scrollTarget = 0;
      if (targetElement !== document.body) {
        const rect = targetElement.getBoundingClientRect();
        scrollTarget = getWindowScrollTarget(
          window.scrollY + rect.top,
          rect.height,
          window.innerHeight,
          maxScroll
        );
      }

      if (reducedMotionQuery.matches || !finePointerQuery.matches) {
        window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
      } else {
        smoothScrollTo(scrollTarget);
      }
      history.pushState(null, '', link);
    }

    function onKeyDown(e: KeyboardEvent) {
      const active = document.activeElement;
      if (active && /INPUT|TEXTAREA|SELECT/i.test(active.tagName)) return;

      let nextY: number | undefined;
      const currentPos = targetY;
      const pageJump = window.innerHeight * 0.86;

      switch (e.key) {
        case 'ArrowDown':
          nextY = currentPos + 120;
          break;
        case 'ArrowUp':
          nextY = currentPos - 120;
          break;
        case 'PageDown':
        case ' ':
          nextY = currentPos + pageJump;
          break;
        case 'PageUp':
          nextY = currentPos - pageJump;
          break;
        case 'Home':
          nextY = 0;
          break;
        case 'End':
          nextY = maxScroll;
          break;
        default:
          return;
      }

      e.preventDefault();
      nextY = clamp(nextY, 0, maxScroll);
      if (reducedMotionQuery.matches || !finePointerQuery.matches) {
        window.scrollTo({ top: nextY, behavior: 'smooth' });
      } else {
        smoothScrollTo(nextY);
      }
    }

    const transformCache = {
      topEdge: '',
      bottomEdge: '',
      topGlow: '',
      bottomGlow: '',
      topHaze: '',
      bottomHaze: '',
      progress: '',
    };

    function applyTransform(el: HTMLElement | null, val: string, key: keyof typeof transformCache) {
      if (!el || transformCache[key] === val) return;
      el.style.transform = val;
      transformCache[key] = val;
    }

    // Dynamic Transfer Function for Five Windows / Scenes Pipeline
    // Applies continuous perspective depth and eases smoothly, strictly locked in center with 0 blopnutí.
    function updateFourWindows(scrollPos: number) {
      const vh = window.innerHeight;
      let activeIdx = 0;
      let closestDistance = Infinity;

      dynamicScenes.forEach((win, idx) => {
        const el = win.id === 'top' ? q('.hero') : q(`#${win.id}`);
        const inner =
          win.id === 'top'
            ? q('.hero-inner')
            : q(`#${win.id} .section-grid`);
        if (!el || !inner) return;

        const rect = el.getBoundingClientRect();
        const winCenterY = window.scrollY + rect.top + rect.height * 0.5;

        // Calculate transfer function
        const transfer = calculateWindowTransfer(winCenterY, scrollPos, vh);

        const dist = Math.abs(winCenterY - (scrollPos + vh * 0.5));
        if (dist < closestDistance) {
          closestDistance = dist;
          activeIdx = idx;
        }

        // Apply smooth continuous transfer function
        if (!reducedMotionQuery.matches) {
          const transformValue = `translate3d(0,${transfer.translateY.toFixed(2)}px,0) scale(${transfer.scale.toFixed(4)})`;
          if (inner.style.transform !== transformValue) {
            inner.style.transform = transformValue;
          }
          const opacStr = transfer.opacity.toFixed(3);
          if (inner.style.opacity !== opacStr) {
            inner.style.opacity = opacStr;
          }
        }
      });

      const activeWin = dynamicScenes[activeIdx];
      const prog = maxScroll > 0 ? clamp(scrollPos / maxScroll, 0, 1) : 0;

      // Animate HUD change with GSAP when switching chapters
      if (currentHudIndexRef.current !== activeIdx) {
        currentHudIndexRef.current = activeIdx;
        setActiveHud({ idx: activeIdx, n: activeWin.n, name: activeWin.name, progress: prog });
        const hudT = document.querySelector('.story-hud__t span');
        const hudN = document.querySelector('.story-hud b');
        if (hudT) {
          gsap.fromTo(hudT, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.45, ease: 'power3.out', overwrite: true });
        }
        if (hudN) {
          gsap.fromTo(hudN, { opacity: 0 }, { opacity: 1, duration: 0.35, overwrite: true });
        }
      }
      const hudProgress = document.querySelector<HTMLElement>('.story-hud__bar i');
      if (hudProgress) hudProgress.style.transform = `scaleX(${prog.toFixed(5)})`;
    }

    function updateParallaxAndEdges(scrollPos: number, currentVel: number) {
      const vh = Math.max(1, window.innerHeight);
      const normalizedVel = clamp(Math.abs(currentVel) / 30, 0, 1);
      edgeEnergy = lerp(edgeEnergy, normalizedVel, 0.08);

      const topVelBias = clamp(normalizedVel * (currentVel < 0 ? 1.1 : 0.1), 0, 1);
      const bottomVelBias = clamp(normalizedVel * (currentVel > 0 ? 1.1 : 0.1), 0, 1);
      edgeEnergyTop = lerp(edgeEnergyTop, topVelBias, 0.08);
      edgeEnergyBottom = lerp(edgeEnergyBottom, bottomVelBias, 0.08);

      const viewportCenterY = scrollPos + vh * 0.5;

      // Parallax updates: smooth, continuous, anchored
      for (const item of parallaxItems) {
        const itemCenterY = item.docTop + item.height * 0.5;
        const normalizedOffset = clamp((itemCenterY - viewportCenterY) / vh, -1.25, 1.25) * item.speed * 86;
        const velocityKick = currentVel * item.speed * (2.9 + item.depth * 0.42);
        const targetOffset = normalizedOffset + clamp(velocityKick, -24, 24);
        item.y = lerp(item.y, targetOffset, 0.09);

        const subtleRotation = clamp(item.speed * currentVel * 0.01, -0.45, 0.45);
        const subtleScale = 1 + edgeEnergy * Math.abs(item.speed) * 0.008;
        const transformStr = `translate3d(0,${item.y.toFixed(2)}px,0) rotate(${subtleRotation.toFixed(3)}deg) scale(${subtleScale.toFixed(4)})`;

        if (transformStr !== item.lastTransform) {
          item.el.style.transform = transformStr;
          item.lastTransform = transformStr;
        }
      }

      rootEl.style.setProperty('--edge-energy-top', edgeEnergyTop.toFixed(3));
      rootEl.style.setProperty('--edge-energy-bottom', edgeEnergyBottom.toFixed(3));

      applyTransform(
        edgeTop,
        `translate3d(0,${((currentVel < 0 ? -1 : 1) * edgeEnergy * 10).toFixed(2)}px,0)`,
        'topEdge'
      );
      applyTransform(
        edgeBottom,
        `translate3d(0,${((currentVel > 0 ? 1 : -1) * edgeEnergy * 10).toFixed(2)}px,0)`,
        'bottomEdge'
      );
      applyTransform(
        topGlow,
        `translate3d(${(currentVel * 0.12).toFixed(2)}px,${(-edgeEnergy * 24).toFixed(2)}px,0)`,
        'topGlow'
      );
      applyTransform(
        bottomGlow,
        `translate3d(${(-currentVel * 0.11).toFixed(2)}px,${(edgeEnergy * 24).toFixed(2)}px,0)`,
        'bottomGlow'
      );
      applyTransform(
        topHaze,
        `translate3d(${(currentVel * 0.035).toFixed(2)}px,${(-edgeEnergy * 5).toFixed(2)}px,0)`,
        'topHaze'
      );
      applyTransform(
        bottomHaze,
        `translate3d(${(-currentVel * 0.032).toFixed(2)}px,${(edgeEnergy * 5).toFixed(2)}px,0)`,
        'bottomHaze'
      );

      topMist?.style.setProperty('--mist-drift', `${(-currentVel * 0.018 - edgeEnergy * 2).toFixed(2)}px`);
      bottomMist?.style.setProperty('--mist-drift', `${(currentVel * 0.016 + edgeEnergy * 2).toFixed(2)}px`);

      // Scroll progress indicator
      const progressScale = `scaleY(${(maxScroll > 0 ? clamp(scrollPos / maxScroll, 0, 1) : 0).toFixed(5)})`;
      applyTransform(progressSpan, progressScale, 'progress');

      // Update 4 windows dynamic transfer function
      updateFourWindows(scrollPos);
    }

    function renderLoop(now: number) {
      animFrameId = 0;
      const dt = clamp(now - lastFrameTime, 8, 22);
      lastFrameTime = now;

      if (needsMeasure) measureLayout();

      if (autoScrollAnimation) {
        const progress = clamp((now - autoScrollAnimation.startTime) / autoScrollAnimation.duration, 0, 1);
        currentY = lerp(autoScrollAnimation.start, autoScrollAnimation.end, quinticEaseOut(progress));
        targetY = autoScrollAnimation.end;
        if (progress >= 1) autoScrollAnimation = null;
      } else {
        const decay = 1 - Math.pow(0.00004, dt / 1000);
        currentY = lerp(currentY, targetY, decay * 0.96);
        if (Math.abs(targetY - currentY) < 0.08) currentY = targetY;
      }

      const instantVel = isIntertiaActive ? (currentY - window.scrollY) * (1000 / Math.max(1, dt)) : 0;
      velocity = lerp(velocity, instantVel, 0.18);

      if (isIntertiaActive) {
        window.scrollTo(0, currentY);
      } else {
        currentY = window.scrollY;
      }

      velocity *= Math.pow(0.8, dt / 16.6667);
      updateParallaxAndEdges(currentY, velocity);

      const hasMomentum = isIntertiaActive && (!!autoScrollAnimation || Math.abs(targetY - currentY) > 0.08 || Math.abs(velocity) > 0.04);

      if (hasMomentum) {
        scheduleFrame();
      } else {
        isIntertiaActive = false;
        autoScrollAnimation = null;
        velocity = 0;
        wheelDeltaRate = 0;
      }
    }

    function onResize() {
      if (resizeTimer !== null) window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        resizeTimer = null;
        needsMeasure = true;
        initGrainBuffers();
        ScrollTrigger.refresh();
        scheduleFrame();
      }, 120);
    }

    function onPopState() {
      const hash = location.hash;
      const target = hash ? document.querySelector(hash) : document.body;
      if (!target) return;
      if (needsMeasure) measureLayout();
      const pos = target === document.body ? 0 : window.scrollY + target.getBoundingClientRect().top;
      if (reducedMotionQuery.matches || !finePointerQuery.matches) {
        window.scrollTo({ top: clamp(pos, 0, maxScroll), behavior: 'smooth' });
      } else {
        smoothScrollTo(pos);
      }
    }

    const scrollLinks = qAll('[data-scroll-link]');
    scrollLinks.forEach((link) => link.addEventListener('click', onAnchorClick as any));
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScrollPassive, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('popstate', onPopState);

    const onTriggerPulse = (e: Event) => {
      const customDetail = (e as CustomEvent).detail || {};
      const power = customDetail.power || 32;
      velocity = Math.min(60, velocity + power);
      edgeEnergy = 1.0;
      edgeEnergyBottom = 0.95;
      edgeEnergyTop = 0.95;
      isIntertiaActive = true;
      scheduleFrame();
    };
    window.addEventListener('trigger-inertia-pulse', onTriggerPulse);

    const onPageShow = () => {
      needsMeasure = true;
      measureLayout();
      currentY = targetY = window.scrollY;
      initGrainBuffers();
      ScrollTrigger.refresh();
      updateParallaxAndEdges(currentY, 0);
      scheduleFrame();
    };
    window.addEventListener('pageshow', onPageShow, { passive: true });

    measureLayout();
    currentY = targetY = window.scrollY;
    updateParallaxAndEdges(currentY, 0);
    scheduleFrame();

    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      if (resizeTimer !== null) window.clearTimeout(resizeTimer);
      if (grainTimer !== null) window.clearInterval(grainTimer);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScrollPassive);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('popstate', onPopState);
      window.removeEventListener('pageshow', onPageShow);
      window.removeEventListener('trigger-inertia-pulse', onTriggerPulse);
      scrollLinks.forEach((link) => link.removeEventListener('click', onAnchorClick as any));
    };
  }, [isDark]);

  return (
    <>
      <a className="skip-link" href="#top">Přeskočit na obsah</a>

      {/* 24FPS Living Grain Canvas */}
      <canvas id="filmGrain" className="film-grain" aria-hidden="true" />

      {/* Symmetric Glass Edges (Top & Bottom) with mist, haze, glow & shine */}
      <div className="edge edge--top" aria-hidden="true">
        <div className="edge__glow" />
        <div className="edge__haze" />
        <div className="edge__mist" />
        <div className="edge__shine" />
      </div>

      <div className="edge edge--bottom" aria-hidden="true">
        <div className="edge__glow" />
        <div className="edge__haze" />
        <div className="edge__mist" />
        <div className="edge__shine" />
      </div>

      {/* Right Edge Scroll Progress */}
      <div className="scroll-progress" aria-hidden="true">
        <span />
      </div>

      {/* Navigation matching exact original with accessible dark mode toggle and all 4 windows */}
      <header className="nav">
        <div className="nav-inner">
          <a href="#top" className="brand" data-scroll-link>
            RUZICKAJAKUB
          </a>

          <nav className="nav-links" aria-label="Hlavní navigace">
            <a href="#top" data-scroll-link>
            ÚVOD
            </a>
            <a href="#blur" data-scroll-link>
              WEB
            </a>
            <a href="#gradient" data-scroll-link>
              UI/UX
            </a>
            <a href="#fade" data-scroll-link>
              O MNĚ
            </a>
            <a href="#synthesis" data-scroll-link>
              PROJEKTY
            </a>

            <label className={`theme-switch ${isDark ? 'dark' : 'light'}`} title={`Přepnout na ${isDark ? 'světlý' : 'tmavý'} režim`}>
              <input
                className="theme-switch-input"
                type="checkbox"
                role="switch"
                checked={!isDark}
                onChange={toggleTheme}
                aria-label={`Přepnout na ${isDark ? 'světlý' : 'tmavý'} režim`}
              />
              <span className="theme-switch-track" aria-hidden="true" />
            </label>
          </nav>
        </div>
      </header>

      {/* Main Content: Exact original sections, centered, no blopnout */}
      <main id="top" tabIndex={-1}>
        {/* Window 00: Hero Intro */}
        <section className="hero">
          <div className="parallax-stage" aria-hidden="true">
            <div
              className="parallax-layer parallax-layer--1"
              data-parallax="0.11"
              data-depth="1"
            />
            <div
              className="parallax-layer parallax-layer--2"
              data-parallax="-0.18"
              data-depth="2"
            />
            <div
              className="parallax-layer parallax-layer--3"
              data-parallax="0.28"
              data-depth="3"
            />
          </div>

          <div className="hero-inner" data-parallax="-0.03" data-depth="4">
            <span className="eyebrow">Webdesigner · UI/UX · Frontend & Creative Development</span>
            <h1>
              <span className="hero-name">RUZICKAJAKUB</span><span className="hero-domain">.cz</span>
            </h1>
            <p>
              Propojuji webdesign, UI/UX a frontend vývoj. Navrhuji digitální produkty, které dobře vypadají,
              snadno se používají a mají jasný účel.
            </p>
            <div className="hero-actions">
              <a className="hero-action hero-action--primary" href="#synthesis" data-scroll-link>
                Prohlédnout projekty <ExternalLink size={16} aria-hidden="true" />
              </a>
              <a className="hero-action hero-action--secondary" href="mailto:ruzickajakub95@gmail.com">
                Domluvit spolupráci
              </a>
            </div>
          </div>
        </section>

        {/* Demo Sections: Windows 01, 02, 03 */}
        <section className="demo">
          {/* Window 01: BLUR */}
          <article className="section" id="blur">
            <div className="section-photo section-photo--blur" data-parallax="0.16" data-depth="1" aria-hidden="true" />
            <div className="section-grid">
              <div>
                <h2 data-parallax="0.045" data-depth="2">
                  01
                  <br />
                  WEB &
                  <br />
                  FRONTEND
                </h2>
              </div>
              <div>
                <p>
                  Navrhuji a vytvářím weby, responzivní rozhraní a webové aplikace. Propojuji layout, typografii,
                  navigaci a mikrointerakce do srozumitelného funkčního celku.
                </p>
              </div>
            </div>
          </article>

          {/* Window 02: GRADIENT */}
          <article className="section" id="gradient">
            <div className="section-photo section-photo--gradient" data-parallax="-0.2" data-depth="2" aria-hidden="true" />
            <div className="section-grid">
              <div>
                <p>
                  Od informační architektury a wireframů po prototyp. Pomáhám převést složitý nápad do jasné
                  struktury a ověřit hlavní uživatelské cesty ještě před implementací.
                </p>
              </div>
              <div>
                <h2 data-parallax="-0.055" data-depth="3">
                  02
                  <br />
                  UI / UX
                </h2>
              </div>
            </div>
          </article>

          {/* Window 03: FADE */}
          <article className="section" id="fade">
            <div className="section-photo section-photo--blur" data-parallax="0.16" data-depth="1" aria-hidden="true" />
            <div className="section-grid">
              <div><h2 data-parallax="0.045" data-depth="2">03<br />O MNĚ</h2></div>
              <div><p>Od prvního návrhu po funkční výsledek. Přemýšlím nad obsahem, strukturou, vizuální hierarchií i technickou realizací — aby výsledkem nebyla jen hezká obrazovka, ale použitelný celek.<br /><br />Vedle webdesignu a frontend vývoje tvořím vlastní digitální nástroje, automatizace a 3D prototypy. Architekturu řešení přizpůsobuji skutečným potřebám projektu, bez zbytečné složitosti.</p></div>
            </div>
          </article>

          {/* Window 04: PORTFOLIO */}
          <article className="section" id="synthesis">
            <div className="section-photo section-photo--gradient" data-parallax="-0.18" data-depth="1" aria-hidden="true" />
            <header className="project-intro">
              <span className="eyebrow">04 / VÝBĚR PRÁCE</span>
              <h2>Projekty</h2>
              <p>Výběr digitálních produktů, nástrojů a experimentů. Každý projekt má vlastní prostor.</p>
            </header>
            <div className="project-gallery" role="region" aria-roledescription="galerie" aria-label="Vybrané projekty">
              <div className="project-gallery__track">
                <article className="project-panel collage--a" id="project-blaak">
                  <div className="project-panel__collage"><div className="collage-tile collage-main"><img loading="lazy" decoding="async" src={`${import.meta.env.BASE_URL}projects/blaak.svg`} alt="" aria-hidden="true" width="1200" height="800" /></div><div className="collage-tile collage-detail"><img loading="lazy" decoding="async" src={`${import.meta.env.BASE_URL}projects/blaak.svg`} alt="" aria-hidden="true" width="1200" height="800" /></div><div className="collage-tile collage-accent"><img loading="lazy" decoding="async" src={`${import.meta.env.BASE_URL}projects/blaak.svg`} alt="" aria-hidden="true" width="1200" height="800" /></div><div className="project-panel__info"><span className="eyebrow">01 / WEB — KATALOG</span><h3>GitGallery / BLaak</h3><p>Katalog webových projektů s náhledy, technologiemi a odkazy na živé ukázky a repozitáře.</p><div className="project-actions"><a className="project-link" href="https://akcizur.github.io/blaak/" target="_blank" rel="noopener noreferrer">Živá ukázka <ExternalLink size={16} aria-hidden="true" /></a><a className="project-link project-link--source" href="https://github.com/akcizur/blaak" target="_blank" rel="noopener noreferrer">Zdrojový kód <Github size={16} aria-hidden="true" /></a></div></div></div>
                  <span className="project-panel__count">01 <i /> 04</span>
                </article>
                <article className="project-panel collage--b" id="project-docs">
                  <div className="project-panel__collage"><div className="collage-tile collage-main"><img loading="lazy" decoding="async" src={`${import.meta.env.BASE_URL}projects/docs.svg`} alt="" aria-hidden="true" width="1200" height="800" /></div><div className="collage-tile collage-detail"><img loading="lazy" decoding="async" src={`${import.meta.env.BASE_URL}projects/docs.svg`} alt="" aria-hidden="true" width="1200" height="800" /></div><div className="collage-tile collage-accent"><img loading="lazy" decoding="async" src={`${import.meta.env.BASE_URL}projects/docs.svg`} alt="" aria-hidden="true" width="1200" height="800" /></div><div className="project-panel__info"><span className="eyebrow">02 / DOKUMENTACE — WORKSPACE</span><h3>AKCIZUR Docs</h3><p>Dokumentační web se zaměřením na přehlednou strukturu obsahu, navigaci a technické poznámky.</p><div className="project-actions"><a className="project-link" href="https://akcizur.github.io/docs/" target="_blank" rel="noopener noreferrer">Živá ukázka <ExternalLink size={16} aria-hidden="true" /></a><a className="project-link project-link--source" href="https://github.com/akcizur/docs" target="_blank" rel="noopener noreferrer">Zdrojový kód <Github size={16} aria-hidden="true" /></a></div></div></div>
                  <span className="project-panel__count">02 <i /> 04</span>
                </article>
                <article className="project-panel collage--c" id="project-panana">
                  <div className="project-panel__collage"><div className="collage-tile collage-main"><img loading="lazy" decoding="async" src={`${import.meta.env.BASE_URL}projects/panana.svg`} alt="" aria-hidden="true" width="1200" height="800" /></div><div className="collage-tile collage-detail"><img loading="lazy" decoding="async" src={`${import.meta.env.BASE_URL}projects/panana.svg`} alt="" aria-hidden="true" width="1200" height="800" /></div><div className="collage-tile collage-accent"><img loading="lazy" decoding="async" src={`${import.meta.env.BASE_URL}projects/panana.svg`} alt="" aria-hidden="true" width="1200" height="800" /></div><div className="project-panel__info"><span className="eyebrow">03 / WORKSPACE — POZNÁMKY</span><h3>Panana</h3><p>Minimalistický workspace inspirovaný Notionem pro práci s poznámkami a strukturovaným obsahem.</p><div className="project-actions"><a className="project-link" href="https://akcizur.github.io/panana/" target="_blank" rel="noopener noreferrer">Živá ukázka <ExternalLink size={16} aria-hidden="true" /></a><a className="project-link project-link--source" href="https://github.com/akcizur/panana" target="_blank" rel="noopener noreferrer">Zdrojový kód <Github size={16} aria-hidden="true" /></a></div></div></div>
                  <span className="project-panel__count">03 <i /> 04</span>
                </article>
                <article className="project-panel collage--d" id="project-dflat">
                  <div className="project-panel__collage"><div className="collage-tile collage-main"><img loading="lazy" decoding="async" src={`${import.meta.env.BASE_URL}projects/dflat.svg`} alt="" aria-hidden="true" width="1200" height="800" /></div><div className="collage-tile collage-detail"><img loading="lazy" decoding="async" src={`${import.meta.env.BASE_URL}projects/dflat.svg`} alt="" aria-hidden="true" width="1200" height="800" /></div><div className="collage-tile collage-accent"><img loading="lazy" decoding="async" src={`${import.meta.env.BASE_URL}projects/dflat.svg`} alt="" aria-hidden="true" width="1200" height="800" /></div><div className="project-panel__info"><span className="eyebrow">04 / 3D — PROHLÍŽEČ</span><h3>DFLAT</h3><p>Interaktivní 3D scéna v prohlížeči s low-poly prostředím a atmosférou panelového bytu.</p><div className="project-actions"><a className="project-link" href="https://akcizur.github.io/DFLAT/" target="_blank" rel="noopener noreferrer">Živá ukázka <ExternalLink size={16} aria-hidden="true" /></a><a className="project-link project-link--source" href="https://github.com/akcizur/DFLAT" target="_blank" rel="noopener noreferrer">Zdrojový kód <Github size={16} aria-hidden="true" /></a></div></div></div>
                  <span className="project-panel__count">04 <i /> 04</span>
                </article>
              </div>
            </div>
          </article>
        </section>
      </main>

      {/* Floating Story HUD Chapter Indicator with Five Windows Dynamic Switcher */}
      <div className="story-hud" aria-hidden="true">
        <b>{activeHud.n}</b>
        <span className="story-hud__bar">
          <i style={{ transform: `scaleX(${activeHud.progress})` }} />
        </span>
        <span className="story-hud__t">
          <span>{activeHud.name}</span>
        </span>
      </div>

      <footer className="simple-footer" id="footer" data-simple-footer>
        <div className="simple-footer-inner">
          <div className="simple-footer-main">
            <nav className="simple-footer-nav" aria-label="Navigace v patičce">
              <a href="#top" data-scroll-link>Úvod</a>
              <a href="#blur" data-scroll-link>Web & frontend</a>
              <a href="#gradient" data-scroll-link>UI / UX</a>
              <a href="#fade" data-scroll-link>O mně</a>
              <a href="#synthesis" data-scroll-link>Projekty</a>
              <a href="mailto:ruzickajakub95@gmail.com">Kontakt</a>
            </nav>
            <div className="simple-footer-info">
              <section className="simple-footer-block">
                <h3>Kontakt</h3>
                <a href="mailto:ruzickajakub95@gmail.com">ruzickajakub95@gmail.com</a>
                <span>Máš nápad na web, nástroj nebo interaktivní projekt?</span>
              </section>
              <section className="simple-footer-block">
                <h3>Kde mě najdete</h3>
                <span>Praha, Česká republika</span>
                <span>Spolupráce na dálku</span>
              </section>
              <section className="simple-footer-block simple-footer-social">
                <h3>Zdrojové kódy</h3>
                <span className="simple-footer-social-copy">Veřejné projekty, experimenty a další ukázky vývoje.</span>
                <div className="simple-footer-social-links">
                  <a href="https://github.com/akcizur" target="_blank" rel="noopener noreferrer" aria-label="GitHub profil Jakuba Růžičky" title="GitHub profil"><Github /></a>
                </div>
              </section>
            </div>
          </div>
          <div className="simple-footer-bottom">
            <div><span>© 2026 Jakub Růžička. Všechna práva vyhrazena.</span><span>Promyšlený design. Funkční vývoj. Důraz na detail.</span></div>
            <span>Praha · Česká republika</span>
          </div>
        </div>
      </footer>
      {/* Floating Back to Top button · Appears only after scrolling past the first viewport */}
      <BackToTop isDark={isDark} onScrollToTop={() => scrollToWindowRef.current(0)} />
    </>
  );
}
