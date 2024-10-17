"use strict";
(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[57457], {
    648851: function(e, t, n) {
        /**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
        var r = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator
          , o = function() {
            for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                if (r && navigator.userAgent.indexOf(e[t]) >= 0)
                    return 1;
            return 0
        }();
        function i(e) {
            var t = !1;
            return function() {
                t || (t = !0,
                window.Promise.resolve().then((function() {
                    t = !1,
                    e()
                }
                )))
            }
        }
        function a(e) {
            var t = !1;
            return function() {
                t || (t = !0,
                setTimeout((function() {
                    t = !1,
                    e()
                }
                ), o))
            }
        }
        var f, s = r && window.Promise ? i : a;
        function p(e) {
            var t;
            return e && "[object Function]" === {}.toString.call(e)
        }
        function l(e, t) {
            if (1 !== e.nodeType)
                return [];
            var n, r = e.ownerDocument.defaultView.getComputedStyle(e, null);
            return t ? r[t] : r
        }
        function u(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host
        }
        function d(e) {
            if (!e)
                return document.body;
            switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
            }
            var t = l(e)
              , n = t.overflow
              , r = t.overflowX
              , o = t.overflowY;
            return /(auto|scroll|overlay)/.test(n + o + r) ? e : d(u(e))
        }
        function c(e) {
            return e && e.referenceNode ? e.referenceNode : e
        }
        var h = r && !(!window.MSInputMethodContext || !document.documentMode)
          , m = r && /MSIE 10/.test(navigator.userAgent);
        function v(e) {
            return 11 === e ? h : 10 === e ? m : h || m
        }
        function g(e) {
            if (!e)
                return document.documentElement;
            for (var t = v(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling; )
                n = (e = e.nextElementSibling).offsetParent;
            var r = n && n.nodeName;
            return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === l(n, "position") ? g(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
        }
        function b(e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || g(e.firstElementChild) === e)
        }
        function w(e) {
            return null !== e.parentNode ? w(e.parentNode) : e
        }
        function y(e, t) {
            if (!(e && e.nodeType && t && t.nodeType))
                return document.documentElement;
            var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
              , r = n ? e : t
              , o = n ? t : e
              , i = document.createRange();
            i.setStart(r, 0),
            i.setEnd(o, 0);
            var a = i.commonAncestorContainer;
            if (e !== a && t !== a || r.contains(o))
                return b(a) ? a : g(a);
            var f = w(e);
            return f.host ? y(f.host, t) : y(e, w(t).host)
        }
        function x(e) {
            var t, n = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft", r = e.nodeName;
            if ("BODY" === r || "HTML" === r) {
                var o = e.ownerDocument.documentElement, i;
                return (e.ownerDocument.scrollingElement || o)[n]
            }
            return e[n]
        }
        function E(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , r = x(t, "top")
              , o = x(t, "left")
              , i = n ? -1 : 1;
            return e.top += r * i,
            e.bottom += r * i,
            e.left += o * i,
            e.right += o * i,
            e
        }
        function O(e, t) {
            var n = "x" === t ? "Left" : "Top"
              , r = "Left" === n ? "Right" : "Bottom";
            return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + r + "Width"])
        }
        function L(e, t, n, r) {
            return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], v(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
        }
        function T(e) {
            var t = e.body
              , n = e.documentElement
              , r = v(10) && getComputedStyle(n);
            return {
                height: L("Height", t, n, r),
                width: L("Width", t, n, r)
            }
        }
        var D = function(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
          , M = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , N = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
          , F = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ;
        function k(e) {
            return F({}, e, {
                right: e.left + e.width,
                bottom: e.top + e.height
            })
        }
        function C(e) {
            var t = {};
            try {
                if (v(10)) {
                    t = e.getBoundingClientRect();
                    var n = x(e, "top")
                      , r = x(e, "left");
                    t.top += n,
                    t.left += r,
                    t.bottom += n,
                    t.right += r
                } else
                    t = e.getBoundingClientRect()
            } catch (d) {}
            var o = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            }
              , i = "HTML" === e.nodeName ? T(e.ownerDocument) : {}
              , a = i.width || e.clientWidth || o.width
              , f = i.height || e.clientHeight || o.height
              , s = e.offsetWidth - a
              , p = e.offsetHeight - f;
            if (s || p) {
                var u = l(e);
                s -= O(u, "x"),
                p -= O(u, "y"),
                o.width -= s,
                o.height -= p
            }
            return k(o)
        }
        function H(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , r = v(10)
              , o = "HTML" === t.nodeName
              , i = C(e)
              , a = C(t)
              , f = d(e)
              , s = l(t)
              , p = parseFloat(s.borderTopWidth)
              , u = parseFloat(s.borderLeftWidth);
            n && o && (a.top = Math.max(a.top, 0),
            a.left = Math.max(a.left, 0));
            var c = k({
                top: i.top - a.top - p,
                left: i.left - a.left - u,
                width: i.width,
                height: i.height
            });
            if (c.marginTop = 0,
            c.marginLeft = 0,
            !r && o) {
                var h = parseFloat(s.marginTop)
                  , m = parseFloat(s.marginLeft);
                c.top -= p - h,
                c.bottom -= p - h,
                c.left -= u - m,
                c.right -= u - m,
                c.marginTop = h,
                c.marginLeft = m
            }
            return (r && !n ? t.contains(f) : t === f && "BODY" !== f.nodeName) && (c = E(c, t)),
            c
        }
        function A(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = e.ownerDocument.documentElement, r = H(e, n), o = Math.max(n.clientWidth, window.innerWidth || 0), i = Math.max(n.clientHeight, window.innerHeight || 0), a = t ? 0 : x(n), f = t ? 0 : x(n, "left"), s;
            return k({
                top: a - r.top + r.marginTop,
                left: f - r.left + r.marginLeft,
                width: o,
                height: i
            })
        }
        function B(e) {
            var t = e.nodeName;
            if ("BODY" === t || "HTML" === t)
                return !1;
            if ("fixed" === l(e, "position"))
                return !0;
            var n = u(e);
            return !!n && B(n)
        }
        function S(e) {
            if (!e || !e.parentElement || v())
                return document.documentElement;
            for (var t = e.parentElement; t && "none" === l(t, "transform"); )
                t = t.parentElement;
            return t || document.documentElement
        }
        function W(e, t, n, r) {
            var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
              , i = {
                top: 0,
                left: 0
            }
              , a = o ? S(e) : y(e, c(t));
            if ("viewport" === r)
                i = A(a, o);
            else {
                var f = void 0;
                "scrollParent" === r ? "BODY" === (f = d(u(t))).nodeName && (f = e.ownerDocument.documentElement) : f = "window" === r ? e.ownerDocument.documentElement : r;
                var s = H(f, a, o);
                if ("HTML" !== f.nodeName || B(a))
                    i = s;
                else {
                    var p = T(e.ownerDocument)
                      , l = p.height
                      , h = p.width;
                    i.top += s.top - s.marginTop,
                    i.bottom = l + s.top,
                    i.left += s.left - s.marginLeft,
                    i.right = h + s.left
                }
            }
            var m = "number" == typeof (n = n || 0);
            return i.left += m ? n : n.left || 0,
            i.top += m ? n : n.top || 0,
            i.right -= m ? n : n.right || 0,
            i.bottom -= m ? n : n.bottom || 0,
            i
        }
        function P(e) {
            var t, n;
            return e.width * e.height
        }
        function j(e, t, n, r, o) {
            var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf("auto"))
                return e;
            var a = W(n, r, i, o)
              , f = {
                top: {
                    width: a.width,
                    height: t.top - a.top
                },
                right: {
                    width: a.right - t.right,
                    height: a.height
                },
                bottom: {
                    width: a.width,
                    height: a.bottom - t.bottom
                },
                left: {
                    width: t.left - a.left,
                    height: a.height
                }
            }
              , s = Object.keys(f).map((function(e) {
                return F({
                    key: e
                }, f[e], {
                    area: P(f[e])
                })
            }
            )).sort((function(e, t) {
                return t.area - e.area
            }
            ))
              , p = s.filter((function(e) {
                var t = e.width
                  , r = e.height;
                return t >= n.clientWidth && r >= n.clientHeight
            }
            ))
              , l = p.length > 0 ? p[0].key : s[0].key
              , u = e.split("-")[1];
            return l + (u ? "-" + u : "")
        }
        function I(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, o;
            return H(n, r ? S(t) : y(t, c(n)), r)
        }
        function R(e) {
            var t, n = e.ownerDocument.defaultView.getComputedStyle(e), r = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0), o = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0), i;
            return {
                width: e.offsetWidth + o,
                height: e.offsetHeight + r
            }
        }
        function U(e) {
            var t = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };
            return e.replace(/left|right|bottom|top/g, (function(e) {
                return t[e]
            }
            ))
        }
        function Y(e, t, n) {
            n = n.split("-")[0];
            var r = R(e)
              , o = {
                width: r.width,
                height: r.height
            }
              , i = -1 !== ["right", "left"].indexOf(n)
              , a = i ? "top" : "left"
              , f = i ? "left" : "top"
              , s = i ? "height" : "width"
              , p = i ? "width" : "height";
            return o[a] = t[a] + t[s] / 2 - r[s] / 2,
            o[f] = n === f ? t[f] - r[p] : t[U(f)],
            o
        }
        function V(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0]
        }
        function q(e, t, n) {
            if (Array.prototype.findIndex)
                return e.findIndex((function(e) {
                    return e[t] === n
                }
                ));
            var r = V(e, (function(e) {
                return e[t] === n
            }
            ));
            return e.indexOf(r)
        }
        function _(e, t, n) {
            var r;
            return (void 0 === n ? e : e.slice(0, q(e, "name", n))).forEach((function(e) {
                e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var n = e.function || e.fn;
                e.enabled && p(n) && (t.offsets.popper = k(t.offsets.popper),
                t.offsets.reference = k(t.offsets.reference),
                t = n(t, e))
            }
            )),
            t
        }
        function z() {
            if (!this.state.isDestroyed) {
                var e = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {}
                };
                e.offsets.reference = I(this.state, this.popper, this.reference, this.options.positionFixed),
                e.placement = j(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                e.originalPlacement = e.placement,
                e.positionFixed = this.options.positionFixed,
                e.offsets.popper = Y(this.popper, e.offsets.reference, e.placement),
                e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
                e = _(this.modifiers, e),
                this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
                this.options.onCreate(e))
            }
        }
        function G(e, t) {
            return e.some((function(e) {
                var n = e.name, r;
                return e.enabled && n === t
            }
            ))
        }
        function X(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
                var o = t[r]
                  , i = o ? "" + o + n : e;
                if (void 0 !== document.body.style[i])
                    return i
            }
            return null
        }
        function J() {
            return this.state.isDestroyed = !0,
            G(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
            this.popper.style.position = "",
            this.popper.style.top = "",
            this.popper.style.left = "",
            this.popper.style.right = "",
            this.popper.style.bottom = "",
            this.popper.style.willChange = "",
            this.popper.style[X("transform")] = ""),
            this.disableEventListeners(),
            this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
            this
        }
        function K(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window
        }
        function Q(e, t, n, r) {
            var o = "BODY" === e.nodeName
              , i = o ? e.ownerDocument.defaultView : e;
            i.addEventListener(t, n, {
                passive: !0
            }),
            o || Q(d(i.parentNode), t, n, r),
            r.push(i)
        }
        function Z(e, t, n, r) {
            n.updateBound = r,
            K(e).addEventListener("resize", n.updateBound, {
                passive: !0
            });
            var o = d(e);
            return Q(o, "scroll", n.updateBound, n.scrollParents),
            n.scrollElement = o,
            n.eventsEnabled = !0,
            n
        }
        function $() {
            this.state.eventsEnabled || (this.state = Z(this.reference, this.options, this.state, this.scheduleUpdate))
        }
        function ee(e, t) {
            return K(e).removeEventListener("resize", t.updateBound),
            t.scrollParents.forEach((function(e) {
                e.removeEventListener("scroll", t.updateBound)
            }
            )),
            t.updateBound = null,
            t.scrollParents = [],
            t.scrollElement = null,
            t.eventsEnabled = !1,
            t
        }
        function te() {
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
            this.state = ee(this.reference, this.state))
        }
        function ne(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
        }
        function re(e, t) {
            Object.keys(t).forEach((function(n) {
                var r = "";
                -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && ne(t[n]) && (r = "px"),
                e.style[n] = t[n] + r
            }
            ))
        }
        function oe(e, t) {
            Object.keys(t).forEach((function(n) {
                var r;
                !1 !== t[n] ? e.setAttribute(n, t[n]) : e.removeAttribute(n)
            }
            ))
        }
        function ie(e) {
            return re(e.instance.popper, e.styles),
            oe(e.instance.popper, e.attributes),
            e.arrowElement && Object.keys(e.arrowStyles).length && re(e.arrowElement, e.arrowStyles),
            e
        }
        function ae(e, t, n, r, o) {
            var i = I(o, t, e, n.positionFixed)
              , a = j(n.placement, i, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
            return t.setAttribute("x-placement", a),
            re(t, {
                position: n.positionFixed ? "fixed" : "absolute"
            }),
            n
        }
        function fe(e, t) {
            var n = e.offsets, r = n.popper, o = n.reference, i = Math.round, a = Math.floor, f = function e(t) {
                return t
            }, s = i(o.width), p = i(r.width), l = -1 !== ["left", "right"].indexOf(e.placement), u = -1 !== e.placement.indexOf("-"), d, c, h = t ? l || u || s % 2 == p % 2 ? i : a : f, m = t ? i : f;
            return {
                left: h(s % 2 == 1 && p % 2 == 1 && !u && t ? r.left - 1 : r.left),
                top: m(r.top),
                bottom: m(r.bottom),
                right: h(r.right)
            }
        }
        var se = r && /Firefox/i.test(navigator.userAgent);
        function pe(e, t) {
            var n = t.x
              , r = t.y
              , o = e.offsets.popper
              , i = V(e.instance.modifiers, (function(e) {
                return "applyStyle" === e.name
            }
            )).gpuAcceleration;
            void 0 !== i && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
            var a = void 0 !== i ? i : t.gpuAcceleration
              , f = g(e.instance.popper)
              , s = C(f)
              , p = {
                position: o.position
            }
              , l = fe(e, window.devicePixelRatio < 2 || !se)
              , u = "bottom" === n ? "top" : "bottom"
              , d = "right" === r ? "left" : "right"
              , c = X("transform")
              , h = void 0
              , m = void 0;
            if (m = "bottom" === u ? "HTML" === f.nodeName ? -f.clientHeight + l.bottom : -s.height + l.bottom : l.top,
            h = "right" === d ? "HTML" === f.nodeName ? -f.clientWidth + l.right : -s.width + l.right : l.left,
            a && c)
                p[c] = "translate3d(" + h + "px, " + m + "px, 0)",
                p[u] = 0,
                p[d] = 0,
                p.willChange = "transform";
            else {
                var v = "bottom" === u ? -1 : 1
                  , b = "right" === d ? -1 : 1;
                p[u] = m * v,
                p[d] = h * b,
                p.willChange = u + ", " + d
            }
            var w = {
                "x-placement": e.placement
            };
            return e.attributes = F({}, w, e.attributes),
            e.styles = F({}, p, e.styles),
            e.arrowStyles = F({}, e.offsets.arrow, e.arrowStyles),
            e
        }
        function le(e, t, n) {
            var r = V(e, (function(e) {
                var n;
                return e.name === t
            }
            ))
              , o = !!r && e.some((function(e) {
                return e.name === n && e.enabled && e.order < r.order
            }
            ));
            if (!o) {
                var i = "`" + t + "`"
                  , a = "`" + n + "`";
                console.warn(a + " modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!")
            }
            return o
        }
        function ue(e, t) {
            var n;
            if (!le(e.instance.modifiers, "arrow", "keepTogether"))
                return e;
            var r = t.element;
            if ("string" == typeof r) {
                if (!(r = e.instance.popper.querySelector(r)))
                    return e
            } else if (!e.instance.popper.contains(r))
                return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                e;
            var o = e.placement.split("-")[0]
              , i = e.offsets
              , a = i.popper
              , f = i.reference
              , s = -1 !== ["left", "right"].indexOf(o)
              , p = s ? "height" : "width"
              , u = s ? "Top" : "Left"
              , d = u.toLowerCase()
              , c = s ? "left" : "top"
              , h = s ? "bottom" : "right"
              , m = R(r)[p];
            f[h] - m < a[d] && (e.offsets.popper[d] -= a[d] - (f[h] - m)),
            f[d] + m > a[h] && (e.offsets.popper[d] += f[d] + m - a[h]),
            e.offsets.popper = k(e.offsets.popper);
            var v = f[d] + f[p] / 2 - m / 2
              , g = l(e.instance.popper)
              , b = parseFloat(g["margin" + u])
              , w = parseFloat(g["border" + u + "Width"])
              , y = v - e.offsets.popper[d] - b - w;
            return y = Math.max(Math.min(a[p] - m, y), 0),
            e.arrowElement = r,
            e.offsets.arrow = (N(n = {}, d, Math.round(y)),
            N(n, c, ""),
            n),
            e
        }
        function de(e) {
            return "end" === e ? "start" : "start" === e ? "end" : e
        }
        var ce = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
          , he = ce.slice(3);
        function me(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = he.indexOf(e)
              , r = he.slice(n + 1).concat(he.slice(0, n));
            return t ? r.reverse() : r
        }
        var ve = "flip"
          , ge = "clockwise"
          , be = "counterclockwise";
        function we(e, t) {
            if (G(e.instance.modifiers, "inner"))
                return e;
            if (e.flipped && e.placement === e.originalPlacement)
                return e;
            var n = W(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed)
              , r = e.placement.split("-")[0]
              , o = U(r)
              , i = e.placement.split("-")[1] || ""
              , a = [];
            switch (t.behavior) {
            case ve:
                a = [r, o];
                break;
            case ge:
                a = me(r);
                break;
            case be:
                a = me(r, !0);
                break;
            default:
                a = t.behavior
            }
            return a.forEach((function(f, s) {
                if (r !== f || a.length === s + 1)
                    return e;
                r = e.placement.split("-")[0],
                o = U(r);
                var p = e.offsets.popper
                  , l = e.offsets.reference
                  , u = Math.floor
                  , d = "left" === r && u(p.right) > u(l.left) || "right" === r && u(p.left) < u(l.right) || "top" === r && u(p.bottom) > u(l.top) || "bottom" === r && u(p.top) < u(l.bottom)
                  , c = u(p.left) < u(n.left)
                  , h = u(p.right) > u(n.right)
                  , m = u(p.top) < u(n.top)
                  , v = u(p.bottom) > u(n.bottom)
                  , g = "left" === r && c || "right" === r && h || "top" === r && m || "bottom" === r && v
                  , b = -1 !== ["top", "bottom"].indexOf(r)
                  , w = !!t.flipVariations && (b && "start" === i && c || b && "end" === i && h || !b && "start" === i && m || !b && "end" === i && v)
                  , y = !!t.flipVariationsByContent && (b && "start" === i && h || b && "end" === i && c || !b && "start" === i && v || !b && "end" === i && m)
                  , x = w || y;
                (d || g || x) && (e.flipped = !0,
                (d || g) && (r = a[s + 1]),
                x && (i = de(i)),
                e.placement = r + (i ? "-" + i : ""),
                e.offsets.popper = F({}, e.offsets.popper, Y(e.instance.popper, e.offsets.reference, e.placement)),
                e = _(e.instance.modifiers, e, "flip"))
            }
            )),
            e
        }
        function ye(e) {
            var t = e.offsets
              , n = t.popper
              , r = t.reference
              , o = e.placement.split("-")[0]
              , i = Math.floor
              , a = -1 !== ["top", "bottom"].indexOf(o)
              , f = a ? "right" : "bottom"
              , s = a ? "left" : "top"
              , p = a ? "width" : "height";
            return n[f] < i(r[s]) && (e.offsets.popper[s] = i(r[s]) - n[p]),
            n[s] > i(r[f]) && (e.offsets.popper[s] = i(r[f])),
            e
        }
        function xe(e, t, n, r) {
            var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
              , i = +o[1]
              , a = o[2];
            if (!i)
                return e;
            if (0 === a.indexOf("%")) {
                var f = void 0, s;
                if ("%p" === a)
                    f = n;
                else
                    f = r;
                return k(f)[t] / 100 * i
            }
            if ("vh" === a || "vw" === a) {
                var p = void 0;
                return (p = "vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * i
            }
            return i
        }
        function Ee(e, t, n, r) {
            var o = [0, 0]
              , i = -1 !== ["right", "left"].indexOf(r)
              , a = e.split(/(\+|\-)/).map((function(e) {
                return e.trim()
            }
            ))
              , f = a.indexOf(V(a, (function(e) {
                return -1 !== e.search(/,|\s/)
            }
            )));
            a[f] && -1 === a[f].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var s = /\s*,\s*|\s+/
              , p = -1 !== f ? [a.slice(0, f).concat([a[f].split(s)[0]]), [a[f].split(s)[1]].concat(a.slice(f + 1))] : [a];
            return (p = p.map((function(e, r) {
                var o = (1 === r ? !i : i) ? "height" : "width"
                  , a = !1;
                return e.reduce((function(e, t) {
                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                    a = !0,
                    e) : a ? (e[e.length - 1] += t,
                    a = !1,
                    e) : e.concat(t)
                }
                ), []).map((function(e) {
                    return xe(e, o, t, n)
                }
                ))
            }
            ))).forEach((function(e, t) {
                e.forEach((function(n, r) {
                    ne(n) && (o[t] += n * ("-" === e[r - 1] ? -1 : 1))
                }
                ))
            }
            )),
            o
        }
        function Oe(e, t) {
            var n = t.offset
              , r = e.placement
              , o = e.offsets
              , i = o.popper
              , a = o.reference
              , f = r.split("-")[0]
              , s = void 0;
            return s = ne(+n) ? [+n, 0] : Ee(n, i, a, f),
            "left" === f ? (i.top += s[0],
            i.left -= s[1]) : "right" === f ? (i.top += s[0],
            i.left += s[1]) : "top" === f ? (i.left += s[0],
            i.top -= s[1]) : "bottom" === f && (i.left += s[0],
            i.top += s[1]),
            e.popper = i,
            e
        }
        function Le(e, t) {
            var n = t.boundariesElement || g(e.instance.popper);
            e.instance.reference === n && (n = g(n));
            var r = X("transform")
              , o = e.instance.popper.style
              , i = o.top
              , a = o.left
              , f = o[r];
            o.top = "",
            o.left = "",
            o[r] = "";
            var s = W(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
            o.top = i,
            o.left = a,
            o[r] = f,
            t.boundaries = s;
            var p = t.priority
              , l = e.offsets.popper
              , u = {
                primary: function e(n) {
                    var r = l[n];
                    return l[n] < s[n] && !t.escapeWithReference && (r = Math.max(l[n], s[n])),
                    N({}, n, r)
                },
                secondary: function e(n) {
                    var r = "right" === n ? "left" : "top"
                      , o = l[r];
                    return l[n] > s[n] && !t.escapeWithReference && (o = Math.min(l[r], s[n] - ("right" === n ? l.width : l.height))),
                    N({}, r, o)
                }
            };
            return p.forEach((function(e) {
                var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                l = F({}, l, u[t](e))
            }
            )),
            e.offsets.popper = l,
            e
        }
        function Te(e) {
            var t = e.placement
              , n = t.split("-")[0]
              , r = t.split("-")[1];
            if (r) {
                var o = e.offsets
                  , i = o.reference
                  , a = o.popper
                  , f = -1 !== ["bottom", "top"].indexOf(n)
                  , s = f ? "left" : "top"
                  , p = f ? "width" : "height"
                  , l = {
                    start: N({}, s, i[s]),
                    end: N({}, s, i[s] + i[p] - a[p])
                };
                e.offsets.popper = F({}, a, l[r])
            }
            return e
        }
        function De(e) {
            if (!le(e.instance.modifiers, "hide", "preventOverflow"))
                return e;
            var t = e.offsets.reference
              , n = V(e.instance.modifiers, (function(e) {
                return "preventOverflow" === e.name
            }
            )).boundaries;
            if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                if (!0 === e.hide)
                    return e;
                e.hide = !0,
                e.attributes["x-out-of-boundaries"] = ""
            } else {
                if (!1 === e.hide)
                    return e;
                e.hide = !1,
                e.attributes["x-out-of-boundaries"] = !1
            }
            return e
        }
        function Me(e) {
            var t = e.placement
              , n = t.split("-")[0]
              , r = e.offsets
              , o = r.popper
              , i = r.reference
              , a = -1 !== ["left", "right"].indexOf(n)
              , f = -1 === ["top", "left"].indexOf(n);
            return o[a ? "left" : "top"] = i[n] - (f ? o[a ? "width" : "height"] : 0),
            e.placement = U(t),
            e.offsets.popper = k(o),
            e
        }
        var Ne, Fe = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function e() {},
            onUpdate: function e() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: Te
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: Oe,
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: Le,
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: ye
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: ue,
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: we,
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: Me
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: De
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: pe,
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: ie,
                    onLoad: ae,
                    gpuAcceleration: void 0
                }
            }
        }, ke = function() {
            function e(t, n) {
                var r = this
                  , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                D(this, e),
                this.scheduleUpdate = function() {
                    return requestAnimationFrame(r.update)
                }
                ,
                this.update = s(this.update.bind(this)),
                this.options = F({}, e.Defaults, o),
                this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                },
                this.reference = t && t.jquery ? t[0] : t,
                this.popper = n && n.jquery ? n[0] : n,
                this.options.modifiers = {},
                Object.keys(F({}, e.Defaults.modifiers, o.modifiers)).forEach((function(t) {
                    r.options.modifiers[t] = F({}, e.Defaults.modifiers[t] || {}, o.modifiers ? o.modifiers[t] : {})
                }
                )),
                this.modifiers = Object.keys(this.options.modifiers).map((function(e) {
                    return F({
                        name: e
                    }, r.options.modifiers[e])
                }
                )).sort((function(e, t) {
                    return e.order - t.order
                }
                )),
                this.modifiers.forEach((function(e) {
                    e.enabled && p(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state)
                }
                )),
                this.update();
                var i = this.options.eventsEnabled;
                i && this.enableEventListeners(),
                this.state.eventsEnabled = i
            }
            return M(e, [{
                key: "update",
                value: function e() {
                    return z.call(this)
                }
            }, {
                key: "destroy",
                value: function e() {
                    return J.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function e() {
                    return $.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function e() {
                    return te.call(this)
                }
            }]),
            e
        }();
        ke.Utils = ("undefined" != typeof window ? window : n.g).PopperUtils,
        ke.placements = ce,
        ke.Defaults = Fe,
        t.A = ke
    }
}]);
