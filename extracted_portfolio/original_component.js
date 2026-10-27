function zi() {
        return (
          Lf.useEffect(() => {
            document.title = "Cinematic Edge Motion · Living Grain";
            let e = document.documentElement,
              n = window.matchMedia("(prefers-reduced-motion: reduce)"),
              t = window.matchMedia("(pointer: fine)"),
              r = (_) => document.querySelector(_),
              l = (_) => Array.from(document.querySelectorAll(_)),
              u = (_, z, T) => Math.min(T, Math.max(z, _)),
              o = (_, z, T) => _ + (z - _) * T,
              i = (_) => 1 - Math.pow(1 - _, 5),
              s = r(".edge--top"),
              d = r(".edge--bottom"),
              v = r(".edge--top .edge__glow"),
              m = r(".edge--bottom .edge__glow"),
              p = r(".edge--top .edge__haze"),
              g = r(".edge--bottom .edge__haze"),
              k = r(".edge--top .edge__mist"),
              E = r(".edge--bottom .edge__mist"),
              U = r(".scroll-progress span"),
              f = l("[data-parallax]").map((_, z) => ({
                el: _,
                speed: Number.parseFloat(_.dataset.parallax || "") || 0,
                depth: Number.parseFloat(_.dataset.depth || "") || (z % 3) + 1,
                docTop: 0,
                height: 0,
                y: 0,
                lastTransform: "",
              })),
              a = 0,
              c = window.scrollY,
              h = c,
              w = 0,
              C = 0,
              N = performance.now(),
              x = performance.now(),
              V = 0,
              L = !1,
              $ = null,
              Ie = !0,
              ae = document.getElementById("filmGrain"),
              Ln = null,
              Tn = [],
              Pt = 0,
              Ce = 0,
              Gl = 0,
              Jl = 0;
            function If(_, z, T) {
              let J = T.createImageData(_, z),
                O = J.data;
              for (let Q = 0; Q < O.length; Q += 4) {
                let Gn = Math.random();
                if (Gn > 0.72) {
                  let Oe = Math.random() * 255;
                  ((O[Q] = Oe),
                    (O[Q + 1] = Oe),
                    (O[Q + 2] = Oe),
                    (O[Q + 3] = Oe * 0.18));
                } else if (Gn > 0.69) {
                  let Oe = 180 + Math.random() * 75;
                  ((O[Q] = Oe),
                    (O[Q + 1] = Oe),
                    (O[Q + 2] = Oe),
                    (O[Q + 3] = Oe * 0.09));
                } else ((O[Q] = 0), (O[Q + 1] = 0), (O[Q + 2] = 0), (O[Q + 3] = 0));
              }
              return J;
            }
            function Nr() {
              if (!ae || !Ln || n.matches) return;
              let _ = Math.ceil((window.innerWidth + 100) * 0.5),
                z = Math.ceil((window.innerHeight + 100) * 0.5);
              if (ae.width !== _ || ae.height !== z) {
                ((ae.width = _), (ae.height = z), (Tn = []));
                for (let T = 0; T < 6; T++) Tn.push(If(_, z, Ln));
                if (Tn[0]) Ln.putImageData(Tn[0], 0, 0);
              }
            }
            if (ae && !n.matches) {
              if (((Ln = ae.getContext("2d", { alpha: !0 })), Ln)) Nr();
            }
            function ln() {
              ((a = Math.max(
                0,
                document.documentElement.scrollHeight - window.innerHeight,
              )),
                (h = u(h, 0, a)),
                (c = u(c, 0, a)));
              for (let _ of f) {
                let z = _.el.getBoundingClientRect();
                ((_.docTop = z.top + window.scrollY), (_.height = z.height));
              }
              Ie = !1;
            }
            function un() {
              if (!V) V = requestAnimationFrame(Of);
            }
            function Li() {
              ((L = !1),
                ($ = null),
                (h = window.scrollY),
                (c = window.scrollY),
                (w = 0),
                (C = 0));
            }
            function Ti() {
              if (Ie) ln();
              if (!L && !$) ((c = window.scrollY), (h = c));
              un();
            }
            function Ri() {
              if (L || $) Li();
            }
            function Ii(_) {
              if (n.matches || !t.matches || _.ctrlKey) return;
              if (Math.abs(_.deltaX) > Math.abs(_.deltaY)) return;
              let z =
                  _.deltaMode === 1 ? 16 : _.deltaMode === 2 ? window.innerHeight : 1,
                T = _.deltaY * z;
              if (!Number.isFinite(T) || T === 0) return;
              if ((_.preventDefault(), Ie)) ln();
              let J = performance.now(),
                O = Math.max(8, J - N),
                Q = T / O;
              ((C = o(C, Q, 0.28)), (N = J));
              let Gn = u(0.96 + Math.abs(C) * 1.25, 0.96, 1.07);
              ((h = u(h + T * Gn, 0, a)), (L = !0), un());
            }
            function Yl(_) {
              if (Ie) ln();
              let z = u(_, 0, a);
              (($ = {
                start: c,
                end: z,
                startTime: performance.now(),
                duration: u(460 + Math.abs(z - c) * 0.14, 460, 920),
              }),
                (h = z),
                (L = !0),
                un());
            }
            function Oi(_) {
              let T = _.currentTarget.getAttribute("href");
              if (!T || !T.startsWith("#")) return;
              let J = T === "#" ? document.body : document.querySelector(T);
              if (!J) return;
              if ((_.preventDefault(), Ie)) ln();
              let O =
                J === document.body
                  ? 0
                  : u(
                      window.scrollY +
                        J.getBoundingClientRect().top -
                        Math.min(28, window.innerHeight * 0.035),
                      0,
                      a,
                    );
              if (n.matches || !t.matches)
                window.scrollTo({ top: O, behavior: "smooth" });
              else Yl(O);
              history.pushState(null, "", T);
            }
            function Fi(_) {
              let z = document.activeElement;
              if (z && /INPUT|TEXTAREA|SELECT/.test(z.tagName)) return;
              let T,
                J = h,
                O = window.innerHeight * 0.86;
              switch (_.key) {
                case "ArrowDown":
                  T = J + 120;
                  break;
                case "ArrowUp":
                  T = J - 120;
                  break;
                case "PageDown":
                case " ":
                  T = J + O;
                  break;
                case "PageUp":
                  T = J - O;
                  break;
                case "Home":
                  T = 0;
                  break;
                case "End":
                  T = a;
                  break;
                default:
                  return;
              }
              if ((_.preventDefault(), (T = u(T, 0, a)), n.matches || !t.matches))
                window.scrollTo({ top: T, behavior: "smooth" });
              else Yl(T);
            }
            let on = {
              topEdge: { value: "" },
              bottomEdge: { value: "" },
              topGlow: { value: "" },
              bottomGlow: { value: "" },
              topHaze: { value: "" },
              bottomHaze: { value: "" },
              progress: { value: "" },
            };
            function Zn(_, z, T) {
              if (!_ || T.value === z) return;
              ((_.style.transform = z), (T.value = z));
            }
            function xr(_, z, T = performance.now()) {
              let J = Math.max(1, window.innerHeight),
                O = u(Math.abs(z) / 30, 0, 1);
              Ce = o(Ce, O, 0.08);
              let Q = u(O * (z < 0 ? 1.1 : 0.1), 0, 1),
                Gn = u(O * (z > 0 ? 1.1 : 0.1), 0, 1);
              ((Gl = o(Gl, Q, 0.08)), (Jl = o(Jl, Gn, 0.08)));
              let Oe = _ + J * 0.5;
              for (let he of f) {
                let Wi = he.docTop + he.height * 0.5,
                  bl = u((Wi - Oe) / J, -1.25, 1.25) * he.speed * 86,
                  eu = z * he.speed * (2.9 + he.depth * 0.42),
                  Ai = bl + u(eu, -24, 24);
                he.y = o(he.y, Ai, 0.09);
                let nu = u(he.speed * z * 0.01, -0.45, 0.45),
                  tu = 1 + Ce * Math.abs(he.speed) * 0.008,
                  ru = `translate3d(0,${he.y.toFixed(2)}px,0) rotate(${nu.toFixed(3)}deg) scale(${tu.toFixed(4)})`;
                if (ru !== he.lastTransform)
                  ((he.el.style.transform = ru), (he.lastTransform = ru));
              }
              if (
                (e.style.setProperty("--edge-energy-top", Gl.toFixed(3)),
                e.style.setProperty("--edge-energy-bottom", Jl.toFixed(3)),
                Zn(
                  s,
                  `translate3d(0,${((z < 0 ? -1 : 1) * Ce * 10).toFixed(2)}px,0)`,
                  on.topEdge,
                ),
                Zn(
                  d,
                  `translate3d(0,${((z > 0 ? 1 : -1) * Ce * 10).toFixed(2)}px,0)`,
                  on.bottomEdge,
                ),
                Zn(
                  v,
                  `translate3d(${(z * 0.12).toFixed(2)}px,${(-Ce * 24).toFixed(2)}px,0)`,
                  on.topGlow,
                ),
                Zn(
                  m,
                  `translate3d(${(-z * 0.11).toFixed(2)}px,${(Ce * 24).toFixed(2)}px,0)`,
                  on.bottomGlow,
                ),
                Zn(
                  p,
                  `translate3d(${(z * 0.035).toFixed(2)}px,${(-Ce * 5).toFixed(2)}px,0)`,
                  on.topHaze,
                ),
                Zn(
                  g,
                  `translate3d(${(-z * 0.032).toFixed(2)}px,${(Ce * 5).toFixed(2)}px,0)`,
                  on.bottomHaze,
                ),
                k?.style.setProperty(
                  "--mist-drift",
                  `${(-z * 0.018 - Ce * 2).toFixed(2)}px`,
                ),
                E?.style.setProperty(
                  "--mist-drift",
                  `${(z * 0.016 + Ce * 2).toFixed(2)}px`,
                ),
                ae && Ln && Tn.length && !n.matches)
              ) {
                let Qi = ([0, 1, -1, 0.7][Pt % 4] || 0) + (Math.random() * 1.2 - 0.6),
                  bl = Math.random() * 2 - 1,
                  eu = 1 + Math.sin(T * 0.0003) * 0.001;
                if (
                  ((ae.style.transform = `translate3d(${Qi.toFixed(2)}px, ${bl.toFixed(2)}px, 0) scale(${eu.toFixed(5)})`),
                  Pt % 2 === 0)
                ) {
                  let tu = Pt % Tn.length;
                  Ln.putImageData(Tn[tu], 0, 0);
                }
                let nu = 0.055 * (1 - Ce * 0.6);
                ae.style.opacity = nu.toFixed(4);
              }
              let ql = `scaleY(${(a > 0 ? u(_ / a, 0, 1) : 0).toFixed(5)})`;
              if (U && on.progress.value !== ql)
                ((U.style.transform = ql), (on.progress.value = ql));
            }
            function Of(_) {
              V = 0;
              let z = u(_ - x, 8, 22);
              if (((x = _), (Pt = (Pt + 1) % 1e6), Ie)) ln();
              if ($) {
                let Q = u((_ - $.startTime) / $.duration, 0, 1);
                if (((c = o($.start, $.end, i(Q))), (h = $.end), Q >= 1)) $ = null;
              } else {
                let Q = 1 - Math.pow(0.0008, z / 1000);
                if (((c = o(c, h, Q * 0.92)), Math.abs(h - c) < 0.08)) c = h;
              }
              let T = L ? (c - window.scrollY) * (1000 / Math.max(1, z)) : 0;
              if (((w = o(w, T, 0.18)), L)) window.scrollTo(0, c);
              else c = window.scrollY;
              ((w *= Math.pow(0.8, z / 16.6667)), xr(c, w, _));
              let J = L && (!!$ || Math.abs(h - c) > 0.08 || Math.abs(w) > 0.04),
                O = !!ae && !n.matches;
              if (J || O) un();
              else ((L = !1), ($ = null), (w = 0), (C = 0));
            }
            function Di() {
              ((Ie = !0), Nr(), un());
            }
            function Mi() {
              let _ = location.hash
                ? document.querySelector(location.hash)
                : document.body;
              if (!_) return;
              if (Ie) ln();
              let z =
                _ === document.body
                  ? 0
                  : window.scrollY + _.getBoundingClientRect().top;
              if (n.matches || !t.matches)
                window.scrollTo({ top: u(z, 0, a), behavior: "smooth" });
              else Yl(z);
            }
            let Ui = l("[data-scroll-link]");
            (Ui.forEach((_) => _.addEventListener("click", Oi)),
              window.addEventListener("wheel", Ii, { passive: !1 }),
              window.addEventListener("scroll", Ti, { passive: !0 }),
              window.addEventListener("pointerdown", Ri, { passive: !0 }),
              window.addEventListener("keydown", Fi),
              window.addEventListener("resize", Di, { passive: !0 }),
              window.addEventListener("popstate", Mi));
            let Vi = () => {
              ((Ie = !0),
                ln(),
                (c = h = window.scrollY),
                Nr(),
                xr(c, 0, performance.now()),
                un());
            };
            window.addEventListener("pageshow", Vi, { passive: !0 });
            let Bi = () => {
              if ((Li(), n.matches)) {
                if (ae) ae.style.display = "none";
              } else {
                if (ae) ae.style.display = "";
                Nr();
              }
              (xr(window.scrollY, 0, performance.now()), un());
            };
            return (
              n.addEventListener?.("change", Bi),
              ln(),
              (c = h = window.scrollY),
              xr(c, 0, performance.now()),
              un(),
              () => {
                if (V) cancelAnimationFrame(V);
                (window.removeEventListener("wheel", Ii),
                  window.removeEventListener("scroll", Ti),
                  window.removeEventListener("pointerdown", Ri),
                  window.removeEventListener("keydown", Fi),
                  window.removeEventListener("resize", Di),
                  window.removeEventListener("popstate", Mi),
                  window.removeEventListener("pageshow", Vi),
                  n.removeEventListener?.("change", Bi),
                  Ui.forEach((_) => _.removeEventListener("click", Oi)));
              }
            );
          }, []),
          X(Pi, {
            children: [
              P("style", { children: fh }),
              P("canvas", {
                id: "filmGrain",
                className: "film-grain",
                "aria-hidden": "true",
              }),
              X("div", {
                className: "edge edge--top",
                "aria-hidden": "true",
                children: [
                  P("div", { className: "edge__haze" }),
                  P("div", { className: "edge__glow" }),
                  P("div", { className: "edge__shine" }),
                  P("div", { className: "edge__mist" }),
                ],
              }),
              X("div", {
                className: "edge edge--bottom",
                "aria-hidden": "true",
                children: [
                  P("div", { className: "edge__haze" }),
                  P("div", { className: "edge__glow" }),
                  P("div", { className: "edge__shine" }),
                  P("div", { className: "edge__mist" }),
                ],
              }),
              P("div", {
                className: "scroll-progress",
                "aria-hidden": "true",
                children: P("span", {}),
              }),
              P("nav", {
                className: "nav",
                "aria-label": "Hlavní navigace",
                children: X("div", {
                  className: "nav-inner",
                  children: [
                    P("a", {
                      className: "brand",
                      href: "#top",
                      "data-scroll-link": !0,
                      children: "RUZICKAJAKUB",
                    }),
                    X("div", {
                      className: "nav-links",
                      children: [
                        P("a", {
                          href: "#landing",
                          "data-scroll-link": !0,
                          children: "LANDING",
                        }),
                        P("a", {
                          href: "#gradient",
                          "data-scroll-link": !0,
                          children: "GRADIENT",
                        }),
                        P("a", {
                          href: "#fade",
                          "data-scroll-link": !0,
                          children: "FADE",
                        }),
                        X("span", {
                          className: "live-grain",
                          children: [
                            P("span", {
                              className: "live-dot",
                              "aria-hidden": "true",
                            }),
                            "(*icon-burger*)",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              X("main", {
                id: "top",
                children: [
                  X("section", {
                    className: "hero",
                    children: [
                      X("div", {
                        className: "parallax-stage",
                        "aria-hidden": "true",
                        children: [
                          P("div", {
                            className: "parallax-layer parallax-layer--1",
                            "data-parallax": "0.11",
                            "data-depth": "1",
                          }),
                          P("div", {
                            className: "parallax-layer parallax-layer--2",
                            "data-parallax": "-0.18",
                            "data-depth": "2",
                          }),
                          P("div", {
                            className: "parallax-layer parallax-layer--3",
                            "data-parallax": "0.28",
                            "data-depth": "3",
                          }),
                        ],
                      }),
                      X("div", {
                        className: "hero-inner",
                        "data-parallax": "-0.03",
                        "data-depth": "4",
                        children: [
                          P("span", {
                            className: "eyebrow",
                            children: "Cinematic edge motion · living canvas grain",
                          }),
                          X("h1", {
                            children: [
                              "BLUR",
                              P("br", {}),
                              "AT THE",
                              P("br", {}),
                              "EDGE.",
                            ],
                          }),
                          P("p", {
                            children:
                              "Symmetric top and bottom glass edges with smooth inertial scrolling, velocity response, layered parallax and living 35mm film grain that jitters 1px per frame.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  X("section", {
                    className: "demo",
                    children: [
                      P("article", {
                        className: "section",
                        id: "blur",
                        children: X("div", {
                          className: "section-grid",
                          children: [
                            P("div", {
                              children: X("h2", {
                                "data-parallax": "0.045",
                                "data-depth": "2",
                                children: ["01", P("br", {}), "BLUR"],
                              }),
                            }),
                            P("div", {
                              children: P("p", {
                                children:
                                  "The fixed edge layers stay visually transparent while adapting their blur and glow to the movement of the page – now with fluid 0.09 lerp.",
                              }),
                            }),
                          ],
                        }),
                      }),
                      P("article", {
                        className: "section",
                        id: "gradient",
                        children: X("div", {
                          className: "section-grid",
                          children: [
                            P("div", {
                              children: P("p", {
                                children:
                                  "The gradient is strongest at each viewport boundary and softens toward the content, mirrored from top to bottom. Grain weaves with gate weave.",
                              }),
                            }),
                            P("div", {
                              children: X("h2", {
                                "data-parallax": "-0.055",
                                "data-depth": "3",
                                children: ["02", P("br", {}), "GRADIENT"],
                              }),
                            }),
                          ],
                        }),
                      }),
                      P("article", {
                        className: "section",
                        id: "fade",
                        children: X("div", {
                          className: "section-grid",
                          children: [
                            P("div", {
                              children: X("h2", {
                                "data-parallax": "0.065",
                                "data-depth": "2",
                                children: ["03", P("br", {}), "FADE"],
                              }),
                            }),
                            P("div", {
                              children: P("p", {
                                children:
                                  "The masks remove the glass progressively, so there is no hard lower or upper panel edge while the parallax keeps depth alive. Canvas grain at half-res – 6 textures swapping every 2 frames.",
                              }),
                            }),
                          ],
                        }),
                      }),
                      P("div", {
                        className: "visual",
                        "data-parallax": "-0.025",
                        "data-depth": "1",
                        children: X("div", {
                          className: "card",
                          "data-parallax": "0.035",
                          "data-depth": "2",
                          children: [
                            P("small", { children: "Effect stack" }),
                            P("strong", {
                              children:
                                "inertia → velocity → parallax → glass edge → living grain",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              X("footer", {
                className: "footer",
                children: [
                  P("span", {
                    children:
                      "AIO HTML · symmetric edge glass / smooth inertia / velocity parallax",
                  }),
                  P("em", {
                    children:
                      "LIVE GRAIN · 24FPS JITTER · canvas half-res · 6 textures · 1px jitter · gate weave · 35mm sparse",
                  }),
                ],
              }),
            ],
          })
        );
      }
      