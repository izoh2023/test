(self.webpackChunkof_vue = self.webpackChunkof_vue || []).push([[60745], {
    927324: function(t, e, n) {
        !function() {
            Number.isInteger = Number.isInteger || function(t) {
                return "number" == typeof t && isFinite(t) && Math.floor(t) === t
            }
            ;
            var e = n(70831)
              , r = {
                install: function(t) {
                    t.prototype.$cookie = this,
                    t.cookie = this
                },
                set: function(t, n, r) {
                    var a = r;
                    return Number.isInteger(r) && (a = {
                        expires: r
                    }),
                    e.set(t, n, a)
                },
                get: function(t) {
                    return e.get(t)
                },
                delete: function(t, e) {
                    var n = {
                        expires: -1
                    };
                    void 0 !== e && (n = Object.assign(e, n)),
                    this.set(t, "", n)
                }
            };
            t.exports = r
        }()
    },
    458722: function(t, e, n) {
        "use strict";
        n.d(e, {
            L: function() {
                return s
            }
        });
        var r = function() {
            return (r = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var a in e = arguments[n])
                        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                return t
            }
            ).apply(this, arguments)
        }
          , a = {
            kebab: /-(\w)/g,
            styleProp: /:(.*)/,
            styleList: /;(?![^(]*\))/g
        };
        function i(t, e) {
            return e ? e.toUpperCase() : ""
        }
        function o(t) {
            for (var e, n = {}, r = 0, o = t.split(a.styleList); r < o.length; r++) {
                var s = o[r].split(a.styleProp)
                  , l = s[0]
                  , c = s[1];
                (l = l.trim()) && ("string" == typeof c && (c = c.trim()),
                n[(e = l,
                e.replace(a.kebab, i))] = c)
            }
            return n
        }
        function s() {
            for (var t, e, n = {}, a = arguments.length; a--; )
                for (var i = 0, s = Object.keys(arguments[a]); i < s.length; i++)
                    switch (t = s[i]) {
                    case "class":
                    case "style":
                    case "directives":
                        if (Array.isArray(n[t]) || (n[t] = []),
                        "style" === t) {
                            var l = void 0;
                            l = Array.isArray(arguments[a].style) ? arguments[a].style : [arguments[a].style];
                            for (var c = 0; c < l.length; c++) {
                                var u = l[c];
                                "string" == typeof u && (l[c] = o(u))
                            }
                            arguments[a].style = l
                        }
                        n[t] = n[t].concat(arguments[a][t]);
                        break;
                    case "staticClass":
                        if (!arguments[a][t])
                            break;
                        void 0 === n[t] && (n[t] = ""),
                        n[t] && (n[t] += " "),
                        n[t] += arguments[a][t].trim();
                        break;
                    case "on":
                    case "nativeOn":
                        n[t] || (n[t] = {});
                        for (var f = 0, h = Object.keys(arguments[a][t] || {}); f < h.length; f++)
                            e = h[f],
                            n[t][e] ? n[t][e] = [].concat(n[t][e], arguments[a][t][e]) : n[t][e] = arguments[a][t][e];
                        break;
                    case "attrs":
                    case "props":
                    case "domProps":
                    case "scopedSlots":
                    case "staticStyle":
                    case "hook":
                    case "transition":
                        n[t] || (n[t] = {}),
                        n[t] = r({}, arguments[a][t], n[t]);
                        break;
                    default:
                        n[t] || (n[t] = arguments[a][t])
                    }
            return n
        }
    },
    764765: function(t, e) {
        "use strict";
        /*!
 * vue-i18n v8.28.2 
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
        var n = ["compactDisplay", "currency", "currencyDisplay", "currencySign", "localeMatcher", "notation", "numberingSystem", "signDisplay", "style", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits"]
          , r = ["dateStyle", "timeStyle", "calendar", "localeMatcher", "hour12", "hourCycle", "timeZone", "formatMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"];
        function a(t, e) {
            "undefined" != typeof console && (console.warn("[vue-i18n] " + t),
            e && console.warn(e.stack))
        }
        function i(t, e) {
            "undefined" != typeof console && (console.error("[vue-i18n] " + t),
            e && console.error(e.stack))
        }
        var o = Array.isArray;
        function s(t) {
            return null !== t && "object" == typeof t
        }
        function l(t) {
            return "boolean" == typeof t
        }
        function c(t) {
            return "string" == typeof t
        }
        var u = Object.prototype.toString
          , f = "[object Object]";
        function h(t) {
            return u.call(t) === f
        }
        function p(t) {
            return null == t
        }
        function _(t) {
            return "function" == typeof t
        }
        function m() {
            for (var t = [], e = arguments.length; e--; )
                t[e] = arguments[e];
            var n = null
              , r = null;
            return 1 === t.length ? s(t[0]) || o(t[0]) ? r = t[0] : "string" == typeof t[0] && (n = t[0]) : 2 === t.length && ("string" == typeof t[0] && (n = t[0]),
            (s(t[1]) || o(t[1])) && (r = t[1])),
            {
                locale: n,
                params: r
            }
        }
        function g(t) {
            return JSON.parse(JSON.stringify(t))
        }
        function v(t, e) {
            if (t.delete(e))
                return t
        }
        function b(t) {
            var e = [];
            return t.forEach((function(t) {
                return e.push(t)
            }
            )),
            e
        }
        function d(t, e) {
            return !!~t.indexOf(e)
        }
        var y = Object.prototype.hasOwnProperty;
        function k(t, e) {
            return y.call(t, e)
        }
        function F(t) {
            for (var e = arguments, n = Object(t), r = 1; r < arguments.length; r++) {
                var a = e[r];
                if (null != a) {
                    var i = void 0;
                    for (i in a)
                        k(a, i) && (s(a[i]) ? n[i] = F(n[i], a[i]) : n[i] = a[i])
                }
            }
            return n
        }
        function w(t, e) {
            if (t === e)
                return !0;
            var n = s(t)
              , r = s(e);
            if (!n || !r)
                return !n && !r && String(t) === String(e);
            try {
                var a = o(t)
                  , i = o(e);
                if (a && i)
                    return t.length === e.length && t.every((function(t, n) {
                        return w(t, e[n])
                    }
                    ));
                if (a || i)
                    return !1;
                var l = Object.keys(t)
                  , c = Object.keys(e);
                return l.length === c.length && l.every((function(n) {
                    return w(t[n], e[n])
                }
                ))
            } catch (u) {
                return !1
            }
        }
        function $(t) {
            return t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
        }
        function M(t) {
            return null != t && Object.keys(t).forEach((function(e) {
                "string" == typeof t[e] && (t[e] = $(t[e]))
            }
            )),
            t
        }
        function C(t) {
            t.prototype.hasOwnProperty("$i18n") || Object.defineProperty(t.prototype, "$i18n", {
                get: function t() {
                    return this._i18n
                }
            }),
            t.prototype.$t = function(t) {
                for (var e = [], n = arguments.length - 1; n-- > 0; )
                    e[n] = arguments[n + 1];
                var r = this.$i18n;
                return r._t.apply(r, [t, r.locale, r._getMessages(), this].concat(e))
            }
            ,
            t.prototype.$tc = function(t, e) {
                for (var n = [], r = arguments.length - 2; r-- > 0; )
                    n[r] = arguments[r + 2];
                var a = this.$i18n;
                return a._tc.apply(a, [t, a.locale, a._getMessages(), this, e].concat(n))
            }
            ,
            t.prototype.$te = function(t, e) {
                var n = this.$i18n;
                return n._te(t, n.locale, n._getMessages(), e)
            }
            ,
            t.prototype.$d = function(t) {
                for (var e, n = [], r = arguments.length - 1; r-- > 0; )
                    n[r] = arguments[r + 1];
                return (e = this.$i18n).d.apply(e, [t].concat(n))
            }
            ,
            t.prototype.$n = function(t) {
                for (var e, n = [], r = arguments.length - 1; r-- > 0; )
                    n[r] = arguments[r + 1];
                return (e = this.$i18n).n.apply(e, [t].concat(n))
            }
        }
        function T(t) {
            function e() {
                this !== this.$root && this.$options.__INTLIFY_META__ && this.$el && this.$el.setAttribute("data-intlify", this.$options.__INTLIFY_META__)
            }
            return void 0 === t && (t = !1),
            t ? {
                mounted: e
            } : {
                beforeCreate: function t() {
                    var e = this.$options;
                    if (e.i18n = e.i18n || (e.__i18nBridge || e.__i18n ? {} : null),
                    e.i18n)
                        if (e.i18n instanceof $t) {
                            if (e.__i18nBridge || e.__i18n)
                                try {
                                    var n = e.i18n && e.i18n.messages ? e.i18n.messages : {}, r;
                                    (e.__i18nBridge || e.__i18n).forEach((function(t) {
                                        n = F(n, JSON.parse(t))
                                    }
                                    )),
                                    Object.keys(n).forEach((function(t) {
                                        e.i18n.mergeLocaleMessage(t, n[t])
                                    }
                                    ))
                                } catch (c) {
                                    0
                                }
                            this._i18n = e.i18n,
                            this._i18nWatcher = this._i18n.watchI18nData()
                        } else if (h(e.i18n)) {
                            var a = this.$root && this.$root.$i18n && this.$root.$i18n instanceof $t ? this.$root.$i18n : null;
                            if (a && (e.i18n.root = this.$root,
                            e.i18n.formatter = a.formatter,
                            e.i18n.fallbackLocale = a.fallbackLocale,
                            e.i18n.formatFallbackMessages = a.formatFallbackMessages,
                            e.i18n.silentTranslationWarn = a.silentTranslationWarn,
                            e.i18n.silentFallbackWarn = a.silentFallbackWarn,
                            e.i18n.pluralizationRules = a.pluralizationRules,
                            e.i18n.preserveDirectiveContent = a.preserveDirectiveContent),
                            e.__i18nBridge || e.__i18n)
                                try {
                                    var i = e.i18n && e.i18n.messages ? e.i18n.messages : {}, o;
                                    (e.__i18nBridge || e.__i18n).forEach((function(t) {
                                        i = F(i, JSON.parse(t))
                                    }
                                    )),
                                    e.i18n.messages = i
                                } catch (c) {
                                    0
                                }
                            var s, l = e.i18n.sharedMessages;
                            l && h(l) && (e.i18n.messages = F(e.i18n.messages, l)),
                            this._i18n = new $t(e.i18n),
                            this._i18nWatcher = this._i18n.watchI18nData(),
                            (void 0 === e.i18n.sync || e.i18n.sync) && (this._localeWatcher = this.$i18n.watchLocale()),
                            a && a.onComponentInstanceCreated(this._i18n)
                        } else
                            0;
                    else
                        this.$root && this.$root.$i18n && this.$root.$i18n instanceof $t ? this._i18n = this.$root.$i18n : e.parent && e.parent.$i18n && e.parent.$i18n instanceof $t && (this._i18n = e.parent.$i18n)
                },
                beforeMount: function t() {
                    var e = this.$options;
                    e.i18n = e.i18n || (e.__i18nBridge || e.__i18n ? {} : null),
                    e.i18n ? (e.i18n instanceof $t || h(e.i18n)) && (this._i18n.subscribeDataChanging(this),
                    this._subscribing = !0) : (this.$root && this.$root.$i18n && this.$root.$i18n instanceof $t || e.parent && e.parent.$i18n && e.parent.$i18n instanceof $t) && (this._i18n.subscribeDataChanging(this),
                    this._subscribing = !0)
                },
                mounted: e,
                beforeDestroy: function t() {
                    if (this._i18n) {
                        var e = this;
                        this.$nextTick((function() {
                            e._subscribing && (e._i18n.unsubscribeDataChanging(e),
                            delete e._subscribing),
                            e._i18nWatcher && (e._i18nWatcher(),
                            e._i18n.destroyVM(),
                            delete e._i18nWatcher),
                            e._localeWatcher && (e._localeWatcher(),
                            delete e._localeWatcher)
                        }
                        ))
                    }
                }
            }
        }
        var I = {
            name: "i18n",
            functional: !0,
            props: {
                tag: {
                    type: [String, Boolean, Object],
                    default: "span"
                },
                path: {
                    type: String,
                    required: !0
                },
                locale: {
                    type: String
                },
                places: {
                    type: [Array, Object]
                }
            },
            render: function t(e, n) {
                var r = n.data
                  , a = n.parent
                  , i = n.props
                  , o = n.slots
                  , s = a.$i18n;
                if (s) {
                    var l = i.path
                      , c = i.locale
                      , u = i.places
                      , f = o()
                      , h = s.i(l, c, L(f) || u ? O(f.default, u) : f)
                      , p = i.tag && !0 !== i.tag || !1 === i.tag ? i.tag : "span";
                    return p ? e(p, r, h) : h
                }
            }
        };
        function L(t) {
            var e;
            for (e in t)
                if ("default" !== e)
                    return !1;
            return Boolean(e)
        }
        function O(t, e) {
            var n = e ? D(e) : {};
            if (!t)
                return n;
            var r = (t = t.filter((function(t) {
                return t.tag || "" !== t.text.trim()
            }
            ))).every(N);
            return t.reduce(r ? j : x, n)
        }
        function D(t) {
            return Array.isArray(t) ? t.reduce(x, {}) : Object.assign({}, t)
        }
        function j(t, e) {
            return e.data && e.data.attrs && e.data.attrs.place && (t[e.data.attrs.place] = e),
            t
        }
        function x(t, e, n) {
            return t[n] = e,
            t
        }
        function N(t) {
            return Boolean(t.data && t.data.attrs && t.data.attrs.place)
        }
        var W = {
            name: "i18n-n",
            functional: !0,
            props: {
                tag: {
                    type: [String, Boolean, Object],
                    default: "span"
                },
                value: {
                    type: Number,
                    required: !0
                },
                format: {
                    type: [String, Object]
                },
                locale: {
                    type: String
                }
            },
            render: function t(e, r) {
                var a = r.props
                  , i = r.parent
                  , o = r.data
                  , l = i.$i18n;
                if (!l)
                    return null;
                var u = null
                  , f = null;
                c(a.format) ? u = a.format : s(a.format) && (a.format.key && (u = a.format.key),
                f = Object.keys(a.format).reduce((function(t, e) {
                    var r;
                    return d(n, e) ? Object.assign({}, t, ((r = {})[e] = a.format[e],
                    r)) : t
                }
                ), null));
                var h = a.locale || l.locale
                  , p = l._ntp(a.value, h, u, f)
                  , _ = p.map((function(t, e) {
                    var n, r = o.scopedSlots && o.scopedSlots[t.type];
                    return r ? r(((n = {})[t.type] = t.value,
                    n.index = e,
                    n.parts = p,
                    n)) : t.value
                }
                ))
                  , m = a.tag && !0 !== a.tag || !1 === a.tag ? a.tag : "span";
                return m ? e(m, {
                    attrs: o.attrs,
                    class: o.class,
                    staticClass: o.staticClass
                }, _) : _
            }
        }, S;
        function E(t, e, n) {
            P(t, n) && V(t, e, n)
        }
        function R(t, e, n, r) {
            if (P(t, n)) {
                var a = n.context.$i18n;
                H(t, n) && w(e.value, e.oldValue) && w(t._localeMessage, a.getLocaleMessage(a.locale)) || V(t, e, n)
            }
        }
        function A(t, e, n, r) {
            var i;
            if (n.context) {
                var o = n.context.$i18n || {};
                e.modifiers.preserve || o.preserveDirectiveContent || (t.textContent = ""),
                t._vt = void 0,
                delete t._vt,
                t._locale = void 0,
                delete t._locale,
                t._localeMessage = void 0,
                delete t._localeMessage
            } else
                a("Vue instance does not exists in VNode context")
        }
        function P(t, e) {
            var n = e.context;
            return n ? !!n.$i18n || (a("VueI18n instance does not exists in Vue instance"),
            !1) : (a("Vue instance does not exists in VNode context"),
            !1)
        }
        function H(t, e) {
            var n = e.context;
            return t._locale === n.$i18n.locale
        }
        function V(t, e, n) {
            var r, i, o, s = B(e.value), l = s.path, c = s.locale, u = s.args, f = s.choice;
            if (l || c || u)
                if (l) {
                    var h = n.context;
                    t._vt = t.textContent = null != f ? (r = h.$i18n).tc.apply(r, [l, f].concat(U(c, u))) : (i = h.$i18n).t.apply(i, [l].concat(U(c, u))),
                    t._locale = h.$i18n.locale,
                    t._localeMessage = h.$i18n.getLocaleMessage(h.$i18n.locale)
                } else
                    a("`path` is required in v-t directive");
            else
                a("value type not supported")
        }
        function B(t) {
            var e, n, r, a;
            return c(t) ? e = t : h(t) && (e = t.path,
            n = t.locale,
            r = t.args,
            a = t.choice),
            {
                path: e,
                locale: n,
                args: r,
                choice: a
            }
        }
        function U(t, e) {
            var n = [];
            return t && n.push(t),
            e && (Array.isArray(e) || h(e)) && n.push(e),
            n
        }
        function z(t, e) {
            void 0 === e && (e = {
                bridge: !1
            }),
            z.installed = !0;
            var n = (S = t).version && Number(S.version.split(".")[0]) || -1, r;
            C(S),
            S.mixin(T(e.bridge)),
            S.directive("t", {
                bind: E,
                update: R,
                unbind: A
            }),
            S.component(I.name, I),
            S.component(W.name, W),
            S.config.optionMergeStrategies.i18n = function(t, e) {
                return void 0 === e ? t : e
            }
        }
        var G = function t() {
            this._caches = Object.create(null)
        };
        G.prototype.interpolate = function t(e, n) {
            if (!n)
                return [e];
            var r = this._caches[e];
            return r || (r = Z(e),
            this._caches[e] = r),
            Y(r, n)
        }
        ;
        var q = /^(?:\d)+/
          , J = /^(?:\w)+/;
        function Z(t) {
            for (var e = [], n = 0, r = ""; n < t.length; ) {
                var a = t[n++];
                if ("{" === a) {
                    r && e.push({
                        type: "text",
                        value: r
                    }),
                    r = "";
                    var i = "";
                    for (a = t[n++]; void 0 !== a && "}" !== a; )
                        i += a,
                        a = t[n++];
                    var o = "}" === a
                      , s = q.test(i) ? "list" : o && J.test(i) ? "named" : "unknown";
                    e.push({
                        value: i,
                        type: s
                    })
                } else
                    "%" === a ? "{" !== t[n] && (r += a) : r += a
            }
            return r && e.push({
                type: "text",
                value: r
            }),
            e
        }
        function Y(t, e) {
            var n = []
              , r = 0
              , a = Array.isArray(e) ? "list" : s(e) ? "named" : "unknown";
            if ("unknown" === a)
                return n;
            for (; r < t.length; ) {
                var i = t[r];
                switch (i.type) {
                case "text":
                    n.push(i.value);
                    break;
                case "list":
                    n.push(e[parseInt(i.value, 10)]);
                    break;
                case "named":
                    "named" === a && n.push(e[i.value])
                }
                r++
            }
            return n
        }
        var X = 0
          , K = 1
          , Q = 2
          , tt = 3
          , et = 0
          , nt = 1
          , rt = 2
          , at = 3
          , it = 4
          , ot = 5
          , st = 6
          , lt = 7
          , ct = 8
          , ut = [];
        ut[0] = {
            ws: [0],
            ident: [3, 0],
            "[": [4],
            eof: [7]
        },
        ut[1] = {
            ws: [1],
            ".": [2],
            "[": [4],
            eof: [7]
        },
        ut[2] = {
            ws: [2],
            ident: [3, 0],
            0: [3, 0],
            number: [3, 0]
        },
        ut[3] = {
            ident: [3, 0],
            0: [3, 0],
            number: [3, 0],
            ws: [1, 1],
            ".": [2, 1],
            "[": [4, 1],
            eof: [7, 1]
        },
        ut[4] = {
            "'": [5, 0],
            '"': [6, 0],
            "[": [4, 2],
            "]": [1, 3],
            eof: 8,
            else: [4, 0]
        },
        ut[5] = {
            "'": [4, 0],
            eof: 8,
            else: [5, 0]
        },
        ut[6] = {
            '"': [4, 0],
            eof: 8,
            else: [6, 0]
        };
        var ft = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
        function ht(t) {
            return ft.test(t)
        }
        function pt(t) {
            var e = t.charCodeAt(0), n;
            return e !== t.charCodeAt(t.length - 1) || 34 !== e && 39 !== e ? t : t.slice(1, -1)
        }
        function _t(t) {
            if (null == t)
                return "eof";
            var e;
            switch (t.charCodeAt(0)) {
            case 91:
            case 93:
            case 46:
            case 34:
            case 39:
                return t;
            case 95:
            case 36:
            case 45:
                return "ident";
            case 9:
            case 10:
            case 13:
            case 160:
            case 65279:
            case 8232:
            case 8233:
                return "ws"
            }
            return "ident"
        }
        function mt(t) {
            var e = t.trim();
            return ("0" !== t.charAt(0) || !isNaN(t)) && (ht(e) ? pt(e) : "*" + e)
        }
        function gt(t) {
            var e = [], n = -1, r = 0, a = 0, i, o, s, l, c, u, f, h = [];
            function p() {
                var e = t[n + 1];
                if (5 === r && "'" === e || 6 === r && '"' === e)
                    return n++,
                    s = "\\" + e,
                    h[0](),
                    !0
            }
            for (h[1] = function() {
                void 0 !== o && (e.push(o),
                o = void 0)
            }
            ,
            h[0] = function() {
                void 0 === o ? o = s : o += s
            }
            ,
            h[2] = function() {
                h[0](),
                a++
            }
            ,
            h[3] = function() {
                if (a > 0)
                    a--,
                    r = 4,
                    h[0]();
                else {
                    if (a = 0,
                    void 0 === o)
                        return !1;
                    if (!1 === (o = mt(o)))
                        return !1;
                    h[1]()
                }
            }
            ; null !== r; )
                if (n++,
                "\\" !== (i = t[n]) || !p()) {
                    if (l = _t(i),
                    8 === (c = (f = ut[r])[l] || f.else || 8))
                        return;
                    if (r = c[0],
                    (u = h[c[1]]) && (s = void 0 === (s = c[2]) ? i : s,
                    !1 === u()))
                        return;
                    if (7 === r)
                        return e
                }
        }
        var vt = function t() {
            this._cache = Object.create(null)
        };
        vt.prototype.parsePath = function t(e) {
            var n = this._cache[e];
            return n || (n = gt(e)) && (this._cache[e] = n),
            n || []
        }
        ,
        vt.prototype.getPathValue = function t(e, n) {
            if (!s(e))
                return null;
            var r = this.parsePath(n);
            if (0 === r.length)
                return null;
            for (var a = r.length, i = e, o = 0; o < a; ) {
                var l = i[r[o]];
                if (null == l)
                    return null;
                i = l,
                o++
            }
            return i
        }
        ;
        var bt = /<\/?[\w\s="/.':;#-\/]+>/, dt = /(?:@(?:\.[a-zA-Z]+)?:(?:[\w\-_|./]+|\([\w\-_:|./]+\)))/g, yt = /^@(?:\.([a-zA-Z]+))?:/, kt = /[()]/g, Ft = {
            upper: function(t) {
                return t.toLocaleUpperCase()
            },
            lower: function(t) {
                return t.toLocaleLowerCase()
            },
            capitalize: function(t) {
                return "" + t.charAt(0).toLocaleUpperCase() + t.substr(1)
            }
        }, wt = new G, $t = function t(e) {
            var n = this;
            void 0 === e && (e = {}),
            !S && "undefined" != typeof window && window.Vue && z(window.Vue);
            var r = e.locale || "en-US"
              , a = !1 !== e.fallbackLocale && (e.fallbackLocale || "en-US")
              , i = e.messages || {}
              , o = e.dateTimeFormats || e.datetimeFormats || {}
              , s = e.numberFormats || {};
            this._vm = null,
            this._formatter = e.formatter || wt,
            this._modifiers = e.modifiers || {},
            this._missing = e.missing || null,
            this._root = e.root || null,
            this._sync = void 0 === e.sync || !!e.sync,
            this._fallbackRoot = void 0 === e.fallbackRoot || !!e.fallbackRoot,
            this._fallbackRootWithEmptyString = void 0 === e.fallbackRootWithEmptyString || !!e.fallbackRootWithEmptyString,
            this._formatFallbackMessages = void 0 !== e.formatFallbackMessages && !!e.formatFallbackMessages,
            this._silentTranslationWarn = void 0 !== e.silentTranslationWarn && e.silentTranslationWarn,
            this._silentFallbackWarn = void 0 !== e.silentFallbackWarn && !!e.silentFallbackWarn,
            this._dateTimeFormatters = {},
            this._numberFormatters = {},
            this._path = new vt,
            this._dataListeners = new Set,
            this._componentInstanceCreatedListener = e.componentInstanceCreatedListener || null,
            this._preserveDirectiveContent = void 0 !== e.preserveDirectiveContent && !!e.preserveDirectiveContent,
            this.pluralizationRules = e.pluralizationRules || {},
            this._warnHtmlInMessage = e.warnHtmlInMessage || "off",
            this._postTranslation = e.postTranslation || null,
            this._escapeParameterHtml = e.escapeParameterHtml || !1,
            "__VUE_I18N_BRIDGE__"in e && (this.__VUE_I18N_BRIDGE__ = e.__VUE_I18N_BRIDGE__),
            this.getChoiceIndex = function(t, e) {
                var r = Object.getPrototypeOf(n), a;
                if (r && r.getChoiceIndex)
                    return r.getChoiceIndex.call(n, t, e);
                var i = function(t, e) {
                    return t = Math.abs(t),
                    2 === e ? t ? t > 1 ? 1 : 0 : 1 : t ? Math.min(t, 2) : 0
                };
                return n.locale in n.pluralizationRules ? n.pluralizationRules[n.locale].apply(n, [t, e]) : i(t, e)
            }
            ,
            this._exist = function(t, e) {
                return !(!t || !e) && (!p(n._path.getPathValue(t, e)) || !!t[e])
            }
            ,
            "warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || Object.keys(i).forEach((function(t) {
                n._checkLocaleMessage(t, n._warnHtmlInMessage, i[t])
            }
            )),
            this._initVM({
                locale: r,
                fallbackLocale: a,
                messages: i,
                dateTimeFormats: o,
                numberFormats: s
            })
        }, Mt = {
            vm: {
                configurable: !0
            },
            messages: {
                configurable: !0
            },
            dateTimeFormats: {
                configurable: !0
            },
            numberFormats: {
                configurable: !0
            },
            availableLocales: {
                configurable: !0
            },
            locale: {
                configurable: !0
            },
            fallbackLocale: {
                configurable: !0
            },
            formatFallbackMessages: {
                configurable: !0
            },
            missing: {
                configurable: !0
            },
            formatter: {
                configurable: !0
            },
            silentTranslationWarn: {
                configurable: !0
            },
            silentFallbackWarn: {
                configurable: !0
            },
            preserveDirectiveContent: {
                configurable: !0
            },
            warnHtmlInMessage: {
                configurable: !0
            },
            postTranslation: {
                configurable: !0
            },
            sync: {
                configurable: !0
            }
        }, Ct;
        $t.prototype._checkLocaleMessage = function t(e, n, r) {
            var s, l = function(t, e, n, r) {
                if (h(n))
                    Object.keys(n).forEach((function(a) {
                        var i = n[a];
                        h(i) ? (r.push(a),
                        r.push("."),
                        l(t, e, i, r),
                        r.pop(),
                        r.pop()) : (r.push(a),
                        l(t, e, i, r),
                        r.pop())
                    }
                    ));
                else if (o(n))
                    n.forEach((function(n, a) {
                        h(n) ? (r.push("[" + a + "]"),
                        r.push("."),
                        l(t, e, n, r),
                        r.pop(),
                        r.pop()) : (r.push("[" + a + "]"),
                        l(t, e, n, r),
                        r.pop())
                    }
                    ));
                else if (c(n)) {
                    var s;
                    if (bt.test(n)) {
                        var u = "Detected HTML in message '" + n + "' of keypath '" + r.join("") + "' at '" + e + "'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";
                        "warn" === t ? a(u) : "error" === t && i(u)
                    }
                }
            };
            l(n, e, r, [])
        }
        ,
        $t.prototype._initVM = function t(e) {
            var n = S.config.silent;
            S.config.silent = !0,
            this._vm = new S({
                data: e,
                __VUE18N__INSTANCE__: !0
            }),
            S.config.silent = n
        }
        ,
        $t.prototype.destroyVM = function t() {
            this._vm.$destroy()
        }
        ,
        $t.prototype.subscribeDataChanging = function t(e) {
            this._dataListeners.add(e)
        }
        ,
        $t.prototype.unsubscribeDataChanging = function t(e) {
            v(this._dataListeners, e)
        }
        ,
        $t.prototype.watchI18nData = function t() {
            var e = this;
            return this._vm.$watch("$data", (function() {
                for (var t = b(e._dataListeners), n = t.length; n--; )
                    S.nextTick((function() {
                        t[n] && t[n].$forceUpdate()
                    }
                    ))
            }
            ), {
                deep: !0
            })
        }
        ,
        $t.prototype.watchLocale = function t(e) {
            if (e) {
                if (!this.__VUE_I18N_BRIDGE__)
                    return null;
                var n = this
                  , r = this._vm;
                return this.vm.$watch("locale", (function(t) {
                    r.$set(r, "locale", t),
                    n.__VUE_I18N_BRIDGE__ && e && (e.locale.value = t),
                    r.$forceUpdate()
                }
                ), {
                    immediate: !0
                })
            }
            if (!this._sync || !this._root)
                return null;
            var a = this._vm;
            return this._root.$i18n.vm.$watch("locale", (function(t) {
                a.$set(a, "locale", t),
                a.$forceUpdate()
            }
            ), {
                immediate: !0
            })
        }
        ,
        $t.prototype.onComponentInstanceCreated = function t(e) {
            this._componentInstanceCreatedListener && this._componentInstanceCreatedListener(e, this)
        }
        ,
        Mt.vm.get = function() {
            return this._vm
        }
        ,
        Mt.messages.get = function() {
            return g(this._getMessages())
        }
        ,
        Mt.dateTimeFormats.get = function() {
            return g(this._getDateTimeFormats())
        }
        ,
        Mt.numberFormats.get = function() {
            return g(this._getNumberFormats())
        }
        ,
        Mt.availableLocales.get = function() {
            return Object.keys(this.messages).sort()
        }
        ,
        Mt.locale.get = function() {
            return this._vm.locale
        }
        ,
        Mt.locale.set = function(t) {
            this._vm.$set(this._vm, "locale", t)
        }
        ,
        Mt.fallbackLocale.get = function() {
            return this._vm.fallbackLocale
        }
        ,
        Mt.fallbackLocale.set = function(t) {
            this._localeChainCache = {},
            this._vm.$set(this._vm, "fallbackLocale", t)
        }
        ,
        Mt.formatFallbackMessages.get = function() {
            return this._formatFallbackMessages
        }
        ,
        Mt.formatFallbackMessages.set = function(t) {
            this._formatFallbackMessages = t
        }
        ,
        Mt.missing.get = function() {
            return this._missing
        }
        ,
        Mt.missing.set = function(t) {
            this._missing = t
        }
        ,
        Mt.formatter.get = function() {
            return this._formatter
        }
        ,
        Mt.formatter.set = function(t) {
            this._formatter = t
        }
        ,
        Mt.silentTranslationWarn.get = function() {
            return this._silentTranslationWarn
        }
        ,
        Mt.silentTranslationWarn.set = function(t) {
            this._silentTranslationWarn = t
        }
        ,
        Mt.silentFallbackWarn.get = function() {
            return this._silentFallbackWarn
        }
        ,
        Mt.silentFallbackWarn.set = function(t) {
            this._silentFallbackWarn = t
        }
        ,
        Mt.preserveDirectiveContent.get = function() {
            return this._preserveDirectiveContent
        }
        ,
        Mt.preserveDirectiveContent.set = function(t) {
            this._preserveDirectiveContent = t
        }
        ,
        Mt.warnHtmlInMessage.get = function() {
            return this._warnHtmlInMessage
        }
        ,
        Mt.warnHtmlInMessage.set = function(t) {
            var e = this
              , n = this._warnHtmlInMessage;
            if (this._warnHtmlInMessage = t,
            n !== t && ("warn" === t || "error" === t)) {
                var r = this._getMessages();
                Object.keys(r).forEach((function(t) {
                    e._checkLocaleMessage(t, e._warnHtmlInMessage, r[t])
                }
                ))
            }
        }
        ,
        Mt.postTranslation.get = function() {
            return this._postTranslation
        }
        ,
        Mt.postTranslation.set = function(t) {
            this._postTranslation = t
        }
        ,
        Mt.sync.get = function() {
            return this._sync
        }
        ,
        Mt.sync.set = function(t) {
            this._sync = t
        }
        ,
        $t.prototype._getMessages = function t() {
            return this._vm.messages
        }
        ,
        $t.prototype._getDateTimeFormats = function t() {
            return this._vm.dateTimeFormats
        }
        ,
        $t.prototype._getNumberFormats = function t() {
            return this._vm.numberFormats
        }
        ,
        $t.prototype._warnDefault = function t(e, n, r, a, i, o) {
            if (!p(r))
                return r;
            if (this._missing) {
                var s = this._missing.apply(null, [e, n, a, i]);
                if (c(s))
                    return s
            } else
                0;
            if (this._formatFallbackMessages) {
                var l = m.apply(void 0, i);
                return this._render(n, o, l.params, n)
            }
            return n
        }
        ,
        $t.prototype._isFallbackRoot = function t(e) {
            return (this._fallbackRootWithEmptyString ? !e : p(e)) && !p(this._root) && this._fallbackRoot
        }
        ,
        $t.prototype._isSilentFallbackWarn = function t(e) {
            return this._silentFallbackWarn instanceof RegExp ? this._silentFallbackWarn.test(e) : this._silentFallbackWarn
        }
        ,
        $t.prototype._isSilentFallback = function t(e, n) {
            return this._isSilentFallbackWarn(n) && (this._isFallbackRoot() || e !== this.fallbackLocale)
        }
        ,
        $t.prototype._isSilentTranslationWarn = function t(e) {
            return this._silentTranslationWarn instanceof RegExp ? this._silentTranslationWarn.test(e) : this._silentTranslationWarn
        }
        ,
        $t.prototype._interpolate = function t(e, n, r, a, i, s, l) {
            if (!n)
                return null;
            var u = this._path.getPathValue(n, r), f;
            if (o(u) || h(u))
                return u;
            if (p(u)) {
                if (!h(n))
                    return null;
                if (!c(f = n[r]) && !_(f))
                    return null
            } else {
                if (!c(u) && !_(u))
                    return null;
                f = u
            }
            return c(f) && (f.indexOf("@:") >= 0 || f.indexOf("@.") >= 0) && (f = this._link(e, n, f, a, "raw", s, l)),
            this._render(f, i, s, r)
        }
        ,
        $t.prototype._link = function t(e, n, r, a, i, s, l) {
            var c = r
              , u = c.match(dt);
            for (var f in u)
                if (u.hasOwnProperty(f)) {
                    var h = u[f]
                      , p = h.match(yt)
                      , _ = p[0]
                      , m = p[1]
                      , g = h.replace(_, "").replace(kt, "");
                    if (d(l, g))
                        return c;
                    l.push(g);
                    var v = this._interpolate(e, n, g, a, "raw" === i ? "string" : i, "raw" === i ? void 0 : s, l);
                    if (this._isFallbackRoot(v)) {
                        if (!this._root)
                            throw Error("unexpected error");
                        var b = this._root.$i18n;
                        v = b._translate(b._getMessages(), b.locale, b.fallbackLocale, g, a, i, s)
                    }
                    v = this._warnDefault(e, g, v, a, o(s) ? s : [s], i),
                    this._modifiers.hasOwnProperty(m) ? v = this._modifiers[m](v) : Ft.hasOwnProperty(m) && (v = Ft[m](v)),
                    l.pop(),
                    c = v ? c.replace(h, v) : c
                }
            return c
        }
        ,
        $t.prototype._createMessageContext = function t(e, n, r, a) {
            var i = this
              , l = o(e) ? e : []
              , c = s(e) ? e : {}
              , u = function(t) {
                return l[t]
            }
              , f = function(t) {
                return c[t]
            }
              , h = this._getMessages()
              , p = this.locale;
            return {
                list: u,
                named: f,
                values: e,
                formatter: n,
                path: r,
                messages: h,
                locale: p,
                linked: function(t) {
                    return i._interpolate(p, h[p] || {}, t, null, a, void 0, [t])
                }
            }
        }
        ,
        $t.prototype._render = function t(e, n, r, a) {
            if (_(e))
                return e(this._createMessageContext(r, this._formatter || wt, a, n));
            var i = this._formatter.interpolate(e, r, a);
            return i || (i = wt.interpolate(e, r, a)),
            "string" !== n || c(i) ? i : i.join("")
        }
        ,
        $t.prototype._appendItemToChain = function t(e, n, r) {
            var a = !1;
            return d(e, n) || (a = !0,
            n && (a = "!" !== n[n.length - 1],
            n = n.replace(/!/g, ""),
            e.push(n),
            r && r[n] && (a = r[n]))),
            a
        }
        ,
        $t.prototype._appendLocaleToChain = function t(e, n, r) {
            var a, i = n.split("-");
            do {
                var o = i.join("-");
                a = this._appendItemToChain(e, o, r),
                i.splice(-1, 1)
            } while (i.length && !0 === a);
            return a
        }
        ,
        $t.prototype._appendBlockToChain = function t(e, n, r) {
            for (var a = !0, i = 0; i < n.length && l(a); i++) {
                var o = n[i];
                c(o) && (a = this._appendLocaleToChain(e, o, r))
            }
            return a
        }
        ,
        $t.prototype._getLocaleChain = function t(e, n) {
            if ("" === e)
                return [];
            this._localeChainCache || (this._localeChainCache = {});
            var r = this._localeChainCache[e];
            if (!r) {
                n || (n = this.fallbackLocale),
                r = [];
                for (var a = [e], i; o(a); )
                    a = this._appendBlockToChain(r, a, n);
                (a = c(i = o(n) ? n : s(n) ? n.default ? n.default : null : n) ? [i] : i) && this._appendBlockToChain(r, a, null),
                this._localeChainCache[e] = r
            }
            return r
        }
        ,
        $t.prototype._translate = function t(e, n, r, a, i, o, s) {
            for (var l = this._getLocaleChain(n, r), c, u = 0; u < l.length; u++) {
                var f = l[u];
                if (!p(c = this._interpolate(f, e[f], a, i, o, s, [a])))
                    return c
            }
            return null
        }
        ,
        $t.prototype._t = function t(e, n, r, a) {
            for (var i, o = [], s = arguments.length - 4; s-- > 0; )
                o[s] = arguments[s + 4];
            if (!e)
                return "";
            var l = m.apply(void 0, o);
            this._escapeParameterHtml && (l.params = M(l.params));
            var c = l.locale || n
              , u = this._translate(r, c, this.fallbackLocale, e, a, "string", l.params);
            if (this._isFallbackRoot(u)) {
                if (!this._root)
                    throw Error("unexpected error");
                return (i = this._root).$t.apply(i, [e].concat(o))
            }
            return u = this._warnDefault(c, e, u, a, o, "string"),
            this._postTranslation && null != u && (u = this._postTranslation(u, e)),
            u
        }
        ,
        $t.prototype.t = function t(e) {
            for (var n, r = [], a = arguments.length - 1; a-- > 0; )
                r[a] = arguments[a + 1];
            return (n = this)._t.apply(n, [e, this.locale, this._getMessages(), null].concat(r))
        }
        ,
        $t.prototype._i = function t(e, n, r, a, i) {
            var o = this._translate(r, n, this.fallbackLocale, e, a, "raw", i);
            if (this._isFallbackRoot(o)) {
                if (!this._root)
                    throw Error("unexpected error");
                return this._root.$i18n.i(e, n, i)
            }
            return this._warnDefault(n, e, o, a, [i], "raw")
        }
        ,
        $t.prototype.i = function t(e, n, r) {
            return e ? (c(n) || (n = this.locale),
            this._i(e, n, this._getMessages(), null, r)) : ""
        }
        ,
        $t.prototype._tc = function t(e, n, r, a, i) {
            for (var o, s = [], l = arguments.length - 5; l-- > 0; )
                s[l] = arguments[l + 5];
            if (!e)
                return "";
            void 0 === i && (i = 1);
            var c = {
                count: i,
                n: i
            }
              , u = m.apply(void 0, s);
            return u.params = Object.assign(c, u.params),
            s = null === u.locale ? [u.params] : [u.locale, u.params],
            this.fetchChoice((o = this)._t.apply(o, [e, n, r, a].concat(s)), i)
        }
        ,
        $t.prototype.fetchChoice = function t(e, n) {
            if (!e || !c(e))
                return null;
            var r = e.split("|");
            return r[n = this.getChoiceIndex(n, r.length)] ? r[n].trim() : e
        }
        ,
        $t.prototype.tc = function t(e, n) {
            for (var r, a = [], i = arguments.length - 2; i-- > 0; )
                a[i] = arguments[i + 2];
            return (r = this)._tc.apply(r, [e, this.locale, this._getMessages(), null, n].concat(a))
        }
        ,
        $t.prototype._te = function t(e, n, r) {
            for (var a = [], i = arguments.length - 3; i-- > 0; )
                a[i] = arguments[i + 3];
            var o = m.apply(void 0, a).locale || n;
            return this._exist(r[o], e)
        }
        ,
        $t.prototype.te = function t(e, n) {
            return this._te(e, this.locale, this._getMessages(), n)
        }
        ,
        $t.prototype.getLocaleMessage = function t(e) {
            return g(this._vm.messages[e] || {})
        }
        ,
        $t.prototype.setLocaleMessage = function t(e, n) {
            "warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || this._checkLocaleMessage(e, this._warnHtmlInMessage, n),
            this._vm.$set(this._vm.messages, e, n)
        }
        ,
        $t.prototype.mergeLocaleMessage = function t(e, n) {
            "warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || this._checkLocaleMessage(e, this._warnHtmlInMessage, n),
            this._vm.$set(this._vm.messages, e, F(void 0 !== this._vm.messages[e] && Object.keys(this._vm.messages[e]).length ? Object.assign({}, this._vm.messages[e]) : {}, n))
        }
        ,
        $t.prototype.getDateTimeFormat = function t(e) {
            return g(this._vm.dateTimeFormats[e] || {})
        }
        ,
        $t.prototype.setDateTimeFormat = function t(e, n) {
            this._vm.$set(this._vm.dateTimeFormats, e, n),
            this._clearDateTimeFormat(e, n)
        }
        ,
        $t.prototype.mergeDateTimeFormat = function t(e, n) {
            this._vm.$set(this._vm.dateTimeFormats, e, F(this._vm.dateTimeFormats[e] || {}, n)),
            this._clearDateTimeFormat(e, n)
        }
        ,
        $t.prototype._clearDateTimeFormat = function t(e, n) {
            for (var r in n) {
                var a = e + "__" + r;
                this._dateTimeFormatters.hasOwnProperty(a) && delete this._dateTimeFormatters[a]
            }
        }
        ,
        $t.prototype._localizeDateTime = function t(e, n, r, a, i, o) {
            for (var s = n, l = a[s], c = this._getLocaleChain(n, r), u = 0; u < c.length; u++) {
                var f = s
                  , h = c[u];
                if (s = h,
                !p(l = a[h]) && !p(l[i]))
                    break
            }
            if (p(l) || p(l[i]))
                return null;
            var _ = l[i], m;
            if (o)
                m = new Intl.DateTimeFormat(s,Object.assign({}, _, o));
            else {
                var g = s + "__" + i;
                (m = this._dateTimeFormatters[g]) || (m = this._dateTimeFormatters[g] = new Intl.DateTimeFormat(s,_))
            }
            return m.format(e)
        }
        ,
        $t.prototype._d = function t(e, n, r, a) {
            var i;
            if (!r)
                return (a ? new Intl.DateTimeFormat(n,a) : new Intl.DateTimeFormat(n)).format(e);
            var o = this._localizeDateTime(e, n, this.fallbackLocale, this._getDateTimeFormats(), r, a);
            if (this._isFallbackRoot(o)) {
                if (!this._root)
                    throw Error("unexpected error");
                return this._root.$i18n.d(e, r, n)
            }
            return o || ""
        }
        ,
        $t.prototype.d = function t(e) {
            for (var n = [], a = arguments.length - 1; a-- > 0; )
                n[a] = arguments[a + 1];
            var i = this.locale
              , o = null
              , l = null;
            return 1 === n.length ? (c(n[0]) ? o = n[0] : s(n[0]) && (n[0].locale && (i = n[0].locale),
            n[0].key && (o = n[0].key)),
            l = Object.keys(n[0]).reduce((function(t, e) {
                var a;
                return d(r, e) ? Object.assign({}, t, ((a = {})[e] = n[0][e],
                a)) : t
            }
            ), null)) : 2 === n.length && (c(n[0]) && (o = n[0]),
            c(n[1]) && (i = n[1])),
            this._d(e, i, o, l)
        }
        ,
        $t.prototype.getNumberFormat = function t(e) {
            return g(this._vm.numberFormats[e] || {})
        }
        ,
        $t.prototype.setNumberFormat = function t(e, n) {
            this._vm.$set(this._vm.numberFormats, e, n),
            this._clearNumberFormat(e, n)
        }
        ,
        $t.prototype.mergeNumberFormat = function t(e, n) {
            this._vm.$set(this._vm.numberFormats, e, F(this._vm.numberFormats[e] || {}, n)),
            this._clearNumberFormat(e, n)
        }
        ,
        $t.prototype._clearNumberFormat = function t(e, n) {
            for (var r in n) {
                var a = e + "__" + r;
                this._numberFormatters.hasOwnProperty(a) && delete this._numberFormatters[a]
            }
        }
        ,
        $t.prototype._getNumberFormatter = function t(e, n, r, a, i, o) {
            for (var s = n, l = a[s], c = this._getLocaleChain(n, r), u = 0; u < c.length; u++) {
                var f = s
                  , h = c[u];
                if (s = h,
                !p(l = a[h]) && !p(l[i]))
                    break
            }
            if (p(l) || p(l[i]))
                return null;
            var _ = l[i], m;
            if (o)
                m = new Intl.NumberFormat(s,Object.assign({}, _, o));
            else {
                var g = s + "__" + i;
                (m = this._numberFormatters[g]) || (m = this._numberFormatters[g] = new Intl.NumberFormat(s,_))
            }
            return m
        }
        ,
        $t.prototype._n = function t(e, n, r, a) {
            if (!$t.availabilities.numberFormat)
                return "";
            var i;
            if (!r)
                return (a ? new Intl.NumberFormat(n,a) : new Intl.NumberFormat(n)).format(e);
            var o = this._getNumberFormatter(e, n, this.fallbackLocale, this._getNumberFormats(), r, a)
              , s = o && o.format(e);
            if (this._isFallbackRoot(s)) {
                if (!this._root)
                    throw Error("unexpected error");
                return this._root.$i18n.n(e, Object.assign({}, {
                    key: r,
                    locale: n
                }, a))
            }
            return s || ""
        }
        ,
        $t.prototype.n = function t(e) {
            for (var r = [], a = arguments.length - 1; a-- > 0; )
                r[a] = arguments[a + 1];
            var i = this.locale
              , o = null
              , l = null;
            return 1 === r.length ? c(r[0]) ? o = r[0] : s(r[0]) && (r[0].locale && (i = r[0].locale),
            r[0].key && (o = r[0].key),
            l = Object.keys(r[0]).reduce((function(t, e) {
                var a;
                return d(n, e) ? Object.assign({}, t, ((a = {})[e] = r[0][e],
                a)) : t
            }
            ), null)) : 2 === r.length && (c(r[0]) && (o = r[0]),
            c(r[1]) && (i = r[1])),
            this._n(e, i, o, l)
        }
        ,
        $t.prototype._ntp = function t(e, n, r, a) {
            if (!$t.availabilities.numberFormat)
                return [];
            var i;
            if (!r)
                return (a ? new Intl.NumberFormat(n,a) : new Intl.NumberFormat(n)).formatToParts(e);
            var o = this._getNumberFormatter(e, n, this.fallbackLocale, this._getNumberFormats(), r, a)
              , s = o && o.formatToParts(e);
            if (this._isFallbackRoot(s)) {
                if (!this._root)
                    throw Error("unexpected error");
                return this._root.$i18n._ntp(e, n, r, a)
            }
            return s || []
        }
        ,
        Object.defineProperties($t.prototype, Mt),
        Object.defineProperty($t, "availabilities", {
            get: function t() {
                if (!Ct) {
                    var e = "undefined" != typeof Intl;
                    Ct = {
                        dateTimeFormat: e && void 0 !== Intl.DateTimeFormat,
                        numberFormat: e && void 0 !== Intl.NumberFormat
                    }
                }
                return Ct
            }
        }),
        $t.install = z,
        $t.version = "8.28.2",
        e.A = $t
    }
}]);
