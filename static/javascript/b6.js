"use strict";
(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[95506], {
    789959: function(t, e, r) {
        var n = "undefined" != typeof window
          , o = n && navigator.connection
          , i = n && (!o || -1 === (o.effectiveType || "").indexOf("2g") && !o.saveData)
          , a = n && window.IntersectionObserver
          , u = {};
        function s(t) {
            if (n) {
                var e = document.createElement("link");
                return e.relList && e.relList.supports && e.relList.supports(t)
            }
        }
        function c(t) {
            return new Promise((function(e, r) {
                var n = document.createElement("link");
                n.rel = "prefetch",
                n.href = t,
                n.addEventListener("load", e),
                n.addEventListener("error", r),
                document.head.appendChild(n)
            }
            ))
        }
        function f(t) {
            return new Promise((function(e, r) {
                var n = new XMLHttpRequest;
                n.open("GET", t, n.withCredentials = !0),
                n.addEventListener("load", (function() {
                    200 === n.status ? e() : r()
                }
                )),
                n.send()
            }
            ))
        }
        function p(t) {
            return self.fetch ? fetch(t, {
                credentials: "include"
            }) : f(t)
        }
        var h = s("prefetch") ? c : f;
        function l(t, e) {
            if (i && !u[t])
                return (e ? p : h)(t).then((function() {
                    u[t] = !0
                }
                ))
        }
        function d(t, e) {
            void 0 === e && (e = {});
            var r = e.componentName;
            void 0 === r && (r = "RouterLink");
            var o = e.prefetch;
            void 0 === o && (o = !0);
            var u = a && new window.IntersectionObserver((function(t) {
                t.forEach((function(t) {
                    t.isIntersecting && t.target._linkPrefetch()
                }
                ))
            }
            )), s = n && window.requestIdleCallback || function(t, e) {
                var r = e.timeout;
                void 0 === r && (r = 1);
                var n = Date.now();
                return setTimeout((function() {
                    t({
                        didTimeout: !1,
                        timeRemaining: function t() {
                            return Math.max(0, 50 - (Date.now() - n))
                        }
                    })
                }
                ), r)
            }
            , c;
            var f = {
                name: r,
                extends: t.component("RouterLink") || t.component("router-link"),
                props: {
                    prefetch: {
                        type: Boolean,
                        default: o
                    },
                    prefetchFiles: {
                        type: Array
                    },
                    timeout: {
                        type: Number,
                        default: 2e3
                    }
                },
                mounted: function t() {
                    this.prefetch && u && i && s(this.observe, {
                        timeout: this.timeout
                    })
                },
                beforeDestroy: function t() {
                    this.unobserve()
                },
                methods: {
                    observe: function t() {
                        u.observe(this.$el),
                        this.$el._linkPrefetch = this.linkPrefetch,
                        this._linkObserved = !0
                    },
                    unobserve: function t() {
                        this._linkObserved && u.unobserve(this.$el)
                    },
                    getComponents: function t() {
                        return this.$router.getMatchedComponents(this.to).filter((function(t) {
                            return "function" == typeof t && void 0 === t.cid
                        }
                        ))
                    },
                    linkPrefetch: function t() {
                        var e, r = this.$router.resolve(this.to).route;
                        if (!r.meta.__prefetched) {
                            if (r.meta.__prefetched = !0,
                            !1 !== r.meta.prefetch)
                                for (var n, o = 0, i = this.getComponents(); o < i.length; o += 1) {
                                    var a = i[o];
                                    this.$emit("prefetch", this.to),
                                    a()
                                }
                            "function" == typeof r.meta.prefetch && r.meta.prefetch(r);
                            var u = (this.prefetchFiles || []).concat(r.meta.prefetchFiles || []);
                            if (u.length > 0)
                                for (var s = 0, c = u; s < c.length; s += 1) {
                                    var f;
                                    l(c[s])
                                }
                            this.unobserve()
                        }
                    }
                }
            };
            t.component(f.name, f)
        }
        e.Ay = d
    },
    440173: function(t, e, r) {
        /*!
  * vue-router v3.6.5
  * (c) 2022 Evan You
  * @license MIT
  */
        function n(t, e) {
            if (!t)
                throw new Error("[vue-router] " + e)
        }
        function o(t, e) {
            t || "undefined" != typeof console && console.warn("[vue-router] " + e)
        }
        function i(t, e) {
            for (var r in e)
                t[r] = e[r];
            return t
        }
        r.d(e, {
            Ay: function() {
                return Oe
            }
        });
        var a = /[!'()*]/g
          , u = function(t) {
            return "%" + t.charCodeAt(0).toString(16)
        }
          , s = /%2C/g
          , c = function(t) {
            return encodeURIComponent(t).replace(a, u).replace(s, ",")
        };
        function f(t) {
            try {
                return decodeURIComponent(t)
            } catch (e) {
                0
            }
            return t
        }
        function p(t, e, r) {
            void 0 === e && (e = {});
            var n = r || l, o;
            try {
                o = n(t || "")
            } catch (u) {
                o = {}
            }
            for (var i in e) {
                var a = e[i];
                o[i] = Array.isArray(a) ? a.map(h) : h(a)
            }
            return o
        }
        var h = function(t) {
            return null == t || "object" == typeof t ? t : String(t)
        };
        function l(t) {
            var e = {};
            return (t = t.trim().replace(/^(\?|#|&)/, "")) ? (t.split("&").forEach((function(t) {
                var r = t.replace(/\+/g, " ").split("=")
                  , n = f(r.shift())
                  , o = r.length > 0 ? f(r.join("=")) : null;
                void 0 === e[n] ? e[n] = o : Array.isArray(e[n]) ? e[n].push(o) : e[n] = [e[n], o]
            }
            )),
            e) : e
        }
        function d(t) {
            var e = t ? Object.keys(t).map((function(e) {
                var r = t[e];
                if (void 0 === r)
                    return "";
                if (null === r)
                    return c(e);
                if (Array.isArray(r)) {
                    var n = [];
                    return r.forEach((function(t) {
                        void 0 !== t && (null === t ? n.push(c(e)) : n.push(c(e) + "=" + c(t)))
                    }
                    )),
                    n.join("&")
                }
                return c(e) + "=" + c(r)
            }
            )).filter((function(t) {
                return t.length > 0
            }
            )).join("&") : null;
            return e ? "?" + e : ""
        }
        var v = /\/?$/;
        function y(t, e, r, n) {
            var o = n && n.options.stringifyQuery
              , i = e.query || {};
            try {
                i = m(i)
            } catch (u) {}
            var a = {
                name: e.name || t && t.name,
                meta: t && t.meta || {},
                path: e.path || "/",
                hash: e.hash || "",
                query: i,
                params: e.params || {},
                fullPath: b(e, o),
                matched: t ? w(t) : []
            };
            return r && (a.redirectedFrom = b(r, o)),
            Object.freeze(a)
        }
        function m(t) {
            if (Array.isArray(t))
                return t.map(m);
            if (t && "object" == typeof t) {
                var e = {};
                for (var r in t)
                    e[r] = m(t[r]);
                return e
            }
            return t
        }
        var g = y(null, {
            path: "/"
        });
        function w(t) {
            for (var e = []; t; )
                e.unshift(t),
                t = t.parent;
            return e
        }
        function b(t, e) {
            var r = t.path
              , n = t.query;
            void 0 === n && (n = {});
            var o = t.hash, i;
            return void 0 === o && (o = ""),
            (r || "/") + (e || d)(n) + o
        }
        function x(t, e, r) {
            return e === g ? t === e : !!e && (t.path && e.path ? t.path.replace(v, "") === e.path.replace(v, "") && (r || t.hash === e.hash && k(t.query, e.query)) : !(!t.name || !e.name) && (t.name === e.name && (r || t.hash === e.hash && k(t.query, e.query) && k(t.params, e.params))))
        }
        function k(t, e) {
            if (void 0 === t && (t = {}),
            void 0 === e && (e = {}),
            !t || !e)
                return t === e;
            var r = Object.keys(t).sort()
              , n = Object.keys(e).sort();
            return r.length === n.length && r.every((function(r, o) {
                var i = t[r], a;
                if (n[o] !== r)
                    return !1;
                var u = e[r];
                return null == i || null == u ? i === u : "object" == typeof i && "object" == typeof u ? k(i, u) : String(i) === String(u)
            }
            ))
        }
        function R(t, e) {
            return 0 === t.path.replace(v, "/").indexOf(e.path.replace(v, "/")) && (!e.hash || t.hash === e.hash) && E(t.query, e.query)
        }
        function E(t, e) {
            for (var r in e)
                if (!(r in t))
                    return !1;
            return !0
        }
        function C(t) {
            for (var e = 0; e < t.matched.length; e++) {
                var r = t.matched[e];
                for (var n in r.instances) {
                    var o = r.instances[n]
                      , i = r.enteredCbs[n];
                    if (o && i) {
                        delete r.enteredCbs[n];
                        for (var a = 0; a < i.length; a++)
                            o._isBeingDestroyed || i[a](o)
                    }
                }
            }
        }
        var _ = {
            name: "RouterView",
            functional: !0,
            props: {
                name: {
                    type: String,
                    default: "default"
                }
            },
            render: function t(e, r) {
                var n = r.props
                  , o = r.children
                  , a = r.parent
                  , u = r.data;
                u.routerView = !0;
                for (var s = a.$createElement, c = n.name, f = a.$route, p = a._routerViewCache || (a._routerViewCache = {}), h = 0, l = !1; a && a._routerRoot !== a; ) {
                    var d = a.$vnode ? a.$vnode.data : {};
                    d.routerView && h++,
                    d.keepAlive && a._directInactive && a._inactive && (l = !0),
                    a = a.$parent
                }
                if (u.routerViewDepth = h,
                l) {
                    var v = p[c]
                      , y = v && v.component;
                    return y ? (v.configProps && A(y, u, v.route, v.configProps),
                    s(y, u, o)) : s()
                }
                var m = f.matched[h]
                  , g = m && m.components[c];
                if (!m || !g)
                    return p[c] = null,
                    s();
                p[c] = {
                    component: g
                },
                u.registerRouteInstance = function(t, e) {
                    var r = m.instances[c];
                    (e && r !== t || !e && r === t) && (m.instances[c] = e)
                }
                ,
                (u.hook || (u.hook = {})).prepatch = function(t, e) {
                    m.instances[c] = e.componentInstance
                }
                ,
                u.hook.init = function(t) {
                    t.data.keepAlive && t.componentInstance && t.componentInstance !== m.instances[c] && (m.instances[c] = t.componentInstance),
                    C(f)
                }
                ;
                var w = m.props && m.props[c];
                return w && (i(p[c], {
                    route: f,
                    configProps: w
                }),
                A(g, u, f, w)),
                s(g, u, o)
            }
        };
        function A(t, e, r, n) {
            var o = e.props = O(r, n);
            if (o) {
                o = e.props = i({}, o);
                var a = e.attrs = e.attrs || {};
                for (var u in o)
                    t.props && u in t.props || (a[u] = o[u],
                    delete o[u])
            }
        }
        function O(t, e) {
            switch (typeof e) {
            case "undefined":
                return;
            case "object":
                return e;
            case "function":
                return e(t);
            case "boolean":
                return e ? t.params : void 0
            }
        }
        function L(t, e, r) {
            var n = t.charAt(0);
            if ("/" === n)
                return t;
            if ("?" === n || "#" === n)
                return e + t;
            var o = e.split("/");
            r && o[o.length - 1] || o.pop();
            for (var i = t.replace(/^\//, "").split("/"), a = 0; a < i.length; a++) {
                var u = i[a];
                ".." === u ? o.pop() : "." !== u && o.push(u)
            }
            return "" !== o[0] && o.unshift(""),
            o.join("/")
        }
        function P(t) {
            var e = ""
              , r = ""
              , n = t.indexOf("#");
            n >= 0 && (e = t.slice(n),
            t = t.slice(0, n));
            var o = t.indexOf("?");
            return o >= 0 && (r = t.slice(o + 1),
            t = t.slice(0, o)),
            {
                path: t,
                query: r,
                hash: e
            }
        }
        function j(t) {
            return t.replace(/\/(?:\s*\/)+/g, "/")
        }
        var T = Array.isArray || function(t) {
            return "[object Array]" == Object.prototype.toString.call(t)
        }
          , $ = W
          , S = B
          , q = F
          , I = H
          , M = G
          , U = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");
        function B(t, e) {
            for (var r = [], n = 0, o = 0, i = "", a = e && e.delimiter || "/", u; null != (u = U.exec(t)); ) {
                var s = u[0]
                  , c = u[1]
                  , f = u.index;
                if (i += t.slice(o, f),
                o = f + s.length,
                c)
                    i += c[1];
                else {
                    var p = t[o]
                      , h = u[2]
                      , l = u[3]
                      , d = u[4]
                      , v = u[5]
                      , y = u[6]
                      , m = u[7];
                    i && (r.push(i),
                    i = "");
                    var g = null != h && null != p && p !== h
                      , w = "+" === y || "*" === y
                      , b = "?" === y || "*" === y
                      , x = u[2] || a
                      , k = d || v;
                    r.push({
                        name: l || n++,
                        prefix: h || "",
                        delimiter: x,
                        optional: b,
                        repeat: w,
                        partial: g,
                        asterisk: !!m,
                        pattern: k ? z(k) : m ? ".*" : "[^" + D(x) + "]+?"
                    })
                }
            }
            return o < t.length && (i += t.substr(o)),
            i && r.push(i),
            r
        }
        function F(t, e) {
            return H(B(t, e), e)
        }
        function N(t) {
            return encodeURI(t).replace(/[\/?#]/g, (function(t) {
                return "%" + t.charCodeAt(0).toString(16).toUpperCase()
            }
            ))
        }
        function V(t) {
            return encodeURI(t).replace(/[?#]/g, (function(t) {
                return "%" + t.charCodeAt(0).toString(16).toUpperCase()
            }
            ))
        }
        function H(t, e) {
            for (var r = new Array(t.length), n = 0; n < t.length; n++)
                "object" == typeof t[n] && (r[n] = new RegExp("^(?:" + t[n].pattern + ")$",J(e)));
            return function(e, n) {
                for (var o = "", i = e || {}, a, u = (n || {}).pretty ? N : encodeURIComponent, s = 0; s < t.length; s++) {
                    var c = t[s];
                    if ("string" != typeof c) {
                        var f = i[c.name], p;
                        if (null == f) {
                            if (c.optional) {
                                c.partial && (o += c.prefix);
                                continue
                            }
                            throw new TypeError('Expected "' + c.name + '" to be defined')
                        }
                        if (T(f)) {
                            if (!c.repeat)
                                throw new TypeError('Expected "' + c.name + '" to not repeat, but received `' + JSON.stringify(f) + "`");
                            if (0 === f.length) {
                                if (c.optional)
                                    continue;
                                throw new TypeError('Expected "' + c.name + '" to not be empty')
                            }
                            for (var h = 0; h < f.length; h++) {
                                if (p = u(f[h]),
                                !r[s].test(p))
                                    throw new TypeError('Expected all "' + c.name + '" to match "' + c.pattern + '", but received `' + JSON.stringify(p) + "`");
                                o += (0 === h ? c.prefix : c.delimiter) + p
                            }
                        } else {
                            if (p = c.asterisk ? V(f) : u(f),
                            !r[s].test(p))
                                throw new TypeError('Expected "' + c.name + '" to match "' + c.pattern + '", but received "' + p + '"');
                            o += c.prefix + p
                        }
                    } else
                        o += c
                }
                return o
            }
        }
        function D(t) {
            return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
        }
        function z(t) {
            return t.replace(/([=!:$\/()])/g, "\\$1")
        }
        function K(t, e) {
            return t.keys = e,
            t
        }
        function J(t) {
            return t && t.sensitive ? "" : "i"
        }
        function X(t, e) {
            var r = t.source.match(/\((?!\?)/g);
            if (r)
                for (var n = 0; n < r.length; n++)
                    e.push({
                        name: n,
                        prefix: null,
                        delimiter: null,
                        optional: !1,
                        repeat: !1,
                        partial: !1,
                        asterisk: !1,
                        pattern: null
                    });
            return K(t, e)
        }
        function Q(t, e, r) {
            for (var n = [], o = 0; o < t.length; o++)
                n.push(W(t[o], e, r).source);
            var i;
            return K(new RegExp("(?:" + n.join("|") + ")",J(r)), e)
        }
        function Y(t, e, r) {
            return G(B(t, r), e, r)
        }
        function G(t, e, r) {
            T(e) || (r = e || r,
            e = []);
            for (var n = (r = r || {}).strict, o = !1 !== r.end, i = "", a = 0; a < t.length; a++) {
                var u = t[a];
                if ("string" == typeof u)
                    i += D(u);
                else {
                    var s = D(u.prefix)
                      , c = "(?:" + u.pattern + ")";
                    e.push(u),
                    u.repeat && (c += "(?:" + s + c + ")*"),
                    i += c = u.optional ? u.partial ? s + "(" + c + ")?" : "(?:" + s + "(" + c + "))?" : s + "(" + c + ")"
                }
            }
            var f = D(r.delimiter || "/")
              , p = i.slice(-f.length) === f;
            return n || (i = (p ? i.slice(0, -f.length) : i) + "(?:" + f + "(?=$))?"),
            i += o ? "$" : n && p ? "" : "(?=" + f + "|$)",
            K(new RegExp("^" + i,J(r)), e)
        }
        function W(t, e, r) {
            return T(e) || (r = e || r,
            e = []),
            r = r || {},
            t instanceof RegExp ? X(t, e) : T(t) ? Q(t, e, r) : Y(t, e, r)
        }
        $.parse = S,
        $.compile = q,
        $.tokensToFunction = I,
        $.tokensToRegExp = M;
        var Z = Object.create(null);
        function tt(t, e, r) {
            e = e || {};
            try {
                var n = Z[t] || (Z[t] = $.compile(t));
                return "string" == typeof e.pathMatch && (e[0] = e.pathMatch),
                n(e, {
                    pretty: !0
                })
            } catch (o) {
                return ""
            } finally {
                delete e[0]
            }
        }
        function et(t, e, r, n) {
            var o = "string" == typeof t ? {
                path: t
            } : t;
            if (o._normalized)
                return o;
            if (o.name) {
                var a = (o = i({}, t)).params;
                return a && "object" == typeof a && (o.params = i({}, a)),
                o
            }
            if (!o.path && o.params && e) {
                (o = i({}, o))._normalized = !0;
                var u = i(i({}, e.params), o.params);
                if (e.name)
                    o.name = e.name,
                    o.params = u;
                else if (e.matched.length) {
                    var s = e.matched[e.matched.length - 1].path;
                    o.path = tt(s, u, "path " + e.path)
                } else
                    0;
                return o
            }
            var c = P(o.path || "")
              , f = e && e.path || "/"
              , h = c.path ? L(c.path, f, r || o.append) : f
              , l = p(c.query, o.query, n && n.options.parseQuery)
              , d = o.hash || c.hash;
            return d && "#" !== d.charAt(0) && (d = "#" + d),
            {
                _normalized: !0,
                path: h,
                query: l,
                hash: d
            }
        }
        var rt, nt, ot = function() {}, it, at, ut, st = {
            name: "RouterLink",
            props: {
                to: {
                    type: [String, Object],
                    required: !0
                },
                tag: {
                    type: String,
                    default: "a"
                },
                custom: Boolean,
                exact: Boolean,
                exactPath: Boolean,
                append: Boolean,
                replace: Boolean,
                activeClass: String,
                exactActiveClass: String,
                ariaCurrentValue: {
                    type: String,
                    default: "page"
                },
                event: {
                    type: [String, Array],
                    default: "click"
                }
            },
            render: function t(e) {
                var r = this
                  , n = this.$router
                  , o = this.$route
                  , a = n.resolve(this.to, o, this.append)
                  , u = a.location
                  , s = a.route
                  , c = a.href
                  , f = {}
                  , p = n.options.linkActiveClass
                  , h = n.options.linkExactActiveClass
                  , l = null == p ? "router-link-active" : p
                  , d = null == h ? "router-link-exact-active" : h
                  , v = null == this.activeClass ? l : this.activeClass
                  , m = null == this.exactActiveClass ? d : this.exactActiveClass
                  , g = s.redirectedFrom ? y(null, et(s.redirectedFrom), null, n) : s;
                f[m] = x(o, g, this.exactPath),
                f[v] = this.exact || this.exactPath ? f[m] : R(o, g);
                var w = f[m] ? this.ariaCurrentValue : null
                  , b = function(t) {
                    ft(t) && (r.replace ? n.replace(u, ot) : n.push(u, ot))
                }
                  , k = {
                    click: ft
                };
                Array.isArray(this.event) ? this.event.forEach((function(t) {
                    k[t] = b
                }
                )) : k[this.event] = b;
                var E = {
                    class: f
                }
                  , C = !this.$scopedSlots.$hasNormal && this.$scopedSlots.default && this.$scopedSlots.default({
                    href: c,
                    route: s,
                    navigate: b,
                    isActive: f[v],
                    isExactActive: f[m]
                });
                if (C) {
                    if (1 === C.length)
                        return C[0];
                    if (C.length > 1 || !C.length)
                        return 0 === C.length ? e() : e("span", {}, C)
                }
                if ("a" === this.tag)
                    E.on = k,
                    E.attrs = {
                        href: c,
                        "aria-current": w
                    };
                else {
                    var _ = pt(this.$slots.default);
                    if (_) {
                        _.isStatic = !1;
                        var A = _.data = i({}, _.data);
                        for (var O in A.on = A.on || {},
                        A.on) {
                            var L = A.on[O];
                            O in k && (A.on[O] = Array.isArray(L) ? L : [L])
                        }
                        for (var P in k)
                            P in A.on ? A.on[P].push(k[P]) : A.on[P] = b;
                        var j = _.data.attrs = i({}, _.data.attrs);
                        j.href = c,
                        j["aria-current"] = w
                    } else
                        E.on = k
                }
                return e(this.tag, E, this.$slots.default)
            }
        }, ct;
        function ft(t) {
            if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey || t.defaultPrevented || void 0 !== t.button && 0 !== t.button)) {
                if (t.currentTarget && t.currentTarget.getAttribute) {
                    var e = t.currentTarget.getAttribute("target");
                    if (/\b_blank\b/i.test(e))
                        return
                }
                return t.preventDefault && t.preventDefault(),
                !0
            }
        }
        function pt(t) {
            if (t)
                for (var e, r = 0; r < t.length; r++) {
                    if ("a" === (e = t[r]).tag)
                        return e;
                    if (e.children && (e = pt(e.children)))
                        return e
                }
        }
        function ht(t) {
            if (!ht.installed || ct !== t) {
                ht.installed = !0,
                ct = t;
                var e = function(t) {
                    return void 0 !== t
                }
                  , r = function(t, r) {
                    var n = t.$options._parentVnode;
                    e(n) && e(n = n.data) && e(n = n.registerRouteInstance) && n(t, r)
                };
                t.mixin({
                    beforeCreate: function n() {
                        e(this.$options.router) ? (this._routerRoot = this,
                        this._router = this.$options.router,
                        this._router.init(this),
                        t.util.defineReactive(this, "_route", this._router.history.current)) : this._routerRoot = this.$parent && this.$parent._routerRoot || this,
                        r(this, this)
                    },
                    destroyed: function t() {
                        r(this)
                    }
                }),
                Object.defineProperty(t.prototype, "$router", {
                    get: function t() {
                        return this._routerRoot._router
                    }
                }),
                Object.defineProperty(t.prototype, "$route", {
                    get: function t() {
                        return this._routerRoot._route
                    }
                }),
                t.component("RouterView", _),
                t.component("RouterLink", st);
                var n = t.config.optionMergeStrategies;
                n.beforeRouteEnter = n.beforeRouteLeave = n.beforeRouteUpdate = n.created
            }
        }
        var lt = "undefined" != typeof window;
        function dt(t, e, r, n, o) {
            var i = e || [], a = r || Object.create(null), u = n || Object.create(null), s, c;
            t.forEach((function(t) {
                vt(i, a, u, t, o)
            }
            ));
            for (var f = 0, p = i.length; f < p; f++)
                "*" === i[f] && (i.push(i.splice(f, 1)[0]),
                p--,
                f--);
            return {
                pathList: i,
                pathMap: a,
                nameMap: u
            }
        }
        function vt(t, e, r, n, o, i) {
            var a = n.path
              , u = n.name;
            var s = n.pathToRegexpOptions || {}
              , c = mt(a, o, s.strict);
            "boolean" == typeof n.caseSensitive && (s.sensitive = n.caseSensitive);
            var f = {
                path: c,
                regex: yt(c, s),
                components: n.components || {
                    default: n.component
                },
                alias: n.alias ? "string" == typeof n.alias ? [n.alias] : n.alias : [],
                instances: {},
                enteredCbs: {},
                name: u,
                parent: o,
                matchAs: i,
                redirect: n.redirect,
                beforeEnter: n.beforeEnter,
                meta: n.meta || {},
                props: null == n.props ? {} : n.components ? n.props : {
                    default: n.props
                }
            };
            if (n.children && n.children.forEach((function(n) {
                var o = i ? j(i + "/" + n.path) : void 0;
                vt(t, e, r, n, f, o)
            }
            )),
            e[f.path] || (t.push(f.path),
            e[f.path] = f),
            void 0 !== n.alias)
                for (var p = Array.isArray(n.alias) ? n.alias : [n.alias], h = 0; h < p.length; ++h) {
                    var l;
                    0;
                    var d = {
                        path: p[h],
                        children: n.children
                    };
                    vt(t, e, r, d, o, f.path || "/")
                }
            u && (r[u] || (r[u] = f))
        }
        function yt(t, e) {
            var r, n;
            return $(t, [], e)
        }
        function mt(t, e, r) {
            return r || (t = t.replace(/\/$/, "")),
            "/" === t[0] || null == e ? t : j(e.path + "/" + t)
        }
        function gt(t, e) {
            var r = dt(t)
              , n = r.pathList
              , o = r.pathMap
              , i = r.nameMap;
            function a(t) {
                dt(t, n, o, i)
            }
            function u(t, e) {
                var r = "object" != typeof t ? i[t] : void 0;
                dt([e || t], n, o, i, r),
                r && r.alias.length && dt(r.alias.map((function(t) {
                    return {
                        path: t,
                        children: [e]
                    }
                }
                )), n, o, i, r)
            }
            function s() {
                return n.map((function(t) {
                    return o[t]
                }
                ))
            }
            function c(t, r, a) {
                var u = et(t, r, !1, e)
                  , s = u.name;
                if (s) {
                    var c = i[s];
                    if (!c)
                        return h(null, u);
                    var f = c.regex.keys.filter((function(t) {
                        return !t.optional
                    }
                    )).map((function(t) {
                        return t.name
                    }
                    ));
                    if ("object" != typeof u.params && (u.params = {}),
                    r && "object" == typeof r.params)
                        for (var p in r.params)
                            !(p in u.params) && f.indexOf(p) > -1 && (u.params[p] = r.params[p]);
                    return u.path = tt(c.path, u.params, 'named route "' + s + '"'),
                    h(c, u, a)
                }
                if (u.path) {
                    u.params = {};
                    for (var l = 0; l < n.length; l++) {
                        var d = n[l]
                          , v = o[d];
                        if (wt(v.regex, u.path, u.params))
                            return h(v, u, a)
                    }
                }
                return h(null, u)
            }
            function f(t, r) {
                var n = t.redirect
                  , o = "function" == typeof n ? n(y(t, r, null, e)) : n;
                if ("string" == typeof o && (o = {
                    path: o
                }),
                !o || "object" != typeof o)
                    return h(null, r);
                var a = o
                  , u = a.name
                  , s = a.path
                  , f = r.query
                  , p = r.hash
                  , l = r.params;
                if (f = a.hasOwnProperty("query") ? a.query : f,
                p = a.hasOwnProperty("hash") ? a.hash : p,
                l = a.hasOwnProperty("params") ? a.params : l,
                u) {
                    var d = i[u];
                    return c({
                        _normalized: !0,
                        name: u,
                        query: f,
                        hash: p,
                        params: l
                    }, void 0, r)
                }
                if (s) {
                    var v = bt(s, t), m;
                    return c({
                        _normalized: !0,
                        path: tt(v, l, 'redirect route with path "' + v + '"'),
                        query: f,
                        hash: p
                    }, void 0, r)
                }
                return h(null, r)
            }
            function p(t, e, r) {
                var n, o = c({
                    _normalized: !0,
                    path: tt(r, e.params, 'aliased route with path "' + r + '"')
                });
                if (o) {
                    var i = o.matched
                      , a = i[i.length - 1];
                    return e.params = o.params,
                    h(a, e)
                }
                return h(null, e)
            }
            function h(t, r, n) {
                return t && t.redirect ? f(t, n || r) : t && t.matchAs ? p(t, r, t.matchAs) : y(t, r, n, e)
            }
            return {
                match: c,
                addRoute: u,
                getRoutes: s,
                addRoutes: a
            }
        }
        function wt(t, e, r) {
            var n = e.match(t);
            if (!n)
                return !1;
            if (!r)
                return !0;
            for (var o = 1, i = n.length; o < i; ++o) {
                var a = t.keys[o - 1];
                a && (r[a.name || "pathMatch"] = "string" == typeof n[o] ? f(n[o]) : n[o])
            }
            return !0
        }
        function bt(t, e) {
            return L(t, e.parent ? e.parent.path : "/", !0)
        }
        var xt = lt && window.performance && window.performance.now ? window.performance : Date;
        function kt() {
            return xt.now().toFixed(3)
        }
        var Rt = kt();
        function Et() {
            return Rt
        }
        function Ct(t) {
            return Rt = t
        }
        var _t = Object.create(null);
        function At() {
            "scrollRestoration"in window.history && (window.history.scrollRestoration = "manual");
            var t = window.location.protocol + "//" + window.location.host
              , e = window.location.href.replace(t, "")
              , r = i({}, window.history.state);
            return r.key = Et(),
            window.history.replaceState(r, "", e),
            window.addEventListener("popstate", Pt),
            function() {
                window.removeEventListener("popstate", Pt)
            }
        }
        function Ot(t, e, r, n) {
            if (t.app) {
                var o = t.options.scrollBehavior;
                o && t.app.$nextTick((function() {
                    var i = jt()
                      , a = o.call(t, e, r, n ? i : null);
                    a && ("function" == typeof a.then ? a.then((function(t) {
                        Ut(t, i)
                    }
                    )).catch((function(t) {
                        0
                    }
                    )) : Ut(a, i))
                }
                ))
            }
        }
        function Lt() {
            var t = Et();
            t && (_t[t] = {
                x: window.pageXOffset,
                y: window.pageYOffset
            })
        }
        function Pt(t) {
            Lt(),
            t.state && t.state.key && Ct(t.state.key)
        }
        function jt() {
            var t = Et();
            if (t)
                return _t[t]
        }
        function Tt(t, e) {
            var r, n = document.documentElement.getBoundingClientRect(), o = t.getBoundingClientRect();
            return {
                x: o.left - n.left - e.x,
                y: o.top - n.top - e.y
            }
        }
        function $t(t) {
            return It(t.x) || It(t.y)
        }
        function St(t) {
            return {
                x: It(t.x) ? t.x : window.pageXOffset,
                y: It(t.y) ? t.y : window.pageYOffset
            }
        }
        function qt(t) {
            return {
                x: It(t.x) ? t.x : 0,
                y: It(t.y) ? t.y : 0
            }
        }
        function It(t) {
            return "number" == typeof t
        }
        var Mt = /^#\d/;
        function Ut(t, e) {
            var r = "object" == typeof t;
            if (r && "string" == typeof t.selector) {
                var n = Mt.test(t.selector) ? document.getElementById(t.selector.slice(1)) : document.querySelector(t.selector);
                if (n) {
                    var o = t.offset && "object" == typeof t.offset ? t.offset : {};
                    e = Tt(n, o = qt(o))
                } else
                    $t(t) && (e = St(t))
            } else
                r && $t(t) && (e = St(t));
            e && ("scrollBehavior"in document.documentElement.style ? window.scrollTo({
                left: e.x,
                top: e.y,
                behavior: t.behavior
            }) : window.scrollTo(e.x, e.y))
        }
        var Bt = lt && ((-1 === (Ft = window.navigator.userAgent).indexOf("Android 2.") && -1 === Ft.indexOf("Android 4.0") || -1 === Ft.indexOf("Mobile Safari") || -1 !== Ft.indexOf("Chrome") || -1 !== Ft.indexOf("Windows Phone")) && window.history && "function" == typeof window.history.pushState), Ft;
        function Nt(t, e) {
            Lt();
            var r = window.history;
            try {
                if (e) {
                    var n = i({}, r.state);
                    n.key = Et(),
                    r.replaceState(n, "", t)
                } else
                    r.pushState({
                        key: Ct(kt())
                    }, "", t)
            } catch (o) {
                window.location[e ? "replace" : "assign"](t)
            }
        }
        function Vt(t) {
            Nt(t, !0)
        }
        var Ht = {
            redirected: 2,
            aborted: 4,
            cancelled: 8,
            duplicated: 16
        };
        function Dt(t, e) {
            return Xt(t, e, Ht.redirected, 'Redirected when going from "' + t.fullPath + '" to "' + Yt(e) + '" via a navigation guard.')
        }
        function zt(t, e) {
            var r = Xt(t, e, Ht.duplicated, 'Avoided redundant navigation to current location: "' + t.fullPath + '".');
            return r.name = "NavigationDuplicated",
            r
        }
        function Kt(t, e) {
            return Xt(t, e, Ht.cancelled, 'Navigation cancelled from "' + t.fullPath + '" to "' + e.fullPath + '" with a new navigation.')
        }
        function Jt(t, e) {
            return Xt(t, e, Ht.aborted, 'Navigation aborted from "' + t.fullPath + '" to "' + e.fullPath + '" via a navigation guard.')
        }
        function Xt(t, e, r, n) {
            var o = new Error(n);
            return o._isRouter = !0,
            o.from = t,
            o.to = e,
            o.type = r,
            o
        }
        var Qt = ["params", "query", "hash"];
        function Yt(t) {
            if ("string" == typeof t)
                return t;
            if ("path"in t)
                return t.path;
            var e = {};
            return Qt.forEach((function(r) {
                r in t && (e[r] = t[r])
            }
            )),
            JSON.stringify(e, null, 2)
        }
        function Gt(t) {
            return Object.prototype.toString.call(t).indexOf("Error") > -1
        }
        function Wt(t, e) {
            return Gt(t) && t._isRouter && (null == e || t.type === e)
        }
        function Zt(t, e, r) {
            var n = function(o) {
                o >= t.length ? r() : t[o] ? e(t[o], (function() {
                    n(o + 1)
                }
                )) : n(o + 1)
            };
            n(0)
        }
        function te(t) {
            return function(e, r, n) {
                var o = !1
                  , i = 0
                  , a = null;
                ee(t, (function(t, e, r, u) {
                    if ("function" == typeof t && void 0 === t.cid) {
                        o = !0,
                        i++;
                        var s = ie((function(e) {
                            oe(e) && (e = e.default),
                            t.resolved = "function" == typeof e ? e : ct.extend(e),
                            r.components[u] = e,
                            --i <= 0 && n()
                        }
                        )), c = ie((function(t) {
                            var e = "Failed to resolve async component " + u + ": " + t;
                            a || (a = Gt(t) ? t : new Error(e),
                            n(a))
                        }
                        )), f;
                        try {
                            f = t(s, c)
                        } catch (h) {
                            c(h)
                        }
                        if (f)
                            if ("function" == typeof f.then)
                                f.then(s, c);
                            else {
                                var p = f.component;
                                p && "function" == typeof p.then && p.then(s, c)
                            }
                    }
                }
                )),
                o || n()
            }
        }
        function ee(t, e) {
            return re(t.map((function(t) {
                return Object.keys(t.components).map((function(r) {
                    return e(t.components[r], t.instances[r], t, r)
                }
                ))
            }
            )))
        }
        function re(t) {
            return Array.prototype.concat.apply([], t)
        }
        var ne = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
        function oe(t) {
            return t.__esModule || ne && "Module" === t[Symbol.toStringTag]
        }
        function ie(t) {
            var e = !1;
            return function() {
                for (var r = [], n = arguments.length; n--; )
                    r[n] = arguments[n];
                if (!e)
                    return e = !0,
                    t.apply(this, r)
            }
        }
        var ae = function t(e, r) {
            this.router = e,
            this.base = ue(r),
            this.current = g,
            this.pending = null,
            this.ready = !1,
            this.readyCbs = [],
            this.readyErrorCbs = [],
            this.errorCbs = [],
            this.listeners = []
        };
        function ue(t) {
            if (!t)
                if (lt) {
                    var e = document.querySelector("base");
                    t = (t = e && e.getAttribute("href") || "/").replace(/^https?:\/\/[^\/]+/, "")
                } else
                    t = "/";
            return "/" !== t.charAt(0) && (t = "/" + t),
            t.replace(/\/$/, "")
        }
        function se(t, e) {
            var r, n = Math.max(t.length, e.length);
            for (r = 0; r < n && t[r] === e[r]; r++)
                ;
            return {
                updated: e.slice(0, r),
                activated: e.slice(r),
                deactivated: t.slice(r)
            }
        }
        function ce(t, e, r, n) {
            var o = ee(t, (function(t, n, o, i) {
                var a = fe(t, e);
                if (a)
                    return Array.isArray(a) ? a.map((function(t) {
                        return r(t, n, o, i)
                    }
                    )) : r(a, n, o, i)
            }
            ));
            return re(n ? o.reverse() : o)
        }
        function fe(t, e) {
            return "function" != typeof t && (t = ct.extend(t)),
            t.options[e]
        }
        function pe(t) {
            return ce(t, "beforeRouteLeave", le, !0)
        }
        function he(t) {
            return ce(t, "beforeRouteUpdate", le)
        }
        function le(t, e) {
            if (e)
                return function r() {
                    return t.apply(e, arguments)
                }
        }
        function de(t) {
            return ce(t, "beforeRouteEnter", (function(t, e, r, n) {
                return ve(t, r, n)
            }
            ))
        }
        function ve(t, e, r) {
            return function n(o, i, a) {
                return t(o, i, (function(t) {
                    "function" == typeof t && (e.enteredCbs[r] || (e.enteredCbs[r] = []),
                    e.enteredCbs[r].push(t)),
                    a(t)
                }
                ))
            }
        }
        ae.prototype.listen = function t(e) {
            this.cb = e
        }
        ,
        ae.prototype.onReady = function t(e, r) {
            this.ready ? e() : (this.readyCbs.push(e),
            r && this.readyErrorCbs.push(r))
        }
        ,
        ae.prototype.onError = function t(e) {
            this.errorCbs.push(e)
        }
        ,
        ae.prototype.transitionTo = function t(e, r, n) {
            var o = this, i;
            try {
                i = this.router.match(e, this.current)
            } catch (u) {
                throw this.errorCbs.forEach((function(t) {
                    t(u)
                }
                )),
                u
            }
            var a = this.current;
            this.confirmTransition(i, (function() {
                o.updateRoute(i),
                r && r(i),
                o.ensureURL(),
                o.router.afterHooks.forEach((function(t) {
                    t && t(i, a)
                }
                )),
                o.ready || (o.ready = !0,
                o.readyCbs.forEach((function(t) {
                    t(i)
                }
                )))
            }
            ), (function(t) {
                n && n(t),
                t && !o.ready && (Wt(t, Ht.redirected) && a === g || (o.ready = !0,
                o.readyErrorCbs.forEach((function(e) {
                    e(t)
                }
                ))))
            }
            ))
        }
        ,
        ae.prototype.confirmTransition = function t(e, r, n) {
            var o = this
              , i = this.current;
            this.pending = e;
            var a = function(t) {
                !Wt(t) && Gt(t) && (o.errorCbs.length ? o.errorCbs.forEach((function(e) {
                    e(t)
                }
                )) : console.error(t)),
                n && n(t)
            }
              , u = e.matched.length - 1
              , s = i.matched.length - 1;
            if (x(e, i) && u === s && e.matched[u] === i.matched[s])
                return this.ensureURL(),
                e.hash && Ot(this.router, i, e, !1),
                a(zt(i, e));
            var c = se(this.current.matched, e.matched)
              , f = c.updated
              , p = c.deactivated
              , h = c.activated
              , l = [].concat(pe(p), this.router.beforeHooks, he(f), h.map((function(t) {
                return t.beforeEnter
            }
            )), te(h))
              , d = function(t, r) {
                if (o.pending !== e)
                    return a(Kt(i, e));
                try {
                    t(e, i, (function(t) {
                        !1 === t ? (o.ensureURL(!0),
                        a(Jt(i, e))) : Gt(t) ? (o.ensureURL(!0),
                        a(t)) : "string" == typeof t || "object" == typeof t && ("string" == typeof t.path || "string" == typeof t.name) ? (a(Dt(i, e)),
                        "object" == typeof t && t.replace ? o.replace(t) : o.push(t)) : r(t)
                    }
                    ))
                } catch (n) {
                    a(n)
                }
            };
            Zt(l, d, (function() {
                var t, n;
                Zt(de(h).concat(o.router.resolveHooks), d, (function() {
                    if (o.pending !== e)
                        return a(Kt(i, e));
                    o.pending = null,
                    r(e),
                    o.router.app && o.router.app.$nextTick((function() {
                        C(e)
                    }
                    ))
                }
                ))
            }
            ))
        }
        ,
        ae.prototype.updateRoute = function t(e) {
            this.current = e,
            this.cb && this.cb(e)
        }
        ,
        ae.prototype.setupListeners = function t() {}
        ,
        ae.prototype.teardown = function t() {
            this.listeners.forEach((function(t) {
                t()
            }
            )),
            this.listeners = [],
            this.current = g,
            this.pending = null
        }
        ;
        var ye = function(t) {
            function e(e, r) {
                t.call(this, e, r),
                this._startLocation = me(this.base)
            }
            return t && (e.__proto__ = t),
            e.prototype = Object.create(t && t.prototype),
            e.prototype.constructor = e,
            e.prototype.setupListeners = function t() {
                var e = this;
                if (!(this.listeners.length > 0)) {
                    var r = this.router
                      , n = r.options.scrollBehavior
                      , o = Bt && n;
                    o && this.listeners.push(At());
                    var i = function() {
                        var t = e.current
                          , n = me(e.base);
                        e.current === g && n === e._startLocation || e.transitionTo(n, (function(e) {
                            o && Ot(r, e, t, !0)
                        }
                        ))
                    };
                    window.addEventListener("popstate", i),
                    this.listeners.push((function() {
                        window.removeEventListener("popstate", i)
                    }
                    ))
                }
            }
            ,
            e.prototype.go = function t(e) {
                window.history.go(e)
            }
            ,
            e.prototype.push = function t(e, r, n) {
                var o = this, i, a = this.current;
                this.transitionTo(e, (function(t) {
                    Nt(j(o.base + t.fullPath)),
                    Ot(o.router, t, a, !1),
                    r && r(t)
                }
                ), n)
            }
            ,
            e.prototype.replace = function t(e, r, n) {
                var o = this, i, a = this.current;
                this.transitionTo(e, (function(t) {
                    Vt(j(o.base + t.fullPath)),
                    Ot(o.router, t, a, !1),
                    r && r(t)
                }
                ), n)
            }
            ,
            e.prototype.ensureURL = function t(e) {
                if (me(this.base) !== this.current.fullPath) {
                    var r = j(this.base + this.current.fullPath);
                    e ? Nt(r) : Vt(r)
                }
            }
            ,
            e.prototype.getCurrentLocation = function t() {
                return me(this.base)
            }
            ,
            e
        }(ae);
        function me(t) {
            var e = window.location.pathname
              , r = e.toLowerCase()
              , n = t.toLowerCase();
            return !t || r !== n && 0 !== r.indexOf(j(n + "/")) || (e = e.slice(t.length)),
            (e || "/") + window.location.search + window.location.hash
        }
        var ge = function(t) {
            function e(e, r, n) {
                t.call(this, e, r),
                n && we(this.base) || be()
            }
            return t && (e.__proto__ = t),
            e.prototype = Object.create(t && t.prototype),
            e.prototype.constructor = e,
            e.prototype.setupListeners = function t() {
                var e = this;
                if (!(this.listeners.length > 0)) {
                    var r, n = this.router.options.scrollBehavior, o = Bt && n;
                    o && this.listeners.push(At());
                    var i = function() {
                        var t = e.current;
                        be() && e.transitionTo(xe(), (function(r) {
                            o && Ot(e.router, r, t, !0),
                            Bt || Ee(r.fullPath)
                        }
                        ))
                    }
                      , a = Bt ? "popstate" : "hashchange";
                    window.addEventListener(a, i),
                    this.listeners.push((function() {
                        window.removeEventListener(a, i)
                    }
                    ))
                }
            }
            ,
            e.prototype.push = function t(e, r, n) {
                var o = this, i, a = this.current;
                this.transitionTo(e, (function(t) {
                    Re(t.fullPath),
                    Ot(o.router, t, a, !1),
                    r && r(t)
                }
                ), n)
            }
            ,
            e.prototype.replace = function t(e, r, n) {
                var o = this, i, a = this.current;
                this.transitionTo(e, (function(t) {
                    Ee(t.fullPath),
                    Ot(o.router, t, a, !1),
                    r && r(t)
                }
                ), n)
            }
            ,
            e.prototype.go = function t(e) {
                window.history.go(e)
            }
            ,
            e.prototype.ensureURL = function t(e) {
                var r = this.current.fullPath;
                xe() !== r && (e ? Re(r) : Ee(r))
            }
            ,
            e.prototype.getCurrentLocation = function t() {
                return xe()
            }
            ,
            e
        }(ae);
        function we(t) {
            var e = me(t);
            if (!/^\/#/.test(e))
                return window.location.replace(j(t + "/#" + e)),
                !0
        }
        function be() {
            var t = xe();
            return "/" === t.charAt(0) || (Ee("/" + t),
            !1)
        }
        function xe() {
            var t = window.location.href
              , e = t.indexOf("#");
            return e < 0 ? "" : t = t.slice(e + 1)
        }
        function ke(t) {
            var e = window.location.href, r = e.indexOf("#"), n;
            return (r >= 0 ? e.slice(0, r) : e) + "#" + t
        }
        function Re(t) {
            Bt ? Nt(ke(t)) : window.location.hash = t
        }
        function Ee(t) {
            Bt ? Vt(ke(t)) : window.location.replace(ke(t))
        }
        var Ce = function(t) {
            function e(e, r) {
                t.call(this, e, r),
                this.stack = [],
                this.index = -1
            }
            return t && (e.__proto__ = t),
            e.prototype = Object.create(t && t.prototype),
            e.prototype.constructor = e,
            e.prototype.push = function t(e, r, n) {
                var o = this;
                this.transitionTo(e, (function(t) {
                    o.stack = o.stack.slice(0, o.index + 1).concat(t),
                    o.index++,
                    r && r(t)
                }
                ), n)
            }
            ,
            e.prototype.replace = function t(e, r, n) {
                var o = this;
                this.transitionTo(e, (function(t) {
                    o.stack = o.stack.slice(0, o.index).concat(t),
                    r && r(t)
                }
                ), n)
            }
            ,
            e.prototype.go = function t(e) {
                var r = this
                  , n = this.index + e;
                if (!(n < 0 || n >= this.stack.length)) {
                    var o = this.stack[n];
                    this.confirmTransition(o, (function() {
                        var t = r.current;
                        r.index = n,
                        r.updateRoute(o),
                        r.router.afterHooks.forEach((function(e) {
                            e && e(o, t)
                        }
                        ))
                    }
                    ), (function(t) {
                        Wt(t, Ht.duplicated) && (r.index = n)
                    }
                    ))
                }
            }
            ,
            e.prototype.getCurrentLocation = function t() {
                var e = this.stack[this.stack.length - 1];
                return e ? e.fullPath : "/"
            }
            ,
            e.prototype.ensureURL = function t() {}
            ,
            e
        }(ae)
          , _e = function t(e) {
            void 0 === e && (e = {}),
            this.app = null,
            this.apps = [],
            this.options = e,
            this.beforeHooks = [],
            this.resolveHooks = [],
            this.afterHooks = [],
            this.matcher = gt(e.routes || [], this);
            var r = e.mode || "hash";
            switch (this.fallback = "history" === r && !Bt && !1 !== e.fallback,
            this.fallback && (r = "hash"),
            lt || (r = "abstract"),
            this.mode = r,
            r) {
            case "history":
                this.history = new ye(this,e.base);
                break;
            case "hash":
                this.history = new ge(this,e.base,this.fallback);
                break;
            case "abstract":
                this.history = new Ce(this,e.base)
            }
        }
          , Ae = {
            currentRoute: {
                configurable: !0
            }
        };
        _e.prototype.match = function t(e, r, n) {
            return this.matcher.match(e, r, n)
        }
        ,
        Ae.currentRoute.get = function() {
            return this.history && this.history.current
        }
        ,
        _e.prototype.init = function t(e) {
            var r = this;
            if (this.apps.push(e),
            e.$once("hook:destroyed", (function() {
                var t = r.apps.indexOf(e);
                t > -1 && r.apps.splice(t, 1),
                r.app === e && (r.app = r.apps[0] || null),
                r.app || r.history.teardown()
            }
            )),
            !this.app) {
                this.app = e;
                var n = this.history;
                if (n instanceof ye || n instanceof ge) {
                    var o = function(t) {
                        var e = n.current, o = r.options.scrollBehavior, i;
                        Bt && o && "fullPath"in t && Ot(r, t, e, !1)
                    }
                      , i = function(t) {
                        n.setupListeners(),
                        o(t)
                    };
                    n.transitionTo(n.getCurrentLocation(), i, i)
                }
                n.listen((function(t) {
                    r.apps.forEach((function(e) {
                        e._route = t
                    }
                    ))
                }
                ))
            }
        }
        ,
        _e.prototype.beforeEach = function t(e) {
            return Le(this.beforeHooks, e)
        }
        ,
        _e.prototype.beforeResolve = function t(e) {
            return Le(this.resolveHooks, e)
        }
        ,
        _e.prototype.afterEach = function t(e) {
            return Le(this.afterHooks, e)
        }
        ,
        _e.prototype.onReady = function t(e, r) {
            this.history.onReady(e, r)
        }
        ,
        _e.prototype.onError = function t(e) {
            this.history.onError(e)
        }
        ,
        _e.prototype.push = function t(e, r, n) {
            var o = this;
            if (!r && !n && "undefined" != typeof Promise)
                return new Promise((function(t, r) {
                    o.history.push(e, t, r)
                }
                ));
            this.history.push(e, r, n)
        }
        ,
        _e.prototype.replace = function t(e, r, n) {
            var o = this;
            if (!r && !n && "undefined" != typeof Promise)
                return new Promise((function(t, r) {
                    o.history.replace(e, t, r)
                }
                ));
            this.history.replace(e, r, n)
        }
        ,
        _e.prototype.go = function t(e) {
            this.history.go(e)
        }
        ,
        _e.prototype.back = function t() {
            this.go(-1)
        }
        ,
        _e.prototype.forward = function t() {
            this.go(1)
        }
        ,
        _e.prototype.getMatchedComponents = function t(e) {
            var r = e ? e.matched ? e : this.resolve(e).route : this.currentRoute;
            return r ? [].concat.apply([], r.matched.map((function(t) {
                return Object.keys(t.components).map((function(e) {
                    return t.components[e]
                }
                ))
            }
            ))) : []
        }
        ,
        _e.prototype.resolve = function t(e, r, n) {
            var o = et(e, r = r || this.history.current, n, this), i = this.match(o, r), a = i.redirectedFrom || i.fullPath, u, s;
            return {
                location: o,
                route: i,
                href: Pe(this.history.base, a, this.mode),
                normalizedTo: o,
                resolved: i
            }
        }
        ,
        _e.prototype.getRoutes = function t() {
            return this.matcher.getRoutes()
        }
        ,
        _e.prototype.addRoute = function t(e, r) {
            this.matcher.addRoute(e, r),
            this.history.current !== g && this.history.transitionTo(this.history.getCurrentLocation())
        }
        ,
        _e.prototype.addRoutes = function t(e) {
            this.matcher.addRoutes(e),
            this.history.current !== g && this.history.transitionTo(this.history.getCurrentLocation())
        }
        ,
        Object.defineProperties(_e.prototype, Ae);
        var Oe = _e;
        function Le(t, e) {
            return t.push(e),
            function() {
                var r = t.indexOf(e);
                r > -1 && t.splice(r, 1)
            }
        }
        function Pe(t, e, r) {
            var n = "hash" === r ? "#" + e : e;
            return t ? j(t + "/" + n) : n
        }
        _e.install = ht,
        _e.version = "3.6.5",
        _e.isNavigationFailure = Wt,
        _e.NavigationFailureType = Ht,
        _e.START_LOCATION = g,
        lt && window.Vue && window.Vue.use(_e);
        var je = "3.6.5"
    }
}]);
