      var Ff = Object.create;
      var {
        getPrototypeOf: Df,
        defineProperty: lu,
        getOwnPropertyNames: Mf,
      } = Object;
      var Uf = Object.prototype.hasOwnProperty;
      var Rn = (e, n, t) => {
        t = e != null ? Ff(Df(e)) : {};
        let r =
          n || !e || !e.__esModule
            ? lu(t, "default", { value: e, enumerable: !0 })
            : t;
        for (let l of Mf(e))
          if (!Uf.call(r, l)) lu(r, l, { get: () => e[l], enumerable: !0 });
        return r;
      };
      var Pr = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
      var Vf = (e, n) => {
        for (var t in n)
          lu(e, t, {
            get: n[t],
            enumerable: !0,
            configurable: !0,
            set: (r) => (n[t] = () => r),
          });
      };
      var Bf = (e, n) => () => (e && (n = e((e = 0))), n);
      var Lt = Pr((nd) => {
        var zt = Symbol.for("react.element"),
          Wf = Symbol.for("react.portal"),
          Qf = Symbol.for("react.fragment"),
          Af = Symbol.for("react.strict_mode"),
          Hf = Symbol.for("react.profiler"),
          jf = Symbol.for("react.provider"),
          $f = Symbol.for("react.context"),
          Kf = Symbol.for("react.forward_ref"),
          Xf = Symbol.for("react.suspense"),
          Zf = Symbol.for("react.memo"),
          Gf = Symbol.for("react.lazy"),
          Hi = Symbol.iterator;
        function Jf(e) {
          if (e === null || typeof e !== "object") return null;
          return (
            (e = (Hi && e[Hi]) || e["@@iterator"]),
            typeof e === "function" ? e : null
          );
        }
        var Ki = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          Xi = Object.assign,
          Zi = {};
        function Jn(e, n, t) {
          ((this.props = e),
            (this.context = n),
            (this.refs = Zi),
            (this.updater = t || Ki));
        }
        Jn.prototype.isReactComponent = {};
        Jn.prototype.setState = function (e, n) {
          if (typeof e !== "object" && typeof e !== "function" && e != null)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
            );
          this.updater.enqueueSetState(this, e, n, "setState");
        };
        Jn.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        };
        function Gi() {}
        Gi.prototype = Jn.prototype;
        function ou(e, n, t) {
          ((this.props = e),
            (this.context = n),
            (this.refs = Zi),
            (this.updater = t || Ki));
        }
        var iu = (ou.prototype = new Gi());
        iu.constructor = ou;
        Xi(iu, Jn.prototype);
        iu.isPureReactComponent = !0;
        var ji = Array.isArray,
          Ji = Object.prototype.hasOwnProperty,
          su = { current: null },
          Yi = { key: !0, ref: !0, __self: !0, __source: !0 };
        function qi(e, n, t) {
          var r,
            l = {},
            u = null,
            o = null;
          if (n != null)
            for (r in (n.ref !== void 0 && (o = n.ref),
            n.key !== void 0 && (u = "" + n.key),
            n))
              Ji.call(n, r) && !Yi.hasOwnProperty(r) && (l[r] = n[r]);
          var i = arguments.length - 2;
          if (i === 1) l.children = t;
          else if (1 < i) {
            for (var s = Array(i), d = 0; d < i; d++) s[d] = arguments[d + 2];
            l.children = s;
          }
          if (e && e.defaultProps)
            for (r in ((i = e.defaultProps), i)) l[r] === void 0 && (l[r] = i[r]);
          return {
            $$typeof: zt,
            type: e,
            key: u,
            ref: o,
            props: l,
            _owner: su.current,
          };
        }
        function Yf(e, n) {
          return {
            $$typeof: zt,
            type: e.type,
            key: n,
            ref: e.ref,
            props: e.props,
            _owner: e._owner,
          };
        }
        function au(e) {
          return typeof e === "object" && e !== null && e.$$typeof === zt;
        }
        function qf(e) {
          var n = { "=": "=0", ":": "=2" };
          return (
            "$" +
            e.replace(/[=:]/g, function (t) {
              return n[t];
            })
          );
        }
        var $i = /\/+/g;
        function uu(e, n) {
          return typeof e === "object" && e !== null && e.key != null
            ? qf("" + e.key)
            : n.toString(36);
        }
        function Lr(e, n, t, r, l) {
          var u = typeof e;
          if (u === "undefined" || u === "boolean") e = null;
          var o = !1;
          if (e === null) o = !0;
          else
            switch (u) {
              case "string":
              case "number":
                o = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case zt:
                  case Wf:
                    o = !0;
                }
            }
          if (o)
            return (
              (o = e),
              (l = l(o)),
              (e = r === "" ? "." + uu(o, 0) : r),
              ji(l)
                ? ((t = ""),
                  e != null && (t = e.replace($i, "$&/") + "/"),
                  Lr(l, n, t, "", function (d) {
                    return d;
                  }))
                : l != null &&
                  (au(l) &&
                    (l = Yf(
                      l,
                      t +
                        (!l.key || (o && o.key === l.key)
                          ? ""
                          : ("" + l.key).replace($i, "$&/") + "/") +
                        e,
                    )),
                  n.push(l)),
              1
            );
          if (((o = 0), (r = r === "" ? "." : r + ":"), ji(e)))
            for (var i = 0; i < e.length; i++) {
              u = e[i];
              var s = r + uu(u, i);
              o += Lr(u, n, t, s, l);
            }
          else if (((s = Jf(e)), typeof s === "function"))
            for (e = s.call(e), i = 0; !(u = e.next()).done;)
              ((u = u.value), (s = r + uu(u, i++)), (o += Lr(u, n, t, s, l)));
          else if (u === "object")
            throw (
              (n = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  (n === "[object Object]"
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : n) +
                  "). If you meant to render a collection of children, use an array instead.",
              )
            );
          return o;
        }
        function zr(e, n, t) {
          if (e == null) return e;
          var r = [],
            l = 0;
          return (
            Lr(e, r, "", "", function (u) {
              return n.call(t, u, l++);
            }),
            r
          );
        }
        function bf(e) {
          if (e._status === -1) {
            var n = e._result;
            ((n = n()),
              n.then(
                function (t) {
                  if (e._status === 0 || e._status === -1)
                    ((e._status = 1), (e._result = t));
                },
                function (t) {
                  if (e._status === 0 || e._status === -1)
                    ((e._status = 2), (e._result = t));
                },
              ),
              e._status === -1 && ((e._status = 0), (e._result = n)));
          }
          if (e._status === 1) return e._result.default;
          throw e._result;
        }
        var ce = { current: null },
          Tr = { transition: null },
          ed = {
            ReactCurrentDispatcher: ce,
            ReactCurrentBatchConfig: Tr,
            ReactCurrentOwner: su,
          };
        function bi() {
          throw Error("act(...) is not supported in production builds of React.");
        }
        nd.Children = {
          map: zr,
          forEach: function (e, n, t) {
            zr(
              e,
              function () {
                n.apply(this, arguments);
              },
              t,
            );
          },
          count: function (e) {
            var n = 0;
            return (
              zr(e, function () {
                n++;
              }),
              n
            );
          },
          toArray: function (e) {
            return (
              zr(e, function (n) {
                return n;
              }) || []
            );
          },
          only: function (e) {
            if (!au(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        };
        nd.Component = Jn;
        nd.Fragment = Qf;
        nd.Profiler = Hf;
        nd.PureComponent = ou;
        nd.StrictMode = Af;
        nd.Suspense = Xf;
        nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ed;
        nd.act = bi;
        nd.cloneElement = function (e, n, t) {
          if (e === null || e === void 0)
            throw Error(
              "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                ".",
            );
          var r = Xi({}, e.props),
            l = e.key,
            u = e.ref,
            o = e._owner;
          if (n != null) {
            if (
              (n.ref !== void 0 && ((u = n.ref), (o = su.current)),
              n.key !== void 0 && (l = "" + n.key),
              e.type && e.type.defaultProps)
            )
              var i = e.type.defaultProps;
            for (s in n)
              Ji.call(n, s) &&
                !Yi.hasOwnProperty(s) &&
                (r[s] = n[s] === void 0 && i !== void 0 ? i[s] : n[s]);
          }
          var s = arguments.length - 2;
          if (s === 1) r.children = t;
          else if (1 < s) {
            i = Array(s);
            for (var d = 0; d < s; d++) i[d] = arguments[d + 2];
            r.children = i;
          }
          return { $$typeof: zt, type: e.type, key: l, ref: u, props: r, _owner: o };
        };
        nd.createContext = function (e) {
          return (
            (e = {
              $$typeof: $f,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null,
            }),
            (e.Provider = { $$typeof: jf, _context: e }),
            (e.Consumer = e)
          );
        };
        nd.createElement = qi;
        nd.createFactory = function (e) {
          var n = qi.bind(null, e);
          return ((n.type = e), n);
        };
        nd.createRef = function () {
          return { current: null };
        };
        nd.forwardRef = function (e) {
          return { $$typeof: Kf, render: e };
        };
        nd.isValidElement = au;
        nd.lazy = function (e) {
          return { $$typeof: Gf, _payload: { _status: -1, _result: e }, _init: bf };
        };
        nd.memo = function (e, n) {
          return { $$typeof: Zf, type: e, compare: n === void 0 ? null : n };
        };
        nd.startTransition = function (e) {
          var n = Tr.transition;
          Tr.transition = {};
          try {
            e();
          } finally {
            Tr.transition = n;
          }
        };
        nd.unstable_act = bi;
        nd.useCallback = function (e, n) {
          return ce.current.useCallback(e, n);
        };
        nd.useContext = function (e) {
          return ce.current.useContext(e);
        };
        nd.useDebugValue = function () {};
        nd.useDeferredValue = function (e) {
          return ce.current.useDeferredValue(e);
        };
        nd.useEffect = function (e, n) {
          return ce.current.useEffect(e, n);
        };
        nd.useId = function () {
          return ce.current.useId();
        };
        nd.useImperativeHandle = function (e, n, t) {
          return ce.current.useImperativeHandle(e, n, t);
        };
        nd.useInsertionEffect = function (e, n) {
          return ce.current.useInsertionEffect(e, n);
        };
        nd.useLayoutEffect = function (e, n) {
          return ce.current.useLayoutEffect(e, n);
        };
        nd.useMemo = function (e, n) {
          return ce.current.useMemo(e, n);
        };
        nd.useReducer = function (e, n, t) {
          return ce.current.useReducer(e, n, t);
        };
        nd.useRef = function (e) {
          return ce.current.useRef(e);
        };
        nd.useState = function (e) {
          return ce.current.useState(e);
        };
        nd.useSyncExternalStore = function (e, n, t) {
          return ce.current.useSyncExternalStore(e, n, t);
        };
        nd.useTransition = function () {
          return ce.current.useTransition();
        };
        nd.version = "18.3.1";
      });
      var os = Pr((Bd) => {
        function fu(e, n) {
          var t = e.length;
          e.push(n);
          e: for (; 0 < t;) {
            var r = (t - 1) >>> 1,
              l = e[r];
            if (0 < Rr(l, n)) ((e[r] = n), (e[t] = l), (t = r));
            else break e;
          }
        }
        function Fe(e) {
          return e.length === 0 ? null : e[0];
        }
        function Dr(e) {
          if (e.length === 0) return null;
          var n = e[0],
            t = e.pop();
          if (t !== n) {
            e[0] = t;
            e: for (var r = 0, l = e.length, u = l >>> 1; r < u;) {
              var o = 2 * (r + 1) - 1,
                i = e[o],
                s = o + 1,
                d = e[s];
              if (0 > Rr(i, t))
                s < l && 0 > Rr(d, i)
                  ? ((e[r] = d), (e[s] = t), (r = s))
                  : ((e[r] = i), (e[o] = t), (r = o));
              else if (s < l && 0 > Rr(d, t)) ((e[r] = d), (e[s] = t), (r = s));
              else break e;
            }
          }
          return n;
        }
        function Rr(e, n) {
          var t = e.sortIndex - n.sortIndex;
          return t !== 0 ? t : e.id - n.id;
        }
        if (typeof performance === "object" && typeof performance.now === "function")
          ((du = performance),
            (Bd.unstable_now = function () {
              return du.now();
            }));
        else
          ((Ir = Date),
            (pu = Ir.now()),
            (Bd.unstable_now = function () {
              return Ir.now() - pu;
            }));
        var du,
          Ir,
          pu,
          Ae = [],
          sn = [],
          Vd = 1,
          Ne = null,
          le = 3,
          Mr = !1,
          In = !1,
          Rt = !1,
          ns = typeof setTimeout === "function" ? setTimeout : null,
          ts = typeof clearTimeout === "function" ? clearTimeout : null,
          es = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function hu(e) {
          for (var n = Fe(sn); n !== null;) {
            if (n.callback === null) Dr(sn);
            else if (n.startTime <= e)
              (Dr(sn), (n.sortIndex = n.expirationTime), fu(Ae, n));
            else break;
            n = Fe(sn);
          }
        }
        function mu(e) {
          if (((Rt = !1), hu(e), !In))
            if (Fe(Ae) !== null) ((In = !0), gu(yu));
            else {
              var n = Fe(sn);
              n !== null && wu(mu, n.startTime - e);
            }
        }
        function yu(e, n) {
          ((In = !1), Rt && ((Rt = !1), ts(It), (It = -1)), (Mr = !0));
          var t = le;
          try {
            hu(n);
            for (
              Ne = Fe(Ae);
              Ne !== null && (!(Ne.expirationTime > n) || (e && !us()));
            ) {
              var r = Ne.callback;
              if (typeof r === "function") {
                ((Ne.callback = null), (le = Ne.priorityLevel));
                var l = r(Ne.expirationTime <= n);
                ((n = Bd.unstable_now()),
                  typeof l === "function"
                    ? (Ne.callback = l)
                    : Ne === Fe(Ae) && Dr(Ae),
                  hu(n));
              } else Dr(Ae);
              Ne = Fe(Ae);
            }
            if (Ne !== null) var u = !0;
            else {
              var o = Fe(sn);
              (o !== null && wu(mu, o.startTime - n), (u = !1));
            }
            return u;
          } finally {
            ((Ne = null), (le = t), (Mr = !1));
          }
        }
        var Ur = !1,
          Or = null,
          It = -1,
          rs = 5,
          ls = -1;
        function us() {
          return Bd.unstable_now() - ls < rs ? !1 : !0;
        }
        function cu() {
          if (Or !== null) {
            var e = Bd.unstable_now();
            ls = e;
            var n = !0;
            try {
              n = Or(!0, e);
            } finally {
              n ? Tt() : ((Ur = !1), (Or = null));
            }
          } else Ur = !1;
        }
        var Tt;
        if (typeof es === "function")
          Tt = function () {
            es(cu);
          };
        else if (typeof MessageChannel < "u")
          ((Fr = new MessageChannel()),
            (vu = Fr.port2),
            (Fr.port1.onmessage = cu),
            (Tt = function () {
              vu.postMessage(null);
            }));
        else
          Tt = function () {
            ns(cu, 0);
          };
        var Fr, vu;
        function gu(e) {
          ((Or = e), Ur || ((Ur = !0), Tt()));
        }
        function wu(e, n) {
          It = ns(function () {
            e(Bd.unstable_now());
          }, n);
        }
        Bd.unstable_IdlePriority = 5;
        Bd.unstable_ImmediatePriority = 1;
        Bd.unstable_LowPriority = 4;
        Bd.unstable_NormalPriority = 3;
        Bd.unstable_Profiling = null;
        Bd.unstable_UserBlockingPriority = 2;
        Bd.unstable_cancelCallback = function (e) {
          e.callback = null;
        };
        Bd.unstable_continueExecution = function () {
          In || Mr || ((In = !0), gu(yu));
        };
        Bd.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
              )
            : (rs = 0 < e ? Math.floor(1000 / e) : 5);
        };
        Bd.unstable_getCurrentPriorityLevel = function () {
          return le;
        };
        Bd.unstable_getFirstCallbackNode = function () {
          return Fe(Ae);
        };
        Bd.unstable_next = function (e) {
          switch (le) {
            case 1:
            case 2:
            case 3:
              var n = 3;
              break;
            default:
              n = le;
          }
          var t = le;
          le = n;
          try {
            return e();
          } finally {
            le = t;
          }
        };
        Bd.unstable_pauseExecution = function () {};
        Bd.unstable_requestPaint = function () {};
        Bd.unstable_runWithPriority = function (e, n) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var t = le;
          le = e;
          try {
            return n();
          } finally {
            le = t;
          }
        };
        Bd.unstable_scheduleCallback = function (e, n, t) {
          var r = Bd.unstable_now();
          switch (
            (typeof t === "object" && t !== null
              ? ((t = t.delay), (t = typeof t === "number" && 0 < t ? r + t : r))
              : (t = r),
            e)
          ) {
            case 1:
              var l = -1;
              break;
            case 2:
              l = 250;
              break;
            case 5:
              l = 1073741823;
              break;
            case 4:
              l = 1e4;
              break;
            default:
              l = 5000;
          }
          return (
            (l = t + l),
            (e = {
              id: Vd++,
              callback: n,
              priorityLevel: e,
              startTime: t,
              expirationTime: l,
              sortIndex: -1,
            }),
            t > r
              ? ((e.sortIndex = t),
                fu(sn, e),
                Fe(Ae) === null &&
                  e === Fe(sn) &&
                  (Rt ? (ts(It), (It = -1)) : (Rt = !0), wu(mu, t - r)))
              : ((e.sortIndex = l), fu(Ae, e), In || Mr || ((In = !0), gu(yu))),
            e
          );
        };
        Bd.unstable_shouldYield = us;
        Bd.unstable_wrapCallback = function (e) {
          var n = le;
          return function () {
            var t = le;
            le = n;
            try {
              return e.apply(this, arguments);
            } finally {
              le = t;
            }
          };
        };
      });
      var xi = {};
      Vf(xi, {
        version: () => Sf,
        unstable_renderSubtreeIntoContainer: () => kf,
        unstable_batchedUpdates: () => wf,
        unmountComponentAtNode: () => gf,
        render: () => yf,
        hydrateRoot: () => mf,
        hydrate: () => vf,
        flushSync: () => hf,
        findDOMNode: () => pf,
        createRoot: () => df,
        createPortal: () => ff,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => cf,
      });
      function y(e) {
        for (
          var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1;
          t < arguments.length;
          t++
        )
          n += "&args[]=" + encodeURIComponent(arguments[t]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          n +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      function Kn(e, n) {
        (gt(e, n), gt(e + "Capture", n));
      }
      function gt(e, n) {
        rr[e] = n;
        for (e = 0; e < n.length; e++) da.add(n[e]);
      }
      function up(e) {
        if (Qu.call(ss, e)) return !0;
        if (Qu.call(is, e)) return !1;
        if (lp.test(e)) return (ss[e] = !0);
        return ((is[e] = !0), !1);
      }
      function op(e, n, t, r) {
        if (t !== null && t.type === 0) return !1;
        switch (typeof n) {
          case "function":
          case "symbol":
            return !0;
          case "boolean":
            if (r) return !1;
            if (t !== null) return !t.acceptsBooleans;
            return (
              (e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-"
            );
          default:
            return !1;
        }
      }
      function ip(e, n, t, r) {
        if (n === null || typeof n > "u" || op(e, n, t, r)) return !0;
        if (r) return !1;
        if (t !== null)
          switch (t.type) {
            case 3:
              return !n;
            case 4:
              return n === !1;
            case 5:
              return isNaN(n);
            case 6:
              return isNaN(n) || 1 > n;
          }
        return !1;
      }
      function pe(e, n, t, r, l, u, o) {
        ((this.acceptsBooleans = n === 2 || n === 3 || n === 4),
          (this.attributeName = r),
          (this.attributeNamespace = l),
          (this.mustUseProperty = t),
          (this.propertyName = e),
          (this.type = n),
          (this.sanitizeURL = u),
          (this.removeEmptyString = o));
      }
      function Uo(e) {
        return e[1].toUpperCase();
      }
      function Vo(e, n, t, r) {
        var l = re.hasOwnProperty(n) ? re[n] : null;
        if (
          l !== null
            ? l.type !== 0
            : r ||
              !(2 < n.length) ||
              (n[0] !== "o" && n[0] !== "O") ||
              (n[1] !== "n" && n[1] !== "N")
        )
          (ip(n, t, l, r) && (t = null),
            r || l === null
              ? up(n) &&
                (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
              : l.mustUseProperty
                ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
                : ((n = l.attributeName),
                  (r = l.attributeNamespace),
                  t === null
                    ? e.removeAttribute(n)
                    : ((l = l.type),
                      (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
                      r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
      }
      function Ot(e) {
        if (e === null || typeof e !== "object") return null;
        return (
          (e = (as && e[as]) || e["@@iterator"]),
          typeof e === "function" ? e : null
        );
      }
      function Wt(e) {
        if (ku === void 0)
          try {
            throw Error();
          } catch (t) {
            var n = t.stack.trim().match(/\n( *(at )?)/);
            ku = (n && n[1]) || "";
          }
        return (
          `
      ` +
          ku +
          e
        );
      }
      function Eu(e, n) {
        if (!e || Su) return "";
        Su = !0;
        var t = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (n)
            if (
              ((n = function () {
                throw Error();
              }),
              Object.defineProperty(n.prototype, "props", {
                set: function () {
                  throw Error();
                },
              }),
              typeof Reflect === "object" && Reflect.construct)
            ) {
              try {
                Reflect.construct(n, []);
              } catch (d) {
                var r = d;
              }
              Reflect.construct(e, [], n);
            } else {
              try {
                n.call();
              } catch (d) {
                r = d;
              }
              e.call(n.prototype);
            }
          else {
            try {
              throw Error();
            } catch (d) {
              r = d;
            }
            e();
          }
        } catch (d) {
          if (d && r && typeof d.stack === "string") {
            for (
              var l = d.stack.split(`
      `),
                u = r.stack.split(`
      `),
                o = l.length - 1,
                i = u.length - 1;
              1 <= o && 0 <= i && l[o] !== u[i];
            )
              i--;
            for (; 1 <= o && 0 <= i; o--, i--)
              if (l[o] !== u[i]) {
                if (o !== 1 || i !== 1)
                  do
                    if ((o--, i--, 0 > i || l[o] !== u[i])) {
                      var s =
                        `
      ` + l[o].replace(" at new ", " at ");
                      return (
                        e.displayName &&
                          s.includes("<anonymous>") &&
                          (s = s.replace("<anonymous>", e.displayName)),
                        s
                      );
                    }
                  while (1 <= o && 0 <= i);
                break;
              }
          }
        } finally {
          ((Su = !1), (Error.prepareStackTrace = t));
        }
        return (e = e ? e.displayName || e.name : "") ? Wt(e) : "";
      }
      function sp(e) {
        switch (e.tag) {
          case 5:
            return Wt(e.type);
          case 16:
            return Wt("Lazy");
          case 13:
            return Wt("Suspense");
          case 19:
            return Wt("SuspenseList");
          case 0:
          case 2:
          case 15:
            return ((e = Eu(e.type, !1)), e);
          case 11:
            return ((e = Eu(e.type.render, !1)), e);
          case 1:
            return ((e = Eu(e.type, !0)), e);
          default:
            return "";
        }
      }
      function $u(e) {
        if (e == null) return null;
        if (typeof e === "function") return e.displayName || e.name || null;
        if (typeof e === "string") return e;
        switch (e) {
          case nt:
            return "Fragment";
          case et:
            return "Portal";
          case Au:
            return "Profiler";
          case Bo:
            return "StrictMode";
          case Hu:
            return "Suspense";
          case ju:
            return "SuspenseList";
        }
        if (typeof e === "object")
          switch (e.$$typeof) {
            case ha:
              return (e.displayName || "Context") + ".Consumer";
            case pa:
              return (e._context.displayName || "Context") + ".Provider";
            case Wo:
              var n = e.render;
              return (
                (e = e.displayName),
                e ||
                  ((e = n.displayName || n.name || ""),
                  (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                e
              );
            case Qo:
              return (
                (n = e.displayName || null),
                n !== null ? n : $u(e.type) || "Memo"
              );
            case cn:
              ((n = e._payload), (e = e._init));
              try {
                return $u(e(n));
              } catch (t) {}
          }
        return null;
      }
      function ap(e) {
        var n = e.type;
        switch (e.tag) {
          case 24:
            return "Cache";
          case 9:
            return (n.displayName || "Context") + ".Consumer";
          case 10:
            return (n._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return (
              (e = n.render),
              (e = e.displayName || e.name || ""),
              n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
          case 7:
            return "Fragment";
          case 5:
            return n;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return $u(n);
          case 8:
            return n === Bo ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if (typeof n === "function") return n.displayName || n.name || null;
            if (typeof n === "string") return n;
        }
        return null;
      }
      function Cn(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return e;
          case "object":
            return e;
          default:
            return "";
        }
      }
      function ma(e) {
        var n = e.type;
        return (
          (e = e.nodeName) &&
          e.toLowerCase() === "input" &&
          (n === "checkbox" || n === "radio")
        );
      }
      function cp(e) {
        var n = ma(e) ? "checked" : "value",
          t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
          r = "" + e[n];
        if (
          !e.hasOwnProperty(n) &&
          typeof t < "u" &&
          typeof t.get === "function" &&
          typeof t.set === "function"
        ) {
          var { get: l, set: u } = t;
          return (
            Object.defineProperty(e, n, {
              configurable: !0,
              get: function () {
                return l.call(this);
              },
              set: function (o) {
                ((r = "" + o), u.call(this, o));
              },
            }),
            Object.defineProperty(e, n, { enumerable: t.enumerable }),
            {
              getValue: function () {
                return r;
              },
              setValue: function (o) {
                r = "" + o;
              },
              stopTracking: function () {
                ((e._valueTracker = null), delete e[n]);
              },
            }
          );
        }
      }
      function Br(e) {
        e._valueTracker || (e._valueTracker = cp(e));
      }
      function ya(e) {
        if (!e) return !1;
        var n = e._valueTracker;
        if (!n) return !0;
        var t = n.getValue(),
          r = "";
        return (
          e && (r = ma(e) ? (e.checked ? "true" : "false") : e.value),
          (e = r),
          e !== t ? (n.setValue(e), !0) : !1
        );
      }
      function cl(e) {
        if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
          return null;
        try {
          return e.activeElement || e.body;
        } catch (n) {
          return e.body;
        }
      }
      function Ku(e, n) {
        var t = n.checked;
        return j({}, n, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: t != null ? t : e._wrapperState.initialChecked,
        });
      }
      function cs(e, n) {
        var t = n.defaultValue == null ? "" : n.defaultValue,
          r = n.checked != null ? n.checked : n.defaultChecked;
        ((t = Cn(n.value != null ? n.value : t)),
          (e._wrapperState = {
            initialChecked: r,
            initialValue: t,
            controlled:
              n.type === "checkbox" || n.type === "radio"
                ? n.checked != null
                : n.value != null,
          }));
      }
      function ga(e, n) {
        ((n = n.checked), n != null && Vo(e, "checked", n, !1));
      }
      function Xu(e, n) {
        ga(e, n);
        var t = Cn(n.value),
          r = n.type;
        if (t != null)
          if (r === "number") {
            if ((t === 0 && e.value === "") || e.value != t) e.value = "" + t;
          } else e.value !== "" + t && (e.value = "" + t);
        else if (r === "submit" || r === "reset") {
          e.removeAttribute("value");
          return;
        }
        (n.hasOwnProperty("value")
          ? Zu(e, n.type, t)
          : n.hasOwnProperty("defaultValue") && Zu(e, n.type, Cn(n.defaultValue)),
          n.checked == null &&
            n.defaultChecked != null &&
            (e.defaultChecked = !!n.defaultChecked));
      }
      function fs(e, n, t) {
        if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
          var r = n.type;
          if (!(
            (r !== "submit" && r !== "reset") ||
            (n.value !== void 0 && n.value !== null)
          ))
            return;
          ((n = "" + e._wrapperState.initialValue),
            t || n === e.value || (e.value = n),
            (e.defaultValue = n));
        }
        ((t = e.name),
          t !== "" && (e.name = ""),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          t !== "" && (e.name = t));
      }
      function Zu(e, n, t) {
        if (n !== "number" || cl(e.ownerDocument) !== e)
          t == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + t && (e.defaultValue = "" + t);
      }
      function dt(e, n, t, r) {
        if (((e = e.options), n)) {
          n = {};
          for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
          for (t = 0; t < e.length; t++)
            ((l = n.hasOwnProperty("$" + e[t].value)),
              e[t].selected !== l && (e[t].selected = l),
              l && r && (e[t].defaultSelected = !0));
        } else {
          ((t = "" + Cn(t)), (n = null));
          for (l = 0; l < e.length; l++) {
            if (e[l].value === t) {
              ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
              return;
            }
            n !== null || e[l].disabled || (n = e[l]);
          }
          n !== null && (n.selected = !0);
        }
      }
      function Gu(e, n) {
        if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
        return j({}, n, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue,
        });
      }
      function ds(e, n) {
        var t = n.value;
        if (t == null) {
          if (((t = n.children), (n = n.defaultValue), t != null)) {
            if (n != null) throw Error(y(92));
            if (Qt(t)) {
              if (1 < t.length) throw Error(y(93));
              t = t[0];
            }
            n = t;
          }
          (n == null && (n = ""), (t = n));
        }
        e._wrapperState = { initialValue: Cn(t) };
      }
      function wa(e, n) {
        var t = Cn(n.value),
          r = Cn(n.defaultValue);
        (t != null &&
          ((t = "" + t),
          t !== e.value && (e.value = t),
          n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
          r != null && (e.defaultValue = "" + r));
      }
      function ps(e) {
        var n = e.textContent;
        n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
      }
      function ka(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function Ju(e, n) {
        return e == null || e === "http://www.w3.org/1999/xhtml"
          ? ka(n)
          : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
            ? "http://www.w3.org/1999/xhtml"
            : e;
      }
      function lr(e, n) {
        if (n) {
          var t = e.firstChild;
          if (t && t === e.lastChild && t.nodeType === 3) {
            t.nodeValue = n;
            return;
          }
        }
        e.textContent = n;
      }
      function Ea(e, n, t) {
        return n == null || typeof n === "boolean" || n === ""
          ? ""
          : t || typeof n !== "number" || n === 0 || (Zt.hasOwnProperty(e) && Zt[e])
            ? ("" + n).trim()
            : n + "px";
      }
      function _a(e, n) {
        e = e.style;
        for (var t in n)
          if (n.hasOwnProperty(t)) {
            var r = t.indexOf("--") === 0,
              l = Ea(t, n[t], r);
            (t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l));
          }
      }
      function Yu(e, n) {
        if (n) {
          if (dp[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
            throw Error(y(137, e));
          if (n.dangerouslySetInnerHTML != null) {
            if (n.children != null) throw Error(y(60));
            if (
              typeof n.dangerouslySetInnerHTML !== "object" ||
              !("__html" in n.dangerouslySetInnerHTML)
            )
              throw Error(y(61));
          }
          if (n.style != null && typeof n.style !== "object") throw Error(y(62));
        }
      }
      function qu(e, n) {
        if (e.indexOf("-") === -1) return typeof n.is === "string";
        switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      function Ao(e) {
        return (
          (e = e.target || e.srcElement || window),
          e.correspondingUseElement && (e = e.correspondingUseElement),
          e.nodeType === 3 ? e.parentNode : e
        );
      }
      function hs(e) {
        if ((e = Er(e))) {
          if (typeof eo !== "function") throw Error(y(280));
          var n = e.stateNode;
          n && ((n = Vl(n)), eo(e.stateNode, e.type, n));
        }
      }
      function Ca(e) {
        pt ? (ht ? ht.push(e) : (ht = [e])) : (pt = e);
      }
      function Na() {
        if (pt) {
          var e = pt,
            n = ht;
          if (((ht = pt = null), hs(e), n)) for (e = 0; e < n.length; e++) hs(n[e]);
        }
      }
      function xa(e, n) {
        return e(n);
      }
      function Pa() {}
      function za(e, n, t) {
        if (_u) return e(n, t);
        _u = !0;
        try {
          return xa(e, n, t);
        } finally {
          if (((_u = !1), pt !== null || ht !== null)) (Pa(), Na());
        }
      }
      function ur(e, n) {
        var t = e.stateNode;
        if (t === null) return null;
        var r = Vl(t);
        if (r === null) return null;
        t = r[n];
        e: switch (n) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            ((r = !r.disabled) ||
              ((e = e.type),
              (r = !(
                e === "button" ||
                e === "input" ||
                e === "select" ||
                e === "textarea"
              ))),
              (e = !r));
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (t && typeof t !== "function") throw Error(y(231, n, typeof t));
        return t;
      }
      function pp(e, n, t, r, l, u, o, i, s) {
        var d = Array.prototype.slice.call(arguments, 3);
        try {
          n.apply(t, d);
        } catch (v) {
          this.onError(v);
        }
      }
      function vp(e, n, t, r, l, u, o, i, s) {
        ((Gt = !1), (fl = null), pp.apply(hp, arguments));
      }
      function mp(e, n, t, r, l, u, o, i, s) {
        if ((vp.apply(this, arguments), Gt)) {
          if (Gt) {
            var d = fl;
            ((Gt = !1), (fl = null));
          } else throw Error(y(198));
          dl || ((dl = !0), (to = d));
        }
      }
      function Xn(e) {
        var n = e,
          t = e;
        if (e.alternate) for (; n.return;) n = n.return;
        else {
          e = n;
          do ((n = e), (n.flags & 4098) !== 0 && (t = n.return), (e = n.return));
          while (e);
        }
        return n.tag === 3 ? t : null;
      }
      function La(e) {
        if (e.tag === 13) {
          var n = e.memoizedState;
          if (
            (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
            n !== null)
          )
            return n.dehydrated;
        }
        return null;
      }
      function vs(e) {
        if (Xn(e) !== e) throw Error(y(188));
      }
      function yp(e) {
        var n = e.alternate;
        if (!n) {
          if (((n = Xn(e)), n === null)) throw Error(y(188));
          return n !== e ? null : e;
        }
        for (var t = e, r = n; ;) {
          var l = t.return;
          if (l === null) break;
          var u = l.alternate;
          if (u === null) {
            if (((r = l.return), r !== null)) {
              t = r;
              continue;
            }
            break;
          }
          if (l.child === u.child) {
            for (u = l.child; u;) {
              if (u === t) return (vs(l), e);
              if (u === r) return (vs(l), n);
              u = u.sibling;
            }
            throw Error(y(188));
          }
          if (t.return !== r.return) ((t = l), (r = u));
          else {
            for (var o = !1, i = l.child; i;) {
              if (i === t) {
                ((o = !0), (t = l), (r = u));
                break;
              }
              if (i === r) {
                ((o = !0), (r = l), (t = u));
                break;
              }
              i = i.sibling;
            }
            if (!o) {
              for (i = u.child; i;) {
                if (i === t) {
                  ((o = !0), (t = u), (r = l));
                  break;
                }
                if (i === r) {
                  ((o = !0), (r = u), (t = l));
                  break;
                }
                i = i.sibling;
              }
              if (!o) throw Error(y(189));
            }
          }
          if (t.alternate !== r) throw Error(y(190));
        }
        if (t.tag !== 3) throw Error(y(188));
        return t.stateNode.current === t ? e : n;
      }
      function Ta(e) {
        return ((e = yp(e)), e !== null ? Ra(e) : null);
      }
      function Ra(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null;) {
          var n = Ra(e);
          if (n !== null) return n;
          e = e.sibling;
        }
        return null;
      }
      function Ep(e) {
        if (Ke && typeof Ke.onCommitFiberRoot === "function")
          try {
            Ke.onCommitFiberRoot(Fl, e, void 0, (e.current.flags & 128) === 128);
          } catch (n) {}
      }
      function Np(e) {
        return ((e >>>= 0), e === 0 ? 32 : (31 - ((_p(e) / Cp) | 0)) | 0);
      }
      function At(e) {
        switch (e & -e) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return e & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return e & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return e;
        }
      }
      function hl(e, n) {
        var t = e.pendingLanes;
        if (t === 0) return 0;
        var r = 0,
          l = e.suspendedLanes,
          u = e.pingedLanes,
          o = t & 268435455;
        if (o !== 0) {
          var i = o & ~l;
          i !== 0 ? (r = At(i)) : ((u &= o), u !== 0 && (r = At(u)));
        } else ((o = t & ~l), o !== 0 ? (r = At(o)) : u !== 0 && (r = At(u)));
        if (r === 0) return 0;
        if (
          n !== 0 &&
          n !== r &&
          (n & l) === 0 &&
          ((l = r & -r), (u = n & -n), l >= u || (l === 16 && (u & 4194240) !== 0))
        )
          return n;
        if (((r & 4) !== 0 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
          for (e = e.entanglements, n &= r; 0 < n;)
            ((t = 31 - Be(n)), (l = 1 << t), (r |= e[t]), (n &= ~l));
        return r;
      }
      function xp(e, n) {
        switch (e) {
          case 1:
          case 2:
          case 4:
            return n + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return n + 5000;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function Pp(e, n) {
        for (
          var {
            suspendedLanes: t,
            pingedLanes: r,
            expirationTimes: l,
            pendingLanes: u,
          } = e;
          0 < u;
        ) {
          var o = 31 - Be(u),
            i = 1 << o,
            s = l[o];
          if (s === -1) {
            if ((i & t) === 0 || (i & r) !== 0) l[o] = xp(i, n);
          } else s <= n && (e.expiredLanes |= i);
          u &= ~i;
        }
      }
      function ro(e) {
        return (
          (e = e.pendingLanes & -1073741825),
          e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
        );
      }
      function Da() {
        var e = Qr;
        return ((Qr <<= 1), (Qr & 4194240) === 0 && (Qr = 64), e);
      }
      function Cu(e) {
        for (var n = [], t = 0; 31 > t; t++) n.push(e);
        return n;
      }
      function kr(e, n, t) {
        ((e.pendingLanes |= n),
          n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
          (e = e.eventTimes),
          (n = 31 - Be(n)),
          (e[n] = t));
      }
      function zp(e, n) {
        var t = e.pendingLanes & ~n;
        ((e.pendingLanes = n),
          (e.suspendedLanes = 0),
          (e.pingedLanes = 0),
          (e.expiredLanes &= n),
          (e.mutableReadLanes &= n),
          (e.entangledLanes &= n),
          (n = e.entanglements));
        var r = e.eventTimes;
        for (e = e.expirationTimes; 0 < t;) {
          var l = 31 - Be(t),
            u = 1 << l;
          ((n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~u));
        }
      }
      function jo(e, n) {
        var t = (e.entangledLanes |= n);
        for (e = e.entanglements; t;) {
          var r = 31 - Be(t),
            l = 1 << r;
          ((l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l));
        }
      }
      function Ma(e) {
        return (
          (e &= -e),
          1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
        );
      }
      function ys(e, n) {
        switch (e) {
          case "focusin":
          case "focusout":
            mn = null;
            break;
          case "dragenter":
          case "dragleave":
            yn = null;
            break;
          case "mouseover":
          case "mouseout":
            gn = null;
            break;
          case "pointerover":
          case "pointerout":
            or.delete(n.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            ir.delete(n.pointerId);
        }
      }
      function Ft(e, n, t, r, l, u) {
        if (e === null || e.nativeEvent !== u)
          return (
            (e = {
              blockedOn: n,
              domEventName: t,
              eventSystemFlags: r,
              nativeEvent: u,
              targetContainers: [l],
            }),
            n !== null && ((n = Er(n)), n !== null && $o(n)),
            e
          );
        return (
          (e.eventSystemFlags |= r),
          (n = e.targetContainers),
          l !== null && n.indexOf(l) === -1 && n.push(l),
          e
        );
      }
      function Tp(e, n, t, r, l) {
        switch (n) {
          case "focusin":
            return ((mn = Ft(mn, e, n, t, r, l)), !0);
          case "dragenter":
            return ((yn = Ft(yn, e, n, t, r, l)), !0);
          case "mouseover":
            return ((gn = Ft(gn, e, n, t, r, l)), !0);
          case "pointerover":
            var u = l.pointerId;
            return (or.set(u, Ft(or.get(u) || null, e, n, t, r, l)), !0);
          case "gotpointercapture":
            return (
              (u = l.pointerId),
              ir.set(u, Ft(ir.get(u) || null, e, n, t, r, l)),
              !0
            );
        }
        return !1;
      }
      function Qa(e) {
        var n = Mn(e.target);
        if (n !== null) {
          var t = Xn(n);
          if (t !== null) {
            if (((n = t.tag), n === 13)) {
              if (((n = La(t)), n !== null)) {
                ((e.blockedOn = n),
                  Wa(e.priority, function () {
                    Va(t);
                  }));
                return;
              }
            } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
              e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
              return;
            }
          }
        }
        e.blockedOn = null;
      }
      function br(e) {
        if (e.blockedOn !== null) return !1;
        for (var n = e.targetContainers; 0 < n.length;) {
          var t = uo(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
          if (t === null) {
            t = e.nativeEvent;
            var r = new t.constructor(t.type, t);
            ((bu = r), t.target.dispatchEvent(r), (bu = null));
          } else return ((n = Er(t)), n !== null && $o(n), (e.blockedOn = t), !1);
          n.shift();
        }
        return !0;
      }
      function gs(e, n, t) {
        br(e) && t.delete(n);
      }
      function Rp() {
        ((lo = !1),
          mn !== null && br(mn) && (mn = null),
          yn !== null && br(yn) && (yn = null),
          gn !== null && br(gn) && (gn = null),
          or.forEach(gs),
          ir.forEach(gs));
      }
      function Dt(e, n) {
        e.blockedOn === n &&
          ((e.blockedOn = null),
          lo ||
            ((lo = !0), W.unstable_scheduleCallback(W.unstable_NormalPriority, Rp)));
      }
      function sr(e) {
        function n(l) {
          return Dt(l, e);
        }
        if (0 < Hr.length) {
          Dt(Hr[0], e);
          for (var t = 1; t < Hr.length; t++) {
            var r = Hr[t];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        (mn !== null && Dt(mn, e),
          yn !== null && Dt(yn, e),
          gn !== null && Dt(gn, e),
          or.forEach(n),
          ir.forEach(n));
        for (t = 0; t < dn.length; t++)
          ((r = dn[t]), r.blockedOn === e && (r.blockedOn = null));
        for (; 0 < dn.length && ((t = dn[0]), t.blockedOn === null);)
          (Qa(t), t.blockedOn === null && dn.shift());
      }
      function Ip(e, n, t, r) {
        var l = I,
          u = vt.transition;
        vt.transition = null;
        try {
          ((I = 1), Ko(e, n, t, r));
        } finally {
          ((I = l), (vt.transition = u));
        }
      }
      function Op(e, n, t, r) {
        var l = I,
          u = vt.transition;
        vt.transition = null;
        try {
          ((I = 4), Ko(e, n, t, r));
        } finally {
          ((I = l), (vt.transition = u));
        }
      }
      function Ko(e, n, t, r) {
        if (vl) {
          var l = uo(e, n, t, r);
          if (l === null) (Tu(e, n, r, ml, t), ys(e, r));
          else if (Tp(l, e, n, t, r)) r.stopPropagation();
          else if ((ys(e, r), n & 4 && -1 < Lp.indexOf(e))) {
            for (; l !== null;) {
              var u = Er(l);
              if (
                (u !== null && Ua(u),
                (u = uo(e, n, t, r)),
                u === null && Tu(e, n, r, ml, t),
                u === l)
              )
                break;
              l = u;
            }
            l !== null && r.stopPropagation();
          } else Tu(e, n, r, null, t);
        }
      }
      function uo(e, n, t, r) {
        if (((ml = null), (e = Ao(r)), (e = Mn(e)), e !== null))
          if (((n = Xn(e)), n === null)) e = null;
          else if (((t = n.tag), t === 13)) {
            if (((e = La(n)), e !== null)) return e;
            e = null;
          } else if (t === 3) {
            if (n.stateNode.current.memoizedState.isDehydrated)
              return n.tag === 3 ? n.stateNode.containerInfo : null;
            e = null;
          } else n !== e && (e = null);
        return ((ml = e), null);
      }
      function Aa(e) {
        switch (e) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (kp()) {
              case Ho:
                return 1;
              case Oa:
                return 4;
              case pl:
              case Sp:
                return 16;
              case Fa:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      function Ha() {
        if (el) return el;
        var e,
          n = Xo,
          t = n.length,
          r,
          l = "value" in hn ? hn.value : hn.textContent,
          u = l.length;
        for (e = 0; e < t && n[e] === l[e]; e++);
        var o = t - e;
        for (r = 1; r <= o && n[t - r] === l[u - r]; r++);
        return (el = l.slice(e, 1 < r ? 1 - r : void 0));
      }
      function nl(e) {
        var n = e.keyCode;
        return (
          "charCode" in e
            ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
            : (e = n),
          e === 10 && (e = 13),
          32 <= e || e === 13 ? e : 0
        );
      }
      function jr() {
        return !0;
      }
      function ws() {
        return !1;
      }
      function _e(e) {
        function n(t, r, l, u, o) {
          ((this._reactName = t),
            (this._targetInst = l),
            (this.type = r),
            (this.nativeEvent = u),
            (this.target = o),
            (this.currentTarget = null));
          for (var i in e)
            e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(u) : u[i]));
          return (
            (this.isDefaultPrevented = (
              u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
            )
              ? jr
              : ws),
            (this.isPropagationStopped = ws),
            this
          );
        }
        return (
          j(n.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var t = this.nativeEvent;
              t &&
                (t.preventDefault
                  ? t.preventDefault()
                  : typeof t.returnValue !== "unknown" && (t.returnValue = !1),
                (this.isDefaultPrevented = jr));
            },
            stopPropagation: function () {
              var t = this.nativeEvent;
              t &&
                (t.stopPropagation
                  ? t.stopPropagation()
                  : typeof t.cancelBubble !== "unknown" && (t.cancelBubble = !0),
                (this.isPropagationStopped = jr));
            },
            persist: function () {},
            isPersistent: jr,
          }),
          n
        );
      }
      function Kp(e) {
        var n = this.nativeEvent;
        return n.getModifierState ? n.getModifierState(e) : (e = $p[e]) ? !!n[e] : !1;
      }
      function Go() {
        return Kp;
      }
      function $a(e, n) {
        switch (e) {
          case "keyup":
            return t0.indexOf(n.keyCode) !== -1;
          case "keydown":
            return n.keyCode !== 229;
          case "keypress":
          case "mousedown":
          case "focusout":
            return !0;
          default:
            return !1;
        }
      }
      function Ka(e) {
        return ((e = e.detail), typeof e === "object" && "data" in e ? e.data : null);
      }
      function l0(e, n) {
        switch (e) {
          case "compositionend":
            return Ka(n);
          case "keypress":
            if (n.which !== 32) return null;
            return ((Cs = !0), _s);
          case "textInput":
            return ((e = n.data), e === _s && Cs ? null : e);
          default:
            return null;
        }
      }
      function u0(e, n) {
        if (tt)
          return e === "compositionend" || (!Jo && $a(e, n))
            ? ((e = Ha()), (el = Xo = hn = null), (tt = !1), e)
            : null;
        switch (e) {
          case "paste":
            return null;
          case "keypress":
            if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
              if (n.char && 1 < n.char.length) return n.char;
              if (n.which) return String.fromCharCode(n.which);
            }
            return null;
          case "compositionend":
            return ja && n.locale !== "ko" ? null : n.data;
          default:
            return null;
        }
      }
      function Ns(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase();
        return n === "input" ? !!o0[e.type] : n === "textarea" ? !0 : !1;
      }
      function Xa(e, n, t, r) {
        (Ca(r),
          (n = yl(n, "onChange")),
          0 < n.length &&
            ((t = new Zo("onChange", "change", null, t, r)),
            e.push({ event: t, listeners: n })));
      }
      function i0(e) {
        lc(e, 0);
      }
      function Ml(e) {
        var n = ut(e);
        if (ya(n)) return e;
      }
      function s0(e, n) {
        if (e === "change") return n;
      }
      function xs() {
        Yt && (Yt.detachEvent("onpropertychange", Ga), (ar = Yt = null));
      }
      function Ga(e) {
        if (e.propertyName === "value" && Ml(ar)) {
          var n = [];
          (Xa(n, ar, e, Ao(e)), za(i0, n));
        }
      }
      function a0(e, n, t) {
        e === "focusin"
          ? (xs(), (Yt = n), (ar = t), Yt.attachEvent("onpropertychange", Ga))
          : e === "focusout" && xs();
      }
      function c0(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
          return Ml(ar);
      }
      function f0(e, n) {
        if (e === "click") return Ml(n);
      }
      function d0(e, n) {
        if (e === "input" || e === "change") return Ml(n);
      }
      function p0(e, n) {
        return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
      }
      function cr(e, n) {
        if (Qe(e, n)) return !0;
        if (
          typeof e !== "object" ||
          e === null ||
          typeof n !== "object" ||
          n === null
        )
          return !1;
        var t = Object.keys(e),
          r = Object.keys(n);
        if (t.length !== r.length) return !1;
        for (r = 0; r < t.length; r++) {
          var l = t[r];
          if (!Qu.call(n, l) || !Qe(e[l], n[l])) return !1;
        }
        return !0;
      }
      function Ps(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e;
      }
      function zs(e, n) {
        var t = Ps(e);
        e = 0;
        for (var r; t;) {
          if (t.nodeType === 3) {
            if (((r = e + t.textContent.length), e <= n && r >= n))
              return { node: t, offset: n - e };
            e = r;
          }
          e: {
            for (; t;) {
              if (t.nextSibling) {
                t = t.nextSibling;
                break e;
              }
              t = t.parentNode;
            }
            t = void 0;
          }
          t = Ps(t);
        }
      }
      function Ja(e, n) {
        return e && n
          ? e === n
            ? !0
            : e && e.nodeType === 3
              ? !1
              : n && n.nodeType === 3
                ? Ja(e, n.parentNode)
                : "contains" in e
                  ? e.contains(n)
                  : e.compareDocumentPosition
                    ? !!(e.compareDocumentPosition(n) & 16)
                    : !1
          : !1;
      }
      function Ya() {
        for (var e = window, n = cl(); n instanceof e.HTMLIFrameElement;) {
          try {
            var t = typeof n.contentWindow.location.href === "string";
          } catch (r) {
            t = !1;
          }
          if (t) e = n.contentWindow;
          else break;
          n = cl(e.document);
        }
        return n;
      }
      function Yo(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          n &&
          ((n === "input" &&
            (e.type === "text" ||
              e.type === "search" ||
              e.type === "tel" ||
              e.type === "url" ||
              e.type === "password")) ||
            n === "textarea" ||
            e.contentEditable === "true")
        );
      }
      function h0(e) {
        var n = Ya(),
          t = e.focusedElem,
          r = e.selectionRange;
        if (
          n !== t &&
          t &&
          t.ownerDocument &&
          Ja(t.ownerDocument.documentElement, t)
        ) {
          if (r !== null && Yo(t)) {
            if (
              ((n = r.start),
              (e = r.end),
              e === void 0 && (e = n),
              "selectionStart" in t)
            )
              ((t.selectionStart = n),
                (t.selectionEnd = Math.min(e, t.value.length)));
            else if (
              ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
              e.getSelection)
            ) {
              e = e.getSelection();
              var l = t.textContent.length,
                u = Math.min(r.start, l);
              ((r = r.end === void 0 ? u : Math.min(r.end, l)),
                !e.extend && u > r && ((l = r), (r = u), (u = l)),
                (l = zs(t, u)));
              var o = zs(t, r);
              l &&
                o &&
                (e.rangeCount !== 1 ||
                  e.anchorNode !== l.node ||
                  e.anchorOffset !== l.offset ||
                  e.focusNode !== o.node ||
                  e.focusOffset !== o.offset) &&
                ((n = n.createRange()),
                n.setStart(l.node, l.offset),
                e.removeAllRanges(),
                u > r
                  ? (e.addRange(n), e.extend(o.node, o.offset))
                  : (n.setEnd(o.node, o.offset), e.addRange(n)));
            }
          }
          n = [];
          for (e = t; (e = e.parentNode);)
            e.nodeType === 1 &&
              n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
          typeof t.focus === "function" && t.focus();
          for (t = 0; t < n.length; t++)
            ((e = n[t]),
              (e.element.scrollLeft = e.left),
              (e.element.scrollTop = e.top));
        }
      }
      function Ls(e, n, t) {
        var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
        io ||
          rt == null ||
          rt !== cl(r) ||
          ((r = rt),
          "selectionStart" in r && Yo(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                (r.ownerDocument && r.ownerDocument.defaultView) ||
                window
              ).getSelection()),
              (r = {
                anchorNode: r.anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset,
              })),
          (qt && cr(qt, r)) ||
            ((qt = r),
            (r = yl(oo, "onSelect")),
            0 < r.length &&
              ((n = new Zo("onSelect", "select", null, n, t)),
              e.push({ event: n, listeners: r }),
              (n.target = rt))));
      }
      function $r(e, n) {
        var t = {};
        return (
          (t[e.toLowerCase()] = n.toLowerCase()),
          (t["Webkit" + e] = "webkit" + n),
          (t["Moz" + e] = "moz" + n),
          t
        );
      }
      function Ul(e) {
        if (zu[e]) return zu[e];
        if (!lt[e]) return e;
        var n = lt[e],
          t;
        for (t in n) if (n.hasOwnProperty(t) && t in qa) return (zu[e] = n[t]);
        return e;
      }
      function xn(e, n) {
        (rc.set(e, n), Kn(n, [e]));
      }
      function Rs(e, n, t) {
        var r = e.type || "unknown-event";
        ((e.currentTarget = t), mp(r, n, void 0, e), (e.currentTarget = null));
      }
      function lc(e, n) {
        n = (n & 4) !== 0;
        for (var t = 0; t < e.length; t++) {
          var r = e[t],
            l = r.event;
          r = r.listeners;
          e: {
            var u = void 0;
            if (n)
              for (var o = r.length - 1; 0 <= o; o--) {
                var i = r[o],
                  s = i.instance,
                  d = i.currentTarget;
                if (((i = i.listener), s !== u && l.isPropagationStopped())) break e;
                (Rs(l, i, d), (u = s));
              }
            else
              for (o = 0; o < r.length; o++) {
                if (
                  ((i = r[o]),
                  (s = i.instance),
                  (d = i.currentTarget),
                  (i = i.listener),
                  s !== u && l.isPropagationStopped())
                )
                  break e;
                (Rs(l, i, d), (u = s));
              }
          }
        }
        if (dl) throw ((e = to), (dl = !1), (to = null), e);
      }
      function D(e, n) {
        var t = n[vo];
        t === void 0 && (t = n[vo] = new Set());
        var r = e + "__bubble";
        t.has(r) || (uc(n, e, 2, !1), t.add(r));
      }
      function Lu(e, n, t) {
        var r = 0;
        (n && (r |= 4), uc(t, e, r, n));
      }
      function fr(e) {
        if (!e[Kr]) {
          ((e[Kr] = !0),
            da.forEach(function (t) {
              t !== "selectionchange" && (m0.has(t) || Lu(t, !1, e), Lu(t, !0, e));
            }));
          var n = e.nodeType === 9 ? e : e.ownerDocument;
          n === null || n[Kr] || ((n[Kr] = !0), Lu("selectionchange", !1, n));
        }
      }
      function uc(e, n, t, r) {
        switch (Aa(n)) {
          case 1:
            var l = Ip;
            break;
          case 4:
            l = Op;
            break;
          default:
            l = Ko;
        }
        ((t = l.bind(null, n, t, e)),
          (l = void 0),
          !no ||
            (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
            (l = !0),
          r
            ? l !== void 0
              ? e.addEventListener(n, t, { capture: !0, passive: l })
              : e.addEventListener(n, t, !0)
            : l !== void 0
              ? e.addEventListener(n, t, { passive: l })
              : e.addEventListener(n, t, !1));
      }
      function Tu(e, n, t, r, l) {
        var u = r;
        if ((n & 1) === 0 && (n & 2) === 0 && r !== null)
          e: for (;;) {
            if (r === null) return;
            var o = r.tag;
            if (o === 3 || o === 4) {
              var i = r.stateNode.containerInfo;
              if (i === l || (i.nodeType === 8 && i.parentNode === l)) break;
              if (o === 4)
                for (o = r.return; o !== null;) {
                  var s = o.tag;
                  if (s === 3 || s === 4) {
                    if (
                      ((s = o.stateNode.containerInfo),
                      s === l || (s.nodeType === 8 && s.parentNode === l))
                    )
                      return;
                  }
                  o = o.return;
                }
              for (; i !== null;) {
                if (((o = Mn(i)), o === null)) return;
                if (((s = o.tag), s === 5 || s === 6)) {
                  r = u = o;
                  continue e;
                }
                i = i.parentNode;
              }
            }
            r = r.return;
          }
        za(function () {
          var d = u,
            v = Ao(t),
            m = [];
          e: {
            var p = rc.get(e);
            if (p !== void 0) {
              var g = Zo,
                k = e;
              switch (e) {
                case "keypress":
                  if (nl(t) === 0) break e;
                case "keydown":
                case "keyup":
                  g = Zp;
                  break;
                case "focusin":
                  ((k = "focus"), (g = Pu));
                  break;
                case "focusout":
                  ((k = "blur"), (g = Pu));
                  break;
                case "beforeblur":
                case "afterblur":
                  g = Pu;
                  break;
                case "click":
                  if (t.button === 2) break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  g = ks;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  g = Mp;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  g = Yp;
                  break;
                case ba:
                case ec:
                case nc:
                  g = Bp;
                  break;
                case tc:
                  g = bp;
                  break;
                case "scroll":
                  g = Fp;
                  break;
                case "wheel":
                  g = n0;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  g = Qp;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  g = Es;
              }
              var E = (n & 4) !== 0,
                U = !E && e === "scroll",
                f = E ? (p !== null ? p + "Capture" : null) : p;
              E = [];
              for (var a = d, c; a !== null;) {
                c = a;
                var h = c.stateNode;
                if (
                  (c.tag === 5 &&
                    h !== null &&
                    ((c = h),
                    f !== null && ((h = ur(a, f)), h != null && E.push(dr(a, h, c)))),
                  U)
                )
                  break;
                a = a.return;
              }
              0 < E.length &&
                ((p = new g(p, k, null, t, v)), m.push({ event: p, listeners: E }));
            }
          }
          if ((n & 7) === 0) {
            e: {
              if (
                ((p = e === "mouseover" || e === "pointerover"),
                (g = e === "mouseout" || e === "pointerout"),
                p &&
                  t !== bu &&
                  (k = t.relatedTarget || t.fromElement) &&
                  (Mn(k) || k[en]))
              )
                break e;
              if (g || p) {
                if (
                  ((p =
                    v.window === v
                      ? v
                      : (p = v.ownerDocument)
                        ? p.defaultView || p.parentWindow
                        : window),
                  g)
                ) {
                  if (
                    ((k = t.relatedTarget || t.toElement),
                    (g = d),
                    (k = k ? Mn(k) : null),
                    k !== null &&
                      ((U = Xn(k)), k !== U || (k.tag !== 5 && k.tag !== 6)))
                  )
                    k = null;
                } else ((g = null), (k = d));
                if (g !== k) {
                  if (
                    ((E = ks),
                    (h = "onMouseLeave"),
                    (f = "onMouseEnter"),
                    (a = "mouse"),
                    e === "pointerout" || e === "pointerover")
                  )
                    ((E = Es),
                      (h = "onPointerLeave"),
                      (f = "onPointerEnter"),
                      (a = "pointer"));
                  if (
                    ((U = g == null ? p : ut(g)),
                    (c = k == null ? p : ut(k)),
                    (p = new E(h, a + "leave", g, t, v)),
                    (p.target = U),
                    (p.relatedTarget = c),
                    (h = null),
                    Mn(v) === d &&
                      ((E = new E(f, a + "enter", k, t, v)),
                      (E.target = c),
                      (E.relatedTarget = U),
                      (h = E)),
                    (U = h),
                    g && k)
                  )
                    n: {
                      ((E = g), (f = k), (a = 0));
                      for (c = E; c; c = qn(c)) a++;
                      c = 0;
                      for (h = f; h; h = qn(h)) c++;
                      for (; 0 < a - c;) ((E = qn(E)), a--);
                      for (; 0 < c - a;) ((f = qn(f)), c--);
                      for (; a--;) {
                        if (E === f || (f !== null && E === f.alternate)) break n;
                        ((E = qn(E)), (f = qn(f)));
                      }
                      E = null;
                    }
                  else E = null;
                  (g !== null && Is(m, p, g, E, !1),
                    k !== null && U !== null && Is(m, U, k, E, !0));
                }
              }
            }
            e: {
              if (
                ((p = d ? ut(d) : window),
                (g = p.nodeName && p.nodeName.toLowerCase()),
                g === "select" || (g === "input" && p.type === "file"))
              )
                var w = s0;
              else if (Ns(p))
                if (Za) w = d0;
                else {
                  w = c0;
                  var C = a0;
                }
              else
                (g = p.nodeName) &&
                  g.toLowerCase() === "input" &&
                  (p.type === "checkbox" || p.type === "radio") &&
                  (w = f0);
              if (w && (w = w(e, d))) {
                Xa(m, w, t, v);
                break e;
              }
              (C && C(e, p, d),
                e === "focusout" &&
                  (C = p._wrapperState) &&
                  C.controlled &&
                  p.type === "number" &&
                  Zu(p, "number", p.value));
            }
            switch (((C = d ? ut(d) : window), e)) {
              case "focusin":
                if (Ns(C) || C.contentEditable === "true")
                  ((rt = C), (oo = d), (qt = null));
                break;
              case "focusout":
                qt = oo = rt = null;
                break;
              case "mousedown":
                io = !0;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                ((io = !1), Ls(m, t, v));
                break;
              case "selectionchange":
                if (v0) break;
              case "keydown":
              case "keyup":
                Ls(m, t, v);
            }
            var N;
            if (Jo)
              e: {
                switch (e) {
                  case "compositionstart":
                    var x = "onCompositionStart";
                    break e;
                  case "compositionend":
                    x = "onCompositionEnd";
                    break e;
                  case "compositionupdate":
                    x = "onCompositionUpdate";
                    break e;
                }
                x = void 0;
              }
            else
              tt
                ? $a(e, t) && (x = "onCompositionEnd")
                : e === "keydown" && t.keyCode === 229 && (x = "onCompositionStart");
            if (
              (x &&
                (ja &&
                  t.locale !== "ko" &&
                  (tt || x !== "onCompositionStart"
                    ? x === "onCompositionEnd" && tt && (N = Ha())
                    : ((hn = v),
                      (Xo = "value" in hn ? hn.value : hn.textContent),
                      (tt = !0))),
                (C = yl(d, x)),
                0 < C.length &&
                  ((x = new Ss(x, e, null, t, v)),
                  m.push({ event: x, listeners: C }),
                  N ? (x.data = N) : ((N = Ka(t)), N !== null && (x.data = N)))),
              (N = r0 ? l0(e, t) : u0(e, t)))
            )
              ((d = yl(d, "onBeforeInput")),
                0 < d.length &&
                  ((v = new Ss("onBeforeInput", "beforeinput", null, t, v)),
                  m.push({ event: v, listeners: d }),
                  (v.data = N)));
          }
          lc(m, n);
        });
      }
      function dr(e, n, t) {
        return { instance: e, listener: n, currentTarget: t };
      }
      function yl(e, n) {
        for (var t = n + "Capture", r = []; e !== null;) {
          var l = e,
            u = l.stateNode;
          (l.tag === 5 &&
            u !== null &&
            ((l = u),
            (u = ur(e, t)),
            u != null && r.unshift(dr(e, u, l)),
            (u = ur(e, n)),
            u != null && r.push(dr(e, u, l))),
            (e = e.return));
        }
        return r;
      }
      function qn(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e ? e : null;
      }
      function Is(e, n, t, r, l) {
        for (var u = n._reactName, o = []; t !== null && t !== r;) {
          var i = t,
            s = i.alternate,
            d = i.stateNode;
          if (s !== null && s === r) break;
          (i.tag === 5 &&
            d !== null &&
            ((i = d),
            l
              ? ((s = ur(t, u)), s != null && o.unshift(dr(t, s, i)))
              : l || ((s = ur(t, u)), s != null && o.push(dr(t, s, i)))),
            (t = t.return));
        }
        o.length !== 0 && e.push({ event: n, listeners: o });
      }
      function Os(e) {
        return (typeof e === "string" ? e : "" + e)
          .replace(
            y0,
            `
      `,
          )
          .replace(g0, "");
      }
      function Xr(e, n, t) {
        if (((n = Os(n)), Os(e) !== n && t)) throw Error(y(425));
      }
      function gl() {}
      function po(e, n) {
        return (
          e === "textarea" ||
          e === "noscript" ||
          typeof n.children === "string" ||
          typeof n.children === "number" ||
          (typeof n.dangerouslySetInnerHTML === "object" &&
            n.dangerouslySetInnerHTML !== null &&
            n.dangerouslySetInnerHTML.__html != null)
        );
      }
      function S0(e) {
        setTimeout(function () {
          throw e;
        });
      }
      function Ru(e, n) {
        var t = n,
          r = 0;
        do {
          var l = t.nextSibling;
          if ((e.removeChild(t), l && l.nodeType === 8))
            if (((t = l.data), t === "/$")) {
              if (r === 0) {
                (e.removeChild(l), sr(n));
                return;
              }
              r--;
            } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
          t = l;
        } while (t);
        sr(n);
      }
      function wn(e) {
        for (; e != null; e = e.nextSibling) {
          var n = e.nodeType;
          if (n === 1 || n === 3) break;
          if (n === 8) {
            if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
            if (n === "/$") return null;
          }
        }
        return e;
      }
      function Ds(e) {
        e = e.previousSibling;
        for (var n = 0; e;) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "$" || t === "$!" || t === "$?") {
              if (n === 0) return e;
              n--;
            } else t === "/$" && n++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      function Mn(e) {
        var n = e[$e];
        if (n) return n;
        for (var t = e.parentNode; t;) {
          if ((n = t[en] || t[$e])) {
            if (
              ((t = n.alternate),
              n.child !== null || (t !== null && t.child !== null))
            )
              for (e = Ds(e); e !== null;) {
                if ((t = e[$e])) return t;
                e = Ds(e);
              }
            return n;
          }
          ((e = t), (t = e.parentNode));
        }
        return null;
      }
      function Er(e) {
        return (
          (e = e[$e] || e[en]),
          !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
        );
      }
      function ut(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(y(33));
      }
      function Vl(e) {
        return e[pr] || null;
      }
      function Pn(e) {
        return { current: e };
      }
      function M(e) {
        0 > ot || ((e.current = mo[ot]), (mo[ot] = null), ot--);
      }
      function F(e, n) {
        (ot++, (mo[ot] = e.current), (e.current = n));
      }
      function wt(e, n) {
        var t = e.type.contextTypes;
        if (!t) return Nn;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
          return r.__reactInternalMemoizedMaskedChildContext;
        var l = {},
          u;
        for (u in t) l[u] = n[u];
        return (
          r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = n),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
          l
        );
      }
      function ge(e) {
        return ((e = e.childContextTypes), e !== null && e !== void 0);
      }
      function wl() {
        (M(ye), M(se));
      }
      function Ms(e, n, t) {
        if (se.current !== Nn) throw Error(y(168));
        (F(se, n), F(ye, t));
      }
      function oc(e, n, t) {
        var r = e.stateNode;
        if (((n = n.childContextTypes), typeof r.getChildContext !== "function"))
          return t;
        r = r.getChildContext();
        for (var l in r) if (!(l in n)) throw Error(y(108, ap(e) || "Unknown", l));
        return j({}, t, r);
      }
      function kl(e) {
        return (
          (e =
            ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Nn),
          (Qn = se.current),
          F(se, e),
          F(ye, ye.current),
          !0
        );
      }
      function Us(e, n, t) {
        var r = e.stateNode;
        if (!r) throw Error(y(169));
        (t
          ? ((e = oc(e, n, Qn)),
            (r.__reactInternalMemoizedMergedChildContext = e),
            M(ye),
            M(se),
            F(se, e))
          : M(ye),
          F(ye, t));
      }
      function ic(e) {
        Ge === null ? (Ge = [e]) : Ge.push(e);
      }
      function C0(e) {
        ((Bl = !0), ic(e));
      }
      function zn() {
        if (!Iu && Ge !== null) {
          Iu = !0;
          var e = 0,
            n = I;
          try {
            var t = Ge;
            for (I = 1; e < t.length; e++) {
              var r = t[e];
              do r = r(!0);
              while (r !== null);
            }
            ((Ge = null), (Bl = !1));
          } catch (l) {
            throw (Ge !== null && (Ge = Ge.slice(e + 1)), Ia(Ho, zn), l);
          } finally {
            ((I = n), (Iu = !1));
          }
        }
        return null;
      }
      function Fn(e, n) {
        ((it[st++] = El), (it[st++] = Sl), (Sl = e), (El = n));
      }
      function sc(e, n, t) {
        ((xe[Pe++] = Je), (xe[Pe++] = Ye), (xe[Pe++] = An), (An = e));
        var r = Je;
        e = Ye;
        var l = 32 - Be(r) - 1;
        ((r &= ~(1 << l)), (t += 1));
        var u = 32 - Be(n) + l;
        if (30 < u) {
          var o = l - (l % 5);
          ((u = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (l -= o),
            (Je = (1 << (32 - Be(n) + l)) | (t << l) | r),
            (Ye = u + e));
        } else ((Je = (1 << u) | (t << l) | r), (Ye = e));
      }
      function qo(e) {
        e.return !== null && (Fn(e, 1), sc(e, 1, 0));
      }
      function bo(e) {
        for (; e === Sl;)
          ((Sl = it[--st]), (it[st] = null), (El = it[--st]), (it[st] = null));
        for (; e === An;)
          ((An = xe[--Pe]),
            (xe[Pe] = null),
            (Ye = xe[--Pe]),
            (xe[Pe] = null),
            (Je = xe[--Pe]),
            (xe[Pe] = null));
      }
      function ac(e, n) {
        var t = ze(5, null, null, 0);
        ((t.elementType = "DELETED"),
          (t.stateNode = n),
          (t.return = e),
          (n = e.deletions),
          n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t));
      }
      function Vs(e, n) {
        switch (e.tag) {
          case 5:
            var t = e.type;
            return (
              (n =
                n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
                  ? null
                  : n),
              n !== null
                ? ((e.stateNode = n), (Ee = e), (Se = wn(n.firstChild)), !0)
                : !1
            );
          case 6:
            return (
              (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
              n !== null ? ((e.stateNode = n), (Ee = e), (Se = null), !0) : !1
            );
          case 13:
            return (
              (n = n.nodeType !== 8 ? null : n),
              n !== null
                ? ((t = An !== null ? { id: Je, overflow: Ye } : null),
                  (e.memoizedState = {
                    dehydrated: n,
                    treeContext: t,
                    retryLane: 1073741824,
                  }),
                  (t = ze(18, null, null, 0)),
                  (t.stateNode = n),
                  (t.return = e),
                  (e.child = t),
                  (Ee = e),
                  (Se = null),
                  !0)
                : !1
            );
          default:
            return !1;
        }
      }
      function yo(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
      }
      function go(e) {
        if (B) {
          var n = Se;
          if (n) {
            var t = n;
            if (!Vs(e, n)) {
              if (yo(e)) throw Error(y(418));
              n = wn(t.nextSibling);
              var r = Ee;
              n && Vs(e, n)
                ? ac(r, t)
                : ((e.flags = (e.flags & -4097) | 2), (B = !1), (Ee = e));
            }
          } else {
            if (yo(e)) throw Error(y(418));
            ((e.flags = (e.flags & -4097) | 2), (B = !1), (Ee = e));
          }
        }
      }
      function Bs(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
          e = e.return;
        Ee = e;
      }
      function Zr(e) {
        if (e !== Ee) return !1;
        if (!B) return (Bs(e), (B = !0), !1);
        var n;
        if (
          ((n = e.tag !== 3) &&
            !(n = e.tag !== 5) &&
            ((n = e.type),
            (n = n !== "head" && n !== "body" && !po(e.type, e.memoizedProps))),
          n && (n = Se))
        ) {
          if (yo(e)) throw (cc(), Error(y(418)));
          for (; n;) (ac(e, n), (n = wn(n.nextSibling)));
        }
        if ((Bs(e), e.tag === 13)) {
          if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(y(317));
          e: {
            e = e.nextSibling;
            for (n = 0; e;) {
              if (e.nodeType === 8) {
                var t = e.data;
                if (t === "/$") {
                  if (n === 0) {
                    Se = wn(e.nextSibling);
                    break e;
                  }
                  n--;
                } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
              }
              e = e.nextSibling;
            }
            Se = null;
          }
        } else Se = Ee ? wn(e.stateNode.nextSibling) : null;
        return !0;
      }
      function cc() {
        for (var e = Se; e;) e = wn(e.nextSibling);
      }
      function kt() {
        ((Se = Ee = null), (B = !1));
      }
      function ei(e) {
        Ve === null ? (Ve = [e]) : Ve.push(e);
      }
      function Ut(e, n, t) {
        if (
          ((e = t.ref),
          e !== null && typeof e !== "function" && typeof e !== "object")
        ) {
          if (t._owner) {
            if (((t = t._owner), t)) {
              if (t.tag !== 1) throw Error(y(309));
              var r = t.stateNode;
            }
            if (!r) throw Error(y(147, e));
            var l = r,
              u = "" + e;
            if (
              n !== null &&
              n.ref !== null &&
              typeof n.ref === "function" &&
              n.ref._stringRef === u
            )
              return n.ref;
            return (
              (n = function (o) {
                var i = l.refs;
                o === null ? delete i[u] : (i[u] = o);
              }),
              (n._stringRef = u),
              n
            );
          }
          if (typeof e !== "string") throw Error(y(284));
          if (!t._owner) throw Error(y(290, e));
        }
        return e;
      }
      function Gr(e, n) {
        throw (
          (e = Object.prototype.toString.call(n)),
          Error(
            y(
              31,
              e === "[object Object]"
                ? "object with keys {" + Object.keys(n).join(", ") + "}"
                : e,
            ),
          )
        );
      }
      function Ws(e) {
        var n = e._init;
        return n(e._payload);
      }
      function fc(e) {
        function n(f, a) {
          if (e) {
            var c = f.deletions;
            c === null ? ((f.deletions = [a]), (f.flags |= 16)) : c.push(a);
          }
        }
        function t(f, a) {
          if (!e) return null;
          for (; a !== null;) (n(f, a), (a = a.sibling));
          return null;
        }
        function r(f, a) {
          for (f = new Map(); a !== null;)
            (a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling));
          return f;
        }
        function l(f, a) {
          return ((f = _n(f, a)), (f.index = 0), (f.sibling = null), f);
        }
        function u(f, a, c) {
          if (((f.index = c), !e)) return ((f.flags |= 1048576), a);
          if (((c = f.alternate), c !== null))
            return ((c = c.index), c < a ? ((f.flags |= 2), a) : c);
          return ((f.flags |= 2), a);
        }
        function o(f) {
          return (e && f.alternate === null && (f.flags |= 2), f);
        }
        function i(f, a, c, h) {
          if (a === null || a.tag !== 6)
            return ((a = Bu(c, f.mode, h)), (a.return = f), a);
          return ((a = l(a, c)), (a.return = f), a);
        }
        function s(f, a, c, h) {
          var w = c.type;
          if (w === nt) return v(f, a, c.props.children, h, c.key);
          if (
            a !== null &&
            (a.elementType === w ||
              (typeof w === "object" &&
                w !== null &&
                w.$$typeof === cn &&
                Ws(w) === a.type))
          )
            return ((h = l(a, c.props)), (h.ref = Ut(f, a, c)), (h.return = f), h);
          return (
            (h = al(c.type, c.key, c.props, null, f.mode, h)),
            (h.ref = Ut(f, a, c)),
            (h.return = f),
            h
          );
        }
        function d(f, a, c, h) {
          if (
            a === null ||
            a.tag !== 4 ||
            a.stateNode.containerInfo !== c.containerInfo ||
            a.stateNode.implementation !== c.implementation
          )
            return ((a = Wu(c, f.mode, h)), (a.return = f), a);
          return ((a = l(a, c.children || [])), (a.return = f), a);
        }
        function v(f, a, c, h, w) {
          if (a === null || a.tag !== 7)
            return ((a = Wn(c, f.mode, h, w)), (a.return = f), a);
          return ((a = l(a, c)), (a.return = f), a);
        }
        function m(f, a, c) {
          if ((typeof a === "string" && a !== "") || typeof a === "number")
            return ((a = Bu("" + a, f.mode, c)), (a.return = f), a);
          if (typeof a === "object" && a !== null) {
            switch (a.$$typeof) {
              case Vr:
                return (
                  (c = al(a.type, a.key, a.props, null, f.mode, c)),
                  (c.ref = Ut(f, null, a)),
                  (c.return = f),
                  c
                );
              case et:
                return ((a = Wu(a, f.mode, c)), (a.return = f), a);
              case cn:
                var h = a._init;
                return m(f, h(a._payload), c);
            }
            if (Qt(a) || Ot(a))
              return ((a = Wn(a, f.mode, c, null)), (a.return = f), a);
            Gr(f, a);
          }
          return null;
        }
        function p(f, a, c, h) {
          var w = a !== null ? a.key : null;
          if ((typeof c === "string" && c !== "") || typeof c === "number")
            return w !== null ? null : i(f, a, "" + c, h);
          if (typeof c === "object" && c !== null) {
            switch (c.$$typeof) {
              case Vr:
                return c.key === w ? s(f, a, c, h) : null;
              case et:
                return c.key === w ? d(f, a, c, h) : null;
              case cn:
                return ((w = c._init), p(f, a, w(c._payload), h));
            }
            if (Qt(c) || Ot(c)) return w !== null ? null : v(f, a, c, h, null);
            Gr(f, c);
          }
          return null;
        }
        function g(f, a, c, h, w) {
          if ((typeof h === "string" && h !== "") || typeof h === "number")
            return ((f = f.get(c) || null), i(a, f, "" + h, w));
          if (typeof h === "object" && h !== null) {
            switch (h.$$typeof) {
              case Vr:
                return (
                  (f = f.get(h.key === null ? c : h.key) || null),
                  s(a, f, h, w)
                );
              case et:
                return (
                  (f = f.get(h.key === null ? c : h.key) || null),
                  d(a, f, h, w)
                );
              case cn:
                var C = h._init;
                return g(f, a, c, C(h._payload), w);
            }
            if (Qt(h) || Ot(h)) return ((f = f.get(c) || null), v(a, f, h, w, null));
            Gr(a, h);
          }
          return null;
        }
        function k(f, a, c, h) {
          for (
            var w = null, C = null, N = a, x = (a = 0), V = null;
            N !== null && x < c.length;
            x++
          ) {
            N.index > x ? ((V = N), (N = null)) : (V = N.sibling);
            var L = p(f, N, c[x], h);
            if (L === null) {
              N === null && (N = V);
              break;
            }
            (e && N && L.alternate === null && n(f, N),
              (a = u(L, a, x)),
              C === null ? (w = L) : (C.sibling = L),
              (C = L),
              (N = V));
          }
          if (x === c.length) return (t(f, N), B && Fn(f, x), w);
          if (N === null) {
            for (; x < c.length; x++)
              ((N = m(f, c[x], h)),
                N !== null &&
                  ((a = u(N, a, x)),
                  C === null ? (w = N) : (C.sibling = N),
                  (C = N)));
            return (B && Fn(f, x), w);
          }
          for (N = r(f, N); x < c.length; x++)
            ((V = g(N, f, x, c[x], h)),
              V !== null &&
                (e && V.alternate !== null && N.delete(V.key === null ? x : V.key),
                (a = u(V, a, x)),
                C === null ? (w = V) : (C.sibling = V),
                (C = V)));
          return (
            e &&
              N.forEach(function ($) {
                return n(f, $);
              }),
            B && Fn(f, x),
            w
          );
        }
        function E(f, a, c, h) {
          var w = Ot(c);
          if (typeof w !== "function") throw Error(y(150));
          if (((c = w.call(c)), c == null)) throw Error(y(151));
          for (
            var C = (w = null), N = a, x = (a = 0), V = null, L = c.next();
            N !== null && !L.done;
            x++, L = c.next()
          ) {
            N.index > x ? ((V = N), (N = null)) : (V = N.sibling);
            var $ = p(f, N, L.value, h);
            if ($ === null) {
              N === null && (N = V);
              break;
            }
            (e && N && $.alternate === null && n(f, N),
              (a = u($, a, x)),
              C === null ? (w = $) : (C.sibling = $),
              (C = $),
              (N = V));
          }
          if (L.done) return (t(f, N), B && Fn(f, x), w);
          if (N === null) {
            for (; !L.done; x++, L = c.next())
              ((L = m(f, L.value, h)),
                L !== null &&
                  ((a = u(L, a, x)),
                  C === null ? (w = L) : (C.sibling = L),
                  (C = L)));
            return (B && Fn(f, x), w);
          }
          for (N = r(f, N); !L.done; x++, L = c.next())
            ((L = g(N, f, x, L.value, h)),
              L !== null &&
                (e && L.alternate !== null && N.delete(L.key === null ? x : L.key),
                (a = u(L, a, x)),
                C === null ? (w = L) : (C.sibling = L),
                (C = L)));
          return (
            e &&
              N.forEach(function (Ie) {
                return n(f, Ie);
              }),
            B && Fn(f, x),
            w
          );
        }
        function U(f, a, c, h) {
          if (
            (typeof c === "object" &&
              c !== null &&
              c.type === nt &&
              c.key === null &&
              (c = c.props.children),
            typeof c === "object" && c !== null)
          ) {
            switch (c.$$typeof) {
              case Vr:
                e: {
                  for (var w = c.key, C = a; C !== null;) {
                    if (C.key === w) {
                      if (((w = c.type), w === nt)) {
                        if (C.tag === 7) {
                          (t(f, C.sibling),
                            (a = l(C, c.props.children)),
                            (a.return = f),
                            (f = a));
                          break e;
                        }
                      } else if (
                        C.elementType === w ||
                        (typeof w === "object" &&
                          w !== null &&
                          w.$$typeof === cn &&
                          Ws(w) === C.type)
                      ) {
                        (t(f, C.sibling),
                          (a = l(C, c.props)),
                          (a.ref = Ut(f, C, c)),
                          (a.return = f),
                          (f = a));
                        break e;
                      }
                      t(f, C);
                      break;
                    } else n(f, C);
                    C = C.sibling;
                  }
                  c.type === nt
                    ? ((a = Wn(c.props.children, f.mode, h, c.key)),
                      (a.return = f),
                      (f = a))
                    : ((h = al(c.type, c.key, c.props, null, f.mode, h)),
                      (h.ref = Ut(f, a, c)),
                      (h.return = f),
                      (f = h));
                }
                return o(f);
              case et:
                e: {
                  for (C = c.key; a !== null;) {
                    if (a.key === C)
                      if (
                        a.tag === 4 &&
                        a.stateNode.containerInfo === c.containerInfo &&
                        a.stateNode.implementation === c.implementation
                      ) {
                        (t(f, a.sibling),
                          (a = l(a, c.children || [])),
                          (a.return = f),
                          (f = a));
                        break e;
                      } else {
                        t(f, a);
                        break;
                      }
                    else n(f, a);
                    a = a.sibling;
                  }
                  ((a = Wu(c, f.mode, h)), (a.return = f), (f = a));
                }
                return o(f);
              case cn:
                return ((C = c._init), U(f, a, C(c._payload), h));
            }
            if (Qt(c)) return k(f, a, c, h);
            if (Ot(c)) return E(f, a, c, h);
            Gr(f, c);
          }
          return (typeof c === "string" && c !== "") || typeof c === "number"
            ? ((c = "" + c),
              a !== null && a.tag === 6
                ? (t(f, a.sibling), (a = l(a, c)), (a.return = f), (f = a))
                : (t(f, a), (a = Bu(c, f.mode, h)), (a.return = f), (f = a)),
              o(f))
            : t(f, a);
        }
        return U;
      }
      function ti() {
        ni = at = Cl = null;
      }
      function ri(e) {
        var n = _l.current;
        (M(_l), (e._currentValue = n));
      }
      function wo(e, n, t) {
        for (; e !== null;) {
          var r = e.alternate;
          if (
            ((e.childLanes & n) !== n
              ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
              : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
            e === t)
          )
            break;
          e = e.return;
        }
      }
      function mt(e, n) {
        ((Cl = e),
          (ni = at = null),
          (e = e.dependencies),
          e !== null &&
            e.firstContext !== null &&
            ((e.lanes & n) !== 0 && (me = !0), (e.firstContext = null)));
      }
      function Te(e) {
        var n = e._currentValue;
        if (ni !== e)
          if (((e = { context: e, memoizedValue: n, next: null }), at === null)) {
            if (Cl === null) throw Error(y(308));
            ((at = e), (Cl.dependencies = { lanes: 0, firstContext: e }));
          } else at = at.next = e;
        return n;
      }
      function li(e) {
        Un === null ? (Un = [e]) : Un.push(e);
      }
      function pc(e, n, t, r) {
        var l = n.interleaved;
        return (
          l === null ? ((t.next = t), li(n)) : ((t.next = l.next), (l.next = t)),
          (n.interleaved = t),
          nn(e, r)
        );
      }
      function nn(e, n) {
        e.lanes |= n;
        var t = e.alternate;
        (t !== null && (t.lanes |= n), (t = e));
        for (e = e.return; e !== null;)
          ((e.childLanes |= n),
            (t = e.alternate),
            t !== null && (t.childLanes |= n),
            (t = e),
            (e = e.return));
        return t.tag === 3 ? t.stateNode : null;
      }
      function ui(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, interleaved: null, lanes: 0 },
          effects: null,
        };
      }
      function hc(e, n) {
        ((e = e.updateQueue),
          n.updateQueue === e &&
            (n.updateQueue = {
              baseState: e.baseState,
              firstBaseUpdate: e.firstBaseUpdate,
              lastBaseUpdate: e.lastBaseUpdate,
              shared: e.shared,
              effects: e.effects,
            }));
      }
      function qe(e, n) {
        return {
          eventTime: e,
          lane: n,
          tag: 0,
          payload: null,
          callback: null,
          next: null,
        };
      }
      function kn(e, n, t) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (((r = r.shared), (R & 2) !== 0)) {
          var l = r.pending;
          return (
            l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
            (r.pending = n),
            nn(e, t)
          );
        }
        return (
          (l = r.interleaved),
          l === null ? ((n.next = n), li(r)) : ((n.next = l.next), (l.next = n)),
          (r.interleaved = n),
          nn(e, t)
        );
      }
      function rl(e, n, t) {
        if (
          ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
        ) {
          var r = n.lanes;
          ((r &= e.pendingLanes), (t |= r), (n.lanes = t), jo(e, t));
        }
      }
      function Qs(e, n) {
        var { updateQueue: t, alternate: r } = e;
        if (r !== null && ((r = r.updateQueue), t === r)) {
          var l = null,
            u = null;
          if (((t = t.firstBaseUpdate), t !== null)) {
            do {
              var o = {
                eventTime: t.eventTime,
                lane: t.lane,
                tag: t.tag,
                payload: t.payload,
                callback: t.callback,
                next: null,
              };
              (u === null ? (l = u = o) : (u = u.next = o), (t = t.next));
            } while (t !== null);
            u === null ? (l = u = n) : (u = u.next = n);
          } else l = u = n;
          ((t = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: u,
            shared: r.shared,
            effects: r.effects,
          }),
            (e.updateQueue = t));
          return;
        }
        ((e = t.lastBaseUpdate),
          e === null ? (t.firstBaseUpdate = n) : (e.next = n),
          (t.lastBaseUpdate = n));
      }
      function Nl(e, n, t, r) {
        var l = e.updateQueue;
        fn = !1;
        var { firstBaseUpdate: u, lastBaseUpdate: o } = l,
          i = l.shared.pending;
        if (i !== null) {
          l.shared.pending = null;
          var s = i,
            d = s.next;
          ((s.next = null), o === null ? (u = d) : (o.next = d), (o = s));
          var v = e.alternate;
          v !== null &&
            ((v = v.updateQueue),
            (i = v.lastBaseUpdate),
            i !== o &&
              (i === null ? (v.firstBaseUpdate = d) : (i.next = d),
              (v.lastBaseUpdate = s)));
        }
        if (u !== null) {
          var m = l.baseState;
          ((o = 0), (v = d = s = null), (i = u));
          do {
            var { lane: p, eventTime: g } = i;
            if ((r & p) === p) {
              v !== null &&
                (v = v.next =
                  {
                    eventTime: g,
                    lane: 0,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null,
                  });
              e: {
                var k = e,
                  E = i;
                switch (((p = n), (g = t), E.tag)) {
                  case 1:
                    if (((k = E.payload), typeof k === "function")) {
                      m = k.call(g, m, p);
                      break e;
                    }
                    m = k;
                    break e;
                  case 3:
                    k.flags = (k.flags & -65537) | 128;
                  case 0:
                    if (
                      ((k = E.payload),
                      (p = typeof k === "function" ? k.call(g, m, p) : k),
                      p === null || p === void 0)
                    )
                      break e;
                    m = j({}, m, p);
                    break e;
                  case 2:
                    fn = !0;
                }
              }
              i.callback !== null &&
                i.lane !== 0 &&
                ((e.flags |= 64),
                (p = l.effects),
                p === null ? (l.effects = [i]) : p.push(i));
            } else
              ((g = {
                eventTime: g,
                lane: p,
                tag: i.tag,
                payload: i.payload,
                callback: i.callback,
                next: null,
              }),
                v === null ? ((d = v = g), (s = m)) : (v = v.next = g),
                (o |= p));
            if (((i = i.next), i === null))
              if (((i = l.shared.pending), i === null)) break;
              else
                ((p = i),
                  (i = p.next),
                  (p.next = null),
                  (l.lastBaseUpdate = p),
                  (l.shared.pending = null));
          } while (1);
          if (
            (v === null && (s = m),
            (l.baseState = s),
            (l.firstBaseUpdate = d),
            (l.lastBaseUpdate = v),
            (n = l.shared.interleaved),
            n !== null)
          ) {
            l = n;
            do ((o |= l.lane), (l = l.next));
            while (l !== n);
          } else u === null && (l.shared.lanes = 0);
          ((jn |= o), (e.lanes = o), (e.memoizedState = m));
        }
      }
      function As(e, n, t) {
        if (((e = n.effects), (n.effects = null), e !== null))
          for (n = 0; n < e.length; n++) {
            var r = e[n],
              l = r.callback;
            if (l !== null) {
              if (((r.callback = null), (r = t), typeof l !== "function"))
                throw Error(y(191, l));
              l.call(r);
            }
          }
      }
      function Vn(e) {
        if (e === _r) throw Error(y(174));
        return e;
      }
      function oi(e, n) {
        switch ((F(vr, n), F(hr, e), F(Xe, _r), (e = n.nodeType), e)) {
          case 9:
          case 11:
            n = (n = n.documentElement) ? n.namespaceURI : Ju(null, "");
            break;
          default:
            ((e = e === 8 ? n.parentNode : n),
              (n = e.namespaceURI || null),
              (e = e.tagName),
              (n = Ju(n, e)));
        }
        (M(Xe), F(Xe, n));
      }
      function Et() {
        (M(Xe), M(hr), M(vr));
      }
      function vc(e) {
        Vn(vr.current);
        var n = Vn(Xe.current),
          t = Ju(n, e.type);
        n !== t && (F(hr, e), F(Xe, t));
      }
      function ii(e) {
        hr.current === e && (M(Xe), M(hr));
      }
      function xl(e) {
        for (var n = e; n !== null;) {
          if (n.tag === 13) {
            var t = n.memoizedState;
            if (
              t !== null &&
              ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
            )
              return n;
          } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
            if ((n.flags & 128) !== 0) return n;
          } else if (n.child !== null) {
            ((n.child.return = n), (n = n.child));
            continue;
          }
          if (n === e) break;
          for (; n.sibling === null;) {
            if (n.return === null || n.return === e) return null;
            n = n.return;
          }
          ((n.sibling.return = n.return), (n = n.sibling));
        }
        return null;
      }
      function si() {
        for (var e = 0; e < Ou.length; e++)
          Ou[e]._workInProgressVersionPrimary = null;
        Ou.length = 0;
      }
      function ue() {
        throw Error(y(321));
      }
      function ai(e, n) {
        if (n === null) return !1;
        for (var t = 0; t < n.length && t < e.length; t++)
          if (!Qe(e[t], n[t])) return !1;
        return !0;
      }
      function ci(e, n, t, r, l, u) {
        if (
          ((Hn = u),
          (H = n),
          (n.memoizedState = null),
          (n.updateQueue = null),
          (n.lanes = 0),
          (ll.current = e === null || e.memoizedState === null ? T0 : R0),
          (e = t(r, l)),
          bt)
        ) {
          u = 0;
          do {
            if (((bt = !1), (mr = 0), 25 <= u)) throw Error(y(301));
            ((u += 1),
              (b = Y = null),
              (n.updateQueue = null),
              (ll.current = I0),
              (e = t(r, l)));
          } while (bt);
        }
        if (
          ((ll.current = zl),
          (n = Y !== null && Y.next !== null),
          (Hn = 0),
          (b = Y = H = null),
          (Pl = !1),
          n)
        )
          throw Error(y(300));
        return e;
      }
      function fi() {
        var e = mr !== 0;
        return ((mr = 0), e);
      }
      function je() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null,
        };
        return (b === null ? (H.memoizedState = b = e) : (b = b.next = e), b);
      }
      function Re() {
        if (Y === null) {
          var e = H.alternate;
          e = e !== null ? e.memoizedState : null;
        } else e = Y.next;
        var n = b === null ? H.memoizedState : b.next;
        if (n !== null) ((b = n), (Y = e));
        else {
          if (e === null) throw Error(y(310));
          ((Y = e),
            (e = {
              memoizedState: Y.memoizedState,
              baseState: Y.baseState,
              baseQueue: Y.baseQueue,
              queue: Y.queue,
              next: null,
            }),
            b === null ? (H.memoizedState = b = e) : (b = b.next = e));
        }
        return b;
      }
      function yr(e, n) {
        return typeof n === "function" ? n(e) : n;
      }
      function Du(e) {
        var n = Re(),
          t = n.queue;
        if (t === null) throw Error(y(311));
        t.lastRenderedReducer = e;
        var r = Y,
          l = r.baseQueue,
          u = t.pending;
        if (u !== null) {
          if (l !== null) {
            var o = l.next;
            ((l.next = u.next), (u.next = o));
          }
          ((r.baseQueue = l = u), (t.pending = null));
        }
        if (l !== null) {
          ((u = l.next), (r = r.baseState));
          var i = (o = null),
            s = null,
            d = u;
          do {
            var v = d.lane;
            if ((Hn & v) === v)
              (s !== null &&
                (s = s.next =
                  {
                    lane: 0,
                    action: d.action,
                    hasEagerState: d.hasEagerState,
                    eagerState: d.eagerState,
                    next: null,
                  }),
                (r = d.hasEagerState ? d.eagerState : e(r, d.action)));
            else {
              var m = {
                lane: v,
                action: d.action,
                hasEagerState: d.hasEagerState,
                eagerState: d.eagerState,
                next: null,
              };
              (s === null ? ((i = s = m), (o = r)) : (s = s.next = m),
                (H.lanes |= v),
                (jn |= v));
            }
            d = d.next;
          } while (d !== null && d !== u);
          (s === null ? (o = r) : (s.next = i),
            Qe(r, n.memoizedState) || (me = !0),
            (n.memoizedState = r),
            (n.baseState = o),
            (n.baseQueue = s),
            (t.lastRenderedState = r));
        }
        if (((e = t.interleaved), e !== null)) {
          l = e;
          do ((u = l.lane), (H.lanes |= u), (jn |= u), (l = l.next));
          while (l !== e);
        } else l === null && (t.lanes = 0);
        return [n.memoizedState, t.dispatch];
      }
      function Mu(e) {
        var n = Re(),
          t = n.queue;
        if (t === null) throw Error(y(311));
        t.lastRenderedReducer = e;
        var { dispatch: r, pending: l } = t,
          u = n.memoizedState;
        if (l !== null) {
          t.pending = null;
          var o = (l = l.next);
          do ((u = e(u, o.action)), (o = o.next));
          while (o !== l);
          (Qe(u, n.memoizedState) || (me = !0),
            (n.memoizedState = u),
            n.baseQueue === null && (n.baseState = u),
            (t.lastRenderedState = u));
        }
        return [u, r];
      }
      function mc() {}
      function yc(e, n) {
        var t = H,
          r = Re(),
          l = n(),
          u = !Qe(r.memoizedState, l);
        if (
          (u && ((r.memoizedState = l), (me = !0)),
          (r = r.queue),
          di(kc.bind(null, t, r, e), [e]),
          r.getSnapshot !== n || u || (b !== null && b.memoizedState.tag & 1))
        ) {
          if (
            ((t.flags |= 2048),
            gr(9, wc.bind(null, t, r, l, n), void 0, null),
            ee === null)
          )
            throw Error(y(349));
          (Hn & 30) !== 0 || gc(t, n, l);
        }
        return l;
      }
      function gc(e, n, t) {
        ((e.flags |= 16384),
          (e = { getSnapshot: n, value: t }),
          (n = H.updateQueue),
          n === null
            ? ((n = { lastEffect: null, stores: null }),
              (H.updateQueue = n),
              (n.stores = [e]))
            : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e)));
      }
      function wc(e, n, t, r) {
        ((n.value = t), (n.getSnapshot = r), Sc(n) && Ec(e));
      }
      function kc(e, n, t) {
        return t(function () {
          Sc(n) && Ec(e);
        });
      }
      function Sc(e) {
        var n = e.getSnapshot;
        e = e.value;
        try {
          var t = n();
          return !Qe(e, t);
        } catch (r) {
          return !0;
        }
      }
      function Ec(e) {
        var n = nn(e, 1);
        n !== null && We(n, e, 1, -1);
      }
      function Hs(e) {
        var n = je();
        return (
          typeof e === "function" && (e = e()),
          (n.memoizedState = n.baseState = e),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: yr,
            lastRenderedState: e,
          }),
          (n.queue = e),
          (e = e.dispatch = L0.bind(null, H, e)),
          [n.memoizedState, e]
        );
      }
      function gr(e, n, t, r) {
        return (
          (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
          (n = H.updateQueue),
          n === null
            ? ((n = { lastEffect: null, stores: null }),
              (H.updateQueue = n),
              (n.lastEffect = e.next = e))
            : ((t = n.lastEffect),
              t === null
                ? (n.lastEffect = e.next = e)
                : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
          e
        );
      }
      function _c() {
        return Re().memoizedState;
      }
      function ul(e, n, t, r) {
        var l = je();
        ((H.flags |= e),
          (l.memoizedState = gr(1 | n, t, void 0, r === void 0 ? null : r)));
      }
      function Wl(e, n, t, r) {
        var l = Re();
        r = r === void 0 ? null : r;
        var u = void 0;
        if (Y !== null) {
          var o = Y.memoizedState;
          if (((u = o.destroy), r !== null && ai(r, o.deps))) {
            l.memoizedState = gr(n, t, u, r);
            return;
          }
        }
        ((H.flags |= e), (l.memoizedState = gr(1 | n, t, u, r)));
      }
      function js(e, n) {
        return ul(8390656, 8, e, n);
      }
      function di(e, n) {
        return Wl(2048, 8, e, n);
      }
      function Cc(e, n) {
        return Wl(4, 2, e, n);
      }
      function Nc(e, n) {
        return Wl(4, 4, e, n);
      }
      function xc(e, n) {
        if (typeof n === "function")
          return (
            (e = e()),
            n(e),
            function () {
              n(null);
            }
          );
        if (n !== null && n !== void 0)
          return (
            (e = e()),
            (n.current = e),
            function () {
              n.current = null;
            }
          );
      }
      function Pc(e, n, t) {
        return (
          (t = t !== null && t !== void 0 ? t.concat([e]) : null),
          Wl(4, 4, xc.bind(null, n, e), t)
        );
      }
      function pi() {}
      function zc(e, n) {
        var t = Re();
        n = n === void 0 ? null : n;
        var r = t.memoizedState;
        if (r !== null && n !== null && ai(n, r[1])) return r[0];
        return ((t.memoizedState = [e, n]), e);
      }
      function Lc(e, n) {
        var t = Re();
        n = n === void 0 ? null : n;
        var r = t.memoizedState;
        if (r !== null && n !== null && ai(n, r[1])) return r[0];
        return ((e = e()), (t.memoizedState = [e, n]), e);
      }
      function Tc(e, n, t) {
        if ((Hn & 21) === 0)
          return (
            e.baseState && ((e.baseState = !1), (me = !0)),
            (e.memoizedState = t)
          );
        return (
          Qe(t, n) || ((t = Da()), (H.lanes |= t), (jn |= t), (e.baseState = !0)),
          n
        );
      }
      function P0(e, n) {
        var t = I;
        ((I = t !== 0 && 4 > t ? t : 4), e(!0));
        var r = Fu.transition;
        Fu.transition = {};
        try {
          (e(!1), n());
        } finally {
          ((I = t), (Fu.transition = r));
        }
      }
      function Rc() {
        return Re().memoizedState;
      }
      function z0(e, n, t) {
        var r = En(e);
        if (
          ((t = {
            lane: r,
            action: t,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
          Ic(e))
        )
          Oc(n, t);
        else if (((t = pc(e, n, t, r)), t !== null)) {
          var l = de();
          (We(t, e, r, l), Fc(t, n, r));
        }
      }
      function L0(e, n, t) {
        var r = En(e),
          l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
        if (Ic(e)) Oc(n, l);
        else {
          var u = e.alternate;
          if (
            e.lanes === 0 &&
            (u === null || u.lanes === 0) &&
            ((u = n.lastRenderedReducer), u !== null)
          )
            try {
              var o = n.lastRenderedState,
                i = u(o, t);
              if (((l.hasEagerState = !0), (l.eagerState = i), Qe(i, o))) {
                var s = n.interleaved;
                (s === null
                  ? ((l.next = l), li(n))
                  : ((l.next = s.next), (s.next = l)),
                  (n.interleaved = l));
                return;
              }
            } catch (d) {
            } finally {
            }
          ((t = pc(e, n, l, r)),
            t !== null && ((l = de()), We(t, e, r, l), Fc(t, n, r)));
        }
      }
      function Ic(e) {
        var n = e.alternate;
        return e === H || (n !== null && n === H);
      }
      function Oc(e, n) {
        bt = Pl = !0;
        var t = e.pending;
        (t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
          (e.pending = n));
      }
      function Fc(e, n, t) {
        if ((t & 4194240) !== 0) {
          var r = n.lanes;
          ((r &= e.pendingLanes), (t |= r), (n.lanes = t), jo(e, t));
        }
      }
      function Me(e, n) {
        if (e && e.defaultProps) {
          ((n = j({}, n)), (e = e.defaultProps));
          for (var t in e) n[t] === void 0 && (n[t] = e[t]);
          return n;
        }
        return n;
      }
      function ko(e, n, t, r) {
        ((n = e.memoizedState),
          (t = t(r, n)),
          (t = t === null || t === void 0 ? n : j({}, n, t)),
          (e.memoizedState = t),
          e.lanes === 0 && (e.updateQueue.baseState = t));
      }
      function $s(e, n, t, r, l, u, o) {
        return (
          (e = e.stateNode),
          typeof e.shouldComponentUpdate === "function"
            ? e.shouldComponentUpdate(r, u, o)
            : n.prototype && n.prototype.isPureReactComponent
              ? !cr(t, r) || !cr(l, u)
              : !0
        );
      }
      function Dc(e, n, t) {
        var r = !1,
          l = Nn,
          u = n.contextType;
        return (
          typeof u === "object" && u !== null
            ? (u = Te(u))
            : ((l = ge(n) ? Qn : se.current),
              (r = n.contextTypes),
              (u = (r = r !== null && r !== void 0) ? wt(e, l) : Nn)),
          (n = new n(t, u)),
          (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
          (n.updater = Ql),
          (e.stateNode = n),
          (n._reactInternals = e),
          r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = l),
            (e.__reactInternalMemoizedMaskedChildContext = u)),
          n
        );
      }
      function Ks(e, n, t, r) {
        ((e = n.state),
          typeof n.componentWillReceiveProps === "function" &&
            n.componentWillReceiveProps(t, r),
          typeof n.UNSAFE_componentWillReceiveProps === "function" &&
            n.UNSAFE_componentWillReceiveProps(t, r),
          n.state !== e && Ql.enqueueReplaceState(n, n.state, null));
      }
      function So(e, n, t, r) {
        var l = e.stateNode;
        ((l.props = t), (l.state = e.memoizedState), (l.refs = {}), ui(e));
        var u = n.contextType;
        (typeof u === "object" && u !== null
          ? (l.context = Te(u))
          : ((u = ge(n) ? Qn : se.current), (l.context = wt(e, u))),
          (l.state = e.memoizedState),
          (u = n.getDerivedStateFromProps),
          typeof u === "function" && (ko(e, n, u, t), (l.state = e.memoizedState)),
          typeof n.getDerivedStateFromProps === "function" ||
            typeof l.getSnapshotBeforeUpdate === "function" ||
            (typeof l.UNSAFE_componentWillMount !== "function" &&
              typeof l.componentWillMount !== "function") ||
            ((n = l.state),
            typeof l.componentWillMount === "function" && l.componentWillMount(),
            typeof l.UNSAFE_componentWillMount === "function" &&
              l.UNSAFE_componentWillMount(),
            n !== l.state && Ql.enqueueReplaceState(l, l.state, null),
            Nl(e, t, l, r),
            (l.state = e.memoizedState)),
          typeof l.componentDidMount === "function" && (e.flags |= 4194308));
      }
      function _t(e, n) {
        try {
          var t = "",
            r = n;
          do ((t += sp(r)), (r = r.return));
          while (r);
          var l = t;
        } catch (u) {
          l =
            `
Error generating stack: ` +
            u.message +
            `
      ` +
            u.stack;
        }
        return { value: e, source: n, stack: l, digest: null };
      }
      function Uu(e, n, t) {
        return {
          value: e,
          source: null,
          stack: t != null ? t : null,
          digest: n != null ? n : null,
        };
      }
      function Eo(e, n) {
        try {
          console.error(n.value);
        } catch (t) {
          setTimeout(function () {
            throw t;
          });
        }
      }
      function Mc(e, n, t) {
        ((t = qe(-1, t)), (t.tag = 3), (t.payload = { element: null }));
        var r = n.value;
        return (
          (t.callback = function () {
            (Tl || ((Tl = !0), (Io = r)), Eo(e, n));
          }),
          t
        );
      }
      function Uc(e, n, t) {
        ((t = qe(-1, t)), (t.tag = 3));
        var r = e.type.getDerivedStateFromError;
        if (typeof r === "function") {
          var l = n.value;
          ((t.payload = function () {
            return r(l);
          }),
            (t.callback = function () {
              Eo(e, n);
            }));
        }
        var u = e.stateNode;
        return (
          u !== null &&
            typeof u.componentDidCatch === "function" &&
            (t.callback = function () {
              (Eo(e, n),
                typeof r !== "function" &&
                  (Sn === null ? (Sn = new Set([this])) : Sn.add(this)));
              var o = n.stack;
              this.componentDidCatch(n.value, {
                componentStack: o !== null ? o : "",
              });
            }),
          t
        );
      }
      function Xs(e, n, t) {
        var r = e.pingCache;
        if (r === null) {
          r = e.pingCache = new O0();
          var l = new Set();
          r.set(n, l);
        } else ((l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l)));
        l.has(t) || (l.add(t), (e = X0.bind(null, e, n, t)), n.then(e, e));
      }
      function Zs(e) {
        do {
          var n;
          if ((n = e.tag === 13))
            ((n = e.memoizedState),
              (n = n !== null ? (n.dehydrated !== null ? !0 : !1) : !0));
          if (n) return e;
          e = e.return;
        } while (e !== null);
        return null;
      }
      function Gs(e, n, t, r, l) {
        if ((e.mode & 1) === 0)
          return (
            e === n
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (t.flags |= 131072),
                (t.flags &= -52805),
                t.tag === 1 &&
                  (t.alternate === null
                    ? (t.tag = 17)
                    : ((n = qe(-1, 1)), (n.tag = 2), kn(t, n, 1))),
                (t.lanes |= 1)),
            e
          );
        return ((e.flags |= 65536), (e.lanes = l), e);
      }
      function fe(e, n, t, r) {
        n.child = e === null ? dc(n, null, t, r) : St(n, e.child, t, r);
      }
      function Js(e, n, t, r, l) {
        t = t.render;
        var u = n.ref;
        if ((mt(n, l), (r = ci(e, n, t, r, u, l)), (t = fi()), e !== null && !me))
          return (
            (n.updateQueue = e.updateQueue),
            (n.flags &= -2053),
            (e.lanes &= ~l),
            tn(e, n, l)
          );
        return (B && t && qo(n), (n.flags |= 1), fe(e, n, r, l), n.child);
      }
      function Ys(e, n, t, r, l) {
        if (e === null) {
          var u = t.type;
          if (
            typeof u === "function" &&
            !Si(u) &&
            u.defaultProps === void 0 &&
            t.compare === null &&
            t.defaultProps === void 0
          )
            return ((n.tag = 15), (n.type = u), Vc(e, n, u, r, l));
          return (
            (e = al(t.type, null, r, n, n.mode, l)),
            (e.ref = n.ref),
            (e.return = n),
            (n.child = e)
          );
        }
        if (((u = e.child), (e.lanes & l) === 0)) {
          var o = u.memoizedProps;
          if (
            ((t = t.compare), (t = t !== null ? t : cr), t(o, r) && e.ref === n.ref)
          )
            return tn(e, n, l);
        }
        return (
          (n.flags |= 1),
          (e = _n(u, r)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e)
        );
      }
      function Vc(e, n, t, r, l) {
        if (e !== null) {
          var u = e.memoizedProps;
          if (cr(u, r) && e.ref === n.ref)
            if (((me = !1), (n.pendingProps = r = u), (e.lanes & l) !== 0))
              (e.flags & 131072) !== 0 && (me = !0);
            else return ((n.lanes = e.lanes), tn(e, n, l));
        }
        return _o(e, n, t, r, l);
      }
      function Bc(e, n, t) {
        var r = n.pendingProps,
          l = r.children,
          u = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden")
          if ((n.mode & 1) === 0)
            ((n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
              F(ft, ke),
              (ke |= t));
          else {
            if ((t & 1073741824) === 0)
              return (
                (e = u !== null ? u.baseLanes | t : t),
                (n.lanes = n.childLanes = 1073741824),
                (n.memoizedState = {
                  baseLanes: e,
                  cachePool: null,
                  transitions: null,
                }),
                (n.updateQueue = null),
                F(ft, ke),
                (ke |= e),
                null
              );
            ((n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
              (r = u !== null ? u.baseLanes : t),
              F(ft, ke),
              (ke |= r));
          }
        else
          (u !== null ? ((r = u.baseLanes | t), (n.memoizedState = null)) : (r = t),
            F(ft, ke),
            (ke |= r));
        return (fe(e, n, l, t), n.child);
      }
      function Wc(e, n) {
        var t = n.ref;
        if ((e === null && t !== null) || (e !== null && e.ref !== t))
          ((n.flags |= 512), (n.flags |= 2097152));
      }
      function _o(e, n, t, r, l) {
        var u = ge(t) ? Qn : se.current;
        if (
          ((u = wt(n, u)),
          mt(n, l),
          (t = ci(e, n, t, r, u, l)),
          (r = fi()),
          e !== null && !me)
        )
          return (
            (n.updateQueue = e.updateQueue),
            (n.flags &= -2053),
            (e.lanes &= ~l),
            tn(e, n, l)
          );
        return (B && r && qo(n), (n.flags |= 1), fe(e, n, t, l), n.child);
      }
      function qs(e, n, t, r, l) {
        if (ge(t)) {
          var u = !0;
          kl(n);
        } else u = !1;
        if ((mt(n, l), n.stateNode === null))
          (ol(e, n), Dc(n, t, r), So(n, t, r, l), (r = !0));
        else if (e === null) {
          var { stateNode: o, memoizedProps: i } = n;
          o.props = i;
          var s = o.context,
            d = t.contextType;
          typeof d === "object" && d !== null
            ? (d = Te(d))
            : ((d = ge(t) ? Qn : se.current), (d = wt(n, d)));
          var v = t.getDerivedStateFromProps,
            m =
              typeof v === "function" ||
              typeof o.getSnapshotBeforeUpdate === "function";
          (m ||
            (typeof o.UNSAFE_componentWillReceiveProps !== "function" &&
              typeof o.componentWillReceiveProps !== "function") ||
            ((i !== r || s !== d) && Ks(n, o, r, d)),
            (fn = !1));
          var p = n.memoizedState;
          ((o.state = p),
            Nl(n, r, o, l),
            (s = n.memoizedState),
            i !== r || p !== s || ye.current || fn
              ? (typeof v === "function" && (ko(n, t, v, r), (s = n.memoizedState)),
                (i = fn || $s(n, t, i, r, p, s, d))
                  ? (m ||
                      (typeof o.UNSAFE_componentWillMount !== "function" &&
                        typeof o.componentWillMount !== "function") ||
                      (typeof o.componentWillMount === "function" &&
                        o.componentWillMount(),
                      typeof o.UNSAFE_componentWillMount === "function" &&
                        o.UNSAFE_componentWillMount()),
                    typeof o.componentDidMount === "function" && (n.flags |= 4194308))
                  : (typeof o.componentDidMount === "function" &&
                      (n.flags |= 4194308),
                    (n.memoizedProps = r),
                    (n.memoizedState = s)),
                (o.props = r),
                (o.state = s),
                (o.context = d),
                (r = i))
              : (typeof o.componentDidMount === "function" && (n.flags |= 4194308),
                (r = !1)));
        } else {
          ((o = n.stateNode),
            hc(e, n),
            (i = n.memoizedProps),
            (d = n.type === n.elementType ? i : Me(n.type, i)),
            (o.props = d),
            (m = n.pendingProps),
            (p = o.context),
            (s = t.contextType),
            typeof s === "object" && s !== null
              ? (s = Te(s))
              : ((s = ge(t) ? Qn : se.current), (s = wt(n, s))));
          var g = t.getDerivedStateFromProps;
          ((v =
            typeof g === "function" ||
            typeof o.getSnapshotBeforeUpdate === "function") ||
            (typeof o.UNSAFE_componentWillReceiveProps !== "function" &&
              typeof o.componentWillReceiveProps !== "function") ||
            ((i !== m || p !== s) && Ks(n, o, r, s)),
            (fn = !1),
            (p = n.memoizedState),
            (o.state = p),
            Nl(n, r, o, l));
          var k = n.memoizedState;
          i !== m || p !== k || ye.current || fn
            ? (typeof g === "function" && (ko(n, t, g, r), (k = n.memoizedState)),
              (d = fn || $s(n, t, d, r, p, k, s) || !1)
                ? (v ||
                    (typeof o.UNSAFE_componentWillUpdate !== "function" &&
                      typeof o.componentWillUpdate !== "function") ||
                    (typeof o.componentWillUpdate === "function" &&
                      o.componentWillUpdate(r, k, s),
                    typeof o.UNSAFE_componentWillUpdate === "function" &&
                      o.UNSAFE_componentWillUpdate(r, k, s)),
                  typeof o.componentDidUpdate === "function" && (n.flags |= 4),
                  typeof o.getSnapshotBeforeUpdate === "function" &&
                    (n.flags |= 1024))
                : (typeof o.componentDidUpdate !== "function" ||
                    (i === e.memoizedProps && p === e.memoizedState) ||
                    (n.flags |= 4),
                  typeof o.getSnapshotBeforeUpdate !== "function" ||
                    (i === e.memoizedProps && p === e.memoizedState) ||
                    (n.flags |= 1024),
                  (n.memoizedProps = r),
                  (n.memoizedState = k)),
              (o.props = r),
              (o.state = k),
              (o.context = s),
              (r = d))
            : (typeof o.componentDidUpdate !== "function" ||
                (i === e.memoizedProps && p === e.memoizedState) ||
                (n.flags |= 4),
              typeof o.getSnapshotBeforeUpdate !== "function" ||
                (i === e.memoizedProps && p === e.memoizedState) ||
                (n.flags |= 1024),
              (r = !1));
        }
        return Co(e, n, t, r, u, l);
      }
      function Co(e, n, t, r, l, u) {
        Wc(e, n);
        var o = (n.flags & 128) !== 0;
        if (!r && !o) return (l && Us(n, t, !1), tn(e, n, u));
        ((r = n.stateNode), (F0.current = n));
        var i =
          o && typeof t.getDerivedStateFromError !== "function" ? null : r.render();
        return (
          (n.flags |= 1),
          e !== null && o
            ? ((n.child = St(n, e.child, null, u)), (n.child = St(n, null, i, u)))
            : fe(e, n, i, u),
          (n.memoizedState = r.state),
          l && Us(n, t, !0),
          n.child
        );
      }
      function Qc(e) {
        var n = e.stateNode;
        (n.pendingContext
          ? Ms(e, n.pendingContext, n.pendingContext !== n.context)
          : n.context && Ms(e, n.context, !1),
          oi(e, n.containerInfo));
      }
      function bs(e, n, t, r, l) {
        return (kt(), ei(l), (n.flags |= 256), fe(e, n, t, r), n.child);
      }
      function xo(e) {
        return { baseLanes: e, cachePool: null, transitions: null };
      }
      function Ac(e, n, t) {
        var r = n.pendingProps,
          l = A.current,
          u = !1,
          o = (n.flags & 128) !== 0,
          i;
        if (
          ((i = o) ||
            (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
          i)
        )
          ((u = !0), (n.flags &= -129));
        else if (e === null || e.memoizedState !== null) l |= 1;
        if ((F(A, l & 1), e === null)) {
          if (
            (go(n),
            (e = n.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null))
          )
            return (
              (n.mode & 1) === 0
                ? (n.lanes = 1)
                : e.data === "$!"
                  ? (n.lanes = 8)
                  : (n.lanes = 1073741824),
              null
            );
          return (
            (o = r.children),
            (e = r.fallback),
            u
              ? ((r = n.mode),
                (u = n.child),
                (o = { mode: "hidden", children: o }),
                (r & 1) === 0 && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = o))
                  : (u = jl(o, r, 0, null)),
                (e = Wn(e, r, t, null)),
                (u.return = n),
                (e.return = n),
                (u.sibling = e),
                (n.child = u),
                (n.child.memoizedState = xo(t)),
                (n.memoizedState = No),
                e)
              : hi(n, o)
          );
        }
        if (((l = e.memoizedState), l !== null && ((i = l.dehydrated), i !== null)))
          return D0(e, n, o, r, i, l, t);
        if (u) {
          ((u = r.fallback), (o = n.mode), (l = e.child), (i = l.sibling));
          var s = { mode: "hidden", children: r.children };
          return (
            (o & 1) === 0 && n.child !== l
              ? ((r = n.child),
                (r.childLanes = 0),
                (r.pendingProps = s),
                (n.deletions = null))
              : ((r = _n(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
            i !== null ? (u = _n(i, u)) : ((u = Wn(u, o, t, null)), (u.flags |= 2)),
            (u.return = n),
            (r.return = n),
            (r.sibling = u),
            (n.child = r),
            (r = u),
            (u = n.child),
            (o = e.child.memoizedState),
            (o =
              o === null
                ? xo(t)
                : {
                    baseLanes: o.baseLanes | t,
                    cachePool: null,
                    transitions: o.transitions,
                  }),
            (u.memoizedState = o),
            (u.childLanes = e.childLanes & ~t),
            (n.memoizedState = No),
            r
          );
        }
        return (
          (u = e.child),
          (e = u.sibling),
          (r = _n(u, { mode: "visible", children: r.children })),
          (n.mode & 1) === 0 && (r.lanes = t),
          (r.return = n),
          (r.sibling = null),
          e !== null &&
            ((t = n.deletions),
            t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
          (n.child = r),
          (n.memoizedState = null),
          r
        );
      }
      function hi(e, n) {
        return (
          (n = jl({ mode: "visible", children: n }, e.mode, 0, null)),
          (n.return = e),
          (e.child = n)
        );
      }
      function Jr(e, n, t, r) {
        return (
          r !== null && ei(r),
          St(n, e.child, null, t),
          (e = hi(n, n.pendingProps.children)),
          (e.flags |= 2),
          (n.memoizedState = null),
          e
        );
      }
      function D0(e, n, t, r, l, u, o) {
        if (t) {
          if (n.flags & 256)
            return ((n.flags &= -257), (r = Uu(Error(y(422)))), Jr(e, n, o, r));
          if (n.memoizedState !== null)
            return ((n.child = e.child), (n.flags |= 128), null);
          return (
            (u = r.fallback),
            (l = n.mode),
            (r = jl({ mode: "visible", children: r.children }, l, 0, null)),
            (u = Wn(u, l, o, null)),
            (u.flags |= 2),
            (r.return = n),
            (u.return = n),
            (r.sibling = u),
            (n.child = r),
            (n.mode & 1) !== 0 && St(n, e.child, null, o),
            (n.child.memoizedState = xo(o)),
            (n.memoizedState = No),
            u
          );
        }
        if ((n.mode & 1) === 0) return Jr(e, n, o, null);
        if (l.data === "$!") {
          if (((r = l.nextSibling && l.nextSibling.dataset), r)) var i = r.dgst;
          return (
            (r = i),
            (u = Error(y(419))),
            (r = Uu(u, r, void 0)),
            Jr(e, n, o, r)
          );
        }
        if (((i = (o & e.childLanes) !== 0), me || i)) {
          if (((r = ee), r !== null)) {
            switch (o & -o) {
              case 4:
                l = 2;
                break;
              case 16:
                l = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                l = 32;
                break;
              case 536870912:
                l = 268435456;
                break;
              default:
                l = 0;
            }
            ((l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l),
              l !== 0 &&
                l !== u.retryLane &&
                ((u.retryLane = l), nn(e, l), We(r, e, l, -1)));
          }
          return (ki(), (r = Uu(Error(y(421)))), Jr(e, n, o, r));
        }
        if (l.data === "$?")
          return (
            (n.flags |= 128),
            (n.child = e.child),
            (n = Z0.bind(null, e)),
            (l._reactRetry = n),
            null
          );
        return (
          (e = u.treeContext),
          (Se = wn(l.nextSibling)),
          (Ee = n),
          (B = !0),
          (Ve = null),
          e !== null &&
            ((xe[Pe++] = Je),
            (xe[Pe++] = Ye),
            (xe[Pe++] = An),
            (Je = e.id),
            (Ye = e.overflow),
            (An = n)),
          (n = hi(n, r.children)),
          (n.flags |= 4096),
          n
        );
      }
      function ea(e, n, t) {
        e.lanes |= n;
        var r = e.alternate;
        (r !== null && (r.lanes |= n), wo(e.return, n, t));
      }
      function Vu(e, n, t, r, l) {
        var u = e.memoizedState;
        u === null
          ? (e.memoizedState = {
              isBackwards: n,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: t,
              tailMode: l,
            })
          : ((u.isBackwards = n),
            (u.rendering = null),
            (u.renderingStartTime = 0),
            (u.last = r),
            (u.tail = t),
            (u.tailMode = l));
      }
      function Hc(e, n, t) {
        var r = n.pendingProps,
          l = r.revealOrder,
          u = r.tail;
        if ((fe(e, n, r.children, t), (r = A.current), (r & 2) !== 0))
          ((r = (r & 1) | 2), (n.flags |= 128));
        else {
          if (e !== null && (e.flags & 128) !== 0)
            e: for (e = n.child; e !== null;) {
              if (e.tag === 13) e.memoizedState !== null && ea(e, t, n);
              else if (e.tag === 19) ea(e, t, n);
              else if (e.child !== null) {
                ((e.child.return = e), (e = e.child));
                continue;
              }
              if (e === n) break e;
              for (; e.sibling === null;) {
                if (e.return === null || e.return === n) break e;
                e = e.return;
              }
              ((e.sibling.return = e.return), (e = e.sibling));
            }
          r &= 1;
        }
        if ((F(A, r), (n.mode & 1) === 0)) n.memoizedState = null;
        else
          switch (l) {
            case "forwards":
              t = n.child;
              for (l = null; t !== null;)
                ((e = t.alternate),
                  e !== null && xl(e) === null && (l = t),
                  (t = t.sibling));
              ((t = l),
                t === null
                  ? ((l = n.child), (n.child = null))
                  : ((l = t.sibling), (t.sibling = null)),
                Vu(n, !1, l, t, u));
              break;
            case "backwards":
              ((t = null), (l = n.child));
              for (n.child = null; l !== null;) {
                if (((e = l.alternate), e !== null && xl(e) === null)) {
                  n.child = l;
                  break;
                }
                ((e = l.sibling), (l.sibling = t), (t = l), (l = e));
              }
              Vu(n, !0, t, null, u);
              break;
            case "together":
              Vu(n, !1, null, null, void 0);
              break;
            default:
              n.memoizedState = null;
          }
        return n.child;
      }
      function ol(e, n) {
        (n.mode & 1) === 0 &&
          e !== null &&
          ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
      }
      function tn(e, n, t) {
        if (
          (e !== null && (n.dependencies = e.dependencies),
          (jn |= n.lanes),
          (t & n.childLanes) === 0)
        )
          return null;
        if (e !== null && n.child !== e.child) throw Error(y(153));
        if (n.child !== null) {
          ((e = n.child), (t = _n(e, e.pendingProps)), (n.child = t));
          for (t.return = n; e.sibling !== null;)
            ((e = e.sibling),
              (t = t.sibling = _n(e, e.pendingProps)),
              (t.return = n));
          t.sibling = null;
        }
        return n.child;
      }
      function M0(e, n, t) {
        switch (n.tag) {
          case 3:
            (Qc(n), kt());
            break;
          case 5:
            vc(n);
            break;
          case 1:
            ge(n.type) && kl(n);
            break;
          case 4:
            oi(n, n.stateNode.containerInfo);
            break;
          case 10:
            var r = n.type._context,
              l = n.memoizedProps.value;
            (F(_l, r._currentValue), (r._currentValue = l));
            break;
          case 13:
            if (((r = n.memoizedState), r !== null)) {
              if (r.dehydrated !== null)
                return (F(A, A.current & 1), (n.flags |= 128), null);
              if ((t & n.child.childLanes) !== 0) return Ac(e, n, t);
              return (
                F(A, A.current & 1),
                (e = tn(e, n, t)),
                e !== null ? e.sibling : null
              );
            }
            F(A, A.current & 1);
            break;
          case 19:
            if (((r = (t & n.childLanes) !== 0), (e.flags & 128) !== 0)) {
              if (r) return Hc(e, n, t);
              n.flags |= 128;
            }
            if (
              ((l = n.memoizedState),
              l !== null &&
                ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
              F(A, A.current),
              r)
            )
              break;
            else return null;
          case 22:
          case 23:
            return ((n.lanes = 0), Bc(e, n, t));
        }
        return tn(e, n, t);
      }
      function Vt(e, n) {
        if (!B)
          switch (e.tailMode) {
            case "hidden":
              n = e.tail;
              for (var t = null; n !== null;)
                (n.alternate !== null && (t = n), (n = n.sibling));
              t === null ? (e.tail = null) : (t.sibling = null);
              break;
            case "collapsed":
              t = e.tail;
              for (var r = null; t !== null;)
                (t.alternate !== null && (r = t), (t = t.sibling));
              r === null
                ? n || e.tail === null
                  ? (e.tail = null)
                  : (e.tail.sibling = null)
                : (r.sibling = null);
          }
      }
      function oe(e) {
        var n = e.alternate !== null && e.alternate.child === e.child,
          t = 0,
          r = 0;
        if (n)
          for (var l = e.child; l !== null;)
            ((t |= l.lanes | l.childLanes),
              (r |= l.subtreeFlags & 14680064),
              (r |= l.flags & 14680064),
              (l.return = e),
              (l = l.sibling));
        else
          for (l = e.child; l !== null;)
            ((t |= l.lanes | l.childLanes),
              (r |= l.subtreeFlags),
              (r |= l.flags),
              (l.return = e),
              (l = l.sibling));
        return ((e.subtreeFlags |= r), (e.childLanes = t), n);
      }
      function U0(e, n, t) {
        var r = n.pendingProps;
        switch ((bo(n), n.tag)) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return (oe(n), null);
          case 1:
            return (ge(n.type) && wl(), oe(n), null);
          case 3:
            if (
              ((r = n.stateNode),
              Et(),
              M(ye),
              M(se),
              si(),
              r.pendingContext &&
                ((r.context = r.pendingContext), (r.pendingContext = null)),
              e === null || e.child === null)
            )
              Zr(n)
                ? (n.flags |= 4)
                : e === null ||
                  (e.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                  ((n.flags |= 1024), Ve !== null && (Do(Ve), (Ve = null)));
            return (Po(e, n), oe(n), null);
          case 5:
            ii(n);
            var l = Vn(vr.current);
            if (((t = n.type), e !== null && n.stateNode != null))
              ($c(e, n, t, r, l),
                e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152)));
            else {
              if (!r) {
                if (n.stateNode === null) throw Error(y(166));
                return (oe(n), null);
              }
              if (((e = Vn(Xe.current)), Zr(n))) {
                ((r = n.stateNode), (t = n.type));
                var u = n.memoizedProps;
                switch (((r[$e] = n), (r[pr] = u), (e = (n.mode & 1) !== 0), t)) {
                  case "dialog":
                    (D("cancel", r), D("close", r));
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", r);
                    break;
                  case "video":
                  case "audio":
                    for (l = 0; l < Xt.length; l++) D(Xt[l], r);
                    break;
                  case "source":
                    D("error", r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    (D("error", r), D("load", r));
                    break;
                  case "details":
                    D("toggle", r);
                    break;
                  case "input":
                    (cs(r, u), D("invalid", r));
                    break;
                  case "select":
                    ((r._wrapperState = { wasMultiple: !!u.multiple }),
                      D("invalid", r));
                    break;
                  case "textarea":
                    (ds(r, u), D("invalid", r));
                }
                (Yu(t, u), (l = null));
                for (var o in u)
                  if (u.hasOwnProperty(o)) {
                    var i = u[o];
                    o === "children"
                      ? typeof i === "string"
                        ? r.textContent !== i &&
                          (u.suppressHydrationWarning !== !0 &&
                            Xr(r.textContent, i, e),
                          (l = ["children", i]))
                        : typeof i === "number" &&
                          r.textContent !== "" + i &&
                          (u.suppressHydrationWarning !== !0 &&
                            Xr(r.textContent, i, e),
                          (l = ["children", "" + i]))
                      : rr.hasOwnProperty(o) &&
                        i != null &&
                        o === "onScroll" &&
                        D("scroll", r);
                  }
                switch (t) {
                  case "input":
                    (Br(r), fs(r, u, !0));
                    break;
                  case "textarea":
                    (Br(r), ps(r));
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    typeof u.onClick === "function" && (r.onclick = gl);
                }
                ((r = l), (n.updateQueue = r), r !== null && (n.flags |= 4));
              } else {
                ((o = l.nodeType === 9 ? l : l.ownerDocument),
                  e === "http://www.w3.org/1999/xhtml" && (e = ka(t)),
                  e === "http://www.w3.org/1999/xhtml"
                    ? t === "script"
                      ? ((e = o.createElement("div")),
                        (e.innerHTML = "<script><\/script>"),
                        (e = e.removeChild(e.firstChild)))
                      : typeof r.is === "string"
                        ? (e = o.createElement(t, { is: r.is }))
                        : ((e = o.createElement(t)),
                          t === "select" &&
                            ((o = e),
                            r.multiple
                              ? (o.multiple = !0)
                              : r.size && (o.size = r.size)))
                    : (e = o.createElementNS(e, t)),
                  (e[$e] = n),
                  (e[pr] = r),
                  jc(e, n, !1, !1),
                  (n.stateNode = e));
                e: {
                  switch (((o = qu(t, r)), t)) {
                    case "dialog":
                      (D("cancel", e), D("close", e), (l = r));
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      (D("load", e), (l = r));
                      break;
                    case "video":
                    case "audio":
                      for (l = 0; l < Xt.length; l++) D(Xt[l], e);
                      l = r;
                      break;
                    case "source":
                      (D("error", e), (l = r));
                      break;
                    case "img":
                    case "image":
                    case "link":
                      (D("error", e), D("load", e), (l = r));
                      break;
                    case "details":
                      (D("toggle", e), (l = r));
                      break;
                    case "input":
                      (cs(e, r), (l = Ku(e, r)), D("invalid", e));
                      break;
                    case "option":
                      l = r;
                      break;
                    case "select":
                      ((e._wrapperState = { wasMultiple: !!r.multiple }),
                        (l = j({}, r, { value: void 0 })),
                        D("invalid", e));
                      break;
                    case "textarea":
                      (ds(e, r), (l = Gu(e, r)), D("invalid", e));
                      break;
                    default:
                      l = r;
                  }
                  (Yu(t, l), (i = l));
                  for (u in i)
                    if (i.hasOwnProperty(u)) {
                      var s = i[u];
                      u === "style"
                        ? _a(e, s)
                        : u === "dangerouslySetInnerHTML"
                          ? ((s = s ? s.__html : void 0), s != null && Sa(e, s))
                          : u === "children"
                            ? typeof s === "string"
                              ? (t !== "textarea" || s !== "") && lr(e, s)
                              : typeof s === "number" && lr(e, "" + s)
                            : u !== "suppressContentEditableWarning" &&
                              u !== "suppressHydrationWarning" &&
                              u !== "autoFocus" &&
                              (rr.hasOwnProperty(u)
                                ? s != null && u === "onScroll" && D("scroll", e)
                                : s != null && Vo(e, u, s, o));
                    }
                  switch (t) {
                    case "input":
                      (Br(e), fs(e, r, !1));
                      break;
                    case "textarea":
                      (Br(e), ps(e));
                      break;
                    case "option":
                      r.value != null && e.setAttribute("value", "" + Cn(r.value));
                      break;
                    case "select":
                      ((e.multiple = !!r.multiple),
                        (u = r.value),
                        u != null
                          ? dt(e, !!r.multiple, u, !1)
                          : r.defaultValue != null &&
                            dt(e, !!r.multiple, r.defaultValue, !0));
                      break;
                    default:
                      typeof l.onClick === "function" && (e.onclick = gl);
                  }
                  switch (t) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      r = !!r.autoFocus;
                      break e;
                    case "img":
                      r = !0;
                      break e;
                    default:
                      r = !1;
                  }
                }
                r && (n.flags |= 4);
              }
              n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
            }
            return (oe(n), null);
          case 6:
            if (e && n.stateNode != null) Kc(e, n, e.memoizedProps, r);
            else {
              if (typeof r !== "string" && n.stateNode === null) throw Error(y(166));
              if (((t = Vn(vr.current)), Vn(Xe.current), Zr(n))) {
                if (
                  ((r = n.stateNode),
                  (t = n.memoizedProps),
                  (r[$e] = n),
                  (u = r.nodeValue !== t))
                ) {
                  if (((e = Ee), e !== null))
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, t, (e.mode & 1) !== 0);
                        break;
                      case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 &&
                          Xr(r.nodeValue, t, (e.mode & 1) !== 0);
                    }
                }
                u && (n.flags |= 4);
              } else
                ((r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
                  (r[$e] = n),
                  (n.stateNode = r));
            }
            return (oe(n), null);
          case 13:
            if (
              (M(A),
              (r = n.memoizedState),
              e === null ||
                (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
            ) {
              if (B && Se !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0)
                (cc(), kt(), (n.flags |= 98560), (u = !1));
              else if (((u = Zr(n)), r !== null && r.dehydrated !== null)) {
                if (e === null) {
                  if (!u) throw Error(y(318));
                  if (
                    ((u = n.memoizedState),
                    (u = u !== null ? u.dehydrated : null),
                    !u)
                  )
                    throw Error(y(317));
                  u[$e] = n;
                } else
                  (kt(),
                    (n.flags & 128) === 0 && (n.memoizedState = null),
                    (n.flags |= 4));
                (oe(n), (u = !1));
              } else (Ve !== null && (Do(Ve), (Ve = null)), (u = !0));
              if (!u) return n.flags & 65536 ? n : null;
            }
            if ((n.flags & 128) !== 0) return ((n.lanes = t), n);
            return (
              (r = r !== null),
              r !== (e !== null && e.memoizedState !== null) &&
                r &&
                ((n.child.flags |= 8192),
                (n.mode & 1) !== 0 &&
                  (e === null || (A.current & 1) !== 0 ? q === 0 && (q = 3) : ki())),
              n.updateQueue !== null && (n.flags |= 4),
              oe(n),
              null
            );
          case 4:
            return (
              Et(),
              Po(e, n),
              e === null && fr(n.stateNode.containerInfo),
              oe(n),
              null
            );
          case 10:
            return (ri(n.type._context), oe(n), null);
          case 17:
            return (ge(n.type) && wl(), oe(n), null);
          case 19:
            if ((M(A), (u = n.memoizedState), u === null)) return (oe(n), null);
            if (((r = (n.flags & 128) !== 0), (o = u.rendering), o === null))
              if (r) Vt(u, !1);
              else {
                if (q !== 0 || (e !== null && (e.flags & 128) !== 0))
                  for (e = n.child; e !== null;) {
                    if (((o = xl(e)), o !== null)) {
                      ((n.flags |= 128),
                        Vt(u, !1),
                        (r = o.updateQueue),
                        r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                        (n.subtreeFlags = 0),
                        (r = t));
                      for (t = n.child; t !== null;)
                        ((u = t),
                          (e = r),
                          (u.flags &= 14680066),
                          (o = u.alternate),
                          o === null
                            ? ((u.childLanes = 0),
                              (u.lanes = e),
                              (u.child = null),
                              (u.subtreeFlags = 0),
                              (u.memoizedProps = null),
                              (u.memoizedState = null),
                              (u.updateQueue = null),
                              (u.dependencies = null),
                              (u.stateNode = null))
                            : ((u.childLanes = o.childLanes),
                              (u.lanes = o.lanes),
                              (u.child = o.child),
                              (u.subtreeFlags = 0),
                              (u.deletions = null),
                              (u.memoizedProps = o.memoizedProps),
                              (u.memoizedState = o.memoizedState),
                              (u.updateQueue = o.updateQueue),
                              (u.type = o.type),
                              (e = o.dependencies),
                              (u.dependencies =
                                e === null
                                  ? null
                                  : {
                                      lanes: e.lanes,
                                      firstContext: e.firstContext,
                                    })),
                          (t = t.sibling));
                      return (F(A, (A.current & 1) | 2), n.child);
                    }
                    e = e.sibling;
                  }
                u.tail !== null &&
                  Z() > Ct &&
                  ((n.flags |= 128), (r = !0), Vt(u, !1), (n.lanes = 4194304));
              }
            else {
              if (!r)
                if (((e = xl(o)), e !== null)) {
                  if (
                    ((n.flags |= 128),
                    (r = !0),
                    (t = e.updateQueue),
                    t !== null && ((n.updateQueue = t), (n.flags |= 4)),
                    Vt(u, !0),
                    u.tail === null && u.tailMode === "hidden" && !o.alternate && !B)
                  )
                    return (oe(n), null);
                } else
                  2 * Z() - u.renderingStartTime > Ct &&
                    t !== 1073741824 &&
                    ((n.flags |= 128), (r = !0), Vt(u, !1), (n.lanes = 4194304));
              u.isBackwards
                ? ((o.sibling = n.child), (n.child = o))
                : ((t = u.last),
                  t !== null ? (t.sibling = o) : (n.child = o),
                  (u.last = o));
            }
            if (u.tail !== null)
              return (
                (n = u.tail),
                (u.rendering = n),
                (u.tail = n.sibling),
                (u.renderingStartTime = Z()),
                (n.sibling = null),
                (t = A.current),
                F(A, r ? (t & 1) | 2 : t & 1),
                n
              );
            return (oe(n), null);
          case 22:
          case 23:
            return (
              wi(),
              (r = n.memoizedState !== null),
              e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
              r && (n.mode & 1) !== 0
                ? (ke & 1073741824) !== 0 &&
                  (oe(n), n.subtreeFlags & 6 && (n.flags |= 8192))
                : oe(n),
              null
            );
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(y(156, n.tag));
      }
      function V0(e, n) {
        switch ((bo(n), n.tag)) {
          case 1:
            return (
              ge(n.type) && wl(),
              (e = n.flags),
              e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
            );
          case 3:
            return (
              Et(),
              M(ye),
              M(se),
              si(),
              (e = n.flags),
              (e & 65536) !== 0 && (e & 128) === 0
                ? ((n.flags = (e & -65537) | 128), n)
                : null
            );
          case 5:
            return (ii(n), null);
          case 13:
            if ((M(A), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
              if (n.alternate === null) throw Error(y(340));
              kt();
            }
            return (
              (e = n.flags),
              e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
            );
          case 19:
            return (M(A), null);
          case 4:
            return (Et(), null);
          case 10:
            return (ri(n.type._context), null);
          case 22:
          case 23:
            return (wi(), null);
          case 24:
            return null;
          default:
            return null;
        }
      }
      function ct(e, n) {
        var t = e.ref;
        if (t !== null)
          if (typeof t === "function")
            try {
              t(null);
            } catch (r) {
              K(e, n, r);
            }
          else t.current = null;
      }
      function zo(e, n, t) {
        try {
          t();
        } catch (r) {
          K(e, n, r);
        }
      }
      function W0(e, n) {
        if (((co = vl), (e = Ya()), Yo(e))) {
          if ("selectionStart" in e)
            var t = { start: e.selectionStart, end: e.selectionEnd };
          else
            e: {
              t = ((t = e.ownerDocument) && t.defaultView) || window;
              var r = t.getSelection && t.getSelection();
              if (r && r.rangeCount !== 0) {
                t = r.anchorNode;
                var { anchorOffset: l, focusNode: u } = r;
                r = r.focusOffset;
                try {
                  (t.nodeType, u.nodeType);
                } catch (h) {
                  t = null;
                  break e;
                }
                var o = 0,
                  i = -1,
                  s = -1,
                  d = 0,
                  v = 0,
                  m = e,
                  p = null;
                n: for (;;) {
                  for (var g; ;) {
                    if (
                      (m !== t || (l !== 0 && m.nodeType !== 3) || (i = o + l),
                      m !== u || (r !== 0 && m.nodeType !== 3) || (s = o + r),
                      m.nodeType === 3 && (o += m.nodeValue.length),
                      (g = m.firstChild) === null)
                    )
                      break;
                    ((p = m), (m = g));
                  }
                  for (;;) {
                    if (m === e) break n;
                    if (
                      (p === t && ++d === l && (i = o),
                      p === u && ++v === r && (s = o),
                      (g = m.nextSibling) !== null)
                    )
                      break;
                    ((m = p), (p = m.parentNode));
                  }
                  m = g;
                }
                t = i === -1 || s === -1 ? null : { start: i, end: s };
              } else t = null;
            }
          t = t || { start: 0, end: 0 };
        } else t = null;
        ((fo = { focusedElem: e, selectionRange: t }), (vl = !1));
        for (S = n; S !== null;)
          if (((n = S), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
            ((e.return = n), (S = e));
          else
            for (; S !== null;) {
              n = S;
              try {
                var k = n.alternate;
                if ((n.flags & 1024) !== 0)
                  switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                      break;
                    case 1:
                      if (k !== null) {
                        var { memoizedProps: E, memoizedState: U } = k,
                          f = n.stateNode,
                          a = f.getSnapshotBeforeUpdate(
                            n.elementType === n.type ? E : Me(n.type, E),
                            U,
                          );
                        f.__reactInternalSnapshotBeforeUpdate = a;
                      }
                      break;
                    case 3:
                      var c = n.stateNode.containerInfo;
                      c.nodeType === 1
                        ? (c.textContent = "")
                        : c.nodeType === 9 &&
                          c.documentElement &&
                          c.removeChild(c.documentElement);
                      break;
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                      break;
                    default:
                      throw Error(y(163));
                  }
              } catch (h) {
                K(n, n.return, h);
              }
              if (((e = n.sibling), e !== null)) {
                ((e.return = n.return), (S = e));
                break;
              }
              S = n.return;
            }
        return ((k = na), (na = !1), k);
      }
      function er(e, n, t) {
        var r = n.updateQueue;
        if (((r = r !== null ? r.lastEffect : null), r !== null)) {
          var l = (r = r.next);
          do {
            if ((l.tag & e) === e) {
              var u = l.destroy;
              ((l.destroy = void 0), u !== void 0 && zo(n, t, u));
            }
            l = l.next;
          } while (l !== r);
        }
      }
      function Al(e, n) {
        if (
          ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
        ) {
          var t = (n = n.next);
          do {
            if ((t.tag & e) === e) {
              var r = t.create;
              t.destroy = r();
            }
            t = t.next;
          } while (t !== n);
        }
      }
      function Lo(e) {
        var n = e.ref;
        if (n !== null) {
          var t = e.stateNode;
          switch (e.tag) {
            case 5:
              e = t;
              break;
            default:
              e = t;
          }
          typeof n === "function" ? n(e) : (n.current = e);
        }
      }
      function Xc(e) {
        var n = e.alternate;
        (n !== null && ((e.alternate = null), Xc(n)),
          (e.child = null),
          (e.deletions = null),
          (e.sibling = null),
          e.tag === 5 &&
            ((n = e.stateNode),
            n !== null &&
              (delete n[$e], delete n[pr], delete n[vo], delete n[E0], delete n[_0])),
          (e.stateNode = null),
          (e.return = null),
          (e.dependencies = null),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.pendingProps = null),
          (e.stateNode = null),
          (e.updateQueue = null));
      }
      function Zc(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
      }
      function ta(e) {
        e: for (;;) {
          for (; e.sibling === null;) {
            if (e.return === null || Zc(e.return)) return null;
            e = e.return;
          }
          e.sibling.return = e.return;
          for (e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2) continue e;
            if (e.child === null || e.tag === 4) continue e;
            else ((e.child.return = e), (e = e.child));
          }
          if (!(e.flags & 2)) return e.stateNode;
        }
      }
      function To(e, n, t) {
        var r = e.tag;
        if (r === 5 || r === 6)
          ((e = e.stateNode),
            n
              ? t.nodeType === 8
                ? t.parentNode.insertBefore(e, n)
                : t.insertBefore(e, n)
              : (t.nodeType === 8
                  ? ((n = t.parentNode), n.insertBefore(e, t))
                  : ((n = t), n.appendChild(e)),
                (t = t._reactRootContainer),
                (t !== null && t !== void 0) ||
                  n.onclick !== null ||
                  (n.onclick = gl)));
        else if (r !== 4 && ((e = e.child), e !== null))
          for (To(e, n, t), e = e.sibling; e !== null;)
            (To(e, n, t), (e = e.sibling));
      }
      function Ro(e, n, t) {
        var r = e.tag;
        if (r === 5 || r === 6)
          ((e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e));
        else if (r !== 4 && ((e = e.child), e !== null))
          for (Ro(e, n, t), e = e.sibling; e !== null;)
            (Ro(e, n, t), (e = e.sibling));
      }
      function an(e, n, t) {
        for (t = t.child; t !== null;) (Gc(e, n, t), (t = t.sibling));
      }
      function Gc(e, n, t) {
        if (Ke && typeof Ke.onCommitFiberUnmount === "function")
          try {
            Ke.onCommitFiberUnmount(Fl, t);
          } catch (i) {}
        switch (t.tag) {
          case 5:
            ie || ct(t, n);
          case 6:
            var r = ne,
              l = Ue;
            ((ne = null),
              an(e, n, t),
              (ne = r),
              (Ue = l),
              ne !== null &&
                (Ue
                  ? ((e = ne),
                    (t = t.stateNode),
                    e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
                  : ne.removeChild(t.stateNode)));
            break;
          case 18:
            ne !== null &&
              (Ue
                ? ((e = ne),
                  (t = t.stateNode),
                  e.nodeType === 8
                    ? Ru(e.parentNode, t)
                    : e.nodeType === 1 && Ru(e, t),
                  sr(e))
                : Ru(ne, t.stateNode));
            break;
          case 4:
            ((r = ne),
              (l = Ue),
              (ne = t.stateNode.containerInfo),
              (Ue = !0),
              an(e, n, t),
              (ne = r),
              (Ue = l));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (
              !ie &&
              ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
            ) {
              l = r = r.next;
              do {
                var u = l,
                  o = u.destroy;
                ((u = u.tag),
                  o !== void 0 &&
                    ((u & 2) !== 0 ? zo(t, n, o) : (u & 4) !== 0 && zo(t, n, o)),
                  (l = l.next));
              } while (l !== r);
            }
            an(e, n, t);
            break;
          case 1:
            if (
              !ie &&
              (ct(t, n),
              (r = t.stateNode),
              typeof r.componentWillUnmount === "function")
            )
              try {
                ((r.props = t.memoizedProps),
                  (r.state = t.memoizedState),
                  r.componentWillUnmount());
              } catch (i) {
                K(t, n, i);
              }
            an(e, n, t);
            break;
          case 21:
            an(e, n, t);
            break;
          case 22:
            t.mode & 1
              ? ((ie = (r = ie) || t.memoizedState !== null), an(e, n, t), (ie = r))
              : an(e, n, t);
            break;
          default:
            an(e, n, t);
        }
      }
      function ra(e) {
        var n = e.updateQueue;
        if (n !== null) {
          e.updateQueue = null;
          var t = e.stateNode;
          (t === null && (t = e.stateNode = new B0()),
            n.forEach(function (r) {
              var l = G0.bind(null, e, r);
              t.has(r) || (t.add(r), r.then(l, l));
            }));
        }
      }
      function De(e, n) {
        var t = n.deletions;
        if (t !== null)
          for (var r = 0; r < t.length; r++) {
            var l = t[r];
            try {
              var u = e,
                o = n,
                i = o;
              e: for (; i !== null;) {
                switch (i.tag) {
                  case 5:
                    ((ne = i.stateNode), (Ue = !1));
                    break e;
                  case 3:
                    ((ne = i.stateNode.containerInfo), (Ue = !0));
                    break e;
                  case 4:
                    ((ne = i.stateNode.containerInfo), (Ue = !0));
                    break e;
                }
                i = i.return;
              }
              if (ne === null) throw Error(y(160));
              (Gc(u, o, l), (ne = null), (Ue = !1));
              var s = l.alternate;
              (s !== null && (s.return = null), (l.return = null));
            } catch (d) {
              K(l, n, d);
            }
          }
        if (n.subtreeFlags & 12854)
          for (n = n.child; n !== null;) (Jc(n, e), (n = n.sibling));
      }
      function Jc(e, n) {
        var { alternate: t, flags: r } = e;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            if ((De(n, e), He(e), r & 4)) {
              try {
                (er(3, e, e.return), Al(3, e));
              } catch (E) {
                K(e, e.return, E);
              }
              try {
                er(5, e, e.return);
              } catch (E) {
                K(e, e.return, E);
              }
            }
            break;
          case 1:
            (De(n, e), He(e), r & 512 && t !== null && ct(t, t.return));
            break;
          case 5:
            if (
              (De(n, e),
              He(e),
              r & 512 && t !== null && ct(t, t.return),
              e.flags & 32)
            ) {
              var l = e.stateNode;
              try {
                lr(l, "");
              } catch (E) {
                K(e, e.return, E);
              }
            }
            if (r & 4 && ((l = e.stateNode), l != null)) {
              var u = e.memoizedProps,
                o = t !== null ? t.memoizedProps : u,
                i = e.type,
                s = e.updateQueue;
              if (((e.updateQueue = null), s !== null))
                try {
                  (i === "input" && u.type === "radio" && u.name != null && ga(l, u),
                    qu(i, o));
                  var d = qu(i, u);
                  for (o = 0; o < s.length; o += 2) {
                    var v = s[o],
                      m = s[o + 1];
                    v === "style"
                      ? _a(l, m)
                      : v === "dangerouslySetInnerHTML"
                        ? Sa(l, m)
                        : v === "children"
                          ? lr(l, m)
                          : Vo(l, v, m, d);
                  }
                  switch (i) {
                    case "input":
                      Xu(l, u);
                      break;
                    case "textarea":
                      wa(l, u);
                      break;
                    case "select":
                      var p = l._wrapperState.wasMultiple;
                      l._wrapperState.wasMultiple = !!u.multiple;
                      var g = u.value;
                      g != null
                        ? dt(l, !!u.multiple, g, !1)
                        : p !== !!u.multiple &&
                          (u.defaultValue != null
                            ? dt(l, !!u.multiple, u.defaultValue, !0)
                            : dt(l, !!u.multiple, u.multiple ? [] : "", !1));
                  }
                  l[pr] = u;
                } catch (E) {
                  K(e, e.return, E);
                }
            }
            break;
          case 6:
            if ((De(n, e), He(e), r & 4)) {
              if (e.stateNode === null) throw Error(y(162));
              ((l = e.stateNode), (u = e.memoizedProps));
              try {
                l.nodeValue = u;
              } catch (E) {
                K(e, e.return, E);
              }
            }
            break;
          case 3:
            if (
              (De(n, e), He(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
            )
              try {
                sr(n.containerInfo);
              } catch (E) {
                K(e, e.return, E);
              }
            break;
          case 4:
            (De(n, e), He(e));
            break;
          case 13:
            (De(n, e),
              He(e),
              (l = e.child),
              l.flags & 8192 &&
                ((u = l.memoizedState !== null),
                (l.stateNode.isHidden = u),
                !u ||
                  (l.alternate !== null && l.alternate.memoizedState !== null) ||
                  (yi = Z())),
              r & 4 && ra(e));
            break;
          case 22:
            if (
              ((v = t !== null && t.memoizedState !== null),
              e.mode & 1 ? ((ie = (d = ie) || v), De(n, e), (ie = d)) : De(n, e),
              He(e),
              r & 8192)
            ) {
              if (
                ((d = e.memoizedState !== null),
                (e.stateNode.isHidden = d) && !v && (e.mode & 1) !== 0)
              )
                for (S = e, v = e.child; v !== null;) {
                  for (m = S = v; S !== null;) {
                    switch (((p = S), (g = p.child), p.tag)) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                        er(4, p, p.return);
                        break;
                      case 1:
                        ct(p, p.return);
                        var k = p.stateNode;
                        if (typeof k.componentWillUnmount === "function") {
                          ((r = p), (t = p.return));
                          try {
                            ((n = r),
                              (k.props = n.memoizedProps),
                              (k.state = n.memoizedState),
                              k.componentWillUnmount());
                          } catch (E) {
                            K(r, t, E);
                          }
                        }
                        break;
                      case 5:
                        ct(p, p.return);
                        break;
                      case 22:
                        if (p.memoizedState !== null) {
                          ua(m);
                          continue;
                        }
                    }
                    g !== null ? ((g.return = p), (S = g)) : ua(m);
                  }
                  v = v.sibling;
                }
              e: for (v = null, m = e; ;) {
                if (m.tag === 5) {
                  if (v === null) {
                    v = m;
                    try {
                      ((l = m.stateNode),
                        d
                          ? ((u = l.style),
                            typeof u.setProperty === "function"
                              ? u.setProperty("display", "none", "important")
                              : (u.display = "none"))
                          : ((i = m.stateNode),
                            (s = m.memoizedProps.style),
                            (o =
                              s !== void 0 &&
                              s !== null &&
                              s.hasOwnProperty("display")
                                ? s.display
                                : null),
                            (i.style.display = Ea("display", o))));
                    } catch (E) {
                      K(e, e.return, E);
                    }
                  }
                } else if (m.tag === 6) {
                  if (v === null)
                    try {
                      m.stateNode.nodeValue = d ? "" : m.memoizedProps;
                    } catch (E) {
                      K(e, e.return, E);
                    }
                } else if (
                  ((m.tag !== 22 && m.tag !== 23) ||
                    m.memoizedState === null ||
                    m === e) &&
                  m.child !== null
                ) {
                  ((m.child.return = m), (m = m.child));
                  continue;
                }
                if (m === e) break e;
                for (; m.sibling === null;) {
                  if (m.return === null || m.return === e) break e;
                  (v === m && (v = null), (m = m.return));
                }
                (v === m && (v = null),
                  (m.sibling.return = m.return),
                  (m = m.sibling));
              }
            }
            break;
          case 19:
            (De(n, e), He(e), r & 4 && ra(e));
            break;
          case 21:
            break;
          default:
            (De(n, e), He(e));
        }
      }
      function He(e) {
        var n = e.flags;
        if (n & 2) {
          try {
            e: {
              for (var t = e.return; t !== null;) {
                if (Zc(t)) {
                  var r = t;
                  break e;
                }
                t = t.return;
              }
              throw Error(y(160));
            }
            switch (r.tag) {
              case 5:
                var l = r.stateNode;
                r.flags & 32 && (lr(l, ""), (r.flags &= -33));
                var u = ta(e);
                Ro(e, u, l);
                break;
              case 3:
              case 4:
                var o = r.stateNode.containerInfo,
                  i = ta(e);
                To(e, i, o);
                break;
              default:
                throw Error(y(161));
            }
          } catch (s) {
            K(e, e.return, s);
          }
          e.flags &= -3;
        }
        n & 4096 && (e.flags &= -4097);
      }
      function Q0(e, n, t) {
        ((S = e), Yc(e, n, t));
      }
      function Yc(e, n, t) {
        for (var r = (e.mode & 1) !== 0; S !== null;) {
          var l = S,
            u = l.child;
          if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || Yr;
            if (!o) {
              var i = l.alternate,
                s = (i !== null && i.memoizedState !== null) || ie;
              i = Yr;
              var d = ie;
              if (((Yr = o), (ie = s) && !d))
                for (S = l; S !== null;)
                  ((o = S),
                    (s = o.child),
                    o.tag === 22 && o.memoizedState !== null
                      ? oa(l)
                      : s !== null
                        ? ((s.return = o), (S = s))
                        : oa(l));
              for (; u !== null;) ((S = u), Yc(u, n, t), (u = u.sibling));
              ((S = l), (Yr = i), (ie = d));
            }
            la(e, n, t);
          } else
            (l.subtreeFlags & 8772) !== 0 && u !== null
              ? ((u.return = l), (S = u))
              : la(e, n, t);
        }
      }
      function la(e) {
        for (; S !== null;) {
          var n = S;
          if ((n.flags & 8772) !== 0) {
            var t = n.alternate;
            try {
              if ((n.flags & 8772) !== 0)
                switch (n.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ie || Al(5, n);
                    break;
                  case 1:
                    var r = n.stateNode;
                    if (n.flags & 4 && !ie)
                      if (t === null) r.componentDidMount();
                      else {
                        var l =
                          n.elementType === n.type
                            ? t.memoizedProps
                            : Me(n.type, t.memoizedProps);
                        r.componentDidUpdate(
                          l,
                          t.memoizedState,
                          r.__reactInternalSnapshotBeforeUpdate,
                        );
                      }
                    var u = n.updateQueue;
                    u !== null && As(n, u, r);
                    break;
                  case 3:
                    var o = n.updateQueue;
                    if (o !== null) {
                      if (((t = null), n.child !== null))
                        switch (n.child.tag) {
                          case 5:
                            t = n.child.stateNode;
                            break;
                          case 1:
                            t = n.child.stateNode;
                        }
                      As(n, o, t);
                    }
                    break;
                  case 5:
                    var i = n.stateNode;
                    if (t === null && n.flags & 4) {
                      t = i;
                      var s = n.memoizedProps;
                      switch (n.type) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                          s.autoFocus && t.focus();
                          break;
                        case "img":
                          s.src && (t.src = s.src);
                      }
                    }
                    break;
                  case 6:
                    break;
                  case 4:
                    break;
                  case 12:
                    break;
                  case 13:
                    if (n.memoizedState === null) {
                      var d = n.alternate;
                      if (d !== null) {
                        var v = d.memoizedState;
                        if (v !== null) {
                          var m = v.dehydrated;
                          m !== null && sr(m);
                        }
                      }
                    }
                    break;
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                    break;
                  default:
                    throw Error(y(163));
                }
              ie || (n.flags & 512 && Lo(n));
            } catch (p) {
              K(n, n.return, p);
            }
          }
          if (n === e) {
            S = null;
            break;
          }
          if (((t = n.sibling), t !== null)) {
            ((t.return = n.return), (S = t));
            break;
          }
          S = n.return;
        }
      }
      function ua(e) {
        for (; S !== null;) {
          var n = S;
          if (n === e) {
            S = null;
            break;
          }
          var t = n.sibling;
          if (t !== null) {
            ((t.return = n.return), (S = t));
            break;
          }
          S = n.return;
        }
      }
      function oa(e) {
        for (; S !== null;) {
          var n = S;
          try {
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                var t = n.return;
                try {
                  Al(4, n);
                } catch (s) {
                  K(n, t, s);
                }
                break;
              case 1:
                var r = n.stateNode;
                if (typeof r.componentDidMount === "function") {
                  var l = n.return;
                  try {
                    r.componentDidMount();
                  } catch (s) {
                    K(n, l, s);
                  }
                }
                var u = n.return;
                try {
                  Lo(n);
                } catch (s) {
                  K(n, u, s);
                }
                break;
              case 5:
                var o = n.return;
                try {
                  Lo(n);
                } catch (s) {
                  K(n, o, s);
                }
            }
          } catch (s) {
            K(n, n.return, s);
          }
          if (n === e) {
            S = null;
            break;
          }
          var i = n.sibling;
          if (i !== null) {
            ((i.return = n.return), (S = i));
            break;
          }
          S = n.return;
        }
      }
      function de() {
        return (R & 6) !== 0 ? Z() : il !== -1 ? il : (il = Z());
      }
      function En(e) {
        if ((e.mode & 1) === 0) return 1;
        if ((R & 2) !== 0 && te !== 0) return te & -te;
        if (N0.transition !== null) return (sl === 0 && (sl = Da()), sl);
        if (((e = I), e !== 0)) return e;
        return ((e = window.event), (e = e === void 0 ? 16 : Aa(e.type)), e);
      }
      function We(e, n, t, r) {
        if (50 < tr) throw ((tr = 0), (Oo = null), Error(y(185)));
        if ((kr(e, t, r), (R & 2) === 0 || e !== ee))
          (e === ee && ((R & 2) === 0 && (Hl |= t), q === 4 && pn(e, te)),
            we(e, r),
            t === 1 &&
              R === 0 &&
              (n.mode & 1) === 0 &&
              ((Ct = Z() + 500), Bl && zn()));
      }
      function we(e, n) {
        var t = e.callbackNode;
        Pp(e, n);
        var r = hl(e, e === ee ? te : 0);
        if (r === 0)
          (t !== null && ms(t), (e.callbackNode = null), (e.callbackPriority = 0));
        else if (((n = r & -r), e.callbackPriority !== n)) {
          if ((t != null && ms(t), n === 1))
            (e.tag === 0 ? C0(ia.bind(null, e)) : ic(ia.bind(null, e)),
              k0(function () {
                (R & 6) === 0 && zn();
              }),
              (t = null));
          else {
            switch (Ma(r)) {
              case 1:
                t = Ho;
                break;
              case 4:
                t = Oa;
                break;
              case 16:
                t = pl;
                break;
              case 536870912:
                t = Fa;
                break;
              default:
                t = pl;
            }
            t = uf(t, qc.bind(null, e));
          }
          ((e.callbackPriority = n), (e.callbackNode = t));
        }
      }
      function qc(e, n) {
        if (((il = -1), (sl = 0), (R & 6) !== 0)) throw Error(y(327));
        var t = e.callbackNode;
        if (yt() && e.callbackNode !== t) return null;
        var r = hl(e, e === ee ? te : 0);
        if (r === 0) return null;
        if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || n) n = Il(e, r);
        else {
          n = r;
          var l = R;
          R |= 2;
          var u = ef();
          if (ee !== e || te !== n) ((Ze = null), (Ct = Z() + 500), Bn(e, n));
          do
            try {
              $0();
              break;
            } catch (i) {
              bc(e, i);
            }
          while (1);
          (ti(),
            (Ll.current = u),
            (R = l),
            G !== null ? (n = 0) : ((ee = null), (te = 0), (n = q)));
        }
        if (n !== 0) {
          if (
            (n === 2 && ((l = ro(e)), l !== 0 && ((r = l), (n = Fo(e, l)))), n === 1)
          )
            throw ((t = wr), Bn(e, 0), pn(e, r), we(e, Z()), t);
          if (n === 6) pn(e, r);
          else {
            if (
              ((l = e.current.alternate),
              (r & 30) === 0 &&
                !H0(l) &&
                ((n = Il(e, r)),
                n === 2 && ((u = ro(e)), u !== 0 && ((r = u), (n = Fo(e, u)))),
                n === 1))
            )
              throw ((t = wr), Bn(e, 0), pn(e, r), we(e, Z()), t);
            switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
              case 0:
              case 1:
                throw Error(y(345));
              case 2:
                Dn(e, ve, Ze);
                break;
              case 3:
                if (
                  (pn(e, r), (r & 130023424) === r && ((n = yi + 500 - Z()), 10 < n))
                ) {
                  if (hl(e, 0) !== 0) break;
                  if (((l = e.suspendedLanes), (l & r) !== r)) {
                    (de(), (e.pingedLanes |= e.suspendedLanes & l));
                    break;
                  }
                  e.timeoutHandle = ho(Dn.bind(null, e, ve, Ze), n);
                  break;
                }
                Dn(e, ve, Ze);
                break;
              case 4:
                if ((pn(e, r), (r & 4194240) === r)) break;
                n = e.eventTimes;
                for (l = -1; 0 < r;) {
                  var o = 31 - Be(r);
                  ((u = 1 << o), (o = n[o]), o > l && (l = o), (r &= ~u));
                }
                if (
                  ((r = l),
                  (r = Z() - r),
                  (r =
                    (120 > r
                      ? 120
                      : 480 > r
                        ? 480
                        : 1080 > r
                          ? 1080
                          : 1920 > r
                            ? 1920
                            : 3000 > r
                              ? 3000
                              : 4320 > r
                                ? 4320
                                : 1960 * A0(r / 1960)) - r),
                  10 < r)
                ) {
                  e.timeoutHandle = ho(Dn.bind(null, e, ve, Ze), r);
                  break;
                }
                Dn(e, ve, Ze);
                break;
              case 5:
                Dn(e, ve, Ze);
                break;
              default:
                throw Error(y(329));
            }
          }
        }
        return (we(e, Z()), e.callbackNode === t ? qc.bind(null, e) : null);
      }
      function Fo(e, n) {
        var t = nr;
        return (
          e.current.memoizedState.isDehydrated && (Bn(e, n).flags |= 256),
          (e = Il(e, n)),
          e !== 2 && ((n = ve), (ve = t), n !== null && Do(n)),
          e
        );
      }
      function Do(e) {
        ve === null ? (ve = e) : ve.push.apply(ve, e);
      }
      function H0(e) {
        for (var n = e; ;) {
          if (n.flags & 16384) {
            var t = n.updateQueue;
            if (t !== null && ((t = t.stores), t !== null))
              for (var r = 0; r < t.length; r++) {
                var l = t[r],
                  u = l.getSnapshot;
                l = l.value;
                try {
                  if (!Qe(u(), l)) return !1;
                } catch (o) {
                  return !1;
                }
              }
          }
          if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
            ((t.return = n), (n = t));
          else {
            if (n === e) break;
            for (; n.sibling === null;) {
              if (n.return === null || n.return === e) return !0;
              n = n.return;
            }
            ((n.sibling.return = n.return), (n = n.sibling));
          }
        }
        return !0;
      }
      function pn(e, n) {
        ((n &= ~mi), (n &= ~Hl), (e.suspendedLanes |= n), (e.pingedLanes &= ~n));
        for (e = e.expirationTimes; 0 < n;) {
          var t = 31 - Be(n),
            r = 1 << t;
          ((e[t] = -1), (n &= ~r));
        }
      }
      function ia(e) {
        if ((R & 6) !== 0) throw Error(y(327));
        yt();
        var n = hl(e, 0);
        if ((n & 1) === 0) return (we(e, Z()), null);
        var t = Il(e, n);
        if (e.tag !== 0 && t === 2) {
          var r = ro(e);
          r !== 0 && ((n = r), (t = Fo(e, r)));
        }
        if (t === 1) throw ((t = wr), Bn(e, 0), pn(e, n), we(e, Z()), t);
        if (t === 6) throw Error(y(345));
        return (
          (e.finishedWork = e.current.alternate),
          (e.finishedLanes = n),
          Dn(e, ve, Ze),
          we(e, Z()),
          null
        );
      }
      function gi(e, n) {
        var t = R;
        R |= 1;
        try {
          return e(n);
        } finally {
          ((R = t), R === 0 && ((Ct = Z() + 500), Bl && zn()));
        }
      }
      function $n(e) {
        vn !== null && vn.tag === 0 && (R & 6) === 0 && yt();
        var n = R;
        R |= 1;
        var t = Le.transition,
          r = I;
        try {
          if (((Le.transition = null), (I = 1), e)) return e();
        } finally {
          ((I = r), (Le.transition = t), (R = n), (R & 6) === 0 && zn());
        }
      }
      function wi() {
        ((ke = ft.current), M(ft));
      }
      function Bn(e, n) {
        ((e.finishedWork = null), (e.finishedLanes = 0));
        var t = e.timeoutHandle;
        if ((t !== -1 && ((e.timeoutHandle = -1), w0(t)), G !== null))
          for (t = G.return; t !== null;) {
            var r = t;
            switch ((bo(r), r.tag)) {
              case 1:
                ((r = r.type.childContextTypes), r !== null && r !== void 0 && wl());
                break;
              case 3:
                (Et(), M(ye), M(se), si());
                break;
              case 5:
                ii(r);
                break;
              case 4:
                Et();
                break;
              case 13:
                M(A);
                break;
              case 19:
                M(A);
                break;
              case 10:
                ri(r.type._context);
                break;
              case 22:
              case 23:
                wi();
            }
            t = t.return;
          }
        if (
          ((ee = e),
          (G = e = _n(e.current, null)),
          (te = ke = n),
          (q = 0),
          (wr = null),
          (mi = Hl = jn = 0),
          (ve = nr = null),
          Un !== null)
        ) {
          for (n = 0; n < Un.length; n++)
            if (((t = Un[n]), (r = t.interleaved), r !== null)) {
              t.interleaved = null;
              var l = r.next,
                u = t.pending;
              if (u !== null) {
                var o = u.next;
                ((u.next = l), (r.next = o));
              }
              t.pending = r;
            }
          Un = null;
        }
        return e;
      }
      function bc(e, n) {
        do {
          var t = G;
          try {
            if ((ti(), (ll.current = zl), Pl)) {
              for (var r = H.memoizedState; r !== null;) {
                var l = r.queue;
                (l !== null && (l.pending = null), (r = r.next));
              }
              Pl = !1;
            }
            if (
              ((Hn = 0),
              (b = Y = H = null),
              (bt = !1),
              (mr = 0),
              (vi.current = null),
              t === null || t.return === null)
            ) {
              ((q = 1), (wr = n), (G = null));
              break;
            }
            e: {
              var u = e,
                o = t.return,
                i = t,
                s = n;
              if (
                ((n = te),
                (i.flags |= 32768),
                s !== null && typeof s === "object" && typeof s.then === "function")
              ) {
                var d = s,
                  v = i,
                  m = v.tag;
                if ((v.mode & 1) === 0 && (m === 0 || m === 11 || m === 15)) {
                  var p = v.alternate;
                  p
                    ? ((v.updateQueue = p.updateQueue),
                      (v.memoizedState = p.memoizedState),
                      (v.lanes = p.lanes))
                    : ((v.updateQueue = null), (v.memoizedState = null));
                }
                var g = Zs(o);
                if (g !== null) {
                  ((g.flags &= -257),
                    Gs(g, o, i, u, n),
                    g.mode & 1 && Xs(u, d, n),
                    (n = g),
                    (s = d));
                  var k = n.updateQueue;
                  if (k === null) {
                    var E = new Set();
                    (E.add(s), (n.updateQueue = E));
                  } else k.add(s);
                  break e;
                } else {
                  if ((n & 1) === 0) {
                    (Xs(u, d, n), ki());
                    break e;
                  }
                  s = Error(y(426));
                }
              } else if (B && i.mode & 1) {
                var U = Zs(o);
                if (U !== null) {
                  ((U.flags & 65536) === 0 && (U.flags |= 256),
                    Gs(U, o, i, u, n),
                    ei(_t(s, i)));
                  break e;
                }
              }
              ((u = s = _t(s, i)),
                q !== 4 && (q = 2),
                nr === null ? (nr = [u]) : nr.push(u),
                (u = o));
              do {
                switch (u.tag) {
                  case 3:
                    ((u.flags |= 65536), (n &= -n), (u.lanes |= n));
                    var f = Mc(u, s, n);
                    Qs(u, f);
                    break e;
                  case 1:
                    i = s;
                    var { type: a, stateNode: c } = u;
                    if (
                      (u.flags & 128) === 0 &&
                      (typeof a.getDerivedStateFromError === "function" ||
                        (c !== null &&
                          typeof c.componentDidCatch === "function" &&
                          (Sn === null || !Sn.has(c))))
                    ) {
                      ((u.flags |= 65536), (n &= -n), (u.lanes |= n));
                      var h = Uc(u, i, n);
                      Qs(u, h);
                      break e;
                    }
                }
                u = u.return;
              } while (u !== null);
            }
            tf(t);
          } catch (w) {
            ((n = w), G === t && t !== null && (G = t = t.return));
            continue;
          }
          break;
        } while (1);
      }
      function ef() {
        var e = Ll.current;
        return ((Ll.current = zl), e === null ? zl : e);
      }
      function ki() {
        if (q === 0 || q === 3 || q === 2) q = 4;
        ee === null ||
          ((jn & 268435455) === 0 && (Hl & 268435455) === 0) ||
          pn(ee, te);
      }
      function Il(e, n) {
        var t = R;
        R |= 2;
        var r = ef();
        if (ee !== e || te !== n) ((Ze = null), Bn(e, n));
        do
          try {
            j0();
            break;
          } catch (l) {
            bc(e, l);
          }
        while (1);
        if ((ti(), (R = t), (Ll.current = r), G !== null)) throw Error(y(261));
        return ((ee = null), (te = 0), q);
      }
      function j0() {
        for (; G !== null;) nf(G);
      }
      function $0() {
        for (; G !== null && !gp();) nf(G);
      }
      function nf(e) {
        var n = lf(e.alternate, e, ke);
        ((e.memoizedProps = e.pendingProps),
          n === null ? tf(e) : (G = n),
          (vi.current = null));
      }
      function tf(e) {
        var n = e;
        do {
          var t = n.alternate;
          if (((e = n.return), (n.flags & 32768) === 0)) {
            if (((t = U0(t, n, ke)), t !== null)) {
              G = t;
              return;
            }
          } else {
            if (((t = V0(t, n)), t !== null)) {
              ((t.flags &= 32767), (G = t));
              return;
            }
            if (e !== null)
              ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
            else {
              ((q = 6), (G = null));
              return;
            }
          }
          if (((n = n.sibling), n !== null)) {
            G = n;
            return;
          }
          G = n = e;
        } while (n !== null);
        q === 0 && (q = 5);
      }
      function Dn(e, n, t) {
        var r = I,
          l = Le.transition;
        try {
          ((Le.transition = null), (I = 1), K0(e, n, t, r));
        } finally {
          ((Le.transition = l), (I = r));
        }
        return null;
      }
      function K0(e, n, t, r) {
        do yt();
        while (vn !== null);
        if ((R & 6) !== 0) throw Error(y(327));
        t = e.finishedWork;
        var l = e.finishedLanes;
        if (t === null) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
          throw Error(y(177));
        ((e.callbackNode = null), (e.callbackPriority = 0));
        var u = t.lanes | t.childLanes;
        if (
          (zp(e, u),
          e === ee && ((G = ee = null), (te = 0)),
          ((t.subtreeFlags & 2064) === 0 && (t.flags & 2064) === 0) ||
            qr ||
            ((qr = !0),
            uf(pl, function () {
              return (yt(), null);
            })),
          (u = (t.flags & 15990) !== 0),
          (t.subtreeFlags & 15990) !== 0 || u)
        ) {
          ((u = Le.transition), (Le.transition = null));
          var o = I;
          I = 1;
          var i = R;
          ((R |= 4),
            (vi.current = null),
            W0(e, t),
            Jc(t, e),
            h0(fo),
            (vl = !!co),
            (fo = co = null),
            (e.current = t),
            Q0(t, e, l),
            wp(),
            (R = i),
            (I = o),
            (Le.transition = u));
        } else e.current = t;
        if (
          (qr && ((qr = !1), (vn = e), (Rl = l)),
          (u = e.pendingLanes),
          u === 0 && (Sn = null),
          Ep(t.stateNode, r),
          we(e, Z()),
          n !== null)
        )
          for (r = e.onRecoverableError, t = 0; t < n.length; t++)
            ((l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest }));
        if (Tl) throw ((Tl = !1), (e = Io), (Io = null), e);
        return (
          (Rl & 1) !== 0 && e.tag !== 0 && yt(),
          (u = e.pendingLanes),
          (u & 1) !== 0 ? (e === Oo ? tr++ : ((tr = 0), (Oo = e))) : (tr = 0),
          zn(),
          null
        );
      }
      function yt() {
        if (vn !== null) {
          var e = Ma(Rl),
            n = Le.transition,
            t = I;
          try {
            if (((Le.transition = null), (I = 16 > e ? 16 : e), vn === null))
              var r = !1;
            else {
              if (((e = vn), (vn = null), (Rl = 0), (R & 6) !== 0))
                throw Error(y(331));
              var l = R;
              R |= 4;
              for (S = e.current; S !== null;) {
                var u = S,
                  o = u.child;
                if ((S.flags & 16) !== 0) {
                  var i = u.deletions;
                  if (i !== null) {
                    for (var s = 0; s < i.length; s++) {
                      var d = i[s];
                      for (S = d; S !== null;) {
                        var v = S;
                        switch (v.tag) {
                          case 0:
                          case 11:
                          case 15:
                            er(8, v, u);
                        }
                        var m = v.child;
                        if (m !== null) ((m.return = v), (S = m));
                        else
                          for (; S !== null;) {
                            v = S;
                            var { sibling: p, return: g } = v;
                            if ((Xc(v), v === d)) {
                              S = null;
                              break;
                            }
                            if (p !== null) {
                              ((p.return = g), (S = p));
                              break;
                            }
                            S = g;
                          }
                      }
                    }
                    var k = u.alternate;
                    if (k !== null) {
                      var E = k.child;
                      if (E !== null) {
                        k.child = null;
                        do {
                          var U = E.sibling;
                          ((E.sibling = null), (E = U));
                        } while (E !== null);
                      }
                    }
                    S = u;
                  }
                }
                if ((u.subtreeFlags & 2064) !== 0 && o !== null)
                  ((o.return = u), (S = o));
                else
                  e: for (; S !== null;) {
                    if (((u = S), (u.flags & 2048) !== 0))
                      switch (u.tag) {
                        case 0:
                        case 11:
                        case 15:
                          er(9, u, u.return);
                      }
                    var f = u.sibling;
                    if (f !== null) {
                      ((f.return = u.return), (S = f));
                      break e;
                    }
                    S = u.return;
                  }
              }
              var a = e.current;
              for (S = a; S !== null;) {
                o = S;
                var c = o.child;
                if ((o.subtreeFlags & 2064) !== 0 && c !== null)
                  ((c.return = o), (S = c));
                else
                  e: for (o = a; S !== null;) {
                    if (((i = S), (i.flags & 2048) !== 0))
                      try {
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Al(9, i);
                        }
                      } catch (w) {
                        K(i, i.return, w);
                      }
                    if (i === o) {
                      S = null;
                      break e;
                    }
                    var h = i.sibling;
                    if (h !== null) {
                      ((h.return = i.return), (S = h));
                      break e;
                    }
                    S = i.return;
                  }
              }
              if (
                ((R = l), zn(), Ke && typeof Ke.onPostCommitFiberRoot === "function")
              )
                try {
                  Ke.onPostCommitFiberRoot(Fl, e);
                } catch (w) {}
              r = !0;
            }
            return r;
          } finally {
            ((I = t), (Le.transition = n));
          }
        }
        return !1;
      }
      function sa(e, n, t) {
        ((n = _t(t, n)),
          (n = Mc(e, n, 1)),
          (e = kn(e, n, 1)),
          (n = de()),
          e !== null && (kr(e, 1, n), we(e, n)));
      }
      function K(e, n, t) {
        if (e.tag === 3) sa(e, e, t);
        else
          for (; n !== null;) {
            if (n.tag === 3) {
              sa(n, e, t);
              break;
            } else if (n.tag === 1) {
              var r = n.stateNode;
              if (
                typeof n.type.getDerivedStateFromError === "function" ||
                (typeof r.componentDidCatch === "function" &&
                  (Sn === null || !Sn.has(r)))
              ) {
                ((e = _t(t, e)),
                  (e = Uc(n, e, 1)),
                  (n = kn(n, e, 1)),
                  (e = de()),
                  n !== null && (kr(n, 1, e), we(n, e)));
                break;
              }
            }
            n = n.return;
          }
      }
      function X0(e, n, t) {
        var r = e.pingCache;
        (r !== null && r.delete(n),
          (n = de()),
          (e.pingedLanes |= e.suspendedLanes & t),
          ee === e &&
            (te & t) === t &&
            (q === 4 || (q === 3 && (te & 130023424) === te && 500 > Z() - yi)
              ? Bn(e, 0)
              : (mi |= t)),
          we(e, n));
      }
      function rf(e, n) {
        n === 0 &&
          ((e.mode & 1) === 0
            ? (n = 1)
            : ((n = Ar), (Ar <<= 1), (Ar & 130023424) === 0 && (Ar = 4194304)));
        var t = de();
        ((e = nn(e, n)), e !== null && (kr(e, n, t), we(e, t)));
      }
      function Z0(e) {
        var n = e.memoizedState,
          t = 0;
        (n !== null && (t = n.retryLane), rf(e, t));
      }
      function G0(e, n) {
        var t = 0;
        switch (e.tag) {
          case 13:
            var { stateNode: r, memoizedState: l } = e;
            l !== null && (t = l.retryLane);
            break;
          case 19:
            r = e.stateNode;
            break;
          default:
            throw Error(y(314));
        }
        (r !== null && r.delete(n), rf(e, t));
      }
      function uf(e, n) {
        return Ia(e, n);
      }
      function J0(e, n, t, r) {
        ((this.tag = e),
          (this.key = t),
          (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
              null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = n),
          (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
              null),
          (this.mode = r),
          (this.subtreeFlags = this.flags = 0),
          (this.deletions = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null));
      }
      function ze(e, n, t, r) {
        return new J0(e, n, t, r);
      }
      function Si(e) {
        return ((e = e.prototype), !(!e || !e.isReactComponent));
      }
      function Y0(e) {
        if (typeof e === "function") return Si(e) ? 1 : 0;
        if (e !== void 0 && e !== null) {
          if (((e = e.$$typeof), e === Wo)) return 11;
          if (e === Qo) return 14;
        }
        return 2;
      }
      function _n(e, n) {
        var t = e.alternate;
        return (
          t === null
            ? ((t = ze(e.tag, n, e.key, e.mode)),
              (t.elementType = e.elementType),
              (t.type = e.type),
              (t.stateNode = e.stateNode),
              (t.alternate = e),
              (e.alternate = t))
            : ((t.pendingProps = n),
              (t.type = e.type),
              (t.flags = 0),
              (t.subtreeFlags = 0),
              (t.deletions = null)),
          (t.flags = e.flags & 14680064),
          (t.childLanes = e.childLanes),
          (t.lanes = e.lanes),
          (t.child = e.child),
          (t.memoizedProps = e.memoizedProps),
          (t.memoizedState = e.memoizedState),
          (t.updateQueue = e.updateQueue),
          (n = e.dependencies),
          (t.dependencies =
            n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
          (t.sibling = e.sibling),
          (t.index = e.index),
          (t.ref = e.ref),
          t
        );
      }
      function al(e, n, t, r, l, u) {
        var o = 2;
        if (((r = e), typeof e === "function")) Si(e) && (o = 1);
        else if (typeof e === "string") o = 5;
        else
          e: switch (e) {
            case nt:
              return Wn(t.children, l, u, n);
            case Bo:
              ((o = 8), (l |= 8));
              break;
            case Au:
              return (
                (e = ze(12, t, n, l | 2)),
                (e.elementType = Au),
                (e.lanes = u),
                e
              );
            case Hu:
              return ((e = ze(13, t, n, l)), (e.elementType = Hu), (e.lanes = u), e);
            case ju:
              return ((e = ze(19, t, n, l)), (e.elementType = ju), (e.lanes = u), e);
            case va:
              return jl(t, l, u, n);
            default:
              if (typeof e === "object" && e !== null)
                switch (e.$$typeof) {
                  case pa:
                    o = 10;
                    break e;
                  case ha:
                    o = 9;
                    break e;
                  case Wo:
                    o = 11;
                    break e;
                  case Qo:
                    o = 14;
                    break e;
                  case cn:
                    ((o = 16), (r = null));
                    break e;
                }
              throw Error(y(130, e == null ? e : typeof e, ""));
          }
        return (
          (n = ze(o, t, n, l)),
          (n.elementType = e),
          (n.type = r),
          (n.lanes = u),
          n
        );
      }
      function Wn(e, n, t, r) {
        return ((e = ze(7, e, r, n)), (e.lanes = t), e);
      }
      function jl(e, n, t, r) {
        return (
          (e = ze(22, e, r, n)),
          (e.elementType = va),
          (e.lanes = t),
          (e.stateNode = { isHidden: !1 }),
          e
        );
      }
      function Bu(e, n, t) {
        return ((e = ze(6, e, null, n)), (e.lanes = t), e);
      }
      function Wu(e, n, t) {
        return (
          (n = ze(4, e.children !== null ? e.children : [], e.key, n)),
          (n.lanes = t),
          (n.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
          }),
          n
        );
      }
      function q0(e, n, t, r, l) {
        ((this.tag = n),
          (this.containerInfo = e),
          (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
              null),
          (this.timeoutHandle = -1),
          (this.callbackNode = this.pendingContext = this.context = null),
          (this.callbackPriority = 0),
          (this.eventTimes = Cu(0)),
          (this.expirationTimes = Cu(-1)),
          (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
              0),
          (this.entanglements = Cu(0)),
          (this.identifierPrefix = r),
          (this.onRecoverableError = l),
          (this.mutableSourceEagerHydrationData = null));
      }
      function Ei(e, n, t, r, l, u, o, i, s) {
        return (
          (e = new q0(e, n, t, i, s)),
          n === 1 ? ((n = 1), u === !0 && (n |= 8)) : (n = 0),
          (u = ze(3, null, null, n)),
          (e.current = u),
          (u.stateNode = e),
          (u.memoizedState = {
            element: r,
            isDehydrated: t,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
          }),
          ui(u),
          e
        );
      }
      function b0(e, n, t) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: et,
          key: r == null ? null : "" + r,
          children: e,
          containerInfo: n,
          implementation: t,
        };
      }
      function of(e) {
        if (!e) return Nn;
        e = e._reactInternals;
        e: {
          if (Xn(e) !== e || e.tag !== 1) throw Error(y(170));
          var n = e;
          do {
            switch (n.tag) {
              case 3:
                n = n.stateNode.context;
                break e;
              case 1:
                if (ge(n.type)) {
                  n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e;
                }
            }
            n = n.return;
          } while (n !== null);
          throw Error(y(171));
        }
        if (e.tag === 1) {
          var t = e.type;
          if (ge(t)) return oc(e, t, n);
        }
        return n;
      }
      function sf(e, n, t, r, l, u, o, i, s) {
        return (
          (e = Ei(t, r, !0, e, l, u, o, i, s)),
          (e.context = of(null)),
          (t = e.current),
          (r = de()),
          (l = En(t)),
          (u = qe(r, l)),
          (u.callback = n !== void 0 && n !== null ? n : null),
          kn(t, u, l),
          (e.current.lanes = l),
          kr(e, l, r),
          we(e, r),
          e
        );
      }
      function $l(e, n, t, r) {
        var l = n.current,
          u = de(),
          o = En(l);
        return (
          (t = of(t)),
          n.context === null ? (n.context = t) : (n.pendingContext = t),
          (n = qe(u, o)),
          (n.payload = { element: e }),
          (r = r === void 0 ? null : r),
          r !== null && (n.callback = r),
          (e = kn(l, n, o)),
          e !== null && (We(e, l, o, u), rl(e, l, o)),
          o
        );
      }
      function Ol(e) {
        if (((e = e.current), !e.child)) return null;
        switch (e.child.tag) {
          case 5:
            return e.child.stateNode;
          default:
            return e.child.stateNode;
        }
      }
      function aa(e, n) {
        if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
          var t = e.retryLane;
          e.retryLane = t !== 0 && t < n ? t : n;
        }
      }
      function _i(e, n) {
        (aa(e, n), (e = e.alternate) && aa(e, n));
      }
      function eh() {
        return null;
      }
      function Ci(e) {
        this._internalRoot = e;
      }
      function Kl(e) {
        this._internalRoot = e;
      }
      function Ni(e) {
        return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
      }
      function Xl(e) {
        return !(
          !e ||
          (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
        );
      }
      function ca() {}
      function nh(e, n, t, r, l) {
        if (l) {
          if (typeof r === "function") {
            var u = r;
            r = function () {
              var d = Ol(o);
              u.call(d);
            };
          }
          var o = sf(n, r, e, 0, null, !1, !1, "", ca);
          return (
            (e._reactRootContainer = o),
            (e[en] = o.current),
            fr(e.nodeType === 8 ? e.parentNode : e),
            $n(),
            o
          );
        }
        for (; (l = e.lastChild);) e.removeChild(l);
        if (typeof r === "function") {
          var i = r;
          r = function () {
            var d = Ol(s);
            i.call(d);
          };
        }
        var s = Ei(e, 0, !1, null, null, !1, !1, "", ca);
        return (
          (e._reactRootContainer = s),
          (e[en] = s.current),
          fr(e.nodeType === 8 ? e.parentNode : e),
          $n(function () {
            $l(n, s, t, r);
          }),
          s
        );
      }
      function Zl(e, n, t, r, l) {
        var u = t._reactRootContainer;
        if (u) {
          var o = u;
          if (typeof l === "function") {
            var i = l;
            l = function () {
              var s = Ol(o);
              i.call(s);
            };
          }
          $l(n, o, e, l);
        } else o = nh(t, n, e, l, r);
        return Ol(o);
      }
      var fa,
        W,
        da,
        rr,
        be,
        Qu,
        lp,
        is,
        ss,
        re,
        Mo,
        rn,
        Vr,
        et,
        nt,
        Bo,
        Au,
        pa,
        ha,
        Wo,
        Hu,
        ju,
        Qo,
        cn,
        va,
        as,
        j,
        ku,
        Su = !1,
        Qt,
        Wr,
        Sa,
        Zt,
        fp,
        dp,
        bu = null,
        eo = null,
        pt = null,
        ht = null,
        _u = !1,
        no = !1,
        On,
        Gt = !1,
        fl = null,
        dl = !1,
        to = null,
        hp,
        Ia,
        ms,
        gp,
        wp,
        Z,
        kp,
        Ho,
        Oa,
        pl,
        Sp,
        Fa,
        Fl = null,
        Ke = null,
        Be,
        _p,
        Cp,
        Qr = 64,
        Ar = 4194304,
        I = 0,
        Ua,
        $o,
        Va,
        Ba,
        Wa,
        lo = !1,
        Hr,
        mn = null,
        yn = null,
        gn = null,
        or,
        ir,
        dn,
        Lp,
        vt,
        vl = !0,
        ml = null,
        hn = null,
        Xo = null,
        el = null,
        Nt,
        Zo,
        Sr,
        Fp,
        Nu,
        xu,
        Mt,
        Dl,
        ks,
        Dp,
        Mp,
        Up,
        Pu,
        Vp,
        Bp,
        Wp,
        Qp,
        Ap,
        Ss,
        Hp,
        jp,
        $p,
        Xp,
        Zp,
        Gp,
        Es,
        Jp,
        Yp,
        qp,
        bp,
        e0,
        n0,
        t0,
        Jo,
        Jt = null,
        r0,
        ja,
        _s,
        Cs = !1,
        tt = !1,
        o0,
        Yt = null,
        ar = null,
        Za = !1,
        Ht,
        jt,
        tl,
        Qe,
        v0,
        rt = null,
        oo = null,
        qt = null,
        io = !1,
        lt,
        zu,
        qa,
        ba,
        ec,
        nc,
        tc,
        rc,
        Ts,
        Kt,
        so,
        ao,
        $t,
        Xt,
        m0,
        Kr,
        y0,
        g0,
        co = null,
        fo = null,
        ho,
        w0,
        Fs,
        k0,
        xt,
        $e,
        pr,
        en,
        vo,
        E0,
        _0,
        mo,
        ot = -1,
        Nn,
        se,
        ye,
        Qn,
        Ge = null,
        Bl = !1,
        Iu = !1,
        it,
        st = 0,
        Sl = null,
        El = 0,
        xe,
        Pe = 0,
        An = null,
        Je = 1,
        Ye = "",
        Ee = null,
        Se = null,
        B = !1,
        Ve = null,
        N0,
        St,
        dc,
        _l,
        Cl = null,
        at = null,
        ni = null,
        Un = null,
        fn = !1,
        _r,
        Xe,
        hr,
        vr,
        A,
        Ou,
        ll,
        Fu,
        Hn = 0,
        H = null,
        Y = null,
        b = null,
        Pl = !1,
        bt = !1,
        mr = 0,
        x0 = 0,
        zl,
        T0,
        R0,
        I0,
        Ql,
        O0,
        F0,
        me = !1,
        No,
        jc,
        Po,
        $c,
        Kc,
        Yr = !1,
        ie = !1,
        B0,
        S = null,
        na = !1,
        ne = null,
        Ue = !1,
        A0,
        Ll,
        vi,
        Le,
        R = 0,
        ee = null,
        G = null,
        te = 0,
        ke = 0,
        ft,
        q = 0,
        wr = null,
        jn = 0,
        Hl = 0,
        mi = 0,
        nr = null,
        ve = null,
        yi = 0,
        Ct = 1 / 0,
        Ze = null,
        Tl = !1,
        Io = null,
        Sn = null,
        qr = !1,
        vn = null,
        Rl = 0,
        tr = 0,
        Oo = null,
        il = -1,
        sl = 0,
        lf,
        af,
        th,
        Bt,
        rh,
        bn,
        cf,
        ff = function (e, n) {
          var t =
            2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
          if (!Ni(n)) throw Error(y(200));
          return b0(e, n, null, t);
        },
        df = function (e, n) {
          if (!Ni(e)) throw Error(y(299));
          var t = !1,
            r = "",
            l = af;
          return (
            n !== null &&
              n !== void 0 &&
              (n.unstable_strictMode === !0 && (t = !0),
              n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
              n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
            (n = Ei(e, 1, !1, null, null, t, !1, r, l)),
            (e[en] = n.current),
            fr(e.nodeType === 8 ? e.parentNode : e),
            new Ci(n)
          );
        },
        pf = function (e) {
          if (e == null) return null;
          if (e.nodeType === 1) return e;
          var n = e._reactInternals;
          if (n === void 0) {
            if (typeof e.render === "function") throw Error(y(188));
            throw ((e = Object.keys(e).join(",")), Error(y(268, e)));
          }
          return ((e = Ta(n)), (e = e === null ? null : e.stateNode), e);
        },
        hf = function (e) {
          return $n(e);
        },
        vf = function (e, n, t) {
          if (!Xl(n)) throw Error(y(200));
          return Zl(null, e, n, !0, t);
        },
        mf = function (e, n, t) {
          if (!Ni(e)) throw Error(y(405));
          var r = (t != null && t.hydratedSources) || null,
            l = !1,
            u = "",
            o = af;
          if (
            (t !== null &&
              t !== void 0 &&
              (t.unstable_strictMode === !0 && (l = !0),
              t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
              t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
            (n = sf(n, null, e, 1, t != null ? t : null, l, !1, u, o)),
            (e[en] = n.current),
            fr(e),
            r)
          )
            for (e = 0; e < r.length; e++)
              ((t = r[e]),
                (l = t._getVersion),
                (l = l(t._source)),
                n.mutableSourceEagerHydrationData == null
                  ? (n.mutableSourceEagerHydrationData = [t, l])
                  : n.mutableSourceEagerHydrationData.push(t, l));
          return new Kl(n);
        },
        yf = function (e, n, t) {
          if (!Xl(n)) throw Error(y(200));
          return Zl(null, e, n, !1, t);
        },
        gf = function (e) {
          if (!Xl(e)) throw Error(y(40));
          return e._reactRootContainer
            ? ($n(function () {
                Zl(null, null, e, !1, function () {
                  ((e._reactRootContainer = null), (e[en] = null));
                });
              }),
              !0)
            : !1;
        },
        wf,
        kf = function (e, n, t, r) {
          if (!Xl(t)) throw Error(y(200));
          if (e == null || e._reactInternals === void 0) throw Error(y(38));
          return Zl(e, n, t, !1, r);
        },
        Sf = "18.3.1-next-f1338f8080-20240426";
      var Ef = Bf(() => {
        ((fa = Rn(Lt(), 1)), (W = Rn(os(), 1)));
        ((da = new Set()), (rr = {}));
        ((be = !(
          typeof window > "u" ||
          typeof window.document > "u" ||
          typeof window.document.createElement > "u"
        )),
          (Qu = Object.prototype.hasOwnProperty),
          (lp =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
          (is = {}),
          (ss = {}));
        re = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            re[e] = new pe(e, 0, !1, e, null, !1, !1);
          });
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
          var n = e[0];
          re[n] = new pe(n, 1, !1, e[1], null, !1, !1);
        });
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
          re[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
        });
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (e) {
          re[e] = new pe(e, 2, !1, e, null, !1, !1);
        });
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
          .split(" ")
          .forEach(function (e) {
            re[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
          });
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
          re[e] = new pe(e, 3, !0, e, null, !1, !1);
        });
        ["capture", "download"].forEach(function (e) {
          re[e] = new pe(e, 4, !1, e, null, !1, !1);
        });
        ["cols", "rows", "size", "span"].forEach(function (e) {
          re[e] = new pe(e, 6, !1, e, null, !1, !1);
        });
        ["rowSpan", "start"].forEach(function (e) {
          re[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
        Mo = /[\-:]([a-z])/g;
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var n = e.replace(Mo, Uo);
            re[n] = new pe(n, 1, !1, e, null, !1, !1);
          });
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
          .split(" ")
          .forEach(function (e) {
            var n = e.replace(Mo, Uo);
            re[n] = new pe(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
          });
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          var n = e.replace(Mo, Uo);
          re[n] = new pe(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
        });
        ["tabIndex", "crossOrigin"].forEach(function (e) {
          re[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
        });
        re.xlinkHref = new pe(
          "xlinkHref",
          1,
          !1,
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          !0,
          !1,
        );
        ["src", "href", "action", "formAction"].forEach(function (e) {
          re[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
        ((rn = fa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),
          (Vr = Symbol.for("react.element")),
          (et = Symbol.for("react.portal")),
          (nt = Symbol.for("react.fragment")),
          (Bo = Symbol.for("react.strict_mode")),
          (Au = Symbol.for("react.profiler")),
          (pa = Symbol.for("react.provider")),
          (ha = Symbol.for("react.context")),
          (Wo = Symbol.for("react.forward_ref")),
          (Hu = Symbol.for("react.suspense")),
          (ju = Symbol.for("react.suspense_list")),
          (Qo = Symbol.for("react.memo")),
          (cn = Symbol.for("react.lazy")),
          (va = Symbol.for("react.offscreen")),
          (as = Symbol.iterator));
        j = Object.assign;
        Qt = Array.isArray;
        Sa = (function (e) {
          return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (n, t, r, l) {
                MSApp.execUnsafeLocalFunction(function () {
                  return e(n, t, r, l);
                });
              }
            : e;
        })(function (e, n) {
          if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = n;
          else {
            ((Wr = Wr || document.createElement("div")),
              (Wr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>"));
            for (n = Wr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; n.firstChild;) e.appendChild(n.firstChild);
          }
        });
        ((Zt = {
          animationIterationCount: !0,
          aspectRatio: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        }),
          (fp = ["Webkit", "ms", "Moz", "O"]));
        Object.keys(Zt).forEach(function (e) {
          fp.forEach(function (n) {
            ((n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Zt[n] = Zt[e]));
          });
        });
        dp = j(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          },
        );
        if (be)
          try {
            ((On = {}),
              Object.defineProperty(On, "passive", {
                get: function () {
                  no = !0;
                },
              }),
              window.addEventListener("test", On, On),
              window.removeEventListener("test", On, On));
          } catch (e) {
            no = !1;
          }
        hp = {
          onError: function (e) {
            ((Gt = !0), (fl = e));
          },
        };
        ((Ia = W.unstable_scheduleCallback),
          (ms = W.unstable_cancelCallback),
          (gp = W.unstable_shouldYield),
          (wp = W.unstable_requestPaint),
          (Z = W.unstable_now),
          (kp = W.unstable_getCurrentPriorityLevel),
          (Ho = W.unstable_ImmediatePriority),
          (Oa = W.unstable_UserBlockingPriority),
          (pl = W.unstable_NormalPriority),
          (Sp = W.unstable_LowPriority),
          (Fa = W.unstable_IdlePriority));
        ((Be = Math.clz32 ? Math.clz32 : Np), (_p = Math.log), (Cp = Math.LN2));
        ((Hr = []),
          (or = new Map()),
          (ir = new Map()),
          (dn = []),
          (Lp =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " ",
            )));
        vt = rn.ReactCurrentBatchConfig;
        ((Nt = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        }),
          (Zo = _e(Nt)),
          (Sr = j({}, Nt, { view: 0, detail: 0 })),
          (Fp = _e(Sr)),
          (Dl = j({}, Sr, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Go,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              if ("movementX" in e) return e.movementX;
              return (
                e !== Mt &&
                  (Mt && e.type === "mousemove"
                    ? ((Nu = e.screenX - Mt.screenX), (xu = e.screenY - Mt.screenY))
                    : (xu = Nu = 0),
                  (Mt = e)),
                Nu
              );
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : xu;
            },
          })),
          (ks = _e(Dl)),
          (Dp = j({}, Dl, { dataTransfer: 0 })),
          (Mp = _e(Dp)),
          (Up = j({}, Sr, { relatedTarget: 0 })),
          (Pu = _e(Up)),
          (Vp = j({}, Nt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          (Bp = _e(Vp)),
          (Wp = j({}, Nt, {
            clipboardData: function (e) {
              return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            },
          })),
          (Qp = _e(Wp)),
          (Ap = j({}, Nt, { data: 0 })),
          (Ss = _e(Ap)),
          (Hp = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          }),
          (jp = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          }),
          ($p = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          }));
        ((Xp = j({}, Sr, {
          key: function (e) {
            if (e.key) {
              var n = Hp[e.key] || e.key;
              if (n !== "Unidentified") return n;
            }
            return e.type === "keypress"
              ? ((e = nl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
              : e.type === "keydown" || e.type === "keyup"
                ? jp[e.keyCode] || "Unidentified"
                : "";
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Go,
          charCode: function (e) {
            return e.type === "keypress" ? nl(e) : 0;
          },
          keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === "keypress"
              ? nl(e)
              : e.type === "keydown" || e.type === "keyup"
                ? e.keyCode
                : 0;
          },
        })),
          (Zp = _e(Xp)),
          (Gp = j({}, Dl, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
          })),
          (Es = _e(Gp)),
          (Jp = j({}, Sr, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Go,
          })),
          (Yp = _e(Jp)),
          (qp = j({}, Nt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          (bp = _e(qp)),
          (e0 = j({}, Dl, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          })),
          (n0 = _e(e0)),
          (t0 = [9, 13, 27, 32]),
          (Jo = be && "CompositionEvent" in window));
        be && "documentMode" in document && (Jt = document.documentMode);
        ((r0 = be && "TextEvent" in window && !Jt),
          (ja = be && (!Jo || (Jt && 8 < Jt && 11 >= Jt))),
          (_s = String.fromCharCode(32)));
        o0 = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        if (be) {
          if (be) {
            if (((jt = "oninput" in document), !jt))
              ((tl = document.createElement("div")),
                tl.setAttribute("oninput", "return;"),
                (jt = typeof tl.oninput === "function"));
            Ht = jt;
          } else Ht = !1;
          Za = Ht && (!document.documentMode || 9 < document.documentMode);
        }
        Qe = typeof Object.is === "function" ? Object.is : p0;
        v0 = be && "documentMode" in document && 11 >= document.documentMode;
        ((lt = {
          animationend: $r("Animation", "AnimationEnd"),
          animationiteration: $r("Animation", "AnimationIteration"),
          animationstart: $r("Animation", "AnimationStart"),
          transitionend: $r("Transition", "TransitionEnd"),
        }),
          (zu = {}),
          (qa = {}));
        be &&
          ((qa = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete lt.animationend.animation,
            delete lt.animationiteration.animation,
            delete lt.animationstart.animation),
          "TransitionEvent" in window || delete lt.transitionend.transition);
        ((ba = Ul("animationend")),
          (ec = Ul("animationiteration")),
          (nc = Ul("animationstart")),
          (tc = Ul("transitionend")),
          (rc = new Map()),
          (Ts =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            )));
        for ($t = 0; $t < Ts.length; $t++)
          ((Kt = Ts[$t]),
            (so = Kt.toLowerCase()),
            (ao = Kt[0].toUpperCase() + Kt.slice(1)),
            xn(so, "on" + ao));
        xn(ba, "onAnimationEnd");
        xn(ec, "onAnimationIteration");
        xn(nc, "onAnimationStart");
        xn("dblclick", "onDoubleClick");
        xn("focusin", "onFocus");
        xn("focusout", "onBlur");
        xn(tc, "onTransitionEnd");
        gt("onMouseEnter", ["mouseout", "mouseover"]);
        gt("onMouseLeave", ["mouseout", "mouseover"]);
        gt("onPointerEnter", ["pointerout", "pointerover"]);
        gt("onPointerLeave", ["pointerout", "pointerover"]);
        Kn(
          "onChange",
          "change click focusin focusout input keydown keyup selectionchange".split(
            " ",
          ),
        );
        Kn(
          "onSelect",
          "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
            " ",
          ),
        );
        Kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
        Kn(
          "onCompositionEnd",
          "compositionend focusout keydown keypress keyup mousedown".split(" "),
        );
        Kn(
          "onCompositionStart",
          "compositionstart focusout keydown keypress keyup mousedown".split(" "),
        );
        Kn(
          "onCompositionUpdate",
          "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
        );
        ((Xt =
          "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " ",
          )),
          (m0 = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Xt),
          )));
        Kr = "_reactListening" + Math.random().toString(36).slice(2);
        ((y0 = /\r\n?/g), (g0 = /\u0000|\uFFFD/g));
        ((ho = typeof setTimeout === "function" ? setTimeout : void 0),
          (w0 = typeof clearTimeout === "function" ? clearTimeout : void 0),
          (Fs = typeof Promise === "function" ? Promise : void 0),
          (k0 =
            typeof queueMicrotask === "function"
              ? queueMicrotask
              : typeof Fs < "u"
                ? function (e) {
                    return Fs.resolve(null).then(e).catch(S0);
                  }
                : ho));
        ((xt = Math.random().toString(36).slice(2)),
          ($e = "__reactFiber$" + xt),
          (pr = "__reactProps$" + xt),
          (en = "__reactContainer$" + xt),
          (vo = "__reactEvents$" + xt),
          (E0 = "__reactListeners$" + xt),
          (_0 = "__reactHandles$" + xt));
        mo = [];
        ((Nn = {}), (se = Pn(Nn)), (ye = Pn(!1)), (Qn = Nn));
        ((it = []), (xe = []));
        N0 = rn.ReactCurrentBatchConfig;
        ((St = fc(!0)), (dc = fc(!1)), (_l = Pn(null)));
        ((_r = {}), (Xe = Pn(_r)), (hr = Pn(_r)), (vr = Pn(_r)));
        A = Pn(0);
        Ou = [];
        ((ll = rn.ReactCurrentDispatcher), (Fu = rn.ReactCurrentBatchConfig));
        ((zl = {
          readContext: Te,
          useCallback: ue,
          useContext: ue,
          useEffect: ue,
          useImperativeHandle: ue,
          useInsertionEffect: ue,
          useLayoutEffect: ue,
          useMemo: ue,
          useReducer: ue,
          useRef: ue,
          useState: ue,
          useDebugValue: ue,
          useDeferredValue: ue,
          useTransition: ue,
          useMutableSource: ue,
          useSyncExternalStore: ue,
          useId: ue,
          unstable_isNewReconciler: !1,
        }),
          (T0 = {
            readContext: Te,
            useCallback: function (e, n) {
              return ((je().memoizedState = [e, n === void 0 ? null : n]), e);
            },
            useContext: Te,
            useEffect: js,
            useImperativeHandle: function (e, n, t) {
              return (
                (t = t !== null && t !== void 0 ? t.concat([e]) : null),
                ul(4194308, 4, xc.bind(null, n, e), t)
              );
            },
            useLayoutEffect: function (e, n) {
              return ul(4194308, 4, e, n);
            },
            useInsertionEffect: function (e, n) {
              return ul(4, 2, e, n);
            },
            useMemo: function (e, n) {
              var t = je();
              return (
                (n = n === void 0 ? null : n),
                (e = e()),
                (t.memoizedState = [e, n]),
                e
              );
            },
            useReducer: function (e, n, t) {
              var r = je();
              return (
                (n = t !== void 0 ? t(n) : n),
                (r.memoizedState = r.baseState = n),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: n,
                }),
                (r.queue = e),
                (e = e.dispatch = z0.bind(null, H, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              var n = je();
              return ((e = { current: e }), (n.memoizedState = e));
            },
            useState: Hs,
            useDebugValue: pi,
            useDeferredValue: function (e) {
              return (je().memoizedState = e);
            },
            useTransition: function () {
              var e = Hs(!1),
                n = e[0];
              return ((e = P0.bind(null, e[1])), (je().memoizedState = e), [n, e]);
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, n, t) {
              var r = H,
                l = je();
              if (B) {
                if (t === void 0) throw Error(y(407));
                t = t();
              } else {
                if (((t = n()), ee === null)) throw Error(y(349));
                (Hn & 30) !== 0 || gc(r, n, t);
              }
              l.memoizedState = t;
              var u = { value: t, getSnapshot: n };
              return (
                (l.queue = u),
                js(kc.bind(null, r, u, e), [e]),
                (r.flags |= 2048),
                gr(9, wc.bind(null, r, u, t, n), void 0, null),
                t
              );
            },
            useId: function () {
              var e = je(),
                n = ee.identifierPrefix;
              if (B) {
                var t = Ye,
                  r = Je;
                ((t = (r & ~(1 << (32 - Be(r) - 1))).toString(32) + t),
                  (n = ":" + n + "R" + t),
                  (t = mr++),
                  0 < t && (n += "H" + t.toString(32)),
                  (n += ":"));
              } else ((t = x0++), (n = ":" + n + "r" + t.toString(32) + ":"));
              return (e.memoizedState = n);
            },
            unstable_isNewReconciler: !1,
          }),
          (R0 = {
            readContext: Te,
            useCallback: zc,
            useContext: Te,
            useEffect: di,
            useImperativeHandle: Pc,
            useInsertionEffect: Cc,
            useLayoutEffect: Nc,
            useMemo: Lc,
            useReducer: Du,
            useRef: _c,
            useState: function () {
              return Du(yr);
            },
            useDebugValue: pi,
            useDeferredValue: function (e) {
              var n = Re();
              return Tc(n, Y.memoizedState, e);
            },
            useTransition: function () {
              var e = Du(yr)[0],
                n = Re().memoizedState;
              return [e, n];
            },
            useMutableSource: mc,
            useSyncExternalStore: yc,
            useId: Rc,
            unstable_isNewReconciler: !1,
          }),
          (I0 = {
            readContext: Te,
            useCallback: zc,
            useContext: Te,
            useEffect: di,
            useImperativeHandle: Pc,
            useInsertionEffect: Cc,
            useLayoutEffect: Nc,
            useMemo: Lc,
            useReducer: Mu,
            useRef: _c,
            useState: function () {
              return Mu(yr);
            },
            useDebugValue: pi,
            useDeferredValue: function (e) {
              var n = Re();
              return Y === null ? (n.memoizedState = e) : Tc(n, Y.memoizedState, e);
            },
            useTransition: function () {
              var e = Mu(yr)[0],
                n = Re().memoizedState;
              return [e, n];
            },
            useMutableSource: mc,
            useSyncExternalStore: yc,
            useId: Rc,
            unstable_isNewReconciler: !1,
          }));
        Ql = {
          isMounted: function (e) {
            return (e = e._reactInternals) ? Xn(e) === e : !1;
          },
          enqueueSetState: function (e, n, t) {
            e = e._reactInternals;
            var r = de(),
              l = En(e),
              u = qe(r, l);
            ((u.payload = n),
              t !== void 0 && t !== null && (u.callback = t),
              (n = kn(e, u, l)),
              n !== null && (We(n, e, l, r), rl(n, e, l)));
          },
          enqueueReplaceState: function (e, n, t) {
            e = e._reactInternals;
            var r = de(),
              l = En(e),
              u = qe(r, l);
            ((u.tag = 1),
              (u.payload = n),
              t !== void 0 && t !== null && (u.callback = t),
              (n = kn(e, u, l)),
              n !== null && (We(n, e, l, r), rl(n, e, l)));
          },
          enqueueForceUpdate: function (e, n) {
            e = e._reactInternals;
            var t = de(),
              r = En(e),
              l = qe(t, r);
            ((l.tag = 2),
              n !== void 0 && n !== null && (l.callback = n),
              (n = kn(e, l, r)),
              n !== null && (We(n, e, r, t), rl(n, e, r)));
          },
        };
        O0 = typeof WeakMap === "function" ? WeakMap : Map;
        F0 = rn.ReactCurrentOwner;
        No = { dehydrated: null, treeContext: null, retryLane: 0 };
        jc = function (e, n) {
          for (var t = n.child; t !== null;) {
            if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
            else if (t.tag !== 4 && t.child !== null) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === n) break;
            for (; t.sibling === null;) {
              if (t.return === null || t.return === n) return;
              t = t.return;
            }
            ((t.sibling.return = t.return), (t = t.sibling));
          }
        };
        Po = function () {};
        $c = function (e, n, t, r) {
          var l = e.memoizedProps;
          if (l !== r) {
            ((e = n.stateNode), Vn(Xe.current));
            var u = null;
            switch (t) {
              case "input":
                ((l = Ku(e, l)), (r = Ku(e, r)), (u = []));
                break;
              case "select":
                ((l = j({}, l, { value: void 0 })),
                  (r = j({}, r, { value: void 0 })),
                  (u = []));
                break;
              case "textarea":
                ((l = Gu(e, l)), (r = Gu(e, r)), (u = []));
                break;
              default:
                typeof l.onClick !== "function" &&
                  typeof r.onClick === "function" &&
                  (e.onclick = gl);
            }
            Yu(t, r);
            var o;
            t = null;
            for (d in l)
              if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
                if (d === "style") {
                  var i = l[d];
                  for (o in i) i.hasOwnProperty(o) && (t || (t = {}), (t[o] = ""));
                } else
                  d !== "dangerouslySetInnerHTML" &&
                    d !== "children" &&
                    d !== "suppressContentEditableWarning" &&
                    d !== "suppressHydrationWarning" &&
                    d !== "autoFocus" &&
                    (rr.hasOwnProperty(d)
                      ? u || (u = [])
                      : (u = u || []).push(d, null));
            for (d in r) {
              var s = r[d];
              if (
                ((i = l != null ? l[d] : void 0),
                r.hasOwnProperty(d) && s !== i && (s != null || i != null))
              )
                if (d === "style")
                  if (i) {
                    for (o in i)
                      !i.hasOwnProperty(o) ||
                        (s && s.hasOwnProperty(o)) ||
                        (t || (t = {}), (t[o] = ""));
                    for (o in s)
                      s.hasOwnProperty(o) &&
                        i[o] !== s[o] &&
                        (t || (t = {}), (t[o] = s[o]));
                  } else (t || (u || (u = []), u.push(d, t)), (t = s));
                else
                  d === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0),
                      (i = i ? i.__html : void 0),
                      s != null && i !== s && (u = u || []).push(d, s))
                    : d === "children"
                      ? (typeof s !== "string" && typeof s !== "number") ||
                        (u = u || []).push(d, "" + s)
                      : d !== "suppressContentEditableWarning" &&
                        d !== "suppressHydrationWarning" &&
                        (rr.hasOwnProperty(d)
                          ? (s != null && d === "onScroll" && D("scroll", e),
                            u || i === s || (u = []))
                          : (u = u || []).push(d, s));
            }
            t && (u = u || []).push("style", t);
            var d = u;
            if ((n.updateQueue = d)) n.flags |= 4;
          }
        };
        Kc = function (e, n, t, r) {
          t !== r && (n.flags |= 4);
        };
        B0 = typeof WeakSet === "function" ? WeakSet : Set;
        ((A0 = Math.ceil),
          (Ll = rn.ReactCurrentDispatcher),
          (vi = rn.ReactCurrentOwner),
          (Le = rn.ReactCurrentBatchConfig),
          (ft = Pn(0)));
        lf = function (e, n, t) {
          if (e !== null)
            if (e.memoizedProps !== n.pendingProps || ye.current) me = !0;
            else {
              if ((e.lanes & t) === 0 && (n.flags & 128) === 0)
                return ((me = !1), M0(e, n, t));
              me = (e.flags & 131072) !== 0 ? !0 : !1;
            }
          else ((me = !1), B && (n.flags & 1048576) !== 0 && sc(n, El, n.index));
          switch (((n.lanes = 0), n.tag)) {
            case 2:
              var r = n.type;
              (ol(e, n), (e = n.pendingProps));
              var l = wt(n, se.current);
              (mt(n, t), (l = ci(null, n, r, e, l, t)));
              var u = fi();
              return (
                (n.flags |= 1),
                typeof l === "object" &&
                l !== null &&
                typeof l.render === "function" &&
                l.$$typeof === void 0
                  ? ((n.tag = 1),
                    (n.memoizedState = null),
                    (n.updateQueue = null),
                    ge(r) ? ((u = !0), kl(n)) : (u = !1),
                    (n.memoizedState =
                      l.state !== null && l.state !== void 0 ? l.state : null),
                    ui(n),
                    (l.updater = Ql),
                    (n.stateNode = l),
                    (l._reactInternals = n),
                    So(n, r, e, t),
                    (n = Co(null, n, r, !0, u, t)))
                  : ((n.tag = 0), B && u && qo(n), fe(null, n, l, t), (n = n.child)),
                n
              );
            case 16:
              r = n.elementType;
              e: {
                switch (
                  (ol(e, n),
                  (e = n.pendingProps),
                  (l = r._init),
                  (r = l(r._payload)),
                  (n.type = r),
                  (l = n.tag = Y0(r)),
                  (e = Me(r, e)),
                  l)
                ) {
                  case 0:
                    n = _o(null, n, r, e, t);
                    break e;
                  case 1:
                    n = qs(null, n, r, e, t);
                    break e;
                  case 11:
                    n = Js(null, n, r, e, t);
                    break e;
                  case 14:
                    n = Ys(null, n, r, Me(r.type, e), t);
                    break e;
                }
                throw Error(y(306, r, ""));
              }
              return n;
            case 0:
              return (
                (r = n.type),
                (l = n.pendingProps),
                (l = n.elementType === r ? l : Me(r, l)),
                _o(e, n, r, l, t)
              );
            case 1:
              return (
                (r = n.type),
                (l = n.pendingProps),
                (l = n.elementType === r ? l : Me(r, l)),
                qs(e, n, r, l, t)
              );
            case 3:
              e: {
                if ((Qc(n), e === null)) throw Error(y(387));
                ((r = n.pendingProps),
                  (u = n.memoizedState),
                  (l = u.element),
                  hc(e, n),
                  Nl(n, r, null, t));
                var o = n.memoizedState;
                if (((r = o.element), u.isDehydrated))
                  if (
                    ((u = {
                      element: r,
                      isDehydrated: !1,
                      cache: o.cache,
                      pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                      transitions: o.transitions,
                    }),
                    (n.updateQueue.baseState = u),
                    (n.memoizedState = u),
                    n.flags & 256)
                  ) {
                    ((l = _t(Error(y(423)), n)), (n = bs(e, n, r, t, l)));
                    break e;
                  } else if (r !== l) {
                    ((l = _t(Error(y(424)), n)), (n = bs(e, n, r, t, l)));
                    break e;
                  } else
                    for (
                      Se = wn(n.stateNode.containerInfo.firstChild),
                        Ee = n,
                        B = !0,
                        Ve = null,
                        t = dc(n, null, r, t),
                        n.child = t;
                      t;
                    )
                      ((t.flags = (t.flags & -3) | 4096), (t = t.sibling));
                else {
                  if ((kt(), r === l)) {
                    n = tn(e, n, t);
                    break e;
                  }
                  fe(e, n, r, t);
                }
                n = n.child;
              }
              return n;
            case 5:
              return (
                vc(n),
                e === null && go(n),
                (r = n.type),
                (l = n.pendingProps),
                (u = e !== null ? e.memoizedProps : null),
                (o = l.children),
                po(r, l) ? (o = null) : u !== null && po(r, u) && (n.flags |= 32),
                Wc(e, n),
                fe(e, n, o, t),
                n.child
              );
            case 6:
              return (e === null && go(n), null);
            case 13:
              return Ac(e, n, t);
            case 4:
              return (
                oi(n, n.stateNode.containerInfo),
                (r = n.pendingProps),
                e === null ? (n.child = St(n, null, r, t)) : fe(e, n, r, t),
                n.child
              );
            case 11:
              return (
                (r = n.type),
                (l = n.pendingProps),
                (l = n.elementType === r ? l : Me(r, l)),
                Js(e, n, r, l, t)
              );
            case 7:
              return (fe(e, n, n.pendingProps, t), n.child);
            case 8:
              return (fe(e, n, n.pendingProps.children, t), n.child);
            case 12:
              return (fe(e, n, n.pendingProps.children, t), n.child);
            case 10:
              e: {
                if (
                  ((r = n.type._context),
                  (l = n.pendingProps),
                  (u = n.memoizedProps),
                  (o = l.value),
                  F(_l, r._currentValue),
                  (r._currentValue = o),
                  u !== null)
                )
                  if (Qe(u.value, o)) {
                    if (u.children === l.children && !ye.current) {
                      n = tn(e, n, t);
                      break e;
                    }
                  } else
                    for (u = n.child, u !== null && (u.return = n); u !== null;) {
                      var i = u.dependencies;
                      if (i !== null) {
                        o = u.child;
                        for (var s = i.firstContext; s !== null;) {
                          if (s.context === r) {
                            if (u.tag === 1) {
                              ((s = qe(-1, t & -t)), (s.tag = 2));
                              var d = u.updateQueue;
                              if (d !== null) {
                                d = d.shared;
                                var v = d.pending;
                                (v === null
                                  ? (s.next = s)
                                  : ((s.next = v.next), (v.next = s)),
                                  (d.pending = s));
                              }
                            }
                            ((u.lanes |= t),
                              (s = u.alternate),
                              s !== null && (s.lanes |= t),
                              wo(u.return, t, n),
                              (i.lanes |= t));
                            break;
                          }
                          s = s.next;
                        }
                      } else if (u.tag === 10) o = u.type === n.type ? null : u.child;
                      else if (u.tag === 18) {
                        if (((o = u.return), o === null)) throw Error(y(341));
                        ((o.lanes |= t),
                          (i = o.alternate),
                          i !== null && (i.lanes |= t),
                          wo(o, t, n),
                          (o = u.sibling));
                      } else o = u.child;
                      if (o !== null) o.return = u;
                      else
                        for (o = u; o !== null;) {
                          if (o === n) {
                            o = null;
                            break;
                          }
                          if (((u = o.sibling), u !== null)) {
                            ((u.return = o.return), (o = u));
                            break;
                          }
                          o = o.return;
                        }
                      u = o;
                    }
                (fe(e, n, l.children, t), (n = n.child));
              }
              return n;
            case 9:
              return (
                (l = n.type),
                (r = n.pendingProps.children),
                mt(n, t),
                (l = Te(l)),
                (r = r(l)),
                (n.flags |= 1),
                fe(e, n, r, t),
                n.child
              );
            case 14:
              return (
                (r = n.type),
                (l = Me(r, n.pendingProps)),
                (l = Me(r.type, l)),
                Ys(e, n, r, l, t)
              );
            case 15:
              return Vc(e, n, n.type, n.pendingProps, t);
            case 17:
              return (
                (r = n.type),
                (l = n.pendingProps),
                (l = n.elementType === r ? l : Me(r, l)),
                ol(e, n),
                (n.tag = 1),
                ge(r) ? ((e = !0), kl(n)) : (e = !1),
                mt(n, t),
                Dc(n, r, l),
                So(n, r, l, t),
                Co(null, n, r, !0, e, t)
              );
            case 19:
              return Hc(e, n, t);
            case 22:
              return Bc(e, n, t);
          }
          throw Error(y(156, n.tag));
        };
        af =
          typeof reportError === "function"
            ? reportError
            : function (e) {
                console.error(e);
              };
        Kl.prototype.render = Ci.prototype.render = function (e) {
          var n = this._internalRoot;
          if (n === null) throw Error(y(409));
          $l(e, n, null, null);
        };
        Kl.prototype.unmount = Ci.prototype.unmount = function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var n = e.containerInfo;
            ($n(function () {
              $l(null, e, null, null);
            }),
              (n[en] = null));
          }
        };
        Kl.prototype.unstable_scheduleHydration = function (e) {
          if (e) {
            var n = Ba();
            e = { blockedOn: null, target: e, priority: n };
            for (var t = 0; t < dn.length && n !== 0 && n < dn[t].priority; t++);
            (dn.splice(t, 0, e), t === 0 && Qa(e));
          }
        };
        Ua = function (e) {
          switch (e.tag) {
            case 3:
              var n = e.stateNode;
              if (n.current.memoizedState.isDehydrated) {
                var t = At(n.pendingLanes);
                t !== 0 &&
                  (jo(n, t | 1),
                  we(n, Z()),
                  (R & 6) === 0 && ((Ct = Z() + 500), zn()));
              }
              break;
            case 13:
              ($n(function () {
                var r = nn(e, 1);
                if (r !== null) {
                  var l = de();
                  We(r, e, 1, l);
                }
              }),
                _i(e, 1));
          }
        };
        $o = function (e) {
          if (e.tag === 13) {
            var n = nn(e, 134217728);
            if (n !== null) {
              var t = de();
              We(n, e, 134217728, t);
            }
            _i(e, 134217728);
          }
        };
        Va = function (e) {
          if (e.tag === 13) {
            var n = En(e),
              t = nn(e, n);
            if (t !== null) {
              var r = de();
              We(t, e, n, r);
            }
            _i(e, n);
          }
        };
        Ba = function () {
          return I;
        };
        Wa = function (e, n) {
          var t = I;
          try {
            return ((I = e), n());
          } finally {
            I = t;
          }
        };
        eo = function (e, n, t) {
          switch (n) {
            case "input":
              if ((Xu(e, t), (n = t.name), t.type === "radio" && n != null)) {
                for (t = e; t.parentNode;) t = t.parentNode;
                t = t.querySelectorAll(
                  "input[name=" + JSON.stringify("" + n) + '][type="radio"]',
                );
                for (n = 0; n < t.length; n++) {
                  var r = t[n];
                  if (r !== e && r.form === e.form) {
                    var l = Vl(r);
                    if (!l) throw Error(y(90));
                    (ya(r), Xu(r, l));
                  }
                }
              }
              break;
            case "textarea":
              wa(e, t);
              break;
            case "select":
              ((n = t.value), n != null && dt(e, !!t.multiple, n, !1));
          }
        };
        xa = gi;
        Pa = $n;
        ((th = { usingClientEntryPoint: !1, Events: [Er, ut, Vl, Ca, Na, gi] }),
          (Bt = {
            findFiberByHostInstance: Mn,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          }),
          (rh = {
            bundleType: Bt.bundleType,
            version: Bt.version,
            rendererPackageName: Bt.rendererPackageName,
            rendererConfig: Bt.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: rn.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return ((e = Ta(e)), e === null ? null : e.stateNode);
            },
            findFiberByHostInstance: Bt.findFiberByHostInstance || eh,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          }));
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
          if (
            ((bn = __REACT_DEVTOOLS_GLOBAL_HOOK__),
            !bn.isDisabled && bn.supportsFiber)
          )
            try {
              ((Fl = bn.inject(rh)), (Ke = bn));
            } catch (e) {}
        }
        ((cf = th), (wf = gi));
      });
      var Nf = Pr((mh, Cf) => {
        Ef();
        function _f() {
          if (
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function"
          )
            return;
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_f);
          } catch (e) {
            console.error(e);
          }
        }
        (_f(), (Cf.exports = xi));
      });
      var xf = Pr((uh) => {
        var Cr = Rn(Nf(), 1);
        ((uh.createRoot = Cr.createRoot), (uh.hydrateRoot = Cr.hydrateRoot));
        var lh;
      });
      var Tf = Rn(Lt(), 1),
        Rf = Rn(xf(), 1);
      var Lf = Rn(Lt(), 1);
      var Pf = Rn(Lt(), 1),
        oh = Symbol.for("react.element"),
        ih = Symbol.for("react.fragment"),
        sh = Object.prototype.hasOwnProperty,
        ah = Pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        ch = { key: !0, ref: !0, __self: !0, __source: !0 };
      function zf(e, n, t) {
        var r,
          l = {},
          u = null,
          o = null;
        (t !== void 0 && (u = "" + t),
          n.key !== void 0 && (u = "" + n.key),
          n.ref !== void 0 && (o = n.ref));
        for (r in n) sh.call(n, r) && !ch.hasOwnProperty(r) && (l[r] = n[r]);
        if (e && e.defaultProps)
          for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
        return {
          $$typeof: oh,
          type: e,
          key: u,
          ref: o,
          props: l,
          _owner: ah.current,
        };
      }
      var Pi = ih,
        P = zf,
        X = zf;
      var fh = `
  :root {
    --bg: #050505;
    --fg: #fff;
    --muted: #9a9a9a;
    --line: rgba(255,255,255,.13);
    --nav-height: 72px;
    --edge-size: clamp(320px, 40vw, 560px);
    --edge-blur-main: 104px;
    --edge-blur-diffusion: 54px;
    --edge-energy-top: 0;
    --edge-energy-bottom: 0;
    --film-base: 0.055;
    /* 3D vyražený text (viz gemini-code-1790294154132.html), přeladěno pro tmavý --bg:
       stupně #2e2e2e -> #121212 jsou schválně světlejší než #050505, takže vytvoří
       jemnou vystouplou hranu; měkký rgba(0,0,0,..) stín pak splyne s pozadím. */
    --shadow-3d:
      -1px -1px 1px rgba(255,255,255,.55),
      0px 1px 0 #2e2e2e,
      0px 2px 0 #2c2c2c,
      0px 3px 0 #2a2a2a,
      0px 4px 0 #282828,
      0px 5px 0 #262626,
      0px 6px 0 #242424,
      0px 7px 0 #222,
      0px 8px 0 #202020,
      0px 9px 0 #1e1e1e,
      0px 10px 0 #1c1c1c,
      0px 11px 0 #1a1a1a,
      0px 12px 0 #181818,
      0px 13px 0 #161616,
      0px 14px 0 #141414,
      0px 15px 0 #121212,
      2px 20px 5px rgba(0, 0, 0, .9),
      5px 23px 5px rgba(0, 0, 0, .3),
      8px 27px 8px rgba(0, 0, 0, .5),
      8px 28px 35px rgba(0, 0, 0, .9);
  }
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  html { scroll-behavior: auto; background: var(--bg); }
  body {
    min-height: 100vh;
    overflow-x: hidden;
    background:
      radial-gradient(circle at 74% 12%, rgba(255,255,255,.075), transparent 0 30%),
      radial-gradient(circle at 17% 68%, rgba(255,255,255,.052), transparent 0 27%),
      var(--bg);
    color: var(--fg);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    scrollbar-gutter: stable;
    overscroll-behavior-x: none;
  }
  .film-grain {
    position: fixed;
    inset: -50px;
    width: calc(100% + 100px);
    height: calc(100% + 100px);
    z-index: 3;
    pointer-events: none;
    opacity: 0.055;
    mix-blend-mode: normal;
    filter: contrast(1.1);
    will-change: transform;
    transform: translateZ(0);
    contain: strict;
    image-rendering: auto;
  }
  a { color: inherit; }
  .edge {
    position: fixed;
    inset-inline: 0;
    height: var(--edge-size);
    z-index: 90;
    pointer-events: none;
    overflow: visible;
  }
  .edge--top { top: 0; --edge-energy: var(--edge-energy-top); }
  .edge--bottom { bottom: 0; --edge-energy: var(--edge-energy-bottom); }
  .edge::before {
    content: "";
    position: absolute;
    inset: -36px -4% -36px;
    background: rgba(5,5,5,.018);
    backdrop-filter:
      blur(calc(var(--edge-blur-main) + var(--edge-energy) * 64px))
      saturate(calc(1.04 + var(--edge-energy) * .10));
    -webkit-backdrop-filter:
      blur(calc(var(--edge-blur-main) + var(--edge-energy) * 64px))
      saturate(calc(1.04 + var(--edge-energy) * .10));
    -webkit-mask-image: linear-gradient(
      180deg,
      #000 0%, #000 4%, rgba(0,0,0,.985) 13%, rgba(0,0,0,.95) 27%,
      rgba(0,0,0,.82) 43%, rgba(0,0,0,.60) 60%, rgba(0,0,0,.35) 74%,
      rgba(0,0,0,.15) 86%, rgba(0,0,0,.055) 94%, transparent 100%);
    mask-image: linear-gradient(
      180deg,
      #000 0%, #000 4%, rgba(0,0,0,.985) 13%, rgba(0,0,0,.95) 27%,
      rgba(0,0,0,.82) 43%, rgba(0,0,0,.60) 60%, rgba(0,0,0,.35) 74%,
      rgba(0,0,0,.15) 86%, rgba(0,0,0,.055) 94%, transparent 100%);
    transform: translate3d(0, var(--edge-drift, 0px), 0);
    will-change: transform;
  }
  .edge--bottom::before {
    -webkit-mask-image: linear-gradient(0deg, #000 0%, #000 4%, rgba(0,0,0,.985) 13%, rgba(0,0,0,.95) 27%, rgba(0,0,0,.82) 43%, rgba(0,0,0,.60) 60%, rgba(0,0,0,.35) 74%, rgba(0,0,0,.15) 86%, rgba(0,0,0,.055) 94%, transparent 100%);
    mask-image: linear-gradient(0deg, #000 0%, #000 4%, rgba(0,0,0,.985) 13%, rgba(0,0,0,.95) 27%, rgba(0,0,0,.82) 43%, rgba(0,0,0,.60) 60%, rgba(0,0,0,.35) 74%, rgba(0,0,0,.15) 86%, rgba(0,0,0,.055) 94%, transparent 100%);
  }
  .edge::after {
    content: "";
    position: absolute;
    inset: -22px -3% -22px;
    background:
      linear-gradient(90deg, rgba(255,255,255,.028), transparent 10%, transparent 90%, rgba(255,255,255,.028)),
      linear-gradient(180deg, rgba(0,0,0,.42), rgba(0,0,0,.22) 24%, rgba(0,0,0,.10) 52%, transparent 82%);
    backdrop-filter: blur(calc(var(--edge-blur-diffusion) + var(--edge-energy) * 28px));
    -webkit-backdrop-filter: blur(calc(var(--edge-blur-diffusion) + var(--edge-energy) * 28px));
    -webkit-mask-image: linear-gradient(180deg, #000 0%, #000 8%, rgba(0,0,0,.92) 28%, rgba(0,0,0,.54) 58%, rgba(0,0,0,.18) 84%, transparent 100%);
    mask-image: linear-gradient(180deg, #000 0%, #000 8%, rgba(0,0,0,.92) 28%, rgba(0,0,0,.54) 58%, rgba(0,0,0,.18) 84%, transparent 100%);
    opacity: calc(.68 + var(--edge-energy) * .14);
  }
  .edge--bottom::after {
    background:
      linear-gradient(90deg, rgba(255,255,255,.028), transparent 10%, transparent 90%, rgba(255,255,255,.028)),
      linear-gradient(0deg, rgba(0,0,0,.42), rgba(0,0,0,.22) 24%, rgba(0,0,0,.10) 52%, transparent 82%);
    -webkit-mask-image: linear-gradient(0deg, #000 0%, #000 8%, rgba(0,0,0,.92) 28%, rgba(0,0,0,.54) 58%, rgba(0,0,0,.18) 84%, transparent 100%);
    mask-image: linear-gradient(0deg, #000 0%, #000 8%, rgba(0,0,0,.92) 28%, rgba(0,0,0,.54) 58%, rgba(0,0,0,.18) 84%, transparent 100%);
  }
  .edge__haze, .edge__mist, .edge__glow, .edge__shine {
    position: absolute; pointer-events: none; will-change: transform, opacity;
  }
  .edge__haze {
    inset: -8% -2%;
    background: linear-gradient(180deg, rgba(255,255,255,.034), rgba(255,255,255,.012) 34%, transparent 82%);
    filter: blur(48px);
    opacity: calc(.46 + var(--edge-energy) * .18);
  }
  .edge--bottom .edge__haze {
    background: linear-gradient(0deg, rgba(255,255,255,.034), rgba(255,255,255,.012) 34%, transparent 82%);
  }
  .edge__mist {
    inset: -12% -3%;
    background:
      radial-gradient(ellipse at 50% 0%, rgba(255,255,255,.052) 0%, rgba(255,255,255,.018) 30%, transparent 68%),
      linear-gradient(180deg, rgba(255,255,255,.014), transparent 64%);
    filter: blur(34px);
    opacity: calc(.32 + var(--edge-energy) * .18);
    transform: translate3d(0, var(--mist-drift, 0px), 0);
  }
  .edge--bottom .edge__mist {
    background:
      radial-gradient(ellipse at 50% 100%, rgba(255,255,255,.052) 0%, rgba(255,255,255,.018) 30%, transparent 68%),
      linear-gradient(0deg, rgba(255,255,255,.014), transparent 64%);
  }
  .edge__glow {
    width: min(54vw, 760px); height: min(32vw, 460px); border-radius: 999px;
    background: radial-gradient(circle at center, rgba(255,255,255,.12) 0%, rgba(255,255,255,.045) 34%, rgba(255,255,255,0) 72%);
    filter: blur(84px); opacity: calc(.25 + var(--edge-energy) * .45);
  }
  .edge--top .edge__glow { top: -54%; left: 6%; }
  .edge--bottom .edge__glow { right: 6%; bottom: -54%; }
  .edge__shine {
    left: 8%; right: 8%; height: 1px; border-radius: 999px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.13), transparent);
    filter: blur(1.1px); opacity: calc(.14 + var(--edge-energy) * .32);
  }
  .edge--top .edge__shine { bottom: 17%; }
  .edge--bottom .edge__shine { top: 17%; }
  .nav {
    position: fixed; inset: 0 0 auto 0; height: var(--nav-height); z-index: 100;
    display: flex; align-items: center;
  }
  .nav-inner {
    width: min(1180px, calc(100% - 40px)); margin-inline: auto;
    display: flex; align-items: center; justify-content: space-between; gap: 24px;
  }
  .brand { text-decoration: none; font-size: 13px; font-weight: 800; letter-spacing: .18em; white-space: nowrap; }
  .nav-links { display: flex; gap: 28px; align-items:center; }
  .nav-links a { text-decoration: none; font-size: 12px; font-weight: 700; letter-spacing: .12em; opacity: .68; transition: opacity .2s ease, transform .2s ease; }
  .nav-links a:hover, .nav-links a:focus-visible { opacity: 1; transform: translateY(-1px); }
  .nav-links a:focus-visible, .brand:focus-visible { outline: 1px solid rgba(255,255,255,.5); outline-offset: 6px; }
  .live-grain {
    display:inline-flex; align-items:center; gap:6px;
    font-size:10px; letter-spacing:.14em; font-weight:700; color:#8e8e8e;
    border:1px solid rgba(255,255,255,.13); padding:5px 10px; border-radius:999px;
    background: rgba(255,255,255,.05); backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    white-space:nowrap;
  }
  .live-dot { width:5px; height:5px; border-radius:999px; background:#fff; box-shadow:0 0 10px rgba(255,255,255,.75); animation: livePulse 1.2s infinite; }
  @keyframes livePulse { 0%,100%{opacity:1; transform:scale(1)} 50%{opacity:.48; transform:scale(.86)} }
  main {
    position: relative;
    z-index: 1;
  }
  .hero {
    min-height: 100svh; display: grid; place-items: center; padding: 130px 24px 90px;
    position: relative; overflow: clip; isolation: isolate;
  }
  .hero-inner { width: min(1180px, 100%); position: relative; z-index: 2; will-change: transform; }
  .eyebrow {
    display: inline-block; margin-bottom: 22px; color: var(--muted); font-size: 11px; font-weight: 900;
    letter-spacing: .2em; text-transform: uppercase; font-family: 'Lato', sans-serif;
    text-rendering: optimizeLegibility; text-shadow: var(--shadow-3d);
  }
  h1 {
    max-width: 850px; margin: 0; font-size: clamp(58px, 11vw, 150px); line-height: .84; letter-spacing: -.01em;
    font-weight: 900; font-family: 'Lato', sans-serif; text-transform: uppercase;
    text-rendering: optimizeLegibility; text-shadow: var(--shadow-3d);
  }
  .hero p { max-width: 610px; margin: 34px 0 0; color: #b1b1b1; font-size: clamp(16px, 2vw, 20px); line-height: 1.7; }
  .demo { width: min(1180px, calc(100% - 40px)); margin: 0 auto; padding: 110px 0 160px; }
  .section { min-height: 92svh; display: grid; align-items: center; border-top: 1px solid var(--line); position: relative; isolation: isolate; content-visibility: auto; contain-intrinsic-size: 900px; contain: layout paint style; }
  .section-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
  .section h2 {
    margin: 0; font-size: clamp(42px, 7vw, 96px); line-height: .9; letter-spacing: -.005em;
    font-weight: 900; font-family: 'Lato', sans-serif; text-transform: uppercase;
    text-rendering: optimizeLegibility; text-shadow: var(--shadow-3d);
  }
  .section p { max-width: 500px; margin: 0; color: var(--muted); font-size: 18px; line-height: 1.8; }
  .visual {
    min-height: 420px; margin-top: 8vh; position: relative; overflow: hidden; border-radius: 28px;
    border: 1px solid rgba(255,255,255,.12);
    background: linear-gradient(135deg, rgba(255,255,255,.10), transparent 40%), #0d0d0d;
    isolation: isolate; transform: translate3d(0,0,0); will-change: transform;
    contain: layout paint style; content-visibility: auto; contain-intrinsic-size: 420px;
  }
  .visual::before, .visual::after { content: ""; position: absolute; border-radius: 999px; pointer-events: none; }
  .visual::before { width: 240px; height: 240px; top: 15%; left: 15%; background: radial-gradient(circle, rgba(255,255,255,.20), rgba(255,255,255,0) 68%); filter: blur(18px); }
  .visual::after { width: 300px; height: 300px; right: 5%; bottom: -8%; background: radial-gradient(circle, rgba(255,255,255,.07), rgba(255,255,255,0) 70%); filter: blur(24px); }
  .card { position: absolute; left: 26px; right: 26px; bottom: 26px; padding: 22px; border-radius: 18px; background: rgba(255,255,255,.045); border: 1px solid rgba(255,255,255,.12); backdrop-filter: blur(28px) saturate(1.06); -webkit-backdrop-filter: blur(28px) saturate(1.06); will-change: transform; }
  .card small { color: #999; letter-spacing: .14em; text-transform: uppercase; }
  .card strong { display: block; margin-top: 7px; font-size: 22px; }
  .footer { width: min(1180px, calc(100% - 40px)); margin-inline: auto; padding: 34px 0 60px; border-top: 1px solid var(--line); color: #666; font-size: 12px; letter-spacing: .08em; display:flex; flex-wrap:wrap; gap:12px; justify-content:space-between; }
  .footer em { font-style: normal; color: #8a8a8a; }
  .parallax-stage { position: absolute; inset: -18% 0; overflow: visible; pointer-events: none; z-index: 0; }
  .parallax-layer { position: absolute; border-radius: 999px; transform: translate3d(0,0,0); will-change: transform; opacity: .92; }
  .parallax-layer--1 { width: 32vw; height: 32vw; min-width: 260px; min-height: 260px; top: 8%; right: -8%; background: radial-gradient(circle, rgba(255,255,255,.13), rgba(255,255,255,0) 68%); filter: blur(12px); }
  .parallax-layer--2 { width: 22vw; height: 22vw; min-width: 180px; min-height: 180px; top: 48%; left: -6%; background: radial-gradient(circle, rgba(255,255,255,.08), rgba(255,255,255,0) 70%); filter: blur(18px); }
  .parallax-layer--3 { width: 18vw; height: 18vw; min-width: 150px; min-height: 150px; bottom: -3%; right: 17%; background: radial-gradient(circle, rgba(255,255,255,.06), rgba(255,255,255,0) 70%); filter: blur(24px); }
  [data-parallax] { will-change: transform; }
  /* GSAP na sekcích: bez content-visibility (stabilní měření ScrollTriggeru) */
  .section { content-visibility: visible; }
  .hero-inner > *, .section-grid > div { will-change: transform, opacity, filter; transform-origin: 50% 50%; }
  .scroll-progress { position: fixed; top: 0; right: 0; width: 2px; height: 100%; z-index: 101; background: rgba(255,255,255,.045); pointer-events: none; }
  .scroll-progress span { display: block; width: 100%; height: 100%; transform-origin: top center; transform: scaleY(0); background: rgba(255,255,255,.55); box-shadow: 0 0 18px rgba(255,255,255,.22); will-change: transform; }

  @supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
    .edge::before, .edge::after { background: linear-gradient(180deg, rgba(0,0,0,.55), transparent 90%); }
  }
  @media (max-width: 760px) {
    :root { --nav-height: 64px; --edge-size: 270px; --edge-blur-main: 82px; --edge-blur-diffusion: 42px; }
    .nav-inner, .demo, .footer { width: min(calc(100% - 28px), 1180px); }
    .nav-links { gap: 12px; }
    .nav-links a { font-size: 10px; }
    .section-grid { grid-template-columns: 1fr; gap: 44px; }
    .visual { min-height: 340px; }
    .scroll-progress { display: none; }
    .film-grain { opacity: 0.04; }
    .live-grain { font-size: 9px; padding:4px 8px; }
  }
  @media (pointer: coarse) {
    .parallax-layer { filter: blur(42px); }
    .edge::after { opacity: .56; }
  }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .film-grain { display: none !important; }
    .live-dot { animation: none !important; }
    .edge, .edge::before, .edge::after, .edge__glow, .edge__haze, .edge__mist, .parallax-layer, [data-parallax], .visual, .card { transform: none !important; transition: none !important; }
    .nav-links a { transition: none; }
  }
      `;
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
      Rf.createRoot(document.getElementById("root")).render(
        P(Tf.default.StrictMode, { children: P(zi, {}) }),
      );
