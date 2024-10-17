"use strict";
(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[80875], {
    782571: function() {},
    229480: function() {},
    681559: function(n, t, e) {
        var r = e(70998)
          , o = {
            addClass: r.iQ,
            removeClass: r.vy,
            hasClass: r.nB,
            toggleClass: r.p1,
            attr: r.CF,
            removeAttr: r.K$,
            transform: r.pd,
            transition: r.kY,
            on: r.on,
            off: r.AU,
            trigger: r.hZ,
            transitionEnd: r.XQ,
            outerWidth: r.Gq,
            outerHeight: r.DK,
            styles: r.R7,
            offset: r.cY,
            css: r.AH,
            each: r.__,
            html: r.qy,
            text: r.Qq,
            is: r.is,
            index: r.Pe,
            eq: r.eq,
            append: r.BC,
            prepend: r.Hs,
            next: r.K2,
            nextAll: r.HW,
            prev: r.YL,
            prevAll: r.zy,
            parent: r.$t,
            parents: r.M8,
            closest: r.kp,
            find: r.I6,
            children: r.Y_,
            filter: r.pb,
            remove: r.TF
        };
        Object.keys(o).forEach((function(n) {
            Object.defineProperty(r.$.fn, n, {
                value: o[n],
                writable: !0
            })
        }
        )),
        t.A = r.$
    },
    641590: function(n, t, e) {
        e.d(t, {
            X: function() {
                return u
            }
        });
        var r = e(841430), o;
        function i() {
            var n = (0,
            r.zk)();
            function t() {
                var t = n.navigator.userAgent.toLowerCase();
                return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
            }
            return {
                isEdge: !!n.navigator.userAgent.match(/Edge/g),
                isSafari: t(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent)
            }
        }
        function u() {
            return o || (o = i()),
            o
        }
    },
    677094: function(n, t, e) {
        e.d(t, {
            P: function() {
                return a
            }
        });
        var r = e(841430), o = e(283693), i;
        function u(n) {
            var t, e = (void 0 === n ? {} : n).userAgent, i = (0,
            o.k)(), u = (0,
            r.zk)(), a = u.navigator.platform, c = e || u.navigator.userAgent, f = {
                ios: !1,
                android: !1
            }, s = u.screen.width, l = u.screen.height, d = c.match(/(Android);?[\s\/]+([\d.]+)?/), v = c.match(/(iPad).*OS\s([\d_]+)/), p = c.match(/(iPod)(.*OS\s([\d_]+))?/), h = !v && c.match(/(iPhone\sOS|iOS)\s([\d_]+)/), g = "Win32" === a, m = "MacIntel" === a, A = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
            return !v && m && i.touch && A.indexOf(s + "x" + l) >= 0 && ((v = c.match(/(Version)\/([\d.]+)/)) || (v = [0, 1, "13_0_0"]),
            m = !1),
            d && !g && (f.os = "android",
            f.android = !0),
            (v || h || p) && (f.os = "ios",
            f.ios = !0),
            f
        }
        function a(n) {
            return void 0 === n && (n = {}),
            i || (i = u(n)),
            i
        }
    },
    283693: function(n, t, e) {
        e.d(t, {
            k: function() {
                return u
            }
        });
        var r = e(841430), o;
        function i() {
            var n = (0,
            r.zk)()
              , t = (0,
            r.YE)();
            return {
                touch: !!("ontouchstart"in n || n.DocumentTouch && t instanceof n.DocumentTouch),
                pointerEvents: !!n.PointerEvent && "maxTouchPoints"in n.navigator && n.navigator.maxTouchPoints >= 0,
                observer: function t() {
                    return "MutationObserver"in n || "WebkitMutationObserver"in n
                }(),
                passiveListener: function t() {
                    var e = !1;
                    try {
                        var r = Object.defineProperty({}, "passive", {
                            get: function n() {
                                e = !0
                            }
                        });
                        n.addEventListener("testPassiveListener", null, r)
                    } catch (o) {}
                    return e
                }(),
                gestures: function t() {
                    return "ongesturestart"in n
                }()
            }
        }
        function u() {
            return o || (o = i()),
            o
        }
    },
    950162: function(n, t, e) {
        e.d(t, {
            Gv: function() {
                return f
            },
            IY: function() {
                return p
            },
            X$: function() {
                return l
            },
            dY: function() {
                return i
            },
            fq: function() {
                return v
            },
            oR: function() {
                return o
            },
            ro: function() {
                return c
            },
            tB: function() {
                return u
            },
            wD: function() {
                return d
            }
        });
        var r = e(841430);
        function o(n) {
            var t = n;
            Object.keys(t).forEach((function(n) {
                try {
                    t[n] = null
                } catch (e) {}
                try {
                    delete t[n]
                } catch (e) {}
            }
            ))
        }
        function i(n, t) {
            return void 0 === t && (t = 0),
            setTimeout(n, t)
        }
        function u() {
            return Date.now()
        }
        function a(n) {
            var t = (0,
            r.zk)(), e;
            return t.getComputedStyle && (e = t.getComputedStyle(n, null)),
            !e && n.currentStyle && (e = n.currentStyle),
            e || (e = n.style),
            e
        }
        function c(n, t) {
            void 0 === t && (t = "x");
            var e = (0,
            r.zk)(), o, i, u, c = a(n, null);
            return e.WebKitCSSMatrix ? ((i = c.transform || c.webkitTransform).split(",").length > 6 && (i = i.split(", ").map((function(n) {
                return n.replace(",", ".")
            }
            )).join(", ")),
            u = new e.WebKitCSSMatrix("none" === i ? "" : i)) : o = (u = c.MozTransform || c.OTransform || c.MsTransform || c.msTransform || c.transform || c.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
            "x" === t && (i = e.WebKitCSSMatrix ? u.m41 : 16 === o.length ? parseFloat(o[12]) : parseFloat(o[4])),
            "y" === t && (i = e.WebKitCSSMatrix ? u.m42 : 16 === o.length ? parseFloat(o[13]) : parseFloat(o[5])),
            i || 0
        }
        function f(n) {
            return "object" == typeof n && null !== n && n.constructor && "Object" === Object.prototype.toString.call(n).slice(8, -1)
        }
        function s(n) {
            return "undefined" != typeof window && void 0 !== window.HTMLElement ? n instanceof HTMLElement : n && (1 === n.nodeType || 11 === n.nodeType)
        }
        function l() {
            for (var n = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"], e = 1; e < arguments.length; e += 1) {
                var r = e < 0 || arguments.length <= e ? void 0 : arguments[e];
                if (null != r && !s(r))
                    for (var o = Object.keys(Object(r)).filter((function(n) {
                        return t.indexOf(n) < 0
                    }
                    )), i = 0, u = o.length; i < u; i += 1) {
                        var a = o[i]
                          , c = Object.getOwnPropertyDescriptor(r, a);
                        void 0 !== c && c.enumerable && (f(n[a]) && f(r[a]) ? r[a].__swiper__ ? n[a] = r[a] : l(n[a], r[a]) : !f(n[a]) && f(r[a]) ? (n[a] = {},
                        r[a].__swiper__ ? n[a] = r[a] : l(n[a], r[a])) : n[a] = r[a])
                    }
            }
            return n
        }
        function d(n, t) {
            Object.keys(t).forEach((function(e) {
                f(t[e]) && Object.keys(t[e]).forEach((function(r) {
                    "function" == typeof t[e][r] && (t[e][r] = t[e][r].bind(n))
                }
                )),
                n[e] = t[e]
            }
            ))
        }
        function v(n) {
            return void 0 === n && (n = ""),
            "." + n.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")
        }
        function p(n, t, e, o) {
            var i = (0,
            r.YE)();
            return e && Object.keys(o).forEach((function(e) {
                if (!t[e] && !0 === t.auto) {
                    var r = i.createElement("div");
                    r.className = o[e],
                    n.append(r),
                    t[e] = r
                }
            }
            )),
            t
        }
    },
    525048: function(n, t, e) {
        e.r(t),
        e.d(t, {
            A11y: function() {
                return p.A
            },
            Autoplay: function() {
                return m.A
            },
            Controller: function() {
                return v.A
            },
            EffectCoverflow: function() {
                return x.A
            },
            EffectCube: function() {
                return b.A
            },
            EffectFade: function() {
                return A.A
            },
            EffectFlip: function() {
                return y.A
            },
            HashNavigation: function() {
                return g.A
            },
            History: function() {
                return h.A
            },
            Keyboard: function() {
                return i.A
            },
            Lazy: function() {
                return d.A
            },
            Mousewheel: function() {
                return u.A
            },
            Navigation: function() {
                return a.A
            },
            Pagination: function() {
                return c.A
            },
            Parallax: function() {
                return s.A
            },
            Scrollbar: function() {
                return f.A
            },
            Swiper: function() {
                return r.A
            },
            Thumbs: function() {
                return O.A
            },
            Virtual: function() {
                return o.A
            },
            Zoom: function() {
                return l.A
            },
            default: function() {
                return r.A
            }
        });
        var r = e(869855)
          , o = e(512741)
          , i = e(24725)
          , u = e(37407)
          , a = e(813463)
          , c = e(316955)
          , f = e(946793)
          , s = e(213477)
          , l = e(676437)
          , d = e(285747)
          , v = e(323763)
          , p = e(279879)
          , h = e(251941)
          , g = e(1045)
          , m = e(471725)
          , A = e(523737)
          , b = e(627385)
          , y = e(883237)
          , x = e(968529)
          , O = e(477893)
    }
}]);
